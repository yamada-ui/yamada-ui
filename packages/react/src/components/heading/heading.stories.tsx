import type { Meta, StoryFn } from "@storybook/react"
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
      <Heading as="h1" size="4xl" isTruncated>
        ギャルのパンティーおくれーーーっ！！！！！
      </Heading>

      <Heading as="h2" size="3xl" isTruncated>
        ギャルのパンティーおくれーーーっ！！！！！
      </Heading>

      <Heading as="h2" size="2xl" isTruncated>
        ギャルのパンティーおくれーーーっ！！！！！
      </Heading>

      <Heading as="h3" size="xl" isTruncated>
        ギャルのパンティーおくれーーーっ！！！！！
      </Heading>

      <Heading as="h3" size="lg" isTruncated>
        ギャルのパンティーおくれーーーっ！！！！！
      </Heading>

      <Heading as="h4" size="md" isTruncated>
        ギャルのパンティーおくれーーーっ！！！！！
      </Heading>

      <Heading as="h5" size="sm" isTruncated>
        ギャルのパンティーおくれーーーっ！！！！！
      </Heading>

      <Heading as="h6" size="xs" isTruncated>
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
      isTruncated
      w="full"
    >
      クリリンのことか……クリリンのことかーーーっ！！！！！
    </Heading>
  )
}
