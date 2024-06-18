import { Heading, HStack, Spacer, Text, VStack } from "@yamada-ui/react"
import type { StackProps } from "@yamada-ui/react"
import { Mountain } from "@yamada-ui/lucide"
import { memo } from "react"
import type { FC } from "react"

export type CompanyProps = StackProps & {}

export const Company: FC<CompanyProps> = memo(({ ...rest }) => {
  return (
    <VStack
      as="section"
      display={{ base: "flex", lg: "none" }}
      bgGradient={[
        "linear(-60deg, primary.500, secondary.500)",
        "linear(-60deg, primary.600, secondary.600)",
      ]}
      color="white"
      p="lg"
      {...rest}
    >
      <HStack as="header" alignItems="flex-end" gap="sm">
        <Mountain size="3xl" />

        <Heading as="h2" size="md" lineHeight={1.125} fontWeight="normal">
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
