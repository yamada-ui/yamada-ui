import type { Meta, StoryFn } from "@storybook/react"
// import { Input } from "../input"
import { Tag } from "../tag"
import { FormControl } from "./"

type Story = StoryFn<typeof FormControl.Root>

const meta: Meta<typeof FormControl.Root> = {
  component: FormControl.Root,
  title: "Components / FormControl",
}

export default meta

export const Basic: Story = () => {
  return (
    <FormControl.Root legend="Email address" replace>
      {/* <Input type="email" placeholder="your email address" /> */}
    </FormControl.Root>
  )
}

export const WithHelperMessage: Story = () => {
  return (
    <FormControl.Root
      helperMessage="We'll never share your email."
      label="Email address"
    >
      {/* <Input type="email" placeholder="your email address" /> */}
    </FormControl.Root>
  )
}

export const WithErrorMessage: Story = () => {
  return (
    <FormControl.Root
      errorMessage="Email is required."
      invalid
      label="Email address"
    >
      {/* <Input type="email" placeholder="your email address" /> */}
    </FormControl.Root>
  )
}

export const Replace: Story = () => {
  return (
    <>
      <FormControl.Root
        errorMessage="Email is required."
        helperMessage="We'll never share your email."
        invalid
        label="Email address"
        replace
      >
        {/* <Input type="email" placeholder="your email address" /> */}
      </FormControl.Root>

      <FormControl.Root
        errorMessage="Email is required."
        helperMessage="We'll never share your email."
        invalid
        label="Email address"
        replace={false}
      >
        {/* <Input type="email" placeholder="your email address" /> */}
      </FormControl.Root>
    </>
  )
}

export const Required: Story = () => {
  return (
    <FormControl.Root
      errorMessage="Email is required."
      helperMessage="We'll never share your email."
      label="Email address"
      required
    >
      {/* <Input type="email" placeholder="your email address" /> */}
    </FormControl.Root>
  )
}

export const Disabled: Story = () => {
  return (
    <FormControl.Root
      disabled
      errorMessage="Email is required."
      helperMessage="We'll never share your email."
      label="Email address"
    >
      {/* <Input type="email" placeholder="your email address" /> */}
    </FormControl.Root>
  )
}

export const Readonly: Story = () => {
  return (
    <FormControl.Root
      errorMessage="Email is required."
      helperMessage="We'll never share your email."
      label="Email address"
      readOnly
    >
      {/* <Input type="email" placeholder="your email address" /> */}
    </FormControl.Root>
  )
}

export const CustomFormControl: Story = () => {
  return (
    <FormControl.Root helperMessage="We'll never share your email.">
      <FormControl.Label color="primary">Email address</FormControl.Label>
      {/* <Input type="email" placeholder="your email address" /> */}
    </FormControl.Root>
  )
}

export const CustomHelperMessage: Story = () => {
  return (
    <FormControl.Root label="Email address">
      {/* <Input type="email" placeholder="your email address" /> */}
      <FormControl.HelperMessage color="gray.300">
        We'll never share your email.
      </FormControl.HelperMessage>
    </FormControl.Root>
  )
}

export const CustomErrorMessage: Story = () => {
  return (
    <FormControl.Root invalid label="Email address">
      {/* <Input type="email" placeholder="your email address" /> */}
      <FormControl.ErrorMessage color="gray.300">
        Email is required.
      </FormControl.ErrorMessage>
    </FormControl.Root>
  )
}

export const CustomRequiredIndicator: Story = () => {
  return (
    <>
      <FormControl.Root
        label="Email address"
        required
        requiredIndicator={
          <Tag colorScheme="red" size="sm" ms={2}>
            required
          </Tag>
        }
      >
        {/* <Input type="email" placeholder="your email address" /> */}
      </FormControl.Root>

      <FormControl.Root required>
        <FormControl.Label
          requiredIndicator={
            <Tag colorScheme="red" size="sm" ms={2}>
              required
            </Tag>
          }
        >
          Email address
        </FormControl.Label>
        {/* <Input type="email" placeholder="your email address" /> */}
      </FormControl.Root>
    </>
  )
}

export const CustomOptionalIndicator: Story = () => {
  return (
    <>
      <FormControl.Root
        label="Email address"
        optionalIndicator={
          <Tag colorScheme="primary" size="sm" ms={2}>
            optional
          </Tag>
        }
      >
        {/* <Input type="email" placeholder="your email address" /> */}
      </FormControl.Root>

      <FormControl.Root>
        <FormControl.Label
          optionalIndicator={
            <Tag colorScheme="primary" size="sm" ms={2}>
              optional
            </Tag>
          }
        >
          Email address
        </FormControl.Label>
        {/* <Input type="email" placeholder="your email address" /> */}
      </FormControl.Root>
    </>
  )
}
