import { History } from "@yamada-ui/lucide"
import { Button, HStack, IconButton } from "@yamada-ui/react"
import type { StackProps } from "@yamada-ui/react"
import { memo } from "react"
import type { FC } from "react"

export type FooterProps = StackProps & {}

export const Footer: FC<FooterProps> = memo(({ ...rest }) => {
  return (
    <HStack
      px={{ base: "lg", sm: "md" }}
      pb={{ base: "lg", sm: "md" }}
      {...rest}
    >
      <Button colorScheme="primary" size={{ base: "lg", sm: "md" }}>
        Submit
      </Button>

      <IconButton
        variant="ghost"
        icon={<History fontSize="2xl" color="muted" />}
        size={{ base: "lg" }}
      />
    </HStack>
  )
})

Footer.displayName = "Footer"
