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

  test("sets `className` correctly", async () => {
    await render(<TestComponent open />)
    await expect.element(page.getByTestId("root")).toHaveClass("ui-modal__root")
    await expect
      .element(page.getByTestId("overlay"))
      .toHaveClass("ui-modal__overlay")
    await expect
      .element(page.getByTestId("content"))
      .toHaveClass("ui-modal__content")
    await expect
      .element(page.getByTestId("closeButton"))
      .toHaveClass("ui-modal__close-button")
    await expect
      .element(page.getByTestId("header"))
      .toHaveClass("ui-modal__header")
    await expect
      .element(page.getByTestId("title"))
      .toHaveClass("ui-modal__title")
    await expect.element(page.getByTestId("body")).toHaveClass("ui-modal__body")
    await expect
      .element(page.getByTestId("footer"))
      .toHaveClass("ui-modal__footer")
  })

  test("sets HTML tag correctly", async () => {
    await render(<TestComponent open />)
    expect(page.getByTestId("root").element().tagName).toBe("DIV")
    expect(page.getByTestId("overlay").element().tagName).toBe("DIV")
    expect(page.getByTestId("content").element().tagName).toBe("SECTION")
    expect(page.getByTestId("closeButton").element().tagName).toBe("BUTTON")
    expect(page.getByTestId("header").element().tagName).toBe("HEADER")
    expect(page.getByTestId("title").element().tagName).toBe("H2")
    expect(page.getByTestId("body").element().tagName).toBe("DIV")
    expect(page.getByTestId("footer").element().tagName).toBe("FOOTER")
  })

  test("sets aria attributes correctly", async () => {
    await render(<TestComponent open />)
    await expect
      .element(page.getByTestId("openTrigger"))
      .toHaveAttribute("aria-controls")
    await expect
      .element(page.getByTestId("openTrigger"))
      .toHaveAttribute("aria-expanded", "true")
    await expect
      .element(page.getByTestId("openTrigger"))
      .toHaveAttribute("aria-haspopup", "dialog")
    await expect
      .element(page.getByTestId("openTrigger"))
      .toHaveAttribute("aria-label", "Open modal")
    await expect
      .element(page.getByTestId("overlay"))
      .toHaveAttribute("aria-hidden", "true")
    await expect
      .element(page.getByTestId("content"))
      .toHaveAttribute("aria-describedby")
    await expect
      .element(page.getByTestId("content"))
      .toHaveAttribute("aria-labelledby")
    await expect
      .element(page.getByTestId("content"))
      .toHaveAttribute("aria-modal", "true")
    await expect
      .element(page.getByTestId("content"))
      .toHaveAttribute("role", "dialog")
    await expect
      .element(page.getByTestId("closeButton"))
      .toHaveAttribute("aria-label", "Close modal")
    await expect
      .element(page.getByTestId("closeTrigger"))
      .toHaveAttribute("aria-label", "Close modal")
    await expect.element(page.getByTestId("title")).toHaveAttribute("id")
    await expect.element(page.getByTestId("body")).toHaveAttribute("id")
  })

  test("renders shorthand content with title, body, and footer buttons", async () => {
    await render(
      <Modal.Root
        body={<p data-testid="shorthand-body">Body content</p>}
        cancel={<>Cancel</>}
        open
        success={<>OK</>}
        title={<>Modal Title</>}
      />,
    )
    await expect.element(page.getByText("Modal Title")).toBeInTheDocument()
    await expect.element(page.getByTestId("shorthand-body")).toBeInTheDocument()
    await expect.element(page.getByText("Cancel")).toBeInTheDocument()
    await expect.element(page.getByText("OK")).toBeInTheDocument()
  })

  test("renders shorthand content with middle button", async () => {
    await render(<Modal.Root middle={<>Middle</>} open success={<>OK</>} />)
    await expect.element(page.getByText("Middle")).toBeInTheDocument()
    await expect.element(page.getByText("OK")).toBeInTheDocument()
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

  test("renders overlay without animation when `animationScheme` is `none`", async () => {
    await render(<TestComponent animationScheme="none" open />)
    await expect.element(page.getByTestId("overlay")).toBeInTheDocument()
  })

  test("closes modal when Escape key is pressed", async () => {
    const onEsc = vi.fn()
    const onClose = vi.fn()
    const { user } = await render(
      <TestComponent open onClose={onClose} onEsc={onEsc} />,
    )
    const content = page.getByTestId("content").element()
    const closeButton = page.getByRole("button", { name: "Close modal" })
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
    const closeButton = page.getByRole("button", { name: "Close modal" })
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
    const closeButton = page.getByRole("button", { name: "Close modal" })
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
    await render(<TestComponent open onClose={onClose} />)
    page.getByTestId("overlay").element().click()
    await vi.waitFor(() => {
      expect(onClose).toHaveBeenCalledOnce()
    })
  })

  test("does not close modal when overlay is clicked and `closeOnOverlay` is false", async () => {
    const onClose = vi.fn()
    await render(
      <TestComponent closeOnOverlay={false} open onClose={onClose} />,
    )
    page.getByTestId("overlay").element().click()
    expect(onClose).not.toHaveBeenCalled()
  })

  test("renders without overlay when `withOverlay` is false", async () => {
    await render(
      <Modal.Root open withOverlay={false}>
        <Modal.Content data-testid="content">
          <Modal.Body>Content</Modal.Body>
        </Modal.Content>
      </Modal.Root>,
    )
    await expect
      .element(page.getByRole("presentation").query())
      .not.toBeInTheDocument()
  })

  test("renders without close button when `withCloseButton` is false", async () => {
    await render(
      <Modal.Root open withCloseButton={false}>
        <Modal.Content data-testid="content">
          <Modal.Body>Content</Modal.Body>
        </Modal.Content>
      </Modal.Root>,
    )
    await expect
      .element(page.getByLabelText("Close modal").query())
      .not.toBeInTheDocument()
  })

  test("renders with custom trigger prop", async () => {
    await render(
      <Modal.Root trigger={<Button data-testid="custom-trigger">Open</Button>}>
        <Modal.Content>
          <Modal.Body>Content</Modal.Body>
        </Modal.Content>
      </Modal.Root>,
    )
    await expect.element(page.getByTestId("custom-trigger")).toBeInTheDocument()
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

  test("renders shorthand content with header and footer as props objects", async () => {
    await render(
      <Modal.Root
        body={{ children: "Body text" }}
        footer={{ children: "Footer text" }}
        header={{ children: "Header text" }}
        open
      />,
    )
    await expect.element(page.getByText("Header text")).toBeInTheDocument()
    await expect.element(page.getByText("Body text")).toBeInTheDocument()
    await expect.element(page.getByText("Footer text")).toBeInTheDocument()
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
})
