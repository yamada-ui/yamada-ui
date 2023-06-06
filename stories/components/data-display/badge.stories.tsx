import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Wrap, Badge } from '@yamada-ui/react'

export default {
  title: 'Components / Data Display / Badge',
  component: Badge,
} as ComponentMeta<typeof Badge>

export const subtle: ComponentStory<typeof Badge> = () => {
  return (
    <Wrap gap='md'>
      <Badge colorScheme='primary'>Primary</Badge>

      <Badge colorScheme='secondary'>Secondary</Badge>

      <Badge colorScheme='warning'>Warning</Badge>

      <Badge colorScheme='danger'>Danger</Badge>

      <Badge colorScheme='link'>Link</Badge>

      <Badge colorScheme='gray'>Gray</Badge>

      <Badge colorScheme='red'>Red</Badge>

      <Badge colorScheme='orange'>Orange</Badge>

      <Badge colorScheme='yellow'>Yellow</Badge>

      <Badge colorScheme='green'>Green</Badge>

      <Badge colorScheme='teal'>Teal</Badge>

      <Badge colorScheme='blue'>Blue</Badge>

      <Badge colorScheme='cyan'>Cyan</Badge>

      <Badge colorScheme='purple'>Purple</Badge>

      <Badge colorScheme='pink'>pink</Badge>
    </Wrap>
  )
}

export const solid: ComponentStory<typeof Badge> = () => {
  return (
    <Wrap gap='md'>
      <Badge variant='solid' colorScheme='primary'>
        Primary
      </Badge>

      <Badge variant='solid' colorScheme='secondary'>
        Secondary
      </Badge>

      <Badge variant='solid' colorScheme='warning'>
        Warning
      </Badge>

      <Badge variant='solid' colorScheme='danger'>
        Danger
      </Badge>

      <Badge variant='solid' colorScheme='link'>
        Link
      </Badge>

      <Badge variant='solid' colorScheme='gray'>
        Gray
      </Badge>

      <Badge variant='solid' colorScheme='red'>
        Red
      </Badge>

      <Badge variant='solid' colorScheme='orange'>
        Orange
      </Badge>

      <Badge variant='solid' colorScheme='yellow'>
        Yellow
      </Badge>

      <Badge variant='solid' colorScheme='green'>
        Green
      </Badge>

      <Badge variant='solid' colorScheme='teal'>
        Teal
      </Badge>

      <Badge variant='solid' colorScheme='blue'>
        Blue
      </Badge>

      <Badge variant='solid' colorScheme='cyan'>
        Cyan
      </Badge>

      <Badge variant='solid' colorScheme='purple'>
        Purple
      </Badge>

      <Badge variant='solid' colorScheme='pink'>
        pink
      </Badge>
    </Wrap>
  )
}

export const outline: ComponentStory<typeof Badge> = () => {
  return (
    <Wrap gap='md'>
      <Badge variant='outline' colorScheme='primary'>
        Primary
      </Badge>

      <Badge variant='outline' colorScheme='secondary'>
        Secondary
      </Badge>

      <Badge variant='outline' colorScheme='warning'>
        Warning
      </Badge>

      <Badge variant='outline' colorScheme='danger'>
        Danger
      </Badge>

      <Badge variant='outline' colorScheme='link'>
        Link
      </Badge>

      <Badge variant='outline' colorScheme='gray'>
        Gray
      </Badge>

      <Badge variant='outline' colorScheme='red'>
        Red
      </Badge>

      <Badge variant='outline' colorScheme='orange'>
        Orange
      </Badge>

      <Badge variant='outline' colorScheme='yellow'>
        Yellow
      </Badge>

      <Badge variant='outline' colorScheme='green'>
        Green
      </Badge>

      <Badge variant='outline' colorScheme='teal'>
        Teal
      </Badge>

      <Badge variant='outline' colorScheme='blue'>
        Blue
      </Badge>

      <Badge variant='outline' colorScheme='cyan'>
        Cyan
      </Badge>

      <Badge variant='outline' colorScheme='purple'>
        Purple
      </Badge>

      <Badge variant='outline' colorScheme='pink'>
        pink
      </Badge>
    </Wrap>
  )
}
