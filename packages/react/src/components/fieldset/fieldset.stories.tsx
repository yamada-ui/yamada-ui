import type { Meta, StoryFn } from "@storybook/react"
import { Fieldset } from "."
import { Field } from "../field"
import { For } from "../for"
import { Input } from "../input"

type Story = StoryFn<typeof Fieldset.Root>

const meta: Meta<typeof Fieldset.Root> = {
  component: Fieldset.Root,
  title: "Components / Fieldset",
}

export default meta

export const Basic: Story = () => {
  return (
    <Fieldset.Root legend="Contact details">
      <Field.Root label="Name">
        <Input type="text" placeholder="Your name" />
      </Field.Root>

      <Field.Root label="Email address">
        <Input type="email" placeholder="Your email address" />
      </Field.Root>
    </Fieldset.Root>
  )
}

export const Variant: Story = () => {
  return (
    <For each={["plain", "elevated", "outline", "panel"]}>
      {(variant, index) => (
        <Fieldset.Root
          key={index}
          variant={variant}
          helperMessage="Please provide your contact details below."
          legend="Contact details"
        >
          <Field.Root label="Name">
            <Input type="text" placeholder="Your name" />
          </Field.Root>

          <Field.Root label="Email address">
            <Input type="email" placeholder="Your email address" />
          </Field.Root>
        </Fieldset.Root>
      )}
    </For>
  )
}

export const Size: Story = () => {
  return (
    <For each={["sm", "md", "lg"]}>
      {(size, index) => (
        <Fieldset.Root
          key={index}
          size={size}
          variant="panel"
          helperMessage="Please provide your contact details below."
          legend="Contact details"
        >
          <Field.Root label="Name">
            <Input type="text" placeholder="Your name" />
          </Field.Root>

          <Field.Root label="Email address">
            <Input type="email" placeholder="Your email address" />
          </Field.Root>
        </Fieldset.Root>
      )}
    </For>
  )
}

export const HelperMessage: Story = () => {
  return (
    <Fieldset.Root
      helperMessage="Please provide your contact details below."
      legend="Contact details"
    >
      <Field.Root label="Name">
        <Input type="text" placeholder="Your name" />
      </Field.Root>

      <Field.Root label="Email address">
        <Input type="email" placeholder="Your email address" />
      </Field.Root>
    </Fieldset.Root>
  )
}

export const ErrorMessage: Story = () => {
  return (
    <Fieldset.Root
      errorMessage="Some fields are invalid. Please check them."
      helperMessage="Please provide your contact details below."
      invalid
      legend="Contact details"
    >
      <Field.Root label="Name">
        <Input type="text" placeholder="Your name" />
      </Field.Root>

      <Field.Root label="Email address">
        <Input type="email" placeholder="Your email address" />
      </Field.Root>
    </Fieldset.Root>
  )
}

export const Disabled: Story = () => {
  return (
    <Fieldset.Root
      disabled
      helperMessage="Please provide your contact details below."
      legend="Contact details"
    >
      <Field.Root label="Name">
        <Input type="text" placeholder="Your name" />
      </Field.Root>

      <Field.Root label="Email address">
        <Input type="email" placeholder="Your email address" />
      </Field.Root>
    </Fieldset.Root>
  )
}

export const Invalid: Story = () => {
  return (
    <Fieldset.Root
      errorMessage="Some fields are invalid. Please check them."
      helperMessage="Please provide your contact details below."
      invalid
      legend="Contact details"
    >
      <Field.Root label="Name">
        <Input type="text" placeholder="Your name" />
      </Field.Root>

      <Field.Root label="Email address">
        <Input type="email" placeholder="Your email address" />
      </Field.Root>
    </Fieldset.Root>
  )
}

export const CustomLegend: Story = () => {
  return (
    <Fieldset.Root helperMessage="Please provide your contact details below.">
      <Fieldset.Legend color="blue">Contact details</Fieldset.Legend>

      <Field.Root label="Name">
        <Input type="text" placeholder="Your name" />
      </Field.Root>

      <Field.Root label="Email address">
        <Input type="email" placeholder="Your email address" />
      </Field.Root>
    </Fieldset.Root>
  )
}

export const CustomHeader: Story = () => {
  return (
    <Fieldset.Root>
      <Fieldset.Header borderBottomWidth="1px" pb="md">
        <Fieldset.Legend>Contact details</Fieldset.Legend>
        <Fieldset.HelperMessage>
          Please provide your contact details below.
        </Fieldset.HelperMessage>
      </Fieldset.Header>

      <Field.Root label="Name">
        <Input type="text" placeholder="Your name" />
      </Field.Root>

      <Field.Root label="Email address">
        <Input type="email" placeholder="Your email address" />
      </Field.Root>
    </Fieldset.Root>
  )
}

export const CustomContent: Story = () => {
  return (
    <Fieldset.Root
      errorMessage="Some fields are invalid. Please check them."
      helperMessage="Please provide your contact details below."
      invalid
      legend="Contact details"
    >
      <Fieldset.Content borderWidth="1px" p="md" rounded="l2">
        <Field.Root label="Name">
          <Input type="text" placeholder="Your name" />
        </Field.Root>

        <Field.Root label="Email address">
          <Input type="email" placeholder="Your email address" />
        </Field.Root>
      </Fieldset.Content>
    </Fieldset.Root>
  )
}

export const CustomHelperMessage: Story = () => {
  return (
    <Fieldset.Root legend="Contact details">
      <Fieldset.HelperMessage color="red">
        Please provide your contact details below.
      </Fieldset.HelperMessage>

      <Field.Root label="Name">
        <Input type="text" placeholder="Your name" />
      </Field.Root>

      <Field.Root label="Email address">
        <Input type="email" placeholder="Your email address" />
      </Field.Root>
    </Fieldset.Root>
  )
}

export const CustomErrorMessage: Story = () => {
  return (
    <Fieldset.Root
      helperMessage="Please provide your contact details below."
      invalid
      legend="Contact details"
    >
      <Field.Root label="Name">
        <Input type="text" placeholder="Your name" />
      </Field.Root>

      <Field.Root label="Email address">
        <Input type="email" placeholder="Your email address" />
      </Field.Root>

      <Fieldset.ErrorMessage color="green">
        Some fields are invalid. Please check them.
      </Fieldset.ErrorMessage>
    </Fieldset.Root>
  )
}
