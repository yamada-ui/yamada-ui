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
      <Tag colorScheme='primary'>Primary</Tag>

      <Tag colorScheme='secondary'>Secondary</Tag>

      <Tag colorScheme='warning'>Warning</Tag>

      <Tag colorScheme='danger'>Danger</Tag>

      <Tag colorScheme='link'>Link</Tag>

      <Tag colorScheme='gray'>Gray</Tag>

      <Tag colorScheme='red'>Red</Tag>

      <Tag colorScheme='orange'>Orange</Tag>

      <Tag colorScheme='yellow'>Yellow</Tag>

      <Tag colorScheme='green'>Green</Tag>

      <Tag colorScheme='teal'>Teal</Tag>

      <Tag colorScheme='blue'>Blue</Tag>

      <Tag colorScheme='cyan'>Cyan</Tag>

      <Tag colorScheme='purple'>Purple</Tag>

      <Tag colorScheme='pink'>pink</Tag>
    </Wrap>
  )
}

export const solid: ComponentStory<typeof Tag> = () => {
  return (
    <Wrap gap='md'>
      <Tag variant='solid' colorScheme='primary'>
        Primary
      </Tag>

      <Tag variant='solid' colorScheme='secondary'>
        Secondary
      </Tag>

      <Tag variant='solid' colorScheme='warning'>
        Warning
      </Tag>

      <Tag variant='solid' colorScheme='danger'>
        Danger
      </Tag>

      <Tag variant='solid' colorScheme='link'>
        Link
      </Tag>

      <Tag variant='solid' colorScheme='gray'>
        Gray
      </Tag>

      <Tag variant='solid' colorScheme='red'>
        Red
      </Tag>

      <Tag variant='solid' colorScheme='orange'>
        Orange
      </Tag>

      <Tag variant='solid' colorScheme='yellow'>
        Yellow
      </Tag>

      <Tag variant='solid' colorScheme='green'>
        Green
      </Tag>

      <Tag variant='solid' colorScheme='teal'>
        Teal
      </Tag>

      <Tag variant='solid' colorScheme='blue'>
        Blue
      </Tag>

      <Tag variant='solid' colorScheme='cyan'>
        Cyan
      </Tag>

      <Tag variant='solid' colorScheme='purple'>
        Purple
      </Tag>

      <Tag variant='solid' colorScheme='pink'>
        pink
      </Tag>
    </Wrap>
  )
}

export const outline: ComponentStory<typeof Tag> = () => {
  return (
    <Wrap gap='md'>
      <Tag variant='outline' colorScheme='primary'>
        Primary
      </Tag>

      <Tag variant='outline' colorScheme='secondary'>
        Secondary
      </Tag>

      <Tag variant='outline' colorScheme='warning'>
        Warning
      </Tag>

      <Tag variant='outline' colorScheme='danger'>
        Danger
      </Tag>

      <Tag variant='outline' colorScheme='link'>
        Link
      </Tag>

      <Tag variant='outline' colorScheme='gray'>
        Gray
      </Tag>

      <Tag variant='outline' colorScheme='red'>
        Red
      </Tag>

      <Tag variant='outline' colorScheme='orange'>
        Orange
      </Tag>

      <Tag variant='outline' colorScheme='yellow'>
        Yellow
      </Tag>

      <Tag variant='outline' colorScheme='green'>
        Green
      </Tag>

      <Tag variant='outline' colorScheme='teal'>
        Teal
      </Tag>

      <Tag variant='outline' colorScheme='blue'>
        Blue
      </Tag>

      <Tag variant='outline' colorScheme='cyan'>
        Cyan
      </Tag>

      <Tag variant='outline' colorScheme='purple'>
        Purple
      </Tag>

      <Tag variant='outline' colorScheme='pink'>
        pink
      </Tag>
    </Wrap>
  )
}

export const withSize: ComponentStory<typeof Tag> = () => {
  return (
    <Wrap gap='md' alignItems='flex-start'>
      <Tag colorScheme='primary' size='sm'>
        Small
      </Tag>

      <Tag colorScheme='secondary' size='md'>
        Medium
      </Tag>

      <Tag colorScheme='warning' size='lg'>
        Large
      </Tag>
    </Wrap>
  )
}

export const withIcon: ComponentStory<typeof Tag> = () => {
  return (
    <Wrap gap='md' alignItems='flex-start'>
      <Tag colorScheme='primary' size='sm' leftIcon={<FontAwesomeIcon icon={faPlus} />}>
        Small
      </Tag>

      <Tag colorScheme='secondary' size='md' rightIcon={<FontAwesomeIcon icon={faPlus} />}>
        Medium
      </Tag>

      <Tag colorScheme='warning' size='lg' leftIcon={<FontAwesomeIcon icon={faPlus} />}>
        Large
      </Tag>
    </Wrap>
  )
}

export const withCloseButton: ComponentStory<typeof Tag> = () => {
  return (
    <Wrap gap='md' alignItems='flex-start'>
      <Tag colorScheme='primary' rounded='full' onCloseClick={() => {}}>
        Cyan
      </Tag>

      <Tag colorScheme='secondary' rounded='full' onCloseClick={() => {}}>
        Secondary
      </Tag>

      <Tag colorScheme='warning' rounded='full' onCloseClick={() => {}}>
        Warning
      </Tag>

      <Tag colorScheme='danger' rounded='full' onCloseClick={() => {}}>
        Danger
      </Tag>
    </Wrap>
  )
}

export const withDisabled: ComponentStory<typeof Tag> = () => {
  return (
    <Wrap gap='md' alignItems='flex-start'>
      <Tag variant='solid' colorScheme='primary' rounded='full' onCloseClick={() => {}} isDisabled>
        Cyan
      </Tag>

      <Tag
        variant='solid'
        colorScheme='secondary'
        rounded='full'
        onCloseClick={() => {}}
        isDisabled
      >
        Secondary
      </Tag>

      <Tag variant='solid' colorScheme='warning' rounded='full' onCloseClick={() => {}} isDisabled>
        Warning
      </Tag>

      <Tag variant='solid' colorScheme='danger' rounded='full' onCloseClick={() => {}} isDisabled>
        Danger
      </Tag>
    </Wrap>
  )
}
