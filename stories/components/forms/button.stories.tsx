import {
  faArrowRight,
  faCheck,
  faEnvelope,
  faMinus,
  faMoon,
  faPlus,
  faSun,
} from '@fortawesome/free-solid-svg-icons'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import {
  Wrap,
  Button,
  IconButton,
  ButtonGroup,
  CloseButton,
  FontAwesomeIcon,
} from '@yamada-ui/react'

export default {
  title: 'Components / Forms / Button',
  component: Button,
} as ComponentMeta<typeof Button>

export const solid: ComponentStory<typeof Button> = () => {
  return (
    <Wrap gap='md'>
      <Button colorStyle='primary'>Primary</Button>

      <Button colorStyle='secondary'>Secondary</Button>

      <Button colorStyle='warning'>Warning</Button>

      <Button colorStyle='danger'>Danger</Button>

      <Button colorStyle='link'>Link</Button>

      <Button colorStyle='gray'>Gray</Button>

      <Button colorStyle='red'>Red</Button>

      <Button colorStyle='orange'>Orange</Button>

      <Button colorStyle='yellow'>Yellow</Button>

      <Button colorStyle='green'>Green</Button>

      <Button colorStyle='teal'>Teal</Button>

      <Button colorStyle='blue'>Blue</Button>

      <Button colorStyle='cyan'>Cyan</Button>

      <Button colorStyle='purple'>Purple</Button>

      <Button colorStyle='pink'>pink</Button>

      <Button colorStyle='linkedin'>Linkedin</Button>

      <Button colorStyle='facebook'>Facebook</Button>

      <Button colorStyle='messenger'>Messenger</Button>

      <Button colorStyle='whatsapp'>Whatsapp</Button>

      <Button colorStyle='twitter'>Twitter</Button>

      <Button colorStyle='line'>Line</Button>

      <Button colorStyle='instagram'>Instagram</Button>

      <Button colorStyle='youtube'>Youtube</Button>
    </Wrap>
  )
}

export const outline: ComponentStory<typeof Button> = () => {
  return (
    <Wrap gap='md'>
      <Button variant='outline' colorStyle='primary'>
        Primary
      </Button>

      <Button variant='outline' colorStyle='secondary'>
        Secondary
      </Button>

      <Button variant='outline' colorStyle='warning'>
        Warning
      </Button>

      <Button variant='outline' colorStyle='danger'>
        Danger
      </Button>

      <Button variant='outline' colorStyle='link'>
        Link
      </Button>

      <Button variant='outline' colorStyle='gray'>
        Gray
      </Button>

      <Button variant='outline' colorStyle='red'>
        Red
      </Button>

      <Button variant='outline' colorStyle='orange'>
        Orange
      </Button>

      <Button variant='outline' colorStyle='yellow'>
        Yellow
      </Button>

      <Button variant='outline' colorStyle='green'>
        Green
      </Button>

      <Button variant='outline' colorStyle='teal'>
        Teal
      </Button>

      <Button variant='outline' colorStyle='blue'>
        Blue
      </Button>

      <Button variant='outline' colorStyle='cyan'>
        Cyan
      </Button>

      <Button variant='outline' colorStyle='purple'>
        Purple
      </Button>

      <Button variant='outline' colorStyle='pink'>
        pink
      </Button>

      <Button variant='outline' colorStyle='linkedin'>
        Linkedin
      </Button>

      <Button variant='outline' colorStyle='facebook'>
        Facebook
      </Button>

      <Button variant='outline' colorStyle='messenger'>
        Messenger
      </Button>

      <Button variant='outline' colorStyle='whatsapp'>
        Whatsapp
      </Button>

      <Button variant='outline' colorStyle='twitter'>
        Twitter
      </Button>

      <Button variant='outline' colorStyle='line'>
        Line
      </Button>

      <Button variant='outline' colorStyle='instagram'>
        Instagram
      </Button>

      <Button variant='outline' colorStyle='youtube'>
        Youtube
      </Button>
    </Wrap>
  )
}

