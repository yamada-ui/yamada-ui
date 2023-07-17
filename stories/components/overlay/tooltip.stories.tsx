import { Meta, StoryFn } from '@storybook/react'
import { Tooltip, Text, Center } from '@yamada-ui/react'

type Story = StoryFn<typeof Tooltip>

const meta: Meta<typeof Tooltip> = {
  title: 'Components / Overlay / Tooltip',
  component: Tooltip,
}

export default meta

export const basic: Story = () => {
  return (
    <Center w='calc(100vw - 16px * 2)' h='calc(100vh - 16px * 2)'>
      <Tooltip label='へっ！きたねぇ花火だ'>
        <Text>Please Hover</Text>
      </Tooltip>
    </Center>
  )
}

export const withDuration: Story = () => {
  return (
    <Center w='calc(100vw - 16px * 2)' h='calc(100vh - 16px * 2)'>
      <Tooltip label='へっ！きたねぇ花火だ' duration={0.7}>
        <Text>Please Hover</Text>
      </Tooltip>
    </Center>
  )
}

export const withOffset: Story = () => {
  return (
    <Center w='calc(100vw - 16px * 2)' h='calc(100vh - 16px * 2)'>
      <Tooltip label='へっ！きたねぇ花火だ' offset={[16, 16]}>
        <Text>Please Hover</Text>
      </Tooltip>
    </Center>
  )
}

export const withGutter: Story = () => {
  return (
    <Center w='calc(100vw - 16px * 2)' h='calc(100vh - 16px * 2)'>
      <Tooltip label='へっ！きたねぇ花火だ' gutter={32}>
        <Text>Please Hover</Text>
      </Tooltip>
    </Center>
  )
}

export const withAnimation: Story = () => {
  return (
    <Center
      w='calc(100vw - 16px * 2)'
      h='calc(100vh - 16px * 2)'
      flexDirection='column'
      gap='md'
    >
      <Tooltip label='へっ！きたねぇ花火だ' animation='scale'>
        <Text>Open scale Tooltip</Text>
      </Tooltip>

      <Tooltip label='へっ！きたねぇ花火だ' animation='top'>
        <Text>Open top Hover</Text>
      </Tooltip>

      <Tooltip label='へっ！きたねぇ花火だ' animation='left'>
        <Text>Open left Hover</Text>
      </Tooltip>

      <Tooltip label='へっ！きたねぇ花火だ' animation='bottom'>
        <Text>Open bottom Hover</Text>
      </Tooltip>

      <Tooltip label='へっ！きたねぇ花火だ' animation='right'>
        <Text>Open right Hover</Text>
      </Tooltip>
    </Center>
  )
}

export const withDelay: Story = () => {
  return (
    <Center
      w='calc(100vw - 16px * 2)'
      h='calc(100vh - 16px * 2)'
      flexDirection='column'
      gap='md'
    >
      <Tooltip label='へっ！きたねぇ花火だ' placement='top' openDelay={500}>
        <Text>Delay Open 500ms</Text>
      </Tooltip>

      <Tooltip label='へっ！きたねぇ花火だ' placement='bottom' closeDelay={500}>
        <Text>Delay Open 500ms</Text>
      </Tooltip>
    </Center>
  )
}

export const withPlacement: Story = () => {
  return (
    <Center
      w='calc(100vw - 16px * 2)'
      h='calc(100vh - 16px * 2)'
      flexDirection='column'
      gap='md'
    >
      <Tooltip label='へっ！きたねぇ花火だ' placement='top'>
        <Text>Open top Tooltip</Text>
      </Tooltip>

      <Tooltip label='へっ！きたねぇ花火だ' placement='left'>
        <Text>Open left Tooltip</Text>
      </Tooltip>

      <Tooltip label='へっ！きたねぇ花火だ' placement='bottom'>
        <Text>Open bottom Tooltip</Text>
      </Tooltip>

      <Tooltip label='へっ！きたねぇ花火だ' placement='right'>
        <Text>Open right Tooltip</Text>
      </Tooltip>

      <Tooltip label='へっ！きたねぇ花火だ' placement='top-start'>
        <Text>Open top start Tooltip</Text>
      </Tooltip>

      <Tooltip label='へっ！きたねぇ花火だ' placement='top-end'>
        <Text>Open top end Tooltip</Text>
      </Tooltip>

      <Tooltip label='へっ！きたねぇ花火だ' placement='left-start'>
        <Text>Open left start Tooltip</Text>
      </Tooltip>

      <Tooltip label='へっ！きたねぇ花火だ' placement='left-end'>
        <Text>Open left end Tooltip</Text>
      </Tooltip>

      <Tooltip label='へっ！きたねぇ花火だ' placement='bottom-start'>
        <Text>Open bottom start Tooltip</Text>
      </Tooltip>

      <Tooltip label='へっ！きたねぇ花火だ' placement='bottom-end'>
        <Text>Open bottom end Tooltip</Text>
      </Tooltip>

      <Tooltip label='へっ！きたねぇ花火だ' placement='right-start'>
        <Text>Open right start Tooltip</Text>
      </Tooltip>

      <Tooltip label='へっ！きたねぇ花火だ' placement='right-end'>
        <Text>Open right end Tooltip</Text>
      </Tooltip>
    </Center>
  )
}

export const withDisabled: Story = () => {
  return (
    <Center w='calc(100vw - 16px * 2)' h='calc(100vh - 16px * 2)'>
      <Tooltip label='へっ！きたねぇ花火だ' isDisabled>
        <Text>Please Hover</Text>
      </Tooltip>
    </Center>
  )
}

export const alwaysOpen: Story = () => {
  return (
    <Center w='calc(100vw - 16px * 2)' h='calc(100vh - 16px * 2)'>
      <Tooltip label='へっ！きたねぇ花火だ' isOpen>
        <Text>Please Hover</Text>
      </Tooltip>
    </Center>
  )
}
