import type { Meta, StoryFn } from "@storybook/react-vite"
import { VStack } from "../stack"
import { Heading } from "./heading"

type Story = StoryFn<typeof Heading>

const meta: Meta<typeof Heading> = {
  component: Heading,
  title: "Components / Heading",
}

export default meta

export const Basic: Story = () => {
  return (
    <VStack gap="md">
      <Heading as="h1" size="4xl" truncated>
        ギャルのパンティーおくれーーーっ！！！！！
      </Heading>

      <Heading as="h2" size="3xl" truncated>
        ギャルのパンティーおくれーーーっ！！！！！
      </Heading>

      <Heading as="h2" size="2xl" truncated>
        ギャルのパンティーおくれーーーっ！！！！！
      </Heading>

      <Heading as="h3" size="xl" truncated>
        ギャルのパンティーおくれーーーっ！！！！！
      </Heading>

      <Heading as="h3" size="lg" truncated>
        ギャルのパンティーおくれーーーっ！！！！！
      </Heading>

      <Heading as="h4" size="md" truncated>
        ギャルのパンティーおくれーーーっ！！！！！
      </Heading>

      <Heading as="h5" size="sm" truncated>
        ギャルのパンティーおくれーーーっ！！！！！
      </Heading>

      <Heading as="h6" size="xs" truncated>
        ギャルのパンティーおくれーーーっ！！！！！
      </Heading>
    </VStack>
  )
}

export const Gradient: Story = () => {
  return (
    <Heading
      size="2xl"
      bgClip="text"
      bgGradient="linear(to-l, #7928CA, #FF0080)"
      truncated
      w="full"
    >
      クリリンのことか……クリリンのことかーーーっ！！！！！
    </Heading>
  )
}
