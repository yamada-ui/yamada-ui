import { Image, Wrap, ui } from "@yamada-ui/react"
import type { FlexProps, ImageProps } from "@yamada-ui/react"
import type { FC } from "react"

type Item = ImageProps & { href: string }

export type SponsorsProps = FlexProps & { type: string; items: Item[] }

export const Sponsors: FC<SponsorsProps> = ({ type, items = [], ...rest }) => {
  let h: string

  switch (type) {
    case "platinum":
      h = "20"
      break

    case "gold":
      h = "16"
      break

    default:
      h = "12"
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
