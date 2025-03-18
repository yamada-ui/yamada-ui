import type { Meta, StoryFn } from "@storybook/react"
import { Box, Button, Collapse, useBoolean, VStack } from "@yamada-ui/react"

type Story = StoryFn<typeof Collapse>

const meta: Meta<typeof Collapse> = {
  component: Collapse,
  title: "Components / Transitions / Collapse",
}

export default meta

export const basic: Story = () => {
  const [open, { toggle }] = useBoolean()

  return (
    <VStack align="flex-start" gap={0}>
      <Button onClick={toggle}>Please Click</Button>

      <Collapse open={open}>
        <Box bg="orange.500" color="white" mt="md" p="md" rounded="md" w="full">
          クリリンのことか……クリリンのことかーーーっ！！！！！
        </Box>
      </Collapse>
    </VStack>
  )
}

export const withDuration: Story = () => {
  const [open, { toggle }] = useBoolean()

  return (
    <VStack align="flex-start" gap={0}>
      <Button onClick={toggle}>Please Click</Button>

      <Collapse duration={0.7} open={open}>
        <Box bg="orange.500" color="white" mt="md" p="md" rounded="md" w="full">
          クリリンのことか……クリリンのことかーーーっ！！！！！
        </Box>
      </Collapse>
    </VStack>
  )
}

export const exitUnmount: Story = () => {
  const [open, { toggle }] = useBoolean()

  return (
    <VStack align="flex-start" gap={0}>
      <Button onClick={toggle}>Please Click</Button>

      <Collapse open={open} unmountOnExit>
        <Box bg="orange.500" color="white" mt="md" p="md" rounded="md" w="full">
          クリリンのことか……クリリンのことかーーーっ！！！！！
        </Box>
      </Collapse>

      <Box bg="purple.500" color="white" mt="md" p="md" rounded="md" w="full">
        私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
      </Box>
    </VStack>
  )
}

export const disabledOpacity: Story = () => {
  const [open, { toggle }] = useBoolean()

  return (
    <VStack align="flex-start" gap={0}>
      <Button onClick={toggle}>Please Click</Button>

      <Collapse animationOpacity={false} open={open}>
        <Box bg="orange.500" color="white" mt="md" p="md" rounded="md" w="full">
          クリリンのことか……クリリンのことかーーーっ！！！！！
        </Box>
      </Collapse>

      <Box bg="purple.500" color="white" mt="md" p="md" rounded="md" w="full">
        私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
      </Box>
    </VStack>
  )
}

export const startingHeight: Story = () => {
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
