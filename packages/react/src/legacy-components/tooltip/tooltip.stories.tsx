import type { Meta, StoryFn } from "@storybook/react"
import { Center } from "../../components/center"
import { Text } from "../../components/text"
import { Tooltip } from "./tooltip"

type Story = StoryFn<typeof Tooltip>

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
  title: "Components / Tooltip",
}

export default meta

export const Basic: Story = () => {
  return (
    <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Tooltip label="へっ！きたねぇ花火だ">
        <Text>Please Hover</Text>
      </Tooltip>
    </Center>
  )
}

export const WithDuration: Story = () => {
  return (
    <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Tooltip duration={0.7} label="へっ！きたねぇ花火だ">
        <Text>Please Hover</Text>
      </Tooltip>
    </Center>
  )
}

export const WithOffset: Story = () => {
  return (
    <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Tooltip label="へっ！きたねぇ花火だ" offset={[16, 16]}>
        <Text>Please Hover</Text>
      </Tooltip>
    </Center>
  )
}

export const WithGutter: Story = () => {
  return (
    <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Tooltip gutter={32} label="へっ！きたねぇ花火だ">
        <Text>Please Hover</Text>
      </Tooltip>
    </Center>
  )
}

export const WithAnimation: Story = () => {
  return (
    <Center
      flexDirection="column"
      gap="md"
      h="calc(100vh - 16px * 2)"
      w="calc(100vw - 16px * 2)"
    >
      <Tooltip animation="scale" label="へっ！きたねぇ花火だ">
        <Text>Open scale Tooltip</Text>
      </Tooltip>

      <Tooltip animation="top" label="へっ！きたねぇ花火だ">
        <Text>Open top Hover</Text>
      </Tooltip>

      <Tooltip animation="left" label="へっ！きたねぇ花火だ">
        <Text>Open left Hover</Text>
      </Tooltip>

      <Tooltip animation="bottom" label="へっ！きたねぇ花火だ">
        <Text>Open bottom Hover</Text>
      </Tooltip>

      <Tooltip animation="right" label="へっ！きたねぇ花火だ">
        <Text>Open right Hover</Text>
      </Tooltip>
    </Center>
  )
}

export const WithDelay: Story = () => {
  return (
    <Center
      flexDirection="column"
      gap="md"
      h="calc(100vh - 16px * 2)"
      w="calc(100vw - 16px * 2)"
    >
      <Tooltip label="へっ！きたねぇ花火だ" openDelay={500} placement="top">
        <Text>Delay Open 500ms</Text>
      </Tooltip>

      <Tooltip closeDelay={500} label="へっ！きたねぇ花火だ" placement="bottom">
        <Text>Delay Close 500ms</Text>
      </Tooltip>
    </Center>
  )
}

export const WithPlacement: Story = () => {
  return (
    <Center
      flexDirection="column"
      gap="md"
      h="calc(100vh - 16px * 2)"
      w="calc(100vw - 16px * 2)"
    >
      <Tooltip label="へっ！きたねぇ花火だ" placement="top">
        <Text>Open top Tooltip</Text>
      </Tooltip>

      <Tooltip label="へっ！きたねぇ花火だ" placement="left">
        <Text>Open left Tooltip</Text>
      </Tooltip>

      <Tooltip label="へっ！きたねぇ花火だ" placement="bottom">
        <Text>Open bottom Tooltip</Text>
      </Tooltip>

      <Tooltip label="へっ！きたねぇ花火だ" placement="right">
        <Text>Open right Tooltip</Text>
      </Tooltip>

      <Tooltip label="へっ！きたねぇ花火だ" placement="top-start">
        <Text>Open top start Tooltip</Text>
      </Tooltip>

      <Tooltip label="へっ！きたねぇ花火だ" placement="top-end">
        <Text>Open top end Tooltip</Text>
      </Tooltip>

      <Tooltip label="へっ！きたねぇ花火だ" placement="left-start">
        <Text>Open left start Tooltip</Text>
      </Tooltip>

      <Tooltip label="へっ！きたねぇ花火だ" placement="left-end">
        <Text>Open left end Tooltip</Text>
      </Tooltip>

      <Tooltip label="へっ！きたねぇ花火だ" placement="bottom-start">
        <Text>Open bottom start Tooltip</Text>
      </Tooltip>

      <Tooltip label="へっ！きたねぇ花火だ" placement="bottom-end">
        <Text>Open bottom end Tooltip</Text>
      </Tooltip>

      <Tooltip label="へっ！きたねぇ花火だ" placement="right-start">
        <Text>Open right start Tooltip</Text>
      </Tooltip>

      <Tooltip label="へっ！きたねぇ花火だ" placement="right-end">
        <Text>Open right end Tooltip</Text>
      </Tooltip>
    </Center>
  )
}

export const WithDisabled: Story = () => {
  return (
    <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Tooltip disabled label="へっ！きたねぇ花火だ">
        <Text>Please Hover</Text>
      </Tooltip>
    </Center>
  )
}

export const AlwaysOpen: Story = () => {
  return (
    <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Tooltip label="へっ！きたねぇ花火だ" open>
        <Text>Please Hover</Text>
      </Tooltip>
    </Center>
  )
}
