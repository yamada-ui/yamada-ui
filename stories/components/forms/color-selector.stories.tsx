import type { Meta, StoryFn } from "@storybook/react"
import type { SubmitHandler } from "react-hook-form"
import {
  Button,
  ColorSelector,
  Fieldset,
  Text,
  VStack,
  Wrap,
} from "@yamada-ui/react"
import { useState } from "react"
import { Controller, useForm } from "react-hook-form"

type Story = StoryFn<typeof ColorSelector>

const meta: Meta<typeof ColorSelector> = {
  component: ColorSelector,
  title: "Components / Forms / ColorSelector",
}

export default meta

export const basic: Story = () => {
  return <ColorSelector />
}

export const withSize: Story = () => {
  return (
    <>
      <ColorSelector size="sm" />
      <ColorSelector size="md" />
      <ColorSelector size="lg" />
      <ColorSelector size="full" />
    </>
  )
}

export const withChildren: Story = () => {
  return (
    <>
      <ColorSelector>
        <Button>Submit</Button>
      </ColorSelector>

      <ColorSelector>
        {({ value }) => <Button>Submit {value}</Button>}
      </ColorSelector>
    </>
  )
}

export const withDefaultValue: Story = () => {
  return <ColorSelector defaultValue="#ff0000ff" />
}

export const withFormat: Story = () => {
  return <ColorSelector defaultValue="hsla(240, 100%, 50%, 1)" format="hsla" />
}

export const withStep: Story = () => {
  return (
    <ColorSelector
      alphaSliderProps={{ step: 0.1 }}
      hueSliderProps={{ step: 10 }}
      saturationSliderProps={{ step: 0.1 }}
    />
  )
}

export const withSwatches: Story = () => {
  return (
    <ColorSelector
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

export const withSwatchesColumns: Story = () => {
  return (
    <ColorSelector
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

export const disabledChannel: Story = () => {
  return <ColorSelector withChannel={false} />
}

export const disabledEyeDropper: Story = () => {
  return <ColorSelector withEyeDropper={false} />
}

export const disabledResult: Story = () => {
  return <ColorSelector withResult={false} />
}

export const disabled: Story = () => {
  return (
    <>
      <ColorSelector
        disabled
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

      <Fieldset
        disabled
        helperMessage="Please select your favorite color"
        legend="Pick color"
      >
        <ColorSelector />
      </Fieldset>
    </>
  )
}

export const readOnly: Story = () => {
  return (
    <>
      <ColorSelector
        readOnly
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

      <Fieldset
        helperMessage="Please select your favorite color"
        legend="Pick color"
        readOnly
      >
        <ColorSelector />
      </Fieldset>
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
      <ColorSelector value={value} onChange={onChange} />
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
      <ColorSelector
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
      <ColorSelector
        value={value}
        onChange={onChange}
        onChangeEnd={onChangeEnd}
      />
    </>
  )
}

export const reactHookForm: Story = () => {
  interface Data {
    colorPicker: string
  }

  const defaultValues: Data = {
    colorPicker: "#4387f4ff",
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
        errorMessage={errors.colorPicker?.message}
        invalid={!!errors.colorPicker}
        legend="Pick color"
      >
        <Controller
          name="colorPicker"
          control={control}
          render={({ field }) => <ColorSelector {...field} />}
        />
      </Fieldset>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>
  )
}
