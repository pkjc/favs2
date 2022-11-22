import {
  createStyles,
  Menu,
  Center,
  Header,
  Container,
  Group,
  Button,
  Burger,
  Text
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconChevronDown } from "@tabler/icons";
const HEADER_HEIGHT = 50;

const useStyles = createStyles((theme) => ({
  inner: {
    height: HEADER_HEIGHT,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none"
    }
  },

  burger: {
    display: "none",
    [theme.fn.largerThan("sm")]: {
      display: "none"
    }
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0]
    }
  },

  linkLabel: {
    marginRight: 5
  }
}));

interface SimpleNavbarProps {
  links: {
    link: string;
    label: string;
    links: { link: string; label: string }[];
  }[];
}

export function SimpleNavbar({ links }: SimpleNavbarProps) {
  const { classes } = useStyles();
  const [opened, { toggle }] = useDisclosure(false);
  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>{item.label}</Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu key={link.label} trigger="hover" exitTransitionDuration={0}>
          <Menu.Target>
            <a
              href={link.link}
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size={12} stroke={1.5} />
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </a>
    );
  });

  return (
    <Header
      height={HEADER_HEIGHT}
      sx={{ borderBottom: 0 }}
      mb={"sm"}
      px={"sm"}
      mt={10}
    >
      <Container className={classes.inner} size="sm">
        <Group>
          <Burger
            opened={opened}
            onClick={toggle}
            className={classes.burger}
            size="sm"
          />
          <Text
            variant="gradient"
            gradient={{ from: "pink", to: "orange", deg: 45 }}
            sx={{ fontFamily: "Greycliff CF, sans-serif" }}
            size="lg"
            weight="bold"
          >
            favs.
          </Text>
        </Group>
        {/* <Group spacing={5} className={classes.links}>
          {items}
        </Group> */}
        <Button size="xs" uppercase>Get your favs page</Button>
      </Container>
    </Header>
  );
}
