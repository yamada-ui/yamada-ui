import { Input } from "@yamada-ui/react"
import { a11y, render, screen } from "@yamada-ui/test"
import { FormControl } from "../src"

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
    expect(screen.getByText("Please enter your email")).toBeInTheDocument()
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
    expect(screen.getByText("Email is required.")).toBeInTheDocument()
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
    expect(screen.getByText("Email is required.")).toBeInTheDocument()
    expect(screen.queryByText("Please enter your email")).toBeNull()
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
    expect(screen.getByText("Email is required.")).toBeInTheDocument()
    expect(screen.getByText("Please enter your email")).toBeInTheDocument()
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

  test("should be read only", () => {
    render(
      <FormControl label="Email" isReadOnly>
        <Input type="email" />
      </FormControl>,
    )
    expect(screen.getByRole("textbox")).toHaveAttribute("aria-readonly", "true")
  })

  test("should render custom indicator", () => {
    render(
      <FormControl
        isRequired
        label="Email"
        requiredIndicator={<div>required</div>}
      >
        <Input type="email" />
      </FormControl>,
    )
    expect(screen.getByText("required")).toBeInTheDocument()
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
