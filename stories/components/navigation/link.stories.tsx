import type { Meta, StoryFn } from "@storybook/react"
import { Link } from "@yamada-ui/react"

type Story = StoryFn<typeof Link>

const meta: Meta<typeof Link> = {
  title: "Components / Navigation / Link",
  component: Link,
}

export default meta

export const basic: Story = () => {
  return (
    <Link href="https://ja.wikipedia.org/wiki/%E3%83%89%E3%83%A9%E3%82%B4%E3%83%B3%E3%83%9C%E3%83%BC%E3%83%AB">
      ドラゴンボール - wikipedia
    </Link>
  )
}

export const useBlank: Story = () => {
  return (
    <Link
      href="https://ja.wikipedia.org/wiki/%E3%83%89%E3%83%A9%E3%82%B4%E3%83%B3%E3%83%9C%E3%83%BC%E3%83%AB"
      isExternal
    >
      ドラゴンボール - wikipedia
    </Link>
  )
}
