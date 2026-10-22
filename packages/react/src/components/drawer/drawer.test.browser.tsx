import type { CSSProperties, FC, PointerEvent } from "react"
import type { Locator, UserEvent } from "vitest/browser"
import { DragControls } from "motion/react"
import { createRef } from "react"
import { locators } from "vitest/browser"
import { a11y, page, render, renderHook } from "#test/browser"
import { Button } from "../button"
import { Drawer } from "./"
import { useDrawer } from "./use-drawer"

declare module "vitest/browser" {
  interface LocatorSelectors {
    getByClassName(className: string): Locator
  }
}

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

        <Drawer.DragTrigger>
          <Drawer.Header data-testid="header">
            <Drawer.Title data-testid="title">ドラゴンボール</Drawer.Title>
          </Drawer.Header>
        </Drawer.DragTrigger>

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

function Scrollable({
  style,
  axis = "y",
  direction = "ltr",
  nested = false,
}: {
  axis?: "x" | "y"
  direction?: "ltr" | "rtl"
  nested?: boolean
  style?: CSSProperties
}) {
  const { getContentProps } = useDrawer({
    closeOnDrag: true,
    open: true,
    placement: axis === "x" ? "inline-end" : "block-end",
  })
  const { onPointerDown, onPointerMove } = getContentProps()

  return (
    <div
      style={{ height: 100, overflow: "auto", width: 100, ...style }}
      aria-label="Scrollable content"
      dir={direction}
      role="region"
      // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
      tabIndex={0}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
    >
      <div style={{ flexShrink: 0, height: 400, width: 400 }}>
        {nested ? (
          <div
            style={{
              height: 40,
              left: 0,
              overflow: "auto",
              position: "sticky",
              top: 0,
              width: 40,
            }}
            aria-label="Inner"
            role="region"
            // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
            tabIndex={0}
          >
            <div style={{ height: 300, width: 300 }}>Content</div>
          </div>
        ) : (
          "Content"
        )}
      </div>
    </div>
  )
}

async function swipe(user: UserEvent, content: Locator, axis: "x" | "y") {
  await user.dragAndDrop(content, content, {
    sourcePosition: { x: 20, y: 20 },
    targetPosition: axis === "x" ? { x: 35, y: 20 } : { x: 20, y: 35 },
  })
}

