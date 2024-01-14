import type { Meta, StoryFn } from "@storybook/react"
import {
  Button,
  ColorPicker,
  FormControl,
  Text,
  VStack,
  Wrap,
} from "@yamada-ui/react"
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
  return <ColorPicker />
}

export const withSize: Story = () => {
  return (
    <>
      <ColorPicker size="sm" />
      <ColorPicker size="md" />
      <ColorPicker size="lg" />
      <ColorPicker size="full" />
    </>
  )
}

export const withDefaultValue: Story = () => {
  return <ColorPicker defaultValue="#ff0000ff" />
}

export const withFormat: Story = () => {
  return <ColorPicker defaultValue="hsla(240, 100%, 50%, 1)" format="hsla" />
}

export const withStep: Story = () => {
  return (
    <ColorPicker
      saturationSliderProps={{ step: 0.1 }}
      hueSliderProps={{ step: 10 }}
      alphaSliderProps={{ step: 0.1 }}
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

export const disabledChannel: Story = () => {
  return <ColorPicker withChannel={false} />
}

export const disabledEyeDropper: Story = () => {
  return <ColorPicker withEyeDropper={false} />
}

export const disabledResult: Story = () => {
  return <ColorPicker withResult={false} />
}

export const isDisabled: Story = () => {
  return (
    <>
      <ColorPicker
        isDisabled
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

      <FormControl
        isDisabled
        label="Pick color"
        helperMessage="Please select your favorite color"
      >
        <ColorPicker />
      </FormControl>
    </>
  )
}

export const isReadonly: Story = () => {
  return (
    <>
      <ColorPicker
        isReadOnly
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

      <FormControl
        isReadOnly
        label="Pick color"
        helperMessage="Please select your favorite color"
      >
        <ColorPicker />
      </FormControl>
    </>
  )
}

export const customControl: Story = () => {
  const [value, onChange] = useState<string>("#4387f4ff")

  return (
    <>
      <Wrap gap="md">
        <Button colorScheme="primary" onClick={() => onChange("#4387f4ff")}>
          Change "#4387f4ff"
        </Button>

        <Button colorScheme="secondary" onClick={() => onChange("#895af6ff")}>
          Change "#895af6ff"
        </Button>

        <Button colorScheme="success" onClick={() => onChange("#3cc360ff")}>
          Change "#3cc360ff"
        </Button>
      </Wrap>

      <Text>Value: {value}</Text>
      <ColorPicker value={value} onChange={onChange} />
    </>
  )
}

export const onChangeStart: Story = () => {
  const [value, onChange] = useState<string>("#ff0000ff")
  const [startValue, onChangeStart] = useState<string>("#ff0000ff")

  return (
    <>
      <Text>
        Value: {value}, Start Value: {startValue}
      </Text>
      <ColorPicker
        value={value}
        onChange={onChange}
        onChangeStart={onChangeStart}
      />
    </>
  )
}

export const onChangeEnd: Story = () => {
  const [value, onChange] = useState<string>("#ff0000ff")
  const [endValue, onChangeEnd] = useState<string>("#ff0000ff")

  return (
    <>
      <Text>
        Value: {value}, End Value: {endValue}
      </Text>
      <ColorPicker
        value={value}
        onChange={onChange}
        onChangeEnd={onChangeEnd}
      />
    </>
  )
}

export const reactHookForm: Story = () => {
  type Data = { colorPicker: string }

  const defaultValues: Data = {
    colorPicker: "#4387f4ff",
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
        isInvalid={!!errors.colorPicker}
        label="Pick color"
        errorMessage={errors.colorPicker?.message}
      >
        <Controller
          name="colorPicker"
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
