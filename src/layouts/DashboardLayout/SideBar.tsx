import { useMemo } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import { dashboardMenu } from "@/constants/menus"
import {
  Accordion,
  AspectRatio,
  Box,
  Flex,
  Group,
  Text,
  type GroupProps,
} from "@mantine/core"
import { nanoid } from "nanoid"

import { LogoBrand } from "@/components/LogoBrand"
import { Section } from "@/components/Section"

export const SideBar = () => {
  return (
    <Section
      h="100vh"
      display={{ base: "none", lg: "block" }}
      w={250}
      bg="#2d2d2d"
      sx={{ overflow: "auto" }}
      pos="sticky"
      top={0}
      withPadding={false}
      p={25}
    >
      <LogoBrand variant="logo-text-light" />

      <Flex direction="column" gap={10} mt={35}>
        {dashboardMenu.map((item) => (
          <MenuItem key={nanoid()} {...item} />
        ))}
      </Flex>
    </Section>
  )
}

type MenuItemProps = (typeof dashboardMenu)[0] &
  GroupProps & {
    noIcon?: boolean
    handleClose?: () => void
  }

export const MenuItem = ({
  icon,
  link,
  title,
  menu,
  noIcon = false,
  handleClose,
  ...props
}: MenuItemProps) => {
  if (menu) {
    return (
      <Accordion defaultValue="0">
        <Accordion.Item value="0" sx={{ borderBottom: "none" }}>
          <Accordion.Control
            px={0}
            bg="transparent !important"
            sx={{
              ".mantine-Accordion-chevron": {
                color: "rgba(255, 255, 255,0.5)",
              },
            }}
          >
            <CommonItem
              onClick={handleClose}
              link={link}
              icon={icon}
              title={title}
              py={0}
            />
          </Accordion.Control>

          {menu.map((item) => (
            <Accordion.Panel key={nanoid()}>
              <MenuItem {...item} py={0} noIcon onClick={handleClose} />
            </Accordion.Panel>
          ))}
        </Accordion.Item>
      </Accordion>
    )
  }

  return (
    <Link href={link}>
      <CommonItem
        link={link}
        icon={icon}
        title={title}
        noIcon={noIcon}
        {...props}
      />
    </Link>
  )
}

type CommonItemProps = GroupProps & {
  icon?: React.ReactNode
  title: string
  noIcon?: boolean
  link: string
}

const CommonItem = ({
  icon,
  title,
  noIcon = false,
  link,
  ...props
}: CommonItemProps) => {
  const { pathname } = useRouter()

  const isActive = useMemo(() => {
    if (!link) return false

    return link.includes(pathname)
  }, [link, pathname])

  return (
    <Group
      py={15}
      opacity={isActive ? 1 : 0.5}
      sx={{ transition: "all 0.25s", "&:hover": { opacity: 1 } }}
      {...props}
    >
      {!noIcon ? (
        <AspectRatio ratio={1} w={24}>
          {icon}
        </AspectRatio>
      ) : (
        <Box h={6} w={6} bg="#fff" sx={{ borderRadius: "100%" }} />
      )}

      <Text c="#fff" fw={500}>
        {title}
      </Text>
    </Group>
  )
}
