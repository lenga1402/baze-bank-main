import React from "react"
import { dashboardMenu } from "@/constants/menus"
import {
  AspectRatio,
  Box,
  Drawer,
  Flex,
  rem,
  type AspectRatioProps,
} from "@mantine/core"
import { nanoid } from "nanoid"
import { HiOutlineMenu } from "react-icons/hi"

import { MenuItem } from "../SideBar"
// import { IconMenuDashboard } from "@/assets/vectors"

// import { NavMenu } from "../SideBar"
import { ActionButtons } from "./ActionButtons"
import { useOpenMenu } from "./hooks"

export const OffCanvasMenu = (props: Omit<AspectRatioProps, "ratio">) => {
  const { value, setValue } = useOpenMenu()

  return (
    <>
      <AspectRatio
        ratio={1}
        w={rem(36)}
        onClick={() => setValue(!value)}
        {...props}
      >
        <HiOutlineMenu size={30} color="#fff" />
      </AspectRatio>

      <Drawer
        transitionProps={{
          transition: "slide-left",
          duration: 400,
          timingFunction: "ease",
        }}
        withCloseButton={false}
        position="top"
        size="100%"
        opened={value}
        onClose={() => setValue(false)}
        zIndex={0}
        padding={0}
        sx={{
          ".mantine-Paper-root": {
            backgroundColor: "#2d2d2d",
          },
        }}
      >
        <Box pt={rem(60)} px={rem(20)}>
          <Flex direction="column" gap={10} mt={35}>
            {dashboardMenu.map((item) => (
              <MenuItem
                key={nanoid()}
                onClick={() => setValue(false)}
                handleClose={() => setValue(false)}
                {...item}
              />
            ))}
          </Flex>

          <ActionButtons mt={rem(20)} />
        </Box>
      </Drawer>
    </>
  )
}
