import type { FlexProps, ImageProps } from "@yamada-ui/react"
import type { FC } from "react"
import { Image, ui, Wrap } from "@yamada-ui/react"
import { CONSTANT } from "constant"

interface Item extends ImageProps {
  href: string
}

export interface SponsorsProps extends FlexProps {
  type: string
}

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
    <Wrap gap="6" minH="12" {...rest}>
      {items.map(({ href, src, alt, ...rest }, index) => (
        <ui.a key={index} href={href} target="_blank">
          <Image src={src} alt={alt} h={h} maxW="full" {...rest} />
        </ui.a>
      ))}
    </Wrap>
  )
}
