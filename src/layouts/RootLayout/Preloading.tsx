import { useEffect } from "react"
import { keys } from "@/constants/keys"
import {
  Box,
  Center,
  createStyles,
  keyframes,
  rem,
  Text,
  Transition,
} from "@mantine/core"
import { useScrollLock } from "@mantine/hooks"

import {
  ArrowLeft,
  ArrowRight,
  Corner1,
  Corner2,
  Corner3,
  Corner4,
} from "@/assets/vectors"
import { Loading } from "@/components/Loading"

export const Preloading = () => {
  const [lockedScroll, setLockedScroll] = useScrollLock(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLockedScroll(false)
    }, keys.PRELOADING_TIMEOUT)

    return () => {
      clearTimeout(timeout)
    }
  }, [setLockedScroll])

  const bounce = keyframes({
    "0%": { opacity: 0 },
    "50%": { opacity: 0.5 },

    "100%": { opacity: 1 },
  })

  const long = keyframes({
    "0%": { width: 0 },

    "100%": { width: "100%" },
  })

  const colunm = keyframes({
    "0%": { height: 0 },

    "100%": { height: "100%" },
  })

  const useStyles = createStyles((theme) => ({
    container: {
      textAlign: "center",
      padding: theme.spacing.xl,
      animation: `${bounce} 1s ease-in-out infinite`,
    },
    stringRow: {
      animation: `${long} 2s ease-in-out `,
      animationDuration: "3s",
    },
    stringColunm: {
      animation: `${colunm} 2s ease-in-out `,
      animationDuration: "3s",
    },
  }))

  const { classes } = useStyles()

  return (
    <Transition
      mounted={lockedScroll}
      transition="fade"
      duration={1000}
      timingFunction="ease"
    >
      {(styles) => (
        <Box
          bg={"black"}
          style={styles}
          pos="fixed"
          h="100vh"
          top={0}
          left={0}
          right={0}
          bottom={0}
          sx={{ zIndex: 100 }}
        >
          <Center
            sx={{ zIndex: 200 }}
            h="100vh"
            w={"100%"}
            fz={rem(40)}
            tt="uppercase"
            fw="bold"
          >
            <Loading />
          </Center>

          <Box
            className={classes.stringRow}
            w={"100%"}
            h={1}
            bg={"#656565"}
            pos={"absolute"}
            left={0}
            top={"43%"}
          ></Box>

          <Box
            className={classes.stringColunm}
            sx={{ zIndex: -1 }}
            w={1}
            h={"100%"}
            bg={"#656565"}
            pos={"absolute"}
            left={"50%"}
            top={0}
          ></Box>

          <Box
            className={classes.stringRow}
            w={"100%"}
            h={1}
            bg={"#656565"}
            pos={"absolute"}
            left={0}
            bottom={"43%"}
          ></Box>

          <Box
            className={classes.stringColunm}
            h={"100%"}
            w={1}
            bg={"#656565"}
            pos={"absolute"}
            left={"8%"}
            bottom={0}
          ></Box>

          <Box
            className={classes.stringColunm}
            h={"100%"}
            w={1}
            bg={"#656565"}
            pos={"absolute"}
            right={"8%"}
            bottom={0}
          ></Box>

          <Box
            className={classes.container}
            left={rem(20)}
            top={rem(40)}
            pos={"absolute"}
          >
            <Corner1 />
          </Box>

          <Box
            className={classes.container}
            right={rem(20)}
            top={rem(40)}
            pos={"absolute"}
          >
            <Corner2 />
          </Box>

          <Box
            className={classes.container}
            left={rem(20)}
            bottom={rem(40)}
            pos={"absolute"}
          >
            <Corner3 />
          </Box>

          <Box
            className={classes.container}
            right={rem(20)}
            bottom={rem(40)}
            pos={"absolute"}
          >
            <Corner4 />
          </Box>

          <Box
            className={classes.container}
            left={rem(40)}
            bottom={"46%"}
            pos={"absolute"}
          >
            <ArrowLeft />
          </Box>

          <Box
            className={classes.container}
            right={rem(40)}
            bottom={"45%"}
            pos={"absolute"}
          >
            <ArrowRight />
          </Box>

          <Text
            display={{ base: "none", lg: "block" }}
            c={"white"}
            className={classes.container}
            right={rem(160)}
            bottom={"46%"}
            pos={"absolute"}
            fz={rem(20)}
          >
            Loading
          </Text>

          <Text
            display={{ base: "none", lg: "block" }}
            c={"white"}
            className={classes.container}
            left={rem(160)}
            bottom={"46%"}
            pos={"absolute"}
            fz={rem(20)}
          >
            Loading
          </Text>
        </Box>
      )}
    </Transition>
  )
}
