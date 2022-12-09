import { Autocomplete, Button, Grid, ScrollArea } from "@mantine/core";
import { IconHeart } from "@tabler/icons";
import { useState, useEffect, forwardRef } from 'react';
import { Group, Avatar, Text, MantineColor, SelectItemProps } from '@mantine/core';

export function AddFav() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selected, setSelected] = useState({});
  const [options, setOptions] = useState([]);
  
  interface MediaType {
    movie: string;
    tv: string;
  }

  const groupName : MediaType = {
    movie : "Movies",
    tv: "TV Shows"
  }

  useEffect(() => {
    async function getMoviesAndTvByKeyword(searchQuery : string) {
      const TMDB_SEARCH_URL = `https://api.themoviedb.org/3/search/multi?&api_key=5f4fbd1cb92deca8b31627ac4d56951f&page=1&include_adult=false&query=${searchQuery}`;
      const resp = await fetch(TMDB_SEARCH_URL);
      const searchResults = await resp.json();
      return searchResults;
    }
    
    if(JSON.stringify(selected) === '{}' && searchQuery && searchQuery.length > 2) {
      console.log("Input changed. Calling API");
      getMoviesAndTvByKeyword(searchQuery).then((moviesOrTv) => {
        if (!moviesOrTv) return;
        let ops = moviesOrTv.results.map((item : any) => {
          if(item && (item.media_type === 'movie' || item.media_type === 'tv')){
            return {...item, value: (item.name || item.title || "Emtpy"), group: groupName[item.media_type as keyof MediaType]};
          }
        });
        ops = ops.filter( Boolean );
        console.log("ops: ", ops);
        setOptions(ops);
      });
    }
  }, [searchQuery]);

  function addFav(){
    console.log("selected: ", selected);
    setSelected({});
    setSearchQuery('');
  }

  function handleItemSelected(item : any){
    setOptions([]);
    setSelected(item);
  }

  interface ItemProps extends SelectItemProps {
    color: MantineColor;
    release_date: string;
    poster_path: string;
    vote_average: string;
  }
  
  const AutoCompleteItem = forwardRef<HTMLDivElement, ItemProps>(
    ({ release_date, value, poster_path, vote_average, ...others }: ItemProps, ref) => (
      <div ref={ref} {...others} key={release_date}>
        <Group>
          <Avatar variant="outline" radius="xs" size="lg" src={`https://image.tmdb.org/t/p/w200${poster_path}`} />
          <div>
            <Text>{value}</Text>
            <Text size="xs" color="dimmed">
              released: {release_date && release_date.slice(0, 4)} / imdb: {vote_average} / 10
            </Text>
          </div>
        </Group>
      </div>
    )
  );

  return (
    <Grid mt="md" gutter="sm" grow>
      <Grid.Col span={8}>
        <Autocomplete
          variant="default"
          autoFocus
          itemComponent={AutoCompleteItem}
          placeholder="Add your fav movies/shows"
          data={options}
          value={searchQuery}
          onChange={setSearchQuery}
          zIndex={5} 
          maxDropdownHeight={250}
          dropdownComponent={ScrollArea}
          onItemSubmit={handleItemSelected}
          limit={20}
        />
      </Grid.Col>
      <Grid.Col span={4}>
        <Button
          leftIcon={<IconHeart size={16} />}
          variant="gradient"
          fullWidth
          gradient={{ from: "pink", to: "orange" }}
          onClick={addFav}
        >
          Add favorite
        </Button>
      </Grid.Col>
    </Grid>
  );
}
function lookUpGroupName(media_type: any) {
  
}

