import { a11y, fireEvent, render, screen } from "@yamada-ui/test"
import { Editable, EditableInput, EditablePreview } from "../src"

describe("<Editable />", () => {
  test("Editable renders correctly", async () => {
    const { container } = render(
      <Editable defaultValue="Some text">
        <EditablePreview />
        <EditableInput />
      </Editable>,
    )
    await a11y(container)
  })

  test("should render editable component", () => {
    render(
      <Editable data-testid="Editable" defaultValue="Some text">
        <EditablePreview data-testid="EditablePreview" />
        <EditableInput data-testid="EditableInput" />
      </Editable>,
    )
    expect(screen.getByTestId("Editable")).toBeInTheDocument()
    expect(screen.getByTestId("EditablePreview")).toBeInTheDocument()
    expect(screen.getByTestId("EditableInput")).toHaveAttribute(
      "value",
      "Some text",
    )
  })

  test("should render with preview focusable", async () => {
    render(
      <Editable
        data-testid="Editable"
        isPreviewFocusable
        defaultValue="Some text"
      >
        <EditablePreview data-testid="EditablePreview" />
        <EditableInput data-testid="EditableInput" />
      </Editable>,
    )
    fireEvent.click(screen.getByTestId("Editable"))
    fireEvent.input(screen.getByTestId("EditableInput"), {
      target: {
        value: "Updated text",
      },
    })
    expect(screen.getByTestId("EditablePreview")).toHaveTextContent(
      "Updated text",
    )
    expect(screen.getByTestId("EditableInput")).toHaveAttribute(
      "value",
      "Updated text",
    )
  })

  test("should render with placeholder", () => {
    render(
      <Editable placeholder="Enter some text">
        <EditablePreview />
        <EditableInput data-testid="EditableInput" />
      </Editable>,
    )
    expect(screen.getByTestId("EditableInput")).toHaveAttribute(
      "placeholder",
      "Enter some text",
    )
  })

  test("should disable the input", () => {
    render(
      <Editable defaultValue="Some text" isDisabled>
        <EditablePreview />
        <EditableInput data-testid="EditableInput" />
      </Editable>,
    )
    expect(screen.getByTestId("EditableInput")).toBeDisabled()
  })

  test("should make the input readOnly", () => {
    render(
      <Editable defaultValue="Some text" isReadOnly>
        <EditablePreview />
        <EditableInput data-testid="EditableInput" />
      </Editable>,
    )
    expect(screen.getByTestId("EditableInput")).toHaveAttribute("readonly")
  })
})