describe("<Drawer />", () => {
  beforeAll(() => {
    locators.extend({
      getByClassName(className) {
        return `.${className}`
      },
    })
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  test("passes a11y checks", async () => {
    await a11y(<Drawer.Root trigger={<Button>Open modal</Button>} />)
  })

  test("passes a11y checks with dragHandleOnly and a custom drag trigger when open", async () => {
    await a11y(
      <Drawer.Root
        closeOnDrag
        dragHandleOnly
        open
        withCloseButton
        portalProps={{ disabled: true }}
      >
        <Drawer.Content>
          <Drawer.DragTrigger>
            <Drawer.Header>
              <Drawer.Title>Title</Drawer.Title>
            </Drawer.Header>
          </Drawer.DragTrigger>
          <Drawer.Body>Content</Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>,
    )
  })

  test.each([
    { closeOnDrag: true, dragHandleOnly: true },
    { closeOnDrag: true, dragHandleOnly: false },
    { closeOnDrag: false, dragHandleOnly: true },
  ])(
    "starts dragging from handles with closeOnDrag=$closeOnDrag and dragHandleOnly=$dragHandleOnly",
    async ({ closeOnDrag, dragHandleOnly }) => {
      const start = vi.spyOn(DragControls.prototype, "start")
      const { user } = await render(
        <TestComponent
          closeOnDrag={closeOnDrag}
          dragHandleOnly={dragHandleOnly}
          open
          placement="block-end"
        />,
      )

      const content = page.getByRole("dialog")
      const body = page.getByTestId("body")
      const dragBar = page.getByTestId("dragBar")
      const header = page.getByTestId("header")

      await expect.element(content).toHaveStyle({ transform: "none" })
      await expect.element(content).toHaveStyle({
        touchAction: "auto",
      })
      await expect.element(dragBar).toHaveStyle({
        touchAction: closeOnDrag && dragHandleOnly ? "none" : "auto",
      })
      await expect.element(header).toHaveStyle({
        touchAction: closeOnDrag && dragHandleOnly ? "none" : "auto",
      })

      await user.click(body)

      expect(start).toHaveBeenCalledTimes(
        closeOnDrag && !dragHandleOnly ? 1 : 0,
      )

      await user.click(dragBar)

      expect(start).toHaveBeenCalledTimes(
        closeOnDrag ? (dragHandleOnly ? 1 : 2) : 0,
      )

      await user.click(header)

      expect(start).toHaveBeenCalledTimes(
        closeOnDrag ? (dragHandleOnly ? 2 : 3) : 0,
      )
    },
  )

  test.each([false, true])(
    "composes drag trigger props and respects preventDefault (%s)",
    async (preventDefault) => {
      const start = vi.spyOn(DragControls.prototype, "start")
      const ref = createRef<HTMLDivElement>()
      const onPointerDown = vi.fn((ev: PointerEvent) => {
        if (preventDefault) ev.preventDefault()
      })
      const onChildPointerDown = vi.fn()
      const { user } = await render(
        <Drawer.Root closeOnDrag dragHandleOnly open withDragBar={false}>
          <Drawer.Content>
            <Drawer.Header>
              <Drawer.Title>Title</Drawer.Title>
            </Drawer.Header>
            <Drawer.DragTrigger
              style={{ userSelect: "none" }}
              onPointerDown={onPointerDown}
            >
              <div
                ref={ref}
                style={{ cursor: "grab" }}
                onPointerDown={onChildPointerDown}
              >
                Custom handle
              </div>
            </Drawer.DragTrigger>
            <Drawer.Body>Content</Drawer.Body>
            <Drawer.DragTrigger asChild={false}>
              Another handle
            </Drawer.DragTrigger>
          </Drawer.Content>
        </Drawer.Root>,
      )

      const handle = page.getByText("Custom handle")

      await expect.element(handle).toHaveStyle({
        cursor: "grab",
        touchAction: "none",
        userSelect: "none",
      })
      await expect.element(ref.current).toHaveTextContent("Custom handle")

      await user.click(handle)

      expect(onPointerDown).toHaveBeenCalledTimes(1)
      expect(onChildPointerDown).toHaveBeenCalledTimes(preventDefault ? 0 : 1)
      expect(start).toHaveBeenCalledTimes(preventDefault ? 0 : 1)

      await user.click(page.getByText("Another handle"))

      expect(start).toHaveBeenCalledTimes(preventDefault ? 1 : 2)
    },
  )

  test.each(["pointerdown", "pointermove"] as const)(
    "respects child preventDefault for %s without content event handlers",
    async (type) => {
      vi.spyOn(
        globalThis.PointerEvent.prototype,
        "pointerType",
        "get",
      ).mockReturnValue(type === "pointermove" ? "touch" : "mouse")

      const start = vi.spyOn(DragControls.prototype, "start")
      const preventDefault = (ev: PointerEvent) => ev.preventDefault()
      const { user } = await render(
        <Drawer.Root closeOnDrag open placement="block-end">
          <Drawer.Content>
            <Drawer.Header>
              <Drawer.Title>Title</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
              <div
                style={{ height: 80, width: 200 }}
                onPointerDown={
                  type === "pointerdown" ? preventDefault : undefined
                }
                onPointerMove={
                  type === "pointermove" ? preventDefault : undefined
                }
              >
                Drag area
              </div>
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Root>,
      )

      const area = page.getByText("Drag area")

      await user.dragAndDrop(area, area, {
        sourcePosition: { x: 20, y: 20 },
        targetPosition: { x: 20, y: 50 },
      })

      expect(start).not.toHaveBeenCalled()
    },
  )

  test("sets aria attributes correctly", async () => {
    await render(<TestComponent open />)

    const openTrigger = page.getByTestId("openTrigger")
    const overlay = page.getByTestId("overlay")
    const content = page.getByTestId("content")
    const closeButton = page.getByTestId("closeButton")
    const title = page.getByTestId("title")
    const body = page.getByTestId("body")
    const closeTrigger = page.getByTestId("closeTrigger")

    await expect.element(openTrigger).toHaveAttribute("aria-controls")
    await expect.element(openTrigger).toHaveAttribute("aria-expanded", "true")
    await expect.element(openTrigger).toHaveAttribute("aria-haspopup", "dialog")
    await expect
      .element(openTrigger)
      .toHaveAttribute("aria-label", "Open modal")
    await expect.element(overlay).toHaveAttribute("aria-hidden", "true")
    await expect.element(content).toHaveAttribute("aria-describedby")
    await expect.element(content).toHaveAttribute("aria-labelledby")
    await expect.element(content).toHaveAttribute("aria-modal", "true")
    await expect.element(content).toHaveAttribute("role", "dialog")
    await expect
      .element(closeButton)
      .toHaveAttribute("aria-label", "Close modal")
    await expect
      .element(closeTrigger)
      .toHaveAttribute("aria-label", "Close modal")
    await expect.element(title).toHaveAttribute("id")
    await expect.element(body).toHaveAttribute("id")
  })

  test("renders shorthand content with title and body", async () => {
    await render(
      <Drawer.Root body="Shorthand Body" open title="Shorthand Title" />,
    )

    await expect.element(page.getByText("Shorthand Title")).toBeInTheDocument()
    await expect.element(page.getByText("Shorthand Body")).toBeInTheDocument()
  })

  test("renders shorthand content with cancel, middle, and success buttons", async () => {
    await render(
      <Drawer.Root
        body="Drawer Body"
        cancel="Cancel"
        middle="Middle"
        open
        success="OK"
        title="Drawer Title"
      />,
    )

    await expect.element(page.getByText("Cancel")).toBeInTheDocument()
    await expect.element(page.getByText("Middle")).toBeInTheDocument()
    await expect.element(page.getByText("OK")).toBeInTheDocument()
  })

  test("calls onCancel callback when cancel button is clicked", async () => {
    const onCancel = vi.fn()
    const { user } = await render(
      <Drawer.Root body="Body" cancel="Cancel" open onCancel={onCancel} />,
    )

    await user.click(page.getByText("Cancel"))
    expect(onCancel).toHaveBeenCalledTimes(1)
  })

  test("calls onMiddle callback when middle button is clicked", async () => {
    const onMiddle = vi.fn()
    const { user } = await render(
      <Drawer.Root body="Body" middle="Middle" open onMiddle={onMiddle} />,
    )

    await user.click(page.getByText("Middle"))
    expect(onMiddle).toHaveBeenCalledTimes(1)
  })

  test("calls onSuccess callback when success button is clicked", async () => {
    const onSuccess = vi.fn()
    const { user } = await render(
      <Drawer.Root body="Body" open success="OK" onSuccess={onSuccess} />,
    )

    await user.click(page.getByText("OK"))
    expect(onSuccess).toHaveBeenCalledTimes(1)
  })

  test("renders default drag bar when closeOnDrag and withDragBar are true", async () => {
    await render(
      <Drawer.Root closeOnDrag open withDragBar>
        <Drawer.Content data-testid="content">
          <Drawer.Body>Content</Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>,
    )

    const contentLocator = page.getByTestId("content")
    const dragBarLocator = contentLocator.getByClassName("ui-drawer__drag-bar")

    await expect.element(contentLocator).toBeInTheDocument()
    await expect.element(dragBarLocator).toBeInTheDocument()
  })

  test("does not render drag bar when closeOnDrag is false", async () => {
    await render(
      <Drawer.Root closeOnDrag={false} open withDragBar>
        <Drawer.Content data-testid="content">
          <Drawer.Body>Content</Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>,
    )

    const contentLocator = page.getByTestId("content")
    const dragBarLocator = contentLocator.getByClassName("ui-drawer__drag-bar")

    await expect.element(contentLocator).toBeInTheDocument()
    await expect.element(dragBarLocator.query()).not.toBeInTheDocument()
  })

  test("renders without overlay when withOverlay is false", async () => {
    await render(
      <Drawer.Root open withOverlay={false}>
        <Drawer.Content>
          <Drawer.Body>Content</Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>,
    )

    await expect.element(page.getByText("Content")).toBeInTheDocument()
    await expect
      .element(page.getByClassName("ui-drawer__overlay").query())
      .not.toBeInTheDocument()
  })

  test("renders with trigger prop", async () => {
    await render(
      <Drawer.Root trigger={<Button>Trigger Button</Button>}>
        <Drawer.Content>
          <Drawer.Body>Content</Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>,
    )

    await expect.element(page.getByText("Trigger Button")).toBeInTheDocument()
  })

  test("renders with placement block-start", async () => {
    await render(
      <Drawer.Root closeOnDrag open placement="block-start">
        <Drawer.Content data-testid="content">
          <Drawer.Body>Content</Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>,
    )

    await expect.element(page.getByTestId("content")).toBeInTheDocument()
  })

  test("renders with placement block-end", async () => {
    await render(
      <Drawer.Root closeOnDrag open placement="block-end">
        <Drawer.Content data-testid="content">
          <Drawer.Body>Content</Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>,
    )

    await expect.element(page.getByTestId("content")).toBeInTheDocument()
  })

  test("renders with placement inline-start", async () => {
    await render(
      <Drawer.Root closeOnDrag open placement="inline-start">
        <Drawer.Content data-testid="content">
          <Drawer.Body>Content</Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>,
    )

    await expect.element(page.getByTestId("content")).toBeInTheDocument()
  })

  test("renders with placement inline-end", async () => {
    await render(
      <Drawer.Root closeOnDrag open placement="inline-end">
        <Drawer.Content data-testid="content">
          <Drawer.Body>Content</Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>,
    )

    await expect.element(page.getByTestId("content")).toBeInTheDocument()
  })

  test("renders shorthand content with header as props object", async () => {
    await render(
      <Drawer.Root
        body="Body Content"
        header={{ children: "Header Content" }}
        open
      />,
    )

    await expect.element(page.getByText("Header Content")).toBeInTheDocument()
    await expect.element(page.getByText("Body Content")).toBeInTheDocument()
  })

  test("renders shorthand content with footer as props object", async () => {
    await render(
      <Drawer.Root
        body="Body Content"
        footer={{ children: "Footer Content" }}
        open
      />,
    )

    await expect.element(page.getByText("Footer Content")).toBeInTheDocument()
  })

  test("closes drawer when cancel button is clicked without onCancel", async () => {
    const onClose = vi.fn()
    const { user } = await render(
      <Drawer.Root body="Body" cancel="Cancel" open onClose={onClose} />,
    )

    await user.click(page.getByText("Cancel"))
    expect(onClose).toHaveBeenCalledWith(undefined)
  })

  test("closes drawer when middle button is clicked without onMiddle", async () => {
    const onClose = vi.fn()
    const { user } = await render(
      <Drawer.Root body="Body" middle="Middle" open onClose={onClose} />,
    )

    await user.click(page.getByText("Middle"))
    expect(onClose).toHaveBeenCalledWith(undefined)
  })

  test("closes drawer when success button is clicked without onSuccess", async () => {
    const onClose = vi.fn()
    const { user } = await render(
      <Drawer.Root body="Body" open success="OK" onClose={onClose} />,
    )

    await user.click(page.getByText("OK"))
    expect(onClose).toHaveBeenCalledWith(undefined)
  })
})

describe("useDrawer", () => {
  const mockEvent = {} as MouseEvent

  test("uses manual drag controls to preserve native scrolling", async () => {
    const { result } = await renderHook(() =>
      useDrawer({ closeOnDrag: true, placement: "block-end" }),
    )

    const contentProps = result.current.getContentProps()

    expect(contentProps.drag).toBe("y")
    expect(contentProps.dragListener).toBe(false)
    expect(contentProps.dragControls).toBeInstanceOf(DragControls)
  })

  test.each(["pointercancel", "touchcancel"])(
    "does not close when dragging is canceled by %s",
    async (type) => {
      const onClose = vi.fn()
      const { result } = await renderHook(() =>
        useDrawer({ closeOnDrag: true, placement: "block-end", onClose }),
      )

      result.current.getContentProps().onDragEnd?.({ type } as MouseEvent, {
        delta: { x: 0, y: 0 },
        offset: { x: 0, y: 100 },
        point: { x: 0, y: 0 },
        velocity: { x: 0, y: 200 },
      })

      expect(onClose).not.toHaveBeenCalled()
    },
  )

  test("does not close after a prevented drag end without a content handler", async () => {
    const onClose = vi.fn()
    const { result } = await renderHook(() =>
      useDrawer({ closeOnDrag: true, placement: "block-end", onClose }),
    )
    const ev = new MouseEvent("pointerup", { cancelable: true })

    ev.preventDefault()

    result.current.getContentProps().onDragEnd?.(ev, {
      delta: { x: 0, y: 0 },
      offset: { x: 0, y: 100 },
      point: { x: 0, y: 0 },
      velocity: { x: 0, y: 200 },
    })

    expect(onClose).not.toHaveBeenCalled()
  })

  test("calls onClose when dragged up with sufficient velocity for block-start", async () => {
    const onClose = vi.fn()
    const { result } = await renderHook(() =>
      useDrawer({
        closeOnDrag: true,
        open: true,
        placement: "block-start",
        onClose,
      }),
    )

    const contentProps = result.current.getContentProps()

    contentProps.onDragEnd?.(mockEvent, {
      delta: { x: 0, y: 0 },
      offset: { x: 0, y: 0 },
      point: { x: 0, y: 0 },
      velocity: { x: 0, y: -200 },
    })

    expect(onClose).toHaveBeenCalledWith(undefined)
  })

  test("calls onClose when dragged up with sufficient offset for block-start", async () => {
    const onClose = vi.fn()
    const { result } = await renderHook(() =>
      useDrawer({
        closeOnDrag: true,
        open: true,
        placement: "block-start",
        onClose,
      }),
    )

    const contentProps = result.current.getContentProps()

    contentProps.onDragEnd?.(mockEvent, {
      delta: { x: 0, y: 0 },
      offset: { x: 0, y: -100 },
      point: { x: 0, y: 0 },
      velocity: { x: 0, y: 0 },
    })

    expect(onClose).toHaveBeenCalledWith(undefined)
  })

  test("does not call onClose when drag is insufficient for block-start", async () => {
    const onClose = vi.fn()
    const { result } = await renderHook(() =>
      useDrawer({
        closeOnDrag: true,
        open: true,
        placement: "block-start",
        onClose,
      }),
    )

    const contentProps = result.current.getContentProps()

    contentProps.onDragEnd?.(mockEvent, {
      delta: { x: 0, y: 0 },
      offset: { x: 0, y: -10 },
      point: { x: 0, y: 0 },
      velocity: { x: 0, y: -10 },
    })

    expect(onClose).not.toHaveBeenCalled()
  })

  test("calls onClose when dragged down with sufficient velocity for block-end", async () => {
    const onClose = vi.fn()
    const { result } = await renderHook(() =>
      useDrawer({
        closeOnDrag: true,
        open: true,
        placement: "block-end",
        onClose,
      }),
    )

    const contentProps = result.current.getContentProps()

    contentProps.onDragEnd?.(mockEvent, {
      delta: { x: 0, y: 0 },
      offset: { x: 0, y: 0 },
      point: { x: 0, y: 0 },
      velocity: { x: 0, y: 200 },
    })

    expect(onClose).toHaveBeenCalledWith(undefined)
  })

  test("calls onClose when dragged down with sufficient offset for block-end", async () => {
    const onClose = vi.fn()
    const { result } = await renderHook(() =>
      useDrawer({
        closeOnDrag: true,
        open: true,
        placement: "block-end",
        onClose,
      }),
    )

    const contentProps = result.current.getContentProps()

    contentProps.onDragEnd?.(mockEvent, {
      delta: { x: 0, y: 0 },
      offset: { x: 0, y: 100 },
      point: { x: 0, y: 0 },
      velocity: { x: 0, y: 0 },
    })

    expect(onClose).toHaveBeenCalledWith(undefined)
  })

  test("calls onClose when dragged left with sufficient velocity for inline-start", async () => {
    const onClose = vi.fn()
    const { result } = await renderHook(() =>
      useDrawer({
        closeOnDrag: true,
        open: true,
        placement: "inline-start",
        onClose,
      }),
    )

    const contentProps = result.current.getContentProps()

    contentProps.onDragEnd?.(mockEvent, {
      delta: { x: 0, y: 0 },
      offset: { x: 0, y: 0 },
      point: { x: 0, y: 0 },
      velocity: { x: -200, y: 0 },
    })

    expect(onClose).toHaveBeenCalledWith(undefined)
  })

  test("calls onClose when dragged left with sufficient offset for inline-start", async () => {
    const onClose = vi.fn()
    const { result } = await renderHook(() =>
      useDrawer({
        closeOnDrag: true,
        open: true,
        placement: "inline-start",
        onClose,
      }),
    )

    const contentProps = result.current.getContentProps()

    contentProps.onDragEnd?.(mockEvent, {
      delta: { x: 0, y: 0 },
      offset: { x: -100, y: 0 },
      point: { x: 0, y: 0 },
      velocity: { x: 0, y: 0 },
    })

    expect(onClose).toHaveBeenCalledWith(undefined)
  })

  test("calls onClose when dragged right with sufficient velocity for inline-end", async () => {
    const onClose = vi.fn()
    const { result } = await renderHook(() =>
      useDrawer({
        closeOnDrag: true,
        open: true,
        placement: "inline-end",
        onClose,
      }),
    )

    const contentProps = result.current.getContentProps()

    contentProps.onDragEnd?.(mockEvent, {
      delta: { x: 0, y: 0 },
      offset: { x: 0, y: 0 },
      point: { x: 0, y: 0 },
      velocity: { x: 200, y: 0 },
    })

    expect(onClose).toHaveBeenCalledWith(undefined)
  })

  test("calls onClose when dragged right with sufficient offset for inline-end", async () => {
    const onClose = vi.fn()
    const { result } = await renderHook(() =>
      useDrawer({
        closeOnDrag: true,
        open: true,
        placement: "inline-end",
        onClose,
      }),
    )

    const contentProps = result.current.getContentProps()

    contentProps.onDragEnd?.(mockEvent, {
      delta: { x: 0, y: 0 },
      offset: { x: 100, y: 0 },
      point: { x: 0, y: 0 },
      velocity: { x: 0, y: 0 },
    })

    expect(onClose).toHaveBeenCalledWith(undefined)
  })
})

describe("scroll-aware dragging", () => {
  beforeEach(() => {
    vi.spyOn(
      globalThis.PointerEvent.prototype,
      "pointerType",
      "get",
    ).mockReturnValue("touch")
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  test("passes a11y checks", async () => {
    await a11y(<Scrollable />)
  })

  test.each(["x", "y"] as const)(
    "prioritizes scrolling until the closing boundary on the %s axis",
    async (axis) => {
      const start = vi.spyOn(DragControls.prototype, "start")
      const { user } = await render(<Scrollable axis={axis} />)
      const content = page.getByRole("region", { name: "Scrollable content" })
      const property = axis === "x" ? "scrollLeft" : "scrollTop"

      await swipe(user, content, axis)

      expect(start).toHaveBeenCalledTimes(1)

      start.mockClear()

      await user.wheel(content, {
        delta: axis === "x" ? { x: 150 } : { y: 150 },
      })
      await expect.element(content).not.toHaveProperty(property, 0)

      await swipe(user, content, axis)

      expect(start).not.toHaveBeenCalled()

      await user.wheel(content, {
        delta: axis === "x" ? { x: 1000 } : { y: 1000 },
        times: 8,
      })
      await expect.element(content).toHaveProperty(property, 300)

      await swipe(user, content, axis)

      expect(start).not.toHaveBeenCalled()
    },
  )

  test("handles negative horizontal scroll offsets in RTL", async () => {
    const start = vi.spyOn(DragControls.prototype, "start")
    const { user } = await render(<Scrollable axis="x" direction="rtl" />)
    const content = page.getByRole("region", { name: "Scrollable content" })

    await swipe(user, content, "x")

    expect(start).not.toHaveBeenCalled()

    await user.wheel(content, { delta: { x: -150 } })
    await expect.element(content).not.toHaveProperty("scrollLeft", 0)

    await swipe(user, content, "x")

    expect(start).not.toHaveBeenCalled()

    await user.wheel(content, { delta: { x: -1000 }, times: 8 })
    await expect.element(content).toHaveProperty("scrollLeft", -300)

    await swipe(user, content, "x")

    expect(start).toHaveBeenCalledTimes(1)
  })

  test("handles reversed vertical scrolling", async () => {
    const start = vi.spyOn(DragControls.prototype, "start")
    const { user } = await render(
      <Scrollable
        style={{ display: "flex", flexDirection: "column-reverse" }}
      />,
    )
    const content = page.getByRole("region", { name: "Scrollable content" })

    await swipe(user, content, "y")

    expect(start).not.toHaveBeenCalled()

    await user.wheel(content, { delta: { y: -1000 }, times: 8 })
    await expect.element(content).toHaveProperty("scrollTop", -300)

    await swipe(user, content, "y")

    expect(start).toHaveBeenCalledTimes(1)
  })

  test.each(["x", "y"] as const)(
    "checks scrollable ancestors on the %s axis",
    async (axis) => {
      const start = vi.spyOn(DragControls.prototype, "start")
      const { user } = await render(<Scrollable axis={axis} nested />)
      const outer = page.getByRole("region", { name: "Scrollable content" })
      const inner = page.getByRole("region", { name: "Inner", exact: true })

      await swipe(user, inner, axis)

      expect(start).toHaveBeenCalledTimes(1)

      start.mockClear()

      await user.wheel(outer, { delta: axis === "x" ? { x: 150 } : { y: 150 } })
      await expect
        .element(outer)
        .not.toHaveProperty(axis === "x" ? "scrollLeft" : "scrollTop", 0)

      await swipe(user, inner, axis)

      expect(start).not.toHaveBeenCalled()
    },
  )

  test.each(["hidden", "visible", "clip"] as const)(
    "allows dragging from overflow: %s",
    async (overflow) => {
      const start = vi.spyOn(DragControls.prototype, "start")
      const { user } = await render(<Scrollable style={{ overflow }} />)
      const content = page.getByRole("region", { name: "Scrollable content" })

      await swipe(user, content, "y")

      expect(start).toHaveBeenCalledTimes(1)
    },
  )

  test("ignores content that does not overflow", async () => {
    const start = vi.spyOn(DragControls.prototype, "start")
    const { user } = await render(
      <Scrollable style={{ height: 500, width: 500 }} />,
    )
    const content = page.getByRole("region", { name: "Scrollable content" })

    await swipe(user, content, "y")

    expect(start).toHaveBeenCalledTimes(1)
  })
})
