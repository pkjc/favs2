import {
  createStyles,
  Card,
  Image,
  Text,
  Title,
  Group,
  Box,
  ActionIcon
} from "@mantine/core";
import { Button } from "@mantine/core";
import { IconPlayerPlay, IconHeart } from "@tabler/icons";
const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white
  },

  title: {
    // fontWeight: 700
    // fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    // lineHeight: 1.3
  },

  body: {
    paddingLeft: theme.spacing.md
  },

  rating: {
    position: "absolute",
    bottom: theme.spacing.lg,
    right: theme.spacing.md,
    pointerEvents: "none",
    zIndex: theme.spacing.xs,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[5]
          : theme.colors.gray[1]
    })
  }
}));

// year, genres, watch trailer, add to my favs, imdb rating, tomatoes rating, director/creator,

// interface ArticleCardVerticalProps {
//   image: string;
//   category: string;
//   title: string;
//   date: string;
//   author: {
//     name: string;
//     avatar: string;
//   };
// }

export function FavItem2({ image, genres, title, releaseYear, ratings }: any) {
  const { classes, theme } = useStyles();
  return (
    <Card withBorder p={0} className={classes.card}>
      <Group noWrap spacing="xs">
        <Box>
          <ActionIcon className={classes.rating}>
            <IconHeart size={14} color={theme.colors.red[6]} />
          </ActionIcon>
          {/* <Button
            leftIcon={<IconHeartPlus size={14} />}
            size="xs"
            className={classes.rating}
          ></Button> */}
          {/* <Badge
            className={classes.rating}
            variant="gradient"
            gradient={{ from: "yellow", to: "red" }}
          >
            <IconHeartPlus size={14} />
          </Badge> */}
          <Image src={image} height={160} width={135} />
        </Box>
        <div className={classes.body}>
          <Group noWrap spacing="xs" mb={0}>
            <Text size="xs" color="dimmed" mb={0}>
              {releaseYear}
            </Text>
            <Text size="xs" color="dimmed" mb={0}>
              •
            </Text>
            <Text
              transform="uppercase"
              weight={700}
              color="dimmed"
              size="xs"
              mb={0}
            >
              {genres?.join(", ")}
            </Text>
          </Group>
          <Title order={4} className={classes.title} mt="xs" mb="sm">
            {title.substr(0, 40) + (title.length > 40 ? "\u2026" : "")}
          </Title>
          <Group noWrap spacing="xs">
            <Text size="xs">IMDB: {ratings?.imdb}</Text>
            <Text size="xs" color="dimmed">
              •
            </Text>
            <Text size="xs">🍅 {ratings?.rottenTomatoes}</Text>
          </Group>

          <Group mt="md" noWrap spacing="xs">
            <Button
              leftIcon={<IconPlayerPlay size={14} />}
              variant="subtle"
              size="xs"
            >
              Watch Trailer
            </Button>
            {/* <Button
              leftIcon={<IconHeartPlus size={14} />}
              variant="light"
              size="xs"
            >
              Save to Favs
            </Button> */}
          </Group>
        </div>
      </Group>
    </Card>
  );
}
