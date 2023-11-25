import { faCheck } from "@fortawesome/free-solid-svg-icons"
import type { Meta, StoryFn } from "@storybook/react"
import { Icon } from "@yamada-ui/fontawesome"
import {
  List,
  DiscList,
  DecimalList,
  ListItem,
  ListIcon,
} from "@yamada-ui/react"
import { FaCheckCircle } from "react-icons/fa"

type Story = StoryFn<typeof List>

const meta: Meta<typeof List> = {
  title: "Components / Data Display / List",
  component: List,
}

export default meta

export const unstyled: Story = () => {
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

export const unordered: Story = () => {
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

export const ordered: Story = () => {
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

export const withGap: Story = () => {
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

export const withIcon: Story = () => {
  return (
    <List>
      <ListItem>
        <ListIcon as={FaCheckCircle} color="green.500" />
        よろしければわたしが喜びのダンスを踊りましょうか！
      </ListItem>
      <ListItem>
        <ListIcon as={FaCheckCircle} color="green.500" />
        お命頂だい!!!　とうっ!!!
      </ListItem>
      <ListItem>
        <ListIcon as={FaCheckCircle} color="green.500" />
        う…宇宙一のスピードを誇るオ…オレさまのうしろに……
      </ListItem>
      <ListItem>
        <ListIcon as={FaCheckCircle} color="green.500" />
        オ…オレたちが勝てるわけはなかったはずだ………
      </ListItem>
      <ListItem>
        <ListIcon as={Icon} icon={faCheck} color="green.500" />
        オレは試合場のゴミ拾いみたいなもんかよ…
      </ListItem>
    </List>
  )
}

export const others: Story = () => {
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

      <List styleType="lower-alpha" ms="1.2em">
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
