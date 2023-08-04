import { Meta, StoryFn } from '@storybook/react'
import { Wrap, Badge } from '@yamada-ui/react'

type Story = StoryFn<typeof Badge>

const meta: Meta<typeof Badge> = {
  title: 'Components / Data Display / Badge',
  component: Badge,
}

export default meta

export const subtle: Story = () => {
  return (
    <Wrap gap='md'>
      <Badge colorScheme='primary'>Primary</Badge>

      <Badge colorScheme='secondary'>Secondary</Badge>

      <Badge colorScheme='warning'>Warning</Badge>

      <Badge colorScheme='danger'>Danger</Badge>

      <Badge colorScheme='link'>Link</Badge>

      <Badge colorScheme='gray'>Gray</Badge>

      <Badge colorScheme='zinc'>Zinc</Badge>

      <Badge colorScheme='neutral'>Neutral</Badge>

      <Badge colorScheme='stone'>Stone</Badge>

      <Badge colorScheme='red'>Red</Badge>

      <Badge colorScheme='rose'>Rose</Badge>

      <Badge colorScheme='pink'>Pink</Badge>

      <Badge colorScheme='orange'>Orange</Badge>

      <Badge colorScheme='amber'>Amber</Badge>

      <Badge colorScheme='yellow'>Yellow</Badge>

      <Badge colorScheme='lime'>Lime</Badge>

      <Badge colorScheme='green'>Green</Badge>

      <Badge colorScheme='emerald'>Emerald</Badge>

      <Badge colorScheme='teal'>Teal</Badge>

      <Badge colorScheme='cyan'>Cyan</Badge>

      <Badge colorScheme='sky'>Sky</Badge>

      <Badge colorScheme='blue'>Blue</Badge>

      <Badge colorScheme='indigo'>Indigo</Badge>

      <Badge colorScheme='violet'>Violet</Badge>

      <Badge colorScheme='purple'>Purple</Badge>

      <Badge colorScheme='fuchsia'>Fuchsia</Badge>
    </Wrap>
  )
}

export const solid: Story = () => {
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

      <Badge variant='solid' colorScheme='zinc'>
        Zinc
      </Badge>

      <Badge variant='solid' colorScheme='neutral'>
        Neutral
      </Badge>

      <Badge variant='solid' colorScheme='stone'>
        Stone
      </Badge>

      <Badge variant='solid' colorScheme='red'>
        Red
      </Badge>

      <Badge variant='solid' colorScheme='rose'>
        Rose
      </Badge>

      <Badge variant='solid' colorScheme='pink'>
        Pink
      </Badge>

      <Badge variant='solid' colorScheme='orange'>
        Orange
      </Badge>

      <Badge variant='solid' colorScheme='amber'>
        Amber
      </Badge>

      <Badge variant='solid' colorScheme='yellow'>
        Yellow
      </Badge>

      <Badge variant='solid' colorScheme='lime'>
        Lime
      </Badge>

      <Badge variant='solid' colorScheme='green'>
        Green
      </Badge>

      <Badge variant='solid' colorScheme='emerald'>
        Emerald
      </Badge>

      <Badge variant='solid' colorScheme='teal'>
        Teal
      </Badge>

      <Badge variant='solid' colorScheme='cyan'>
        Cyan
      </Badge>

      <Badge variant='solid' colorScheme='sky'>
        Sky
      </Badge>

      <Badge variant='solid' colorScheme='blue'>
        Blue
      </Badge>

      <Badge variant='solid' colorScheme='indigo'>
        Indigo
      </Badge>

      <Badge variant='solid' colorScheme='violet'>
        Violet
      </Badge>

      <Badge variant='solid' colorScheme='purple'>
        Purple
      </Badge>

      <Badge variant='solid' colorScheme='fuchsia'>
        Fuchsia
      </Badge>
    </Wrap>
  )
}

export const outline: Story = () => {
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

      <Badge variant='outline' colorScheme='zinc'>
        Zinc
      </Badge>

      <Badge variant='outline' colorScheme='neutral'>
        Neutral
      </Badge>

      <Badge variant='outline' colorScheme='stone'>
        Stone
      </Badge>

      <Badge variant='outline' colorScheme='red'>
        Red
      </Badge>

      <Badge variant='outline' colorScheme='rose'>
        Rose
      </Badge>

      <Badge variant='outline' colorScheme='pink'>
        Pink
      </Badge>

      <Badge variant='outline' colorScheme='orange'>
        Orange
      </Badge>

      <Badge variant='outline' colorScheme='amber'>
        Amber
      </Badge>

      <Badge variant='outline' colorScheme='yellow'>
        Yellow
      </Badge>

      <Badge variant='outline' colorScheme='lime'>
        Lime
      </Badge>

      <Badge variant='outline' colorScheme='green'>
        Green
      </Badge>

      <Badge variant='outline' colorScheme='emerald'>
        Emerald
      </Badge>

      <Badge variant='outline' colorScheme='teal'>
        Teal
      </Badge>

      <Badge variant='outline' colorScheme='cyan'>
        Cyan
      </Badge>

      <Badge variant='outline' colorScheme='sky'>
        Sky
      </Badge>

      <Badge variant='outline' colorScheme='blue'>
        Blue
      </Badge>

      <Badge variant='outline' colorScheme='indigo'>
        Indigo
      </Badge>

      <Badge variant='outline' colorScheme='violet'>
        Violet
      </Badge>

      <Badge variant='outline' colorScheme='purple'>
        Purple
      </Badge>

      <Badge variant='outline' colorScheme='fuchsia'>
        Fuchsia
      </Badge>
    </Wrap>
  )
}
