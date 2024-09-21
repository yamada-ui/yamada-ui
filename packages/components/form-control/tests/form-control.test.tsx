import { a11y, filterVisuallyHidden, render, screen } from "@yamada-ui/test"
import type { ComponentProps, FC } from "react"
import { FormControl, useFormControlProps } from "../src"

const Input: FC<ComponentProps<"input">> = (props) => {
  const formControlProps = useFormControlProps(props)

  return <input {...props} {...formControlProps} />
}

describe("<FormControl />", () => {
  test("FormControl renders correctly", async () => {
    await a11y(<FormControl />)
  })

  test("should render form control", () => {
    render(
      <FormControl label="Email" helperMessage="Please enter your email">
        <Input type="email" />
      </FormControl>,
    )
    expect(screen.getByText("Email")).toBeInTheDocument()
    expect(
      screen.getByText(filterVisuallyHidden("Please enter your email")),
    ).toBeInTheDocument()
    expect(screen.getByRole("textbox")).toBeInTheDocument()
  })

  test("should render invalid form control", () => {
    render(
      <FormControl label="Email" isInvalid errorMessage="Email is required.">
        <Input type="email" />
      </FormControl>,
    )
    expect(screen.getByText("Email")).toHaveAttribute("data-invalid")
    expect(screen.getByRole("textbox")).toBeInvalid()
    expect(
      screen.getByText(filterVisuallyHidden("Email is required.")),
    ).toBeInTheDocument()
  })

  test("should be hidden helperMessage", () => {
    render(
      <FormControl
        label="Email"
        isInvalid
        errorMessage="Email is required."
        helperMessage="Please enter your email"
        isReplace
      >
        <Input type="email" />
      </FormControl>,
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
      <>
        <FormControl
          label="Email"
          isInvalid
          errorMessage="Email is required."
          helperMessage="Please enter your email"
          isReplace={false}
        >
          <Input type="email" />
        </FormControl>
      </>,
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
      <FormControl label="Email" isRequired>
        <Input type="email" />
      </FormControl>,
    )
    expect(screen.getByRole("textbox")).toBeRequired()
  })

  test("should be disabled", () => {
    render(
      <FormControl label="Email" isDisabled>
        <Input type="email" />
      </FormControl>,
    )
    expect(screen.getByRole("textbox")).toBeDisabled()
  })

  test("should be readonly", () => {
    render(
      <FormControl label="Email" isReadOnly>
        <Input type="email" />
      </FormControl>,
    )
    expect(screen.getByRole("textbox")).toHaveAttribute("aria-readonly", "true")
  })

  test("should render custom indicator *", () => {
    render(
      <FormControl isRequired label="Email">
        <Input type="email" />
      </FormControl>,
    )
    expect(screen.getByText("*")).toBeInTheDocument()
  })

  test("should render custom indicator text", () => {
    render(
      <FormControl isRequired label="Email" requiredIndicator="required">
        <Input type="email" />
      </FormControl>,
    )
    expect(screen.getByText("required")).toBeInTheDocument()
  })

  test("should render custom indicator jsx", () => {
    render(
      <FormControl
        isRequired
        label="Email"
        requiredIndicator={<div data-testid="required">required</div>}
      >
        <Input type="email" />
      </FormControl>,
    )
    expect(screen.getByTestId("required")).toHaveTextContent("required")
  })

  test("should render custom optional indicator", () => {
    render(
      <FormControl label="Email" optionalIndicator={<div>optional</div>}>
        <Input type="email" />
      </FormControl>,
    )
    expect(screen.getByText("optional")).toBeInTheDocument()
  })
})
