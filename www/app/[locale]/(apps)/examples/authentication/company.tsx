import type { StackProps } from "@yamada-ui/react"
import {
  Heading,
  HStack,
  MountainIcon,
  Spacer,
  Text,
  VStack,
} from "@yamada-ui/react"

export interface CompanyProps extends StackProps {}

export function Company({ ...rest }: CompanyProps) {
  return (
    <VStack
      as="section"
      bgGradient={[
        "linear(-60deg, blue.500, red.500)",
        "linear(-60deg, blue.600, red.600)",
      ]}
      color="white"
      display={{ base: "flex", lg: "none" }}
      p="lg"
      {...rest}
    >
      <HStack as="header" alignItems="flex-end" gap="sm">
        <MountainIcon fontSize="3xl" />

        <Heading as="h2" size="2xl" fontWeight="normal" lineHeight={1.125}>
          Yamada Inc
        </Heading>
      </HStack>

      <Spacer />

      <VStack gap="md">
        <Text fontSize="lg">
          This library has saved me countless hours of work and helped me
          deliver stunning designs to my clients faster than ever before.
        </Text>

        <Text opacity={0.7}>Hirotomo Yamada</Text>
      </VStack>
    </VStack>
  )
}
