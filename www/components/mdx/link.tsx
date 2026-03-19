import type { NextLinkProps } from "@/components/next-link"
import { isString } from "@yamada-ui/utils"
import { NextLink } from "@/components/next-link"

export interface LinkProps extends NextLinkProps {}

export function Link({ href, ...rest }: LinkProps) {
  const external =
    isString(href) && !(href.startsWith("/") || href.startsWith("#"))

  return (
    <NextLink
      href={href}
      css={{
        "&[data-fragment]": {
          display: "inline-block",
          textDecoration: "none",
        },
      }}
      colorScheme="mono"
      variant="underline"
      color="inherit"
      external={external}
      {...rest}
    />
  )
}
