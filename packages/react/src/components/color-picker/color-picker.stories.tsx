import type { Meta, StoryFn } from "@storybook/react-vite"
import type { SubmitHandler } from "react-hook-form"
import { PropsTable } from "#storybook"
import { useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { COLOR_SCHEMES, toTitleCase } from "../../utils"
import { Box } from "../box"
import { Button } from "../button"
import { Field } from "../field"
import { For } from "../for"
import { PaletteIcon } from "../icon"
import { InputGroup } from "../input"
import { VStack } from "../stack"
import { ColorPicker } from "./color-picker"

type Story = StoryFn<typeof ColorPicker>

const meta: Meta<typeof ColorPicker> = {
  component: ColorPicker,
  title: "Components / ColorPicker",
}

export default meta

export const Basic: Story = () => {
  return <ColorPicker placeholder="#4387f4" />
}

export const Variant: Story = () => {
  return (
    <PropsTable
      variant="stack"
      columns={["outline", "filled", "flushed"]}
      rows={COLOR_SCHEMES}
    >
      {(column, row, key) => {
        return (
          <ColorPicker
            key={key}
            colorScheme={row}
            variant={column}
            placeholder={toTitleCase(column)}
          />
        )
      }}
    </PropsTable>
  )
}

export const Size: Story = () => {
  return (
    <PropsTable
      variant="stack"
      columns={["xs", "sm", "md", "lg", "xl"]}
      rows={["outline", "filled", "flushed"]}
    >
      {(column, row, key) => {
        return (
          <ColorPicker
            key={key}
            size={column}
            variant={row}
            placeholder={`Size (${column})`}
          />
        )
      }}
    </PropsTable>
  )
}

export const DefaultValue: Story = () => {
  return <ColorPicker defaultValue="#4387f4" placeholder="#4387f4" />
}

export const Alpha: Story = () => {
  return <ColorPicker defaultValue="#775999A0" placeholder="#775999A0" />
}

export const Format: Story = () => {
  return (
    <PropsTable
      variant="stack"
      rows={["hex", "hexa", "rgb", "rgba", "hsl", "hsla"]}
    >
      {(_, row, key) => (
        <ColorPicker key={key} format={row} placeholder={`Format (${row})`} />
      )}
    </PropsTable>
  )
}

export const Pattern: Story = () => {
  return <ColorPicker pattern={/[^a-fA-F0-9#]/g} placeholder="#4387f4" />
}

export const FormatInput: Story = () => {
  return (
    <ColorPicker
      formatInput={(value) => value.toUpperCase()}
      pattern={/[^a-fA-F0-9#]/g}
      placeholder="#4387F4"
    />
  )
}

export const ColorSwatches: Story = () => {
  return (
    <ColorPicker
      colorSwatches={[
        "hsl(0, 100%, 50%)",
        "hsl(45, 100%, 50%)",
        "hsl(90, 100%, 50%)",
        "hsl(135, 100%, 50%)",
        "hsl(180, 100%, 50%)",
        "hsl(225, 100%, 50%)",
        "hsl(270, 100%, 50%)",
        "hsl(315, 100%, 50%)",
      ]}
      colorSwatchGroupLabel="Pick a color"
      placeholder="#4387f4"
    />
  )
}

export const ColorSwatchGroupColumns: Story = () => {
  return (
    <ColorPicker
      colorSwatches={[
        "hsl(0, 100%, 50%)",
        "hsl(36, 100%, 50%)",
        "hsl(72, 100%, 50%)",
        "hsl(108, 100%, 50%)",
        "hsl(144, 100%, 50%)",
        "hsl(180, 100%, 50%)",
        "hsl(216, 100%, 50%)",
        "hsl(252, 100%, 50%)",
        "hsl(288, 100%, 50%)",
        "hsl(324, 100%, 50%)",
      ]}
      colorSwatchGroupColumns={10}
      colorSwatchGroupLabel="Pick a color"
      placeholder="#4387f4"
    />
  )
}

export const Offset: Story = () => {
  return <ColorPicker offset={[16, 16]} placeholder="#4387f4" />
}

export const Gutter: Story = () => {
  return <ColorPicker gutter={16} placeholder="#4387f4" />
}

export const AnimationScheme: Story = () => {
  return <ColorPicker animationScheme="inline-start" placeholder="#4387f4" />
}

export const Placement: Story = () => {
  return (
    <ColorPicker
      animationScheme="inline-start"
      placeholder="#4387f4"
      placement="center-end"
      rootProps={{ w: "xs" }}
    />
  )
}

export const BlockScrollOnMount: Story = () => {
  return (
    <Box minH="200dvh" w="full">
      <ColorPicker blockScrollOnMount placeholder="#4387f4" />
    </Box>
  )
}

export const OpenOnChange: Story = () => {
  return (
    <ColorPicker
      openOnChange={(ev) => ev.target.value.length > 1}
      openOnFocus={false}
      placeholder="#4387f4"
    />
  )
}

export const CloseOnChange: Story = () => {
  return (
    <ColorPicker
      closeOnChange={(ev) => !ev.target.value.length}
      openOnFocus={false}
      placeholder="#4387f4"
    />
  )
}

export const CloseOnScroll: Story = () => {
  return (
    <Box minH="200dvh" w="full">
      <ColorPicker closeOnScroll placeholder="#4387f4" />
    </Box>
  )
}

export const DisabledOpenOnFocus: Story = () => {
  return <ColorPicker openOnFocus={false} placeholder="#4387f4" />
}

export const DisabledOpenOnClick: Story = () => {
  return <ColorPicker openOnClick={false} placeholder="#4387f4" />
}

export const DisabledCloseOnBlur: Story = () => {
  return <ColorPicker closeOnBlur={false} placeholder="#4387f4" />
}

export const DisabledCloseOnEsc: Story = () => {
  return <ColorPicker closeOnEsc={false} placeholder="#4387f4" />
}

export const DisabledEyeDropper: Story = () => {
  return <ColorPicker placeholder="#4387f4" withEyeDropper={false} />
}

export const DisallowInput: Story = () => {
  return <ColorPicker allowInput={false} placeholder="#4387f4" />
}

export const HiddenColorSwatch: Story = () => {
  return <ColorPicker placeholder="#4387f4" withColorSwatch={false} />
}

export const Shape: Story = () => {
  return (
    <PropsTable variant="stack" rows={["rounded", "circle", "square"]}>
      {(_, row, key) => (
        <ColorPicker
          key={key}
          placeholder="#4387f4"
          selectorProps={{ shape: row }}
        />
      )}
    </PropsTable>
  )
}

export const Disabled: Story = () => {
  return (
    <>
      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => (
          <ColorPicker
            key={index}
            variant={variant}
            disabled
            placeholder={toTitleCase(variant)}
          />
        )}
      </For>

      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => (
          <InputGroup.Root key={index} variant={variant} disabled>
            <InputGroup.Addon>
              <PaletteIcon />
            </InputGroup.Addon>
            <ColorPicker placeholder={toTitleCase(variant)} />
          </InputGroup.Root>
        )}
      </For>

      <Field.Root disabled label="What is your favorite color?">
        <ColorPicker placeholder="#4387f4" />
      </Field.Root>
    </>
  )
}

export const ReadOnly: Story = () => {
  return (
    <>
      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => (
          <ColorPicker
            key={index}
            variant={variant}
            placeholder={toTitleCase(variant)}
            readOnly
          />
        )}
      </For>

      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => (
          <InputGroup.Root key={index} variant={variant} readOnly>
            <InputGroup.Addon>
              <PaletteIcon />
            </InputGroup.Addon>
            <ColorPicker placeholder={toTitleCase(variant)} />
          </InputGroup.Root>
        )}
      </For>

      <Field.Root label="What is your favorite color?" readOnly>
        <ColorPicker placeholder="#4387f4" />
      </Field.Root>
    </>
  )
}

export const Invalid: Story = () => {
  return (
    <>
      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => (
          <ColorPicker
            key={index}
            variant={variant}
            invalid
            placeholder={toTitleCase(variant)}
          />
        )}
      </For>

      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => (
          <InputGroup.Root key={index} variant={variant} invalid>
            <InputGroup.Addon>
              <PaletteIcon />
            </InputGroup.Addon>
            <ColorPicker placeholder={toTitleCase(variant)} />
          </InputGroup.Root>
        )}
      </For>

      <Field.Root
        errorMessage="This is required."
        invalid
        label="What is your favorite color?"
      >
        <ColorPicker placeholder="#4387f4" />
      </Field.Root>
    </>
  )
}

