import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Wrap, Tag, FontAwesomeIcon } from '@yamada-ui/react'

export default {
  title: 'Components / Data Display / Tag',
  component: Tag,
} as ComponentMeta<typeof Tag>

export const subtle: ComponentStory<typeof Tag> = () => {
  return (
    <Wrap gap='md'>
      <Tag colorStyle='primary'>Primary</Tag>

      <Tag colorStyle='secondary'>Secondary</Tag>

      <Tag colorStyle='warning'>Warning</Tag>

      <Tag colorStyle='danger'>Danger</Tag>

      <Tag colorStyle='link'>Link</Tag>

      <Tag colorStyle='gray'>Gray</Tag>

      <Tag colorStyle='red'>Red</Tag>

      <Tag colorStyle='orange'>Orange</Tag>

      <Tag colorStyle='yellow'>Yellow</Tag>

      <Tag colorStyle='green'>Green</Tag>

      <Tag colorStyle='teal'>Teal</Tag>

      <Tag colorStyle='blue'>Blue</Tag>

      <Tag colorStyle='cyan'>Cyan</Tag>

      <Tag colorStyle='purple'>Purple</Tag>

      <Tag colorStyle='pink'>pink</Tag>

      <Tag colorStyle='linkedin'>Linkedin</Tag>

      <Tag colorStyle='facebook'>Facebook</Tag>

      <Tag colorStyle='messenger'>Messenger</Tag>

      <Tag colorStyle='whatsapp'>Whatsapp</Tag>

      <Tag colorStyle='twitter'>Twitter</Tag>

      <Tag colorStyle='line'>Line</Tag>

      <Tag colorStyle='instagram'>Instagram</Tag>

      <Tag colorStyle='youtube'>Youtube</Tag>
    </Wrap>
  )
}

export const solid: ComponentStory<typeof Tag> = () => {
  return (
    <Wrap gap='md'>
      <Tag variant='solid' colorStyle='primary'>
        Primary
      </Tag>

      <Tag variant='solid' colorStyle='secondary'>
        Secondary
      </Tag>

      <Tag variant='solid' colorStyle='warning'>
        Warning
      </Tag>

      <Tag variant='solid' colorStyle='danger'>
        Danger
      </Tag>

      <Tag variant='solid' colorStyle='link'>
        Link
      </Tag>

      <Tag variant='solid' colorStyle='gray'>
        Gray
      </Tag>

      <Tag variant='solid' colorStyle='red'>
        Red
      </Tag>

      <Tag variant='solid' colorStyle='orange'>
        Orange
      </Tag>

      <Tag variant='solid' colorStyle='yellow'>
        Yellow
      </Tag>

      <Tag variant='solid' colorStyle='green'>
        Green
      </Tag>

      <Tag variant='solid' colorStyle='teal'>
        Teal
      </Tag>

      <Tag variant='solid' colorStyle='blue'>
        Blue
      </Tag>

      <Tag variant='solid' colorStyle='cyan'>
        Cyan
      </Tag>

      <Tag variant='solid' colorStyle='purple'>
        Purple
      </Tag>

      <Tag variant='solid' colorStyle='pink'>
        pink
      </Tag>

      <Tag variant='solid' colorStyle='linkedin'>
        Linkedin
      </Tag>

      <Tag variant='solid' colorStyle='facebook'>
        Facebook
      </Tag>

      <Tag variant='solid' colorStyle='messenger'>
        Messenger
      </Tag>

      <Tag variant='solid' colorStyle='whatsapp'>
        Whatsapp
      </Tag>

      <Tag variant='solid' colorStyle='twitter'>
        Twitter
      </Tag>

      <Tag variant='solid' colorStyle='line'>
        Line
      </Tag>

      <Tag variant='solid' colorStyle='instagram'>
        Instagram
      </Tag>

      <Tag variant='solid' colorStyle='youtube'>
        Youtube
      </Tag>
    </Wrap>
  )
}

