import type { StackProps } from "@yamada-ui/react"
import type { FC } from "react"
import { MountainIcon } from "@yamada-ui/lucide"
import { Heading, HStack, Spacer, Text, VStack } from "@yamada-ui/react"
import { memo } from "react"

export interface CompanyProps extends StackProps {}

export const Company: FC<CompanyProps> = memo(({ ...rest }) => {
  return (
    <VStack
      as="section"
      bgGradient={[
        "linear(-60deg, primary.500, secondary.500)",
        "linear(-60deg, primary.600, secondary.600)",
      ]}
      color="white"
      display={{ base: "flex", lg: "none" }}
      p="lg"
      {...rest}
    >
      <HStack as="header" alignItems="flex-end" gap="sm">
        <MountainIcon fontSize="3xl" />

        <Heading as="h2" size="md" fontWeight="normal" lineHeight={1.125}>
          Yamada Inc
        </Heading>
      </HStack>

      <Spacer />

      <VStack gap="sm">
        <Text fontSize="lg">
          “This library has saved me countless hours of work and helped me
          deliver stunning designs to my clients faster than ever before.”
        </Text>

        <Text color="whiteAlpha.800">Hirotomo Yamada</Text>
      </VStack>
    </VStack>
  )
})

Company.displayName = "Company"
