import type { Meta, StoryFn } from "@storybook/react"
import { useMemo } from "react"
import { Card } from "../card"
import { EmptyState } from "../empty-state"
import { BoxIcon } from "../icon"
import { VStack } from "../stack"
import { Text } from "../text"
import { For } from "./"

type Story = StoryFn<typeof For>

const meta: Meta<typeof For> = {
  component: For,
  title: "Components / For",
}

export default meta

export const Basic: Story = () => {
  const items = useMemo(
    () => [
      { name: "孫悟空", powers: ["かめはめ波", "元気玉"] },
      { name: "ベジータ", powers: ["ギャリック砲", "ビッグバンアタック"] },
      { name: "ピッコロ", powers: ["魔貫光殺砲", "再生能力"] },
    ],
    [],
  )

  return (
    <VStack>
      <For each={items}>
        {({ name, powers }, index) => (
          <Card.Root key={index} size="md" variant="outline">
            <Card.Header>
              <Text as="h1" fontSize="lg">
                {name}
              </Text>
            </Card.Header>

            <Card.Body pt="sm">
              <Text color="muted">Powers: {powers.join(", ")}</Text>
            </Card.Body>
          </Card.Root>
        )}
      </For>
    </VStack>
  )
}

export const FallBack: Story = () => {
  return (
    <For
      each={[]}
      fallback={
        <EmptyState
          description="There are no items to show"
          indicator={<BoxIcon />}
        />
      }
    >
      {(item, index) => <Text key={index}>{item}</Text>}
    </For>
  )
}
