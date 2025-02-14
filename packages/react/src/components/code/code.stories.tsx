import type { Meta, StoryFn } from "@storybook/react"
import { COLOR_SCHEMES } from "../../utils"
import { Wrap } from "../flex"
import { VStack } from "../stack"
import { Code } from "./code"

type Story = StoryFn<typeof Code>

const meta: Meta<typeof Code> = {
  component: Code,
  title: "Components / Code",
}

export default meta

export const Basic: Story = () => {
  return <Code>console.log("Hello, Yamada!")</Code>
}

export const WithSize: Story = () => {
  return (
    <>
      <Code colorScheme="primary" size="xs">
        console.log("Hello, Yamada!")
      </Code>

      <Code colorScheme="secondary" size="sm">
        console.log("Hello, Yamada!")
      </Code>

      <Code colorScheme="warning" size="md">
        console.log("Hello, Yamada!")
      </Code>

      <Code colorScheme="danger" size="lg">
        console.log("Hello, Yamada!")
      </Code>
    </>
  )
}

export const WithVariant: Story = () => {
  return (
    <>
      <Code colorScheme="primary" variant="solid">
        console.log("Hello, Yamada!")
      </Code>

      <Code colorScheme="secondary" variant="outline">
        console.log("Hello, Yamada!")
      </Code>

      <Code colorScheme="warning" variant="subtle">
        console.log("Hello, Yamada!")
      </Code>

      <Code colorScheme="danger" variant="surface">
        console.log("Hello, Yamada!")
      </Code>
    </>
  )
}

export const WithColorScheme: Story = () => {
  return (
    <Wrap gap="md" w="full">
      <VStack w="auto">
        {COLOR_SCHEMES.map((colorScheme) => (
          <Code key={colorScheme} colorScheme={colorScheme} variant="solid">
            console.log("Hello, Yamada!")
          </Code>
        ))}
      </VStack>

      <VStack w="auto">
        {COLOR_SCHEMES.map((colorScheme) => (
          <Code key={colorScheme} colorScheme={colorScheme} variant="outline">
            console.log("Hello, Yamada!")
          </Code>
        ))}
      </VStack>

      <VStack w="auto">
        {COLOR_SCHEMES.map((colorScheme) => (
          <Code key={colorScheme} colorScheme={colorScheme} variant="subtle">
            console.log("Hello, Yamada!")
          </Code>
        ))}
      </VStack>

      <VStack w="auto">
        {COLOR_SCHEMES.map((colorScheme) => (
          <Code key={colorScheme} colorScheme={colorScheme} variant="surface">
            console.log("Hello, Yamada!")
          </Code>
        ))}
      </VStack>
    </Wrap>
  )
}
