import type { Meta, StoryFn } from "@storybook/react"
import {
  Label,
  Switch,
  Wrap,
  useBoolean,
  HStack,
  VStack,
  Button,
} from "@yamada-ui/react"
import { useId } from "react"
import type { SubmitHandler } from "react-hook-form"
import { Controller, useForm } from "react-hook-form"

type Story = StoryFn<typeof Switch>

const meta: Meta<typeof Switch> = {
  title: "Components / Forms / Switch",
  component: Switch,
}

export default meta

export const withReverse: Story = () => {
  return <Switch isReverse>basic</Switch>
}

export const withSize: Story = () => {
  return (
    <>
      <Switch size="sm">small size</Switch>
      <Switch size="md">medium size</Switch>
      <Switch size="lg">large size</Switch>
    </>
  )
}

export const withVariant: Story = () => {
  return (
    <>
      <Switch variant="thick">thick</Switch>
      <Switch variant="thin">thin</Switch>
    </>
  )
}

export const withLabel: Story = () => {
  const id = useId()

  return (
    <HStack gap="sm">
      <Label htmlFor={id} userSelect="none">
        Please Click
      </Label>
      <Switch id={id} />
    </HStack>
  )
}

export const withColorScheme: Story = () => {
  return (
    <Wrap gap="md">
      <Switch colorScheme="primary" defaultIsChecked>
        Primary
      </Switch>

      <Switch colorScheme="secondary" defaultIsChecked>
        Secondary
      </Switch>

      <Switch colorScheme="warning" defaultIsChecked>
        Warning
      </Switch>

      <Switch colorScheme="danger" defaultIsChecked>
        Danger
      </Switch>

      <Switch colorScheme="link" defaultIsChecked>
        Link
      </Switch>

      <Switch colorScheme="gray" defaultIsChecked>
        Gray
      </Switch>

      <Switch colorScheme="zinc" defaultIsChecked>
        Zinc
      </Switch>

      <Switch colorScheme="neutral" defaultIsChecked>
        Neutral
      </Switch>

      <Switch colorScheme="stone" defaultIsChecked>
        Stone
      </Switch>

      <Switch colorScheme="red" defaultIsChecked>
        Red
      </Switch>

      <Switch colorScheme="rose" defaultIsChecked>
        Rose
      </Switch>

      <Switch colorScheme="pink" defaultIsChecked>
        Pink
      </Switch>

      <Switch colorScheme="orange" defaultIsChecked>
        Orange
      </Switch>

      <Switch colorScheme="amber" defaultIsChecked>
        Amber
      </Switch>

      <Switch colorScheme="yellow" defaultIsChecked>
        Yellow
      </Switch>

      <Switch colorScheme="lime" defaultIsChecked>
        Lime
      </Switch>

      <Switch colorScheme="green" defaultIsChecked>
        Green
      </Switch>

      <Switch colorScheme="emerald" defaultIsChecked>
        Emerald
      </Switch>

      <Switch colorScheme="teal" defaultIsChecked>
        Teal
      </Switch>

      <Switch colorScheme="cyan" defaultIsChecked>
        Cyan
      </Switch>

      <Switch colorScheme="sky" defaultIsChecked>
        Sky
      </Switch>

      <Switch colorScheme="blue" defaultIsChecked>
        Blue
      </Switch>

      <Switch colorScheme="indigo" defaultIsChecked>
        Indigo
      </Switch>

      <Switch colorScheme="violet" defaultIsChecked>
        Violet
      </Switch>

      <Switch colorScheme="purple" defaultIsChecked>
        Purple
      </Switch>

      <Switch colorScheme="fuchsia" defaultIsChecked>
        Fuchsia
      </Switch>
    </Wrap>
  )
}

export const isDisabled: Story = () => {
  return (
    <>
      <Switch isDisabled>disabled</Switch>
      <Switch isDisabled defaultIsChecked>
        disabled
      </Switch>
    </>
  )
}

export const isReadonly: Story = () => {
  return (
    <>
      <Switch isReadOnly>read only</Switch>
      <Switch isReadOnly defaultIsChecked>
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

  const onSubmit: SubmitHandler<Data> = (data) => console.log("submit:", data)

  console.log("watch:", watch())

  return (
    <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="switch"
        control={control}
        render={({ field: { value, ...rest } }) => (
          <Switch isChecked={value} {...rest}>
            Dark mode
          </Switch>
        )}
      />

      <Button type="submit" alignSelf="flex-end">
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

  const onSubmit: SubmitHandler<Data> = (data) => console.log("submit:", data)

  console.log("watch:", watch())

  return (
    <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="switch"
        control={control}
        render={({ field: { value, ...rest } }) => (
          <Switch isChecked={value} {...rest}>
            Dark mode
          </Switch>
        )}
      />

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>
  )
}
