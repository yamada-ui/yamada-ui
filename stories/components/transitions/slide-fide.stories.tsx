import type { Meta, StoryFn } from "@storybook/react"
import { Box, Button, SlideFade, useBoolean } from "@yamada-ui/react"

type Story = StoryFn<typeof SlideFade>

const meta: Meta<typeof SlideFade> = {
  component: SlideFade,
  title: "Components / Transitions / SlideFade",
}

export default meta

export const basic: Story = () => {
  const [isOpen, { toggle }] = useBoolean()

  return (
    <>
      <Button onClick={toggle}>Please Click</Button>

      <SlideFade isOpen={isOpen}>
        <Box bg="orange.500" color="white" p="md" rounded="md" w="full">
          クリリンのことか……クリリンのことかーーーっ！！！！！
        </Box>
      </SlideFade>

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

      <SlideFade duration={0.4} isOpen={isOpen}>
        <Box bg="orange.500" color="white" p="md" rounded="md" w="full">
          クリリンのことか……クリリンのことかーーーっ！！！！！
        </Box>
      </SlideFade>

      <Box bg="purple.500" color="white" p="md" rounded="md" w="full">
        私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
      </Box>
    </>
  )
}

export const withOffsetX: Story = () => {
  const [isOpen, { toggle }] = useBoolean()

  return (
    <>
      <Button onClick={toggle}>Please Click</Button>

      <SlideFade isOpen={isOpen} offsetX={20} offsetY={0}>
        <Box bg="orange.500" color="white" p="md" rounded="md" w="full">
          クリリンのことか……クリリンのことかーーーっ！！！！！
        </Box>
      </SlideFade>

      <Box bg="purple.500" color="white" p="md" rounded="md" w="full">
        私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
      </Box>
    </>
  )
}

export const withOffsetY: Story = () => {
  const [isOpen, { toggle }] = useBoolean()

  return (
    <>
      <Button onClick={toggle}>Please Click</Button>

      <SlideFade isOpen={isOpen} offsetY={-20}>
        <Box bg="orange.500" color="white" p="md" rounded="md" w="full">
          クリリンのことか……クリリンのことかーーーっ！！！！！
        </Box>
      </SlideFade>

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

      <SlideFade isOpen={isOpen} unmountOnExit>
        <Box bg="orange.500" color="white" p="md" rounded="md" w="full">
          クリリンのことか……クリリンのことかーーーっ！！！！！
        </Box>
      </SlideFade>

      <Box bg="purple.500" color="white" p="md" rounded="md" w="full">
        私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
      </Box>
    </>
  )
}
