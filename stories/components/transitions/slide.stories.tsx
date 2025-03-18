import type { Meta, StoryFn } from "@storybook/react"
import { Button, Slide, Text, useBoolean, VStack } from "@yamada-ui/react"

type Story = StoryFn<typeof Slide>

const meta: Meta<typeof Slide> = {
  component: Slide,
  title: "Components / Transitions / Slide",
}

export default meta

export const basic: Story = () => {
  const [open, { toggle }] = useBoolean()

  return (
    <>
      <Button onClick={toggle}>Please Click</Button>

      <Slide open={open} placement="bottom">
        <VStack bg="orange.500" p="md" w="full">
          <Text color="white">
            クリリンのことか……クリリンのことかーーーっ！！！！！
          </Text>

          <Button alignSelf="flex-end" onClick={toggle}>
            Close
          </Button>
        </VStack>
      </Slide>
    </>
  )
}

export const withDuration: Story = () => {
  const [open, { toggle }] = useBoolean()

  return (
    <>
      <Button onClick={toggle}>Please Click</Button>

      <Slide duration={0.7} open={open} placement="bottom">
        <VStack bg="orange.500" p="md" w="full">
          <Text color="white">
            クリリンのことか……クリリンのことかーーーっ！！！！！
          </Text>

          <Button alignSelf="flex-end" onClick={toggle}>
            Close
          </Button>
        </VStack>
      </Slide>
    </>
  )
}

export const withPlacement: Story = () => {
  const [open, { toggle }] = useBoolean()

  return (
    <>
      <Button onClick={toggle}>Please Click</Button>

      <Slide open={open} placement="left">
        <VStack bg="orange.500" p="md" w="full">
          <Text color="white">
            クリリンのことか……クリリンのことかーーーっ！！！！！
          </Text>

          <Button alignSelf="flex-end" onClick={toggle}>
            Close
          </Button>
        </VStack>
      </Slide>
    </>
  )
}
