import { filterVisuallyHidden } from "#test"
import { a11y, render } from "#test/browser"
import { fireEvent, screen } from "@testing-library/react"
import { Field } from "."
import { Form } from "../form"
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

  test("Field sets `className` correctly", async () => {
    const { rerender } = await render(
      <Field.Root data-testid="root">
        <Field.Label data-testid="label">Label</Field.Label>
        <Field.HelperMessage data-testid="helper">Helper</Field.HelperMessage>
        <Field.ErrorMessage data-testid="error">Error</Field.ErrorMessage>
      </Field.Root>,
    )

    expect(screen.getByTestId("root")).toHaveClass("ui-field__root")
    expect(screen.getByTestId("label")).toHaveClass("ui-field__label")
    expect(screen.getByTestId("helper")).toHaveClass("ui-field__helper-message")

    await rerender(
      <Field.Root data-testid="root" invalid>
        <Field.Label data-testid="label">Label</Field.Label>
        <Field.HelperMessage data-testid="helper">Helper</Field.HelperMessage>
        <Field.ErrorMessage data-testid="error">Error</Field.ErrorMessage>
      </Field.Root>,
    )
    expect(screen.getByTestId("error")).toHaveClass("ui-field__error-message")
  })

  test("Field renders HTML tag correctly", async () => {
    const { rerender } = await render(
      <Field.Root data-testid="root">
        <Field.Label>Label</Field.Label>
        <Field.HelperMessage>Helper</Field.HelperMessage>
        <Field.ErrorMessage>Error</Field.ErrorMessage>
      </Field.Root>,
    )

    expect(screen.getByTestId("root").tagName).toBe("DIV")
    expect(screen.getByText("Label").tagName).toBe("LABEL")
    expect(screen.getByText("Helper").tagName).toBe("SPAN")

    await rerender(
      <Field.Root data-testid="root" invalid>
        <Field.Label>Label</Field.Label>
        <Field.HelperMessage>Helper</Field.HelperMessage>
        <Field.ErrorMessage>Error</Field.ErrorMessage>
      </Field.Root>,
    )
    expect(screen.getByText("Error").tagName).toBe("SPAN")
  })

  test("should render form control", async () => {
    await render(
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

  test("should render invalid form control", async () => {
    await render(
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

  test("should be hidden helperMessage", async () => {
    await render(
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

  test("should be appeared helperMessage", async () => {
    await render(
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

  test("should be required", async () => {
    await render(
      <Field.Root label="Email" required>
        <Input type="email" />
      </Field.Root>,
    )
    expect(screen.getByRole("textbox")).toBeRequired()
  })

  test("should be disabled", async () => {
    await render(
      <Field.Root disabled label="Email">
        <Input type="email" />
      </Field.Root>,
    )
    expect(screen.getByRole("textbox")).toBeDisabled()
  })

  test("should be readonly", async () => {
    await render(
      <Field.Root label="Email" readOnly>
        <Input type="email" />
      </Field.Root>,
    )
    expect(screen.getByRole("textbox")).toHaveAttribute("aria-readonly", "true")
  })

  test("should render custom indicator *", async () => {
    await render(
      <Field.Root label="Email" required>
        <Input type="email" />
      </Field.Root>,
    )
    expect(screen.getByText("*")).toBeInTheDocument()
  })

  test("should render custom indicator text", async () => {
    await render(
      <Field.Root label="Email" required requiredIndicator="required">
        <Input type="email" />
      </Field.Root>,
    )
    expect(screen.getByText("required")).toBeInTheDocument()
  })

  test("should render custom indicator jsx", async () => {
    await render(
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

  test("should render custom optional indicator", async () => {
    await render(
      <Field.Root
        label="Email"
        optionalIndicator={<div data-testid="optional">optional</div>}
      >
        <Input type="email" />
      </Field.Root>,
    )
    expect(screen.getByTestId("optional")).toHaveTextContent("optional")
  })

  test("should render aria-describedby with HelperMessage", async () => {
    await render(
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

  test("should inherit object-based disabled from Form context", async () => {
    await render(
      <Form.Root disabled={{ email: true }}>
        <Field.Root name="email" label="Email">
          <Input type="email" />
        </Field.Root>
      </Form.Root>,
    )
    expect(screen.getByRole("textbox")).toBeDisabled()
  })

  test("should inherit object-based invalid from Form context", async () => {
    await render(
      <Form.Root invalid={{ email: true }}>
        <Field.Root name="email" label="Email">
          <Input type="email" />
        </Field.Root>
      </Form.Root>,
    )
    expect(screen.getByRole("textbox")).toBeInvalid()
  })

  test("should inherit object-based readOnly from Form context", async () => {
    await render(
      <Form.Root readOnly={{ email: true }}>
        <Field.Root name="email" label="Email">
          <Input type="email" />
        </Field.Root>
      </Form.Root>,
    )
    expect(screen.getByRole("textbox")).toHaveAttribute("aria-readonly", "true")
  })

  test("should inherit object-based required from Form context", async () => {
    await render(
      <Form.Root required={{ email: true }}>
        <Field.Root name="email" label="Email">
          <Input type="email" />
        </Field.Root>
      </Form.Root>,
    )
    expect(screen.getByRole("textbox")).toBeRequired()
  })

  test("should inherit object-based replace from Form context", async () => {
    await render(
      <Form.Root
        errorMessage={{ email: "Email is required." }}
        helperMessage={{ email: "Please enter your email" }}
        invalid={{ email: true }}
        replace={{ email: true }}
      >
        <Field.Root name="email" label="Email">
          <Input type="email" />
        </Field.Root>
      </Form.Root>,
    )
    expect(
      screen.getByText(filterVisuallyHidden("Email is required.")),
    ).toBeInTheDocument()
    expect(
      screen.queryByText(filterVisuallyHidden("Please enter your email")),
    ).not.toBeVisible()
  })

  test("should inherit object-based form flags via input name", async () => {
    await render(
      <Form.Root
        disabled={{ email: true }}
        invalid={{ email: true }}
        readOnly={{ email: true }}
        required={{ email: true }}
      >
        <Field.Root label="Email">
          <Input type="email" name="email" />
        </Field.Root>
      </Form.Root>,
    )

    const input = screen.getByRole("textbox")
    expect(input).toBeDisabled()
    expect(input).toHaveAttribute("aria-invalid", "true")
    expect(input).toHaveAttribute("aria-readonly", "true")
    expect(input).toBeRequired()
  })

  test("should inherit scalar form flags via input name", async () => {
    await render(
      <Form.Root disabled invalid readOnly required>
        <Field.Root label="Email">
          <Input type="email" name="email" />
        </Field.Root>
      </Form.Root>,
    )

    const input = screen.getByRole("textbox")
    expect(input).toBeDisabled()
    expect(input).toHaveAttribute("aria-invalid", "true")
    expect(input).toHaveAttribute("aria-readonly", "true")
    expect(input).toBeRequired()
  })

  test("should set focused state on focus and blur", async () => {
    await render(
      <Field.Root data-testid="root" label="Email">
        <Input type="email" />
      </Field.Root>,
    )
    const input = screen.getByRole("textbox")
    const root = screen.getByTestId("root")

    fireEvent.focus(input)
    expect(root).toHaveAttribute("data-focus")

    fireEvent.blur(input)
    expect(root).not.toHaveAttribute("data-focus")
  })
})
