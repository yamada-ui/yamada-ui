import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Avatar, AvatarBadge, AvatarGroup, Wrap } from '@yamada-ui/react'

export default {
  title: 'Components / Media And Icons / Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>

export const basic: ComponentStory<typeof Avatar> = () => {
  return (
    <Avatar name='Hirotomo Yamada' src='https://avatars.githubusercontent.com/u/84060430?v=4' />
  )
}

export const withSize: ComponentStory<typeof Avatar> = () => {
  return (
    <Avatar name='Hirotomo Yamada' src='https://avatars.githubusercontent.com/u/84060430?v=4' />
  )
}

export const withName: ComponentStory<typeof Avatar> = () => {
  return <Avatar name='Hirotomo Yamada' />
}

export const withImage: ComponentStory<typeof Avatar> = () => {
  return <Avatar src='https://avatars.githubusercontent.com/u/84060430?v=4' />
}

export const withBarge: ComponentStory<typeof Avatar> = () => {
  return (
    <Avatar name='Hirotomo Yamada' src='https://avatars.githubusercontent.com/u/84060430?v=4'>
      <AvatarBadge bg='primary' />
    </Avatar>
  )
}

export const useGroup: ComponentStory<typeof Avatar> = () => {
  return (
    <AvatarGroup>
      <Avatar name='Hirotomo Yamada' src='https://avatars.githubusercontent.com/u/84060430?v=4' />
      <Avatar name='Hirotomo Yamada' src='https://avatars.githubusercontent.com/u/84060430?v=4' />
      <Avatar name='Hirotomo Yamada' src='https://avatars.githubusercontent.com/u/84060430?v=4' />
      <Avatar name='Hirotomo Yamada' src='https://avatars.githubusercontent.com/u/84060430?v=4' />
      <Avatar name='Hirotomo Yamada' src='https://avatars.githubusercontent.com/u/84060430?v=4' />
    </AvatarGroup>
  )
}

export const withGroupMax: ComponentStory<typeof Avatar> = () => {
  return (
    <AvatarGroup max={3}>
      <Avatar name='Hirotomo Yamada' src='https://avatars.githubusercontent.com/u/84060430?v=4' />
      <Avatar name='Hirotomo Yamada' src='https://avatars.githubusercontent.com/u/84060430?v=4' />
      <Avatar name='Hirotomo Yamada' src='https://avatars.githubusercontent.com/u/84060430?v=4' />
      <Avatar name='Hirotomo Yamada' src='https://avatars.githubusercontent.com/u/84060430?v=4' />
      <Avatar name='Hirotomo Yamada' src='https://avatars.githubusercontent.com/u/84060430?v=4' />
    </AvatarGroup>
  )
}
