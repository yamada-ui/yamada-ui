import type { FC } from "react"
import { a11y, page, render } from "#test/browser"
import { Button } from "../button"
import { Modal } from "./"

const TestComponent: FC<Modal.RootProps> = (props) => {
  return (
    <Modal.Root data-testid="root" {...props}>
      <Modal.OpenTrigger>
        <Button data-testid="openTrigger">Open Modal</Button>
      </Modal.OpenTrigger>

      <Modal.Overlay data-testid="overlay" />

      <Modal.Content data-testid="content">
        <Modal.CloseButton data-testid="closeButton" />

        <Modal.Header data-testid="header">
          <Modal.Title data-testid="title">ドラゴンボール</Modal.Title>
        </Modal.Header>

        <Modal.Body data-testid="body">Body</Modal.Body>

        <Modal.Footer data-testid="footer">
          <Modal.CloseTrigger>
            <Button variant="ghost" data-testid="closeTrigger">
              とじる
            </Button>
          </Modal.CloseTrigger>
          <Button>Wikipedia</Button>
        </Modal.Footer>
      </Modal.Content>
    </Modal.Root>
  )
}

describe("<Modal />", () => {
  test("renders component correctly", async () => {
    await a11y(<TestComponent open />)
  })

  test("calls onCancel callback when cancel button is clicked", async () => {
    const onCancel = vi.fn()
    const { user } = await render(
      <Modal.Root cancel={<>Cancel</>} open onCancel={onCancel} />,
    )
    await user.click(page.getByText("Cancel"))
    expect(onCancel).toHaveBeenCalledOnce()
  })

  test("calls onMiddle callback when middle button is clicked", async () => {
    const onMiddle = vi.fn()
    const { user } = await render(
      <Modal.Root middle={<>Middle</>} open onMiddle={onMiddle} />,
    )
    await user.click(page.getByText("Middle"))
    expect(onMiddle).toHaveBeenCalledOnce()
  })

  test("calls onSuccess callback when success button is clicked", async () => {
    const onSuccess = vi.fn()
    const { user } = await render(
      <Modal.Root open success={<>OK</>} onSuccess={onSuccess} />,
    )
    await user.click(page.getByText("OK"))
    expect(onSuccess).toHaveBeenCalledOnce()
  })

  test("closes modal when cancel button is clicked without onCancel", async () => {
    const onClose = vi.fn()
    const { user } = await render(
      <Modal.Root cancel={<>Cancel</>} open onClose={onClose} />,
    )
    await user.click(page.getByText("Cancel"))
    expect(onClose).toHaveBeenCalledOnce()
  })

  test("closes modal when middle button is clicked without onMiddle", async () => {
    const onClose = vi.fn()
    const { user } = await render(
      <Modal.Root middle={<>Middle</>} open onClose={onClose} />,
    )
    await user.click(page.getByText("Middle"))
    expect(onClose).toHaveBeenCalledOnce()
  })

  test("closes modal when success button is clicked without onSuccess", async () => {
    const onClose = vi.fn()
    const { user } = await render(
      <Modal.Root open success={<>OK</>} onClose={onClose} />,
    )
    await user.click(page.getByText("OK"))
    expect(onClose).toHaveBeenCalledOnce()
  })

  test("closes modal when Escape key is pressed", async () => {
    const onEsc = vi.fn()
    const onClose = vi.fn()
    const { user } = await render(
      <TestComponent open onClose={onClose} onEsc={onEsc} />,
    )
    const content = page.getByTestId("content").element()
    const closeButton = page.getByTestId("closeButton")
    await vi.waitFor(() => {
      expect(content.contains(document.activeElement)).toBeTruthy()
    })
    closeButton.element().focus()
    await vi.waitFor(() => {
      expect(document.activeElement).toBe(closeButton.element())
    })
    await user.keyboard("{Escape}")
    expect(onEsc).toHaveBeenCalledOnce()
    expect(onClose).toHaveBeenCalledOnce()
  })

  test("does not close modal when Escape is pressed and `closeOnEsc` is false", async () => {
    const onEsc = vi.fn()
    const onClose = vi.fn()
    const { user } = await render(
      <TestComponent closeOnEsc={false} open onClose={onClose} onEsc={onEsc} />,
    )
    const content = page.getByTestId("content").element()
    const closeButton = page.getByTestId("closeButton")
    await vi.waitFor(() => {
      expect(content.contains(document.activeElement)).toBeTruthy()
    })
    closeButton.element().focus()
    await vi.waitFor(() => {
      expect(document.activeElement).toBe(closeButton.element())
    })
    await user.keyboard("{Escape}")
    expect(onEsc).toHaveBeenCalledOnce()
    expect(onClose).not.toHaveBeenCalled()
  })

  test("does not trigger onEsc when a non-Escape key is pressed", async () => {
    const onEsc = vi.fn()
    const { user } = await render(<TestComponent open onEsc={onEsc} />)
    const content = page.getByTestId("content").element()
    const closeButton = page.getByTestId("closeButton")
    await vi.waitFor(() => {
      expect(content.contains(document.activeElement)).toBeTruthy()
    })
    closeButton.element().focus()
    await vi.waitFor(() => {
      expect(document.activeElement).toBe(closeButton.element())
    })
    await user.keyboard("{Enter}")
    expect(onEsc).not.toHaveBeenCalled()
  })

  test("closes modal when overlay is clicked", async () => {
    const onClose = vi.fn()
    const { user } = await render(<TestComponent open onClose={onClose} />)
    await user.click(page.getByTestId("overlay"), { position: { x: 5, y: 5 } })
    await vi.waitFor(() => {
      expect(onClose).toHaveBeenCalledOnce()
    })
  })

  test("does not close modal when overlay is clicked and `closeOnOverlay` is false", async () => {
    const onClose = vi.fn()
    const { user } = await render(
      <TestComponent closeOnOverlay={false} open onClose={onClose} />,
    )
    await user.click(page.getByTestId("overlay"), { position: { x: 5, y: 5 } })
    expect(onClose).not.toHaveBeenCalled()
  })

  test("calls onCloseComplete after modal exit animation", async () => {
    const onCloseComplete = vi.fn()
    const { rerender } = await render(
      <TestComponent open onCloseComplete={onCloseComplete} />,
    )
    rerender(<TestComponent open={false} onCloseComplete={onCloseComplete} />)
    await vi.waitFor(() => {
      expect(onCloseComplete).toHaveBeenCalledOnce()
    })
  })
})
