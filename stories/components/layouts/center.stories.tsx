import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Center, FontAwesomeIcon } from '@yamada-ui/react'
import { faSkull } from '@fortawesome/free-solid-svg-icons'

export default {
  title: 'Components / Layout / Center',
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
      <FontAwesomeIcon icon={faSkull} size='3xl' />
    </Center>
  )
}
