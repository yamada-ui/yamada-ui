import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Loading, Wrap } from '@yamada-ui/react'

export default {
  title: 'Components / Feedback / Loading',
  component: Loading,
} as ComponentMeta<typeof Loading>

export const basic: ComponentStory<typeof Loading> = () => {
  return (
    <Wrap gap='md'>
      <Loading variant='oval' size='6xl' color='primary' />
      <Loading variant='grid' size='6xl' color='secondary' />
      <Loading variant='audio' size='6xl' color='warning' />
      <Loading variant='dots' size='6xl' color='danger' />
      <Loading variant='puff' size='6xl' color='blue.500' />
      <Loading variant='rings' size='6xl' color='red.500' />
      <Loading variant='circles' size='6xl' color='green.500' />
    </Wrap>
  )
}
