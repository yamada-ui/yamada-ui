import type { Meta, StoryFn } from "@storybook/react"
import {
  ErrorMessage,
  FormControl,
  HelperMessage,
  Input,
  Label,
  Tag,
} from "@yamada-ui/react"

type Story = StoryFn<typeof FormControl>

const meta: Meta<typeof FormControl> = {
  component: FormControl,
  title: "Components / Forms / FormControl",
}

export default meta

export const basic: Story = () => {
  return (
    <FormControl label="Email address">
      <Input type="email" placeholder="your email address" />
    </FormControl>
  )
}

export const withHelperMessage: Story = () => {
  return (
    <FormControl
      helperMessage="We'll never share your email."
      label="Email address"
    >
      <Input type="email" placeholder="your email address" />
    </FormControl>
  )
}

export const withErrorMessage: Story = () => {
  return (
    <FormControl
      errorMessage="Email is required."
      isInvalid
      label="Email address"
    >
      <Input type="email" placeholder="your email address" />
    </FormControl>
  )
}

export const isReplace: Story = () => {
  return (
    <>
      <FormControl
        errorMessage="Email is required."
        helperMessage="We'll never share your email."
        isInvalid
        isReplace
        label="Email address"
      >
        <Input type="email" placeholder="your email address" />
      </FormControl>

      <FormControl
        errorMessage="Email is required."
        helperMessage="We'll never share your email."
        isInvalid
        isReplace={false}
        label="Email address"
      >
        <Input type="email" placeholder="your email address" />
      </FormControl>
    </>
  )
}

export const isRequired: Story = () => {
  return (
    <FormControl
      errorMessage="Email is required."
      helperMessage="We'll never share your email."
      isRequired
      label="Email address"
    >
      <Input type="email" placeholder="your email address" />
    </FormControl>
  )
}

export const isDisabled: Story = () => {
  return (
    <FormControl
      errorMessage="Email is required."
      helperMessage="We'll never share your email."
      isDisabled
      label="Email address"
    >
      <Input type="email" placeholder="your email address" />
    </FormControl>
  )
}

export const isReadonly: Story = () => {
  return (
    <FormControl
      errorMessage="Email is required."
      helperMessage="We'll never share your email."
      isReadOnly
      label="Email address"
    >
      <Input type="email" placeholder="your email address" />
    </FormControl>
  )
}

export const customLabel: Story = () => {
  return (
    <FormControl helperMessage="We'll never share your email.">
      <Label color="primary">Email address</Label>
      <Input type="email" placeholder="your email address" />
    </FormControl>
  )
}

export const customHelperMessage: Story = () => {
  return (
    <FormControl label="Email address">
      <Input type="email" placeholder="your email address" />
      <HelperMessage color="gray.300">
        We'll never share your email.
      </HelperMessage>
    </FormControl>
  )
}

export const customErrorMessage: Story = () => {
  return (
    <FormControl isInvalid label="Email address">
      <Input type="email" placeholder="your email address" />
      <ErrorMessage color="gray.300">Email is required.</ErrorMessage>
    </FormControl>
  )
}

export const customRequiredIndicator: Story = () => {
  return (
    <>
      <FormControl
        isRequired
        label="Email address"
        requiredIndicator={
          <Tag colorScheme="red" size="sm" ms={2}>
            required
          </Tag>
        }
      >
        <Input type="email" placeholder="your email address" />
      </FormControl>

      <FormControl isRequired>
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

export const customOptionalIndicator: Story = () => {
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
