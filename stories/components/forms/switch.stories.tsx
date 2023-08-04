import { Meta, StoryFn } from '@storybook/react'
import {
  Label,
  Switch,
  Wrap,
  useBoolean,
  HStack,
  VStack,
  Button,
} from '@yamada-ui/react'
import { useId } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'

type Story = StoryFn<typeof Switch>

const meta: Meta<typeof Switch> = {
  title: 'Components / Forms / Switch',
  component: Switch,
}

export default meta

export const withReverse: Story = () => {
  return <Switch isReverse>basic</Switch>
}

export const withSize: Story = () => {
  return (
    <>
      <Switch size='sm'>small size</Switch>
      <Switch size='md'>medium size</Switch>
      <Switch size='lg'>large size</Switch>
    </>
  )
}

export const withVariant: Story = () => {
  return (
    <>
      <Switch variant='thick'>thick</Switch>
      <Switch variant='thin'>thin</Switch>
    </>
  )
}

export const withLabel: Story = () => {
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

export const withColorScheme: Story = () => {
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

      <Switch colorScheme='zinc' defaultChecked>
        Zinc
      </Switch>

      <Switch colorScheme='neutral' defaultChecked>
        Neutral
      </Switch>

      <Switch colorScheme='stone' defaultChecked>
        Stone
      </Switch>

      <Switch colorScheme='red' defaultChecked>
        Red
      </Switch>

      <Switch colorScheme='rose' defaultChecked>
        Rose
      </Switch>

      <Switch colorScheme='pink' defaultChecked>
        Pink
      </Switch>

      <Switch colorScheme='orange' defaultChecked>
        Orange
      </Switch>

      <Switch colorScheme='amber' defaultChecked>
        Amber
      </Switch>

      <Switch colorScheme='yellow' defaultChecked>
        Yellow
      </Switch>

      <Switch colorScheme='lime' defaultChecked>
        Lime
      </Switch>

      <Switch colorScheme='green' defaultChecked>
        Green
      </Switch>

      <Switch colorScheme='emerald' defaultChecked>
        Emerald
      </Switch>

      <Switch colorScheme='teal' defaultChecked>
        Teal
      </Switch>

      <Switch colorScheme='cyan' defaultChecked>
        Cyan
      </Switch>

      <Switch colorScheme='sky' defaultChecked>
        Sky
      </Switch>

      <Switch colorScheme='blue' defaultChecked>
        Blue
      </Switch>

      <Switch colorScheme='indigo' defaultChecked>
        Indigo
      </Switch>

      <Switch colorScheme='violet' defaultChecked>
        Violet
      </Switch>

      <Switch colorScheme='purple' defaultChecked>
        Purple
      </Switch>

      <Switch colorScheme='fuchsia' defaultChecked>
        Fuchsia
      </Switch>
    </Wrap>
  )
}

export const isDisabled: Story = () => {
  return (
    <>
      <Switch isDisabled>disabled</Switch>
      <Switch isDisabled defaultChecked>
        disabled
      </Switch>
    </>
  )
}

export const isReadonly: Story = () => {
  return (
    <>
      <Switch isReadOnly>read only</Switch>
      <Switch isReadOnly defaultChecked>
        read only
      </Switch>
    </>
  )
}

export const customControl: Story = () => {
  const [isChecked, { toggle }] = useBoolean(false)

  return (
    <Switch isChecked={isChecked} onChange={toggle}>
      custom control
    </Switch>
  )
}

export const reactHookForm: Story = () => {
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

export const reactHookFormWithDefaultValue: Story = () => {
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
