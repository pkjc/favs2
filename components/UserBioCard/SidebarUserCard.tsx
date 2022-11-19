import {
  Image,
  Text,
  SimpleGrid,
  createStyles,
  Divider,
  Button
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  wrapper: {},

  item: {
    display: "flex"
  },

  itemIcon: {
    padding: theme.spacing.xs,
    marginRight: theme.spacing.md
  },

  itemTitle: {
    marginLeft: theme.spacing.xs
  },

  itemDesc: {
    marginLeft: theme.spacing.xs
  },

  supTitle: {
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: 800,
    fontSize: theme.fontSizes.sm,
    color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
      .color,
    letterSpacing: 0.5
  },

  title: {
    lineHeight: 1,
    textAlign: "center",
    marginTop: theme.spacing.xl
  },

  description: {
    textAlign: "center",
    marginTop: theme.spacing.xs
  },

  highlight: {
    backgroundColor: theme.fn.variant({
      variant: "light",
      color: theme.primaryColor
    }).background,
    padding: 5,
    paddingTop: 0,
    borderRadius: theme.radius.sm,
    display: "inline-block",
    color: theme.colorScheme === "dark" ? theme.white : "inherit"
  }
}));

interface FeatureImage {
  image: string;
  title: React.ReactNode;
  description: React.ReactNode;
}

interface FeaturesImagesProps {
  supTitle: React.ReactNode;
  description: React.ReactNode;
  data: FeatureImage[];
}

export function SidebarUserCard({
  supTitle,
  description,
  data
}: FeaturesImagesProps) {
  const { classes } = useStyles();

  const items = data.map((item) => (
    <>
      <div className={classes.item} key={item.image}>
        <Image src={item.image} />
        <div>
          <Text weight={700} size="sm" className={classes.itemTitle}>
            {item.title}
          </Text>
          <Text color="dimmed" size="xs" className={classes.itemDesc}>
            {item.description}
          </Text>
          <Button variant="light" size="xs" compact ml="xs" mt="xs">
            Add to Favs
          </Button>
        </div>
      </div>
      <Divider />
    </>
  ));

  return <SimpleGrid cols={1}>{items}</SimpleGrid>;
}
