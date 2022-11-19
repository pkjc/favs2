import {
  createStyles,
  Card,
  Avatar,
  Text,
  Group,
  Button,
  Box,
  ActionIcon
} from "@mantine/core";
import { AddFav } from "./AddFav";
import { IconPencil, IconShare } from "@tabler/icons";

const useStyles = createStyles((theme) => ({
  avatar: {
    border: `4px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.white
    }`
  }
}));

interface UserBioCardProps {
  image: string;
  avatar: string;
  name: string;
  job: string;
  stats: { label: string; value: string }[];
}

export function UserBioCard({
  image,
  avatar,
  name,
  job,
  stats
}: UserBioCardProps) {
  const { classes, theme } = useStyles();

  const items = stats.map((stat) => (
    <div key={stat.label}>
      <Text size="sm" color="dimmed">
        {stat.value} {stat.label}
      </Text>
    </div>
  ));

  return (
    <Card p="xl" withBorder>
      <Card.Section sx={{ backgroundImage: `url(${image})`, height: 110 }} />
      <Group position="apart">
        <Box>
          <Avatar
            radius={100}
            src={avatar}
            size={90}
            mt={-45}
            className={classes.avatar}
          />
        </Box>
        <Group spacing="xs" mt={"sm"}>
          {/* <ActionIcon
            variant="outline"
            color={
              theme.colorScheme === "dark"
                ? theme.primaryColor
                : theme.primaryColor
            }
          >
            <IconPencil size={16} />
          </ActionIcon> */}

          {/* <ActionIcon
            variant="filled"
            color={
              theme.colorScheme === "dark"
                ? theme.primaryColor
                : theme.primaryColor
            }
          >
            <IconShare size={16} />
          </ActionIcon> */}
          {/* <Button
            leftIcon={<IconShare size={14} />}
            variant="outline"
            size="xs"
            gradient={{ from: "pink", to: "orange" }}
          >
            Share Profile
          </Button> */}
        </Group>
      </Group>
      <Group mt="xs" spacing="xs">
      <Text align="left" size="md" weight={700} >
        {name} 
      </Text>
      <Button component="a" href="#" variant="subtle" size="xs" compact  rightIcon={<IconShare size={14} />}>
        Share Profile
      </Button>
      </Group>
      <Group position="left" spacing="xs">
        <Text align="left" size="sm" color="dimmed">
          {job}
        </Text>
        <Text size="xs" color="dimmed">
          |
        </Text>
        <Group spacing={10}>{items}</Group>
      </Group>
      <Text align="left" size="md" mt="xs">
        I’m that actor in some of the movies you liked and some you didn’t.
        Sometimes I’m in pretty good shape, other times I’m not.
      </Text>
      <AddFav />
    </Card>
  );
}
