import type { Meta, StoryFn } from "@storybook/react"
import { useBoolean } from "../../hooks/use-boolean"
import { Box } from "../box"
import { Button } from "../button"
import { SlideFade } from "./slide-fade"

type Story = StoryFn<typeof SlideFade>

const meta: Meta<typeof SlideFade> = {
  component: SlideFade,
  title: "Components / SlideFade",
}

export default meta

export const Basic: Story = () => {
  const [open, { toggle }] = useBoolean()

  return (
    <>
      <Button onClick={toggle}>Please Click</Button>

      <SlideFade bg="orange.500" color="white" open={open} p="md" rounded="md">
        クリリンのことか……クリリンのことかーーーっ！！！！！
      </SlideFade>

      <Box bg="purple.500" color="white" p="md" rounded="md" w="full">
        私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
      </Box>
    </>
  )
}

export const Duration: Story = () => {
  const [open, { toggle }] = useBoolean()

  return (
    <>
      <Button onClick={toggle}>Please Click</Button>

      <SlideFade
        bg="orange.500"
        color="white"
        duration={0.4}
        open={open}
        p="md"
        rounded="md"
      >
        クリリンのことか……クリリンのことかーーーっ！！！！！
      </SlideFade>

      <Box bg="purple.500" color="white" p="md" rounded="md" w="full">
        私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
      </Box>
    </>
  )
}

export const OffsetX: Story = () => {
  const [open, { toggle }] = useBoolean()

  return (
    <>
      <Button onClick={toggle}>Please Click</Button>

      <SlideFade
        bg="orange.500"
        color="white"
        offsetX={8}
        offsetY={0}
        open={open}
        p="md"
        rounded="md"
      >
        クリリンのことか……クリリンのことかーーーっ！！！！！
      </SlideFade>

      <Box bg="purple.500" color="white" p="md" rounded="md" w="full">
        私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
      </Box>
    </>
  )
}

export const OffsetY: Story = () => {
  const [open, { toggle }] = useBoolean()

  return (
    <>
      <Button onClick={toggle}>Please Click</Button>

      <SlideFade
        bg="orange.500"
        color="white"
        offsetY={-8}
        open={open}
        p="md"
        rounded="md"
      >
        クリリンのことか……クリリンのことかーーーっ！！！！！
      </SlideFade>

      <Box bg="purple.500" color="white" p="md" rounded="md" w="full">
        私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
      </Box>
    </>
  )
}

export const UnmountOnExit: Story = () => {
  const [open, { toggle }] = useBoolean()

  return (
    <>
      <Button onClick={toggle}>Please Click</Button>

      <SlideFade
        bg="orange.500"
        color="white"
        offsetY={-8}
        open={open}
        p="md"
        rounded="md"
        unmountOnExit
      >
        クリリンのことか……クリリンのことかーーーっ！！！！！
      </SlideFade>

      <Box bg="purple.500" color="white" p="md" rounded="md" w="full">
        私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
      </Box>
    </>
  )
}
