import { useRef } from "react"
import { Snacks, useSnacks } from "."
import { fireEvent, render, screen, waitFor } from "../../../test"

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
})
