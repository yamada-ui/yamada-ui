import type { Meta, StoryFn } from "@storybook/react"
import { useBoolean } from "../../hooks/use-boolean"
import { Box } from "../box"
import { Button } from "../button"
import { VStack } from "../stack"
import { Collapse } from "./collapse"

type Story = StoryFn<typeof Collapse>

const meta: Meta<typeof Collapse> = {
  component: Collapse,
  title: "Components / Collapse",
}

export default meta

export const Basic: Story = () => {
  const [open, { toggle }] = useBoolean()

  return (
    <VStack align="flex-start" gap={0}>
      <Button onClick={toggle}>Please Click</Button>

      <Collapse open={open}>
        <Box bg="orange.500" color="white" mt="md" p="md" rounded="l2" w="full">
          クリリンのことか……クリリンのことかーーーっ！！！！！
        </Box>
      </Collapse>
    </VStack>
  )
}

export const Duration: Story = () => {
  const [open, { toggle }] = useBoolean()

  return (
    <VStack align="flex-start" gap={0}>
      <Button onClick={toggle}>Please Click</Button>

      <Collapse duration={0.7} open={open}>
        <Box bg="orange.500" color="white" mt="md" p="md" rounded="l2" w="full">
          クリリンのことか……クリリンのことかーーーっ！！！！！
        </Box>
      </Collapse>
    </VStack>
  )
}

export const UnmountOnExit: Story = () => {
  const [open, { toggle }] = useBoolean()

  return (
    <VStack align="flex-start" gap={0}>
      <Button onClick={toggle}>Please Click</Button>

      <Collapse open={open} unmountOnExit>
        <Box bg="orange.500" color="white" mt="md" p="md" rounded="l2" w="full">
          クリリンのことか……クリリンのことかーーーっ！！！！！
        </Box>
      </Collapse>

      <Box bg="purple.500" color="white" mt="md" p="md" rounded="l2" w="full">
        私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
      </Box>
    </VStack>
  )
}

export const AnimationOpacity: Story = () => {
  const [open, { toggle }] = useBoolean()

  return (
    <VStack align="flex-start" gap={0}>
      <Button onClick={toggle}>Please Click</Button>

      <Collapse animationOpacity={false} open={open}>
        <Box bg="orange.500" color="white" mt="md" p="md" rounded="l2" w="full">
          クリリンのことか……クリリンのことかーーーっ！！！！！
        </Box>
      </Collapse>

      <Box bg="purple.500" color="white" mt="md" p="md" rounded="l2" w="full">
        私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
      </Box>
    </VStack>
  )
}

export const StartingHeight: Story = () => {
  const [open, { toggle }] = useBoolean()

  return (
    <>
      <Button onClick={toggle}>Please Click</Button>

      <Collapse open={open} startingHeight={20}>
        <Box color="purple.500">
          私の戦闘力は530000です。
          <br />
          ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
        </Box>
      </Collapse>
    </>
  )
}
