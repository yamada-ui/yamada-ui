import type { ComponentProps, FC } from "react"
import { a11y, filterVisuallyHidden, render, screen } from "../../../test"
import { FormControl, useFormControlProps } from "./"

const Input: FC<ComponentProps<"input">> = (props) => {
  const formControlProps = useFormControlProps(props)

  return <input {...props} {...formControlProps} />
}

describe("<FormControl />", () => {
  test("FormControl renders correctly", async () => {
    await a11y(<FormControl.Root />)
  })

  test("should render form control", () => {
    render(
      <FormControl.Root helperMessage="Please enter your email" label="Email">
        <Input type="email" />
      </FormControl.Root>,
    )
    expect(screen.getByText("Email")).toBeInTheDocument()
    expect(
      screen.getByText(filterVisuallyHidden("Please enter your email")),
    ).toBeInTheDocument()
    expect(screen.getByRole("textbox")).toBeInTheDocument()
  })

  test("should render invalid form control", () => {
    render(
      <FormControl.Root errorMessage="Email is required." invalid label="Email">
        <Input type="email" />
      </FormControl.Root>,
    )
    expect(screen.getByText("Email")).toHaveAttribute("data-invalid")
    expect(screen.getByRole("textbox")).toBeInvalid()
    expect(
      screen.getByText(filterVisuallyHidden("Email is required.")),
    ).toBeInTheDocument()
  })

  test("should be hidden helperMessage", () => {
    render(
      <FormControl.Root
        errorMessage="Email is required."
        helperMessage="Please enter your email"
        invalid
        label="Email"
        replace
      >
        <Input type="email" />
      </FormControl.Root>,
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
      <FormControl.Root
        errorMessage="Email is required."
        helperMessage="Please enter your email"
        invalid
        label="Email"
        replace={false}
      >
        <Input type="email" />
      </FormControl.Root>,
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
      <FormControl.Root label="Email" required>
        <Input type="email" />
      </FormControl.Root>,
    )
    expect(screen.getByRole("textbox")).toBeRequired()
  })

  test("should be disabled", () => {
    render(
      <FormControl.Root disabled label="Email">
        <Input type="email" />
      </FormControl.Root>,
    )
    expect(screen.getByRole("textbox")).toBeDisabled()
  })

  test("should be readonly", () => {
    render(
      <FormControl.Root label="Email" readOnly>
        <Input type="email" />
      </FormControl.Root>,
    )
    expect(screen.getByRole("textbox")).toHaveAttribute("aria-readonly", "true")
  })

  test("should render custom indicator *", () => {
    render(
      <FormControl.Root label="Email" required>
        <Input type="email" />
      </FormControl.Root>,
    )
    expect(screen.getByText("*")).toBeInTheDocument()
  })

  test("should render custom indicator text", () => {
    render(
      <FormControl.Root label="Email" required requiredIndicator="required">
        <Input type="email" />
      </FormControl.Root>,
    )
    expect(screen.getByText("required")).toBeInTheDocument()
  })

  test("should render custom indicator jsx", () => {
    render(
      <FormControl.Root
        label="Email"
        required
        requiredIndicator={<div data-testid="required">required</div>}
      >
        <Input type="email" />
      </FormControl.Root>,
    )
    expect(screen.getByTestId("required")).toHaveTextContent("required")
  })

  test("should render custom optional indicator", () => {
    render(
      <FormControl.Root label="Email" optionalIndicator={<div>optional</div>}>
        <Input type="email" />
      </FormControl.Root>,
    )
    expect(screen.getByText("optional")).toBeInTheDocument()
  })
})
