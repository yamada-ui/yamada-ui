import { Image, Wrap, ui } from "@yamada-ui/react"
import type { FlexProps, ImageProps } from "@yamada-ui/react"
import type { FC } from "react"
import { CONSTANT } from "constant"

type Item = ImageProps & { href: string }

export type SponsorsProps = FlexProps & { type: string }

export const Sponsors: FC<SponsorsProps> = ({ type, ...rest }) => {
  let h: string
  let items: Item[] = []

  switch (type) {
    case "platinum":
      h = "20"
      items = CONSTANT.SPONSORS.PLATINUM
      break

    case "gold":
      h = "16"
      items = CONSTANT.SPONSORS.GOLD
      break

    default:
      h = "12"
      items = CONSTANT.SPONSORS.SILVER
      break
  }

  return (
    <Wrap minH="12" gap="6" {...rest}>
      {items.map(({ href, src, alt, ...rest }, index) => (
        <ui.a key={index} href={href} target="_blank">
          <Image src={src} alt={alt} maxW="full" h={h} {...rest} />
        </ui.a>
      ))}
    </Wrap>
  )
}
