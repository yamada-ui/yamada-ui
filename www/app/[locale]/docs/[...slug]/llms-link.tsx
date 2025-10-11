import { Text } from "@yamada-ui/react"

export interface LlmsLinkProps {
  href: string
  label: string
}

export function LlmsLink({ href, label }: LlmsLinkProps) {
  return (
    <Text
      as="a"
      href={href}
      target="_blank"
      color={{ base: "fg.muted", _hover: "fg" }}
      fontSize="sm"
      rounded="l1"
      transitionDuration="moderate"
      transitionProperty="colors"
    >
      {label}
    </Text>
  )
}
