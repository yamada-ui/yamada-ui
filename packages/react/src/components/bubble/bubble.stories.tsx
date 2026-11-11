import type { Meta, StoryFn } from "@storybook/react-vite"
import { useMemo } from "react"
import { PropsTable } from "#storybook"
import { COLOR_SCHEMES } from "../../utils"
import { Bubble } from "./"

type Story = StoryFn<typeof Bubble.Root>

const meta: Meta<typeof Bubble.Root> = {
  component: Bubble.Root,
  title: "Components / Bubble",
}

export default meta

export const Basic: Story = () => {
  return (
    <Bubble.Root endItemProps={{ variant: "solid" }}>
      <Bubble.Item>何者だ、お前は</Bubble.Item>

      <Bubble.Item direction="end">
        <Bubble.Content>趣味でヒーローをやっている者だ</Bubble.Content>
        <Bubble.Reactions aria-label="Reactions: thumbs up" role="img">
          👍
        </Bubble.Reactions>
      </Bubble.Item>

      <Bubble.Group>
        <Bubble.Item>…</Bubble.Item>
        <Bubble.Item>なんだ、その適当な設定は…</Bubble.Item>
      </Bubble.Group>
    </Bubble.Root>
  )
}

export const Items: Story = () => {
  const items = useMemo<Bubble.Item[]>(
    () => [
      { children: "何者だ、お前は" },
      {
        children: "趣味でヒーローをやっている者だ",
        direction: "end",
        reactions: "👍",
        reactionsProps: { "aria-label": "Reactions: thumbs up", role: "img" },
      },
      { items: [{ children: "…" }, { children: "なんだ、その適当な設定は…" }] },
    ],
    [],
  )

  return <Bubble.Root items={items} endItemProps={{ variant: "solid" }} />
}

export const Variant: Story = () => {
  return (
    <PropsTable
      variant="stack"
      rows={["solid", "subtle", "surface", "outline", "panel", "ghost"]}
    >
      {(_, row, key) => (
        <Bubble.Root key={key} variant={row}>
          <Bubble.Item>ヒーローが逃げたら誰が戦うんだよ</Bubble.Item>
        </Bubble.Root>
      )}
    </PropsTable>
  )
}

export const Size: Story = () => {
  return (
    <PropsTable variant="stack" rows={["sm", "md", "lg"]}>
      {(_, row, key) => (
        <Bubble.Root key={key} size={row} variant="solid" py="md">
          <Bubble.Item>
            <Bubble.Content>
              退屈な人生に刺激がほしくて他の星を襲うなんてOLでも考えねえぞ
            </Bubble.Content>
            <Bubble.Reactions
              aria-label="Reactions: thumbs up, fire, and 2 more"
              role="img"
            >
              <span>👍</span>
              <span>🔥</span>
              <span>+2</span>
            </Bubble.Reactions>
          </Bubble.Item>
        </Bubble.Root>
      )}
    </PropsTable>
  )
}

export const ColorScheme: Story = () => {
  return (
    <PropsTable
      variant="stack"
      columns={["solid", "subtle", "surface", "outline"]}
      rows={COLOR_SCHEMES}
    >
      {(column, row, key) => (
        <Bubble.Root key={key} colorScheme={row} variant={column}>
          <Bubble.Item>地球がヤバい!!!</Bubble.Item>
        </Bubble.Root>
      )}
    </PropsTable>
  )
}

export const Group: Story = () => {
  return (
    <Bubble.Root endItemProps={{ variant: "solid" }}>
      <Bubble.Item>ここに住んでもいいですか？</Bubble.Item>

      <Bubble.Group direction="end">
        <Bubble.Item>うん</Bubble.Item>
        <Bubble.Item>絶対ダメ</Bubble.Item>
      </Bubble.Group>

      <Bubble.Group>
        <Bubble.Item>ドサッ</Bubble.Item>
        <Bubble.Item>部屋代払います</Bubble.Item>
      </Bubble.Group>

      <Bubble.Item direction="end">ちゃんと歯ブラシ持ってきたか？</Bubble.Item>
    </Bubble.Root>
  )
}

export const Reactions: Story = () => {
  return (
    <PropsTable
      variant="stack"
      rows={[
        "start-start",
        "start-center",
        "start-end",
        "end-start",
        "end-center",
        "end-end",
      ]}
    >
      {(_, row, key) => (
        <Bubble.Root key={key} variant="solid" py="md">
          <Bubble.Item>
            <Bubble.Content>
              ここで俺はお前に立ち向かわなくちゃいけないんだ！
            </Bubble.Content>
            <Bubble.Reactions
              aria-label="Reactions: thumbs up, fire, and 2 more"
              placement={row}
              role="img"
            >
              <span>👍</span>
              <span>🔥</span>
              <span>+2</span>
            </Bubble.Reactions>
          </Bubble.Item>
        </Bubble.Root>
      )}
    </PropsTable>
  )
}
