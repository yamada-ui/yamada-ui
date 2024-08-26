import { Button, useDisclosure } from "@yamada-ui/react"
import { a11y, act, fireEvent, render, screen, waitFor } from "@yamada-ui/test"
import type { ModalProps } from "../src"
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "../src"

type Props = {
  placement?: ModalProps["placement"]
}

describe("<Modal />", () => {
  const ModalExample = ({ placement }: Props) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const modalHeaderId = "modal-header-id"

    return (
      <>
        <Button onClick={onOpen}>Open Modal</Button>

        <Modal
          isOpen={isOpen}
          placement={placement}
          onClose={onClose}
          aria-labelledby={modalHeaderId}
        >
          <ModalHeader id={modalHeaderId}>Modal Header</ModalHeader>

          <ModalBody>This is modal body</ModalBody>

          <ModalFooter>
            <Button variant="ghost" onClick={onClose}>
              Close Modal
            </Button>
            <Button colorScheme="primary">Wikipedia</Button>
          </ModalFooter>
        </Modal>
      </>
    )
  }

  const ModalCloseExample = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
      <>
        <Button data-testid="OpenModal" onClick={onOpen}>
          Open Modal
        </Button>
        <Modal data-testid="Modal" isOpen={isOpen} onClose={onClose}>
          <ModalCloseButton data-testid="ModalCloseButton" />
          <ModalOverlay
            data-testid="ModalOverlay"
            bg="blackAlpha.300"
            backdropFilter="blur(10px)"
          />
          <ModalHeader data-testid="ModalHeader">Modal Header</ModalHeader>

          <ModalBody data-testid="ModalBody">This is modal body</ModalBody>

          <ModalFooter data-testid="ModalFooter">
            <Button data-testid="ModalClose" variant="ghost" onClick={onClose}>
              Close
            </Button>
            <Button colorScheme="primary">Wikipedia</Button>
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
      name: /open modal/i,
    })
    await user.click(openModalButton)

    const modal = await screen.findByRole("dialog", { name: /modal header/i })
    await waitFor(() => expect(modal).toBeVisible())

    const modalHeader = await screen.findByText(/modal header/i)
    expect(modalHeader).toBeInTheDocument()

    const modalBody = await screen.findByText(/this is modal body/i)
    expect(modalBody).toBeInTheDocument()

    const closeButton = await screen.findByRole("button", {
      name: /close modal/i,
    })
    expect(closeButton).toBeInTheDocument()
  })

  test("should render nested modal", async () => {
    const NestedModal = () => {
      const firstControls = useDisclosure()
      const secondControls = useDisclosure()

      const primaryModalHeaderId = "primary-modal-header-id"
      const secondaryModalHeaderId = "secondary-modal-header-id"

      return (
        <>
          <Button onClick={firstControls.onOpen}>Open Modal</Button>

          <Modal
            isOpen={firstControls.isOpen}
            onClose={firstControls.onClose}
            aria-labelledby={primaryModalHeaderId}
          >
            <ModalHeader id={primaryModalHeaderId}>Modal Header</ModalHeader>

            <ModalBody>This is modal body</ModalBody>

            <ModalFooter>
              <Button variant="ghost" onClick={firstControls.onClose}>
                Close Primary Modal
              </Button>
              <Button colorScheme="primary" onClick={secondControls.onOpen}>
                Secondary Modal Open
              </Button>
            </ModalFooter>

            <Modal
              isOpen={secondControls.isOpen}
              onClose={secondControls.onClose}
              size="sm"
              aria-labelledby={secondaryModalHeaderId}
            >
              <ModalHeader id={secondaryModalHeaderId}>
                Secondary Modal
              </ModalHeader>

              <ModalBody>This is a secondary modal</ModalBody>

              <ModalFooter>
                <Button variant="ghost" onClick={secondControls.onClose}>
                  Close
                </Button>
                <Button colorScheme="primary">Wikipedia</Button>
              </ModalFooter>
            </Modal>
          </Modal>
        </>
      )
    }
    const { user } = render(<NestedModal />)

    const primaryModalOpenButton = await screen.findByRole("button", {
      name: /open modal/i,
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
    const { findByRole, queryByTestId, findByTestId, user } = render(
      <ModalCloseExample />,
    )

    const openButton = await findByRole("button", { name: "Open Modal" })
    await user.click(openButton)
    await expect(findByTestId("Modal")).resolves.toBeInTheDocument()
    const closeButton = await findByTestId("ModalCloseButton")
    await user.click(closeButton)
    await waitFor(async () => {
      expect(queryByTestId("Modal")).toBeNull()
    })
  })

  test("Modal renders correctly when clicking overlay", async () => {
    const { findByRole, queryByTestId, findByTestId, user } = render(
      <ModalCloseExample />,
    )
    const openButton = await findByRole("button", { name: "Open Modal" })
    await user.click(openButton)
    await expect(findByTestId("Modal")).resolves.toBeInTheDocument()
    const ModalOverlay = await findByTestId("ModalOverlay")
    await user.click(ModalOverlay)
    await waitFor(async () => {
      expect(queryByTestId("Modal")).toBeNull()
    })
  })

  test("Escape keyDown should work correctly", async () => {
    const { getByTestId, findByRole, queryByTestId, findByTestId, user } =
      render(<ModalCloseExample />)
    const openButton = await findByRole("button", { name: "Open Modal" })
    await user.click(openButton)
    const modal = getByTestId("Modal")
    await expect(findByTestId("Modal")).resolves.toBeInTheDocument()
    await act(() => fireEvent.keyDown(modal, { key: "Escape" }))
    await waitFor(async () => {
      expect(queryByTestId("Modal")).toBeNull()
    })
  })

  test("should display modal to the left when placement is set to 'left'", async () => {
    const { user } = render(<ModalExample placement="left" />)

    const openModalButton = await screen.findByRole("button", {
      name: /open modal/i,
    })
    await user.click(openModalButton)

    const modal = await screen.findByRole("dialog", { name: /modal header/i })

    await waitFor(() => {
      expect(modal).toBeVisible()
    })
    const modalContainer = modal.parentElement
    expect(modalContainer).toHaveStyle({
      "justify-content": "flex-start",
      "align-items": "center",
    })
  })

  test("should display modal to the right when placement is set to 'right'", async () => {
    const { user } = render(<ModalExample placement="right" />)

    const openModalButton = await screen.findByRole("button", {
      name: /open modal/i,
    })
    await user.click(openModalButton)

    const modal = await screen.findByRole("dialog", { name: /modal header/i })

    await waitFor(() => {
      expect(modal).toBeVisible()
    })
    const modalContainer = modal.parentElement
    expect(modalContainer).toHaveStyle({
      "justify-content": "flex-end",
      "align-items": "center",
    })
  })

  test("should display modal to the top when placement is set to 'top'", async () => {
    const { user } = render(<ModalExample placement="top" />)

    const openModalButton = await screen.findByRole("button", {
      name: /open modal/i,
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
      name: /open modal/i,
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
})
