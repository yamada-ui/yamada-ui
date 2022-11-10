import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Avatar, Box, Flex } from '@yamada-ui/react'

export default {
  title: 'Components / Media and Icons / Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>

export const basic: ComponentStory<typeof Avatar> = () => {
  return (
    <Flex>
      <Avatar name='Son Goku' src='https://img.icons8.com/windows/512/son-goku.png' margin='1.5' />
      <Avatar name='Son Goku' src='https://img.icons8.com/windows/512/son-goku.pn' margin='1.5' />
    </Flex>
  )
}

export const withSize: ComponentStory<typeof Avatar> = () => {
  return (
    <Flex>
      <Avatar
        name='Son Goku'
        src='https://img.icons8.com/windows/512/son-goku.png'
        margin='1.5'
        size='2xl'
      />
      <Avatar
        name='Son Goku'
        src='https://img.icons8.com/windows/512/son-goku.pn'
        margin='1.5'
        size='4xl'
      />
    </Flex>
  )
}
