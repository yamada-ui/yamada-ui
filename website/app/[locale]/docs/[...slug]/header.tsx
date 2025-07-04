import type { Doc } from "#velite"
import { Heading, Text, VStack } from "@yamada-ui/react"
import { mdToHtml } from "@/utils/string"

export interface HeaderProps extends Doc {}

export function Header({ description, title }: HeaderProps) {
  return (
    <VStack gap="md">
      <VStack gap="sm">
        <Heading size="5xl">{title}</Heading>

        <Text color="fg.muted">{mdToHtml(description)}</Text>
      </VStack>
    </VStack>
  )
}
