import { a11y, act, fireEvent, render } from "@/test"
import { Editable } from "./"

describe("<Editable />", () => {
  test("Editable renders correctly", async () => {
    await a11y(
      <Editable.Root defaultValue="Some text">
        <Editable.Preview />
        <Editable.Input />
      </Editable.Root>,
    )
  })

  test("should render editable component", () => {
    const { getByTestId } = render(
      <Editable.Root data-testid="Editable" defaultValue="Some text">
        <Editable.Preview data-testid="EditablePreview" />
        <Editable.Input data-testid="EditableInput" />
      </Editable.Root>,
    )
    expect(getByTestId("Editable")).toBeInTheDocument()
    expect(getByTestId("EditablePreview")).toBeInTheDocument()
    expect(getByTestId("EditableInput")).toHaveAttribute("value", "Some text")
  })

  test("should render with preview focusable", () => {
    const { getByTestId } = render(
      <Editable.Root
        data-testid="Editable"
        defaultValue="Some text"
        previewFocusable
      >
        <Editable.Preview data-testid="EditablePreview" />
        <Editable.Input data-testid="EditableInput" />
      </Editable.Root>,
    )
    fireEvent.click(getByTestId("Editable"))
    fireEvent.input(getByTestId("EditableInput"), {
      target: {
        value: "Updated text",
      },
    })
    expect(getByTestId("EditablePreview")).toHaveTextContent("Updated text")
    expect(getByTestId("EditableInput")).toHaveAttribute(
      "value",
      "Updated text",
    )
  })

  test("should render with placeholder", () => {
    const { getByTestId } = render(
      <Editable.Root placeholder="Enter some text">
        <Editable.Preview />
        <Editable.Input data-testid="EditableInput" />
      </Editable.Root>,
    )
    expect(getByTestId("EditableInput")).toHaveAttribute(
      "placeholder",
      "Enter some text",
    )
  })

  test("should disable the input", () => {
    const { getByTestId } = render(
      <Editable.Root defaultValue="Some text" disabled>
        <Editable.Preview />
        <Editable.Input data-testid="EditableInput" />
      </Editable.Root>,
    )
    expect(getByTestId("EditableInput")).toBeDisabled()
  })

  test("should make the input readOnly", () => {
    const { getByTestId } = render(
      <Editable.Root defaultValue="Some text" readOnly>
        <Editable.Preview />
        <Editable.Input data-testid="EditableInput" />
      </Editable.Root>,
    )
    expect(getByTestId("EditableInput")).toHaveAttribute("readonly")
  })

  test("calls onCancel when Escape is pressed", () => {
    const onCancel = vi.fn()
    const { getByTestId } = render(
      <Editable.Root defaultValue="Some text" onCancel={onCancel}>
        <Editable.Preview />
        <Editable.Input data-testid="EditableInput" />
      </Editable.Root>,
    )
    fireEvent.keyDown(getByTestId("EditableInput"), { key: "Escape" })
    expect(onCancel).toHaveBeenCalledWith("Some text")
  })

  test("calls onSubmit when Enter is pressed", () => {
    const onSubmit = vi.fn()
    const { getByTestId } = render(
      <Editable.Root defaultValue="Some text" onSubmit={onSubmit}>
        <Editable.Preview data-testid="EditablePreview" />
        <Editable.Input data-testid="EditableInput" />
      </Editable.Root>,
    )
    fireEvent.focus(getByTestId("EditablePreview"))
    fireEvent.keyDown(getByTestId("EditableInput"), { key: "Enter" })
    expect(onSubmit).toHaveBeenCalledWith("Some text")
  })

  test("does not call onSubmit when Enter is pressed with Shift or Meta", () => {
    const onSubmit = vi.fn()
    const { getByTestId } = render(
      <Editable.Root defaultValue="Some text" onSubmit={onSubmit}>
        <Editable.Preview />
        <Editable.Input data-testid="EditableInput" />
      </Editable.Root>,
    )
    fireEvent.keyDown(getByTestId("EditableInput"), {
      key: "Enter",
      shiftKey: true,
    })
    fireEvent.keyDown(getByTestId("EditableInput"), {
      key: "Enter",
      metaKey: true,
    })
    expect(onSubmit).not.toHaveBeenCalled()
  })

  test("calls onChange when input value changes", () => {
    const onChange = vi.fn()
    const { getByTestId } = render(
      <Editable.Root defaultValue="Some text" onChange={onChange}>
        <Editable.Preview />
        <Editable.Input data-testid="EditableInput" />
      </Editable.Root>,
    )
    fireEvent.change(getByTestId("EditableInput"), {
      target: { value: "New text" },
    })
    expect(onChange).toHaveBeenCalledWith("New text")
  })

  test("focuses out of the input when editing ends", () => {
    const { getByTestId } = render(
      <Editable.Root defaultValue="Some text" selectAllOnFocus>
        <Editable.Preview data-testid="EditablePreview" />
        <Editable.Input data-testid="EditableInput" />
      </Editable.Root>,
    )
    const inputElement = getByTestId("EditableInput")
    fireEvent.focus(getByTestId("EditablePreview"))
    fireEvent.keyDown(inputElement, { key: "Enter" })
    expect(document.activeElement).not.toBe(inputElement)
  })

  test("calls onEdit when editing starts", () => {
    const onEdit = vi.fn()
    const { getByTestId } = render(
      <Editable.Root defaultValue="Some text" onEdit={onEdit}>
        <Editable.Preview data-testid="EditablePreview" />
        <Editable.Input />
      </Editable.Root>,
    )
    fireEvent.focus(getByTestId("EditablePreview"))
    expect(onEdit).toHaveBeenCalledWith()
  })

  test("focus and calls onCancel when Escape is pressed", () => {
    const onCancel = vi.fn()
    const { getByTestId } = render(
      <Editable.Root defaultValue="Some text" onCancel={onCancel}>
        <Editable.Preview data-testid="EditablePreview" />
        <Editable.Input data-testid="EditableInput" />
      </Editable.Root>,
    )
    fireEvent.focus(getByTestId("EditablePreview"))
    fireEvent.keyDown(getByTestId("EditableInput"), { key: "Escape" })
    expect(onCancel).toHaveBeenCalledWith("Some text")
  })

  test("focus and calls onSubmit when Enter is pressed", () => {
    const onCancel = vi.fn()
    const onSubmit = vi.fn()
    const { getByTestId } = render(
      <Editable.Root
        defaultValue="Some text"
        submitOnBlur
        onCancel={onCancel}
        onSubmit={onSubmit}
      >
        <Editable.Preview data-testid="EditablePreview" />
        <Editable.Input data-testid="EditableInput" />
      </Editable.Root>,
    )
    fireEvent.focus(getByTestId("EditablePreview"))
    fireEvent.keyDown(getByTestId("EditableInput"), { key: "Enter" })
    expect(onSubmit).toHaveBeenCalledWith("Some text")
    expect(onCancel).not.toHaveBeenCalled()
  })

  test("calls onSubmit when onBlur is triggered with submitOnBlur", () => {
    const onCancel = vi.fn()
    const onSubmit = vi.fn()
    const { getByTestId } = render(
      <Editable.Root
        defaultValue="Some text"
        submitOnBlur
        onCancel={onCancel}
        onSubmit={onSubmit}
      >
        <Editable.Preview data-testid="EditablePreview" />
        <Editable.Input data-testid="EditableInput" />
      </Editable.Root>,
    )
    act(() => fireEvent.focus(getByTestId("EditablePreview")))
    act(() => fireEvent.blur(getByTestId("EditableInput")))
    expect(onSubmit).toHaveBeenCalledWith("Some text")
    expect(onCancel).not.toHaveBeenCalled()
  })

  test("calls onCancel when onBlur", () => {
    const onCancel = vi.fn()
    const onSubmit = vi.fn()
    const { getByTestId } = render(
      <Editable.Root
        defaultValue="Some text"
        submitOnBlur={false}
        onCancel={onCancel}
        onSubmit={onSubmit}
      >
        <Editable.Preview data-testid="EditablePreview" />
        <Editable.Input data-testid="EditableInput" />
      </Editable.Root>,
    )
    act(() => fireEvent.focus(getByTestId("EditablePreview")))
    act(() => fireEvent.blur(getByTestId("EditableInput")))
    expect(onSubmit).not.toHaveBeenCalled()
    expect(onCancel).toHaveBeenCalledWith("Some text")
  })

  test("initially in correct edit mode", () => {
    const { getByTestId } = render(
      <Editable.Root
        data-testid="Editable"
        defaultValue="Some text"
        startWithEditView
      >
        <Editable.Preview data-testid="EditablePreview" />
        <Editable.Input data-testid="EditableInput" />
      </Editable.Root>,
    )
    expect(getByTestId("EditableInput")).not.toHaveAttribute("hidden")
  })
})

describe("<EditableTextarea />", () => {
  test("renders correctly", () => {
    const { getByTestId } = render(
      <Editable.Root defaultValue="Some text">
        <Editable.Textarea data-testid="EditableTextarea" />
      </Editable.Root>,
    )
    const textarea = getByTestId("EditableTextarea")
    expect(textarea).toBeInTheDocument()
    expect(textarea).toHaveValue("Some text")
  })

  test("applies custom className", () => {
    const { getByTestId } = render(
      <Editable.Root defaultValue="Some text">
        <Editable.Textarea
          className="custom-class"
          data-testid="EditableTextarea"
        />
      </Editable.Root>,
    )
    const textarea = getByTestId("EditableTextarea")
    expect(textarea).toHaveClass("custom-class")
  })
})
