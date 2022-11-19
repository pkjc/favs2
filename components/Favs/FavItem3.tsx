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
  IconUsers
} from "@tabler/icons";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white
  },

  imageSection: {
    padding: theme.spacing.xs,
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
    padding: theme.spacing.sm,
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
  releaseYear,
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
            1990 . Comedy, Thriller
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

          <Button mr="sm" variant="default" size="xs" style={{ flex: 1 }}>
            <span role="img" style={{ fontSize: 16 }}>
              🎬
            </span>
          </Button>
          <Button role="img" variant="default" size="xs" style={{ flex: 1 }}>
            <span role="img" style={{ fontSize: 16 }}>
              ❤️
            </span>
          </Button>
        </Group>
      </Card.Section>
    </Card>
  );
}
