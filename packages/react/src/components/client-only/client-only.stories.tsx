import type { Meta, StoryFn } from "@storybook/react-vite"
import { IconButton } from "../button"
import { PlusIcon } from "../icon"
import { Skeleton } from "../skeleton"
import { ClientOnly } from "./client-only"

type Story = StoryFn<typeof ClientOnly>

const meta: Meta<typeof ClientOnly> = {
  component: ClientOnly,
  title: "Components / ClientOnly",
}

export default meta

export const Basic: Story = () => {
  return (
    <ClientOnly>
      <IconButton aria-label="Plus" icon={<PlusIcon />} />
    </ClientOnly>
  )
}

export const Fallback: Story = () => {
  return (
    <ClientOnly fallback={<Skeleton boxSize="10" rounded="l2" />}>
      <IconButton aria-label="Plus" icon={<PlusIcon />} />
    </ClientOnly>
  )
}

export const RenderProp: Story = () => {
  return (
    <ClientOnly>
      {() => <IconButton aria-label="Plus" icon={<PlusIcon />} />}
    </ClientOnly>
  )
}
