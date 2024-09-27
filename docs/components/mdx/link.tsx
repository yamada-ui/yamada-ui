import { ExternalLink } from "@yamada-ui/lucide"
import { Text } from "@yamada-ui/react"
import type { FC } from "react"
import { NextLink } from "components/navigation"
import type { NextLinkProps } from "components/navigation"

export interface LinkProps extends NextLinkProps {}

export const Link: FC<LinkProps> = ({ href, children, ...rest }) => {
  const isExternal = !(href?.startsWith("/") || href?.startsWith("#"))

  return (
    <NextLink href={href} isExternal={isExternal} {...rest}>
      <Text as="span">{children}</Text>
      {isExternal ? <ExternalLink ms="0.25em" /> : null}
    </NextLink>
  )
}
