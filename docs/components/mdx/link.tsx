import type { NextLinkProps } from "components/navigation"
import type { FC } from "react"
import { ExternalLinkIcon } from "@yamada-ui/lucide"
import { Text } from "@yamada-ui/react"
import { NextLink } from "components/navigation"

export interface LinkProps extends NextLinkProps {}

export const Link: FC<LinkProps> = ({ href, children, ...rest }) => {
  const isExternal = !(href?.startsWith("/") || href?.startsWith("#"))

  return (
    <NextLink href={href} isExternal={isExternal} {...rest}>
      <Text as="span">{children}</Text>
      {isExternal ? <ExternalLinkIcon ms="0.25em" /> : null}
    </NextLink>
  )
}
