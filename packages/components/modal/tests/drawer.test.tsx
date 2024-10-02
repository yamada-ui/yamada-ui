import type { DrawerProps } from "../src"
import { a11y, render } from "@yamada-ui/test"
import { useState } from "react"
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
          isOpen={isOpen}
          data-testid="Drawer"
          onClose={() => setIsOpen(false)}
        >
          <DrawerOverlay
            backdropFilter="blur(10px)"
            bg="blackAlpha.300"
            data-testid="DrawerOverlay"
          />
          <DrawerCloseButton color="red.500" data-testid="DrawerCloseButton" />
          <DrawerHeader data-testid="DrawerHeader">header</DrawerHeader>
          <DrawerBody data-testid="DrawerBody">body</DrawerBody>
          <DrawerFooter data-testid="DrawerFooter">footer</DrawerFooter>
        </Drawer>
      </>
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
          closeOnDrag
          isOpen={isOpen}
          placement={placement}
          data-testid="Drawer"
          onClose={() => setIsOpen(false)}
        >
          <DrawerOverlay
            backdropFilter="blur(10px)"
            bg="blackAlpha.300"
            data-testid="DrawerOverlay"
          />
          <DrawerCloseButton color="red.500" data-testid="DrawerCloseButton" />
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
})
