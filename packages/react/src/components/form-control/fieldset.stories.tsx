import type { Meta, StoryFn } from "@storybook/react"
import { Checkbox } from "../checkbox"
import { Tag } from "../tag"
import { ErrorMessage, Fieldset, HelperMessage, Legend } from "./"

type Story = StoryFn<typeof Fieldset>

const meta: Meta<typeof Fieldset> = {
  component: Fieldset,
  title: "Components / Fieldset",
}

export default meta

export const Basic: Story = () => {
  return (
    <Fieldset legend="Terms and Conditions">
      <Checkbox>I agree to the Terms and Conditions.</Checkbox>
    </Fieldset>
  )
}

export const WithHelperMessage: Story = () => {
  return (
    <Fieldset
      helperMessage="Please review the terms carefully before agreeing."
      legend="Terms and Conditions"
    >
      <Checkbox>I agree to the Terms and Conditions.</Checkbox>
    </Fieldset>
  )
}

export const WithErrorMessage: Story = () => {
  return (
    <Fieldset
      errorMessage="Agreement is required."
      isInvalid
      legend="Terms and Conditions"
    >
      <Checkbox>I agree to the Terms and Conditions.</Checkbox>
    </Fieldset>
  )
}

export const IsReplace: Story = () => {
  return (
    <>
      <Fieldset
        errorMessage="Agreement is required."
        helperMessage="Please review the terms carefully before agreeing."
        isInvalid
        isReplace
        legend="Terms and Conditions"
      >
        <Checkbox>I agree to the Terms and Conditions.</Checkbox>
      </Fieldset>

      <Fieldset
        errorMessage="Agreement is required."
        helperMessage="Please review the terms carefully before agreeing."
        isInvalid
        isReplace={false}
        legend="Terms and Conditions"
      >
        <Checkbox>I agree to the Terms and Conditions.</Checkbox>
      </Fieldset>
    </>
  )
}

export const IsRequired: Story = () => {
  return (
    <Fieldset
      errorMessage="Agreement is required."
      helperMessage="Please review the terms carefully before agreeing."
      isRequired
      legend="Terms and Conditions"
    >
      <Checkbox>I agree to the Terms and Conditions.</Checkbox>
    </Fieldset>
  )
}

export const IsDisabled: Story = () => {
  return (
    <Fieldset
      errorMessage="Agreement is required."
      helperMessage="Please review the terms carefully before agreeing."
      isDisabled
      legend="Terms and Conditions"
    >
      <Checkbox>I agree to the Terms and Conditions.</Checkbox>
    </Fieldset>
  )
}

export const IsReadonly: Story = () => {
  return (
    <Fieldset
      errorMessage="Agreement is required."
      helperMessage="Please review the terms carefully before agreeing."
      isReadOnly
      legend="Terms and Conditions"
    >
      <Checkbox>I agree to the Terms and Conditions.</Checkbox>
    </Fieldset>
  )
}

export const CustomLegend: Story = () => {
  return (
    <Fieldset helperMessage="Please review the terms carefully before agreeing.">
      <Legend color="primary">Terms and Conditions</Legend>
      <Checkbox>I agree to the Terms and Conditions.</Checkbox>
    </Fieldset>
  )
}

export const CustomHelperMessage: Story = () => {
  return (
    <Fieldset legend="Terms and Conditions">
      <Checkbox>I agree to the Terms and Conditions.</Checkbox>
      <HelperMessage color="gray.300">
        Please review the terms carefully before agreeing.
      </HelperMessage>
    </Fieldset>
  )
}

export const CustomErrorMessage: Story = () => {
  return (
    <Fieldset isInvalid legend="Terms and Conditions">
      <Checkbox>I agree to the Terms and Conditions.</Checkbox>
      <ErrorMessage color="gray.300">Agreement is required.</ErrorMessage>
    </Fieldset>
  )
}

export const CustomRequiredIndicator: Story = () => {
  return (
    <>
      <Fieldset
        isRequired
        legend="Terms and Conditions"
        requiredIndicator={
          <Tag colorScheme="red" size="sm" ms={2}>
            required
          </Tag>
        }
      >
        <Checkbox>I agree to the Terms and Conditions.</Checkbox>
      </Fieldset>

      <Fieldset isRequired>
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

export const CustomOptionalIndicator: Story = () => {
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
