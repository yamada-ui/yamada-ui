import type { StackProps } from "@yamada-ui/react"
import { Button, HistoryIcon, HStack, IconButton } from "@yamada-ui/react"

export interface FooterProps extends StackProps {}

export function Footer({ ...rest }: FooterProps) {
  return (
    <HStack pb="{space}" px="{space}" {...rest}>
      <Button colorScheme="primary">Submit</Button>

      <IconButton variant="ghost" icon={<HistoryIcon color="fg.muted" />} />
    </HStack>
  )
}
