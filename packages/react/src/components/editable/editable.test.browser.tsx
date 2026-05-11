import { a11y, page, render } from "#test/browser"
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

  test("syncs preview text with the input value after submitting", async () => {
    const { user } = await render(
      <Editable.Root defaultValue="Some text" startWithEditView>
        <Editable.Preview />
        <Editable.Input />
      </Editable.Root>,
    )

    const input = page.getByRole("textbox")

    await user.fill(input, "Updated text")
    await user.keyboard("{Enter}")

    await expect.element(page.getByText("Updated text")).toBeVisible()
  })

  test("calls onCancel when Escape is pressed", async () => {
    const onCancel = vi.fn()
    const { user } = await render(
      <Editable.Root
        defaultValue="Some text"
        startWithEditView
        onCancel={onCancel}
      >
        <Editable.Preview />
        <Editable.Input />
      </Editable.Root>,
    )

    await user.keyboard("{Escape}")

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
        <Editable.Preview />
        <Editable.Input />
      </Editable.Root>,
    )

    await user.keyboard("{Enter}")

    expect(onSubmit).toHaveBeenCalledExactlyOnceWith("Some text")
  })

  test("does not call onSubmit when Enter is pressed with Shift or Meta", async () => {
    const onSubmit = vi.fn()
    const { user } = await render(
      <Editable.Root
        defaultValue="Some text"
        startWithEditView
        onSubmit={onSubmit}
      >
        <Editable.Preview />
        <Editable.Input />
      </Editable.Root>,
    )

    await user.keyboard("{Shift>}{Enter}{/Shift}")
    await user.keyboard("{Meta>}{Enter}{/Meta}")

    expect(onSubmit).not.toHaveBeenCalled()
  })

  test("calls onChange when the input value changes", async () => {
    const onChange = vi.fn()
    const { user } = await render(
      <Editable.Root
        defaultValue="Some text"
        startWithEditView
        onChange={onChange}
      >
        <Editable.Preview />
        <Editable.Input />
      </Editable.Root>,
    )

    await user.fill(page.getByRole("textbox"), "New text")

    expect(onChange).toHaveBeenLastCalledWith("New text")
  })

  test("enters edit mode and calls onEdit when the preview is focused", async () => {
    const onEdit = vi.fn()
    const { user } = await render(
      <Editable.Root
        defaultValue="Some text"
        startWithEditView={false}
        onEdit={onEdit}
      >
        <Editable.Preview />
        <Editable.Input />
      </Editable.Root>,
    )

    await user.tab()

    expect(onEdit).toHaveBeenCalledExactlyOnceWith()
    await expect.element(page.getByRole("textbox")).toHaveFocus()
  })

  test("releases focus from the input after submitting", async () => {
    const { user } = await render(
      <Editable.Root defaultValue="Some text" startWithEditView>
        <Editable.Preview />
        <Editable.Input />
      </Editable.Root>,
    )

    const input = page.getByRole("textbox")

    await expect.element(input).toHaveFocus()

    await user.keyboard("{Enter}")

    await expect
      .element(page.getByRole("textbox").query())
      .not.toBeInTheDocument()
    await expect.element(page.getByText("Some text")).toBeVisible()
  })

  test("calls onSubmit when the input is blurred with submitOnBlur enabled", async () => {
    const onCancel = vi.fn()
    const onSubmit = vi.fn()
    const { user } = await render(
      <>
        <Editable.Root
          defaultValue="Some text"
          startWithEditView
          submitOnBlur
          onCancel={onCancel}
          onSubmit={onSubmit}
        >
          <Editable.Preview />
          <Editable.Input />
        </Editable.Root>
        <button>outside</button>
      </>,
    )

    await user.click(page.getByRole("button", { name: "outside" }))

    expect(onSubmit).toHaveBeenCalledExactlyOnceWith("Some text")
    expect(onCancel).not.toHaveBeenCalled()
  })

  test("calls onCancel when the input is blurred with submitOnBlur disabled", async () => {
    const onCancel = vi.fn()
    const onSubmit = vi.fn()
    const { user } = await render(
      <>
        <Editable.Root
          defaultValue="Some text"
          startWithEditView
          submitOnBlur={false}
          onCancel={onCancel}
          onSubmit={onSubmit}
        >
          <Editable.Preview />
          <Editable.Input />
        </Editable.Root>
        <button>outside</button>
      </>,
    )

    await user.click(page.getByRole("button", { name: "outside" }))

    expect(onSubmit).not.toHaveBeenCalled()
    expect(onCancel).toHaveBeenCalledExactlyOnceWith("Some text")
  })

  test("supports children as a function reflecting the editing state", async () => {
    const childrenFn = vi.fn(({ editing }) => (
      <>
        <Editable.Preview />
        <Editable.Input />
        <Editable.EditTrigger>
          <button>Edit</button>
        </Editable.EditTrigger>
        {editing ? <span>is-editing</span> : null}
      </>
    ))
    const { user } = await render(
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

    await expect
      .element(page.getByText("is-editing").query())
      .not.toBeInTheDocument()

    await user.click(page.getByRole("button", { name: "Edit" }))

    await expect.element(page.getByText("is-editing")).toBeInTheDocument()
  })
})

