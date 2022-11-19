import { Autocomplete, Button, Grid } from "@mantine/core";
import { IconHeart } from "@tabler/icons";
export function AddFav() {
  return (
    <Grid mt="md" gutter="sm" grow>
      <Grid.Col span={8}>
        <Autocomplete
          variant="default"
          autoFocus
          placeholder="What is your fav movie/show?"
          data={["React", "Angular", "Svelte", "Vue"]}
        />
      </Grid.Col>
      <Grid.Col span={4}>
        <Button
          leftIcon={<IconHeart size={16} />}
          variant="gradient"
          fullWidth
          gradient={{ from: "pink", to: "orange" }}
        >
          Add favorite
        </Button>
      </Grid.Col>
    </Grid>
  );
}
