import type { Meta, StoryFn } from "@storybook/react-vite"
import { useMemo } from "react"
import { CircleCheckIcon, LoaderIcon } from "../icon"
import { Separator } from "../separator"
import { VStack } from "../stack"
import { List } from "./"

type Story = StoryFn<typeof List.Root>

const meta: Meta<typeof List.Root> = {
  component: List.Root,
  title: "Components / List",
}

export default meta

export const Basic: Story = () => {
  const items = useMemo<List.Item[]>(
    () => [
      { children: "よろしければわたしが喜びのダンスを踊りましょうか！" },
      { children: "お命頂だい!!!　とうっ!!!" },
      { children: "う…宇宙一のスピードを誇るオ…オレさまのうしろに……" },
      { children: "オ…オレたちが勝てるわけはなかったはずだ………" },
      { children: "オレは試合場のゴミ拾いみたいなもんかよ…" },
    ],
    [],
  )

  return <List.Root items={items} />
}

export const Children: Story = () => {
  return (
    <List.Root>
      <List.Item>よろしければわたしが喜びのダンスを踊りましょうか！</List.Item>
      <List.Item>お命頂だい!!!　とうっ!!!</List.Item>
      <List.Item>う…宇宙一のスピードを誇るオ…オレさまのうしろに……</List.Item>
      <List.Item>オ…オレたちが勝てるわけはなかったはずだ………</List.Item>
      <List.Item>オレは試合場のゴミ拾いみたいなもんかよ…</List.Item>
    </List.Root>
  )
}

export const StyleType: Story = () => {
  const items = useMemo<List.Item[]>(
    () => [
      { children: "よろしければわたしが喜びのダンスを踊りましょうか！" },
      { children: "お命頂だい!!!　とうっ!!!" },
      { children: "う…宇宙一のスピードを誇るオ…オレさまのうしろに……" },
      { children: "オ…オレたちが勝てるわけはなかったはずだ………" },
      { children: "オレは試合場のゴミ拾いみたいなもんかよ…" },
    ],
    [],
  )

  return (
    <VStack separator={<Separator />}>
      <List.Root items={items} styleType="disc" />
      <List.Root items={items} styleType="decimal" />
      <List.Root items={items} styleType="square" />
      <List.Root items={items} styleType="circle" />
      <List.Root items={items} styleType="lower-alpha" />
    </VStack>
  )
}

export const Gap: Story = () => {
  const items = useMemo<List.Item[]>(
    () => [
      { children: "よろしければわたしが喜びのダンスを踊りましょうか！" },
      { children: "お命頂だい!!!　とうっ!!!" },
      { children: "う…宇宙一のスピードを誇るオ…オレさまのうしろに……" },
      { children: "オ…オレたちが勝てるわけはなかったはずだ………" },
      { children: "オレは試合場のゴミ拾いみたいなもんかよ…" },
    ],
    [],
  )

  return <List.Root gap="lg" items={items} />
}

export const Icon: Story = () => {
  const items = useMemo<List.Item[]>(
    () => [
      {
        children: "よろしければわたしが喜びのダンスを踊りましょうか！",
        icon: <CircleCheckIcon color="success" />,
      },
      {
        children: "お命頂だい!!!　とうっ!!!",
        icon: <CircleCheckIcon color="success" />,
      },
      {
        children: "う…宇宙一のスピードを誇るオ…オレさまのうしろに……",
        icon: <CircleCheckIcon color="success" />,
      },
      {
        children: "オ…オレたちが勝てるわけはなかったはずだ………",
        icon: <CircleCheckIcon color="success" />,
      },
      {
        children: "オレは試合場のゴミ拾いみたいなもんかよ…",
        icon: <LoaderIcon color="fg.subtle" />,
      },
    ],
    [],
  )

  return (
    <VStack separator={<Separator />}>
      <List.Root items={items} />

      <List.Root>
        <List.Item icon={<CircleCheckIcon color="success" />}>
          よろしければわたしが喜びのダンスを踊りましょうか！
        </List.Item>
        <List.Item icon={<CircleCheckIcon color="success" />}>
          お命頂だい!!!　とうっ!!!
        </List.Item>
        <List.Item icon={<CircleCheckIcon color="success" />}>
          う…宇宙一のスピードを誇るオ…オレさまのうしろに……
        </List.Item>
        <List.Item icon={<CircleCheckIcon color="success" />}>
          オ…オレたちが勝てるわけはなかったはずだ………
        </List.Item>
        <List.Item icon={<LoaderIcon color="fg.subtle" />}>
          オレは試合場のゴミ拾いみたいなもんかよ…
        </List.Item>
      </List.Root>
    </VStack>
  )
}
