import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Wrap, Button, IconButton, ButtonGroup, FontAwesomeIcon, VStack } from '@yamada-ui/react'
import {
  faArrowRight,
  faCheck,
  faEnvelope,
  faMinus,
  faMoon,
  faPlus,
  faSun,
} from '@fortawesome/free-solid-svg-icons'

export default {
  title: 'Components / Forms / Button',
  component: Button,
} as ComponentMeta<typeof Button>

export const solid: ComponentStory<typeof Button> = () => {
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

      <Button colorScheme='linkedin'>Linkedin</Button>

      <Button colorScheme='facebook'>Facebook</Button>

      <Button colorScheme='messenger'>Messenger</Button>

      <Button colorScheme='whatsapp'>Whatsapp</Button>

      <Button colorScheme='twitter'>Twitter</Button>

      <Button colorScheme='line'>Line</Button>

      <Button colorScheme='instagram'>Instagram</Button>

      <Button colorScheme='youtube'>Youtube</Button>
    </Wrap>
  )
}

export const outline: ComponentStory<typeof Button> = () => {
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

      <Button variant='outline' colorScheme='linkedin'>
        Linkedin
      </Button>

      <Button variant='outline' colorScheme='facebook'>
        Facebook
      </Button>

      <Button variant='outline' colorScheme='messenger'>
        Messenger
      </Button>

      <Button variant='outline' colorScheme='whatsapp'>
        Whatsapp
      </Button>

      <Button variant='outline' colorScheme='twitter'>
        Twitter
      </Button>

      <Button variant='outline' colorScheme='line'>
        Line
      </Button>

      <Button variant='outline' colorScheme='instagram'>
        Instagram
      </Button>

      <Button variant='outline' colorScheme='youtube'>
        Youtube
      </Button>
    </Wrap>
  )
}

export const withSize: ComponentStory<typeof Button> = () => {
  return (
    <Wrap gap='md'>
      <Button colorScheme='primary' size='xs'>
        Button
      </Button>

      <Button colorScheme='secondary' size='sm'>
        Button
      </Button>

      <Button colorScheme='warning' size='md'>
        Button
      </Button>

      <Button colorScheme='danger' size='lg'>
        Button
      </Button>
    </Wrap>
  )
}

export const withVariant: ComponentStory<typeof Button> = () => {
  return (
    <Wrap gap='md'>
      <Button colorScheme='primary' variant='solid'>
        Button
      </Button>

      <Button colorScheme='secondary' variant='outline'>
        Button
      </Button>

      <Button colorScheme='warning' variant='ghost'>
        Button
      </Button>

      <Button colorScheme='danger' variant='link'>
        Button
      </Button>

      <Button variant='unstyled'>Button</Button>
    </Wrap>
  )
}

export const withDisabled: ComponentStory<typeof Button> = () => {
  return (
    <Wrap gap='md'>
      <Button colorScheme='primary' variant='solid' isDisabled>
        Button
      </Button>

      <Button colorScheme='secondary' variant='outline' isDisabled>
        Button
      </Button>

      <Button colorScheme='warning' variant='ghost' isDisabled>
        Button
      </Button>

      <Button colorScheme='danger' variant='link' isDisabled>
        Button
      </Button>

      <Button variant='unstyled' isDisabled>
        Button
      </Button>
    </Wrap>
  )
}

export const withIcon: ComponentStory<typeof Button> = () => {
  return (
    <Wrap gap='md'>
      <Button colorScheme='primary' variant='solid' leftIcon={<FontAwesomeIcon icon={faPlus} />}>
        Button
      </Button>

      <Button
        colorScheme='secondary'
        variant='outline'
        rightIcon={<FontAwesomeIcon icon={faArrowRight} />}
      >
        Button
      </Button>

      <Button
        colorScheme='warning'
        variant='ghost'
        leftIcon={<FontAwesomeIcon icon={faEnvelope} />}
      >
        Button
      </Button>

      <Button colorScheme='danger' variant='link' leftIcon={<FontAwesomeIcon icon={faCheck} />}>
        Button
      </Button>
    </Wrap>
  )
}

export const iconButton: ComponentStory<typeof Button> = () => {
  return (
    <Wrap gap='md'>
      <IconButton colorScheme='primary' icon={<FontAwesomeIcon icon={faPlus} />} />

      <IconButton colorScheme='secondary' icon={<FontAwesomeIcon icon={faMinus} />} />

      <IconButton colorScheme='warning' size='lg' icon={<FontAwesomeIcon icon={faSun} />} />

      <IconButton colorScheme='danger' size='lg' icon={<FontAwesomeIcon icon={faMoon} />} />
    </Wrap>
  )
}

export const withLoading: ComponentStory<typeof Button> = () => {
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
