import type { Meta, StoryFn } from "@storybook/react"
import type { CheckboxItem } from "@yamada-ui/react"
import {
  Checkbox,
  CheckboxGroup,
  FormControl,
  useBoolean,
  useCheckbox,
  useCheckboxGroup,
  VStack,
  Wrap,
  Box,
  HStack,
  Button,
} from "@yamada-ui/react"
import type { FC } from "react"
import { useState } from "react"
import type { SubmitHandler } from "react-hook-form"
import { Controller, useForm } from "react-hook-form"

type Story = StoryFn<typeof Checkbox>

const meta: Meta<typeof Checkbox> = {
  title: "Components / Forms / Checkbox",
  component: Checkbox,
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

export const withdefaultIsChecked: Story = () => {
  return <Checkbox defaultIsChecked>孫悟空</Checkbox>
}

export const withColorScheme: Story = () => {
  return (
    <Wrap gap="md">
      <Checkbox colorScheme="primary" defaultIsChecked>
        Primary
      </Checkbox>

      <Checkbox colorScheme="secondary" defaultIsChecked>
        Secondary
      </Checkbox>

      <Checkbox colorScheme="warning" defaultIsChecked>
        Warning
      </Checkbox>

      <Checkbox colorScheme="danger" defaultIsChecked>
        Danger
      </Checkbox>

      <Checkbox colorScheme="link" defaultIsChecked>
        Link
      </Checkbox>

      <Checkbox colorScheme="gray" defaultIsChecked>
        Gray
      </Checkbox>

      <Checkbox colorScheme="zinc" defaultIsChecked>
        Zinc
      </Checkbox>

      <Checkbox colorScheme="neutral" defaultIsChecked>
        Neutral
      </Checkbox>

      <Checkbox colorScheme="stone" defaultIsChecked>
        Stone
      </Checkbox>

      <Checkbox colorScheme="red" defaultIsChecked>
        Red
      </Checkbox>

      <Checkbox colorScheme="rose" defaultIsChecked>
        Rose
      </Checkbox>

      <Checkbox colorScheme="pink" defaultIsChecked>
        Pink
      </Checkbox>

      <Checkbox colorScheme="orange" defaultIsChecked>
        Orange
      </Checkbox>

      <Checkbox colorScheme="amber" defaultIsChecked>
        Amber
      </Checkbox>

      <Checkbox colorScheme="yellow" defaultIsChecked>
        Yellow
      </Checkbox>

      <Checkbox colorScheme="lime" defaultIsChecked>
        Lime
      </Checkbox>

      <Checkbox colorScheme="green" defaultIsChecked>
        Green
      </Checkbox>

      <Checkbox colorScheme="emerald" defaultIsChecked>
        Emerald
      </Checkbox>

      <Checkbox colorScheme="teal" defaultIsChecked>
        Teal
      </Checkbox>

      <Checkbox colorScheme="cyan" defaultIsChecked>
        Cyan
      </Checkbox>

      <Checkbox colorScheme="sky" defaultIsChecked>
        Sky
      </Checkbox>

      <Checkbox colorScheme="blue" defaultIsChecked>
        Blue
      </Checkbox>

      <Checkbox colorScheme="indigo" defaultIsChecked>
        Indigo
      </Checkbox>

      <Checkbox colorScheme="violet" defaultIsChecked>
        Violet
      </Checkbox>

      <Checkbox colorScheme="purple" defaultIsChecked>
        Purple
      </Checkbox>

      <Checkbox colorScheme="fuchsia" defaultIsChecked>
        Fuchsia
      </Checkbox>
    </Wrap>
  )
}

export const isDisabled: Story = () => {
  return (
    <>
      <Checkbox isDisabled>All Notifications</Checkbox>
      <Checkbox isDisabled defaultIsChecked>
        All Notifications
      </Checkbox>

      <CheckboxGroup defaultValue={["all"]}>
        <Checkbox value="all">All Notifications</Checkbox>
        <Checkbox value="important" isDisabled>
          Important Notifications
        </Checkbox>
        <Checkbox value="service">Service Notifications</Checkbox>
      </CheckboxGroup>

      <FormControl
        isDisabled
        label="Which notifications would you like to receive?"
      >
        <Checkbox defaultIsChecked>All Notifications</Checkbox>
      </FormControl>

      <FormControl
        isDisabled
        label="Which notifications would you like to receive?"
      >
        <CheckboxGroup defaultValue={["all"]}>
          <Checkbox value="all">All Notifications</Checkbox>
          <Checkbox value="important">Important Notifications</Checkbox>
          <Checkbox value="service">Service Notifications</Checkbox>
        </CheckboxGroup>
      </FormControl>
    </>
  )
}

export const isReadonly: Story = () => {
  return (
    <>
      <Checkbox isReadOnly>All Notifications</Checkbox>
      <Checkbox isReadOnly defaultIsChecked>
        All Notifications
      </Checkbox>

      <CheckboxGroup defaultValue={["all"]}>
        <Checkbox value="all">All Notifications</Checkbox>
        <Checkbox value="important" isReadOnly>
          Important Notifications
        </Checkbox>
        <Checkbox value="service">Service Notifications</Checkbox>
      </CheckboxGroup>

      <FormControl
        isReadOnly
        label="Which notifications would you like to receive?"
      >
        <Checkbox defaultIsChecked>All Notifications</Checkbox>
      </FormControl>

      <FormControl
        isReadOnly
        label="Which notifications would you like to receive?"
      >
        <CheckboxGroup defaultValue={["all"]}>
          <Checkbox value="all">All Notifications</Checkbox>
          <Checkbox value="important">Important Notifications</Checkbox>
          <Checkbox value="service">Service Notifications</Checkbox>
        </CheckboxGroup>
      </FormControl>
    </>
  )
}

export const isInvalid: Story = () => {
  return (
    <>
      <Checkbox isInvalid>All Notifications</Checkbox>
      <Checkbox isInvalid defaultIsChecked>
        All Notifications
      </Checkbox>

      <CheckboxGroup defaultValue={["all"]}>
        <Checkbox value="all">All Notifications</Checkbox>
        <Checkbox value="important" isInvalid>
          Important Notifications
        </Checkbox>
        <Checkbox value="service">Service Notifications</Checkbox>
      </CheckboxGroup>

      <FormControl
        isInvalid
        label="Which notifications would you like to receive?"
        errorMessage="This is required."
      >
        <Checkbox>All Notifications</Checkbox>
      </FormControl>

      <FormControl
        isInvalid
        label="Which notifications would you like to receive?"
        errorMessage="This is required."
      >
        <CheckboxGroup defaultValue={["all"]}>
          <Checkbox value="all">All Notifications</Checkbox>
          <Checkbox value="important">Important Notifications</Checkbox>
          <Checkbox value="service">Service Notifications</Checkbox>
        </CheckboxGroup>
      </FormControl>
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
        isChecked={allChecked}
        isIndeterminate={isIndeterminate}
        onChange={(e) => setValues([e.target.checked, e.target.checked])}
      >
        地球人
      </Checkbox>

      <VStack pl="md" gap="sm">
        <Checkbox
          isChecked={values[0]}
          onChange={(e) => setValues([e.target.checked, values[1]])}
        >
          孫悟空
        </Checkbox>

        <Checkbox
          isChecked={values[1]}
          onChange={(e) => setValues([values[0], e.target.checked])}
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

      <CheckboxGroup direction="row" defaultValue={["孫悟空", "ベジータ"]}>
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
    <Checkbox isChecked={isChecked} onChange={toggle}>
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
  const CustomCheckbox: FC<any> = (props) => {
    const { getInputProps, getIconProps } = useCheckbox(props)

    return (
      <Box as="label">
        <input {...getInputProps()} />

        <Box
          {...getIconProps()}
          cursor="pointer"
          borderWidth="1px"
          py="xs"
          px="sm"
          rounded="md"
          _checked={{
            bg: "blue.500",
            color: "white",
            borderColor: "blue.500",
          }}
        >
          {props.value}
        </Box>
      </Box>
    )
  }

  const { getCheckboxProps } = useCheckboxGroup({ defaultValue: ["孫悟空"] })

  return (
    <HStack gap="sm">
      <CustomCheckbox {...getCheckboxProps({ value: "孫悟空" })} />
      <CustomCheckbox {...getCheckboxProps({ value: "ベジータ" })} />
      <CustomCheckbox {...getCheckboxProps({ value: "フリーザ" })} />
    </HStack>
  )
}

export const reactHookForm: Story = () => {
  type Data = { checkbox: boolean; checkboxGroup: string[] }

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Data>()

  const onSubmit: SubmitHandler<Data> = (data) => console.log("submit:", data)

  console.log("watch:", watch())

  return (
    <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl
        isInvalid={!!errors.checkbox}
        label="Who is your favorite character?"
        errorMessage={errors.checkbox?.message}
      >
        <Controller
          name="checkbox"
          control={control}
          rules={{ required: { value: true, message: "This is required." } }}
          render={({ field: { value, ...rest } }) => (
            <Checkbox isChecked={value} {...rest}>
              孫悟空
            </Checkbox>
          )}
        />
      </FormControl>

      <FormControl
        isInvalid={!!errors.checkboxGroup}
        label="Who is your favorite character?"
        errorMessage={errors.checkboxGroup?.message}
      >
        <Controller
          name="checkboxGroup"
          control={control}
          rules={{ required: { value: true, message: "This is required." } }}
          render={({ field }) => (
            <CheckboxGroup {...field}>
              <Checkbox value="孫悟空">孫悟空</Checkbox>
              <Checkbox value="ベジータ">ベジータ</Checkbox>
              <Checkbox value="フリーザ">フリーザ</Checkbox>
            </CheckboxGroup>
          )}
        />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>
  )
}

export const reactHookFormWithDefaultValue: Story = () => {
  type Data = { checkbox: boolean; checkboxGroup: string[] }

  const defaultValues: Data = {
    checkbox: true,
    checkboxGroup: ["孫悟空"],
  }

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Data>({ defaultValues })

  const onSubmit: SubmitHandler<Data> = (data) => console.log("submit:", data)

  console.log("watch:", watch())

  return (
    <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl
        isInvalid={!!errors.checkbox}
        label="Who is your favorite character?"
        errorMessage={errors.checkbox?.message}
      >
        <Controller
          name="checkbox"
          control={control}
          rules={{ required: { value: true, message: "This is required." } }}
          render={({ field: { value, ...rest } }) => (
            <Checkbox isChecked={value} {...rest}>
              孫悟空
            </Checkbox>
          )}
        />
      </FormControl>

      <FormControl
        isInvalid={!!errors.checkboxGroup}
        label="Who is your favorite character?"
        errorMessage={errors.checkboxGroup?.message}
      >
        <Controller
          name="checkboxGroup"
          control={control}
          rules={{ required: { value: true, message: "This is required." } }}
          render={({ field }) => (
            <CheckboxGroup {...field}>
              <Checkbox value="孫悟空">孫悟空</Checkbox>
              <Checkbox value="ベジータ">ベジータ</Checkbox>
              <Checkbox value="フリーザ">フリーザ</Checkbox>
            </CheckboxGroup>
          )}
        />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>
  )
}
