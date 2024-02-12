import { faPoo } from "@fortawesome/free-solid-svg-icons"
import type { Meta, StoryFn } from "@storybook/react"
import { Icon } from "@yamada-ui/fontawesome"
import { Button, ColorPicker, FormControl, VStack } from "@yamada-ui/react"
import { useState } from "react"
import type { SubmitHandler } from "react-hook-form"
import { Controller, useForm } from "react-hook-form"

type Story = StoryFn<typeof ColorPicker>

const meta: Meta<typeof ColorPicker> = {
  title: "Components / Forms / ColorPicker",
  component: ColorPicker,
}

export default meta

export const basic: Story = () => {
  return <ColorPicker placeholder="#4387f4" />
}

export const withDefaultValue: Story = () => {
  return <ColorPicker defaultValue="#4387f4ff" />
}

export const withFallbackValue: Story = () => {
  return <ColorPicker fallbackValue="#000000" />
}

export const withDefaultColor: Story = () => {
  return <ColorPicker defaultColor="#4387f4ff" />
}

export const withSize: Story = () => {
  return (
    <>
      <ColorPicker placeholder="extra small size" size="xs" />
      <ColorPicker placeholder="small size" size="sm" />
      <ColorPicker placeholder="medium size" size="md" />
      <ColorPicker placeholder="large size" size="lg" />
    </>
  )
}

export const withColorSelectorSize: Story = () => {
  return (
    <>
      <ColorPicker placeholder="small size" colorSelectorSize="sm" />
      <ColorPicker placeholder="medium size" colorSelectorSize="md" />
      <ColorPicker placeholder="large size" colorSelectorSize="lg" />
      <ColorPicker placeholder="full size" colorSelectorSize="full" />
    </>
  )
}

export const withVariant: Story = () => {
  return (
    <>
      <ColorPicker variant="outline" placeholder="outline" />
      <ColorPicker variant="filled" placeholder="filled" />
      <ColorPicker variant="flushed" placeholder="flushed" />
      <ColorPicker variant="unstyled" placeholder="unstyled" />
    </>
  )
}

export const withFormat: Story = () => {
  return <ColorPicker defaultValue="hsla(240, 100%, 50%, 1)" format="hsla" />
}

export const withFormatInput: Story = () => {
  return (
    <ColorPicker
      placeholder="#4387F4FF"
      formatInput={(value) => value.toUpperCase()}
    />
  )
}

export const withSwatches: Story = () => {
  return (
    <ColorPicker
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
    <ColorPicker
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
    <ColorPicker
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
  return <ColorPicker placeholder="#4387f4ff" allowInput={false} />
}

export const disabledPicker: Story = () => {
  return (
    <ColorPicker
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
  return <ColorPicker withChannel={false} />
}

export const disabledSwatch: Story = () => {
  return <ColorPicker withSwatch={false} />
}

export const disabledEyeDropper: Story = () => {
  return <ColorPicker withEyeDropper={false} />
}

export const enabledColorPickerEyeDropper: Story = () => {
  return <ColorPicker withColorSelectorEyeDropper />
}

export const enabledResult: Story = () => {
  return <ColorPicker withResult />
}

export const withBorderColor: Story = () => {
  return (
    <>
      <ColorPicker placeholder="default border color" />

      <ColorPicker
        focusBorderColor="green.500"
        placeholder="custom border color"
      />

      <ColorPicker
        isInvalid
        errorBorderColor="orange.500"
        placeholder="custom border color"
      />
    </>
  )
}

export const withPlacement: Story = () => {
  return <ColorPicker placeholder="#4387f4" placement="bottom-end" />
}

export const withOffset: Story = () => {
  return <ColorPicker placeholder="#4387f4" offset={[16, 16]} />
}

export const withGutter: Story = () => {
  return <ColorPicker placeholder="#4387f4" gutter={32} />
}

export const withDuration: Story = () => {
  return <ColorPicker placeholder="#4387f4" duration={0.4} />
}

export const isDisabled: Story = () => {
  return (
    <>
      <ColorPicker placeholder="#4387f4" isDisabled />

      <FormControl
        isDisabled
        label="Pick color"
        helperMessage="Please select your favorite color"
      >
        <ColorPicker placeholder="#4387f4" />
      </FormControl>
    </>
  )
}

export const isReadonly: Story = () => {
  return (
    <>
      <ColorPicker placeholder="#4387f4" isReadOnly />

      <FormControl
        isReadOnly
        label="Pick color"
        helperMessage="Please select your favorite color"
      >
        <ColorPicker placeholder="#4387f4" />
      </FormControl>
    </>
  )
}

export const customEyeDropperIcon: Story = () => {
  return (
    <>
      <ColorPicker
        eyeDropperProps={{
          color: "primary",
        }}
      />
      <ColorPicker
        eyeDropperProps={{
          children: <Icon icon={faPoo} />,
        }}
      />
    </>
  )
}

export const customControl: Story = () => {
  const [value, onChange] = useState<string>("#4387f4ff")

  return <ColorPicker value={value} onChange={onChange} />
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
          render={({ field }) => <ColorPicker {...field} />}
        />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>
  )
}
