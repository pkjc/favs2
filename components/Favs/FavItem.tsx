import { IconHeart, IconPlayerPlay } from "@tabler/icons";
import { Card, Text, Group, Center, createStyles } from "@mantine/core";
import { ActionIcon } from "@mantine/core";
const useStyles = createStyles((theme, _params, getRef) => {
  const image = getRef("image");

  return {
    card: {
      // position: "relative",
      // height: 324,
      // width: "100%",
      // backgroundColor:
      //   theme.colorScheme === "dark"
      //     ? theme.colors.dark[6]
      //     : theme.colors.gray[0],

      [`&:hover .${image}`]: {
        transform: "scale(1.03)"
      },
      [theme.fn.smallerThan("sm")]: {
        height: 300
      }
    },

    image: {
      ref: image,
      // position: "absolute",
      // top: 0,
      // left: 0,
      // right: 0,
      // bottom: 0,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      transition: "transform 500ms ease",
      zIndex: 999
    },

    overlay: {
      // position: "absolute",
      // top: "20%",
      // left: 0,
      // right: 0,
      // bottom: 0,
      // backgroundImage:
      //   "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .65) 90%)"
    },

    content: {
      height: "100%",
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      zIndex: -999
    },

    title: {
      color: theme.white,
      marginBottom: 5
    },

    bodyText: {
      color: theme.colors.dark[2],
      marginLeft: 7
    },

    author: {
      color: theme.colors.dark[2]
    }
  };
});

// interface FavItemProps {
//   link: string;
//   image: string;
//   title: string;
//   author: string;
//   views: number;
//   comments: number;
// }

export function FavItem({
  poster_path,
  title,
  author,
  views,
  comments,
  link
}: any) {
  const { classes, theme } = useStyles();

  return (
    <Card
      p="lg"
      shadow="lg"
      className={classes.card}
      component="a"
      href={link}
      target="_blank"
    >
      <div
        className={classes.image}
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w200${poster_path})`
        }}
      >
        {/* <img
          src={`url(https://image.tmdb.org/t/p/w200${poster_path})`}
          // style={{ visibility: "hidden" }}
          alt=""
        /> */}
      </div>
      {/* <div className={classes.overlay} /> */}

      <div className={classes.content}>
        <div>
          {/* <Text size="lg" className={classes.title} weight={500}>
            {title}
          </Text> */}

          <Group position="apart">
            <ActionIcon variant="filled" color="indigo">
              <IconPlayerPlay size={16} stroke={1.5} />
            </ActionIcon>
            <ActionIcon variant="outline" color="pink">
              <IconHeart size={16} stroke={2} />
            </ActionIcon>
          </Group>
        </div>
      </div>
    </Card>
  );
}
