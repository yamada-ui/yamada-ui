import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Divider, Flex } from '@yamada-ui/react'

export default {
  title: 'Components / Layouts / Divider',
  component: Divider,
} as ComponentMeta<typeof Divider>

export const horizontal: ComponentStory<typeof Divider> = () => {
  return (
    <>
      <Divider w='lg' orientation='horizontal' variant='solid' />

      <Divider w='lg' orientation='horizontal' variant='dashed' />

      <Divider w='lg' orientation='horizontal' variant='dotted' />
    </>
  )
}

export const vertical: ComponentStory<typeof Divider> = () => {
  return (
    <Flex gap='md'>
      <Divider h='lg' orientation='vertical' variant='solid' />

      <Divider h='lg' orientation='vertical' variant='dashed' />

      <Divider h='lg' orientation='vertical' variant='dotted' />
    </Flex>
  )
}
