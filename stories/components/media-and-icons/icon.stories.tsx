import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Icon, HStack } from '@yamada-ui/react'
import { FaRobot } from 'react-icons/fa'

export default {
  title: 'Components / Media And Icons / Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>

export const basic: ComponentStory<typeof Icon> = () => {
  return (
    <HStack alignItems='flex-end'>
      <Icon as={FaRobot} size='6xl' color='gray.400' />

      <Icon as={FaRobot} size='5xl' color='gray.400' />

      <Icon as={FaRobot} size='4xl' color='gray.400' />

      <Icon as={FaRobot} size='3xl' color='gray.400' />

      <Icon as={FaRobot} size='2xl' color='gray.400' />

      <Icon as={FaRobot} size='xl' color='gray.400' />
    </HStack>
  )
}
