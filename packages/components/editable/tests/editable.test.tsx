import { a11y, fireEvent, render } from "@yamada-ui/test"
import {
  Editable,
  EditableInput,
  EditablePreview,
  EditableTextarea,
} from "../src"

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
    const { getByTestId } = render(
      <Editable data-testid="Editable" defaultValue="Some text">
        <EditablePreview data-testid="EditablePreview" />
        <EditableInput data-testid="EditableInput" />
      </Editable>,
    )
    expect(getByTestId("Editable")).toBeInTheDocument()
    expect(getByTestId("EditablePreview")).toBeInTheDocument()
    expect(getByTestId("EditableInput")).toHaveAttribute("value", "Some text")
  })

  test("should render with preview focusable", async () => {
    const { getByTestId } = render(
      <Editable
        data-testid="Editable"
        isPreviewFocusable
        defaultValue="Some text"
      >
        <EditablePreview data-testid="EditablePreview" />
        <EditableInput data-testid="EditableInput" />
      </Editable>,
    )
    fireEvent.click(getByTestId("Editable"))
    fireEvent.input(getByTestId("EditableInput"), {
      target: {
        value: "Updated text",
      },
    }),
      expect(getByTestId("EditablePreview")).toHaveTextContent("Updated text")
    expect(getByTestId("EditableInput")).toHaveAttribute(
      "value",
      "Updated text",
    )
  })

  test("should render with placeholder", () => {
    const { getByTestId } = render(
      <Editable placeholder="Enter some text">
        <EditablePreview />
        <EditableInput data-testid="EditableInput" />
      </Editable>,
    )
    expect(getByTestId("EditableInput")).toHaveAttribute(
      "placeholder",
      "Enter some text",
    )
  })

  test("should disable the input", () => {
    const { getByTestId } = render(
      <Editable defaultValue="Some text" isDisabled>
        <EditablePreview />
        <EditableInput data-testid="EditableInput" />
      </Editable>,
    )
    expect(getByTestId("EditableInput")).toBeDisabled()
  })

  test("should make the input readOnly", () => {
    const { getByTestId } = render(
      <Editable defaultValue="Some text" isReadOnly>
        <EditablePreview />
        <EditableInput data-testid="EditableInput" />
      </Editable>,
    )
    expect(getByTestId("EditableInput")).toHaveAttribute("readonly")
  })

  test("calls onCancel when Escape is pressed", () => {
    const onCancel = vi.fn()
    const { getByTestId } = render(
      <Editable onCancel={onCancel} defaultValue="Some text">
        <EditablePreview />
        <EditableInput data-testid="EditableInput" />
      </Editable>,
    )
    fireEvent.keyDown(getByTestId("EditableInput"), { key: "Escape" })
    expect(onCancel).toHaveBeenCalledWith("Some text")
  })

  test("calls onSubmit when Enter is pressed", () => {
    const onSubmit = vi.fn()
    const { getByTestId } = render(
      <Editable onSubmit={onSubmit} defaultValue="Some text">
        <EditablePreview data-testid="EditablePreview" />
        <EditableInput data-testid="EditableInput" />
      </Editable>,
    )
    fireEvent.focus(getByTestId("EditablePreview"))
    fireEvent.keyDown(getByTestId("EditableInput"), { key: "Enter" })
    expect(onSubmit).toHaveBeenCalledWith("Some text")
  })

  test("does not call onSubmit when Enter is pressed with Shift or Meta", () => {
    const onSubmit = vi.fn()
    const { getByTestId } = render(
      <Editable onSubmit={onSubmit} defaultValue="Some text">
        <EditablePreview />
        <EditableInput data-testid="EditableInput" />
      </Editable>,
    )
    fireEvent.keyDown(getByTestId("EditableInput"), {
      key: "Enter",
      shiftKey: true,
    }),
      fireEvent.keyDown(getByTestId("EditableInput"), {
        key: "Enter",
        metaKey: true,
      }),
      expect(onSubmit).not.toHaveBeenCalled()
  })

  test("calls onChange when input value changes", () => {
    const onChange = vi.fn()
    const { getByTestId } = render(
      <Editable onChange={onChange} defaultValue="Some text">
        <EditablePreview />
        <EditableInput data-testid="EditableInput" />
      </Editable>,
    )
    fireEvent.change(getByTestId("EditableInput"), {
      target: { value: "New text" },
    })
    expect(onChange).toHaveBeenCalledWith("New text")
  })

  test("focuses out of the input when editing ends", () => {
    const { getByTestId } = render(
      <Editable defaultValue="Some text" selectAllOnFocus>
        <EditablePreview data-testid="EditablePreview" />
        <EditableInput data-testid="EditableInput" />
      </Editable>,
    )
    const inputElement = getByTestId("EditableInput")
    fireEvent.focus(getByTestId("EditablePreview"))
    fireEvent.keyDown(inputElement, { key: "Enter" })
    expect(document.activeElement).not.toBe(inputElement)
  })

  test("calls onEdit when editing starts", () => {
    const onEdit = vi.fn()
    const { getByTestId } = render(
      <Editable onEdit={onEdit} defaultValue="Some text">
        <EditablePreview data-testid="EditablePreview" />
        <EditableInput />
      </Editable>,
    )
    fireEvent.focus(getByTestId("EditablePreview"))
    expect(onEdit).toHaveBeenCalled()
  })

  test("calls onCancel when Escape is pressed", () => {
    const onCancel = vi.fn()
    const { getByTestId } = render(
      <Editable onCancel={onCancel} defaultValue="Some text">
        <EditablePreview data-testid="EditablePreview" />
        <EditableInput data-testid="EditableInput" />
      </Editable>,
    )
    fireEvent.focus(getByTestId("EditablePreview"))
    fireEvent.keyDown(getByTestId("EditableInput"), { key: "Escape" })
    expect(onCancel).toHaveBeenCalled()
  })

  test("calls onSubmit when onBlur is triggered with submitOnBlur", () => {
    const onCancel = vi.fn()
    const onSubmit = vi.fn()
    const { getByTestId } = render(
      <Editable
        onCancel={onCancel}
        onSubmit={onSubmit}
        submitOnBlur
        defaultValue="Some text"
      >
        <EditablePreview data-testid="EditablePreview" />
        <EditableInput data-testid="EditableInput" />
      </Editable>,
    )
    fireEvent.click(getByTestId("EditablePreview"))
    fireEvent.keyDown(getByTestId("EditableInput"), { key: "Enter" })
    expect(onSubmit).toHaveBeenCalled()
    expect(onCancel).not.toHaveBeenCalled()
  })
})

describe("<EditableTextarea />", () => {
  test("renders correctly", () => {
    const { getByTestId } = render(
      <Editable defaultValue="Some text">
        <EditableTextarea data-testid="EditableTextarea" />
      </Editable>,
    )
    const textarea = getByTestId("EditableTextarea")
    expect(textarea).toBeInTheDocument()
    expect(textarea).toHaveValue("Some text")
  })

  test("applies custom className", () => {
    const { getByTestId } = render(
      <Editable defaultValue="Some text">
        <EditableTextarea
          data-testid="EditableTextarea"
          className="custom-class"
        />
      </Editable>,
    )
    const textarea = getByTestId("EditableTextarea")
    expect(textarea).toHaveClass("custom-class")
  })
})
