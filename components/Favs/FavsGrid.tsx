import { SimpleGrid } from "@mantine/core";
import { FavItem2 } from "./FavItem2";
import { FavItem3 } from "./FavItem3";

export function FavsGrid({ favsList }) {
  console.log("favsList: ", favsList);
  return (
    <SimpleGrid
      spacing="lg"
      breakpoints={[
        { maxWidth: "sm", cols: 2 },
        { minWidth: "sm", cols: 3 }
      ]}
    >
      {favsList.map((fav: any) => (
        <FavItem3 {...fav} key={fav.title}/>
      ))}
    </SimpleGrid>
  );
}
