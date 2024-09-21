import { a11y, render } from "@yamada-ui/test"
import { useState } from "react"
import {
  Drawer,
  DrawerHeader,
  DrawerFooter,
  DrawerBody,
  DrawerCloseButton,
  DrawerOverlay,
} from "../src"
import type { DrawerProps } from "../src"

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
            bg="blackAlpha.300"
            backdropFilter="blur(10px)"
          />
          <DrawerCloseButton data-testid="DrawerCloseButton" color="red.500" />
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
    const { user, findByTestId } = render(<DrawerOpenExample />)

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
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          placement={placement}
          closeOnDrag
        >
          <DrawerOverlay
            data-testid="DrawerOverlay"
            bg="blackAlpha.300"
            backdropFilter="blur(10px)"
          />
          <DrawerCloseButton data-testid="DrawerCloseButton" color="red.500" />
          <DrawerHeader data-testid="DrawerHeader">header</DrawerHeader>
          <DrawerBody data-testid="DrawerBody">body</DrawerBody>
          <DrawerFooter data-testid="DrawerFooter">footer</DrawerFooter>
        </Drawer>
      </>
    )
  }

  type TestDrawerPlacement = "top" | "left" | "bottom" | "right"
  interface ExpectedStyle {
    top?: string
    left?: string
    bottom?: string
    right?: string
  }

  const testDrawerPlacement = async (
    placement: TestDrawerPlacement,
    expectedStyle: ExpectedStyle,
  ) => {
    const { user, findByTestId } = render(
      <DrawerPlacementExample placement={placement} isOpen={false} />,
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
      top: "0",
      left: "0",
      right: "0",
    })
  })

  test("Drawer renders by placement left", async () => {
    await testDrawerPlacement("left", {
      top: "0",
      left: "0",
      bottom: "0",
    })
  })

  test("Drawer renders by placement bottom", async () => {
    await testDrawerPlacement("bottom", {
      left: "0",
      bottom: "0",
      right: "0",
    })
  })

  test("Drawer renders by placement right", async () => {
    await testDrawerPlacement("right", {
      top: "0",
      bottom: "0",
      right: "0",
    })
  })
})
