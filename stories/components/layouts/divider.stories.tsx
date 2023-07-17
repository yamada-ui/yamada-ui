import { Meta, StoryFn } from '@storybook/react'
import { Divider, Flex } from '@yamada-ui/react'

type Story = StoryFn<typeof Divider>

const meta: Meta<typeof Divider> = {
  title: 'Components / Layouts / Divider',
  component: Divider,
}

export default meta

export const horizontal: Story = () => {
  return (
    <>
      <Divider w='lg' orientation='horizontal' variant='solid' />

      <Divider w='lg' orientation='horizontal' variant='dashed' />

      <Divider w='lg' orientation='horizontal' variant='dotted' />
    </>
  )
}

export const vertical: Story = () => {
  return (
    <Flex gap='md'>
      <Divider h='lg' orientation='vertical' variant='solid' />

      <Divider h='lg' orientation='vertical' variant='dashed' />

      <Divider h='lg' orientation='vertical' variant='dotted' />
    </Flex>
  )
}
