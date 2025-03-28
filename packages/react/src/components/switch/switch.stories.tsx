import type { Meta, StoryFn } from "@storybook/react"
import type { SubmitHandler } from "react-hook-form"
import { useId } from "react"
import { Controller, useForm } from "react-hook-form"
import { PropsTable } from "../../../storybook/components"
import { useBoolean } from "../../hooks/use-boolean"
import { COLOR_SCHEMES } from "../../utils"
import { Button } from "../button"
import { FieldLabel } from "../field"
import { HStack } from "../stack"
import { VStack } from "../stack"
import { Switch } from "./"

type Story = StoryFn<typeof Switch>

const meta: Meta<typeof Switch> = {
  component: Switch,
  title: "Components / Switch",
}

export default meta

export const Basic: Story = () => {
  return <Switch>basic</Switch>
}

export const Reverse: Story = () => {
  return <Switch reverse>basic</Switch>
}

export const Size: Story = () => {
  return (
    <PropsTable variant="column" rows={["sm", "md", "lg"]}>
      {(_, row, key) => <Switch key={key} size={row}>{`${row} size`}</Switch>}
    </PropsTable>
  )
}

export const Variant: Story = () => {
  return (
    <PropsTable variant="column" rows={["thick", "thin"]}>
      {(_, row, key) => (
        <Switch key={key} variant={row}>
          {row}
        </Switch>
      )}
    </PropsTable>
  )
}

export const Label: Story = () => {
  const id = useId()

  return (
    <HStack gap="sm">
      <FieldLabel htmlFor={id} userSelect="none">
        Please Click
      </FieldLabel>
      <Switch id={id} />
    </HStack>
  )
}

export const ColorScheme: Story = () => {
  return (
    <PropsTable columns={["thick", "thin"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => (
        <Switch key={key} colorScheme={row} variant={column} defaultChecked />
      )}
    </PropsTable>
  )
}

export const Disabled: Story = () => {
  return (
    <>
      <Switch disabled>disabled</Switch>
      <Switch defaultChecked disabled>
        disabled
      </Switch>
    </>
  )
}

export const Readonly: Story = () => {
  return (
    <>
      <Switch readOnly>read only</Switch>
      <Switch defaultChecked readOnly>
        read only
      </Switch>
    </>
  )
}

export const CustomControl: Story = () => {
  const [isChecked, { toggle }] = useBoolean(false)

  return (
    <Switch checked={isChecked} onChange={toggle}>
      custom control
    </Switch>
  )
}

export const ReactHookForm: Story = () => {
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

export const ReactHookFormWithDefaultValue: Story = () => {
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
