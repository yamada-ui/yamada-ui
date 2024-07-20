import { Button } from "@yamada-ui/react"
import { render, screen, fireEvent, waitFor } from "@yamada-ui/test"
import { useRef } from "react"
import { useSnacks, Snacks } from "../src"

describe("<Snacks />", () => {
  const SnackExample = () => {
    const { snack, snacks } = useSnacks()
    const ref = useRef<string | number | undefined>(undefined)

    const onOpen = () => {
      ref.current = snack({
        title: "test-title",
        description: "test-description",
      })
    }

    const onUpdate = () => {
      if (ref.current)
        snack.update(ref.current, {
          title: "test-title-update",
          description: "test-description-update",
        })
    }

    const onClose = () => {
      if (ref.current) snack.close(ref.current)
    }

    return (
      <>
        <Button data-testid="add-btn" onClick={() => onOpen()}>
          Add
        </Button>

        <Button data-testid="update-btn" onClick={() => onUpdate()}>
          Update
        </Button>

        <Button data-testid="close-btn" onClick={() => onClose()}>
          Close
        </Button>

        <Button data-testid="close-all-btn" onClick={snack.closeAll}>
          Close all
        </Button>

        <Snacks snacks={snacks} gutter={[0, "md"]} />
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
      expect(screen.queryByText("test-description")).toHaveClass(
        "ui-snack__description",
      )
    })

    fireEvent.click(updateBtn)

    await waitFor(() => {
      expect(screen.queryByText("test-title")).toBeNull()
      expect(screen.queryByText("test-description")).toBeNull()
      expect(screen.queryByText("test-title-update")).toHaveClass(
        "ui-snack__title",
      )
      expect(screen.queryByText("test-description-update")).toHaveClass(
        "ui-snack__description",
      )
    })
  })

  test("Snacks renders correctly when close", async () => {
    render(<SnackExample />)

    const addBtn = screen.getByTestId("add-btn")
    const closeBtn = screen.getByTestId("close-btn")

    fireEvent.click(addBtn)
    fireEvent.click(closeBtn)

    await waitFor(() => {
      expect(screen.queryByText("test-title")).toBeNull()
      expect(screen.queryByText("test-description")).toBeNull()
    })
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
      expect(screen.queryByText("test-description")).toBeNull()
    })
  })
})
