import type { Meta, StoryFn } from "@storybook/react-vite"
import type { SubmitHandler } from "react-hook-form"
import { PropsTable } from "#storybook"
import { Fragment, useId } from "react"
import { Controller, useForm } from "react-hook-form"
import { useBoolean } from "../../hooks/use-boolean"
import { COLOR_SCHEMES, toTitleCase } from "../../utils"
import { Button } from "../button"
import { For } from "../for"
import { MoonIcon, SunIcon } from "../icon"
import { HStack, VStack } from "../stack"
import { Text } from "../text"
import { Switch } from "./"

type Story = StoryFn<typeof Switch>

const meta: Meta<typeof Switch> = {
  component: Switch,
  title: "Components / Switch",
}

export default meta

export const Basic: Story = () => {
  return <Switch>Switch</Switch>
}

export const Variant: Story = () => {
  return (
    <PropsTable columns={["thick", "thin"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => (
        <Switch key={key} colorScheme={row} variant={column} defaultChecked>
          Switch
        </Switch>
      )}
    </PropsTable>
  )
}

export const Size: Story = () => {
  return (
    <PropsTable columns={["sm", "md", "lg"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => (
        <Switch key={key} colorScheme={row} size={column} defaultChecked>
          Switch
        </Switch>
      )}
    </PropsTable>
  )
}

export const Disabled: Story = () => {
  return (
    <For each={["thick", "thin"] as const}>
      {(variant, index) => (
        <Fragment key={index}>
          <Switch variant={variant} disabled>
            {toTitleCase(variant)}
          </Switch>

          <Switch variant={variant} defaultChecked disabled>
            {toTitleCase(variant)}
          </Switch>
        </Fragment>
      )}
    </For>
  )
}

export const ReadOnly: Story = () => {
  return (
    <For each={["thick", "thin"] as const}>
      {(variant, index) => (
        <Fragment key={index}>
          <Switch variant={variant} readOnly>
            {toTitleCase(variant)}
          </Switch>

          <Switch variant={variant} defaultChecked readOnly>
            {toTitleCase(variant)}
          </Switch>
        </Fragment>
      )}
    </For>
  )
}

export const Shape: Story = () => {
  return (
    <PropsTable variant="stack" rows={["square", "rounded", "circle"]}>
      {(_, row, key) => (
        <Fragment key={key}>
          <Switch defaultChecked shape={row}>
            {toTitleCase(row)}
          </Switch>
        </Fragment>
      )}
    </PropsTable>
  )
}

export const Reverse: Story = () => {
  return <Switch reverse>Switch</Switch>
}

export const Icon: Story = () => {
  return (
    <Switch
      size="lg"
      icon={{ off: <MoonIcon fontSize="sm" />, on: <SunIcon fontSize="sm" /> }}
    >
      Switch
    </Switch>
  )
}

export const CustomLabel: Story = () => {
  const id = useId()

  return (
    <HStack gap="sm">
      <Text as="label" htmlFor={id} userSelect="none">
        Please Click
      </Text>

      <Switch id={id} />
    </HStack>
  )
}

export const CustomControl: Story = () => {
  const [checked, { toggle }] = useBoolean(false)

  return (
    <Switch checked={checked} onChange={toggle}>
      Custom control
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
