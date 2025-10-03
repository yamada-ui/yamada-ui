import type { StackProps } from "@yamada-ui/react"
import { Button, HistoryIcon, HStack, IconButton } from "@yamada-ui/react"
import { memo } from "react"

export interface FooterProps extends StackProps {}

export const Footer = memo<FooterProps>((props) => {
  return (
    <HStack
      pb={{ base: "lg", sm: "md" }}
      px={{ base: "lg", sm: "md" }}
      {...props}
    >
      <Button colorScheme="primary" size={{ base: "lg", sm: "md" }}>
        Submit
      </Button>

      <IconButton
        size={{ base: "lg" }}
        variant="ghost"
        icon={<HistoryIcon color="muted" fontSize="2xl" />}
      />
    </HStack>
  )
})

Footer.displayName = "Footer"
