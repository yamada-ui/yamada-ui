import type { Meta, StoryFn } from "@storybook/react"
import { DecimalList, DiscList, List, ListItem } from "."
import { CheckIcon, CircleCheckIcon } from "../icon"

type Story = StoryFn<typeof List>

const meta: Meta<typeof List> = {
  component: List,
  title: "Components / List",
}

export default meta

export const Unstyled: Story = () => {
  return (
    <List>
      <ListItem>よろしければわたしが喜びのダンスを踊りましょうか！</ListItem>
      <ListItem>お命頂だい!!!　とうっ!!!</ListItem>
      <ListItem>う…宇宙一のスピードを誇るオ…オレさまのうしろに……</ListItem>
      <ListItem>オ…オレたちが勝てるわけはなかったはずだ………</ListItem>
      <ListItem>オレは試合場のゴミ拾いみたいなもんかよ…</ListItem>
    </List>
  )
}

export const Unordered: Story = () => {
  return (
    <DiscList>
      <ListItem>よろしければわたしが喜びのダンスを踊りましょうか！</ListItem>
      <ListItem>お命頂だい!!!　とうっ!!!</ListItem>
      <ListItem>う…宇宙一のスピードを誇るオ…オレさまのうしろに……</ListItem>
      <ListItem>オ…オレたちが勝てるわけはなかったはずだ………</ListItem>
      <ListItem>オレは試合場のゴミ拾いみたいなもんかよ…</ListItem>
    </DiscList>
  )
}

export const Ordered: Story = () => {
  return (
    <DecimalList>
      <ListItem>よろしければわたしが喜びのダンスを踊りましょうか！</ListItem>
      <ListItem>お命頂だい!!!　とうっ!!!</ListItem>
      <ListItem>う…宇宙一のスピードを誇るオ…オレさまのうしろに……</ListItem>
      <ListItem>オ…オレたちが勝てるわけはなかったはずだ………</ListItem>
      <ListItem>オレは試合場のゴミ拾いみたいなもんかよ…</ListItem>
    </DecimalList>
  )
}

export const WithGap: Story = () => {
  return (
    <List gap="lg">
      <ListItem>よろしければわたしが喜びのダンスを踊りましょうか！</ListItem>
      <ListItem>お命頂だい!!!　とうっ!!!</ListItem>
      <ListItem>う…宇宙一のスピードを誇るオ…オレさまのうしろに……</ListItem>
      <ListItem>オ…オレたちが勝てるわけはなかったはずだ………</ListItem>
      <ListItem>オレは試合場のゴミ拾いみたいなもんかよ…</ListItem>
    </List>
  )
}

export const WithIcon: Story = () => {
  return (
    <List>
      <ListItem icon={<CircleCheckIcon color="green.500" />}>
        よろしければわたしが喜びのダンスを踊りましょうか！
      </ListItem>
      <ListItem icon={<CircleCheckIcon color="green.500" />}>
        お命頂だい!!!　とうっ!!!
      </ListItem>
      <ListItem icon={<CircleCheckIcon color="green.500" />}>
        う…宇宙一のスピードを誇るオ…オレさまのうしろに……
      </ListItem>
      <ListItem icon={<CircleCheckIcon color="green.500" />}>
        オ…オレたちが勝てるわけはなかったはずだ………
      </ListItem>
      <ListItem icon={<CheckIcon color="green.500" />}>
        オレは試合場のゴミ拾いみたいなもんかよ…
      </ListItem>
    </List>
  )
}

export const WithMarker: Story = () => {
  return (
    <List>
      <ListItem
        _marker={{
          content: "'+ '",
        }}
      >
        よろしければわたしが喜びのダンスを踊りましょうか！
      </ListItem>
      <ListItem
        _marker={{
          content: "'- '",
        }}
      >
        お命頂だい!!!　とうっ!!!
      </ListItem>
      <ListItem
        _marker={{
          content: "'* '",
        }}
      >
        う…宇宙一のスピードを誇るオ…オレさまのうしろに……
      </ListItem>
      <ListItem
        _marker={{
          content: "'/ '",
        }}
      >
        オ…オレたちが勝てるわけはなかったはずだ………
      </ListItem>
      <ListItem
        _marker={{
          content: "'^ '",
        }}
      >
        オレは試合場のゴミ拾いみたいなもんかよ…
      </ListItem>
    </List>
  )
}

export const Others: Story = () => {
  return (
    <>
      <List styleType="square">
        <ListItem>よろしければわたしが喜びのダンスを踊りましょうか！</ListItem>
        <ListItem>お命頂だい!!!　とうっ!!!</ListItem>
        <ListItem>う…宇宙一のスピードを誇るオ…オレさまのうしろに……</ListItem>
        <ListItem>オ…オレたちが勝てるわけはなかったはずだ………</ListItem>
        <ListItem>オレは試合場のゴミ拾いみたいなもんかよ…</ListItem>
      </List>

      <List styleType="circle">
        <ListItem>よろしければわたしが喜びのダンスを踊りましょうか！</ListItem>
        <ListItem>お命頂だい!!!　とうっ!!!</ListItem>
        <ListItem>う…宇宙一のスピードを誇るオ…オレさまのうしろに……</ListItem>
        <ListItem>オ…オレたちが勝てるわけはなかったはずだ………</ListItem>
        <ListItem>オレは試合場のゴミ拾いみたいなもんかよ…</ListItem>
      </List>

      <List ms="1.2em" styleType="lower-alpha">
        <ListItem ps="0.2em">
          よろしければわたしが喜びのダンスを踊りましょうか！
        </ListItem>
        <ListItem ps="0.2em">お命頂だい!!!　とうっ!!!</ListItem>
        <ListItem ps="0.2em">
          う…宇宙一のスピードを誇るオ…オレさまのうしろに……
        </ListItem>
        <ListItem ps="0.2em">
          オ…オレたちが勝てるわけはなかったはずだ………
        </ListItem>
        <ListItem ps="0.2em">オレは試合場のゴミ拾いみたいなもんかよ…</ListItem>
      </List>
    </>
  )
}
