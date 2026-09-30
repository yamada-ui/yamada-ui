import type { StackProps } from "@yamada-ui/react"
import {
  Button,
  HStack,
  IconButton,
  RotateCcwClockIcon,
} from "@yamada-ui/react"

export interface FooterProps extends StackProps {}

export function Footer({ ...rest }: FooterProps) {
  return (
    <HStack pb="{space}" px="{space}" {...rest}>
      <Button colorScheme="primary">Submit</Button>

      <IconButton
        variant="ghost"
        icon={<RotateCcwClockIcon color="fg.muted" />}
      />
    </HStack>
  )
}
