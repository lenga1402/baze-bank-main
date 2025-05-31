import { useState } from "react"
import Image from "next/image"
import { formatPrice } from "@/utils"
import {
  AspectRatio,
  Flex,
  Group,
  Input,
  Modal,
  Paper,
  Text,
  Title,
} from "@mantine/core"
import { AiFillCaretDown, AiOutlineSearch } from "react-icons/ai"

import { useListToken } from "../hooks/useListToken"
import { type IToken } from "../types"

export type SelectTokenProps = {
  selectedToken?: IToken
  setSelectedToken: (token: IToken) => void
  disabledTokens: (IToken | undefined)[]
}

export const SelectToken = ({
  selectedToken,
  setSelectedToken,
  disabledTokens,
}: SelectTokenProps) => {
  const [opened, setOpened] = useState(false)
  const { value: listToken } = useListToken()
  const [searchString, setSearchString] = useState("")

  const handleClose = () => {
    setOpened(false)
    setTimeout(() => {
      setSearchString("")
    }, 100)
  }

  return (
    <>
      <Paper
        bg="#353535"
        c="#fff"
        p={8}
        radius="md"
        sx={{ cursor: "pointer" }}
        onClick={() => setOpened(true)}
      >
        <Group spacing={8} noWrap>
          <AspectRatio ratio={1} maw={24} miw={24}>
            <Image alt="" fill src={selectedToken?.image || ""} />
          </AspectRatio>

          <Text fz={18} tt="uppercase">
            {selectedToken?.symbol || "TOKEN"}
          </Text>

          <AiFillCaretDown size={12} />
        </Group>
      </Paper>

      <Modal
        opened={opened}
        onClose={handleClose}
        title={
          <Title order={3} fz={20} fw={500} c="#fff">
            Select a Token
          </Title>
        }
        sx={{
          ".mantine-Paper-root, .mantine-Modal-header": {
            backgroundColor: "#2d2d2d",
          },
        }}
      >
        <Paper
          bg="#353535"
          radius="md"
          withBorder
          sx={{ borderColor: "rgba(255, 255, 255, 0.10) !important" }}
        >
          <Group px={20} spacing={8}>
            <AiOutlineSearch color="rgba(255, 255, 255, 0.30)" size={18} />

            <Input
              placeholder="Enter the token symbol"
              variant="unstyled"
              value={searchString}
              onChange={(e) => setSearchString(e.target.value)}
              sx={{
                flex: 1,
                input: {
                  fontSize: 14,
                  color: "#fff",
                  "&::placeholder": {
                    color: "rgba(255, 255, 255, 0.30)",
                  },
                },
              }}
            />
          </Group>
        </Paper>

        <Flex direction="column" gap={10} mt={20}>
          {listToken
            .filter((token) =>
              token.symbol
                .toLowerCase()
                .includes(searchString.toLocaleLowerCase())
            )
            .map((token) => {
              const isDisabled = disabledTokens.some(
                (item) => item?.symbol === token.symbol
              )

              const isActive = token.symbol === selectedToken?.symbol

              return (
                <Paper
                  key={token.symbol}
                  c="#fff"
                  withBorder
                  p={10}
                  className={isActive ? "active" : ""}
                  sx={{
                    cursor: isDisabled ? "not-allowed" : "pointer",
                    transition: "all 0.25s",
                    borderColor: "#ffffff25 !important",
                    "&:hover,&.active": {
                      borderColor: isDisabled ? "" : "#fff !important",
                    },
                  }}
                  opacity={isDisabled ? 0.5 : 1}
                  onClick={() => {
                    if (!isDisabled) {
                      setSelectedToken(token)
                      handleClose()
                    }
                  }}
                >
                  <Group position="apart">
                    <Group>
                      <AspectRatio ratio={1} w={24}>
                        <Image alt="" fill src={token.image} />
                      </AspectRatio>

                      <Text tt="uppercase" fz={14}>
                        {token.symbol}
                      </Text>
                    </Group>

                    <Text fz={14}>${formatPrice(token.price)}</Text>
                  </Group>
                </Paper>
              )
            })}
        </Flex>
      </Modal>
    </>
  )
}
