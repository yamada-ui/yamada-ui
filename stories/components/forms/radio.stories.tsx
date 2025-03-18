import type { Meta, StoryFn } from "@storybook/react"
import type { RadioItem, UseRadioGroupReturn } from "@yamada-ui/react"
import type { FC } from "react"
import type { SubmitHandler } from "react-hook-form"
import {
  Box,
  Button,
  Fieldset,
  HStack,
  Radio,
  RadioGroup,
  useRadio,
  useRadioGroup,
  VStack,
  Wrap,
} from "@yamada-ui/react"
import { useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { colorSchemes } from "../../components"

type Story = StoryFn<typeof Radio>

const meta: Meta<typeof Radio> = {
  component: Radio,
  title: "Components / Forms / Radio",
}

export default meta

export const basic: Story = () => {
  return <Radio>孫悟空</Radio>
}

export const withSize: Story = () => {
  return (
    <Wrap gap="md">
      <Radio size="sm">孫悟空</Radio>
      <Radio size="md">ベジータ</Radio>
      <Radio size="lg">フリーザ</Radio>
    </Wrap>
  )
}

export const withColorScheme: Story = () => {
  return (
    <Wrap gap="md">
      {colorSchemes.map((colorScheme) => (
        <Radio key={colorScheme} colorScheme={colorScheme} defaultChecked>
          {colorScheme}
        </Radio>
      ))}
    </Wrap>
  )
}

export const withDefaultChecked: Story = () => {
  return <Radio defaultChecked>孫悟空</Radio>
}

export const disabled: Story = () => {
  return (
    <>
      <Radio disabled>All Notifications</Radio>
      <Radio defaultChecked disabled>
        All Notifications
      </Radio>

      <RadioGroup defaultValue="all">
        <Radio value="all">All Notifications</Radio>
        <Radio disabled value="important">
          Important Notifications
        </Radio>
        <Radio value="service">Service Notifications</Radio>
      </RadioGroup>

      <Fieldset
        disabled
        legend="Which notifications would you like to receive?"
      >
        <Radio defaultChecked>All Notifications</Radio>
      </Fieldset>

      <Fieldset
        disabled
        legend="Which notifications would you like to receive?"
      >
        <RadioGroup defaultValue="all">
          <Radio value="all">All Notifications</Radio>
          <Radio value="important">Important Notifications</Radio>
          <Radio value="service">Service Notifications</Radio>
        </RadioGroup>
      </Fieldset>
    </>
  )
}

export const readOnly: Story = () => {
  return (
    <>
      <Radio readOnly>All Notifications</Radio>
      <Radio defaultChecked readOnly>
        All Notifications
      </Radio>

      <RadioGroup defaultValue="all">
        <Radio value="all">All Notifications</Radio>
        <Radio readOnly value="important">
          Important Notifications
        </Radio>
        <Radio value="service">Service Notifications</Radio>
      </RadioGroup>

      <Fieldset
        legend="Which notifications would you like to receive?"
        readOnly
      >
        <Radio defaultChecked>All Notifications</Radio>
      </Fieldset>

      <Fieldset
        legend="Which notifications would you like to receive?"
        readOnly
      >
        <RadioGroup defaultValue="all">
          <Radio value="all">All Notifications</Radio>
          <Radio value="important">Important Notifications</Radio>
          <Radio value="service">Service Notifications</Radio>
        </RadioGroup>
      </Fieldset>
    </>
  )
}

export const invalid: Story = () => {
  return (
    <>
      <Radio invalid>All Notifications</Radio>
      <Radio defaultChecked invalid>
        All Notifications
      </Radio>

      <RadioGroup defaultValue="all">
        <Radio value="all">All Notifications</Radio>
        <Radio invalid value="important">
          Important Notifications
        </Radio>
        <Radio value="service">Service Notifications</Radio>
      </RadioGroup>

      <Fieldset
        errorMessage="This is required."
        invalid
        legend="Which notifications would you like to receive?"
      >
        <Radio>All Notifications</Radio>
      </Fieldset>

      <Fieldset
        errorMessage="This is required."
        invalid
        legend="Which notifications would you like to receive?"
      >
        <RadioGroup defaultValue="all">
          <Radio value="all">All Notifications</Radio>
          <Radio value="important">Important Notifications</Radio>
          <Radio value="service">Service Notifications</Radio>
        </RadioGroup>
      </Fieldset>
    </>
  )
}

export const withGroup: Story = () => {
  const items: RadioItem[] = [
    { label: "孫悟空", value: "孫悟空" },
    { label: "ベジータ", value: "ベジータ" },
    { label: "フリーザ", value: "フリーザ" },
  ]

  return (
    <>
      <RadioGroup defaultValue="孫悟空">
        <Radio value="孫悟空">孫悟空</Radio>
        <Radio value="ベジータ">ベジータ</Radio>
        <Radio value="フリーザ">フリーザ</Radio>
      </RadioGroup>

      <RadioGroup defaultValue="孫悟空" direction="row">
        <Radio value="孫悟空">孫悟空</Radio>
        <Radio value="ベジータ">ベジータ</Radio>
        <Radio value="フリーザ">フリーザ</Radio>
      </RadioGroup>

      <RadioGroup defaultValue="孫悟空" items={items} />
    </>
  )
}

export const customControl: Story = () => {
  const [value, setValue] = useState<string>("孫悟空")

  return (
    <RadioGroup value={value} onChange={setValue}>
      <Radio value="孫悟空">孫悟空</Radio>
      <Radio value="ベジータ">ベジータ</Radio>
      <Radio value="フリーザ">フリーザ</Radio>
    </RadioGroup>
  )
}

export const customHook: Story = () => {
  const CustomRadio: FC<ReturnType<UseRadioGroupReturn["getRadioProps"]>> = (
    props,
  ) => {
    const { getIconProps, getInputProps } = useRadio(props)

    return (
      <Box as="label">
        <input {...getInputProps()} aria-label={props.value} />

        <Box
          as="span"
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

  const { getContainerProps, getRadioProps } = useRadioGroup<string>({
    defaultValue: "孫悟空",
  })

  return (
    <HStack gap="sm" {...getContainerProps()}>
      <CustomRadio {...getRadioProps({ value: "孫悟空" })} />
      <CustomRadio {...getRadioProps({ value: "ベジータ" })} />
      <CustomRadio {...getRadioProps({ value: "フリーザ" })} />
    </HStack>
  )
}

export const reactHookForm: Story = () => {
  interface Data {
    radio: string
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
        errorMessage={errors.radio?.message}
        invalid={!!errors.radio}
        legend="Who is your favorite character?"
      >
        <Controller
          name="radio"
          control={control}
          render={({ field }) => (
            <RadioGroup {...field}>
              <Radio value="孫悟空">孫悟空</Radio>
              <Radio value="ベジータ">ベジータ</Radio>
              <Radio value="フリーザ">フリーザ</Radio>
            </RadioGroup>
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
    radio: string
  }

  const defaultValues: Data = {
    radio: "孫悟空",
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
        errorMessage={errors.radio?.message}
        invalid={!!errors.radio}
        legend="Who is your favorite character?"
      >
        <Controller
          name="radio"
          control={control}
          render={({ field }) => (
            <RadioGroup {...field}>
              <Radio value="孫悟空">孫悟空</Radio>
              <Radio value="ベジータ">ベジータ</Radio>
              <Radio value="フリーザ">フリーザ</Radio>
            </RadioGroup>
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
