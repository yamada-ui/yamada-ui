import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FaCheckCircle } from 'react-icons/fa'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { List, DiscList, DecimalList, ListItem, ListIcon, FontAwesomeIcon } from '@yamada-ui/react'

export default {
  title: 'Components / DataDisplay / List',
  component: List,
} as ComponentMeta<typeof List>

export const unstyled: ComponentStory<typeof List> = () => {
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

export const unordered: ComponentStory<typeof List> = () => {
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

export const ordered: ComponentStory<typeof List> = () => {
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

export const withGap: ComponentStory<typeof List> = () => {
  return (
    <List gap='lg'>
      <ListItem>よろしければわたしが喜びのダンスを踊りましょうか！</ListItem>
      <ListItem>お命頂だい!!!　とうっ!!!</ListItem>
      <ListItem>う…宇宙一のスピードを誇るオ…オレさまのうしろに……</ListItem>
      <ListItem>オ…オレたちが勝てるわけはなかったはずだ………</ListItem>
      <ListItem>オレは試合場のゴミ拾いみたいなもんかよ…</ListItem>
    </List>
  )
}

export const withIcon: ComponentStory<typeof List> = () => {
  return (
    <List>
      <ListItem>
        <ListIcon as={FaCheckCircle} color='green.500' />
        よろしければわたしが喜びのダンスを踊りましょうか！
      </ListItem>
      <ListItem>
        <ListIcon as={FaCheckCircle} color='green.500' />
        お命頂だい!!!　とうっ!!!
      </ListItem>
      <ListItem>
        <ListIcon as={FaCheckCircle} color='green.500' />
        う…宇宙一のスピードを誇るオ…オレさまのうしろに……
      </ListItem>
      <ListItem>
        <ListIcon as={FaCheckCircle} color='green.500' />
        オ…オレたちが勝てるわけはなかったはずだ………
      </ListItem>
      <ListItem>
        <ListIcon icon={faCheck} color='green.500' />
        オレは試合場のゴミ拾いみたいなもんかよ…
      </ListItem>
    </List>
  )
}

export const others: ComponentStory<typeof List> = () => {
  return (
    <>
      <List styleType='square'>
        <ListItem>よろしければわたしが喜びのダンスを踊りましょうか！</ListItem>
        <ListItem>お命頂だい!!!　とうっ!!!</ListItem>
        <ListItem>う…宇宙一のスピードを誇るオ…オレさまのうしろに……</ListItem>
        <ListItem>オ…オレたちが勝てるわけはなかったはずだ………</ListItem>
        <ListItem>オレは試合場のゴミ拾いみたいなもんかよ…</ListItem>
      </List>

      <List styleType='circle'>
        <ListItem>よろしければわたしが喜びのダンスを踊りましょうか！</ListItem>
        <ListItem>お命頂だい!!!　とうっ!!!</ListItem>
        <ListItem>う…宇宙一のスピードを誇るオ…オレさまのうしろに……</ListItem>
        <ListItem>オ…オレたちが勝てるわけはなかったはずだ………</ListItem>
        <ListItem>オレは試合場のゴミ拾いみたいなもんかよ…</ListItem>
      </List>

      <List styleType='lower-alpha' ms='1.2em'>
        <ListItem ps='0.2em'>よろしければわたしが喜びのダンスを踊りましょうか！</ListItem>
        <ListItem ps='0.2em'>お命頂だい!!!　とうっ!!!</ListItem>
        <ListItem ps='0.2em'>う…宇宙一のスピードを誇るオ…オレさまのうしろに……</ListItem>
        <ListItem ps='0.2em'>オ…オレたちが勝てるわけはなかったはずだ………</ListItem>
        <ListItem ps='0.2em'>オレは試合場のゴミ拾いみたいなもんかよ…</ListItem>
      </List>
    </>
  )
}
