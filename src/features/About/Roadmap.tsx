import Image, { StaticImageData } from "next/image"
import {
  AspectRatio,
  Box,
  BoxProps,
  Flex,
  List,
  rem,
  Timeline,
  Title,
} from "@mantine/core"
import { nanoid } from "nanoid"

import { RoadmapImg, RoadmapImg2, RoadmapImg3 } from "@/assets/images"
import { RoadmapIcon } from "@/assets/vectors"
import { Section } from "@/components/Section"

const data = [
  {
    title: "Phase 1: Project Inception and Collaboration (Months 1-2)",
    image: RoadmapImg,
    imgW: 460,
    imgH: 336,
    timeline: [
      {
        title: "Month 1: Project Kickoff",
        contents: [
          "Form a core team comprising developers, marketers, and governance experts.",
          "Establish partnerships with Base.org and other key stakeholders.",
        ],
      },
      {
        title: "Month 2: Research and Design",
        contents: [
          "Conduct thorough research on DeFi protocols and multichain integration.",
          "Define the project's tokenomics, governance model, and utility.",
        ],
      },
    ],
  },
  {
    title: "Phase 2: Development and Base Network Integration (Months 3-6)",
    image: RoadmapImg2,
    imgW: 356,
    imgH: 356,
    timeline: [
      {
        title: "Month 3: Smart Contract Development",
        contents: [
          "Develop and audit the smart contracts for the $BBANK token, liquidity pools, and governance.",
        ],
      },
      {
        title: "Month 4: Base Network Integration",
        contents: [
          "Collaborate with Base.org to launch the project on the Base",
          "Ensure seamless integration with Base Network's infrastructure.",
        ],
      },
      {
        title: "Months 5-6: Testing and Security",
        contents: [
          "Conduct thorough testing, including security audits, to ensure the safety of the platform.",
          "Prepare for the public launch and user onboarding.",
        ],
      },
    ],
  },
  {
    title: "Phase 3: Continuous Improvement and Innovation ",
    image: RoadmapImg3,
    imgW: 507,
    imgH: 507,
    timeline: [
      {
        title: "Ongoing Governance",
        contents: [
          "Maintain and enhance the project's governance model, allowing users to have a say in its future.",
        ],
      },
      {
        title: "Feature Development",
        contents: [
          "Continuously develop and release new features, such as lending, borrowing, and additional DeFi services.",
        ],
      },
      {
        title: "Security and Audits",
        contents: [
          "Regularly conduct security audits and implement security measures to protect user assets.",
        ],
      },
      {
        title: "User Education",
        contents: [
          "Provide ongoing educational resources and support for users to navigate DeFi safely.",
        ],
      },
      {
        title: "Strategic Partnerships",
        contents: [
          "Explore strategic partnerships and collaborations to enhance the project's ecosystem.",
        ],
      },
    ],
  },
  {
    title: "Phase 3: Continuous Improvement and Innovation ",
    image: RoadmapImg3,
    imgW: 507,
    imgH: 507,
    timeline: [
      {
        title: "Ongoing Governance",
        contents: [
          "Maintain and enhance the project's governance model, allowing users to have a say in its future.",
        ],
      },
      {
        title: "Feature Development",
        contents: [
          "Continuously develop and release new features, such as lending, borrowing, and additional DeFi services.",
        ],
      },
      {
        title: "Security and Audits",
        contents: [
          "Regularly conduct security audits and implement security measures to protect user assets.",
        ],
      },
      {
        title: "User Education",
        contents: [
          "Provide ongoing educational resources and support for users to navigate DeFi safely.",
        ],
      },
      {
        title: "Strategic Partnerships",
        contents: [
          "Explore strategic partnerships and collaborations to enhance the project's ecosystem.",
        ],
      },
    ],
  },
]

export const Roadmap = () => {
  return (
    <Section px={{ base: 15, sm: 25, lg: rem(150) }}>
      <Title fz={{ base: 48, lg: rem(80) }} fw={600} tt="uppercase">
        Roadmap
      </Title>
      <Timeline mt={rem(90)} color="dark" active={1}>
        {data.map((item, index) => (
          <Timeline.Item
            key={nanoid()}
            sx={{
              "&:before": {
                top: rem(18),
                bottom: `${index === 2 ? 0 : "calc(3rem * -1)"}`,
                borderLeft: `${
                  index !== 0
                    ? "3px dashed rgba(45, 45, 45, 0.2)"
                    : "3px solid rgba(45, 45, 45, 1)"
                }`,
              },
              ".mantine-Timeline-itemBullet": {
                top: rem(18),
                display: `${index === 3 ? "none" : "block"}`,
              },
            }}
          >
            <RoadmapItem {...item} index={index} />
          </Timeline.Item>
        ))}
      </Timeline>
    </Section>
  )
}

type RoadmapItemProps = BoxProps & {
  title: string
  timeline: {
    title: string
    contents: string[]
  }[]
  image: StaticImageData
  imgW: number
  imgH: number
  index: number
}

const RoadmapItem: React.FC<RoadmapItemProps> = ({
  title,
  timeline,
  image,
  imgH,
  imgW,
  index,
  ...props
}) => {
  return (
    <Box {...props} display={index === 3 ? "none" : "block"}>
      <Box w="fit-content" px={rem(20)} py={rem(12)} bg="#A1B4FF">
        <Title fz={rem(20)} fw={600} tt="capitalize">
          {title}
        </Title>
      </Box>
      <Flex
        pos="relative"
        direction={{ base: "column", lg: "row" }}
        justify="space-between"
        mt={rem(28)}
        p={rem(24)}
        sx={{
          border: "1px solid rgba(45, 45, 45, 0.20)",
          zIndex: 1,
          ":before": {
            content: `""`,
            position: "absolute",
            top: 0,
            right: 0,
            width: rem(70),
            height: 1,
            background: "rgba(45, 45, 45, 0.20)",
            zIndex: 6,
            transform: "rotate(45deg) translate(19px,7px)",
          },

          "@media(max-width: 769px)": {
            ":before": {
              width: 67,
              transform: "rotate(45deg) translate(23px,8px)",
            },
          },
          "@media(max-width: 500px)": {
            ":before": {
              width: 66,
              transform: "rotate(45deg) translate(23px,9px)",
            },
          },
        }}
      >
        <Box>
          {timeline.map(({ title, contents }) => (
            <Box key={nanoid()} mb={rem(20)}>
              <Title mb={rem(12)} fz={rem(20)} fw={600}>
                {title}
              </Title>
              <List>
                {contents.map((item) => (
                  <List.Item key={nanoid()}>{item}</List.Item>
                ))}
              </List>
            </Box>
          ))}
        </Box>
        <AspectRatio
          ratio={imgW / imgH}
          w={rem(imgW)}
          pos={{ base: "relative", lg: index === 0 ? "absolute" : "relative" }}
          right={rem(30)}
          top="-40%"
        >
          <Image src={image} alt="roadmap" />
        </AspectRatio>
        <Box pos="absolute" right={0} top={0} sx={{ zIndex: 4 }}>
          <RoadmapIcon />
        </Box>
        <Box
          pos="absolute"
          top={{ base: -2, lg: rem(-1) }}
          right={{ base: -2, lg: rem(-1) }}
          w={rem(50)}
          h={rem(50)}
          bg="#fff"
          sx={{
            zIndex: 3,
            clipPath: "polygon(100% 0%, 0% 0%, 100% 100%)",
          }}
        />
      </Flex>
    </Box>
  )
}
