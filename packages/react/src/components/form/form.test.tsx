import { a11y, page, render } from "#test/browser"
import { Field } from "../field"
import { Input } from "../input"
import { Form } from "./"

describe("<Form />", () => {
  test("renders component correctly", async () => {
    await a11y(
      <Form.Root required={{ name: true, email: true }}>
        <Form.Header>
          <Form.Title>Create an account</Form.Title>
          <Form.Description>Create an account to get started.</Form.Description>
        </Form.Header>

        <Form.Body>
          <Form.Group>
            <Field.Root name="name" label="Name">
              <Input placeholder="Hirotomo Yamada" />
            </Field.Root>

            <Field.Root name="email" label="Email address">
              <Input placeholder="hirotomo@yamada-ui.com" />
            </Field.Root>
          </Form.Group>
        </Form.Body>

        <Form.Footer>
          <Form.SubmitButton>Submit</Form.SubmitButton>
        </Form.Footer>
      </Form.Root>,
    )
  })

  test("sets `displayName` correctly", () => {
    expect(Form.Root.displayName).toBe("FormRoot")
    expect(Form.Header.displayName).toBe("FormHeader")
    expect(Form.Body.displayName).toBe("FormBody")
    expect(Form.Footer.displayName).toBe("FormFooter")
    expect(Form.Title.displayName).toBe("FormTitle")
    expect(Form.Description.displayName).toBe("FormDescription")
    expect(Form.SubmitButton.displayName).toBe("FormSubmitButton")
  })

  test("sets `className` correctly", async () => {
    await render(
      <Form.Root data-testid="root">
        <Form.Header data-testid="header">
          <Form.Title data-testid="title">Create an account</Form.Title>
          <Form.Description data-testid="description">
            Create an account to get started.
          </Form.Description>
        </Form.Header>

        <Form.Body data-testid="body">
          <Form.Group data-testid="group" />
        </Form.Body>

        <Form.Footer data-testid="footer">
          <Form.SubmitButton data-testid="submit-button">
            Submit
          </Form.SubmitButton>
        </Form.Footer>
      </Form.Root>,
    )

    await expect.element(page.getByTestId("root")).toHaveClass("ui-form__root")
    await expect
      .element(page.getByTestId("header"))
      .toHaveClass("ui-form__header")
    await expect
      .element(page.getByTestId("title"))
      .toHaveClass("ui-form__title")
    await expect
      .element(page.getByTestId("description"))
      .toHaveClass("ui-form__description")
    await expect.element(page.getByTestId("body")).toHaveClass("ui-form__body")
    await expect
      .element(page.getByTestId("group"))
      .toHaveClass("ui-form__group")
    await expect
      .element(page.getByTestId("footer"))
      .toHaveClass("ui-form__footer")
    await expect
      .element(page.getByTestId("submit-button"))
      .toHaveClass("ui-form__submit-button")
  })

  test("renders header with title prop", async () => {
    await render(<Form.Root data-testid="root" title="My Form" />)

    await expect.element(page.getByText("My Form")).toBeInTheDocument()
    expect(page.getByText("My Form").element().tagName).toBe("H3")
  })

  test("renders header with description prop", async () => {
    await render(
      <Form.Root data-testid="root" description="Form description" />,
    )

    await expect.element(page.getByText("Form description")).toBeInTheDocument()
    expect(page.getByText("Form description").element().tagName).toBe("P")
  })

  test("renders header with both title and description props", async () => {
    await render(
      <Form.Root
        data-testid="root"
        description="Form description"
        title="My Form"
      />,
    )

    await expect.element(page.getByText("My Form")).toBeInTheDocument()
    await expect.element(page.getByText("Form description")).toBeInTheDocument()
  })

  test("renders footer with submitButton prop", async () => {
    await render(<Form.Root data-testid="root" submitButton="Submit" />)

    await expect.element(page.getByText("Submit")).toBeInTheDocument()
    expect(page.getByText("Submit").element().tagName).toBe("BUTTON")
  })

  test("renders HTML tag correctly", async () => {
    await render(
      <Form.Root data-testid="root">
        <Form.Header data-testid="header">
          <Form.Title data-testid="title">Create an account</Form.Title>
          <Form.Description data-testid="description">
            Create an account to get started.
          </Form.Description>
        </Form.Header>

        <Form.Body data-testid="body">
          <Form.Group data-testid="group" />
        </Form.Body>

        <Form.Footer data-testid="footer">
          <Form.SubmitButton data-testid="submit-button">
            Submit
          </Form.SubmitButton>
        </Form.Footer>
      </Form.Root>,
    )

    expect(page.getByTestId("root").element().tagName).toBe("FORM")
    expect(page.getByTestId("header").element().tagName).toBe("DIV")
    expect(page.getByTestId("title").element().tagName).toBe("H3")
    expect(page.getByTestId("description").element().tagName).toBe("P")
    expect(page.getByTestId("body").element().tagName).toBe("DIV")
    expect(page.getByTestId("group").element().tagName).toBe("DIV")
    expect(page.getByTestId("footer").element().tagName).toBe("DIV")
    expect(page.getByTestId("submit-button").element().tagName).toBe("BUTTON")
  })
})
