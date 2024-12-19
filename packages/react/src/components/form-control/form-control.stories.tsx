import type { Meta, StoryFn } from "@storybook/react"
import { Input } from "../input"
import { Tag } from "../tag"
import { ErrorMessage, FormControl, HelperMessage, Label } from "./"

type Story = StoryFn<typeof FormControl>

const meta: Meta<typeof FormControl> = {
  component: FormControl,
  title: "Components / FormControl",
}

export default meta

export const Basic: Story = () => {
  return (
    <FormControl label="Email address" replace>
      <Input type="email" placeholder="your email address" />
    </FormControl>
  )
}

export const WithHelperMessage: Story = () => {
  return (
    <FormControl
      helperMessage="We'll never share your email."
      label="Email address"
    >
      <Input type="email" placeholder="your email address" />
    </FormControl>
  )
}

export const WithErrorMessage: Story = () => {
  return (
    <FormControl
      errorMessage="Email is required."
      invalid
      label="Email address"
    >
      <Input type="email" placeholder="your email address" />
    </FormControl>
  )
}

export const Replace: Story = () => {
  return (
    <>
      <FormControl
        errorMessage="Email is required."
        helperMessage="We'll never share your email."
        invalid
        label="Email address"
        replace
      >
        <Input type="email" placeholder="your email address" />
      </FormControl>

      <FormControl
        errorMessage="Email is required."
        helperMessage="We'll never share your email."
        invalid
        label="Email address"
        replace={false}
      >
        <Input type="email" placeholder="your email address" />
      </FormControl>
    </>
  )
}

export const Required: Story = () => {
  return (
    <FormControl
      errorMessage="Email is required."
      helperMessage="We'll never share your email."
      label="Email address"
      required
    >
      <Input type="email" placeholder="your email address" />
    </FormControl>
  )
}

export const Disabled: Story = () => {
  return (
    <FormControl
      disabled
      errorMessage="Email is required."
      helperMessage="We'll never share your email."
      label="Email address"
    >
      <Input type="email" placeholder="your email address" />
    </FormControl>
  )
}

export const Readonly: Story = () => {
  return (
    <FormControl
      errorMessage="Email is required."
      helperMessage="We'll never share your email."
      label="Email address"
      readOnly
    >
      <Input type="email" placeholder="your email address" />
    </FormControl>
  )
}

export const CustomLabel: Story = () => {
  return (
    <FormControl helperMessage="We'll never share your email.">
      <Label color="primary">Email address</Label>
      <Input type="email" placeholder="your email address" />
    </FormControl>
  )
}

export const CustomHelperMessage: Story = () => {
  return (
    <FormControl label="Email address">
      <Input type="email" placeholder="your email address" />
      <HelperMessage color="gray.300">
        We'll never share your email.
      </HelperMessage>
    </FormControl>
  )
}

export const CustomErrorMessage: Story = () => {
  return (
    <FormControl invalid label="Email address">
      <Input type="email" placeholder="your email address" />
      <ErrorMessage color="gray.300">Email is required.</ErrorMessage>
    </FormControl>
  )
}

export const CustomRequiredIndicator: Story = () => {
  return (
    <>
      <FormControl
        label="Email address"
        required
        requiredIndicator={
          <Tag colorScheme="red" size="sm" ms={2}>
            required
          </Tag>
        }
      >
        <Input type="email" placeholder="your email address" />
      </FormControl>

      <FormControl required>
        <Label
          requiredIndicator={
            <Tag colorScheme="red" size="sm" ms={2}>
              required
            </Tag>
          }
        >
          Email address
        </Label>
        <Input type="email" placeholder="your email address" />
      </FormControl>
    </>
  )
}

export const CustomOptionalIndicator: Story = () => {
  return (
    <>
      <FormControl
        label="Email address"
        optionalIndicator={
          <Tag colorScheme="primary" size="sm" ms={2}>
            optional
          </Tag>
        }
      >
        <Input type="email" placeholder="your email address" />
      </FormControl>

      <FormControl>
        <Label
          optionalIndicator={
            <Tag colorScheme="primary" size="sm" ms={2}>
              optional
            </Tag>
          }
        >
          Email address
        </Label>
        <Input type="email" placeholder="your email address" />
      </FormControl>
    </>
  )
}
