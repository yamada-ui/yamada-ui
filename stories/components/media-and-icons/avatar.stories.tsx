import { faPoo } from "@fortawesome/free-solid-svg-icons"
import type { Meta, StoryFn } from "@storybook/react"
import { Icon } from "@yamada-ui/fontawesome"
import { Avatar, AvatarBadge, AvatarGroup, Wrap } from "@yamada-ui/react"

type Story = StoryFn<typeof Avatar>

const meta: Meta<typeof Avatar> = {
  title: "Components / Media And Icons / Avatar",
  component: Avatar,
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
      <Avatar size="2xs" name="Hirotomo Yamada" />
      <Avatar size="xs" name="Hirotomo Yamada" />
      <Avatar size="sm" name="Hirotomo Yamada" />
      <Avatar size="md" name="Hirotomo Yamada" />
      <Avatar size="lg" name="Hirotomo Yamada" />
      <Avatar size="xl" name="Hirotomo Yamada" />
      <Avatar size="2xl" name="Hirotomo Yamada" />
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
      <Avatar bg="secondary" src="https://not-found.com" />
      <Avatar src="https://not-found.com" />
      <Avatar icon={<Icon icon={faPoo} />} src="https://not-found.com" />
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
