import { createStyles, Paper, Text, Title, Group } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  card: {
    height: 220,
    //width: 89,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    // backgroundSize: "cover",
    backgroundPosition: "center"
  },

  title: {
    color: theme.white,
    marginTop: theme.spacing.xs
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: "uppercase"
  }
}));

interface MovieCardImageProps {
  image: string;
  title: string;
  category: string;
  poster_path: string;
}

export function MovieItem({
  image,
  title,
  category,
  poster_path
}: MovieCardImageProps) {
  const { classes } = useStyles();

  return (
    <Paper
      p="xl"
      sx={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w200${poster_path})`
      }}
      className={classes.card}
    >
      <div>
        <Group>
          <Text className={classes.category} size="xs">
            {category}
          </Text>
          <Text className={classes.category} size="xs">
            1990
          </Text>
        </Group>
        <Title order={6} className={classes.title}>
          {title}
        </Title>
      </div>
    </Paper>
  );
}
