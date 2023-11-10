import { Meta, StoryFn } from "@storybook/react"
import { VStack, Heading } from "@yamada-ui/react"

type Story = StoryFn<typeof Heading>

const meta: Meta<typeof Heading> = {
  title: "Components / Typography / Heading",
  component: Heading,
}

export default meta

export const basic: Story = () => {
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

export const gradient: Story = () => {
  return (
    <Heading
      w="full"
      size="2xl"
      bgGradient="linear(to-l, #7928CA, #FF0080)"
      bgClip="text"
      isTruncated
    >
      クリリンのことか……クリリンのことかーーーっ！！！！！
    </Heading>
  )
}
