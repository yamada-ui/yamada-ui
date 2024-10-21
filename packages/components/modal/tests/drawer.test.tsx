import type { MotionPanInfo } from "@yamada-ui/motion"
import type { DrawerProps } from "../src"
import { a11y, fireEvent, render, screen } from "@yamada-ui/test"
import { useCallback, useState } from "react"
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from "../src"

describe("<Drawer />", () => {
  const DrawerOpenExample = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
      <>
        <button data-testid="OpenDrawer" onClick={() => setIsOpen(true)}>
          Open Drawer
        </button>

        <Drawer
          data-testid="Drawer"
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        >
          <DrawerOverlay
            data-testid="DrawerOverlay"
            backdropFilter="blur(10px)"
            bg="blackAlpha.300"
          />
          <DrawerCloseButton data-testid="DrawerCloseButton" color="red.500" />
          <DrawerHeader data-testid="DrawerHeader">header</DrawerHeader>
          <DrawerBody data-testid="DrawerBody">body</DrawerBody>
          <DrawerFooter data-testid="DrawerFooter">footer</DrawerFooter>
        </Drawer>
      </>
    )
  }

  const useIsCloseByDragInfo = (
    placement: TestDrawerPlacement,
    dragVelocity: number,
    dragOffset: number,
  ) => {
    return useCallback(
      (info: MotionPanInfo) => {
        switch (placement) {
          case "top":
            return (
              info.velocity.y <= dragVelocity * -1 ||
              info.offset.y <= dragOffset * -1
            )
          case "bottom":
            return (
              info.velocity.y >= dragVelocity || info.offset.y >= dragOffset
            )
          case "left":
            return (
              info.velocity.x <= dragVelocity * -1 ||
              info.offset.x <= dragOffset * -1
            )
          case "right":
            return (
              info.velocity.x >= dragVelocity || info.offset.x >= dragOffset
            )
        }
      },
      [placement, dragVelocity, dragOffset],
    )
  }

  const MockDrawer = ({
    placement,
    onClose,
  }: {
    placement: TestDrawerPlacement
    onClose: () => void
  }) => {
    const isCloseByDragInfo = useIsCloseByDragInfo(placement, 0.3, 100)

    // Simulate drag end event
    const handleDragEnd = (event: React.MouseEvent<HTMLDivElement>) => {
      const info: MotionPanInfo = {
        delta: { x: 0, y: 0 },
        offset: { x: event.clientX, y: event.clientY },
        point: { x: event.clientX, y: event.clientY },
        velocity: { x: event.clientX * 0.01, y: event.clientY * 0.01 },
      }
      if (isCloseByDragInfo(info)) {
        onClose()
      }
    }

    return (
      <div
        style={{
          background: "white",
          height:
            placement === "top" || placement === "bottom" ? "300px" : "100%",
          [placement]: 0,
          position: "fixed",
          width:
            placement === "left" || placement === "right" ? "300px" : "100%",
        }}
        data-testid="drawer"
        onMouseUp={handleDragEnd}
      >
        Drawer Content
      </div>
    )
  }

  test("Drawer renders correctly", async () => {
    const { container } = render(<DrawerOpenExample />)
    await a11y(container)
  })

  test("Drawer renders correctly when open", async () => {
    const { findByTestId, user } = render(<DrawerOpenExample />)

    const openDrawerButton = await findByTestId("OpenDrawer")
    expect(openDrawerButton).toBeInTheDocument()

    await user.click(openDrawerButton)

    await expect(findByTestId("Drawer")).resolves.toBeInTheDocument()
    await expect(findByTestId("DrawerHeader")).resolves.toHaveTextContent(
      "header",
    )
    await expect(findByTestId("DrawerBody")).resolves.toHaveTextContent("body")
    await expect(findByTestId("DrawerFooter")).resolves.toHaveTextContent(
      "footer",
    )
  })

  const DrawerPlacementExample = ({ placement }: DrawerProps) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
      <>
        <button data-testid="OpenDrawer" onClick={() => setIsOpen(true)}>
          Open Drawer
        </button>

        <Drawer
          data-testid="Drawer"
          closeOnDrag
          isOpen={isOpen}
          placement={placement}
          onClose={() => setIsOpen(false)}
        >
          <DrawerOverlay
            data-testid="DrawerOverlay"
            backdropFilter="blur(10px)"
            bg="blackAlpha.300"
          />
          <DrawerCloseButton data-testid="DrawerCloseButton" color="red.500" />
          <DrawerHeader data-testid="DrawerHeader">header</DrawerHeader>
          <DrawerBody data-testid="DrawerBody">body</DrawerBody>
          <DrawerFooter data-testid="DrawerFooter">footer</DrawerFooter>
        </Drawer>
      </>
    )
  }

  type TestDrawerPlacement = "bottom" | "left" | "right" | "top"
  interface ExpectedStyle {
    bottom?: string
    left?: string
    right?: string
    top?: string
  }

  const testDrawerPlacement = async (
    placement: TestDrawerPlacement,
    expectedStyle: ExpectedStyle,
  ) => {
    const { findByTestId, user } = render(
      <DrawerPlacementExample isOpen={false} placement={placement} />,
    )

    const openDrawerButton = await findByTestId("OpenDrawer")
    expect(openDrawerButton).toBeInTheDocument()

    await user.click(openDrawerButton)

    const drawer = await findByTestId("Drawer")
    expect(drawer).toBeInTheDocument()

    Object.entries(expectedStyle).forEach(([key, value]) => {
      expect(drawer).toHaveStyle(`${key}: ${value}`)
    })

    await expect(findByTestId("DrawerHeader")).resolves.toHaveTextContent(
      "header",
    )
    await expect(findByTestId("DrawerBody")).resolves.toHaveTextContent("body")
    await expect(findByTestId("DrawerFooter")).resolves.toHaveTextContent(
      "footer",
    )
  }

  test("Drawer renders by placement top", async () => {
    await testDrawerPlacement("top", {
      left: "0",
      right: "0",
      top: "0",
    })
  })

  test("Drawer renders by placement left", async () => {
    await testDrawerPlacement("left", {
      bottom: "0",
      left: "0",
      top: "0",
    })
  })

  test("Drawer renders by placement bottom", async () => {
    await testDrawerPlacement("bottom", {
      bottom: "0",
      left: "0",
      right: "0",
    })
  })

  test("Drawer renders by placement right", async () => {
    await testDrawerPlacement("right", {
      bottom: "0",
      right: "0",
      top: "0",
    })
  })

  test("should close drawer when dragged beyond threshold (top placement)", () => {
    const onClose = vi.fn()
    render(<MockDrawer placement="top" onClose={onClose} />)

    const drawer = screen.getByTestId("drawer")
    fireEvent.mouseUp(drawer, { clientX: 0, clientY: -101 })

    expect(onClose).toHaveBeenCalledWith()
  })

  test("should close drawer when dragged beyond threshold (bottom placement)", () => {
    const onClose = vi.fn()
    render(<MockDrawer placement="bottom" onClose={onClose} />)

    const drawer = screen.getByTestId("drawer")
    fireEvent.mouseUp(drawer, { clientX: 0, clientY: 101 })

    expect(onClose).toHaveBeenCalledWith()
  })

  test("should close drawer when dragged beyond threshold (left placement)", () => {
    const onClose = vi.fn()
    render(<MockDrawer placement="left" onClose={onClose} />)

    const drawer = screen.getByTestId("drawer")
    fireEvent.mouseUp(drawer, { clientX: -101, clientY: 0 })

    expect(onClose).toHaveBeenCalledWith()
  })

  test("should close drawer when dragged beyond threshold (right placement)", () => {
    const onClose = vi.fn()
    render(<MockDrawer placement="right" onClose={onClose} />)

    const drawer = screen.getByTestId("drawer")
    fireEvent.mouseUp(drawer, { clientX: 101, clientY: 0 })

    expect(onClose).toHaveBeenCalledWith()
  })
})
