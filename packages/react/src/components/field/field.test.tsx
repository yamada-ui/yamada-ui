import { a11y, page, render } from "#test/browser"
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

    await expect.element(page.getByTestId("root")).toHaveClass("ui-field__root")
    await expect
      .element(page.getByTestId("label"))
      .toHaveClass("ui-field__label")
    await expect
      .element(page.getByTestId("helper"))
      .toHaveClass("ui-field__helper-message")

    rerender(
      <Field.Root data-testid="root" invalid>
        <Field.Label data-testid="label">Label</Field.Label>
        <Field.HelperMessage data-testid="helper">Helper</Field.HelperMessage>
        <Field.ErrorMessage data-testid="error">Error</Field.ErrorMessage>
      </Field.Root>,
    )

    await expect
      .element(page.getByTestId("error"))
      .toHaveClass("ui-field__error-message")
  })

  test("Field renders HTML tag correctly", async () => {
    const { rerender } = await render(
      <Field.Root data-testid="root">
        <Field.Label>Label</Field.Label>
        <Field.HelperMessage>Helper</Field.HelperMessage>
        <Field.ErrorMessage>Error</Field.ErrorMessage>
      </Field.Root>,
    )

    expect(page.getByTestId("root").element().tagName).toBe("DIV")
    expect(page.getByText("Label").element().tagName).toBe("LABEL")
    expect(page.getByText("Helper").element().tagName).toBe("SPAN")

    rerender(
      <Field.Root data-testid="root" invalid>
        <Field.Label>Label</Field.Label>
        <Field.HelperMessage>Helper</Field.HelperMessage>
        <Field.ErrorMessage>Error</Field.ErrorMessage>
      </Field.Root>,
    )

    expect(page.getByText("Error").element().tagName).toBe("SPAN")
  })

  test("should render form control", async () => {
    await render(
      <Field.Root helperMessage="Please enter your email" label="Email">
        <Input type="email" />
      </Field.Root>,
    )

    await expect.element(page.getByText(/^Email$/)).toBeVisible()
    await expect
      .element(page.getByText("Please enter your email"))
      .toBeVisible()
    await expect.element(page.getByRole("textbox")).toBeVisible()
  })

  test("should render invalid form control", async () => {
    await render(
      <Field.Root errorMessage="Email is required." invalid label="Email">
        <Input type="email" />
      </Field.Root>,
    )

    await expect
      .element(page.getByText(/^Email$/))
      .toHaveAttribute("data-invalid")
    await expect.element(page.getByRole("textbox")).toBeInvalid()
    await expect.element(page.getByText("Email is required.")).toBeVisible()
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

    await expect.element(page.getByText("Email is required.")).toBeVisible()
    await expect
      .element(page.getByText("Please enter your email"))
      .not.toBeVisible()
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

    await expect.element(page.getByText("Email is required.")).toBeVisible()
    await expect
      .element(page.getByText("Please enter your email"))
      .toBeVisible()
  })

  test("should be required", async () => {
    await render(
      <Field.Root label="Email" required>
        <Input type="email" />
      </Field.Root>,
    )

    await expect.element(page.getByRole("textbox")).toBeRequired()
  })

  test("should be disabled", async () => {
    await render(
      <Field.Root disabled label="Email">
        <Input type="email" />
      </Field.Root>,
    )

    await expect.element(page.getByRole("textbox")).toBeDisabled()
  })

  test("should be readonly", async () => {
    await render(
      <Field.Root label="Email" readOnly>
        <Input type="email" />
      </Field.Root>,
    )

    await expect
      .element(page.getByRole("textbox"))
      .toHaveAttribute("aria-readonly", "true")
  })

  test("should render custom indicator *", async () => {
    await render(
      <Field.Root label="Email" required>
        <Input type="email" />
      </Field.Root>,
    )

    await expect.element(page.getByText("*")).toBeVisible()
  })

  test("should render custom indicator text", async () => {
    await render(
      <Field.Root label="Email" required requiredIndicator="required">
        <Input type="email" />
      </Field.Root>,
    )

    await expect.element(page.getByText("required")).toBeVisible()
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

    await expect
      .element(page.getByTestId("required"))
      .toHaveTextContent("required")
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

    await expect
      .element(page.getByTestId("optional"))
      .toHaveTextContent("optional")
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

    await expect
      .element(page.getByText("We'll never share your email."))
      .toBeVisible()
    await expect
      .element(
        page.getByRole("textbox", {
          description: "We'll never share your email.",
        }),
      )
      .toBeVisible()
  })

  test("should inherit object-based disabled from Form context", async () => {
    await render(
      <Form.Root disabled={{ email: true }}>
        <Field.Root name="email" label="Email">
          <Input type="email" />
        </Field.Root>
      </Form.Root>,
    )

    await expect.element(page.getByRole("textbox")).toBeDisabled()
  })

  test("should inherit object-based invalid from Form context", async () => {
    await render(
      <Form.Root invalid={{ email: true }}>
        <Field.Root name="email" label="Email">
          <Input type="email" />
        </Field.Root>
      </Form.Root>,
    )

    await expect.element(page.getByRole("textbox")).toBeInvalid()
  })

  test("should inherit object-based readOnly from Form context", async () => {
    await render(
      <Form.Root readOnly={{ email: true }}>
        <Field.Root name="email" label="Email">
          <Input type="email" />
        </Field.Root>
      </Form.Root>,
    )

    await expect
      .element(page.getByRole("textbox"))
      .toHaveAttribute("aria-readonly", "true")
  })

  test("should inherit object-based required from Form context", async () => {
    await render(
      <Form.Root required={{ email: true }}>
        <Field.Root name="email" label="Email">
          <Input type="email" />
        </Field.Root>
      </Form.Root>,
    )

    await expect.element(page.getByRole("textbox")).toBeRequired()
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

    await expect.element(page.getByText("Email is required.")).toBeVisible()
    await expect
      .element(page.getByText("Please enter your email"))
      .not.toBeVisible()
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

    const input = page.getByRole("textbox")

    await expect.element(input).toBeDisabled()
    await expect.element(input).toHaveAttribute("aria-invalid", "true")
    await expect.element(input).toHaveAttribute("aria-readonly", "true")
    await expect.element(input).toBeRequired()
  })

  test("should inherit scalar form flags via input name", async () => {
    await render(
      <Form.Root disabled invalid readOnly required>
        <Field.Root label="Email">
          <Input type="email" name="email" />
        </Field.Root>
      </Form.Root>,
    )

    const input = page.getByRole("textbox")

    await expect.element(input).toBeDisabled()
    await expect.element(input).toHaveAttribute("aria-invalid", "true")
    await expect.element(input).toHaveAttribute("aria-readonly", "true")
    await expect.element(input).toBeRequired()
  })

  test("should set focused state on focus and blur", async () => {
    await render(
      <Field.Root data-testid="root" label="Email">
        <Input type="email" />
      </Field.Root>,
    )

    const input = page.getByRole("textbox")
    const root = page.getByTestId("root")

    input.element().focus()
    await expect.element(root).toHaveAttribute("data-focus")

    input.element().blur()
    await expect.element(root).not.toHaveAttribute("data-focus")
  })
})
