import { useState } from "react"
import {
  Box,
  Button,
  Divider,
  Group,
  Modal,
  NumberInput,
  Paper,
  Text,
  Title,
} from "@mantine/core"
import { IoMdSettings } from "react-icons/io"

export const ButtonSetting = () => {
  const [opened, setOpened] = useState(false)

  return (
    <>
      <Box lh="1em" sx={{ cursor: "pointer" }} onClick={() => setOpened(true)}>
        <IoMdSettings size={24} />
      </Box>

      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title={
          <Title order={3} fz={20} fw={600} c="#fff">
            Trade Settings
          </Title>
        }
        sx={{
          ".mantine-Paper-root, .mantine-Modal-header": {
            backgroundColor: "#2d2d2d",
          },
        }}
      >
        <Divider opacity={0.2} mt={10} mb={25} />

        <Text c="#fff" fw={500} mb={15}>
          Slippage Tolerance
        </Text>

        <Group>
          <Button variant="white" c="#000" fz={14} fw={600} radius="md">
            Auto
          </Button>

          <Paper
            bg="#424242 !important"
            radius="md"
            px={15}
            py={2}
            sx={{ flex: 1 }}
          >
            <Group>
              <Box sx={{ flex: 1 }}>
                <NumberInput
                  min={0}
                  variant="unstyled"
                  sx={{ input: { color: "#fff" } }}
                  placeholder="0.01"
                />
              </Box>

              <Text c="#fff">%</Text>
            </Group>
          </Paper>
        </Group>

        <Divider opacity={0.2} my={20} />

        <Text c="#fff" fw={500} mb={15}>
          Transaction Deadline
        </Text>

        <Group mb={10}>
          <Paper bg="#424242 !important" px={15}>
            <NumberInput
              w={80}
              defaultValue={20}
              variant="unstyled"
              precision={0}
              min={0}
              sx={{ input: { color: "#fff" } }}
            />
          </Paper>

          <Text c="#fff">minutes</Text>
        </Group>
      </Modal>
    </>
  )
}
