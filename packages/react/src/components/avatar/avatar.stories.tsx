import type { Meta, StoryFn } from "@storybook/react"
import { Wrap } from "../flex"
import { GhostIcon } from "../icon"
import { Avatar, AvatarBadge, AvatarGroup } from "./"

type Story = StoryFn<typeof Avatar>

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  title: "Components / Avatar",
}

export default meta

export const Basic: Story = () => {
  return (
    <Avatar
      name="Hirotomo Yamada"
      src="https://avatars.githubusercontent.com/u/84060430?v=4"
    />
  )
}

export const WithSize: Story = () => {
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

export const WithName: Story = () => {
  return <Avatar name="Hirotomo Yamada" />
}

export const WithImage: Story = () => {
  return (
    <Avatar
      src="https://avatars.githubusercontent.com/u/84060430?v=4"
      alt="Hirotomo Yamada"
    />
  )
}

export const WithFallback: Story = () => {
  return (
    <Wrap gap="md">
      <Avatar src="https://not-found.com" bg="secondary" />
      <Avatar src="https://not-found.com" alt="alternative text" />
      <Avatar src="https://not-found.com" icon={<GhostIcon fontSize="2xl" />} />
    </Wrap>
  )
}

export const WithBadge: Story = () => {
  return (
    <Avatar
      name="Hirotomo Yamada"
      src="https://avatars.githubusercontent.com/u/84060430?v=4"
    >
      <AvatarBadge bg="primary" />
    </Avatar>
  )
}

export const WithPing: Story = () => {
  return (
    <Avatar
      name="Hirotomo Yamada"
      src="https://avatars.githubusercontent.com/u/84060430?v=4"
    >
      <AvatarBadge bg="primary" ping pingColor="primary.400" />
    </Avatar>
  )
}

export const UseGroup: Story = () => {
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

export const WithGroupMax: Story = () => {
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
