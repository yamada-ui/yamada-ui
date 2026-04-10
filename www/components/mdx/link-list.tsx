import type { VStackProps } from "@yamada-ui/react"
import type { NextLinkProps } from "@/components/next-link"
import { VStack } from "@yamada-ui/react"
import { NextLink } from "@/components/next-link"

export interface LinkListProps extends VStackProps {
  items: (NextLinkProps & { label: string })[]
}

export function LinkList({ items, ...rest }: LinkListProps) {
  return (
    <VStack colorScheme="mono" align="start" fontSize="sm" gap="md" {...rest}>
      {items.map(({ href, label }, index) => (
        <NextLink key={index} href={href}>
          {label}
        </NextLink>
      ))}
    </VStack>
  )
}
