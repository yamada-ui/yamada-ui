import { a11y, render } from "#test/browser"
import { Editable } from "./"

describe("<Editable />", () => {
  test("renders component correctly", async () => {
    await a11y(
      <Editable.Root defaultValue="Some text">
        <Editable.Preview />
        <Editable.Input />
      </Editable.Root>,
    )
  })

  test("should render editable component", async () => {
    const { getByTestId } = await render(
      <Editable.Root data-testid="Editable" defaultValue="Some text">
        <Editable.Preview data-testid="EditablePreview" />
        <Editable.Input data-testid="EditableInput" />
      </Editable.Root>,
    )

    await expect.element(getByTestId("Editable")).toBeVisible()
    await expect.element(getByTestId("EditablePreview")).toBeVisible()
    await expect.element(getByTestId("EditableInput")).toHaveValue("Some text")
  })

  test("should render with preview focusable", async () => {
    const { getByTestId, user } = await render(
      <Editable.Root
        data-testid="Editable"
        defaultValue="Some text"
        previewFocusable
      >
        <Editable.Preview data-testid="EditablePreview" />
        <Editable.Input data-testid="EditableInput" />
      </Editable.Root>,
    )

    const preview = getByTestId("EditablePreview")
    const input = getByTestId("EditableInput")

    await user.click(preview)
    await expect.element(input).toBeVisible()
    await expect.element(input).toHaveFocus()
    await input.fill("Updated text")

    await expect.element(preview).toHaveTextContent("Updated text")
    await expect.element(input).toHaveValue("Updated text")
  })

  test("should render with placeholder", async () => {
    const { getByTestId } = await render(
      <Editable.Root placeholder="Enter some text">
        <Editable.Preview />
        <Editable.Input data-testid="EditableInput" />
      </Editable.Root>,
    )

    await expect
      .element(getByTestId("EditableInput"))
      .toHaveAttribute("placeholder", "Enter some text")
  })

  test("should disable the input", async () => {
    const { getByTestId } = await render(
      <Editable.Root defaultValue="Some text" disabled>
        <Editable.Preview />
        <Editable.Input data-testid="EditableInput" />
      </Editable.Root>,
    )

    await expect.element(getByTestId("EditableInput")).toBeDisabled()
  })

  test("should make the input readOnly", async () => {
    const { getByTestId } = await render(
      <Editable.Root defaultValue="Some text" readOnly>
        <Editable.Preview />
        <Editable.Input data-testid="EditableInput" />
      </Editable.Root>,
    )

    await expect
      .element(getByTestId("EditableInput"))
      .toHaveProperty("readOnly", true)
  })

  test("calls onCancel when Escape is pressed", async () => {
    const onCancel = vi.fn()
    const { locator, user } = await render(
      <Editable.Root defaultValue="Some text" onCancel={onCancel}>
        <Editable.Preview data-testid="EditablePreview" />
        <Editable.Input data-testid="EditableInput" />
      </Editable.Root>,
    )

    const preview = locator.getByTestId("EditablePreview")
    const input = locator.getByTestId("EditableInput")

    await user.click(preview)
    await expect.element(input).toBeVisible()
    await expect.element(input).toHaveFocus()
    input.element().dispatchEvent(
      new KeyboardEvent("keydown", {
        key: "Escape",
        bubbles: true,
        cancelable: true,
      }),
    )

    await expect.poll(() => onCancel.mock.calls.length).toBe(1)
    expect(onCancel).toHaveBeenCalledExactlyOnceWith("Some text")
  })

  test("calls onSubmit when Enter is pressed", async () => {
    const onSubmit = vi.fn()
    const { getByTestId, user } = await render(
      <Editable.Root defaultValue="Some text" onSubmit={onSubmit}>
        <Editable.Preview data-testid="EditablePreview" />
        <Editable.Input data-testid="EditableInput" />
      </Editable.Root>,
    )

    const preview = getByTestId("EditablePreview")
    const input = getByTestId("EditableInput")

    await user.click(preview)
    await expect.element(input).toBeVisible()
    await expect.element(input).toHaveFocus()
    await user.keyboard("{Enter}")

    expect(onSubmit).toHaveBeenCalledExactlyOnceWith("Some text")
  })

  test("does not call onSubmit when Enter is pressed with Shift or Meta", async () => {
    const onSubmit = vi.fn()
    const { locator, user } = await render(
      <Editable.Root defaultValue="Some text" onSubmit={onSubmit}>
        <Editable.Preview data-testid="EditablePreview" />
        <Editable.Input data-testid="EditableInput" />
      </Editable.Root>,
    )

    const preview = locator.getByTestId("EditablePreview")
    const input = locator.getByTestId("EditableInput")

    await user.click(preview)
    await expect.element(input).toBeVisible()
    await expect.element(input).toHaveFocus()
    input.element().dispatchEvent(
      new KeyboardEvent("keydown", {
        key: "Enter",
        bubbles: true,
        cancelable: true,
        shiftKey: true,
      }),
    )
    input.element().dispatchEvent(
      new KeyboardEvent("keydown", {
        key: "Enter",
        bubbles: true,
        cancelable: true,
        metaKey: true,
      }),
    )

    expect(onSubmit).not.toHaveBeenCalled()
  })

  test("calls onChange when input value changes", async () => {
    const onChange = vi.fn()
    const { getByTestId, user } = await render(
      <Editable.Root
        defaultValue="Some text"
        startWithEditView
        onChange={onChange}
      >
        <Editable.Preview />
        <Editable.Input data-testid="EditableInput" />
      </Editable.Root>,
    )

    const input = getByTestId("EditableInput")

    await expect.element(input).toBeVisible()
    await user.click(input)
    await expect.element(input).toHaveFocus()
    await input.fill("New text")

    await expect.poll(() => onChange.mock.calls.at(-1)?.[0]).toBe("New text")
    expect(onChange).toHaveBeenLastCalledWith("New text")
  })

  test("focuses out of the input when editing ends", async () => {
    const { locator, user } = await render(
      <Editable.Root
        defaultValue="Some text"
        selectAllOnFocus
        startWithEditView
      >
        <Editable.Preview data-testid="EditablePreview" />
        <Editable.Input data-testid="EditableInput" />
      </Editable.Root>,
    )

    const input = locator.getByTestId("EditableInput")

    await expect.element(input).toBeVisible()
    await user.click(input)
    await user.keyboard("{Enter}")

    expect(input.element()).not.toHaveFocus()
  })

  test("calls onEdit when editing starts", async () => {
    const onEdit = vi.fn()
    const { getByTestId, user } = await render(
      <Editable.Root defaultValue="Some text" onEdit={onEdit}>
        <Editable.Preview data-testid="EditablePreview" />
        <Editable.Input />
      </Editable.Root>,
    )

    await user.click(getByTestId("EditablePreview"))

    expect(onEdit).toHaveBeenCalledExactlyOnceWith()
  })

  test("focus and calls onCancel when Escape is pressed", async () => {
    const onCancel = vi.fn()
    const { getByTestId, user } = await render(
      <Editable.Root defaultValue="Some text" onCancel={onCancel}>
        <Editable.Preview data-testid="EditablePreview" />
        <Editable.Input data-testid="EditableInput" />
      </Editable.Root>,
    )

    const preview = getByTestId("EditablePreview")
    const input = getByTestId("EditableInput")

    await user.click(preview)
    await expect.element(input).toBeVisible()
    await user.keyboard("{Escape}")

    expect(onCancel).toHaveBeenCalledExactlyOnceWith("Some text")
  })

  test("focus and calls onSubmit when Enter is pressed", async () => {
    const onCancel = vi.fn()
    const onSubmit = vi.fn()
    const { getByTestId, user } = await render(
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

    const preview = getByTestId("EditablePreview")
    const input = getByTestId("EditableInput")

    await user.click(preview)
    await expect.element(input).toBeVisible()
    await user.keyboard("{Enter}")

    expect(onSubmit).toHaveBeenCalledExactlyOnceWith("Some text")
    expect(onCancel).not.toHaveBeenCalled()
  })

  test("calls onSubmit when onBlur is triggered with submitOnBlur", async () => {
    const onCancel = vi.fn()
    const onSubmit = vi.fn()
    const { locator, user } = await render(
      <>
        <Editable.Root
          defaultValue="Some text"
          submitOnBlur
          onCancel={onCancel}
          onSubmit={onSubmit}
        >
          <Editable.Preview data-testid="EditablePreview" />
          <Editable.Input data-testid="EditableInput" />
        </Editable.Root>
        <button type="button" data-testid="Outside">
          Outside
        </button>
      </>,
    )

    const preview = locator.getByTestId("EditablePreview")
    const input = locator.getByTestId("EditableInput")
    const outside = locator.getByTestId("Outside")

    await user.click(preview)
    await expect.element(input).toBeVisible()
    await expect.element(input).toHaveFocus()
    await user.click(outside)

    expect(onSubmit).toHaveBeenCalledExactlyOnceWith("Some text")
    expect(onCancel).not.toHaveBeenCalled()
  })

  test("calls onCancel when onBlur", async () => {
    const onCancel = vi.fn()
    const onSubmit = vi.fn()
    const { locator, user } = await render(
      <>
        <Editable.Root
          defaultValue="Some text"
          submitOnBlur={false}
          onCancel={onCancel}
          onSubmit={onSubmit}
        >
          <Editable.Preview data-testid="EditablePreview" />
          <Editable.Input data-testid="EditableInput" />
        </Editable.Root>
        <button type="button" data-testid="Outside">
          Outside
        </button>
      </>,
    )

    const preview = locator.getByTestId("EditablePreview")
    const input = locator.getByTestId("EditableInput")
    const outside = locator.getByTestId("Outside")

    await user.click(preview)
    await expect.element(input).toBeVisible()
    await expect.element(input).toHaveFocus()
    await user.click(outside)

    expect(onSubmit).not.toHaveBeenCalled()
    expect(onCancel).toHaveBeenCalledExactlyOnceWith("Some text")
  })

  test("initially in correct edit mode", async () => {
    const { getByTestId } = await render(
      <Editable.Root
        data-testid="Editable"
        defaultValue="Some text"
        startWithEditView
      >
        <Editable.Preview data-testid="EditablePreview" />
        <Editable.Input data-testid="EditableInput" />
      </Editable.Root>,
    )

    await expect.element(getByTestId("EditableInput")).toBeVisible()
  })

  test("supports children as a function", async () => {
    const childrenFn = vi.fn(({ editing }) => (
      <>
        <Editable.Preview data-testid="EditablePreview" />
        <Editable.Input data-testid="EditableInput" />
        {editing ? <span data-testid="editing-indicator" /> : null}
      </>
    ))
    const { getByTestId, user } = await render(
      <Editable.Root defaultValue="Some text">{childrenFn}</Editable.Root>,
    )

    expect(childrenFn).toHaveBeenCalledWith(
      expect.objectContaining({
        editing: false,
        onCancel: expect.any(Function),
        onEdit: expect.any(Function),
        onSubmit: expect.any(Function),
      }),
    )
    expect(getByTestId("editing-indicator").query()).toBeNull()

    await user.click(getByTestId("EditablePreview"))

    await expect.element(getByTestId("editing-indicator")).toBeInTheDocument()
  })
})

describe("<EditableTextarea />", () => {
  test("renders correctly", async () => {
    const { getByTestId } = await render(
      <Editable.Root defaultValue="Some text">
        <Editable.Textarea data-testid="EditableTextarea" />
      </Editable.Root>,
    )

    const textarea = getByTestId("EditableTextarea")

    await expect.element(textarea).toHaveValue("Some text")
  })

  test("applies custom className", async () => {
    const { getByTestId } = await render(
      <Editable.Root defaultValue="Some text">
        <Editable.Textarea
          className="custom-class"
          data-testid="EditableTextarea"
        />
      </Editable.Root>,
    )

    await expect
      .element(getByTestId("EditableTextarea"))
      .toHaveClass("custom-class")
  })

  test("calls onCancel when Escape is pressed in textarea", async () => {
    const onCancel = vi.fn()
    const { locator, user } = await render(
      <Editable.Root
        defaultValue="Some text"
        startWithEditView
        onCancel={onCancel}
      >
        <Editable.Preview />
        <Editable.Textarea data-testid="EditableTextarea" />
      </Editable.Root>,
    )

    const textarea = locator.getByTestId("EditableTextarea")

    await expect.element(textarea).toBeVisible()
    await user.click(textarea)
    await expect.element(textarea).toHaveFocus()
    textarea.element().dispatchEvent(
      new KeyboardEvent("keydown", {
        key: "Escape",
        bubbles: true,
        cancelable: true,
      }),
    )

    await expect.poll(() => onCancel.mock.calls.length).toBe(1)
    expect(onCancel).toHaveBeenCalledExactlyOnceWith("Some text")
  })

  test("does not submit when Enter is pressed in textarea", async () => {
    const onSubmit = vi.fn()
    const { getByTestId, user } = await render(
      <Editable.Root
        defaultValue="Some text"
        startWithEditView
        onSubmit={onSubmit}
      >
        <Editable.Preview />
        <Editable.Textarea data-testid="EditableTextarea" />
      </Editable.Root>,
    )

    const textarea = getByTestId("EditableTextarea")

    await expect.element(textarea).toBeVisible()
    await user.click(textarea)
    await user.keyboard("{Enter}")

    expect(onSubmit).not.toHaveBeenCalled()
  })
})

describe("<EditableControl />", () => {
  test("renders correctly with role group", async () => {
    const { getByTestId } = await render(
      <Editable.Root defaultValue="Some text">
        <Editable.Control data-testid="EditableControl">
          <Editable.Preview />
          <Editable.Input />
        </Editable.Control>
      </Editable.Root>,
    )

    await expect
      .element(getByTestId("EditableControl"))
      .toHaveAttribute("role", "group")
  })
})

describe("<EditableEditTrigger />", () => {
  test("renders and triggers edit mode on click", async () => {
    const onEdit = vi.fn()
    const { getByRole, getByTestId, user } = await render(
      <Editable.Root defaultValue="Some text" onEdit={onEdit}>
        <Editable.Preview />
        <Editable.Input data-testid="EditableInput" />
        <Editable.EditTrigger data-testid="EditTrigger">
          <button>Edit</button>
        </Editable.EditTrigger>
      </Editable.Root>,
    )

    await user.click(getByRole("button", { name: "Edit" }))

    expect(onEdit).toHaveBeenCalledExactlyOnceWith()
    expect(getByTestId("EditableInput").element()).not.toHaveAttribute("hidden")
  })
})

describe("<EditableCancelTrigger />", () => {
  test("renders and triggers cancel on click", async () => {
    const onCancel = vi.fn()
    const { getByTestId, user } = await render(
      <Editable.Root
        defaultValue="Some text"
        startWithEditView
        onCancel={onCancel}
      >
        <Editable.Preview />
        <Editable.Input data-testid="EditableInput" />
        <Editable.CancelTrigger data-testid="CancelTrigger">
          <button>Cancel</button>
        </Editable.CancelTrigger>
      </Editable.Root>,
    )

    await user.click(getByTestId("CancelTrigger"))

    expect(onCancel).toHaveBeenCalledExactlyOnceWith("Some text")
  })
})

describe("<EditableSubmitTrigger />", () => {
  test("renders and triggers submit on click", async () => {
    const onSubmit = vi.fn()
    const { getByRole, user } = await render(
      <Editable.Root
        defaultValue="Some text"
        startWithEditView
        onSubmit={onSubmit}
      >
        <Editable.Preview />
        <Editable.Input data-testid="EditableInput" />
        <Editable.SubmitTrigger data-testid="SubmitTrigger">
          <button>Submit</button>
        </Editable.SubmitTrigger>
      </Editable.Root>,
    )

    await user.click(getByRole("button", { name: "Submit" }))

    expect(onSubmit).toHaveBeenCalledExactlyOnceWith("Some text")
  })
})
