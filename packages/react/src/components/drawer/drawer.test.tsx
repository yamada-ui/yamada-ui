import type { FC } from "react"
import { a11y, act, render, renderHook, screen } from "#test"
import { Button } from "../button"
import { Drawer } from "./"
import { useDrawer } from "./use-drawer"

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
  test("renders component correctly", async () => {
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

  test("renders shorthand content with title, body, and footer", () => {
    render(<Drawer.Root body="Shorthand Body" open title="Shorthand Title" />)

    expect(screen.getByText("Shorthand Title")).toBeInTheDocument()
    expect(screen.getByText("Shorthand Body")).toBeInTheDocument()
  })

  test("renders shorthand content with cancel, middle, and success buttons", () => {
    render(
      <Drawer.Root
        body="Drawer Body"
        cancel="Cancel"
        middle="Middle"
        open
        success="OK"
        title="Drawer Title"
      />,
    )

    expect(screen.getByText("Cancel")).toBeInTheDocument()
    expect(screen.getByText("Middle")).toBeInTheDocument()
    expect(screen.getByText("OK")).toBeInTheDocument()
  })

  test("calls onCancel callback when cancel button is clicked", async () => {
    const onCancel = vi.fn()
    const { user } = render(
      <Drawer.Root body="Body" cancel="Cancel" open onCancel={onCancel} />,
    )

    await user.click(screen.getByText("Cancel"))
    expect(onCancel).toHaveBeenCalledTimes(1)
  })

  test("calls onMiddle callback when middle button is clicked", async () => {
    const onMiddle = vi.fn()
    const { user } = render(
      <Drawer.Root body="Body" middle="Middle" open onMiddle={onMiddle} />,
    )

    await user.click(screen.getByText("Middle"))
    expect(onMiddle).toHaveBeenCalledTimes(1)
  })

  test("calls onSuccess callback when success button is clicked", async () => {
    const onSuccess = vi.fn()
    const { user } = render(
      <Drawer.Root body="Body" open success="OK" onSuccess={onSuccess} />,
    )

    await user.click(screen.getByText("OK"))
    expect(onSuccess).toHaveBeenCalledTimes(1)
  })

  test("renders default drag bar when closeOnDrag and withDragBar are true", () => {
    render(
      <Drawer.Root closeOnDrag open withDragBar>
        <Drawer.Content data-testid="content">
          <Drawer.Body>Content</Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>,
    )

    const content = screen.getByTestId("content")
    expect(content).toBeInTheDocument()
    expect(content.querySelector(".ui-drawer__drag-bar")).toBeInTheDocument()
  })

  test("does not render drag bar when closeOnDrag is false", () => {
    render(
      <Drawer.Root closeOnDrag={false} open withDragBar>
        <Drawer.Content data-testid="content">
          <Drawer.Body>Content</Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>,
    )

    const content = screen.getByTestId("content")
    expect(
      content.querySelector(".ui-drawer__drag-bar"),
    ).not.toBeInTheDocument()
  })

  test("renders without overlay when withOverlay is false", () => {
    render(
      <Drawer.Root open withOverlay={false}>
        <Drawer.Content>
          <Drawer.Body>Content</Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>,
    )

    expect(
      document.querySelector(".ui-drawer__overlay"),
    ).not.toBeInTheDocument()
  })

  test("renders with trigger prop", () => {
    render(
      <Drawer.Root trigger={<Button>Trigger Button</Button>}>
        <Drawer.Content>
          <Drawer.Body>Content</Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>,
    )

    expect(screen.getByText("Trigger Button")).toBeInTheDocument()
  })

  test("renders with placement block-start", () => {
    render(
      <Drawer.Root closeOnDrag open placement="block-start">
        <Drawer.Content data-testid="content">
          <Drawer.Body>Content</Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>,
    )

    expect(screen.getByTestId("content")).toBeInTheDocument()
  })

  test("renders with placement block-end", () => {
    render(
      <Drawer.Root closeOnDrag open placement="block-end">
        <Drawer.Content data-testid="content">
          <Drawer.Body>Content</Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>,
    )

    expect(screen.getByTestId("content")).toBeInTheDocument()
  })

  test("renders with placement inline-start", () => {
    render(
      <Drawer.Root closeOnDrag open placement="inline-start">
        <Drawer.Content data-testid="content">
          <Drawer.Body>Content</Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>,
    )

    expect(screen.getByTestId("content")).toBeInTheDocument()
  })

  test("renders with placement inline-end", () => {
    render(
      <Drawer.Root closeOnDrag open placement="inline-end">
        <Drawer.Content data-testid="content">
          <Drawer.Body>Content</Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>,
    )

    expect(screen.getByTestId("content")).toBeInTheDocument()
  })

  test("renders shorthand content with header as props object", () => {
    render(
      <Drawer.Root
        body="Body Content"
        header={{ children: "Header Content" }}
        open
      />,
    )

    expect(screen.getByText("Header Content")).toBeInTheDocument()
    expect(screen.getByText("Body Content")).toBeInTheDocument()
  })

  test("renders shorthand content with footer as props object", () => {
    render(
      <Drawer.Root
        body="Body Content"
        footer={{ children: "Footer Content" }}
        open
      />,
    )

    expect(screen.getByText("Footer Content")).toBeInTheDocument()
  })

  test("closes drawer when cancel button is clicked without onCancel", async () => {
    const onClose = vi.fn()
    const { user } = render(
      <Drawer.Root body="Body" cancel="Cancel" open onClose={onClose} />,
    )

    await user.click(screen.getByText("Cancel"))
    expect(onClose).toHaveBeenCalledWith(undefined)
  })

  test("closes drawer when middle button is clicked without onMiddle", async () => {
    const onClose = vi.fn()
    const { user } = render(
      <Drawer.Root body="Body" middle="Middle" open onClose={onClose} />,
    )

    await user.click(screen.getByText("Middle"))
    expect(onClose).toHaveBeenCalledWith(undefined)
  })

  test("closes drawer when success button is clicked without onSuccess", async () => {
    const onClose = vi.fn()
    const { user } = render(
      <Drawer.Root body="Body" open success="OK" onClose={onClose} />,
    )

    await user.click(screen.getByText("OK"))
    expect(onClose).toHaveBeenCalledWith(undefined)
  })
})

