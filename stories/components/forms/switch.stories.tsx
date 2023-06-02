import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Label, Switch, Wrap, useBoolean, HStack } from '@yamada-ui/react'
import { useId } from 'react'

export default {
  title: 'Components / Forms / Switch',
  component: Switch,
} as ComponentMeta<typeof Switch>

export const basic: ComponentStory<typeof Switch> = () => {
  return <Switch>basic</Switch>
}

export const withReverse: ComponentStory<typeof Switch> = () => {
  return <Switch reverse>basic</Switch>
}

export const withSize: ComponentStory<typeof Switch> = () => {
  return (
    <>
      <Switch size='sm'>small size</Switch>
      <Switch size='md'>medium size</Switch>
      <Switch size='lg'>large size</Switch>
    </>
  )
}

export const withVariant: ComponentStory<typeof Switch> = () => {
  return (
    <>
      <Switch variant='thick'>thick</Switch>
      <Switch variant='thin'>thin</Switch>
    </>
  )
}

export const withLabel: ComponentStory<typeof Switch> = () => {
  const id = useId()

  return (
    <HStack gap='sm'>
      <Label htmlFor={id} userSelect='none'>
        Please Click
      </Label>
      <Switch id={id} />
    </HStack>
  )
}

export const withColorScheme: ComponentStory<typeof Switch> = () => {
  return (
    <Wrap gap='md'>
      <Switch colorScheme='primary' defaultChecked>
        Primary
      </Switch>

      <Switch colorScheme='secondary' defaultChecked>
        Secondary
      </Switch>

      <Switch colorScheme='warning' defaultChecked>
        Warning
      </Switch>

      <Switch colorScheme='danger' defaultChecked>
        Danger
      </Switch>

      <Switch colorScheme='link' defaultChecked>
        Link
      </Switch>

      <Switch colorScheme='gray' defaultChecked>
        Gray
      </Switch>

      <Switch colorScheme='red' defaultChecked>
        Red
      </Switch>

      <Switch colorScheme='orange' defaultChecked>
        Orange
      </Switch>

      <Switch colorScheme='yellow' defaultChecked>
        Yellow
      </Switch>

      <Switch colorScheme='green' defaultChecked>
        Green
      </Switch>

      <Switch colorScheme='teal' defaultChecked>
        Teal
      </Switch>

      <Switch colorScheme='blue' defaultChecked>
        Blue
      </Switch>

      <Switch colorScheme='cyan' defaultChecked>
        Cyan
      </Switch>

      <Switch colorScheme='purple' defaultChecked>
        Purple
      </Switch>

      <Switch colorScheme='pink' defaultChecked>
        pink
      </Switch>

      <Switch colorScheme='linkedin' defaultChecked>
        Linkedin
      </Switch>

      <Switch colorScheme='facebook' defaultChecked>
        Facebook
      </Switch>

      <Switch colorScheme='messenger' defaultChecked>
        Messenger
      </Switch>

      <Switch colorScheme='whatsapp' defaultChecked>
        Whatsapp
      </Switch>

      <Switch colorScheme='twitter' defaultChecked>
        Twitter
      </Switch>

      <Switch colorScheme='line' defaultChecked>
        Line
      </Switch>

      <Switch colorScheme='instagram' defaultChecked>
        Instagram
      </Switch>

      <Switch colorScheme='youtube' defaultChecked>
        Youtube
      </Switch>
    </Wrap>
  )
}

export const isDisabled: ComponentStory<typeof Switch> = () => {
  return (
    <>
      <Switch isDisabled>disabled</Switch>
      <Switch isDisabled defaultChecked>
        disabled
      </Switch>
    </>
  )
}

export const isReadonly: ComponentStory<typeof Switch> = () => {
  return (
    <>
      <Switch isReadOnly>read only</Switch>
      <Switch isReadOnly defaultChecked>
        read only
      </Switch>
    </>
  )
}

export const customControl: ComponentStory<typeof Switch> = () => {
  const [isChecked, { toggle }] = useBoolean(false)

  return (
    <Switch isChecked={isChecked} onChange={toggle}>
      custom control
    </Switch>
  )
}
