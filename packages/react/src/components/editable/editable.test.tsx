import { a11y, page, render } from "#test/browser"
import { Editable } from "./"

async function enterEditMode() {
  const preview = page.getByTestId("EditablePreview")
  const input = page.getByTestId("EditableInput")

  preview.element().focus()

  await vi.waitFor(() => {
    expect(input.element()).not.toHaveAttribute("hidden")
  })

  return { input }
}

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
    await render(
      <Editable.Root data-testid="Editable" defaultValue="Some text">
        <Editable.Preview data-testid="EditablePreview" />
        <Editable.Input data-testid="EditableInput" />
      </Editable.Root>,
    )

    await expect.element(page.getByTestId("Editable")).toBeInTheDocument()
    await expect
      .element(page.getByTestId("EditablePreview"))
      .toBeInTheDocument()
    await expect
      .element(page.getByTestId("EditableInput"))
      .toHaveValue("Some text")
  })

  test("should render with preview focusable", async () => {
    const { user } = await render(
      <Editable.Root
        data-testid="Editable"
        defaultValue="Some text"
        previewFocusable
      >
        <Editable.Preview data-testid="EditablePreview" />
        <Editable.Input data-testid="EditableInput" />
      </Editable.Root>,
    )

    const preview = page.getByTestId("EditablePreview")
    const input = page.getByTestId("EditableInput")

    await user.click(preview)
    await expect.element(input).not.toHaveAttribute("hidden")

    await user.clear(input)
    await user.type(input, "Updated text")

    await expect.element(preview).toHaveTextContent("Updated text")
    await expect.element(input).toHaveValue("Updated text")
  })

  test("should render with placeholder", async () => {
    await render(
      <Editable.Root placeholder="Enter some text">
        <Editable.Preview />
        <Editable.Input data-testid="EditableInput" />
      </Editable.Root>,
    )

    await expect
      .element(page.getByTestId("EditableInput"))
      .toHaveAttribute("placeholder", "Enter some text")
  })

  test("should disable the input", async () => {
    await render(
      <Editable.Root defaultValue="Some text" disabled>
        <Editable.Preview />
        <Editable.Input data-testid="EditableInput" />
      </Editable.Root>,
    )

    await expect.element(page.getByTestId("EditableInput")).toBeDisabled()
  })

  test("should make the input readOnly", async () => {
    await render(
      <Editable.Root defaultValue="Some text" readOnly>
        <Editable.Preview />
        <Editable.Input data-testid="EditableInput" />
      </Editable.Root>,
    )

    await expect
      .element(page.getByTestId("EditableInput"))
      .toHaveAttribute("readonly")
  })

  test("calls onCancel when Escape is pressed", async () => {
    const onCancel = vi.fn()
    await render(
      <Editable.Root
        defaultValue="Some text"
        startWithEditView
        onCancel={onCancel}
      >
        <Editable.Preview data-testid="EditablePreview" />
        <Editable.Input data-testid="EditableInput" />
      </Editable.Root>,
    )

    const input = page.getByTestId("EditableInput")

    input
      .element()
      .dispatchEvent(
        new KeyboardEvent("keydown", { key: "Escape", bubbles: true }),
      )

    expect(onCancel).toHaveBeenCalledExactlyOnceWith("Some text")
  })

  test("calls onSubmit when Enter is pressed", async () => {
    const onSubmit = vi.fn()
    const { user } = await render(
      <Editable.Root
        defaultValue="Some text"
        startWithEditView
        onSubmit={onSubmit}
      >
        <Editable.Preview data-testid="EditablePreview" />
        <Editable.Input data-testid="EditableInput" />
      </Editable.Root>,
    )

    const input = page.getByTestId("EditableInput")

    input.element().focus()
    await user.keyboard("{Enter}")

    expect(onSubmit).toHaveBeenCalledExactlyOnceWith("Some text")
  })

  test("does not call onSubmit when Enter is pressed with Shift or Meta", async () => {
    const onSubmit = vi.fn()
    await render(
      <Editable.Root
        defaultValue="Some text"
        startWithEditView
        onSubmit={onSubmit}
      >
        <Editable.Preview data-testid="EditablePreview" />
        <Editable.Input data-testid="EditableInput" />
      </Editable.Root>,
    )

    const input = page.getByTestId("EditableInput")

    input.element().dispatchEvent(
      new KeyboardEvent("keydown", {
        key: "Enter",
        bubbles: true,
        shiftKey: true,
      }),
    )
    input.element().dispatchEvent(
      new KeyboardEvent("keydown", {
        key: "Enter",
        bubbles: true,
        metaKey: true,
      }),
    )

    expect(onSubmit).not.toHaveBeenCalled()
  })

  test("calls onChange when input value changes", async () => {
    const onChange = vi.fn()
    const { user } = await render(
      <Editable.Root
        defaultValue="Some text"
        startWithEditView
        onChange={onChange}
      >
        <Editable.Preview data-testid="EditablePreview" />
        <Editable.Input data-testid="EditableInput" />
      </Editable.Root>,
    )

    const input = page.getByTestId("EditableInput")

    await user.click(input)
    await user.clear(input)
    await user.type(input, "New text")

    expect(onChange).toHaveBeenCalledWith("New text")
    await expect.element(input).toHaveValue("New text")
  })

  test("focuses out of the input when editing ends", async () => {
    const { user } = await render(
      <Editable.Root defaultValue="Some text" selectAllOnFocus>
        <Editable.Preview data-testid="EditablePreview" />
        <Editable.Input data-testid="EditableInput" />
      </Editable.Root>,
    )

    const { input } = await enterEditMode()

    await user.click(input)
    await expect.element(input).toHaveFocus()

    await user.keyboard("{Enter}")

    await expect.element(input).not.toHaveFocus()
  })

  test("calls onEdit when editing starts", async () => {
    const onEdit = vi.fn()
    await render(
      <Editable.Root defaultValue="Some text" onEdit={onEdit}>
        <Editable.Preview data-testid="EditablePreview" />
        <Editable.Input />
      </Editable.Root>,
    )

    page.getByTestId("EditablePreview").element().focus()

    await vi.waitFor(() => {
      expect(onEdit).toHaveBeenCalledExactlyOnceWith()
    })
  })

  test("focus and calls onCancel when Escape is pressed", async () => {
    const onCancel = vi.fn()
    await render(
      <Editable.Root defaultValue="Some text" onCancel={onCancel}>
        <Editable.Preview data-testid="EditablePreview" />
        <Editable.Input data-testid="EditableInput" />
      </Editable.Root>,
    )

    const { input } = await enterEditMode()

    input
      .element()
      .dispatchEvent(
        new KeyboardEvent("keydown", { key: "Escape", bubbles: true }),
      )

    expect(onCancel).toHaveBeenCalledExactlyOnceWith("Some text")
  })

  test("focus and calls onSubmit when Enter is pressed", async () => {
    const onCancel = vi.fn()
    const onSubmit = vi.fn()
    await render(
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

    const { input } = await enterEditMode()

    input
      .element()
      .dispatchEvent(
        new KeyboardEvent("keydown", { key: "Enter", bubbles: true }),
      )

    expect(onSubmit).toHaveBeenCalledExactlyOnceWith("Some text")
    expect(onCancel).not.toHaveBeenCalled()
  })

  test("calls onSubmit when onBlur is triggered with submitOnBlur", async () => {
    const onCancel = vi.fn()
    const onSubmit = vi.fn()
    const { user } = await render(
      <Editable.Root
        defaultValue="Some text"
        startWithEditView
        submitOnBlur
        onCancel={onCancel}
        onSubmit={onSubmit}
      >
        <Editable.Preview data-testid="EditablePreview" />
        <Editable.Input data-testid="EditableInput" />
      </Editable.Root>,
    )

    const input = page.getByTestId("EditableInput")

    await user.click(input)
    input.element().blur()

    await vi.waitFor(() => {
      expect(onSubmit).toHaveBeenCalledExactlyOnceWith("Some text")
    })
    expect(onCancel).not.toHaveBeenCalled()
  })

  test("calls onCancel when onBlur", async () => {
    const onCancel = vi.fn()
    const onSubmit = vi.fn()
    const { user } = await render(
      <Editable.Root
        defaultValue="Some text"
        startWithEditView
        submitOnBlur={false}
        onCancel={onCancel}
        onSubmit={onSubmit}
      >
        <Editable.Preview data-testid="EditablePreview" />
        <Editable.Input data-testid="EditableInput" />
      </Editable.Root>,
    )

    const input = page.getByTestId("EditableInput")

    await user.click(input)

    input.element().blur()

    await vi.waitFor(() => {
      expect(onCancel).toHaveBeenCalledExactlyOnceWith("Some text")
    })
    expect(onSubmit).not.toHaveBeenCalled()
  })

  test("initially in correct edit mode", async () => {
    await render(
      <Editable.Root
        data-testid="Editable"
        defaultValue="Some text"
        startWithEditView
      >
        <Editable.Preview data-testid="EditablePreview" />
        <Editable.Input data-testid="EditableInput" />
      </Editable.Root>,
    )

    await expect
      .element(page.getByTestId("EditableInput"))
      .not.toHaveAttribute("hidden")
  })

  test("supports children as a function", async () => {
    const childrenFn = vi.fn(({ editing }) => (
      <>
        <Editable.Preview data-testid="EditablePreview" />
        <Editable.Input data-testid="EditableInput" />
        {editing ? <span data-testid="editing-indicator" /> : null}
      </>
    ))
    await render(
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
    expect(
      document.querySelector('[data-testid="editing-indicator"]'),
    ).toBeNull()

    await enterEditMode()

    await vi.waitFor(() => {
      expect(
        document.querySelector('[data-testid="editing-indicator"]'),
      ).toBeInTheDocument()
    })
  })
})

