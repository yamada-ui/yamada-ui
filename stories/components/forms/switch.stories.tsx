import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Label, Switch, Wrap, useBoolean, HStack, VStack, Button } from '@yamada-ui/react'
import { useId } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
export default {
  title: 'Components / Forms / Switch',
  component: Switch,
} as ComponentMeta<typeof Switch>

export const basic: ComponentStory<typeof Switch> = () => {
  return <Switch>basic</Switch>
}

export const withReverse: ComponentStory<typeof Switch> = () => {
  return <Switch isReverse>basic</Switch>
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

export const reactHookForm: ComponentStory<typeof Switch> = () => {
  type Data = { switch: boolean }

  const { control, handleSubmit, watch } = useForm<Data>()

  const onSubmit: SubmitHandler<Data> = (data) => console.log('submit:', data)

  console.log('watch:', watch())

  return (
    <VStack as='form' onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name='switch'
        control={control}
        render={({ field: { value, ...rest } }) => (
          <Switch isChecked={value} {...rest}>
            Dark mode
          </Switch>
        )}
      />

      <Button type='submit' alignSelf='flex-end'>
        Submit
      </Button>
    </VStack>
  )
}

export const reactHookFormWithDefaultValue: ComponentStory<typeof Switch> = () => {
  type Data = { switch: boolean }

  const defaultValues: Data = {
    switch: true,
  }

  const { control, handleSubmit, watch } = useForm<Data>({ defaultValues })

  const onSubmit: SubmitHandler<Data> = (data) => console.log('submit:', data)

  console.log('watch:', watch())

  return (
    <VStack as='form' onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name='switch'
        control={control}
        render={({ field: { value, ...rest } }) => (
          <Switch isChecked={value} {...rest}>
            Dark mode
          </Switch>
        )}
      />

      <Button type='submit' alignSelf='flex-end'>
        Submit
      </Button>
    </VStack>
  )
}