describe("useDrawer", () => {
  const mockEvent = {} as MouseEvent

  test("calls onClose when dragged up with sufficient velocity for block-start", () => {
    const onClose = vi.fn()
    const { result } = renderHook(() =>
      useDrawer({
        closeOnDrag: true,
        open: true,
        placement: "block-start",
        onClose,
      }),
    )

    const contentProps = result.current.getContentProps()

    act(() => {
      contentProps.onDragEnd?.(mockEvent, {
        delta: { x: 0, y: 0 },
        offset: { x: 0, y: 0 },
        point: { x: 0, y: 0 },
        velocity: { x: 0, y: -200 },
      })
    })

    expect(onClose).toHaveBeenCalledWith(undefined)
  })

  test("calls onClose when dragged up with sufficient offset for block-start", () => {
    const onClose = vi.fn()
    const { result } = renderHook(() =>
      useDrawer({
        closeOnDrag: true,
        open: true,
        placement: "block-start",
        onClose,
      }),
    )

    const contentProps = result.current.getContentProps()

    act(() => {
      contentProps.onDragEnd?.(mockEvent, {
        delta: { x: 0, y: 0 },
        offset: { x: 0, y: -100 },
        point: { x: 0, y: 0 },
        velocity: { x: 0, y: 0 },
      })
    })

    expect(onClose).toHaveBeenCalledWith(undefined)
  })

  test("does not call onClose when drag is insufficient for block-start", () => {
    const onClose = vi.fn()
    const { result } = renderHook(() =>
      useDrawer({
        closeOnDrag: true,
        open: true,
        placement: "block-start",
        onClose,
      }),
    )

    const contentProps = result.current.getContentProps()

    act(() => {
      contentProps.onDragEnd?.(mockEvent, {
        delta: { x: 0, y: 0 },
        offset: { x: 0, y: -10 },
        point: { x: 0, y: 0 },
        velocity: { x: 0, y: -10 },
      })
    })

    expect(onClose).not.toHaveBeenCalledWith(undefined)
  })

  test("calls onClose when dragged down with sufficient velocity for block-end", () => {
    const onClose = vi.fn()
    const { result } = renderHook(() =>
      useDrawer({
        closeOnDrag: true,
        open: true,
        placement: "block-end",
        onClose,
      }),
    )

    const contentProps = result.current.getContentProps()

    act(() => {
      contentProps.onDragEnd?.(mockEvent, {
        delta: { x: 0, y: 0 },
        offset: { x: 0, y: 0 },
        point: { x: 0, y: 0 },
        velocity: { x: 0, y: 200 },
      })
    })

    expect(onClose).toHaveBeenCalledWith(undefined)
  })

  test("calls onClose when dragged down with sufficient offset for block-end", () => {
    const onClose = vi.fn()
    const { result } = renderHook(() =>
      useDrawer({
        closeOnDrag: true,
        open: true,
        placement: "block-end",
        onClose,
      }),
    )

    const contentProps = result.current.getContentProps()

    act(() => {
      contentProps.onDragEnd?.(mockEvent, {
        delta: { x: 0, y: 0 },
        offset: { x: 0, y: 100 },
        point: { x: 0, y: 0 },
        velocity: { x: 0, y: 0 },
      })
    })

    expect(onClose).toHaveBeenCalledWith(undefined)
  })

  test("calls onClose when dragged left with sufficient velocity for inline-start", () => {
    const onClose = vi.fn()
    const { result } = renderHook(() =>
      useDrawer({
        closeOnDrag: true,
        open: true,
        placement: "inline-start",
        onClose,
      }),
    )

    const contentProps = result.current.getContentProps()

    act(() => {
      contentProps.onDragEnd?.(mockEvent, {
        delta: { x: 0, y: 0 },
        offset: { x: 0, y: 0 },
        point: { x: 0, y: 0 },
        velocity: { x: -200, y: 0 },
      })
    })

    expect(onClose).toHaveBeenCalledWith(undefined)
  })

  test("calls onClose when dragged left with sufficient offset for inline-start", () => {
    const onClose = vi.fn()
    const { result } = renderHook(() =>
      useDrawer({
        closeOnDrag: true,
        open: true,
        placement: "inline-start",
        onClose,
      }),
    )

    const contentProps = result.current.getContentProps()

    act(() => {
      contentProps.onDragEnd?.(mockEvent, {
        delta: { x: 0, y: 0 },
        offset: { x: -100, y: 0 },
        point: { x: 0, y: 0 },
        velocity: { x: 0, y: 0 },
      })
    })

    expect(onClose).toHaveBeenCalledWith(undefined)
  })

  test("calls onClose when dragged right with sufficient velocity for inline-end", () => {
    const onClose = vi.fn()
    const { result } = renderHook(() =>
      useDrawer({
        closeOnDrag: true,
        open: true,
        placement: "inline-end",
        onClose,
      }),
    )

    const contentProps = result.current.getContentProps()

    act(() => {
      contentProps.onDragEnd?.(mockEvent, {
        delta: { x: 0, y: 0 },
        offset: { x: 0, y: 0 },
        point: { x: 0, y: 0 },
        velocity: { x: 200, y: 0 },
      })
    })

    expect(onClose).toHaveBeenCalledWith(undefined)
  })

  test("calls onClose when dragged right with sufficient offset for inline-end", () => {
    const onClose = vi.fn()
    const { result } = renderHook(() =>
      useDrawer({
        closeOnDrag: true,
        open: true,
        placement: "inline-end",
        onClose,
      }),
    )

    const contentProps = result.current.getContentProps()

    act(() => {
      contentProps.onDragEnd?.(mockEvent, {
        delta: { x: 0, y: 0 },
        offset: { x: 100, y: 0 },
        point: { x: 0, y: 0 },
        velocity: { x: 0, y: 0 },
      })
    })

    expect(onClose).toHaveBeenCalledWith(undefined)
  })
})
