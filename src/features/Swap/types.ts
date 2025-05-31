import { type StaticImageData } from "next/image"

export interface IToken {
  image: string | StaticImageData
  symbol: string
  price: number
}
