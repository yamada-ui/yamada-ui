import { a11y, filterVisuallyHidden, render, screen } from "#test"
import { Field } from "."
import { Input } from "../input"

describe("<Field />", () => {
  test("renders component correctly", async () => {
    await a11y(<Field.Root />)
  })

  test("Field sets `displayName` correctly", () => {
    expect(Field.Root.displayName).toBe("FieldRoot")
    expect(Field.Label.displayName).toBe("FieldLabel")
    expect(Field.HelperMessage.displayName).toBe("FieldHelperMessage")
    expect(Field.ErrorMessage.displayName).toBe("FieldErrorMessage")
  })

  test("Field sets `className` correctly", () => {
    const { rerender } = render(
      <Field.Root data-testid="root">
        <Field.Label data-testid="label">Label</Field.Label>
        <Field.HelperMessage data-testid="helper">Helper</Field.HelperMessage>
        <Field.ErrorMessage data-testid="error">Error</Field.ErrorMessage>
      </Field.Root>,
    )

    expect(screen.getByTestId("root")).toHaveClass("ui-field__root")
    expect(screen.getByTestId("label")).toHaveClass("ui-field__label")
    expect(screen.getByTestId("helper")).toHaveClass("ui-field__helper-message")

    rerender(
      <Field.Root data-testid="root" invalid>
        <Field.Label data-testid="label">Label</Field.Label>
        <Field.HelperMessage data-testid="helper">Helper</Field.HelperMessage>
        <Field.ErrorMessage data-testid="error">Error</Field.ErrorMessage>
      </Field.Root>,
    )
    expect(screen.getByTestId("error")).toHaveClass("ui-field__error-message")
  })

  test("Field renders HTML tag correctly", () => {
    const { rerender } = render(
      <Field.Root data-testid="root">
        <Field.Label>Label</Field.Label>
        <Field.HelperMessage>Helper</Field.HelperMessage>
        <Field.ErrorMessage>Error</Field.ErrorMessage>
      </Field.Root>,
    )

    expect(screen.getByTestId("root").tagName).toBe("DIV")
    expect(screen.getByText("Label").tagName).toBe("LABEL")
    expect(screen.getByText("Helper").tagName).toBe("SPAN")

    rerender(
      <Field.Root data-testid="root" invalid>
        <Field.Label>Label</Field.Label>
        <Field.HelperMessage>Helper</Field.HelperMessage>
        <Field.ErrorMessage>Error</Field.ErrorMessage>
      </Field.Root>,
    )
    expect(screen.getByText("Error").tagName).toBe("SPAN")
  })

  test("should render form control", () => {
    render(
      <Field.Root helperMessage="Please enter your email" label="Email">
        <Input type="email" />
      </Field.Root>,
    )
    expect(screen.getByText("Email")).toBeInTheDocument()
    expect(
      screen.getByText(filterVisuallyHidden("Please enter your email")),
    ).toBeInTheDocument()
    expect(screen.getByRole("textbox")).toBeInTheDocument()
  })

  test("should render invalid form control", () => {
    render(
      <Field.Root errorMessage="Email is required." invalid label="Email">
        <Input type="email" />
      </Field.Root>,
    )
    expect(screen.getByText("Email")).toHaveAttribute("data-invalid")
    expect(screen.getByRole("textbox")).toBeInvalid()
    expect(
      screen.getByText(filterVisuallyHidden("Email is required.")),
    ).toBeInTheDocument()
  })

  test("should be hidden helperMessage", () => {
    render(
      <Field.Root
        errorMessage="Email is required."
        helperMessage="Please enter your email"
        invalid
        label="Email"
        replace
      >
        <Input type="email" />
      </Field.Root>,
    )
    expect(
      screen.getByText(filterVisuallyHidden("Email is required.")),
    ).toBeInTheDocument()
    expect(
      screen.queryByText(filterVisuallyHidden("Please enter your email")),
    ).not.toBeVisible()
  })

  test("should be appeared helperMessage", () => {
    render(
      <Field.Root
        errorMessage="Email is required."
        helperMessage="Please enter your email"
        invalid
        label="Email"
        replace={false}
      >
        <Input type="email" />
      </Field.Root>,
    )
    expect(
      screen.getByText(filterVisuallyHidden("Email is required.")),
    ).toBeInTheDocument()
    expect(
      screen.getByText(filterVisuallyHidden("Please enter your email")),
    ).toBeInTheDocument()
  })

  test("should be required", () => {
    render(
      <Field.Root label="Email" required>
        <Input type="email" />
      </Field.Root>,
    )
    expect(screen.getByRole("textbox")).toBeRequired()
  })

  test("should be disabled", () => {
    render(
      <Field.Root disabled label="Email">
        <Input type="email" />
      </Field.Root>,
    )
    expect(screen.getByRole("textbox")).toBeDisabled()
  })

  test("should be readonly", () => {
    render(
      <Field.Root label="Email" readOnly>
        <Input type="email" />
      </Field.Root>,
    )
    expect(screen.getByRole("textbox")).toHaveAttribute("aria-readonly", "true")
  })

  test("should render custom indicator *", () => {
    render(
      <Field.Root label="Email" required>
        <Input type="email" />
      </Field.Root>,
    )
    expect(screen.getByText("*")).toBeInTheDocument()
  })

  test("should render custom indicator text", () => {
    render(
      <Field.Root label="Email" required requiredIndicator="required">
        <Input type="email" />
      </Field.Root>,
    )
    expect(screen.getByText("required")).toBeInTheDocument()
  })

  test("should render custom indicator jsx", () => {
    render(
      <Field.Root
        label="Email"
        required
        requiredIndicator={<div data-testid="required">required</div>}
      >
        <Input type="email" />
      </Field.Root>,
    )
    expect(screen.getByTestId("required")).toHaveTextContent("required")
  })

  test("should render custom optional indicator", () => {
    render(
      <Field.Root
        label="Email"
        optionalIndicator={<div data-testid="optional">optional</div>}
      >
        <Input type="email" />
      </Field.Root>,
    )
    expect(screen.getByTestId("optional")).toHaveTextContent("optional")
  })

  test("should render aria-describedby with HelperMessage", () => {
    render(
      <Field.Root
        helperMessage="We'll never share your email."
        label="Email address"
      >
        <Input type="email" placeholder="your email address" />
      </Field.Root>,
    )
    expect(
      screen.getByText("We'll never share your email."),
    ).toBeInTheDocument()
    expect(
      screen.getByRole("textbox", {
        description: "We'll never share your email.",
      }),
    ).toBeInTheDocument()
  })
})
