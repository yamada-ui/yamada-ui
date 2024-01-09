import { faPoo } from "@fortawesome/free-solid-svg-icons"
import type { Meta, StoryFn } from "@storybook/react"
import { Icon } from "@yamada-ui/fontawesome"
import { Button, ColorInput, FormControl, VStack } from "@yamada-ui/react"
import { useState } from "react"
import type { SubmitHandler } from "react-hook-form"
import { Controller, useForm } from "react-hook-form"

type Story = StoryFn<typeof ColorInput>

const meta: Meta<typeof ColorInput> = {
  title: "Components / Forms / ColorInput",
  component: ColorInput,
}

export default meta

export const basic: Story = () => {
  return <ColorInput placeholder="#4387f4ff" />
}

export const withDefaultValue: Story = () => {
  return <ColorInput defaultValue="#4387f4ff" />
}

export const withFallbackValue: Story = () => {
  return <ColorInput fallbackValue="#00000000" />
}

export const withDefaultColor: Story = () => {
  return <ColorInput defaultColor="#4387f4ff" />
}

export const withSize: Story = () => {
  return (
    <>
      <ColorInput placeholder="extra small size" size="xs" />
      <ColorInput placeholder="small size" size="sm" />
      <ColorInput placeholder="medium size" size="md" />
      <ColorInput placeholder="large size" size="lg" />
    </>
  )
}

export const withColorPickerSize: Story = () => {
  return (
    <>
      <ColorInput placeholder="small size" colorPickerSize="sm" />
      <ColorInput placeholder="medium size" colorPickerSize="md" />
      <ColorInput placeholder="large size" colorPickerSize="lg" />
      <ColorInput placeholder="full size" colorPickerSize="full" />
    </>
  )
}

export const withVariant: Story = () => {
  return (
    <>
      <ColorInput variant="outline" placeholder="outline" />
      <ColorInput variant="filled" placeholder="filled" />
      <ColorInput variant="flushed" placeholder="flushed" />
      <ColorInput variant="unstyled" placeholder="unstyled" />
    </>
  )
}

export const withFormat: Story = () => {
  return <ColorInput defaultValue="hsla(240, 100%, 50%, 1)" format="hsla" />
}

export const withFormatInput: Story = () => {
  return (
    <ColorInput
      placeholder="#4387F4FF"
      formatInput={(value) => value.toUpperCase()}
    />
  )
}

export const withSwatches: Story = () => {
  return (
    <ColorInput
      swatchesLabel="Saved Colors"
      swatches={[
        "#2e2e2e",
        "#868e96",
        "#fa5252",
        "#e64980",
        "#be4bdb",
        "#7950f2",
        "#4c6ef5",
        "#228be6",
        "#15aabf",
        "#12b886",
        "#40c057",
        "#82c91e",
        "#fab005",
        "#fd7e14",
      ]}
    />
  )
}

export const withSwatchesColumns: Story = () => {
  return (
    <ColorInput
      swatchesLabel="Saved Colors"
      swatchesColumns={{ base: 8, md: 7 }}
      swatches={[
        "#2e2e2e",
        "#868e96",
        "#fa5252",
        "#e64980",
        "#be4bdb",
        "#7950f2",
        "#4c6ef5",
        "#228be6",
        "#15aabf",
        "#12b886",
        "#40c057",
        "#82c91e",
        "#fab005",
        "#fd7e14",
      ]}
    />
  )
}

export const withCloseOnSelectSwatch: Story = () => {
  return (
    <ColorInput
      swatchesLabel="Saved Colors"
      swatches={[
        "#2e2e2e",
        "#868e96",
        "#fa5252",
        "#e64980",
        "#be4bdb",
        "#7950f2",
        "#4c6ef5",
        "#228be6",
        "#15aabf",
        "#12b886",
        "#40c057",
        "#82c91e",
        "#fab005",
        "#fd7e14",
      ]}
      closeOnSelectSwatch
    />
  )
}

export const disabledAllowInput: Story = () => {
  return <ColorInput placeholder="#4387f4ff" allowInput={false} />
}

export const disabledPicker: Story = () => {
  return (
    <ColorInput
      withPicker={false}
      swatchesLabel="Saved Colors"
      swatches={[
        "#2e2e2e",
        "#868e96",
        "#fa5252",
        "#e64980",
        "#be4bdb",
        "#7950f2",
        "#4c6ef5",
        "#228be6",
        "#15aabf",
        "#12b886",
        "#40c057",
        "#82c91e",
        "#fab005",
        "#fd7e14",
      ]}
      closeOnSelectSwatch
    />
  )
}

export const disabledChannel: Story = () => {
  return <ColorInput withChannel={false} />
}

export const disabledSwatch: Story = () => {
  return <ColorInput withSwatch={false} />
}

export const disabledEyeDropper: Story = () => {
  return <ColorInput withEyeDropper={false} />
}

export const enabledColorPickerEyeDropper: Story = () => {
  return <ColorInput withColorPickerEyeDropper />
}

export const enabledResult: Story = () => {
  return <ColorInput withResult />
}

export const withBorderColor: Story = () => {
  return (
    <>
      <ColorInput placeholder="default border color" />

      <ColorInput
        focusBorderColor="green.500"
        placeholder="custom border color"
      />

      <ColorInput
        isInvalid
        errorBorderColor="orange.500"
        placeholder="custom border color"
      />
    </>
  )
}

export const withPlacement: Story = () => {
  return <ColorInput placeholder="#4387f4" placement="bottom-end" />
}

export const withOffset: Story = () => {
  return <ColorInput placeholder="#4387f4" offset={[16, 16]} />
}

export const withGutter: Story = () => {
  return <ColorInput placeholder="#4387f4" gutter={32} />
}

export const withDuration: Story = () => {
  return <ColorInput placeholder="#4387f4" duration={0.4} />
}

export const isDisabled: Story = () => {
  return (
    <>
      <ColorInput placeholder="#4387f4" isDisabled />

      <FormControl
        isDisabled
        label="Pick color"
        helperMessage="Please select your favorite color"
      >
        <ColorInput placeholder="#4387f4" />
      </FormControl>
    </>
  )
}

export const isReadonly: Story = () => {
  return (
    <>
      <ColorInput placeholder="#4387f4" isReadOnly />

      <FormControl
        isReadOnly
        label="Pick color"
        helperMessage="Please select your favorite color"
      >
        <ColorInput placeholder="#4387f4" />
      </FormControl>
    </>
  )
}

export const customEyeDropperIcon: Story = () => {
  return (
    <>
      <ColorInput
        eyeDropperProps={{
          color: "primary",
        }}
      />
      <ColorInput
        eyeDropperProps={{
          children: <Icon icon={faPoo} />,
        }}
      />
    </>
  )
}

export const customControl: Story = () => {
  const [value, onChange] = useState<string>("#4387f4ff")

  return <ColorInput value={value} onChange={onChange} />
}

export const reactHookForm: Story = () => {
  type Data = { colorInput: string }

  const defaultValues: Data = {
    colorInput: "#4387f4ff",
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
        isInvalid={!!errors.colorInput}
        label="Pick color"
        errorMessage={errors.colorInput?.message}
      >
        <Controller
          name="colorInput"
          control={control}
          render={({ field }) => <ColorInput {...field} />}
        />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>
  )
}
