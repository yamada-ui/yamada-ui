import type { Meta, StoryFn } from "@storybook/react-vite"
import { useBoolean } from "../../hooks/use-boolean"
import { Box } from "../box"
import { Button } from "../button"
import { FadeScale } from "./fade-scale"

type Story = StoryFn<typeof FadeScale>

const meta: Meta<typeof FadeScale> = {
  component: FadeScale,
  title: "Components / FadeScale",
}

export default meta

export const Basic: Story = () => {
  const [open, { toggle }] = useBoolean()

  return (
    <>
      <Button onClick={toggle}>Please Click</Button>

      <FadeScale bg="orange.500" color="white" open={open} p="md" rounded="l2">
        クリリンのことか……クリリンのことかーーーっ！！！！！
      </FadeScale>

      <Box bg="purple.500" color="white" p="md" rounded="l2" w="full">
        私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
      </Box>
    </>
  )
}

export const Scale: Story = () => {
  const [open, { toggle }] = useBoolean()

  return (
    <>
      <Button onClick={toggle}>Please Click</Button>

      <FadeScale
        bg="orange.500"
        color="white"
        open={open}
        p="md"
        rounded="l2"
        scale={0.75}
      >
        クリリンのことか……クリリンのことかーーーっ！！！！！
      </FadeScale>

      <Box bg="purple.500" color="white" p="md" rounded="l2" w="full">
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

      <FadeScale
        bg="orange.500"
        color="white"
        duration={0.4}
        open={open}
        p="md"
        rounded="l2"
      >
        クリリンのことか……クリリンのことかーーーっ！！！！！
      </FadeScale>

      <Box bg="purple.500" color="white" p="md" rounded="l2" w="full">
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

      <FadeScale
        bg="orange.500"
        color="white"
        open={open}
        p="md"
        rounded="l2"
        unmountOnExit
      >
        クリリンのことか……クリリンのことかーーーっ！！！！！
      </FadeScale>

      <Box bg="purple.500" color="white" p="md" rounded="l2" w="full">
        私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
      </Box>
    </>
  )
}
