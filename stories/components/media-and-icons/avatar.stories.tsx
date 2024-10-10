import type { Meta, StoryFn } from "@storybook/react"
import { Ghost } from "@yamada-ui/lucide"
import { Avatar, AvatarBadge, AvatarGroup, Wrap } from "@yamada-ui/react"

type Story = StoryFn<typeof Avatar>

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  title: "Components / Media And Icons / Avatar",
}

export default meta

export const basic: Story = () => {
  return (
    <Avatar
      name="Hirotomo Yamada"
      src="https://avatars.githubusercontent.com/u/84060430?v=4"
    />
  )
}

export const withSize: Story = () => {
  return (
    <Wrap gap="md">
      <Avatar name="Hirotomo Yamada" size="2xs" />
      <Avatar name="Hirotomo Yamada" size="xs" />
      <Avatar name="Hirotomo Yamada" size="sm" />
      <Avatar name="Hirotomo Yamada" size="md" />
      <Avatar name="Hirotomo Yamada" size="lg" />
      <Avatar name="Hirotomo Yamada" size="xl" />
      <Avatar name="Hirotomo Yamada" size="2xl" />
    </Wrap>
  )
}

export const withName: Story = () => {
  return <Avatar name="Hirotomo Yamada" />
}

export const withImage: Story = () => {
  return (
    <Avatar
      src="https://avatars.githubusercontent.com/u/84060430?v=4"
      alt="Hirotomo Yamada"
    />
  )
}

export const withFallback: Story = () => {
  return (
    <Wrap gap="md">
      <Avatar src="https://not-found.com" bg="secondary" />
      <Avatar src="https://not-found.com" alt="alternative text" />
      <Avatar src="https://not-found.com" icon={<Ghost fontSize="2xl" />} />
    </Wrap>
  )
}

export const withBarge: Story = () => {
  return (
    <Avatar
      name="Hirotomo Yamada"
      src="https://avatars.githubusercontent.com/u/84060430?v=4"
    >
      <AvatarBadge bg="primary" />
    </Avatar>
  )
}

export const withPing: Story = () => {
  return (
    <Avatar
      name="Hirotomo Yamada"
      src="https://avatars.githubusercontent.com/u/84060430?v=4"
    >
      <AvatarBadge bg="primary" ping pingColor="primary.400" />
    </Avatar>
  )
}

export const useGroup: Story = () => {
  return (
    <AvatarGroup>
      <Avatar
        name="Hirotomo Yamada"
        src="https://avatars.githubusercontent.com/u/84060430?v=4"
      />
      <Avatar
        name="Hirotomo Yamada"
        src="https://avatars.githubusercontent.com/u/84060430?v=4"
      />
      <Avatar
        name="Hirotomo Yamada"
        src="https://avatars.githubusercontent.com/u/84060430?v=4"
      />
      <Avatar
        name="Hirotomo Yamada"
        src="https://avatars.githubusercontent.com/u/84060430?v=4"
      />
      <Avatar
        name="Hirotomo Yamada"
        src="https://avatars.githubusercontent.com/u/84060430?v=4"
      />
    </AvatarGroup>
  )
}

export const withGroupMax: Story = () => {
  return (
    <AvatarGroup max={3}>
      <Avatar
        name="Hirotomo Yamada"
        src="https://avatars.githubusercontent.com/u/84060430?v=4"
      />
      <Avatar
        name="Hirotomo Yamada"
        src="https://avatars.githubusercontent.com/u/84060430?v=4"
      />
      <Avatar
        name="Hirotomo Yamada"
        src="https://avatars.githubusercontent.com/u/84060430?v=4"
      />
      <Avatar
        name="Hirotomo Yamada"
        src="https://avatars.githubusercontent.com/u/84060430?v=4"
      />
      <Avatar
        name="Hirotomo Yamada"
        src="https://avatars.githubusercontent.com/u/84060430?v=4"
      />
    </AvatarGroup>
  )
}
