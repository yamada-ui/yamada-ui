import { Input } from "@yamada-ui/react"
import { a11y, render, screen } from "@yamada-ui/test"
import { FormControl } from "../src"

describe("<FormControl />", () => {
  test("FormControl renders correctly", async () => {
    const { container } = render(<FormControl />)
    await a11y(container)
  })

  test("should render form control", () => {
    render(
      <FormControl label="Email" helperMessage="Please enter your email">
        <Input type="email" />
      </FormControl>,
    )
    expect(screen.getByText("Email")).toBeInTheDocument()
    expect(screen.getByText("Please enter your email")).toBeInTheDocument()
  })

  test("should render invalid form control", () => {
    render(
      <FormControl label="Email" isInvalid errorMessage="Email is required.">
        <Input type="email" />
      </FormControl>,
    )
    const formControl = screen.getByRole("group")
    expect(formControl.getElementsByTagName("label")[0]).toHaveAttribute(
      "data-invalid",
    )
    expect(formControl.getElementsByTagName("input")[0]).toHaveAttribute(
      "aria-invalid",
      "true",
    )
    expect(screen.getByText("Email is required.")).toBeInTheDocument()
  })

  test("should switch between message", () => {
    render(
      <>
        <FormControl
          data-testid="FormControl-a"
          label="Email"
          isInvalid
          errorMessage="Email is required."
          isReplace
        >
          <Input type="email" />
        </FormControl>
        <FormControl
          data-testid="FormControl-b"
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
      screen
        .getByTestId("FormControl-a")
        .getElementsByClassName("ui-form__error-message")[0],
    ).toHaveTextContent("Email is required.")
    expect(
      screen
        .getByTestId("FormControl-b")
        .getElementsByClassName("ui-form__helper-message")[0],
    ).toHaveTextContent("Please enter your email")
  })

  test("should be required", () => {
    render(
      <FormControl data-testid="FormControl" label="Email" isRequired>
        <Input type="email" />
      </FormControl>,
    )
    expect(
      screen.getByTestId("FormControl").getElementsByTagName("input")[0],
    ).toHaveAttribute("required")
  })

  test("should be disabled", () => {
    render(
      <FormControl data-testid="FormControl" label="Email" isDisabled>
        <Input type="email" />
      </FormControl>,
    )
    expect(
      screen.getByTestId("FormControl").getElementsByTagName("input")[0],
    ).toHaveAttribute("aria-disabled", "true")
  })

  test("should be read only", () => {
    render(
      <FormControl data-testid="FormControl" label="Email" isReadOnly>
        <Input type="email" />
      </FormControl>,
    )
    expect(
      screen.getByTestId("FormControl").getElementsByTagName("input")[0],
    ).toHaveAttribute("aria-readonly", "true")
  })

  test("should render custom indicator", () => {
    render(
      <FormControl
        isRequired
        label="Email"
        requiredIndicator={<div data-testid="CustomIndicator">required</div>}
      >
        <Input type="email" />
      </FormControl>,
    )
    expect(screen.getByTestId("CustomIndicator")).toBeInTheDocument()
  })

  test("should render custom optional indicator", () => {
    render(
      <FormControl
        label="Email"
        optionalIndicator={<div data-testid="CustomIndicator">optional</div>}
      >
        <Input type="email" />
      </FormControl>,
    )
    expect(screen.getByTestId("CustomIndicator")).toBeInTheDocument()
  })
})
