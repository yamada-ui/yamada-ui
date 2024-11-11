import type { Meta, StoryFn } from "@storybook/react"
import { BoxIcon } from "@yamada-ui/lucide"
import {
  Card,
  CardBody,
  CardHeader,
  Center,
  Text,
  VStack,
} from "@yamada-ui/react"
import { For } from "@yamada-ui/react"
import { useMemo } from "react"

type Story = StoryFn<typeof For>

const meta: Meta<typeof For> = {
  component: For,
  title: "Components / Other / For",
}

export default meta

export const basic: Story = () => {
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
          <Card key={index} size="md" variant="outline">
            <CardHeader>
              <Text as="h1" fontSize="lg">
                {name}
              </Text>
            </CardHeader>

            <CardBody pt="sm">
              <Text color="muted">Powers: {powers.join(", ")}</Text>
            </CardBody>
          </Card>
        )}
      </For>
    </VStack>
  )
}

export const withFallBack: Story = () => {
  return (
    <VStack>
      <For
        each={[]}
        fallback={
          <Center flexDirection="column" gap="md" pt="lg">
            <BoxIcon fontSize="3xl" />

            <Text color="muted">There are no items to show</Text>
          </Center>
        }
      >
        {(item, index) => <Text key={index}>{item}</Text>}
      </For>
    </VStack>
  )
}
