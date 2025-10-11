import type { FlexProps } from "@yamada-ui/react"
import { Box, Image, Wrap } from "@yamada-ui/react"
import sponsors from "@/data/sponsors.json"

export interface SponsorsProps extends FlexProps {
  type: keyof typeof sponsors
}

export function Sponsors({ type, ...rest }: SponsorsProps) {
  const items = sponsors[type]

  return (
    <Wrap gap="6" minH="12" {...rest}>
      {items.map(({ href, src, alt, ...rest }, index) => (
        <Box key={index} as="a" href={href} target="_blank" rounded="l2">
          <Image
            src={src}
            alt={alt}
            h={type === "platinum" ? "20" : type === "gold" ? "16" : "12"}
            maxW="full"
            {...rest}
          />
        </Box>
      ))}
    </Wrap>
  )
}
