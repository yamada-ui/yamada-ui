import { Text } from "@yamada-ui/react"
import { FC } from "react"
import { ExternalLink } from "components/media-and-icons"
import { NextLink, NextLinkProps } from "components/navigation"

export type LinkProps = NextLinkProps

export const Link: FC<LinkProps> = ({ href, children, ...rest }) => {
  const isExternal = !(href.startsWith("/") || href.startsWith("#"))

  return (
    <NextLink href={href} isExternal={isExternal} {...rest}>
      <Text as="span">{children}</Text>
      {isExternal ? <ExternalLink ms="0.25em" /> : null}
    </NextLink>
  )
}
