import { faPoo } from '@fortawesome/free-solid-svg-icons'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Icon } from '@yamada-ui/fontawesome'
import { HStack } from '@yamada-ui/react'

export default {
  title: 'Components / Media And Icons / FontAwesomeIcon',
  component: Icon,
} as ComponentMeta<typeof Icon>

export const basic: ComponentStory<typeof Icon> = () => {
  return (
    <HStack alignItems='flex-end'>
      <Icon icon={faPoo} size='6xl' color='orange.700' />

      <Icon icon={faPoo} size='5xl' color='orange.700' />

      <Icon icon={faPoo} size='4xl' color='orange.700' />

      <Icon icon={faPoo} size='3xl' color='orange.700' />

      <Icon icon={faPoo} size='2xl' color='orange.700' />

      <Icon icon={faPoo} size='xl' color='orange.700' />
    </HStack>
  )
}
