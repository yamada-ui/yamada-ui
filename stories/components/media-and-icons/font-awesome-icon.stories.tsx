import { faPoo } from '@fortawesome/free-solid-svg-icons'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { FontAwesomeIcon, HStack } from '@yamada-ui/react'

export default {
  title: 'Components / Media and Icons / FontAwesomeIcon',
  component: FontAwesomeIcon,
} as ComponentMeta<typeof FontAwesomeIcon>

export const basic: ComponentStory<typeof FontAwesomeIcon> = () => {
  return (
    <HStack alignItems='flex-end'>
      <FontAwesomeIcon icon={faPoo} size='6xl' color='orange.700' />

      <FontAwesomeIcon icon={faPoo} size='5xl' color='orange.700' />

      <FontAwesomeIcon icon={faPoo} size='4xl' color='orange.700' />

      <FontAwesomeIcon icon={faPoo} size='3xl' color='orange.700' />

      <FontAwesomeIcon icon={faPoo} size='2xl' color='orange.700' />

      <FontAwesomeIcon icon={faPoo} size='xl' color='orange.700' />
    </HStack>
  )
}
