import type { Meta, StoryFn } from "@storybook/react"
import { Heading, VStack } from "@yamada-ui/react"

type Story = StoryFn<typeof Heading>

const meta: Meta<typeof Heading> = {
  component: Heading,
  title: "Components / Typography / Heading",
}

export default meta

export const basic: Story = () => {
  return (
    <VStack gap="md">
      <Heading as="h1" isTruncated size="4xl">
        ギャルのパンティーおくれーーーっ！！！！！
      </Heading>

      <Heading as="h2" isTruncated size="3xl">
        ギャルのパンティーおくれーーーっ！！！！！
      </Heading>

      <Heading as="h2" isTruncated size="2xl">
        ギャルのパンティーおくれーーーっ！！！！！
      </Heading>

      <Heading as="h3" isTruncated size="xl">
        ギャルのパンティーおくれーーーっ！！！！！
      </Heading>

      <Heading as="h3" isTruncated size="lg">
        ギャルのパンティーおくれーーーっ！！！！！
      </Heading>

      <Heading as="h4" isTruncated size="md">
        ギャルのパンティーおくれーーーっ！！！！！
      </Heading>

      <Heading as="h5" isTruncated size="sm">
        ギャルのパンティーおくれーーーっ！！！！！
      </Heading>

      <Heading as="h6" isTruncated size="xs">
        ギャルのパンティーおくれーーーっ！！！！！
      </Heading>
    </VStack>
  )
}

export const gradient: Story = () => {
  return (
    <Heading
      bgClip="text"
      bgGradient="linear(to-l, #7928CA, #FF0080)"
      isTruncated
      size="2xl"
      w="full"
    >
      クリリンのことか……クリリンのことかーーーっ！！！！！
    </Heading>
  )
}