export const outline: ComponentStory<typeof Tag> = () => {
  return (
    <Wrap gap='md'>
      <Tag variant='outline' colorStyle='primary'>
        Primary
      </Tag>

      <Tag variant='outline' colorStyle='secondary'>
        Secondary
      </Tag>

      <Tag variant='outline' colorStyle='warning'>
        Warning
      </Tag>

      <Tag variant='outline' colorStyle='danger'>
        Danger
      </Tag>

      <Tag variant='outline' colorStyle='link'>
        Link
      </Tag>

      <Tag variant='outline' colorStyle='gray'>
        Gray
      </Tag>

      <Tag variant='outline' colorStyle='red'>
        Red
      </Tag>

      <Tag variant='outline' colorStyle='orange'>
        Orange
      </Tag>

      <Tag variant='outline' colorStyle='yellow'>
        Yellow
      </Tag>

      <Tag variant='outline' colorStyle='green'>
        Green
      </Tag>

      <Tag variant='outline' colorStyle='teal'>
        Teal
      </Tag>

      <Tag variant='outline' colorStyle='blue'>
        Blue
      </Tag>

      <Tag variant='outline' colorStyle='cyan'>
        Cyan
      </Tag>

      <Tag variant='outline' colorStyle='purple'>
        Purple
      </Tag>

      <Tag variant='outline' colorStyle='pink'>
        pink
      </Tag>

      <Tag variant='outline' colorStyle='linkedin'>
        Linkedin
      </Tag>

      <Tag variant='outline' colorStyle='facebook'>
        Facebook
      </Tag>

      <Tag variant='outline' colorStyle='messenger'>
        Messenger
      </Tag>

      <Tag variant='outline' colorStyle='whatsapp'>
        Whatsapp
      </Tag>

      <Tag variant='outline' colorStyle='twitter'>
        Twitter
      </Tag>

      <Tag variant='outline' colorStyle='line'>
        Line
      </Tag>

      <Tag variant='outline' colorStyle='instagram'>
        Instagram
      </Tag>

      <Tag variant='outline' colorStyle='youtube'>
        Youtube
      </Tag>
    </Wrap>
  )
}

export const withSize: ComponentStory<typeof Tag> = () => {
  return (
    <Wrap gap='md' alignItems='flex-start'>
      <Tag colorStyle='primary' size='sm'>
        Small
      </Tag>

      <Tag colorStyle='secondary' size='md'>
        Medium
      </Tag>

      <Tag colorStyle='warning' size='lg'>
        Large
      </Tag>
    </Wrap>
  )
}

export const withIcon: ComponentStory<typeof Tag> = () => {
  return (
    <Wrap gap='md' alignItems='flex-start'>
      <Tag colorStyle='primary' size='sm' leftIcon={<FontAwesomeIcon icon={faPlus} />}>
        Small
      </Tag>

      <Tag colorStyle='secondary' size='md' rightIcon={<FontAwesomeIcon icon={faPlus} />}>
        Medium
      </Tag>

      <Tag colorStyle='warning' size='lg' leftIcon={<FontAwesomeIcon icon={faPlus} />}>
        Large
      </Tag>
    </Wrap>
  )
}

export const withCloseButton: ComponentStory<typeof Tag> = () => {
  return (
    <Wrap gap='md' alignItems='flex-start'>
      <Tag colorStyle='primary' rounded='full' onCloseClick={() => {}}>
        Cyan
      </Tag>

      <Tag colorStyle='secondary' rounded='full' onCloseClick={() => {}}>
        Secondary
      </Tag>

      <Tag colorStyle='warning' rounded='full' onCloseClick={() => {}}>
        Warning
      </Tag>

      <Tag colorStyle='danger' rounded='full' onCloseClick={() => {}}>
        Danger
      </Tag>
    </Wrap>
  )
}

export const withDisabled: ComponentStory<typeof Tag> = () => {
  return (
    <Wrap gap='md' alignItems='flex-start'>
      <Tag variant='solid' colorStyle='primary' rounded='full' onCloseClick={() => {}} isDisabled>
        Cyan
      </Tag>

      <Tag variant='solid' colorStyle='secondary' rounded='full' onCloseClick={() => {}} isDisabled>
        Secondary
      </Tag>

      <Tag variant='solid' colorStyle='warning' rounded='full' onCloseClick={() => {}} isDisabled>
        Warning
      </Tag>

      <Tag variant='solid' colorStyle='danger' rounded='full' onCloseClick={() => {}} isDisabled>
        Danger
      </Tag>
    </Wrap>
  )
}
