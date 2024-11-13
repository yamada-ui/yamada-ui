import type { StackProps } from "@yamada-ui/react"
import type { FC } from "react"
import { HistoryIcon } from "@yamada-ui/lucide"
import { Button, HStack, IconButton } from "@yamada-ui/react"
import { memo } from "react"

export interface FooterProps extends StackProps {}

export const Footer: FC<FooterProps> = memo(({ ...rest }) => {
  return (
    <HStack
      pb={{ base: "lg", sm: "md" }}
      px={{ base: "lg", sm: "md" }}
      {...rest}
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
