import { Field } from "."
import { a11y, filterVisuallyHidden, render, screen } from "../../../test"
import { Input } from "../input"

describe("<FormControl />", () => {
  test("FormControl renders correctly", async () => {
    await a11y(<Field.Root />)
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
    ).toBeNull()
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
})
