import type { Meta, StoryFn } from "@storybook/react"
import type { CheckboxItem, UseCheckboxGroupReturn } from "@yamada-ui/react"
import type { FC } from "react"
import type { SubmitHandler } from "react-hook-form"
import {
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  Fieldset,
  HStack,
  useBoolean,
  useCheckbox,
  useCheckboxGroup,
  VStack,
  Wrap,
} from "@yamada-ui/react"
import { useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { colorSchemes } from "../../components"

type Story = StoryFn<typeof Checkbox>

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: "Components / Forms / Checkbox",
}

export default meta

export const basic: Story = () => {
  return <Checkbox>孫悟空</Checkbox>
}

export const withSize: Story = () => {
  return (
    <Wrap gap="md">
      <Checkbox size="sm">孫悟空</Checkbox>
      <Checkbox size="md">ベジータ</Checkbox>
      <Checkbox size="lg">フリーザ</Checkbox>
    </Wrap>
  )
}

export const withColorScheme: Story = () => {
  return (
    <Wrap gap="md">
      {colorSchemes.map((colorScheme) => (
        <Checkbox key={colorScheme} colorScheme={colorScheme} defaultChecked>
          {colorScheme}
        </Checkbox>
      ))}
    </Wrap>
  )
}

export const withDefaultIsChecked: Story = () => {
  return <Checkbox defaultChecked>孫悟空</Checkbox>
}

export const disabled: Story = () => {
  return (
    <>
      <Checkbox disabled>All Notifications</Checkbox>
      <Checkbox defaultChecked disabled>
        All Notifications
      </Checkbox>

      <CheckboxGroup defaultValue={["all"]}>
        <Checkbox value="all">All Notifications</Checkbox>
        <Checkbox disabled value="important">
          Important Notifications
        </Checkbox>
        <Checkbox value="service">Service Notifications</Checkbox>
      </CheckboxGroup>

      <Fieldset
        disabled
        legend="Which notifications would you like to receive?"
      >
        <Checkbox defaultChecked>All Notifications</Checkbox>
      </Fieldset>

      <Fieldset
        disabled
        legend="Which notifications would you like to receive?"
      >
        <CheckboxGroup defaultValue={["all"]}>
          <Checkbox value="all">All Notifications</Checkbox>
          <Checkbox value="important">Important Notifications</Checkbox>
          <Checkbox value="service">Service Notifications</Checkbox>
        </CheckboxGroup>
      </Fieldset>
    </>
  )
}

export const readOnly: Story = () => {
  return (
    <>
      <Checkbox readOnly>All Notifications</Checkbox>
      <Checkbox defaultChecked readOnly>
        All Notifications
      </Checkbox>

      <CheckboxGroup defaultValue={["all"]}>
        <Checkbox value="all">All Notifications</Checkbox>
        <Checkbox readOnly value="important">
          Important Notifications
        </Checkbox>
        <Checkbox value="service">Service Notifications</Checkbox>
      </CheckboxGroup>

      <Fieldset
        legend="Which notifications would you like to receive?"
        readOnly
      >
        <Checkbox defaultChecked>All Notifications</Checkbox>
      </Fieldset>

      <Fieldset
        legend="Which notifications would you like to receive?"
        readOnly
      >
        <CheckboxGroup defaultValue={["all"]}>
          <Checkbox value="all">All Notifications</Checkbox>
          <Checkbox value="important">Important Notifications</Checkbox>
          <Checkbox value="service">Service Notifications</Checkbox>
        </CheckboxGroup>
      </Fieldset>
    </>
  )
}

export const invalid: Story = () => {
  return (
    <>
      <Checkbox invalid>All Notifications</Checkbox>
      <Checkbox defaultChecked invalid>
        All Notifications
      </Checkbox>

      <CheckboxGroup defaultValue={["all"]}>
        <Checkbox value="all">All Notifications</Checkbox>
        <Checkbox invalid value="important">
          Important Notifications
        </Checkbox>
        <Checkbox value="service">Service Notifications</Checkbox>
      </CheckboxGroup>

      <Fieldset
        errorMessage="This is required."
        invalid
        legend="Which notifications would you like to receive?"
      >
        <Checkbox>All Notifications</Checkbox>
      </Fieldset>

      <Fieldset
        errorMessage="This is required."
        invalid
        legend="Which notifications would you like to receive?"
      >
        <CheckboxGroup defaultValue={["all"]}>
          <Checkbox value="all">All Notifications</Checkbox>
          <Checkbox value="important">Important Notifications</Checkbox>
          <Checkbox value="service">Service Notifications</Checkbox>
        </CheckboxGroup>
      </Fieldset>
    </>
  )
}

export const indeterminate: Story = () => {
  const [values, setValues] = useState([false, false])

  const allChecked = values.every(Boolean)
  const isIndeterminate = values.some(Boolean) && !allChecked

  return (
    <VStack gap="sm">
      <Checkbox
        checked={allChecked}
        indeterminate={isIndeterminate}
        onChange={(e) => setValues([e.target.checked, e.target.checked])}
      >
        地球人
      </Checkbox>

      <VStack gap="sm" pl="md">
        <Checkbox
          checked={values[0]}
          onChange={(e) => setValues([e.target.checked, values[1]!])}
        >
          孫悟空
        </Checkbox>

        <Checkbox
          checked={values[1]}
          onChange={(e) => setValues([values[0]!, e.target.checked])}
        >
          孫悟飯
        </Checkbox>
      </VStack>
    </VStack>
  )
}

