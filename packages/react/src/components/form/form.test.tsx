import { a11y, render, screen } from "#test"
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

  test("sets `className` correctly", () => {
    render(
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

    expect(screen.getByTestId("root")).toHaveClass("ui-form__root")
    expect(screen.getByTestId("header")).toHaveClass("ui-form__header")
    expect(screen.getByTestId("title")).toHaveClass("ui-form__title")
    expect(screen.getByTestId("description")).toHaveClass(
      "ui-form__description",
    )
    expect(screen.getByTestId("body")).toHaveClass("ui-form__body")
    expect(screen.getByTestId("group")).toHaveClass("ui-form__group")
    expect(screen.getByTestId("footer")).toHaveClass("ui-form__footer")
    expect(screen.getByTestId("submit-button")).toHaveClass(
      "ui-form__submit-button",
    )
  })

  test("renders HTML tag correctly", () => {
    render(
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

    expect(screen.getByTestId("root").tagName).toBe("FORM")
    expect(screen.getByTestId("header").tagName).toBe("DIV")
    expect(screen.getByTestId("title").tagName).toBe("H3")
    expect(screen.getByTestId("description").tagName).toBe("P")
    expect(screen.getByTestId("body").tagName).toBe("DIV")
    expect(screen.getByTestId("group").tagName).toBe("DIV")
    expect(screen.getByTestId("footer").tagName).toBe("DIV")
    expect(screen.getByTestId("submit-button").tagName).toBe("BUTTON")
  })
})