describe("<EditableTextarea />", () => {
  test("renders correctly", async () => {
    await render(
      <Editable.Root defaultValue="Some text">
        <Editable.Textarea data-testid="EditableTextarea" />
      </Editable.Root>,
    )

    const textarea = page.getByTestId("EditableTextarea")
    await expect.element(textarea).toBeInTheDocument()
    await expect.element(textarea).toHaveValue("Some text")
  })

  test("applies custom className", async () => {
    await render(
      <Editable.Root defaultValue="Some text">
        <Editable.Textarea
          className="custom-class"
          data-testid="EditableTextarea"
        />
      </Editable.Root>,
    )

    await expect
      .element(page.getByTestId("EditableTextarea"))
      .toHaveClass("custom-class")
  })

  test("calls onCancel when Escape is pressed in textarea", async () => {
    const onCancel = vi.fn()
    await render(
      <Editable.Root
        defaultValue="Some text"
        startWithEditView
        onCancel={onCancel}
      >
        <Editable.Preview />
        <Editable.Textarea data-testid="EditableTextarea" />
      </Editable.Root>,
    )

    page
      .getByTestId("EditableTextarea")
      .element()
      .dispatchEvent(
        new KeyboardEvent("keydown", { key: "Escape", bubbles: true }),
      )

    expect(onCancel).toHaveBeenCalledExactlyOnceWith("Some text")
  })

  test("does not submit when Enter is pressed in textarea", async () => {
    const onSubmit = vi.fn()
    await render(
      <Editable.Root
        defaultValue="Some text"
        startWithEditView
        onSubmit={onSubmit}
      >
        <Editable.Preview />
        <Editable.Textarea data-testid="EditableTextarea" />
      </Editable.Root>,
    )

    page
      .getByTestId("EditableTextarea")
      .element()
      .dispatchEvent(
        new KeyboardEvent("keydown", { key: "Enter", bubbles: true }),
      )

    expect(onSubmit).not.toHaveBeenCalled()
  })
})

