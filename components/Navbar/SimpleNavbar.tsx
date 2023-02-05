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
import { Modal } from '@mantine/core';
import { useState } from 'react';

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
  const [openSignUpModal, setOpenSignUpModal] = useState(false);
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
        <Button size="xs" uppercase onClick={() => setOpenSignUpModal(true)}>Get your favs page</Button>
        <Modal
          size="lg"
          centered
          opened={openSignUpModal}
          onClose={() => setOpenSignUpModal(false)}
        >
          <div className="sib-form">
            <div id="sib-form-container" className="sib-form-container">
              <div id="sib-container" className="sib-container--large sib-container--horizontal" >
                <form id="sib-form" method="POST" action="https://738a20f0.sibforms.com/serve/MUIEAMyqQm6cvAIRLFPEJQXCRQLILj6kVhXEiqJRVLLRQ0FKlEC7uRFOi8gcO-Dq0nTOLngFG29Kg4qjFBh66woSKGVY3zyt0rLd0uNnzoVKpggWWvjIUsS4_nMRF0NiLlL5lAW863-8fcT5j4eT82vqVYRrw-UKJFtT6sAIhwcXedFJMOCxRDApGrwCFc6RKqOEPcBmXhuLw8iW">
                  <div >
                    <div className="sib-form-block" >
                      <p>favs.page updates</p>
                    </div>
                  </div>
                  <div >
                    <div className="sib-form-block sib-divider-form-block">
                      <div />
                    </div>
                  </div>
                  <div >
                    <div className="sib-form-block" >
                      <div className="sib-text-form-block">
                        <p>Sign up to get updated when we launch!</p>
                      </div>
                    </div>
                  </div>
                  <div >
                    <div className="sib-input sib-form-block">
                      <div className="form__entry entry_block">
                        <div className="form__label-row form__label-row--horizontal">
                          <div className="entry__field">
                            <input className="input" type="text" id="EMAIL" name="EMAIL" autoComplete="off" placeholder="Enter your email address..." data-required="true" required />
                          </div>
                        </div>
                        <label className="entry__error entry__error--primary">
                        </label>
                      </div>
                    </div>
                  </div>
                  <div >
                    <div className="sib-form-block" >
                      <button className="sib-form-block__button sib-form-block__button-with-loader" form="sib-form" type="submit">
                        SIGN UP
                      </button>
                    </div>
                  </div>
                  <input type="text" name="email_address_check" defaultValue="true" className="input--hidden" />
                  <input type="hidden" name="locale" defaultValue="en" />
                  <input type="hidden" name="html_type" defaultValue="simple" />
                </form>
              </div>
            </div>
          </div>
        </Modal>
      </Container>
    </Header>
  );
}
