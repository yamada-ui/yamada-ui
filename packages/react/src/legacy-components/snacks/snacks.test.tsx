import { useRef } from "react"
import { Snacks, useSnacks } from "."
import { fireEvent, render, screen, waitFor } from "@/test"

describe("<Snacks />", () => {
  const SnackExample = () => {
    const { snack, snacks } = useSnacks()
    const ref = useRef<number | string | undefined>(undefined)

    const onOpen = () => {
      ref.current = snack({
        description: "test-description",
        title: "test-title",
      })
    }

    const onUpdate = () => {
      if (ref.current)
        snack.update(ref.current, {
          description: "test-description-update",
          title: "test-title-update",
        })
    }

    const onClose = () => {
      if (ref.current) snack.close(ref.current)
    }

    return (
      <>
        <button data-testid="add-btn" onClick={() => onOpen()}>
          Add
        </button>

        <button data-testid="update-btn" onClick={() => onUpdate()}>
          Update
        </button>

        <button data-testid="close-btn" onClick={() => onClose()}>
          Close
        </button>

        <button data-testid="close-all-btn" onClick={snack.closeAll}>
          Close all
        </button>

        <Snacks gutter={[0, "md"]} snacks={snacks} />
      </>
    )
  }

  test("Snacks renders correctly when add and update", async () => {
    render(<SnackExample />)

    const addBtn = screen.getByTestId("add-btn")
    const updateBtn = screen.getByTestId("update-btn")

    fireEvent.click(addBtn)

    await waitFor(() => {
      expect(screen.queryByText("test-title")).toHaveClass("ui-snack__title")
    })
    expect(screen.queryByText("test-description")).toHaveClass("ui-snack__desc")

    fireEvent.click(updateBtn)

    await waitFor(() => {
      expect(screen.queryByText("test-title")).toBeNull()
    })
    expect(screen.queryByText("test-description")).toBeNull()
    expect(screen.queryByText("test-title-update")).toHaveClass(
      "ui-snack__title",
    )
    expect(screen.queryByText("test-description-update")).toHaveClass(
      "ui-snack__desc",
    )
  })

  test("Snacks renders correctly when close", async () => {
    render(<SnackExample />)

    const addBtn = screen.getByTestId("add-btn")
    const closeBtn = screen.getByTestId("close-btn")

    fireEvent.click(addBtn)
    fireEvent.click(closeBtn)

    await waitFor(() => {
      expect(screen.queryByText("test-title")).toBeNull()
    })
    expect(screen.queryByText("test-description")).toBeNull()
  })

  test("Snacks renders correctly when close all", async () => {
    render(<SnackExample />)

    const addBtn = screen.getByTestId("add-btn")
    const closeAllBtn = screen.getByTestId("close-all-btn")

    fireEvent.click(addBtn)
    fireEvent.click(addBtn)

    await waitFor(() => {
      const listItems = screen.getAllByRole("listitem")
      expect(listItems).toHaveLength(2)
    })

    fireEvent.click(closeAllBtn)

    await waitFor(() => {
      expect(screen.queryByText("test-title")).toBeNull()
    })
    expect(screen.queryByText("test-description")).toBeNull()
  })

  test("Snacks renders correctly with custom component", async () => {
    const CustomSnack = ({ description, title }: SnackComponentProps) => (
      <div data-testid="custom-snack">
        <div className="custom-title">{title}</div>
        <div className="custom-desc">{description}</div>
      </div>
    )

    const CustomSnackExample = () => {
      const { snack, snacks } = useSnacks({
        component: CustomSnack,
      })

      return (
        <>
          <button
            data-testid="custom-add-btn"
            onClick={() =>
              snack({
                description: "Custom Description",
                title: "Custom Title",
              })
            }
          >
            Add Custom
          </button>
          <Snacks gutter={[0, "md"]} snacks={snacks} />
        </>
      )
    }

    render(<CustomSnackExample />)

    const addBtn = screen.getByTestId("custom-add-btn")
    fireEvent.click(addBtn)

    await waitFor(() => {
      expect(screen.getByTestId("custom-snack")).toBeInTheDocument()
    })

    expect(screen.getByText("Custom Title")).toHaveClass("custom-title")
    expect(screen.getByText("Custom Description")).toHaveClass("custom-desc")
  })

  test("CloseButton click event works correctly", async () => {
    const Snack = () => {
      const { snack, snacks } = useSnacks()

      const onOpen = () => {
        snack({
          description: "test-description",
          title: "test-title",
        })
      }

      return (
        <>
          <button data-testid="add-btn" onClick={onOpen}>
            Add
          </button>
          <Snacks gutter={[0, "md"]} snacks={snacks} />
        </>
      )
    }

    render(<Snack />)

    const addBtn = screen.getByTestId("add-btn")
    fireEvent.click(addBtn)
    await waitFor(() => {
      expect(screen.getByText("test-title")).toBeInTheDocument()
    })
    expect(screen.getByText("test-description")).toBeInTheDocument()

    const closeButton = screen.getByRole("button", { name: /close/i })
    fireEvent.click(closeButton)
    await waitFor(() => {
      expect(screen.queryByText("test-title")).toBeNull()
    })
    expect(screen.queryByText("test-description")).toBeNull()
  })

  test("isActive method works correctly", async () => {
    const Snack = () => {
      const { snack, snacks } = useSnacks()
      const ref = useRef<number | string | undefined>(undefined)

      const onOpen = () => {
        ref.current = snack({
          description: "test-description",
          title: "test-title",
        })
      }

      const onClose = () => {
        if (ref.current) snack.close(ref.current)
      }

      return (
        <>
          <button data-testid="add-btn" onClick={onOpen}>
            Add
          </button>
          <button data-testid="close-btn" onClick={onClose}>
            Close
          </button>
          <div data-testid="status">
            {ref.current && snack.isActive(ref.current) ? "Active" : "No snack"}
          </div>
          <Snacks gutter={[0, "md"]} snacks={snacks} />
        </>
      )
    }

    render(<Snack />)

    const addBtn = screen.getByTestId("add-btn")
    const closeBtn = screen.getByTestId("close-btn")
    const statusElement = screen.getByTestId("status")

    expect(statusElement).toHaveTextContent("No snack")

    fireEvent.click(addBtn)
    await waitFor(() => {
      expect(screen.getByText("test-title")).toBeInTheDocument()
    })
    expect(statusElement).toHaveTextContent("Active")

    fireEvent.click(closeBtn)
    await waitFor(() => {
      expect(screen.queryByText("test-title")).toBeNull()
    })
    expect(statusElement).toHaveTextContent("No snack")
  })

  test("Snacks renders correctly when update keeps other snacks unchanged", async () => {
    const Snack = () => {
      const { snack, snacks } = useSnacks()
      const ref1 = useRef<number | string | undefined>(undefined)
      const ref2 = useRef<number | string | undefined>(undefined)

      const onOpenFirst = () => {
        ref1.current = snack({
          description: "first-description",
          title: "first-title",
        })
      }

      const onOpenSecond = () => {
        ref2.current = snack({
          description: "second-description",
          title: "second-title",
        })
      }

      const onUpdateFirst = () => {
        if (ref1.current)
          snack.update(ref1.current, {
            description: "first-description-update",
            title: "first-title-update",
          })
      }

      return (
        <>
          <button data-testid="add-first-btn" onClick={onOpenFirst}>
            Add First
          </button>
          <button data-testid="add-second-btn" onClick={onOpenSecond}>
            Add Second
          </button>
          <button data-testid="update-first-btn" onClick={onUpdateFirst}>
            Update First
          </button>
          <Snacks gutter={[0, "md"]} snacks={snacks} />
        </>
      )
    }

    render(<Snack />)

    const addFirstBtn = screen.getByTestId("add-first-btn")
    const addSecondBtn = screen.getByTestId("add-second-btn")
    const updateFirstBtn = screen.getByTestId("update-first-btn")

    fireEvent.click(addFirstBtn)
    fireEvent.click(addSecondBtn)

    await waitFor(() => {
      expect(screen.getByText("first-title")).toBeInTheDocument()
    })
    expect(screen.getByText("second-title")).toBeInTheDocument()

    fireEvent.click(updateFirstBtn)

    await waitFor(() => {
      expect(screen.queryByText("first-title")).toBeNull()
    })
    expect(screen.getByText("first-title-update")).toBeInTheDocument()
    expect(screen.getByText("second-title")).toBeInTheDocument()
  })
})