export const withSize: ComponentStory<typeof Button> = () => {
  return (
    <Wrap gap='md'>
      <Button colorStyle='primary' size='xs'>
        X Small
      </Button>

      <Button colorStyle='secondary' size='sm'>
        Small
      </Button>

      <Button colorStyle='warning' size='md'>
        Medium
      </Button>

      <Button colorStyle='danger' size='lg'>
        Large
      </Button>
    </Wrap>
  )
}

export const withVariant: ComponentStory<typeof Button> = () => {
  return (
    <Wrap gap='md'>
      <Button colorStyle='primary' variant='solid'>
        Solid
      </Button>

      <Button colorStyle='secondary' variant='outline'>
        Outline
      </Button>

      <Button colorStyle='warning' variant='ghost'>
        Ghost
      </Button>

      <Button colorStyle='danger' variant='link'>
        Link
      </Button>

      <Button variant='unstyled'>Unstyle</Button>
    </Wrap>
  )
}

export const withDisabled: ComponentStory<typeof Button> = () => {
  return (
    <Wrap gap='md'>
      <Button colorStyle='primary' variant='solid' isDisabled>
        Solid
      </Button>

      <Button colorStyle='secondary' variant='outline' isDisabled>
        Outline
      </Button>

      <Button colorStyle='warning' variant='ghost' isDisabled>
        Ghost
      </Button>

      <Button colorStyle='danger' variant='link' isDisabled>
        Link
      </Button>

      <Button variant='unstyled' isDisabled>
        Unstyle
      </Button>
    </Wrap>
  )
}

export const withIcon: ComponentStory<typeof Button> = () => {
  return (
    <Wrap gap='md'>
      <Button colorStyle='primary' variant='solid' leftIcon={<FontAwesomeIcon icon={faPlus} />}>
        Button
      </Button>

      <Button
        colorStyle='secondary'
        variant='outline'
        rightIcon={<FontAwesomeIcon icon={faArrowRight} />}
      >
        Button
      </Button>

      <Button colorStyle='warning' variant='ghost' leftIcon={<FontAwesomeIcon icon={faEnvelope} />}>
        Button
      </Button>

      <Button colorStyle='danger' variant='link' leftIcon={<FontAwesomeIcon icon={faCheck} />}>
        Button
      </Button>
    </Wrap>
  )
}

export const iconButton: ComponentStory<typeof Button> = () => {
  return (
    <Wrap gap='md'>
      <IconButton colorStyle='primary' icon={<FontAwesomeIcon icon={faPlus} />} />

      <IconButton colorStyle='secondary' icon={<FontAwesomeIcon icon={faMinus} />} />

      <IconButton colorStyle='warning' size='lg' icon={<FontAwesomeIcon icon={faSun} />} />

      <IconButton colorStyle='danger' size='lg' icon={<FontAwesomeIcon icon={faMoon} />} />
    </Wrap>
  )
}

export const closeButton: ComponentStory<typeof Button> = () => {
  return (
    <Wrap gap='md'>
      <CloseButton size='sm' />

      <CloseButton size='md' />

      <CloseButton size='lg' />
    </Wrap>
  )
}

export const withLoading: ComponentStory<typeof Button> = () => {
  return (
    <Wrap gap='md'>
      <Button isLoading colorStyle='primary'>
        Button
      </Button>

      <Button isLoading colorStyle='secondary' loadingIcon='dots'>
        Button
      </Button>

      <Button isLoading colorStyle='warning' variant='outline'>
        Button
      </Button>

      <Button isLoading colorStyle='danger' variant='ghost'>
        Button
      </Button>

      <Button isLoading loadingText='Loading...' colorStyle='primary'>
        Button
      </Button>

      <Button
        isLoading
        loadingText='Loading...'
        loadingPlacement='end'
        loadingIcon='grid'
        colorStyle='secondary'
        variant='outline'
      >
        Button
      </Button>
    </Wrap>
  )
}

export const buttonGroup: ComponentStory<typeof Button> = () => {
  return (
    <>
      <ButtonGroup isAttached variant='outline'>
        <Button>Button</Button>
        <IconButton icon={<FontAwesomeIcon icon={faPlus} />} />
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
