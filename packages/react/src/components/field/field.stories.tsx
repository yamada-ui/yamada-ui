import type { Meta, StoryFn } from "@storybook/react-vite"
import { PropsTable } from "#storybook"
import { Field } from "."
import { Input } from "../input"
import { Tag } from "../tag"

type Story = StoryFn<typeof Field.Root>

const meta: Meta<typeof Field.Root> = {
  component: Field.Root,
  title: "Components / Field",
}

export default meta

export const Basic: Story = () => {
  return (
    <Field.Root label="Email address">
      <Input type="email" placeholder="your email address" />
    </Field.Root>
  )
}

export const HelperMessage: Story = () => {
  return (
    <Field.Root
      helperMessage="We'll never share your email."
      label="Email address"
    >
      <Input type="email" placeholder="your email address" />
    </Field.Root>
  )
}

export const ErrorMessage: Story = () => {
  return (
    <Field.Root errorMessage="Email is required." invalid label="Email address">
      <Input type="email" placeholder="your email address" />
    </Field.Root>
  )
}

export const Replace: Story = () => {
  return (
    <>
      <Field.Root
        errorMessage="Email is required."
        helperMessage="We'll never share your email."
        invalid
        label="Email address"
        replace
      >
        <Input type="email" placeholder="your email address" />
      </Field.Root>

      <Field.Root
        errorMessage="Email is required."
        helperMessage="We'll never share your email."
        invalid
        label="Email address"
        replace={false}
      >
        <Input type="email" placeholder="your email address" />
      </Field.Root>
    </>
  )
}

export const Orientation: Story = () => {
  return (
    <PropsTable variant="stack" rows={["vertical", "horizontal"]}>
      {(_, row, key) => (
        <Field.Root
          key={key}
          errorMessage="Email is required."
          helperMessage="We'll never share your email."
          label="Email address"
          orientation={row}
          required
        >
          <Input type="email" placeholder="your email address" />
        </Field.Root>
      )}
    </PropsTable>
  )
}

export const Required: Story = () => {
  return (
    <Field.Root
      errorMessage="Email is required."
      helperMessage="We'll never share your email."
      label="Email address"
      required
    >
      <Input type="email" placeholder="your email address" />
    </Field.Root>
  )
}

export const Disabled: Story = () => {
  return (
    <Field.Root
      disabled
      errorMessage="Email is required."
      helperMessage="We'll never share your email."
      label="Email address"
    >
      <Input type="email" placeholder="your email address" />
    </Field.Root>
  )
}

export const ReadOnly: Story = () => {
  return (
    <Field.Root
      errorMessage="Email is required."
      helperMessage="We'll never share your email."
      label="Email address"
      readOnly
    >
      <Input type="email" placeholder="your email address" />
    </Field.Root>
  )
}

export const CustomField: Story = () => {
  return (
    <Field.Root helperMessage="We'll never share your email.">
      <Field.Label color="blue">Email address</Field.Label>
      <Input type="email" placeholder="your email address" />
    </Field.Root>
  )
}

export const CustomHelperMessage: Story = () => {
  return (
    <Field.Root label="Email address">
      <Input type="email" placeholder="your email address" />
      <Field.HelperMessage color="red">
        We'll never share your email.
      </Field.HelperMessage>
    </Field.Root>
  )
}

export const CustomErrorMessage: Story = () => {
  return (
    <Field.Root invalid label="Email address">
      <Input type="email" placeholder="your email address" />
      <Field.ErrorMessage color="green">Email is required.</Field.ErrorMessage>
    </Field.Root>
  )
}

export const CustomRequiredIndicator: Story = () => {
  return (
    <>
      <Field.Root
        label="Email address"
        required
        requiredIndicator={
          <Tag colorScheme="red" size="sm">
            required
          </Tag>
        }
      >
        <Input type="email" placeholder="your email address" />
      </Field.Root>

      <Field.Root required>
        <Field.Label
          requiredIndicator={
            <Tag colorScheme="red" size="sm">
              required
            </Tag>
          }
        >
          Email address
        </Field.Label>
        <Input type="email" placeholder="your email address" />
      </Field.Root>
    </>
  )
}

export const CustomOptionalIndicator: Story = () => {
  return (
    <>
      <Field.Root
        label="Email address"
        optionalIndicator={
          <Tag colorScheme="mono" size="sm">
            optional
          </Tag>
        }
      >
        <Input type="email" placeholder="your email address" />
      </Field.Root>

      <Field.Root>
        <Field.Label
          optionalIndicator={
            <Tag colorScheme="mono" size="sm">
              optional
            </Tag>
          }
        >
          Email address
        </Field.Label>
        <Input type="email" placeholder="your email address" />
      </Field.Root>
    </>
  )
}
