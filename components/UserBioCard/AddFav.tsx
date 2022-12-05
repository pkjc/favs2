import { Autocomplete, Button, Grid } from "@mantine/core";
import { IconHeart } from "@tabler/icons";
import { useState, useEffect } from 'react';

export function AddFav() {
  const [searchQuery, setSearchQuery] = useState('');
  const [options, setOptions] = useState([]);
  
  useEffect(() => {
    async function getMoviesByKeyword(searchQuery : string) {
      const TMDB_SEARCH_URL = `https://api.themoviedb.org/3/search/movie?&api_key=5f4fbd1cb92deca8b31627ac4d56951f&query=${searchQuery}`;
      const resp = await fetch(TMDB_SEARCH_URL);
      const searchResults = await resp.json();
      return searchResults;
    }
    if(searchQuery && searchQuery.length > 3) {
      console.log("Input changed. Calling API");

      getMoviesByKeyword(searchQuery).then((movies) => {
        const ops = movies.results.map((obj : any) => {
          return {...obj, value: obj.title};
        });
        console.log("ops: ", ops);
        setOptions(ops);
      });

    }
  }, [searchQuery]);

  function addFav(){
    console.log("searchQuery: ", searchQuery);
  }

  return (
    <Grid mt="md" gutter="sm" grow>
      <Grid.Col span={8}>
        <Autocomplete
          variant="default"
          autoFocus
          placeholder="What is your fav movie/show?"
          data={options}
          value={searchQuery}
          onChange={setSearchQuery}
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
