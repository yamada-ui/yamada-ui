import { faSkull } from '@fortawesome/free-solid-svg-icons'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Icon } from '@yamada-ui/fontawesome'
import { Center } from '@yamada-ui/react'

export default {
  title: 'Components / Layouts / Center',
  component: Center,
} as ComponentMeta<typeof Center>

export const basic: ComponentStory<typeof Center> = () => {
  return (
    <Center minW='xs' minH='xs' rounded='md' bg='primary' color='white'>
      Center
    </Center>
  )
}

export const iconWithFrame: ComponentStory<typeof Center> = () => {
  return (
    <Center minW='6xs' minH='6xs' rounded='full' bg='gray.500' color='white'>
      <Icon icon={faSkull} size='3xl' />
    </Center>
  )
}
