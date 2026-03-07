import type { FC } from "react"
import { a11y, fireEvent, render, screen, waitFor } from "#test"
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

        <Modal.Body data-testid="body">
          『ドラゴンボール』（DRAGON
          BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
        </Modal.Body>

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
    await a11y(<TestComponent />)
  })

  test("sets `displayName` correctly", () => {
    expect(Modal.Root.displayName).toBe("ModalRoot")
    expect(Modal.Overlay.displayName).toBe("ModalOverlay")
    expect(Modal.OpenTrigger.displayName).toBe("ModalOpenTrigger")
    expect(Modal.CloseTrigger.displayName).toBe("ModalCloseTrigger")
    expect(Modal.CloseButton.displayName).toBe("ModalCloseButton")
    expect(Modal.Content.displayName).toBe("ModalContent")
    expect(Modal.Header.displayName).toBe("ModalHeader")
    expect(Modal.Title.displayName).toBe("ModalTitle")
    expect(Modal.Body.displayName).toBe("ModalBody")
    expect(Modal.Footer.displayName).toBe("ModalFooter")
  })

  test("sets `className` correctly", () => {
    render(<TestComponent open />)
    const root = screen.getByTestId("root")
    const overlay = screen.getByTestId("overlay")
    const content = screen.getByTestId("content")
    const closeButton = screen.getByTestId("closeButton")
    const header = screen.getByTestId("header")
    const title = screen.getByTestId("title")
    const body = screen.getByTestId("body")
    const footer = screen.getByTestId("footer")
    expect(root).toHaveClass("ui-modal__root")
    expect(overlay).toHaveClass("ui-modal__overlay")
    expect(content).toHaveClass("ui-modal__content")
    expect(closeButton).toHaveClass("ui-modal__close-button")
    expect(header).toHaveClass("ui-modal__header")
    expect(title).toHaveClass("ui-modal__title")
    expect(body).toHaveClass("ui-modal__body")
    expect(footer).toHaveClass("ui-modal__footer")
  })

  test("sets HTML tag correctly", () => {
    render(<TestComponent open />)
    const root = screen.getByTestId("root")
    const overlay = screen.getByTestId("overlay")
    const content = screen.getByTestId("content")
    const closeButton = screen.getByTestId("closeButton")
    const header = screen.getByTestId("header")
    const title = screen.getByTestId("title")
    const body = screen.getByTestId("body")
    const footer = screen.getByTestId("footer")
    expect(root.tagName).toBe("DIV")
    expect(overlay.tagName).toBe("DIV")
    expect(content.tagName).toBe("SECTION")
    expect(closeButton.tagName).toBe("BUTTON")
    expect(header.tagName).toBe("HEADER")
    expect(title.tagName).toBe("H2")
    expect(body.tagName).toBe("DIV")
    expect(footer.tagName).toBe("FOOTER")
  })

  test("sets aria attributes correctly", () => {
    render(<TestComponent open />)
    const openTrigger = screen.getByTestId("openTrigger")
    const overlay = screen.getByTestId("overlay")
    const content = screen.getByTestId("content")
    const closeButton = screen.getByTestId("closeButton")
    const title = screen.getByTestId("title")
    const body = screen.getByTestId("body")
    const closeTrigger = screen.getByTestId("closeTrigger")
    expect(openTrigger).toHaveAttribute("aria-controls")
    expect(openTrigger).toHaveAttribute("aria-expanded", "true")
    expect(openTrigger).toHaveAttribute("aria-haspopup", "dialog")
    expect(openTrigger).toHaveAttribute("aria-label", "Open modal")
    expect(overlay).toHaveAttribute("aria-hidden", "true")
    expect(content).toHaveAttribute("aria-describedby")
    expect(content).toHaveAttribute("aria-labelledby")
    expect(content).toHaveAttribute("aria-modal", "true")
    expect(content).toHaveAttribute("role", "dialog")
    expect(closeButton).toHaveAttribute("aria-label", "Close modal")
    expect(closeTrigger).toHaveAttribute("aria-label", "Close modal")
    expect(title).toHaveAttribute("id")
    expect(body).toHaveAttribute("id")
  })

  test("renders shorthand content with title, body, and footer buttons", () => {
    render(
      <Modal.Root
        body={<p data-testid="shorthand-body">Body content</p>}
        cancel={<>Cancel</>}
        open
        success={<>OK</>}
        title={<>Modal Title</>}
      />,
    )
    expect(screen.getByText("Modal Title")).toBeInTheDocument()
    expect(screen.getByTestId("shorthand-body")).toBeInTheDocument()
    expect(screen.getByText("Cancel")).toBeInTheDocument()
    expect(screen.getByText("OK")).toBeInTheDocument()
  })

  test("renders shorthand content with middle button", () => {
    render(<Modal.Root middle={<>Middle</>} open success={<>OK</>} />)
    expect(screen.getByText("Middle")).toBeInTheDocument()
    expect(screen.getByText("OK")).toBeInTheDocument()
  })

  test("calls onCancel callback when cancel button is clicked", () => {
    const onCancel = vi.fn()
    render(<Modal.Root cancel={<>Cancel</>} open onCancel={onCancel} />)
    fireEvent.click(screen.getByText("Cancel"))
    expect(onCancel).toHaveBeenCalledOnce()
  })

  test("calls onMiddle callback when middle button is clicked", () => {
    const onMiddle = vi.fn()
    render(<Modal.Root middle={<>Middle</>} open onMiddle={onMiddle} />)
    fireEvent.click(screen.getByText("Middle"))
    expect(onMiddle).toHaveBeenCalledOnce()
  })

  test("calls onSuccess callback when success button is clicked", () => {
    const onSuccess = vi.fn()
    render(<Modal.Root open success={<>OK</>} onSuccess={onSuccess} />)
    fireEvent.click(screen.getByText("OK"))
    expect(onSuccess).toHaveBeenCalledOnce()
  })

  test("renders overlay without animation when `animationScheme` is `none`", () => {
    render(<TestComponent animationScheme="none" open />)
    const overlay = screen.getByTestId("overlay")
    expect(overlay).toBeInTheDocument()
  })

  test("closes modal when Escape key is pressed", () => {
    const onEsc = vi.fn()
    const onClose = vi.fn()
    render(<TestComponent open onClose={onClose} onEsc={onEsc} />)
    const content = screen.getByTestId("content")
    fireEvent.keyDown(content, { key: "Escape" })
    expect(onEsc).toHaveBeenCalledOnce()
    expect(onClose).toHaveBeenCalledOnce()
  })

  test("does not close modal when Escape is pressed and `closeOnEsc` is false", () => {
    const onEsc = vi.fn()
    const onClose = vi.fn()
    render(
      <TestComponent closeOnEsc={false} open onClose={onClose} onEsc={onEsc} />,
    )
    const content = screen.getByTestId("content")
    fireEvent.keyDown(content, { key: "Escape" })
    expect(onEsc).toHaveBeenCalledOnce()
    expect(onClose).not.toHaveBeenCalled()
  })

  test("does not trigger onEsc when a non-Escape key is pressed", () => {
    const onEsc = vi.fn()
    render(<TestComponent open onEsc={onEsc} />)
    const content = screen.getByTestId("content")
    fireEvent.keyDown(content, { key: "Enter" })
    expect(onEsc).not.toHaveBeenCalled()
  })

  test("closes modal when overlay is clicked", () => {
    const onClose = vi.fn()
    render(<TestComponent open onClose={onClose} />)
    const overlay = screen.getByTestId("overlay")
    fireEvent.click(overlay)
    expect(onClose).toHaveBeenCalledOnce()
  })

  test("does not close modal when overlay is clicked and `closeOnOverlay` is false", () => {
    const onClose = vi.fn()
    render(<TestComponent closeOnOverlay={false} open onClose={onClose} />)
    const overlay = screen.getByTestId("overlay")
    fireEvent.click(overlay)
    expect(onClose).not.toHaveBeenCalled()
  })

  test("renders without overlay when `withOverlay` is false", () => {
    render(
      <Modal.Root open withOverlay={false}>
        <Modal.Content data-testid="content">
          <Modal.Body>Content</Modal.Body>
        </Modal.Content>
      </Modal.Root>,
    )
    expect(screen.queryByRole("presentation")).not.toBeInTheDocument()
  })

  test("renders without close button when `withCloseButton` is false", () => {
    render(
      <Modal.Root open withCloseButton={false}>
        <Modal.Content data-testid="content">
          <Modal.Body>Content</Modal.Body>
        </Modal.Content>
      </Modal.Root>,
    )
    expect(screen.queryByLabelText("Close modal")).not.toBeInTheDocument()
  })

  test("renders with custom trigger prop", () => {
    render(
      <Modal.Root trigger={<Button data-testid="custom-trigger">Open</Button>}>
        <Modal.Content>
          <Modal.Body>Content</Modal.Body>
        </Modal.Content>
      </Modal.Root>,
    )
    expect(screen.getByTestId("custom-trigger")).toBeInTheDocument()
  })

  test("calls onCloseComplete after modal exit animation", async () => {
    const onCloseComplete = vi.fn()
    const { rerender } = render(
      <TestComponent open onCloseComplete={onCloseComplete} />,
    )
    rerender(<TestComponent open={false} onCloseComplete={onCloseComplete} />)
    await waitFor(() => {
      expect(onCloseComplete).toHaveBeenCalledOnce()
    })
  })

  test("renders shorthand content with header and footer as props objects", () => {
    render(
      <Modal.Root
        body={{ children: "Body text" }}
        footer={{ children: "Footer text" }}
        header={{ children: "Header text" }}
        open
      />,
    )
    expect(screen.getByText("Header text")).toBeInTheDocument()
    expect(screen.getByText("Body text")).toBeInTheDocument()
    expect(screen.getByText("Footer text")).toBeInTheDocument()
  })

  test("closes modal when cancel button is clicked without onCancel", () => {
    const onClose = vi.fn()
    render(<Modal.Root cancel={<>Cancel</>} open onClose={onClose} />)
    fireEvent.click(screen.getByText("Cancel"))
    expect(onClose).toHaveBeenCalledOnce()
  })

  test("closes modal when middle button is clicked without onMiddle", () => {
    const onClose = vi.fn()
    render(<Modal.Root middle={<>Middle</>} open onClose={onClose} />)
    fireEvent.click(screen.getByText("Middle"))
    expect(onClose).toHaveBeenCalledOnce()
  })

  test("closes modal when success button is clicked without onSuccess", () => {
    const onClose = vi.fn()
    render(<Modal.Root open success={<>OK</>} onClose={onClose} />)
    fireEvent.click(screen.getByText("OK"))
    expect(onClose).toHaveBeenCalledOnce()
  })
})