describe("<EditableTextarea />", () => {
  test("calls onCancel when Escape is pressed", async () => {
    const onCancel = vi.fn()
    const { user } = await render(
      <Editable.Root
        defaultValue="Some text"
        startWithEditView
        onCancel={onCancel}
      >
        <Editable.Preview />
        <Editable.Textarea />
      </Editable.Root>,
    )

    await user.keyboard("{Escape}")

    expect(onCancel).toHaveBeenCalledExactlyOnceWith("Some text")
  })

  test("does not call onSubmit when Enter is pressed", async () => {
    const onSubmit = vi.fn()
    const { user } = await render(
      <Editable.Root
        defaultValue="Some text"
        startWithEditView
        onSubmit={onSubmit}
      >
        <Editable.Preview />
        <Editable.Textarea />
      </Editable.Root>,
    )

    await user.keyboard("{Enter}")

    expect(onSubmit).not.toHaveBeenCalled()
  })
})

describe("<EditableEditTrigger />", () => {
  test("enters edit mode and calls onEdit when clicked", async () => {
    const onEdit = vi.fn()
    const { user } = await render(
      <Editable.Root defaultValue="Some text" onEdit={onEdit}>
        <Editable.Preview />
        <Editable.Input />
        <Editable.EditTrigger>
          <button>Edit</button>
        </Editable.EditTrigger>
      </Editable.Root>,
    )

    await user.click(page.getByRole("button", { name: "Edit" }))

    expect(onEdit).toHaveBeenCalledExactlyOnceWith()
    await expect.element(page.getByRole("textbox")).toBeVisible()
  })
})

describe("<EditableCancelTrigger />", () => {
  test("cancels editing and calls onCancel when clicked", async () => {
    const onCancel = vi.fn()
    const { user } = await render(
      <Editable.Root
        defaultValue="Some text"
        startWithEditView
        onCancel={onCancel}
      >
        <Editable.Preview />
        <Editable.Input />
        <Editable.CancelTrigger>
          <button>Cancel</button>
        </Editable.CancelTrigger>
      </Editable.Root>,
    )

    await user.click(page.getByRole("button", { name: "Cancel" }))

    expect(onCancel).toHaveBeenCalledExactlyOnceWith("Some text")
  })
})

describe("<EditableSubmitTrigger />", () => {
  test("submits editing and calls onSubmit when clicked", async () => {
    const onSubmit = vi.fn()
    const { user } = await render(
      <Editable.Root
        defaultValue="Some text"
        startWithEditView
        onSubmit={onSubmit}
      >
        <Editable.Preview />
        <Editable.Input />
        <Editable.SubmitTrigger>
          <button>Submit</button>
        </Editable.SubmitTrigger>
      </Editable.Root>,
    )

    await user.click(page.getByRole("button", { name: "Submit" }))

    expect(onSubmit).toHaveBeenCalledExactlyOnceWith("Some text")
  })
})
