import { Checkbox } from "@yamada-ui/checkbox"
import { a11y, render, screen, filterVisuallyHidden } from "@yamada-ui/test"
import { Fieldset } from "../src"

describe("<Fieldset />", () => {
  test("Fieldset renders correctly", async () => {
    await a11y(
      <Fieldset
        legend="Terms and Conditions"
        helperMessage="Please review the terms carefully before agreeing."
      >
        <Checkbox>I agree to the Terms and Conditions.</Checkbox>
      </Fieldset>,
    )
  })

  test("should render form control", () => {
    render(
      <Fieldset
        legend="Terms and Conditions"
        helperMessage="Please review the terms carefully before agreeing."
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
        isInvalid
        legend="Terms and Conditions"
        errorMessage="Agreement is required."
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
        isInvalid
        legend="Terms and Conditions"
        helperMessage="Please review the terms carefully before agreeing."
        errorMessage="Agreement is required."
        isReplace
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
      <>
        <Fieldset
          isInvalid
          legend="Terms and Conditions"
          helperMessage="Please review the terms carefully before agreeing."
          errorMessage="Agreement is required."
          isReplace={false}
        >
          <Checkbox>I agree to the Terms and Conditions.</Checkbox>
        </Fieldset>
      </>,
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
        isRequired
        legend="Terms and Conditions"
        helperMessage="Please review the terms carefully before agreeing."
        errorMessage="Agreement is required."
      >
        <Checkbox>I agree to the Terms and Conditions.</Checkbox>
      </Fieldset>,
    )
    expect(screen.getByRole("checkbox")).toBeRequired()
  })

  test("should be disabled", () => {
    render(
      <Fieldset
        isDisabled
        legend="Terms and Conditions"
        helperMessage="Please review the terms carefully before agreeing."
        errorMessage="Agreement is required."
      >
        <Checkbox>I agree to the Terms and Conditions.</Checkbox>
      </Fieldset>,
    )
    expect(screen.getByRole("checkbox")).toBeDisabled()
  })

  test("should be readonly", () => {
    render(
      <Fieldset
        isReadOnly
        legend="Terms and Conditions"
        helperMessage="Please review the terms carefully before agreeing."
        errorMessage="Agreement is required."
      >
        <Checkbox>I agree to the Terms and Conditions.</Checkbox>
      </Fieldset>,
    )
    expect(screen.getByRole("checkbox")).toHaveAttribute("readonly")
  })

  test("should render custom indicator", () => {
    render(
      <Fieldset
        isRequired
        legend="Terms and Conditions"
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
