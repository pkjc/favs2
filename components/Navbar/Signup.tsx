import { Button } from "@mantine/core";
import { IconBrandGoogle } from "@tabler/icons";

export function Signup() {
  return (
    <Button
      // component="a"
      // target="_blank"
      // rel="noopener noreferrer"
      // href="https://twitter.com/mantinedev"
      leftIcon={<IconBrandGoogle size={14} />}
      size="xs"
      styles={(theme) => ({
        root: {
          backgroundColor: "#00acee",
          // border: 0,
          // height: 42,
          // paddingLeft: 20,
          // paddingRight: 20,
          "&:hover": {
            backgroundColor: theme.fn.darken("#00acee", 0.05)
          }
        }
        // leftIcon: {
        //   marginRight: 10
        // }
      })}
    >
      Login with Google
    </Button>
  );
}
