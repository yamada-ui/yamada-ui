import type { Meta, StoryFn } from "@storybook/react"
import { CheckIcon, CircleCheckIcon } from "../icon"
import { List } from "./"

type Story = StoryFn<typeof List.Root>

const meta: Meta<typeof List.Root> = {
  component: List.Root,
  title: "Components / List",
}

export default meta

export const Unstyled: Story = () => {
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

export const Unordered: Story = () => {
  return (
    <List.Root styleType="disc">
      <List.Item>よろしければわたしが喜びのダンスを踊りましょうか！</List.Item>
      <List.Item>お命頂だい!!!　とうっ!!!</List.Item>
      <List.Item>う…宇宙一のスピードを誇るオ…オレさまのうしろに……</List.Item>
      <List.Item>オ…オレたちが勝てるわけはなかったはずだ………</List.Item>
      <List.Item>オレは試合場のゴミ拾いみたいなもんかよ…</List.Item>
    </List.Root>
  )
}

export const Ordered: Story = () => {
  return (
    <List.Root styleType="decimal">
      <List.Item>よろしければわたしが喜びのダンスを踊りましょうか！</List.Item>
      <List.Item>お命頂だい!!!　とうっ!!!</List.Item>
      <List.Item>う…宇宙一のスピードを誇るオ…オレさまのうしろに……</List.Item>
      <List.Item>オ…オレたちが勝てるわけはなかったはずだ………</List.Item>
      <List.Item>オレは試合場のゴミ拾いみたいなもんかよ…</List.Item>
    </List.Root>
  )
}

export const WithGap: Story = () => {
  return (
    <List.Root gap="lg">
      <List.Item>よろしければわたしが喜びのダンスを踊りましょうか！</List.Item>
      <List.Item>お命頂だい!!!　とうっ!!!</List.Item>
      <List.Item>う…宇宙一のスピードを誇るオ…オレさまのうしろに……</List.Item>
      <List.Item>オ…オレたちが勝てるわけはなかったはずだ………</List.Item>
      <List.Item>オレは試合場のゴミ拾いみたいなもんかよ…</List.Item>
    </List.Root>
  )
}

export const WithIcon: Story = () => {
  return (
    <List.Root>
      <List.Item icon={<CircleCheckIcon color="green.500" />}>
        よろしければわたしが喜びのダンスを踊りましょうか！
      </List.Item>
      <List.Item icon={<CircleCheckIcon color="green.500" />}>
        お命頂だい!!!　とうっ!!!
      </List.Item>
      <List.Item icon={<CircleCheckIcon color="green.500" />}>
        う…宇宙一のスピードを誇るオ…オレさまのうしろに……
      </List.Item>
      <List.Item icon={<CircleCheckIcon color="green.500" />}>
        オ…オレたちが勝てるわけはなかったはずだ………
      </List.Item>
      <List.Item icon={<CheckIcon color="green.500" />}>
        オレは試合場のゴミ拾いみたいなもんかよ…
      </List.Item>
    </List.Root>
  )
}

export const WithMarker: Story = () => {
  return (
    <List.Root>
      <List.Item
        _marker={{
          content: "'+ '",
        }}
      >
        よろしければわたしが喜びのダンスを踊りましょうか！
      </List.Item>
      <List.Item
        _marker={{
          content: "'- '",
        }}
      >
        お命頂だい!!!　とうっ!!!
      </List.Item>
      <List.Item
        _marker={{
          content: "'* '",
        }}
      >
        う…宇宙一のスピードを誇るオ…オレさまのうしろに……
      </List.Item>
      <List.Item
        _marker={{
          content: "'/ '",
        }}
      >
        オ…オレたちが勝てるわけはなかったはずだ………
      </List.Item>
      <List.Item
        _marker={{
          content: "'^ '",
        }}
      >
        オレは試合場のゴミ拾いみたいなもんかよ…
      </List.Item>
    </List.Root>
  )
}

export const Others: Story = () => {
  return (
    <>
      <List.Root styleType="square">
        <List.Item>
          よろしければわたしが喜びのダンスを踊りましょうか！
        </List.Item>
        <List.Item>お命頂だい!!!　とうっ!!!</List.Item>
        <List.Item>う…宇宙一のスピードを誇るオ…オレさまのうしろに……</List.Item>
        <List.Item>オ…オレたちが勝てるわけはなかったはずだ………</List.Item>
        <List.Item>オレは試合場のゴミ拾いみたいなもんかよ…</List.Item>
      </List.Root>

      <List.Root styleType="circle">
        <List.Item>
          よろしければわたしが喜びのダンスを踊りましょうか！
        </List.Item>
        <List.Item>お命頂だい!!!　とうっ!!!</List.Item>
        <List.Item>う…宇宙一のスピードを誇るオ…オレさまのうしろに……</List.Item>
        <List.Item>オ…オレたちが勝てるわけはなかったはずだ………</List.Item>
        <List.Item>オレは試合場のゴミ拾いみたいなもんかよ…</List.Item>
      </List.Root>

      <List.Root ms="1.2em" styleType="lower-alpha">
        <List.Item ps="0.2em">
          よろしければわたしが喜びのダンスを踊りましょうか！
        </List.Item>
        <List.Item ps="0.2em">お命頂だい!!!　とうっ!!!</List.Item>
        <List.Item ps="0.2em">
          う…宇宙一のスピードを誇るオ…オレさまのうしろに……
        </List.Item>
        <List.Item ps="0.2em">
          オ…オレたちが勝てるわけはなかったはずだ………
        </List.Item>
        <List.Item ps="0.2em">
          オレは試合場のゴミ拾いみたいなもんかよ…
        </List.Item>
      </List.Root>
    </>
  )
}
