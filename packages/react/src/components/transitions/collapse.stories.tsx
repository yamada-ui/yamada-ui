import type { Meta, StoryFn } from "@storybook/react"
import { useBoolean } from "../../hooks/use-boolean"
import { Box } from "../box"
import { Button } from "../button"
import { VStack } from "../stack"
import { Collapse } from "./"

type Story = StoryFn<typeof Collapse>

const meta: Meta<typeof Collapse> = {
  component: Collapse,
  title: "Components / Collapse",
}

export default meta

export const Basic: Story = () => {
  const [isOpen, { toggle }] = useBoolean()

  return (
    <VStack align="flex-start" gap={0}>
      <Button onClick={toggle}>Please Click</Button>

      <Collapse open={isOpen}>
        <Box bg="orange.500" color="white" mt="md" p="md" rounded="md" w="full">
          クリリンのことか……クリリンのことかーーーっ！！！！！
        </Box>
      </Collapse>
    </VStack>
  )
}

export const WithDuration: Story = () => {
  const [isOpen, { toggle }] = useBoolean()

  return (
    <VStack align="flex-start" gap={0}>
      <Button onClick={toggle}>Please Click</Button>

      <Collapse duration={0.7} open={isOpen}>
        <Box bg="orange.500" color="white" mt="md" p="md" rounded="md" w="full">
          クリリンのことか……クリリンのことかーーーっ！！！！！
        </Box>
      </Collapse>
    </VStack>
  )
}

export const ExitUnmount: Story = () => {
  const [isOpen, { toggle }] = useBoolean()

  return (
    <VStack align="flex-start" gap={0}>
      <Button onClick={toggle}>Please Click</Button>

      <Collapse open={isOpen} unmountOnExit>
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

export const DisabledOpacity: Story = () => {
  const [isOpen, { toggle }] = useBoolean()

  return (
    <VStack align="flex-start" gap={0}>
      <Button onClick={toggle}>Please Click</Button>

      <Collapse animationOpacity={false} open={isOpen}>
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

export const StartingHeight: Story = () => {
  const [isOpen, { toggle }] = useBoolean()

  return (
    <>
      <Button onClick={toggle}>Please Click</Button>

      <Collapse open={isOpen} startingHeight={20}>
        <Box color="purple.500">
          私の戦闘力は530000です。
          <br />
          ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
        </Box>
      </Collapse>
    </>
  )
}