describe("<EditableControl />", () => {
  test("renders correctly with role group", async () => {
    await render(
      <Editable.Root defaultValue="Some text">
        <Editable.Control data-testid="EditableControl">
          <Editable.Preview />
          <Editable.Input />
        </Editable.Control>
      </Editable.Root>,
    )

    await expect
      .element(page.getByTestId("EditableControl"))
      .toBeInTheDocument()
    await expect
      .element(page.getByTestId("EditableControl"))
      .toHaveAttribute("role", "group")
  })
})

describe("<EditableEditTrigger />", () => {
  test("renders and triggers edit mode on click", async () => {
    const onEdit = vi.fn()
    const { user } = await render(
      <Editable.Root defaultValue="Some text" onEdit={onEdit}>
        <Editable.Preview />
        <Editable.Input data-testid="EditableInput" />
        <Editable.EditTrigger data-testid="EditTrigger">
          <button>Edit</button>
        </Editable.EditTrigger>
      </Editable.Root>,
    )

    const trigger = page.getByTestId("EditTrigger")
    await expect.element(trigger).toBeInTheDocument()

    await user.click(trigger)

    expect(onEdit).toHaveBeenCalledExactlyOnceWith()
    await expect
      .element(page.getByTestId("EditableInput"))
      .not.toHaveAttribute("hidden")
  })
})

describe("<EditableCancelTrigger />", () => {
  test("renders and triggers cancel on click", async () => {
    const onCancel = vi.fn()
    const { user } = await render(
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

    const trigger = page.getByTestId("CancelTrigger")
    await expect.element(trigger).toBeInTheDocument()

    await user.click(trigger)

    expect(onCancel).toHaveBeenCalledExactlyOnceWith("Some text")
  })
})

describe("<EditableSubmitTrigger />", () => {
  test("renders and triggers submit on click", async () => {
    const onSubmit = vi.fn()
    const { user } = await render(
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

    const trigger = page.getByTestId("SubmitTrigger")
    await expect.element(trigger).toBeInTheDocument()

    await user.click(trigger)

    expect(onSubmit).toHaveBeenCalledExactlyOnceWith("Some text")
  })
})