export const Addon: Story = () => {
  return (
    <For each={["outline", "filled", "flushed"] as const}>
      {(variant, index) => (
        <InputGroup.Root key={index} variant={variant}>
          <InputGroup.Addon>
            <PaletteIcon />
          </InputGroup.Addon>
          <ColorPicker placeholder={toTitleCase(variant)} />
        </InputGroup.Root>
      )}
    </For>
  )
}

export const BorderColor: Story = () => {
  return (
    <>
      <ColorPicker placeholder="Default border color" />

      <ColorPicker
        focusBorderColor="green.500"
        placeholder="Custom border color"
      />

      <ColorPicker
        errorBorderColor="orange.500"
        invalid
        placeholder="Custom border color"
      />

      <InputGroup.Root errorBorderColor="orange.500" invalid>
        <InputGroup.Addon>
          <PaletteIcon />
        </InputGroup.Addon>
        <ColorPicker placeholder="Custom border color" />
      </InputGroup.Root>
    </>
  )
}

export const CustomControl: Story = () => {
  const [value, setValue] = useState("#4387f4")

  return (
    <ColorPicker aria-label="Color picker" value={value} onChange={setValue} />
  )
}

export const ReactHookForm: Story = () => {
  interface Data {
    colorPicker: string
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
      <Field.Root
        errorMessage={errors.colorPicker?.message}
        invalid={!!errors.colorPicker}
        label="What is your favorite color?"
      >
        <Controller
          name="colorPicker"
          control={control}
          render={({ field }) => <ColorPicker {...field} />}
          rules={{
            required: { message: "This is required.", value: true },
          }}
        />
      </Field.Root>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>
  )
}

export const ReactHookFormDefaultValue: Story = () => {
  interface Data {
    colorPicker: string
  }

  const defaultValues: Data = {
    colorPicker: "#4387f4",
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
      <Field.Root
        errorMessage={errors.colorPicker?.message}
        invalid={!!errors.colorPicker}
        label="What is your favorite color?"
      >
        <Controller
          name="colorPicker"
          control={control}
          render={({ field }) => <ColorPicker {...field} />}
          rules={{
            required: { message: "This is required.", value: true },
          }}
        />
      </Field.Root>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>
  )
}
