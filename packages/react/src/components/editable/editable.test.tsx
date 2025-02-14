import {
  Editable,
  EditableInput,
  EditablePreview,
  EditableTextarea,
  useEditableControl,
} from "."
import { a11y, act, fireEvent, render } from "../../../test"
import { ui } from "../../core"

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

  test("should render with preview focusable", () => {
    const { getByTestId } = render(
      <Editable
        data-testid="Editable"
        defaultValue="Some text"
        previewFocusable
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
    })
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
      <Editable defaultValue="Some text" disabled>
        <EditablePreview />
        <EditableInput data-testid="EditableInput" />
      </Editable>,
    )
    expect(getByTestId("EditableInput")).toBeDisabled()
  })

  test("should make the input readOnly", () => {
    const { getByTestId } = render(
      <Editable defaultValue="Some text" readOnly>
        <EditablePreview />
        <EditableInput data-testid="EditableInput" />
      </Editable>,
    )
    expect(getByTestId("EditableInput")).toHaveAttribute("readonly")
  })

  test("calls onCancel when Escape is pressed", () => {
    const onCancel = vi.fn()
    const { getByTestId } = render(
      <Editable defaultValue="Some text" onCancel={onCancel}>
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
      <Editable defaultValue="Some text" onSubmit={onSubmit}>
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
      <Editable defaultValue="Some text" onSubmit={onSubmit}>
        <EditablePreview />
        <EditableInput data-testid="EditableInput" />
      </Editable>,
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
      <Editable defaultValue="Some text" onChange={onChange}>
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
      <Editable defaultValue="Some text" onEdit={onEdit}>
        <EditablePreview data-testid="EditablePreview" />
        <EditableInput />
      </Editable>,
    )
    fireEvent.focus(getByTestId("EditablePreview"))
    expect(onEdit).toHaveBeenCalledWith()
  })

  test("focus and calls onCancel when Escape is pressed", () => {
    const onCancel = vi.fn()
    const { getByTestId } = render(
      <Editable defaultValue="Some text" onCancel={onCancel}>
        <EditablePreview data-testid="EditablePreview" />
        <EditableInput data-testid="EditableInput" />
      </Editable>,
    )
    fireEvent.focus(getByTestId("EditablePreview"))
    fireEvent.keyDown(getByTestId("EditableInput"), { key: "Escape" })
    expect(onCancel).toHaveBeenCalledWith("Some text")
  })

  test("focus and calls onSubmit when Enter is pressed", () => {
    const onCancel = vi.fn()
    const onSubmit = vi.fn()
    const { getByTestId } = render(
      <Editable
        defaultValue="Some text"
        submitOnBlur
        onCancel={onCancel}
        onSubmit={onSubmit}
      >
        <EditablePreview data-testid="EditablePreview" />
        <EditableInput data-testid="EditableInput" />
      </Editable>,
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
      <Editable
        defaultValue="Some text"
        submitOnBlur
        onCancel={onCancel}
        onSubmit={onSubmit}
      >
        <EditablePreview data-testid="EditablePreview" />
        <EditableInput data-testid="EditableInput" />
      </Editable>,
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
      <Editable
        defaultValue="Some text"
        submitOnBlur={false}
        onCancel={onCancel}
        onSubmit={onSubmit}
      >
        <EditablePreview data-testid="EditablePreview" />
        <EditableInput data-testid="EditableInput" />
      </Editable>,
    )
    act(() => fireEvent.focus(getByTestId("EditablePreview")))
    act(() => fireEvent.blur(getByTestId("EditableInput")))
    expect(onSubmit).not.toHaveBeenCalled()
    expect(onCancel).toHaveBeenCalledWith("Some text")
  })

  test("initially in correct edit mode", () => {
    const { getByTestId } = render(
      <Editable
        data-testid="Editable"
        defaultValue="Some text"
        startWithEditView
      >
        <EditablePreview data-testid="EditablePreview" />
        <EditableInput data-testid="EditableInput" />
      </Editable>,
    )
    expect(getByTestId("EditableInput")).not.toHaveAttribute("hidden")
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
          className="custom-class"
          data-testid="EditableTextarea"
        />
      </Editable>,
    )
    const textarea = getByTestId("EditableTextarea")
    expect(textarea).toHaveClass("custom-class")
  })
})

describe("useEditableControl", () => {
  test("props are applied correctly", () => {
    const onCancel = vi.fn()
    const onSubmit = vi.fn()
    const CustomControls = () => {
      const { getCancelProps, getEditProps, getSubmitProps } =
        useEditableControl()

      return (
        <>
          <ui.button data-testid="edit" {...getEditProps()}>
            Edit
          </ui.button>
          <ui.button data-testid="submit" {...getSubmitProps()}>
            Submit
          </ui.button>
          <ui.button data-testid="cancel" {...getCancelProps()}>
            Cancel
          </ui.button>
        </>
      )
    }
    const { getByTestId } = render(
      <Editable
        previewFocusable={false}
        onCancel={onCancel}
        onSubmit={onSubmit}
      >
        <EditablePreview />
        <EditableInput />
        <CustomControls />
      </Editable>,
    )
    expect(getByTestId("edit")).toHaveAttribute("type", "button")
    expect(getByTestId("submit")).toHaveAttribute("type", "button")
    expect(getByTestId("cancel")).toHaveAttribute("type", "button")
    act(() => fireEvent.click(getByTestId("submit")))
    act(() => fireEvent.click(getByTestId("cancel")))
    expect(onSubmit).toHaveBeenCalledWith("")
    expect(onCancel).toHaveBeenCalledWith("")
  })

  test("switches to edit mode correctly", () => {
    const CustomControls = () => {
      const { editing, getCancelProps, getEditProps, getSubmitProps } =
        useEditableControl()

      return editing ? (
        <>
          <ui.button data-testid="submit" {...getSubmitProps()}>
            Submit
          </ui.button>
          <ui.button data-testid="cancel" {...getCancelProps()}>
            Cancel
          </ui.button>
        </>
      ) : (
        <ui.button data-testid="edit" {...getEditProps()}>
          Edit
        </ui.button>
      )
    }
    const { getByTestId } = render(
      <Editable previewFocusable={false}>
        <EditablePreview />
        <EditableInput />
        <CustomControls />
      </Editable>,
    )
    expect(getByTestId("edit")).toBeInTheDocument()
    act(() => fireEvent.click(getByTestId("edit")))
    expect(getByTestId("submit")).toBeInTheDocument()
    expect(getByTestId("cancel")).toBeInTheDocument()
  })
})
