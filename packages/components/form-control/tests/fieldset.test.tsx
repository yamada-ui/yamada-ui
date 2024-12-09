import type { ComponentProps, FC } from "react"
import { a11y, filterVisuallyHidden, render, screen } from "@yamada-ui/test"
import { Fieldset, useFormControlProps } from "../src"

const Checkbox: FC<ComponentProps<"input">> = ({ children, ...props }) => {
  const formControlProps = useFormControlProps(props)

  return (
    <>
      <input type="checkbox" {...props} {...formControlProps} id="checkbox" />
      <label htmlFor="checkbox">{children}</label>
    </>
  )
}

describe("<Fieldset />", () => {
  test("Fieldset renders correctly", async () => {
    await a11y(
      <Fieldset
        helperMessage="Please review the terms carefully before agreeing."
        legend="Terms and Conditions"
      >
        <Checkbox>I agree to the Terms and Conditions.</Checkbox>
      </Fieldset>,
    )
  })

  test("should render form control", () => {
    render(
      <Fieldset
        helperMessage="Please review the terms carefully before agreeing."
        legend="Terms and Conditions"
      >
        <Checkbox>I agree to the Terms and Conditions.</Checkbox>
      </Fieldset>,
    )
    expect(screen.getByText("Terms and Conditions")).toBeInTheDocument()
    expect(
      screen.getByText(
        filterVisuallyHidden(
          "Please review the terms carefully before agreeing.",
        ),
      ),
    ).toBeInTheDocument()
    expect(screen.getByRole("checkbox")).toBeInTheDocument()
  })

  test("should render invalid form control", () => {
    render(
      <Fieldset
        errorMessage="Agreement is required."
        invalid
        legend="Terms and Conditions"
      >
        <Checkbox>I agree to the Terms and Conditions.</Checkbox>
      </Fieldset>,
    )
    expect(screen.getByText("Terms and Conditions")).toHaveAttribute(
      "data-invalid",
    )
    expect(screen.getByRole("checkbox")).toBeInvalid()
    expect(
      screen.getByText(filterVisuallyHidden("Agreement is required.")),
    ).toBeInTheDocument()
  })

  test("should be hidden helperMessage", () => {
    render(
      <Fieldset
        errorMessage="Agreement is required."
        helperMessage="Please review the terms carefully before agreeing."
        invalid
        legend="Terms and Conditions"
        replace
      >
        <Checkbox>I agree to the Terms and Conditions.</Checkbox>
      </Fieldset>,
    )
    expect(
      screen.getByText(filterVisuallyHidden("Agreement is required.")),
    ).toBeInTheDocument()
    expect(
      screen.queryByText(
        filterVisuallyHidden(
          "Please review the terms carefully before agreeing.",
        ),
      ),
    ).toBeNull()
  })

  test("should be appeared helperMessage", () => {
    render(
      <Fieldset
        errorMessage="Agreement is required."
        helperMessage="Please review the terms carefully before agreeing."
        invalid
        legend="Terms and Conditions"
        replace={false}
      >
        <Checkbox>I agree to the Terms and Conditions.</Checkbox>
      </Fieldset>,
    )
    expect(
      screen.getByText(filterVisuallyHidden("Agreement is required.")),
    ).toBeInTheDocument()
    expect(
      screen.getByText(
        filterVisuallyHidden(
          "Please review the terms carefully before agreeing.",
        ),
      ),
    ).toBeInTheDocument()
  })

  test("should be required", () => {
    render(
      <Fieldset
        errorMessage="Agreement is required."
        helperMessage="Please review the terms carefully before agreeing."
        legend="Terms and Conditions"
        required
      >
        <Checkbox>I agree to the Terms and Conditions.</Checkbox>
      </Fieldset>,
    )
    expect(screen.getByRole("checkbox")).toBeRequired()
  })

  test("should be disabled", () => {
    render(
      <Fieldset
        disabled
        errorMessage="Agreement is required."
        helperMessage="Please review the terms carefully before agreeing."
        legend="Terms and Conditions"
      >
        <Checkbox>I agree to the Terms and Conditions.</Checkbox>
      </Fieldset>,
    )
    expect(screen.getByRole("checkbox")).toBeDisabled()
  })

  test("should be readonly", () => {
    render(
      <Fieldset
        errorMessage="Agreement is required."
        helperMessage="Please review the terms carefully before agreeing."
        legend="Terms and Conditions"
        readOnly
      >
        <Checkbox>I agree to the Terms and Conditions.</Checkbox>
      </Fieldset>,
    )
    expect(screen.getByRole("checkbox")).toHaveAttribute("readonly")
  })

  test("should render custom indicator", () => {
    render(
      <Fieldset
        legend="Terms and Conditions"
        required
        requiredIndicator={<div>required</div>}
      >
        <Checkbox>I agree to the Terms and Conditions.</Checkbox>
      </Fieldset>,
    )
    expect(screen.getByText("required")).toBeInTheDocument()
  })

  test("should render custom optional indicator", () => {
    render(
      <Fieldset
        legend="Terms and Conditions"
        optionalIndicator={<div>optional</div>}
      >
        <Checkbox>I agree to the Terms and Conditions.</Checkbox>
      </Fieldset>,
    )
    expect(screen.getByText("optional")).toBeInTheDocument()
  })
})
