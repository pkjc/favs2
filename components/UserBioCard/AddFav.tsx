import { Autocomplete, Button, Grid } from "@mantine/core";
import { IconHeart } from "@tabler/icons";
import { useState } from 'react';

export function AddFav() {
  const [value, setValue] = useState('');
  const data =
    value.trim().length > 0 && !value.includes('@')
      ? ['gmail.com', 'outlook.com', 'yahoo.com'].map((provider) => `${value}@${provider}`)
      : [];
  return (
    <Grid mt="md" gutter="sm" grow>
      <Grid.Col span={8}>
        <Autocomplete
          variant="default"
          autoFocus
          placeholder="What is your fav movie/show?"
          data={data}
          value={value}
          onChange={setValue}
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
