import type { Meta, StoryFn } from "@storybook/react"
import { Box, Button, ScaleFade, useBoolean } from "@yamada-ui/react"

type Story = StoryFn<typeof ScaleFade>

const meta: Meta<typeof ScaleFade> = {
  component: ScaleFade,
  title: "Components / Transitions / ScaleFade",
}

export default meta

export const basic: Story = () => {
  const [isOpen, { toggle }] = useBoolean()

  return (
    <>
      <Button onClick={toggle}>Please Click</Button>

      <ScaleFade open={isOpen}>
        <Box bg="orange.500" color="white" p="md" rounded="md" w="full">
          クリリンのことか……クリリンのことかーーーっ！！！！！
        </Box>
      </ScaleFade>

      <Box bg="purple.500" color="white" p="md" rounded="md" w="full">
        私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
      </Box>
    </>
  )
}

export const withScale: Story = () => {
  const [isOpen, { toggle }] = useBoolean()

  return (
    <>
      <Button onClick={toggle}>Please Click</Button>

      <ScaleFade open={isOpen} scale={0.75}>
        <Box bg="orange.500" color="white" p="md" rounded="md" w="full">
          クリリンのことか……クリリンのことかーーーっ！！！！！
        </Box>
      </ScaleFade>

      <Box bg="purple.500" color="white" p="md" rounded="md" w="full">
        私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
      </Box>
    </>
  )
}

export const withDuration: Story = () => {
  const [isOpen, { toggle }] = useBoolean()

  return (
    <>
      <Button onClick={toggle}>Please Click</Button>

      <ScaleFade duration={0.4} open={isOpen}>
        <Box bg="orange.500" color="white" p="md" rounded="md" w="full">
          クリリンのことか……クリリンのことかーーーっ！！！！！
        </Box>
      </ScaleFade>

      <Box bg="purple.500" color="white" p="md" rounded="md" w="full">
        私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
      </Box>
    </>
  )
}

export const exitUnmount: Story = () => {
  const [isOpen, { toggle }] = useBoolean()

  return (
    <>
      <Button onClick={toggle}>Please Click</Button>

      <ScaleFade open={isOpen} unmountOnExit>
        <Box bg="orange.500" color="white" p="md" rounded="md" w="full">
          クリリンのことか……クリリンのことかーーーっ！！！！！
        </Box>
      </ScaleFade>

      <Box bg="purple.500" color="white" p="md" rounded="md" w="full">
        私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
      </Box>
    </>
  )
}
