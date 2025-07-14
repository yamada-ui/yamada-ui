import type { FC } from "react"
import { a11y, render, screen } from "@/test"
import { Button } from "../button"
import { Drawer } from "./"

const TestComponent: FC<Drawer.RootProps> = (props) => {
  return (
    <Drawer.Root data-testid="root" {...props}>
      <Drawer.OpenTrigger>
        <Button data-testid="openTrigger">Open Drawer</Button>
      </Drawer.OpenTrigger>

      <Drawer.Overlay data-testid="overlay" />

      <Drawer.Content data-testid="content">
        <Drawer.DragBar data-testid="dragBar" />

        <Drawer.CloseButton data-testid="closeButton" />

        <Drawer.Header data-testid="header">
          <Drawer.Title data-testid="title">ドラゴンボール</Drawer.Title>
        </Drawer.Header>

        <Drawer.Body data-testid="body">
          『ドラゴンボール』（DRAGON
          BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
        </Drawer.Body>

        <Drawer.Footer data-testid="footer">
          <Drawer.CloseTrigger>
            <Button variant="ghost" data-testid="closeTrigger">
              とじる
            </Button>
          </Drawer.CloseTrigger>
          <Button>Wikipedia</Button>
        </Drawer.Footer>
      </Drawer.Content>
    </Drawer.Root>
  )
}

describe("<Drawer />", () => {
  test("renders modal correctly", async () => {
    await a11y(<TestComponent />)
  })

  test("sets `displayName` correctly", () => {
    expect(Drawer.Root.displayName).toBe("DrawerRoot")
    expect(Drawer.Overlay.displayName).toBe("DrawerOverlay")
    expect(Drawer.OpenTrigger.displayName).toBe("DrawerOpenTrigger")
    expect(Drawer.CloseTrigger.displayName).toBe("DrawerCloseTrigger")
    expect(Drawer.CloseButton.displayName).toBe("DrawerCloseButton")
    expect(Drawer.Content.displayName).toBe("DrawerContent")
    expect(Drawer.DragBar.displayName).toBe("DrawerDragBar")
    expect(Drawer.Header.displayName).toBe("DrawerHeader")
    expect(Drawer.Title.displayName).toBe("DrawerTitle")
    expect(Drawer.Body.displayName).toBe("DrawerBody")
    expect(Drawer.Footer.displayName).toBe("DrawerFooter")
  })

  test("sets `className` correctly", () => {
    render(<TestComponent open withDragBar />)
    const root = screen.getByTestId("root")
    const overlay = screen.getByTestId("overlay")
    const content = screen.getByTestId("content")
    const dragBar = screen.getByTestId("dragBar")
    const closeButton = screen.getByTestId("closeButton")
    const header = screen.getByTestId("header")
    const title = screen.getByTestId("title")
    const body = screen.getByTestId("body")
    const footer = screen.getByTestId("footer")
    expect(root).toHaveClass("ui-drawer__root")
    expect(overlay).toHaveClass("ui-drawer__overlay")
    expect(content).toHaveClass("ui-drawer__content")
    expect(dragBar).toHaveClass("ui-drawer__drag-bar")
    expect(closeButton).toHaveClass("ui-drawer__close-button")
    expect(header).toHaveClass("ui-drawer__header")
    expect(title).toHaveClass("ui-drawer__title")
    expect(body).toHaveClass("ui-drawer__body")
    expect(footer).toHaveClass("ui-drawer__footer")
  })

  test("sets HTML tag correctly", () => {
    render(<TestComponent open withDragBar />)
    const root = screen.getByTestId("root")
    const overlay = screen.getByTestId("overlay")
    const content = screen.getByTestId("content")
    const dragBar = screen.getByTestId("dragBar")
    const closeButton = screen.getByTestId("closeButton")
    const header = screen.getByTestId("header")
    const title = screen.getByTestId("title")
    const body = screen.getByTestId("body")
    const footer = screen.getByTestId("footer")
    expect(root.tagName).toBe("DIV")
    expect(overlay.tagName).toBe("DIV")
    expect(content.tagName).toBe("SECTION")
    expect(dragBar.tagName).toBe("DIV")
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
