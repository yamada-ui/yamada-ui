import type { Meta, StoryFn } from "@storybook/react"
import {
  Checkbox,
  ErrorMessage,
  Fieldset,
  HelperMessage,
  Legend,
  Tag,
} from "@yamada-ui/react"

type Story = StoryFn<typeof Fieldset>

const meta: Meta<typeof Fieldset> = {
  component: Fieldset,
  title: "Components / Forms / Fieldset",
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
      helperMessage="Please review the terms carefully before agreeing."
      legend="Terms and Conditions"
    >
      <Checkbox>I agree to the Terms and Conditions.</Checkbox>
    </Fieldset>
  )
}

export const withErrorMessage: Story = () => {
  return (
    <Fieldset
      errorMessage="Agreement is required."
      invalid
      legend="Terms and Conditions"
    >
      <Checkbox>I agree to the Terms and Conditions.</Checkbox>
    </Fieldset>
  )
}

export const isReplace: Story = () => {
  return (
    <>
      <Fieldset
        errorMessage="Agreement is required."
        helperMessage="Please review the terms carefully before agreeing."
        invalid
        legend="Terms and Conditions"
        replace
      >
        <Checkbox>I agree to the Terms and Conditions.</Checkbox>
      </Fieldset>

      <Fieldset
        errorMessage="Agreement is required."
        helperMessage="Please review the terms carefully before agreeing."
        invalid
        legend="Terms and Conditions"
        replace={false}
      >
        <Checkbox>I agree to the Terms and Conditions.</Checkbox>
      </Fieldset>
    </>
  )
}

export const isRequired: Story = () => {
  return (
    <Fieldset
      errorMessage="Agreement is required."
      helperMessage="Please review the terms carefully before agreeing."
      legend="Terms and Conditions"
      required
    >
      <Checkbox>I agree to the Terms and Conditions.</Checkbox>
    </Fieldset>
  )
}

export const disabled: Story = () => {
  return (
    <Fieldset
      disabled
      errorMessage="Agreement is required."
      helperMessage="Please review the terms carefully before agreeing."
      legend="Terms and Conditions"
    >
      <Checkbox>I agree to the Terms and Conditions.</Checkbox>
    </Fieldset>
  )
}

export const readOnly: Story = () => {
  return (
    <Fieldset
      errorMessage="Agreement is required."
      helperMessage="Please review the terms carefully before agreeing."
      legend="Terms and Conditions"
      readOnly
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
    <Fieldset invalid legend="Terms and Conditions">
      <Checkbox>I agree to the Terms and Conditions.</Checkbox>
      <ErrorMessage color="gray.300">Agreement is required.</ErrorMessage>
    </Fieldset>
  )
}

export const customRequiredIndicator: Story = () => {
  return (
    <>
      <Fieldset
        legend="Terms and Conditions"
        required
        requiredIndicator={
          <Tag colorScheme="red" size="sm" ms={2}>
            required
          </Tag>
        }
      >
        <Checkbox>I agree to the Terms and Conditions.</Checkbox>
      </Fieldset>

      <Fieldset required>
        <Legend
          requiredIndicator={
            <Tag colorScheme="red" size="sm" ms={2}>
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
          <Tag colorScheme="primary" size="sm" ms={2}>
            optional
          </Tag>
        }
      >
        <Checkbox>I agree to the Terms and Conditions.</Checkbox>
      </Fieldset>

      <Fieldset>
        <Legend
          optionalIndicator={
            <Tag colorScheme="primary" size="sm" ms={2}>
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
