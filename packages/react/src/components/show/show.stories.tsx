import type { Meta, StoryFn } from "@storybook/react-vite"
import { useState } from "react"
import { Button } from "../button"
import { Text } from "../text"
import { Show } from "./show"

type Story = StoryFn<typeof Show>

const meta: Meta<typeof Show> = {
  component: Show,
  title: "Components / Show",
}

export default meta

export const Basic: Story = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <Button onClick={() => setCount((prev) => prev + 1)}>
        Value: {count}
      </Button>

      <Show
        fallback={<Text>Not there yet. Keep clicking...</Text>}
        when={count > 3}
      >
        <Text>Congrats! I am here</Text>
      </Show>
    </>
  )
}