export const withGroup: Story = () => {
  const items: CheckboxItem[] = [
    { label: "孫悟空", value: "孫悟空" },
    { label: "ベジータ", value: "ベジータ" },
    { label: "フリーザ", value: "フリーザ" },
  ]

  return (
    <>
      <CheckboxGroup defaultValue={["孫悟空", "ベジータ"]}>
        <Checkbox value="孫悟空">孫悟空</Checkbox>
        <Checkbox value="ベジータ">ベジータ</Checkbox>
        <Checkbox value="フリーザ">フリーザ</Checkbox>
      </CheckboxGroup>

      <CheckboxGroup defaultValue={["孫悟空", "ベジータ"]} direction="row">
        <Checkbox value="孫悟空">孫悟空</Checkbox>
        <Checkbox value="ベジータ">ベジータ</Checkbox>
        <Checkbox value="フリーザ">フリーザ</Checkbox>
      </CheckboxGroup>

      <CheckboxGroup defaultValue={["孫悟空", "ベジータ"]} items={items} />
    </>
  )
}

export const customControl: Story = () => {
  const [isChecked, { toggle }] = useBoolean(false)

  return (
    <Checkbox checked={isChecked} onChange={toggle}>
      孫悟空
    </Checkbox>
  )
}

export const customControlGroup: Story = () => {
  const [value, setValue] = useState<string[]>(["孫悟空", "ベジータ"])

  return (
    <CheckboxGroup value={value} onChange={(value) => setValue(value)}>
      <Checkbox value="孫悟空">孫悟空</Checkbox>
      <Checkbox value="ベジータ">ベジータ</Checkbox>
      <Checkbox value="フリーザ">フリーザ</Checkbox>
    </CheckboxGroup>
  )
}

export const customHook: Story = () => {
  const CustomCheckbox: FC<
    ReturnType<UseCheckboxGroupReturn["getCheckboxProps"]>
  > = (props) => {
    const { getIconProps, getInputProps } = useCheckbox(props)

    return (
      <Box as="label">
        <input {...getInputProps()} aria-label={props.value} />

        <Box
          {...getIconProps()}
          borderWidth="1px"
          cursor="pointer"
          px="sm"
          py="xs"
          rounded="md"
          _checked={{
            bg: "blue.500",
            borderColor: "blue.500",
            color: "white",
          }}
        >
          {props.value}
        </Box>
      </Box>
    )
  }

  const { getCheckboxProps } = useCheckboxGroup<string>({
    defaultValue: ["孫悟空"],
  })

  return (
    <HStack gap="sm">
      <CustomCheckbox {...getCheckboxProps({ value: "孫悟空" })} />
      <CustomCheckbox {...getCheckboxProps({ value: "ベジータ" })} />
      <CustomCheckbox {...getCheckboxProps({ value: "フリーザ" })} />
    </HStack>
  )
}

export const reactHookForm: Story = () => {
  interface Data {
    checkbox: boolean
    checkboxGroup: string[]
  }

  const {
    control,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<Data>()

  const onSubmit: SubmitHandler<Data> = (data) => console.log("submit:", data)

  console.log("watch:", watch())

  return (
    <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <Fieldset
        errorMessage={errors.checkbox?.message}
        invalid={!!errors.checkbox}
        legend="Who is your favorite character?"
      >
        <Controller
          name="checkbox"
          control={control}
          render={({ field: { value, ...rest } }) => (
            <Checkbox checked={value} {...rest}>
              孫悟空
            </Checkbox>
          )}
          rules={{ required: { message: "This is required.", value: true } }}
        />
      </Fieldset>

      <Fieldset
        errorMessage={errors.checkboxGroup?.message}
        invalid={!!errors.checkboxGroup}
        legend="Who is your favorite character?"
      >
        <Controller
          name="checkboxGroup"
          control={control}
          render={({ field }) => (
            <CheckboxGroup {...field}>
              <Checkbox value="孫悟空">孫悟空</Checkbox>
              <Checkbox value="ベジータ">ベジータ</Checkbox>
              <Checkbox value="フリーザ">フリーザ</Checkbox>
            </CheckboxGroup>
          )}
          rules={{ required: { message: "This is required.", value: true } }}
        />
      </Fieldset>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>
  )
}

export const reactHookFormWithDefaultValue: Story = () => {
  interface Data {
    checkbox: boolean
    checkboxGroup: string[]
  }

  const defaultValues: Data = {
    checkbox: true,
    checkboxGroup: ["孫悟空"],
  }

  const {
    control,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<Data>({ defaultValues })

  const onSubmit: SubmitHandler<Data> = (data) => console.log("submit:", data)

  console.log("watch:", watch())

  return (
    <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <Fieldset
        errorMessage={errors.checkbox?.message}
        invalid={!!errors.checkbox}
        legend="Who is your favorite character?"
      >
        <Controller
          name="checkbox"
          control={control}
          render={({ field: { value, ...rest } }) => (
            <Checkbox checked={value} {...rest}>
              孫悟空
            </Checkbox>
          )}
          rules={{ required: { message: "This is required.", value: true } }}
        />
      </Fieldset>

      <Fieldset
        errorMessage={errors.checkboxGroup?.message}
        invalid={!!errors.checkboxGroup}
        legend="Who is your favorite character?"
      >
        <Controller
          name="checkboxGroup"
          control={control}
          render={({ field }) => (
            <CheckboxGroup {...field}>
              <Checkbox value="孫悟空">孫悟空</Checkbox>
              <Checkbox value="ベジータ">ベジータ</Checkbox>
              <Checkbox value="フリーザ">フリーザ</Checkbox>
            </CheckboxGroup>
          )}
          rules={{ required: { message: "This is required.", value: true } }}
        />
      </Fieldset>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>
  )
}
