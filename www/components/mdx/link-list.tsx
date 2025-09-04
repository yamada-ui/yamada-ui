import type { VStackProps } from "@yamada-ui/react"
import type { NextLinkProps } from "../next-link"
import { VStack } from "@yamada-ui/react"
import { NextLink } from "../next-link"

export interface LinkListProps extends VStackProps {
  items: (NextLinkProps & { label: string })[]
}

export function LinkList({ items, ...rest }: LinkListProps) {
  return (
    <VStack align="start" fontSize="sm" gap="md" {...rest}>
      {items.map(({ href, label }, index) => (
        <NextLink key={index} href={href}>
          {label}
        </NextLink>
      ))}
    </VStack>
  )
}
