import type { ModalProps } from "../src"
import { a11y, act, fireEvent, render, screen, waitFor } from "@yamada-ui/test"
import { useState } from "react"
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "../src"

interface Props {
  placement?: ModalProps["placement"]
}

describe("<Modal />", () => {
  const ModalExample = ({ placement }: Props) => {
    const [open, setOpen] = useState(false)

    const modalHeaderId = "modal-header-id"

    return (
      <>
        <button onClick={() => setOpen(true)}>Open</button>

        <Modal
          aria-labelledby={modalHeaderId}
          open={open}
          placement={placement}
          onClose={() => setOpen(false)}
        >
          <ModalHeader id={modalHeaderId}>Modal Header</ModalHeader>

          <ModalBody>This is modal body</ModalBody>

          <ModalFooter>
            <button onClick={() => setOpen(false)}>Close</button>
            <button>Wikipedia</button>
          </ModalFooter>
        </Modal>
      </>
    )
  }

  const ModalCloseExample = () => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <button data-testid="OpenModal" onClick={() => setOpen(true)}>
          Open
        </button>
        <Modal data-testid="Modal" open={open} onClose={() => setOpen(false)}>
          <ModalCloseButton data-testid="ModalCloseButton" />
          <ModalOverlay
            data-testid="ModalOverlay"
            backdropFilter="blur(10px)"
            bg="blackAlpha.300"
          />
          <ModalHeader data-testid="ModalHeader">Modal Header</ModalHeader>

          <ModalBody data-testid="ModalBody">This is modal body</ModalBody>

          <ModalFooter data-testid="ModalFooter">
            <button data-testid="ModalClose" onClick={() => setOpen(false)}>
              Close
            </button>
            <button>Wikipedia</button>
          </ModalFooter>
        </Modal>
      </>
    )
  }

  test("Modal renders correctly", async () => {
    const { container } = render(<ModalExample />)
    await a11y(container)
  })

  test("should render modal", async () => {
    const { user } = render(<ModalExample />)

    const openModalButton = await screen.findByRole("button", {
      name: /open/i,
    })
    await user.click(openModalButton)

    const modal = await screen.findByRole("dialog", { name: /modal header/i })
    await waitFor(() => expect(modal).toBeVisible())

    const modalHeader = await screen.findByText(/modal header/i)
    expect(modalHeader).toBeInTheDocument()

    const modalBody = await screen.findByText(/this is modal body/i)
    expect(modalBody).toBeInTheDocument()

    const closeButton = await screen.findByRole("button", {
      name: /^close$/i,
    })
    expect(closeButton).toBeInTheDocument()
  })

  test("should render nested modal", async () => {
    const NestedModal = () => {
      const [isPrimaryOpen, setIsPrimaryOpen] = useState(false)
      const [isSecondaryOpen, setIsSecondaryOpen] = useState(false)

      const primaryModalHeaderId = "primary-modal-header-id"
      const secondaryModalHeaderId = "secondary-modal-header-id"

      return (
        <>
          <button onClick={() => setIsPrimaryOpen(true)}>Open</button>

          <Modal
            aria-labelledby={primaryModalHeaderId}
            open={isPrimaryOpen}
            onClose={() => setIsPrimaryOpen(false)}
          >
            <ModalHeader id={primaryModalHeaderId}>Modal Header</ModalHeader>

            <ModalBody>This is modal body</ModalBody>

            <ModalFooter>
              <button onClick={() => setIsPrimaryOpen(false)}>
                Close Primary Modal
              </button>
              <button onClick={() => setIsSecondaryOpen(true)}>
                Secondary Modal Open
              </button>
            </ModalFooter>

            <Modal
              size="sm"
              aria-labelledby={secondaryModalHeaderId}
              open={isSecondaryOpen}
              onClose={() => setIsSecondaryOpen(false)}
            >
              <ModalHeader id={secondaryModalHeaderId}>
                Secondary Modal
              </ModalHeader>

              <ModalBody>This is a secondary modal</ModalBody>

              <ModalFooter>
                <button onClick={() => setIsSecondaryOpen(false)}>Close</button>
                <button>Wikipedia</button>
              </ModalFooter>
            </Modal>
          </Modal>
        </>
      )
    }
    const { user } = render(<NestedModal />)

    const primaryModalOpenButton = await screen.findByRole("button", {
      name: /open/i,
    })
    expect(primaryModalOpenButton).toBeVisible()

    await user.click(primaryModalOpenButton)

    const primaryModalCloseButton = await screen.findByRole("button", {
      name: /close primary modal/i,
    })
    expect(primaryModalCloseButton).toBeInTheDocument()

    const secondaryModalOpenButton = await screen.findByRole("button", {
      name: /secondary modal open/i,
    })
    expect(secondaryModalOpenButton).toBeInTheDocument()

    await user.click(secondaryModalOpenButton)

    const secondaryModal = await screen.findByRole("dialog", {
      name: /secondary modal/i,
    })

    await waitFor(() => expect(secondaryModal).toBeVisible())
  })

  test("Modal renders correctly when clicking modal close button", async () => {
    const { findByRole, findByTestId, queryByTestId, user } = render(
      <ModalCloseExample />,
    )

    const openButton = await findByRole("button", { name: "Open" })
    await user.click(openButton)
    await expect(findByTestId("Modal")).resolves.toBeInTheDocument()
    const closeButton = await findByTestId("ModalCloseButton")
    await user.click(closeButton)
    await waitFor(() => {
      expect(queryByTestId("Modal")).toBeNull()
    })
  })

  test("Modal renders correctly when clicking overlay", async () => {
    const { findByRole, findByTestId, queryByTestId, user } = render(
      <ModalCloseExample />,
    )
    const openButton = await findByRole("button", { name: "Open" })
    await user.click(openButton)
    await expect(findByTestId("Modal")).resolves.toBeInTheDocument()
    const ModalOverlay = await findByTestId("ModalOverlay")
    await user.click(ModalOverlay)
    await waitFor(() => {
      expect(queryByTestId("Modal")).toBeNull()
    })
  })

  test("Escape keyDown should work correctly", async () => {
    const { findByRole, findByTestId, getByTestId, queryByTestId, user } =
      render(<ModalCloseExample />)
    const openButton = await findByRole("button", { name: "Open" })
    await user.click(openButton)
    const modal = getByTestId("Modal")
    await expect(findByTestId("Modal")).resolves.toBeInTheDocument()
    await act(() => fireEvent.keyDown(modal, { key: "Escape" }))
    await waitFor(() => {
      expect(queryByTestId("Modal")).toBeNull()
    })
  })

  test("should display modal to the left when placement is set to 'left'", async () => {
    const { user } = render(<ModalExample placement="left" />)

    const openModalButton = await screen.findByRole("button", {
      name: /open/i,
    })
    await user.click(openModalButton)

    const modal = await screen.findByRole("dialog", { name: /modal header/i })

    await waitFor(() => {
      expect(modal).toBeVisible()
    })
    const modalContainer = modal.parentElement
    expect(modalContainer).toHaveStyle({
      "align-items": "center",
      "justify-content": "flex-start",
    })
  })

  test("should display modal to the right when placement is set to 'right'", async () => {
    const { user } = render(<ModalExample placement="right" />)

    const openModalButton = await screen.findByRole("button", {
      name: /open/i,
    })
    await user.click(openModalButton)

    const modal = await screen.findByRole("dialog", { name: /modal header/i })

    await waitFor(() => {
      expect(modal).toBeVisible()
    })
    const modalContainer = modal.parentElement
    expect(modalContainer).toHaveStyle({
      "align-items": "center",
      "justify-content": "flex-end",
    })
  })

  test("should display modal to the top when placement is set to 'top'", async () => {
    const { user } = render(<ModalExample placement="top" />)

    const openModalButton = await screen.findByRole("button", {
      name: /open/i,
    })
    await user.click(openModalButton)

    const modal = await screen.findByRole("dialog", { name: /modal header/i })

    await waitFor(() => {
      expect(modal).toBeVisible()
    })
    const modalContainer = modal.parentElement
    expect(modalContainer).toHaveStyle({
      "align-items": "flex-start",
      "justify-content": "center",
    })
  })

  test("should display modal to the bottom when placement is set to 'bottom'", async () => {
    const { user } = render(<ModalExample placement="bottom" />)

    const openModalButton = await screen.findByRole("button", {
      name: /open/i,
    })
    await user.click(openModalButton)

    const modal = await screen.findByRole("dialog", { name: /modal header/i })

    await waitFor(() => {
      expect(modal).toBeVisible()
    })
    const modalContainer = modal.parentElement
    expect(modalContainer).toHaveStyle({
      "align-items": "flex-end",
      "justify-content": "center",
    })
  })

  const ModalAnimationExample = ({
    animation,
    duration,
  }: Pick<ModalProps, "animation" | "duration">) => {
    const [open, setOpen] = useState(false)
    const modalHeaderId = "modal-header-id"

    return (
      <>
        <button onClick={() => setOpen(true)}>Open</button>
        <Modal
          aria-labelledby={modalHeaderId}
          animation={animation}
          duration={duration}
          open={open}
          onClose={() => setOpen(false)}
        >
          <ModalHeader id={modalHeaderId}>Modal Header</ModalHeader>
          <ModalBody>This is modal body</ModalBody>
          <ModalFooter>
            <button onClick={() => setOpen(false)}>Close</button>
          </ModalFooter>
        </Modal>
      </>
    )
  }

  test("should render modal with top animation", async () => {
    const { user } = render(<ModalAnimationExample animation="top" />)

    const openButton = screen.getByRole("button", { name: /open/i })
    await user.click(openButton)

    const modalSection = await screen.findByRole("dialog")

    await waitFor(() => {
      expect(modalSection).toBeVisible()
    })

    const styles = window.getComputedStyle(modalSection)
    expect(styles.opacity).toBeTruthy()
    expect(parseFloat(styles.opacity)).toBeLessThan(1)
    expect(styles.transform).toBeTruthy()
    expect(styles.transform).toMatch(/translateY\(-?\d+\.?\d*px\)/)
    expect(styles.visibility).toBe("visible")
  })

  test("should render modal with right animation", async () => {
    const { user } = render(<ModalAnimationExample animation="right" />)

    const openButton = screen.getByRole("button", { name: /open/i })
    await user.click(openButton)

    const modalSection = await screen.findByRole("dialog")

    await waitFor(() => {
      expect(modalSection).toBeVisible()
    })

    const styles = window.getComputedStyle(modalSection)
    expect(styles.opacity).toBeTruthy()
    expect(parseFloat(styles.opacity)).toBeLessThan(1)
    expect(styles.transform).toBeTruthy()
    expect(styles.transform).toMatch(/translateX\(-?\d+\.?\d*px\)/)
    expect(styles.visibility).toBe("visible")
  })

  test("should render modal with left animation", async () => {
    const { user } = render(<ModalAnimationExample animation="left" />)

    const openButton = screen.getByRole("button", { name: /open/i })
    await user.click(openButton)

    const modalSection = await screen.findByRole("dialog")

    await waitFor(() => {
      expect(modalSection).toBeVisible()
    })

    const styles = window.getComputedStyle(modalSection)
    expect(styles.opacity).toBeTruthy()
    expect(parseFloat(styles.opacity)).toBeLessThan(1)
    expect(styles.transform).toBeTruthy()
    expect(styles.transform).toMatch(/translateX\(-?\d+\.?\d*px\)/)
    expect(styles.visibility).toBe("visible")
  })

  test("should render modal with bottom animation", async () => {
    const { user } = render(<ModalAnimationExample animation="bottom" />)

    const openButton = screen.getByRole("button", { name: /open/i })
    await user.click(openButton)

    const modalSection = await screen.findByRole("dialog")

    await waitFor(() => {
      expect(modalSection).toBeVisible()
    })

    const styles = window.getComputedStyle(modalSection)
    expect(styles.opacity).toBeTruthy()
    expect(parseFloat(styles.opacity)).toBeLessThan(1)
    expect(styles.transform).toBeTruthy()
    expect(styles.transform).toMatch(/translateY\(-?\d+\.?\d*px\)/)
    expect(styles.visibility).toBe("visible")
  })

  test("should render modal with scale animation", async () => {
    const { user } = render(<ModalAnimationExample animation="scale" />)

    const openButton = screen.getByRole("button", { name: /open/i })
    await user.click(openButton)

    const modalSection = await screen.findByRole("dialog")

    await waitFor(() => {
      expect(modalSection).toBeVisible()
    })

    const styles = window.getComputedStyle(modalSection)
    expect(styles.opacity).toBeTruthy()
    expect(parseFloat(styles.opacity)).toBeLessThan(1)
    expect(styles.transform).toBeTruthy()
    expect(styles.transform).toMatch(/scale\(-?\d+\.?\d*\)/)
    expect(styles.visibility).toBe("visible")
  })

  test("should render modal with no animation", async () => {
    const { user } = render(<ModalAnimationExample animation="none" />)

    const openButton = screen.getByRole("button", { name: /open/i })
    await user.click(openButton)

    const modalSection = await screen.findByRole("dialog")
    await waitFor(() => {
      expect(modalSection).toBeVisible()
    })

    expect(modalSection).not.toHaveStyle({})
  })
})
