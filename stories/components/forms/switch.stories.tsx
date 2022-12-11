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

export const withColorStyle: ComponentStory<typeof Switch> = () => {
  return (
    <Wrap gap='md'>
      <Switch colorStyle='primary' defaultChecked>
        Primary
      </Switch>

      <Switch colorStyle='secondary' defaultChecked>
        Secondary
      </Switch>

      <Switch colorStyle='warning' defaultChecked>
        Warning
      </Switch>

      <Switch colorStyle='danger' defaultChecked>
        Danger
      </Switch>

      <Switch colorStyle='link' defaultChecked>
        Link
      </Switch>

      <Switch colorStyle='gray' defaultChecked>
        Gray
      </Switch>

      <Switch colorStyle='red' defaultChecked>
        Red
      </Switch>

      <Switch colorStyle='orange' defaultChecked>
        Orange
      </Switch>

      <Switch colorStyle='yellow' defaultChecked>
        Yellow
      </Switch>

      <Switch colorStyle='green' defaultChecked>
        Green
      </Switch>

      <Switch colorStyle='teal' defaultChecked>
        Teal
      </Switch>

      <Switch colorStyle='blue' defaultChecked>
        Blue
      </Switch>

      <Switch colorStyle='cyan' defaultChecked>
        Cyan
      </Switch>

      <Switch colorStyle='purple' defaultChecked>
        Purple
      </Switch>

      <Switch colorStyle='pink' defaultChecked>
        pink
      </Switch>

      <Switch colorStyle='linkedin' defaultChecked>
        Linkedin
      </Switch>

      <Switch colorStyle='facebook' defaultChecked>
        Facebook
      </Switch>

      <Switch colorStyle='messenger' defaultChecked>
        Messenger
      </Switch>

      <Switch colorStyle='whatsapp' defaultChecked>
        Whatsapp
      </Switch>

      <Switch colorStyle='twitter' defaultChecked>
        Twitter
      </Switch>

      <Switch colorStyle='line' defaultChecked>
        Line
      </Switch>

      <Switch colorStyle='instagram' defaultChecked>
        Instagram
      </Switch>

      <Switch colorStyle='youtube' defaultChecked>
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
