import type { CenterProps } from "@yamada-ui/react"
import type { ReactNode } from "react"
import type { NextLinkButtonProps } from "./next-link"
import { ButtonGroup, Center, Heading, Text, VStack } from "@yamada-ui/react"
import { NextLinkButton } from "./next-link"

export interface HeroProps extends Omit<CenterProps, "title"> {
  description: ReactNode
  title: ReactNode
  primaryButtonProps?: NextLinkButtonProps
  secondaryButtonProps?: NextLinkButtonProps
}

export function Hero({
  description,
  title,
  primaryButtonProps,
  secondaryButtonProps,
  ...rest
}: HeroProps) {
  return (
    <Center as="header" py={{ base: "4xl", sm: "xl" }} {...rest}>
      <VStack alignItems="center" maxW="3xl" w="auto">
        <VStack gap="sm" textAlign="center">
          <Heading size="5xl" textWrap="balance">
            {title}
          </Heading>
          <Text fontSize={{ base: "lg", sm: "md" }} textWrap="balance">
            {description}
          </Text>
        </VStack>

        {primaryButtonProps || secondaryButtonProps ? (
          <ButtonGroup.Root size="xs">
            {primaryButtonProps ? (
              <NextLinkButton fontSize="sm" {...primaryButtonProps} />
            ) : null}
            {secondaryButtonProps ? (
              <NextLinkButton
                variant="ghost"
                fontSize="sm"
                {...secondaryButtonProps}
              />
            ) : null}
          </ButtonGroup.Root>
        ) : null}
      </VStack>
    </Center>
  )
}
