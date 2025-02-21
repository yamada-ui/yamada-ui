import type { Meta, StoryFn } from "@storybook/react"
import type { SubmitHandler } from "react-hook-form"
import { COLOR_SCHEMES, toTitleCase } from "@yamada-ui/utils"
import { useRef } from "react"
import { useForm } from "react-hook-form"
import { Textarea } from "."
import { PropsTable } from "../../../storybook/components"
import { Button } from "../button"
import { Field } from "../field"
import { For } from "../for"
import { VStack } from "../stack"

type Story = StoryFn<typeof Textarea>

const meta: Meta<typeof Textarea> = {
  component: Textarea,
  title: "Components / Textarea",
}

export default meta

export const Basic: Story = () => {
  return <Textarea placeholder="basic" />
}

export const Size: Story = () => {
  return (
    <PropsTable
      variant="column"
      columns={["xs", "sm", "md", "lg", "xl"]}
      rows={["outline", "filled", "flushed", "unstyled"]}
    >
      {(column, row, key) => {
        return (
          <Textarea
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

export const Variant: Story = () => {
  return (
    <PropsTable
      variant="column"
      columns={["outline", "filled", "flushed", "unstyled"]}
      rows={COLOR_SCHEMES}
    >
      {(column, row, key) => {
        return (
          <Textarea
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

export const Resize: Story = () => {
  return (
    <For each={["block", "horizontal", "vertical", "none"] as const}>
      {(resize, index) => (
        <Textarea key={index} placeholder={resize} resize={resize} />
      )}
    </For>
  )
}

export const Autosize: Story = () => {
  return (
    <>
      <Textarea autosize placeholder="autosize" />
      <Textarea autosize minRows={4} placeholder="autosize, min rows 4" />
      <Textarea autosize maxRows={4} placeholder="autosize, max rows 4" />
      <Textarea placeholder="rows 4" rows={4} />
    </>
  )
}

export const BorderColor: Story = () => {
  return (
    <>
      <Textarea placeholder="default border color" />
      <Textarea
        focusBorderColor="green.500"
        placeholder="custom border color"
      />
      <Textarea
        errorBorderColor="orange.500"
        invalid
        placeholder="custom border color"
      />
    </>
  )
}

export const Disabled: Story = () => {
  return (
    <>
      <For each={["outline", "filled", "flushed", "unstyled"]}>
        {(variant, index) => (
          <Textarea
            key={index}
            variant={variant}
            disabled
            placeholder={variant}
          />
        )}
      </For>

      <Field.Root
        disabled
        helperMessage="We would like to get your feedback."
        label="Feedback"
      >
        <Textarea variant="outline" placeholder="your feedback" />
      </Field.Root>
    </>
  )
}

export const Readonly: Story = () => {
  return (
    <>
      <For each={["outline", "filled", "flushed", "unstyled"]}>
        {(variant, index) => (
          <Textarea
            key={index}
            variant={variant}
            placeholder={variant}
            readOnly
          />
        )}
      </For>

      <Field.Root
        helperMessage="We would like to get your feedback."
        label="Feedback"
        readOnly
      >
        <Textarea variant="outline" placeholder="your feedback" />
      </Field.Root>
    </>
  )
}

export const Invalid: Story = () => {
  return (
    <>
      <For each={["outline", "filled", "flushed", "unstyled"]}>
        {(variant, index) => (
          <Textarea
            key={index}
            variant={variant}
            invalid
            placeholder={variant}
          />
        )}
      </For>

      <Field.Root errorMessage="Feedback is required." invalid label="Feedback">
        <Textarea variant="outline" placeholder="your feedback" />
      </Field.Root>
    </>
  )
}

export const StylingPlaceholder: Story = () => {
  return (
    <>
      <Textarea placeholder="default placeholder" />
      <Textarea
        placeholder="custom placeholder"
        _placeholder={{ color: "gray.500", opacity: 1 }}
      />
      <Textarea
        color="green.500"
        placeholder="custom placeholder"
        _placeholder={{ color: "inherit" }}
      />
    </>
  )
}

export const UseResize: Story = () => {
  const resizeRef = useRef<() => void>(null)
  const onResize = () => {
    resizeRef.current?.()
  }

  return (
    <VStack>
      <Textarea placeholder="use resize" resizeRef={resizeRef} />

      <Button alignSelf="flex-end" onClick={onResize}>
        Resize
      </Button>
    </VStack>
  )
}

export const ReactHookForm: Story = () => {
  interface Data {
    textarea: string
  }

  const {
    formState: { errors },
    handleSubmit,
    register,
    watch,
  } = useForm<Data>()

  const onSubmit: SubmitHandler<Data> = (data) => console.log("submit:", data)

  console.log("watch:", watch())

  return (
    <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <Field.Root
        errorMessage={errors.textarea?.message}
        invalid={!!errors.textarea}
        label="Feedback"
      >
        <Textarea
          placeholder="your feedback"
          {...register("textarea", {
            required: { message: "This is required.", value: true },
          })}
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
    textarea: string
  }

  const defaultValues: Data = {
    textarea: "孫悟空",
  }

  const {
    formState: { errors },
    handleSubmit,
    register,
    watch,
  } = useForm<Data>({ defaultValues })

  const onSubmit: SubmitHandler<Data> = (data) => console.log("submit:", data)

  console.log("watch:", watch())

  return (
    <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <Field.Root
        errorMessage={errors.textarea?.message}
        invalid={!!errors.textarea}
        label="Feedback"
      >
        <Textarea
          placeholder="your feedback"
          {...register("textarea", {
            required: { message: "This is required.", value: true },
          })}
        />
      </Field.Root>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>
  )
}
