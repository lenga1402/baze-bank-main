import React from "react"
import { rootMenuHeader } from "@/constants/menus"
import { Box, Grid, rem, Text } from "@mantine/core"
import { Environment, OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

import { HybridLink } from "@/components/HybridLink"
import { Model } from "@/components/Model"

import { SocialMenu } from "./SocialMenu"

type Props = {
  styleWrap: React.CSSProperties
  styleContent: React.CSSProperties
  handleClose: () => void
}

type MenuItemProps = (typeof rootMenuHeader)[0]

export const NavMenu: React.FC<Props> = ({
  styleWrap,
  handleClose,
  // styleContent,
}) => {
  const MenuItem = ({ title, link }: MenuItemProps) => {
    return (
      <Box mt={{ base: rem(20), md: 0 }}>
        <HybridLink onClick={() => handleClose()} href={link}>
          <Text fz={{ base: rem(42), md: rem(130) }} tt="capitalize" fw="bold">
            {title}
          </Text>
        </HybridLink>
      </Box>
    )
  }

  return (
    <Box
      pos={"fixed"}
      top={0}
      left={0}
      right={0}
      bg={"#F7F4F4"}
      style={styleWrap}
      sx={{
        zIndex: 10,
        overflow: "hidden",
      }}
    >
      <Grid h={"100%"}>
        <Grid.Col
          display={{ base: "none", lg: "block" }}
          sx={{ borderRight: "1px solid #AFACAC" }}
          span={3}
        >
          <SocialMenu />
        </Grid.Col>

        <Grid.Col
          pos={"relative"}
          h={"100vh"}
          sx={{
            zIndex: 10,
            overflow: "auto",
            "::-webkit-scrollbar ": {
              width: 0,
            },
          }}
          span={8}
          lg={5}
          pt={{ base: rem(100), md: 0 }}
          pl={{ base: "20px", lg: 40 }}
        >
          <ul style={{ paddingLeft: "0px" }}>
            {rootMenuHeader.map((item, index) => (
              <MenuItem key={index} {...item} />
            ))}
          </ul>
        </Grid.Col>

        <Grid.Col span={4}>
          <Box
            pos={{ base: "absolute", lg: "unset" }}
            right={{ base: -300, lg: "unset" }}
            top={{ base: -50, lg: "unset" }}
            miw={600}
            w="100%"
            h="100%"
          >
            <Canvas camera={{ position: [-100, 100, 800], fov: 46, near: 100 }}>
              <Objects />
            </Canvas>
          </Box>
        </Grid.Col>
      </Grid>
    </Box>
  )
}

const Objects = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <Environment preset="sunset" />
      <OrbitControls
        // maxPolarAngle={Math.PI / 2}
        // minPolarAngle={Math.PI / 6}
        enableZoom={false}
        enablePan={false}
      />
      <Model />
    </>
  )
}
