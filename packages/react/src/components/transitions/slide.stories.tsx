import type { Meta, StoryFn } from "@storybook/react"
import { useBoolean } from "../../hooks/use-boolean"
import { Button } from "../button"
import { VStack } from "../stack"
import { Text } from "../text"
import { Slide } from "./"

type Story = StoryFn<typeof Slide>

const meta: Meta<typeof Slide> = {
  component: Slide,
  title: "Components / Slide",
}

export default meta

export const Basic: Story = () => {
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

export const WithDuration: Story = () => {
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

export const WithPlacement: Story = () => {
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
