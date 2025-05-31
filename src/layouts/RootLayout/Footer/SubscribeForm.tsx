import { Button, Flex, Group, Input, rem, Text } from "@mantine/core"

export const SubscribeForm = () => {
  return (
    <Flex direction="column" gap={rem(10)}>
      <Text>Subscribe for more information:</Text>

      <Group>
        <Input placeholder="Enter your email" />

        <Button>Subscribe</Button>
      </Group>
    </Flex>
  )
}
