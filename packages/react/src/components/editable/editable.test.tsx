import { a11y, render, screen } from "#test"
import { Editable } from "./"

describe("<Editable />", () => {
  test("passes a11y checks", async () => {
    await a11y(
      <Editable.Root defaultValue="Some text">
        <Editable.Preview />
        <Editable.Input />
      </Editable.Root>,
    )
  })

  test("renders the input with the default value", () => {
    render(
      <Editable.Root defaultValue="Some text">
        <Editable.Preview />
        <Editable.Input />
      </Editable.Root>,
    )

    expect(screen.getByRole("textbox", { hidden: true })).toHaveAttribute(
      "value",
      "Some text",
    )
  })

  test("renders the input with the given placeholder", () => {
    render(
      <Editable.Root placeholder="Enter some text">
        <Editable.Preview />
        <Editable.Input />
      </Editable.Root>,
    )

    expect(screen.getByRole("textbox", { hidden: true })).toHaveAttribute(
      "placeholder",
      "Enter some text",
    )
  })

  test("marks the input as disabled when `disabled` is set", () => {
    render(
      <Editable.Root defaultValue="Some text" disabled>
        <Editable.Preview />
        <Editable.Input />
      </Editable.Root>,
    )

    expect(screen.getByRole("textbox", { hidden: true })).toBeDisabled()
  })

  test("marks the input as readonly when `readOnly` is set", () => {
    render(
      <Editable.Root defaultValue="Some text" readOnly>
        <Editable.Preview />
        <Editable.Input />
      </Editable.Root>,
    )

    expect(screen.getByRole("textbox", { hidden: true })).toHaveAttribute(
      "readonly",
    )
  })

  test("renders the input visible when `startWithEditView` is set", () => {
    render(
      <Editable.Root defaultValue="Some text" startWithEditView>
        <Editable.Preview />
        <Editable.Input />
      </Editable.Root>,
    )

    expect(screen.getByRole("textbox")).not.toHaveAttribute("hidden")
  })
})

describe("<EditableTextarea />", () => {
  test("renders the textarea with the default value", () => {
    render(
      <Editable.Root defaultValue="Some text" startWithEditView>
        <Editable.Textarea />
      </Editable.Root>,
    )

    expect(screen.getByRole("textbox")).toHaveValue("Some text")
  })

  test("applies a custom className to the textarea", () => {
    render(
      <Editable.Root defaultValue="Some text" startWithEditView>
        <Editable.Textarea className="custom-class" />
      </Editable.Root>,
    )

    expect(screen.getByRole("textbox")).toHaveClass("custom-class")
  })
})

describe("<EditableControl />", () => {
  test("renders with role `group`", () => {
    render(
      <Editable.Root defaultValue="Some text">
        <Editable.Control>
          <Editable.Preview />
          <Editable.Input />
        </Editable.Control>
      </Editable.Root>,
    )

    expect(screen.getByRole("group")).toBeInTheDocument()
  })
})
