import { useState } from "react";
import {
  createStyles,
  Header,
  Group,
  ActionIcon,
  Container,
  Burger,
  Button,
  Text
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconBrandInstagram } from "@tabler/icons";
import { ColorSchemeToggle } from "../ColorSchemeToggle/ColorSchemeToggle";
import { Signup } from "./Signup";

const useStyles = createStyles((theme) => ({
  header: {
    backgroundColor: theme.fn.variant({
      variant: "default",
      color: theme.primaryColor
    }).background,
    borderBottom: 0
  },
  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: 56,

    [theme.fn.smallerThan("sm")]: {
      justifyContent: "flex-start"
    }
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none"
    }
  },

  social: {
    // width: 260,
    [theme.fn.smallerThan("sm")]: {
      width: "auto",
      marginLeft: "auto"
    }
  },

  burger: {
    marginRight: theme.spacing.md,
    [theme.fn.largerThan("sm")]: {
      display: "none"
    }
  },

  link: {
    color:
      theme.colorScheme === "dark" ? theme.colors.white : theme.colors.gray[0],
    fontSize: theme.fontSizes.sm,
    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[0]
    }
  },

  linkActive: {
    borderRadius: theme.defaultRadius,
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color
    }
  }
}));

interface NavbarProps {
  links: { link: string; label: string }[];
}

export function Navbar({ links }: NavbarProps) {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();

  const items = links.map((link) => (
    <Button
      size="xs"
      key={link.label}
      className={cx(classes.link, {
        [classes.linkActive]: active === link.link
      })}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </Button>
  ));

  return (
    <Header height={56} mb={20} className={classes.header}>
      <Container className={classes.inner} size="sm">
        <Burger
          opened={opened}
          onClick={toggle}
          size="sm"
          className={classes.burger}
        />
        <Group className={classes.links} spacing={5}>
          {items}
        </Group>

        <Text size="sm">favs.page</Text>

        <Group spacing={0} className={classes.social} position="right" noWrap>
          <Signup />
          {/* <ColorSchemeToggle /> */}
          {/* <ActionIcon size="lg">
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon> */}
        </Group>
      </Container>
    </Header>
  );
}
