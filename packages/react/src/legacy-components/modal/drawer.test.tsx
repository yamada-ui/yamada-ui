import type { DrawerProps } from "./"
import { useState } from "react"
import { a11y, render } from "../../../test"
import { Button } from "../button"
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from "./"

describe("<Drawer />", () => {
  const DrawerOpenExample = () => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <button data-testid="OpenDrawer" onClick={() => setOpen(true)}>
          Open Drawer
        </button>

        <Drawer data-testid="Drawer" open={open} onClose={() => setOpen(false)}>
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
    const [open, setOpen] = useState(false)

    return (
      <>
        <button data-testid="OpenDrawer" onClick={() => setOpen(true)}>
          Open Drawer
        </button>

        <Drawer
          data-testid="Drawer"
          closeOnDrag
          open={open}
          placement={placement}
          onClose={() => setOpen(false)}
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
      <DrawerPlacementExample open={false} placement={placement} />,
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

  const DrawerCloseButtonExample = ({
    customDrawerCloseButton = false,
    withCloseButton = true,
  }) => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <button data-testid="OpenDrawer" onClick={() => setOpen(true)}>
          Open Drawer
        </button>

        <Drawer
          data-testid="Drawer"
          open={open}
          withCloseButton={withCloseButton}
          onClose={() => setOpen(false)}
        >
          <DrawerOverlay
            data-testid="DrawerOverlay"
            backdropFilter="blur(10px)"
            bg="blackAlpha.300"
          />
          {customDrawerCloseButton ? (
            <Button
              data-testid="CustomDrawerCloseButton"
              onClick={() => setOpen(false)}
            >
              Close
            </Button>
          ) : (
            withCloseButton && (
              <DrawerCloseButton data-testid="DefaultDrawerCloseButton" />
            )
          )}
          <DrawerHeader>Header</DrawerHeader>
          <DrawerBody>Body</DrawerBody>
        </Drawer>
      </>
    )
  }

  test("should render custom close button when provided", async () => {
    const { findByTestId, user } = render(
      <DrawerCloseButtonExample customDrawerCloseButton />,
    )

    const openButton = await findByTestId("OpenDrawer")
    await user.click(openButton)

    const customButton = await findByTestId("CustomDrawerCloseButton")
    expect(customButton).toBeInTheDocument()
  })

  test("should render default close button when withCloseButton is true and no custom button provided", async () => {
    const { findByTestId, user } = render(<DrawerCloseButtonExample />)

    const openButton = await findByTestId("OpenDrawer")
    await user.click(openButton)

    const defaultButton = await findByTestId("DefaultDrawerCloseButton")
    expect(defaultButton).toBeInTheDocument()
  })

  test("should not render any close button when withCloseButton is false", async () => {
    const { findByTestId, queryByTestId, user } = render(
      <DrawerCloseButtonExample withCloseButton={false} />,
    )

    const openButton = await findByTestId("OpenDrawer")
    await user.click(openButton)

    const customButton = queryByTestId("CustomDrawerCloseButton")
    expect(customButton).not.toBeInTheDocument()
  })
})
