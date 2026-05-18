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

  test("renders header with title prop", () => {
    render(<Form.Root data-testid="root" title="My Form" />)

    const title = screen.getByText("My Form")
    expect(title).toBeInTheDocument()
    expect(title.tagName).toBe("H3")
  })

  test("renders header with description prop", () => {
    render(<Form.Root data-testid="root" description="Form description" />)

    const description = screen.getByText("Form description")
    expect(description).toBeInTheDocument()
    expect(description.tagName).toBe("P")
  })

  test("renders footer with submitButton prop", () => {
    render(<Form.Root data-testid="root" submitButton="Submit" />)

    const submit = screen.getByText("Submit")
    expect(submit).toBeInTheDocument()
    expect(submit.tagName).toBe("BUTTON")
  })

  test("renders header with both title and description props", () => {
    render(<Form.Root description="Form description" title="My Form" />)

    expect(screen.getByText("My Form")).toBeInTheDocument()
    expect(screen.getByText("Form description")).toBeInTheDocument()
  })
})
