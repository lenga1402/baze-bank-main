import { FaDiscord, FaTelegramPlane, FaTwitter } from "react-icons/fa"

import {
  IconBaseBank,
  IconDao,
  IconLending,
  IconMining,
  // IconMining,
  IconOverview,
} from "@/assets/vectors"

import { links } from "./links"
import { paths } from "./paths"

export const dashboardMenu = [
  {
    icon: <IconOverview />,
    title: "Overview",
    link: paths.OVERVIEW,
  },
  {
    icon: <IconDao />,
    title: "DAO",
    link: paths.DAO,
  },
  {
    icon: <IconBaseBank />,
    title: "BaseBank",
    link: "",
    menu: [
      {
        icon: <></>,
        title: "Swap",
        link: paths.SWAP,
      },
      {
        icon: <></>,
        title: "Cross Chain",
        link: paths.CROSS_CHAIN,
      },
    ],
  },
  {
    icon: <IconLending />,
    title: "Lending",
    link: paths.LENDING,
  },
  {
    icon: <IconMining />,
    title: "Staking",
    link: paths.STAKING,
  },
]

export const rootMenuHeader = [
  {
    index: 0,
    title: "Home",
    link: paths.HOME,
  },
  {
    index: 1,
    title: "About",
    link: paths.ABOUT,
    menu: dashboardMenu,
  },
  {
    index: 2,
    title: "Dapps",
    link: paths.DAPPS,
  },
  {
    index: 3,
    title: "Governance",
    link: paths.GOVERNANCE,
    menu: dashboardMenu,
  },
  {
    index: 4,
    title: "Documents",
    link: links.DOCS,
  },
]

export const rootMenuFooter = [
  {
    category: "Category 1",
    menu: [
      {
        title: "Menu 1.1",
        link: "",
      },
      {
        title: "Menu 1.2",
        link: "",
      },
    ],
  },
  {
    category: "Category 2",
    menu: [
      {
        title: "Menu 2.1",
        link: "",
      },
      {
        title: "Menu 2.2",
        link: "",
      },
    ],
  },
  {
    category: "Category 3",
    menu: [
      {
        title: "Menu 3.1",
        link: "",
      },
      {
        title: "Menu 3.2",
        link: "",
      },
    ],
  },
]

export const menuSocial = [
  {
    icon: FaTwitter,
    title: "Twitter",
    link: links.TWITTER,
  },
  {
    icon: FaTelegramPlane,
    title: "Telegram\nChannel",
    link: links.TELEGRAM,
  },
  {
    icon: FaDiscord,
    title: "Telegram\nGlobal",
    link: links.TELEGRAM_GLOBAL,
  },
  {
    icon: FaDiscord,
    title: "Discord",
    link: links.DISCORD,
  },
  {
    icon: FaDiscord,
    title: "Mirror",
    link: links.MIRROR,
  },
  {
    icon: FaDiscord,
    title: "Snapshot",
    link: links.SNAPSHOT,
  },
]
