import type { FlexProps } from "@yamada-ui/react"
import { Image, Wrap } from "@yamada-ui/react"
import NextLink from "next/link"
import sponsors from "@/data/sponsors.json"

export interface SponsorsProps extends FlexProps {
  type: keyof typeof sponsors
}

export function Sponsors({ type, ...rest }: SponsorsProps) {
  const items = sponsors[type]

  return (
    <Wrap gap="6" minH="12" {...rest}>
      {items.map(({ href, src, alt, ...rest }, index) => (
        <NextLink key={index} href={href} target="_blank">
          <Image
            src={src}
            alt={alt}
            h={type === "platinum" ? "20" : type === "gold" ? "16" : "12"}
            maxW="full"
            {...rest}
          />
        </NextLink>
      ))}
    </Wrap>
  )
}
