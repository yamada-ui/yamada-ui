import type { FC } from "react"
import { a11y, render, screen } from "@/test"
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
  test("renders modal correctly", async () => {
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
})
