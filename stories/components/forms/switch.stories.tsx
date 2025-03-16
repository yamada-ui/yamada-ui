import type { Meta, StoryFn } from "@storybook/react"
import type { SubmitHandler } from "react-hook-form"
import {
  Button,
  HStack,
  Label,
  Switch,
  useBoolean,
  VStack,
  Wrap,
} from "@yamada-ui/react"
import { useId } from "react"
import { Controller, useForm } from "react-hook-form"
import { colorSchemes } from "../../components"

type Story = StoryFn<typeof Switch>

const meta: Meta<typeof Switch> = {
  component: Switch,
  title: "Components / Forms / Switch",
}

export default meta

export const basic: Story = () => {
  return <Switch>basic</Switch>
}

export const withReverse: Story = () => {
  return <Switch reverse>basic</Switch>
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
      {colorSchemes.map((colorScheme) => (
        <Switch key={colorScheme} colorScheme={colorScheme} defaultChecked>
          {colorScheme}
        </Switch>
      ))}
    </Wrap>
  )
}

export const disabled: Story = () => {
  return (
    <>
      <Switch disabled>disabled</Switch>
      <Switch defaultChecked disabled>
        disabled
      </Switch>
    </>
  )
}

export const readOnly: Story = () => {
  return (
    <>
      <Switch readOnly>read only</Switch>
      <Switch defaultChecked readOnly>
        read only
      </Switch>
    </>
  )
}

export const customControl: Story = () => {
  const [isChecked, { toggle }] = useBoolean(false)

  return (
    <Switch checked={isChecked} onChange={toggle}>
      custom control
    </Switch>
  )
}

export const reactHookForm: Story = () => {
  interface Data {
    switch: boolean
  }

  const { control, handleSubmit, watch } = useForm<Data>()

  const onSubmit: SubmitHandler<Data> = (data) => console.log("submit:", data)

  console.log("watch:", watch())

  return (
    <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="switch"
        control={control}
        render={({ field: { value, ...rest } }) => (
          <Switch checked={value} {...rest}>
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
  interface Data {
    switch: boolean
  }

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
          <Switch checked={value} {...rest}>
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
