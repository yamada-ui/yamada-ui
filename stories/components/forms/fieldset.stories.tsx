import type { Meta, StoryFn } from "@storybook/react"
import {
  Fieldset,
  Legend,
  HelperMessage,
  ErrorMessage,
  Tag,
  Checkbox,
} from "@yamada-ui/react"

type Story = StoryFn<typeof Fieldset>

const meta: Meta<typeof Fieldset> = {
  title: "Components / Forms / Fieldset",
  component: Fieldset,
}

export default meta

export const basic: Story = () => {
  return (
    <Fieldset legend="Terms and Conditions">
      <Checkbox>I agree to the Terms and Conditions.</Checkbox>
    </Fieldset>
  )
}

export const withHelperMessage: Story = () => {
  return (
    <Fieldset
      legend="Terms and Conditions"
      helperMessage="Please review the terms carefully before agreeing."
    >
      <Checkbox>I agree to the Terms and Conditions.</Checkbox>
    </Fieldset>
  )
}

export const withErrorMessage: Story = () => {
  return (
    <Fieldset
      isInvalid
      legend="Terms and Conditions"
      errorMessage="Agreement is required."
    >
      <Checkbox>I agree to the Terms and Conditions.</Checkbox>
    </Fieldset>
  )
}

export const isReplace: Story = () => {
  return (
    <>
      <Fieldset
        isInvalid
        legend="Terms and Conditions"
        helperMessage="Please review the terms carefully before agreeing."
        errorMessage="Agreement is required."
        isReplace={true}
      >
        <Checkbox>I agree to the Terms and Conditions.</Checkbox>
      </Fieldset>

      <Fieldset
        isInvalid
        legend="Terms and Conditions"
        helperMessage="Please review the terms carefully before agreeing."
        errorMessage="Agreement is required."
        isReplace={false}
      >
        <Checkbox>I agree to the Terms and Conditions.</Checkbox>
      </Fieldset>
    </>
  )
}

export const isRequired: Story = () => {
  return (
    <Fieldset
      isRequired
      legend="Terms and Conditions"
      helperMessage="Please review the terms carefully before agreeing."
      errorMessage="Agreement is required."
    >
      <Checkbox>I agree to the Terms and Conditions.</Checkbox>
    </Fieldset>
  )
}

export const isDisabled: Story = () => {
  return (
    <Fieldset
      isDisabled
      legend="Terms and Conditions"
      helperMessage="Please review the terms carefully before agreeing."
      errorMessage="Agreement is required."
    >
      <Checkbox>I agree to the Terms and Conditions.</Checkbox>
    </Fieldset>
  )
}

export const isReadonly: Story = () => {
  return (
    <Fieldset
      isReadOnly
      legend="Terms and Conditions"
      helperMessage="Please review the terms carefully before agreeing."
      errorMessage="Agreement is required."
    >
      <Checkbox>I agree to the Terms and Conditions.</Checkbox>
    </Fieldset>
  )
}

export const customLegend: Story = () => {
  return (
    <Fieldset helperMessage="Please review the terms carefully before agreeing.">
      <Legend color="primary">Terms and Conditions</Legend>
      <Checkbox>I agree to the Terms and Conditions.</Checkbox>
    </Fieldset>
  )
}

export const customHelperMessage: Story = () => {
  return (
    <Fieldset legend="Terms and Conditions">
      <Checkbox>I agree to the Terms and Conditions.</Checkbox>
      <HelperMessage color="gray.300">
        Please review the terms carefully before agreeing.
      </HelperMessage>
    </Fieldset>
  )
}

export const customErrorMessage: Story = () => {
  return (
    <Fieldset isInvalid legend="Terms and Conditions">
      <Checkbox>I agree to the Terms and Conditions.</Checkbox>
      <ErrorMessage color="gray.300">Agreement is required.</ErrorMessage>
    </Fieldset>
  )
}

export const customRequiredIndicator: Story = () => {
  return (
    <>
      <Fieldset
        isRequired
        legend="Terms and Conditions"
        requiredIndicator={
          <Tag size="sm" colorScheme="red" ms={2}>
            required
          </Tag>
        }
      >
        <Checkbox>I agree to the Terms and Conditions.</Checkbox>
      </Fieldset>

      <Fieldset isRequired>
        <Legend
          requiredIndicator={
            <Tag size="sm" colorScheme="red" ms={2}>
              required
            </Tag>
          }
        >
          Terms and Conditions
        </Legend>
        <Checkbox>I agree to the Terms and Conditions.</Checkbox>
      </Fieldset>
    </>
  )
}

export const customOptionalIndicator: Story = () => {
  return (
    <>
      <Fieldset
        legend="Terms and Conditions"
        optionalIndicator={
          <Tag size="sm" colorScheme="primary" ms={2}>
            optional
          </Tag>
        }
      >
        <Checkbox>I agree to the Terms and Conditions.</Checkbox>
      </Fieldset>

      <Fieldset>
        <Legend
          optionalIndicator={
            <Tag size="sm" colorScheme="primary" ms={2}>
              optional
            </Tag>
          }
        >
          Terms and Conditions
        </Legend>
        <Checkbox>I agree to the Terms and Conditions.</Checkbox>
      </Fieldset>
    </>
  )
}
