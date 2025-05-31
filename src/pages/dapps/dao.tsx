import React from "react"
import { BbankDao, Improvement } from "@/features/Dao"
import { DashboardLayout } from "@/layouts/DashboardLayout"
import { Box, Flex, rem, Text, Title } from "@mantine/core"

export default function Dao() {
  return (
    <DashboardLayout>
      <Title order={2} fz={32} ta="center">
        BBANK DAO GOVERNANCE
      </Title>

      <Text ta="center" fz={12} mt={20} mx="auto" maw={520}>
        Decentralized governance is a fundamental tenet and strategic pillar of
        BaseBank&apos;s philosophy. Consequently, our community assumes a
        central role in governance, driving improvement proposals through open
        discussions and feedback involving all stakeholders.
        <Box h={20} />
        These proposals, known as BaseBank Improvement Proposals (BIPs), are
        subsequently presented and subjected to voting via the [BaseBank
        Snapshot Portal] platform.
      </Text>

      <Flex
        direction={{ base: "column-reverse", lg: "row" }}
        gap={rem(14)}
        mt={{ base: 40, lg: rem(100) }}
      >
        <Improvement />
        <BbankDao />
      </Flex>
    </DashboardLayout>
  )
}
