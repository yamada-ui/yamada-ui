import type { Meta, StoryFn } from "@storybook/react"
import type { SubmitHandler } from "react-hook-form"
import { useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { Button } from "../button"
import { FormControl } from "../form-control"
import { GhostIcon } from "../icon"
import { VStack } from "../stack"
import { ColorPicker } from "./"

type Story = StoryFn<typeof ColorPicker>

const meta: Meta<typeof ColorPicker> = {
  component: ColorPicker,
  title: "Components / ColorPicker",
}

const defaultPlaceholder = "#4387f4"

export default meta

export const Basic: Story = () => {
  return <ColorPicker placeholder={defaultPlaceholder} />
}

export const WithDefaultValue: Story = () => {
  return (
    <ColorPicker defaultValue="#4387f4ff" placeholder={defaultPlaceholder} />
  )
}

export const WithFallbackValue: Story = () => {
  return (
    <ColorPicker fallbackValue="#000000" placeholder={defaultPlaceholder} />
  )
}

export const WithDefaultColor: Story = () => {
  return (
    <ColorPicker defaultColor="#4387f4ff" placeholder={defaultPlaceholder} />
  )
}

export const WithChildren: Story = () => {
  return (
    <>
      <ColorPicker placeholder={defaultPlaceholder}>
        <Button>Submit</Button>
      </ColorPicker>

      <ColorPicker placeholder={defaultPlaceholder}>
        {({ value, onClose }) => (
          <Button onClick={onClose}>Submit {value}</Button>
        )}
      </ColorPicker>
    </>
  )
}

export const WithSize: Story = () => {
  return (
    <>
      <ColorPicker size="xs" placeholder="extra small size" />
      <ColorPicker size="sm" placeholder="small size" />
      <ColorPicker size="md" placeholder="medium size" />
      <ColorPicker size="lg" placeholder="large size" />
    </>
  )
}

export const WithColorSelectorSize: Story = () => {
  return (
    <>
      <ColorPicker colorSelectorSize="sm" placeholder="small size" />
      <ColorPicker colorSelectorSize="md" placeholder="medium size" />
      <ColorPicker colorSelectorSize="lg" placeholder="large size" />
      <ColorPicker colorSelectorSize="full" placeholder="full size" />
    </>
  )
}

export const WithVariant: Story = () => {
  return (
    <>
      <ColorPicker variant="outline" placeholder="outline" />
      <ColorPicker variant="filled" placeholder="filled" />
      <ColorPicker variant="flushed" placeholder="flushed" />
      <ColorPicker variant="unstyled" placeholder="unstyled" />
    </>
  )
}

export const WithFormat: Story = () => {
  return (
    <ColorPicker
      defaultValue="hsla(240, 100%, 50%, 1)"
      format="hsla"
      placeholder="hsla(240, 100%, 50%, 1)"
    />
  )
}

export const WithFormatInput: Story = () => {
  return (
    <ColorPicker
      formatInput={(value) => value.toUpperCase()}
      placeholder="#4387F4FF"
    />
  )
}

export const WithSwatches: Story = () => {
  return (
    <ColorPicker
      placeholder={defaultPlaceholder}
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
      swatchesLabel="Saved Colors"
    />
  )
}

export const WithSwatchesColumns: Story = () => {
  return (
    <ColorPicker
      placeholder={defaultPlaceholder}
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
      swatchesColumns={{ base: 8, md: 7 }}
      swatchesLabel="Saved Colors"
    />
  )
}

export const WithCloseOnSelectSwatch: Story = () => {
  return (
    <ColorPicker
      closeOnSelectSwatch
      placeholder={defaultPlaceholder}
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
      swatchesLabel="Saved Colors"
    />
  )
}

export const DisabledAllowInput: Story = () => {
  return <ColorPicker allowInput={false} placeholder={defaultPlaceholder} />
}

export const DisabledPicker: Story = () => {
  return (
    <ColorPicker
      closeOnSelectSwatch
      placeholder={defaultPlaceholder}
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
      swatchesLabel="Saved Colors"
      withPicker={false}
    />
  )
}

export const DisabledChannel: Story = () => {
  return <ColorPicker placeholder={defaultPlaceholder} withChannel={false} />
}

export const DisabledSwatch: Story = () => {
  return <ColorPicker placeholder={defaultPlaceholder} withSwatch={false} />
}

export const DisabledEyeDropper: Story = () => {
  return <ColorPicker placeholder={defaultPlaceholder} withEyeDropper={false} />
}

export const EnabledColorPickerEyeDropper: Story = () => {
  return (
    <ColorPicker placeholder={defaultPlaceholder} withColorSelectorEyeDropper />
  )
}

export const EnabledResult: Story = () => {
  return <ColorPicker placeholder={defaultPlaceholder} withResult />
}

export const WithBorderColor: Story = () => {
  return (
    <>
      <ColorPicker placeholder="default border color" />

      <ColorPicker
        focusBorderColor="green.500"
        placeholder="custom border color"
      />

      <ColorPicker
        errorBorderColor="orange.500"
        invalid
        placeholder="custom border color"
      />
    </>
  )
}

export const WithPlacement: Story = () => {
  return <ColorPicker placeholder={defaultPlaceholder} placement="bottom-end" />
}

export const WithOffset: Story = () => {
  return <ColorPicker offset={[16, 16]} placeholder={defaultPlaceholder} />
}

export const WithGutter: Story = () => {
  return <ColorPicker gutter={32} placeholder={defaultPlaceholder} />
}

export const WithDuration: Story = () => {
  return <ColorPicker duration={0.4} placeholder={defaultPlaceholder} />
}

export const Disabled: Story = () => {
  return (
    <>
      <ColorPicker disabled placeholder={defaultPlaceholder} />

      <FormControl
        disabled
        helperMessage="Please select your favorite color"
        label="Pick color"
      >
        <ColorPicker placeholder={defaultPlaceholder} />
      </FormControl>
    </>
  )
}

export const Readonly: Story = () => {
  return (
    <>
      <ColorPicker placeholder={defaultPlaceholder} readOnly />

      <FormControl
        helperMessage="Please select your favorite color"
        label="Pick color"
        readOnly
      >
        <ColorPicker placeholder={defaultPlaceholder} />
      </FormControl>
    </>
  )
}

export const CustomEyeDropperIcon: Story = () => {
  return (
    <>
      <ColorPicker
        placeholder={defaultPlaceholder}
        eyeDropperProps={{
          color: "primary",
        }}
      />
      <ColorPicker
        placeholder={defaultPlaceholder}
        eyeDropperProps={{
          children: <GhostIcon fontSize="lg" />,
        }}
      />
    </>
  )
}

export const CustomControl: Story = () => {
  const [value, onChange] = useState<string>("#4387f4ff")

  return (
    <ColorPicker
      placeholder={defaultPlaceholder}
      value={value}
      onChange={onChange}
    />
  )
}

export const ReactHookForm: Story = () => {
  interface Data {
    colorInput: string
  }

  const defaultValues: Data = {
    colorInput: "#4387f4ff",
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
      <FormControl
        errorMessage={errors.colorInput?.message}
        invalid={!!errors.colorInput}
        label="Pick color"
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
