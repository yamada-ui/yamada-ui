import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Loading, Wrap } from '@yamada-ui/react'

export default {
  title: 'Components / Feedback / Loading',
  component: Loading,
} as ComponentMeta<typeof Loading>

export const basic: ComponentStory<typeof Loading> = () => {
  return (
    <Wrap gap='md'>
      <Loading variant='oval' size='6xs' color='primary' />
      <Loading variant='search' size='6xs' color='secondary' />
      <Loading variant='radio' size='6xs' color='warning' />
      <Loading variant='audio' size='6xs' color='danger' />
      <Loading variant='balls' size='6xs' color='primary' />
      <Loading variant='bars' size='6xs' color='secondary' />
      <Loading variant='comment' size='6xs' color='warning' />
      <Loading variant='grid' size='6xs' color='danger' />
      <Loading variant='hearts' size='6xs' color='primary' />
      <Loading variant='rotating' size='6xs' color='secondary' />
      <Loading variant='circles' size='6xs' color='warning' />
      <Loading variant='dots' size='6xs' color='danger' />
      <Loading variant='triangle' size='6xs' color='primary' />
      <Loading variant='watch' size='6xs' color='secondary' />
      <Loading variant='progress' size='6xs' color='warning' />
    </Wrap>
  )
}
