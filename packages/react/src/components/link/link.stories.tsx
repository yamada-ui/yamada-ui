import type { Meta, StoryFn } from "@storybook/react"
import { Link } from "./"

type Story = StoryFn<typeof Link>

const meta: Meta<typeof Link> = {
  component: Link,
  title: "Components / Link",
}

export default meta

export const Basic: Story = () => {
  return (
    <Link href="https://ja.wikipedia.org/wiki/%E3%83%89%E3%83%A9%E3%82%B4%E3%83%B3%E3%83%9C%E3%83%BC%E3%83%AB">
      ドラゴンボール - wikipedia
    </Link>
  )
}

export const UseBlank: Story = () => {
  return (
    <Link
      href="https://ja.wikipedia.org/wiki/%E3%83%89%E3%83%A9%E3%82%B4%E3%83%B3%E3%83%9C%E3%83%BC%E3%83%AB"
      external
    >
      ドラゴンボール - wikipedia
    </Link>
  )
}