import {
  Card,
  Image,
  Text,
  Group,
  Badge,
  createStyles,
  Center,
  Button
} from "@mantine/core";
import {
  IconGasStation,
  IconGauge,
  IconManualGearbox,
  IconUsers,
  IconMovie,
  IconHeartPlus
} from "@tabler/icons";
import { ActionIcon } from '@mantine/core';
import { getGenreById } from "../../utils/movieTvUtils";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white
  },

  imageSection: {
    padding: theme.spacing.sm,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
    // borderBottom: `1px solid ${
    //   theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    // }`
  },

  label: {
    marginBottom: theme.spacing.xs,
    lineHeight: 1,
    fontWeight: 700,
    fontSize: theme.fontSizes.xs,
    letterSpacing: -0.25,
    textTransform: "uppercase"
  },

  section: {
    padding: theme.spacing.xs,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`
  },

  icon: {
    marginRight: 5,
    color:
      theme.colorScheme === "dark" ? theme.colors.dark[2] : theme.colors.gray[5]
  }
}));

const mockdata = [
  { label: "4 passengers", icon: IconUsers },
  { label: "100 km/h in 4 seconds", icon: IconGauge },
  { label: "Automatic gearbox", icon: IconManualGearbox },
  { label: "Electric", icon: IconGasStation }
];

export function FavItem3({
  image,
  genres,
  title,
  release_date,
  ratings,
  poster_path
}: any) {
  const { classes } = useStyles();
  const features = mockdata.map((feature) => (
    <Center key={feature.label}>
      <feature.icon size={18} className={classes.icon} stroke={1.5} />
      <Text size="xs">{feature.label}</Text>
    </Center>
  ));

  return (
    <Card withBorder className={classes.card}>
      <Card.Section className={classes.imageSection}>
        <Image
          src={`https://image.tmdb.org/t/p/w200${poster_path}`}
          alt="Tesla Model S"
          radius="lg"
        />
      </Card.Section>

      <Group position="apart">
        <div>
          <Text weight={500}>
            {title.length > 20 ? title.slice(0, 20) + "..." : title}
          </Text>
          <Text size="xs" color="dimmed">
            {release_date ? release_date.slice(0, 4) : 2000} . {genres && genres.map((genreId : Number) => getGenreById(genreId))}
          </Text>
        </div>
        {/* <Badge variant="outline">Comedy</Badge>
        <Badge variant="outline">Thriller</Badge> */}
      </Group>

      {/* <Card.Section className={classes.section} mt="md">
        <Text size="sm" color="dimmed" className={classes.label}>
          Basic configuration
        </Text>

        <Group spacing={8} mb={-8}>
          {features}
        </Group>
      </Card.Section> */}

      <Card.Section className={classes.section} mt="sm">
        <Group spacing={0}>
          <div>
            {/* <Text size="xl" weight={700} sx={{ lineHeight: 1 }}>
              $168.00
            </Text>
            <Text
              size="sm"
              color="dimmed"
              weight={500}
              sx={{ lineHeight: 1 }}
              mt={3}
            >
              per day
            </Text> */}
          </div>

          {/* <Button mr="sm" variant="default" size="xs" style={{ flex: 1 }}> */}
              <ActionIcon  variant="default" mr="sm" size="xs" style={{ flex: 1 }} p={"md"} component="a" target="_blank" href="https://www.youtube.com/watch?v=5e382d1b4ca676001453826d">
                <IconMovie size={18} />
              </ActionIcon>
          {/* </Button> */}
          {/* <Button role="img" variant="default" size="xs" style={{ flex: 1 }}> */}
            <ActionIcon variant="default" color="red" size="xs" style={{ flex: 1 }} p={"md"}>
                <IconHeartPlus size={18} />
            </ActionIcon>
          {/* </Button> */}
        </Group>
      </Card.Section>
    </Card>
  );
}
