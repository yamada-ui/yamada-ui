import {
  faArrowRight,
  faCheck,
  faEnvelope,
  faMinus,
  faMoon,
  faPlus,
  faSun,
} from '@fortawesome/free-solid-svg-icons'
import { Meta, StoryFn } from '@storybook/react'
import { Icon } from '@yamada-ui/fontawesome'
import {
  Wrap,
  Button,
  IconButton,
  ButtonGroup,
  CloseButton,
} from '@yamada-ui/react'

type Story = StoryFn<typeof Button>

const meta: Meta<typeof Button> = {
  title: 'Components / Forms / Button',
  component: Button,
}

export default meta

export const solid: Story = () => {
  return (
    <Wrap gap='md'>
      <Button colorScheme='primary'>Primary</Button>

      <Button colorScheme='secondary'>Secondary</Button>

      <Button colorScheme='warning'>Warning</Button>

      <Button colorScheme='danger'>Danger</Button>

      <Button colorScheme='link'>Link</Button>

      <Button colorScheme='gray'>Gray</Button>

      <Button colorScheme='red'>Red</Button>

      <Button colorScheme='orange'>Orange</Button>

      <Button colorScheme='yellow'>Yellow</Button>

      <Button colorScheme='green'>Green</Button>

      <Button colorScheme='teal'>Teal</Button>

      <Button colorScheme='blue'>Blue</Button>

      <Button colorScheme='cyan'>Cyan</Button>

      <Button colorScheme='purple'>Purple</Button>

      <Button colorScheme='pink'>pink</Button>
    </Wrap>
  )
}

export const outline: Story = () => {
  return (
    <Wrap gap='md'>
      <Button variant='outline' colorScheme='primary'>
        Primary
      </Button>

      <Button variant='outline' colorScheme='secondary'>
        Secondary
      </Button>

      <Button variant='outline' colorScheme='warning'>
        Warning
      </Button>

      <Button variant='outline' colorScheme='danger'>
        Danger
      </Button>

      <Button variant='outline' colorScheme='link'>
        Link
      </Button>

      <Button variant='outline' colorScheme='gray'>
        Gray
      </Button>

      <Button variant='outline' colorScheme='red'>
        Red
      </Button>

      <Button variant='outline' colorScheme='orange'>
        Orange
      </Button>

      <Button variant='outline' colorScheme='yellow'>
        Yellow
      </Button>

      <Button variant='outline' colorScheme='green'>
        Green
      </Button>

      <Button variant='outline' colorScheme='teal'>
        Teal
      </Button>

      <Button variant='outline' colorScheme='blue'>
        Blue
      </Button>

      <Button variant='outline' colorScheme='cyan'>
        Cyan
      </Button>

      <Button variant='outline' colorScheme='purple'>
        Purple
      </Button>

      <Button variant='outline' colorScheme='pink'>
        pink
      </Button>
    </Wrap>
  )
}

export const withSize: Story = () => {
  return (
    <Wrap gap='md'>
      <Button colorScheme='primary' size='xs'>
        X Small
      </Button>

      <Button colorScheme='secondary' size='sm'>
        Small
      </Button>

      <Button colorScheme='warning' size='md'>
        Medium
      </Button>

      <Button colorScheme='danger' size='lg'>
        Large
      </Button>
    </Wrap>
  )
}

export const withVariant: Story = () => {
  return (
    <Wrap gap='md'>
      <Button colorScheme='primary' variant='solid'>
        Solid
      </Button>

      <Button colorScheme='secondary' variant='outline'>
        Outline
      </Button>

      <Button colorScheme='warning' variant='ghost'>
        Ghost
      </Button>

      <Button colorScheme='danger' variant='link'>
        Link
      </Button>

      <Button variant='unstyled'>Unstyle</Button>
    </Wrap>
  )
}

export const withDisabled: Story = () => {
  return (
    <Wrap gap='md'>
      <Button colorScheme='primary' variant='solid' isDisabled>
        Solid
      </Button>

      <Button colorScheme='secondary' variant='outline' isDisabled>
        Outline
      </Button>

      <Button colorScheme='warning' variant='ghost' isDisabled>
        Ghost
      </Button>

      <Button colorScheme='danger' variant='link' isDisabled>
        Link
      </Button>

      <Button variant='unstyled' isDisabled>
        Unstyle
      </Button>
    </Wrap>
  )
}

export const withIcon: Story = () => {
  return (
    <Wrap gap='md'>
      <Button
        colorScheme='primary'
        variant='solid'
        leftIcon={<Icon icon={faPlus} />}
      >
        Button
      </Button>

      <Button
        colorScheme='secondary'
        variant='outline'
        rightIcon={<Icon icon={faArrowRight} />}
      >
        Button
      </Button>

      <Button
        colorScheme='warning'
        variant='ghost'
        leftIcon={<Icon icon={faEnvelope} />}
      >
        Button
      </Button>

      <Button
        colorScheme='danger'
        variant='link'
        leftIcon={<Icon icon={faCheck} />}
      >
        Button
      </Button>
    </Wrap>
  )
}

export const iconButton: Story = () => {
  return (
    <Wrap gap='md'>
      <IconButton colorScheme='primary' icon={<Icon icon={faPlus} />} />

      <IconButton colorScheme='secondary' icon={<Icon icon={faMinus} />} />

      <IconButton
        colorScheme='warning'
        size='lg'
        icon={<Icon icon={faSun} />}
      />

      <IconButton
        colorScheme='danger'
        size='lg'
        icon={<Icon icon={faMoon} />}
      />
    </Wrap>
  )
}

export const closeButton: Story = () => {
  return (
    <Wrap gap='md'>
      <CloseButton size='sm' />

      <CloseButton size='md' />

      <CloseButton size='lg' />
    </Wrap>
  )
}

export const withLoading: Story = () => {
  return (
    <Wrap gap='md'>
      <Button isLoading colorScheme='primary'>
        Button
      </Button>

      <Button isLoading colorScheme='secondary' loadingIcon='dots'>
        Button
      </Button>

      <Button isLoading colorScheme='warning' variant='outline'>
        Button
      </Button>

      <Button isLoading colorScheme='danger' variant='ghost'>
        Button
      </Button>

      <Button isLoading loadingText='Loading...' colorScheme='primary'>
        Button
      </Button>

      <Button
        isLoading
        loadingText='Loading...'
        loadingPlacement='end'
        loadingIcon='grid'
        colorScheme='secondary'
        variant='outline'
      >
        Button
      </Button>
    </Wrap>
  )
}

export const buttonGroup: Story = () => {
  return (
    <>
      <ButtonGroup isAttached variant='outline'>
        <Button>Button</Button>
        <IconButton icon={<Icon icon={faPlus} />} />
      </ButtonGroup>

      <ButtonGroup gap='sm'>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
      </ButtonGroup>

      <ButtonGroup isAttached isDisabled variant='outline'>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
      </ButtonGroup>

      <ButtonGroup direction='column' gap='sm'>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
      </ButtonGroup>

      <ButtonGroup direction='column' isAttached variant='outline'>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
      </ButtonGroup>
    </>
  )
}
