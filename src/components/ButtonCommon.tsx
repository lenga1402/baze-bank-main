import { Group, Paper, rem, type PaperProps } from "@mantine/core"
import { type PolymorphicComponentProps } from "@mantine/utils"

import { HybridLink } from "./HybridLink"

export type ButtonCommonProps = PolymorphicComponentProps<"div", PaperProps> & {
  href?: string
  withArrow?: boolean
  iconC?: "white" | "dark"
}

export const ButtonCommon = ({
  href,
  children,
  ...props
}: ButtonCommonProps) => {
  return (
    <LinkComp href={href}>
      <Paper
        py={rem(15)}
        px={rem(40)}
        radius="xl"
        fw={500}
        style={{ cursor: "pointer" }}
        {...props}
        w="fit-content"
      >
        <Group spacing={rem(8)} noWrap>
          {children}
        </Group>
      </Paper>
    </LinkComp>
  )
}

const LinkComp = ({
  href,
  children,
}: {
  href?: string
  children: React.ReactNode
}) => (!href ? children : <HybridLink href={href}>{children}</HybridLink>)
