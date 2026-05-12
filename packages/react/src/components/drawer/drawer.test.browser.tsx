import type { FC } from "react"
import { type Locator, locators } from "vitest/browser"
import { page, render, renderHook } from "#test/browser"
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
  beforeAll(() => {
    locators.extend({
      getByClassName(className) {
        return `.${className}`
      },
    })
  })

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
