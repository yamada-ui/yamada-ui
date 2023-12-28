import { Button, useDisclosure } from "@yamada-ui/react"
import { a11y, fireEvent, render, screen } from "@yamada-ui/test"
import { Modal, ModalBody, ModalFooter, ModalHeader } from "../src"

describe("<Modal />", () => {
  const ModalExample = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
      <>
        <Button data-testid="OpenModal" onClick={onOpen}>
          Open Modal
        </Button>

        <Modal data-testid="Modal" isOpen={isOpen} onClose={onClose}>
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

  test("should render modal", () => {
    render(<ModalExample />)
    expect(screen.getByTestId("OpenModal")).toBeInTheDocument()
    fireEvent.click(screen.getByTestId("OpenModal"))
    expect(screen.getByTestId("ModalHeader")).toHaveTextContent("Modal Header")
    expect(screen.getByTestId("ModalBody")).toHaveTextContent(
      "This is modal body",
    )
    expect(screen.getByTestId("ModalClose")).toHaveTextContent("Close")
    expect(screen.getByTestId("Modal")).toBeInTheDocument()
  })

  test("should render nested modal", () => {
    const NestedModal = () => {
      const firstControls = useDisclosure()
      const secondControls = useDisclosure()

      return (
        <>
          <Button data-testid="PrimaryOpen" onClick={firstControls.onOpen}>
            Open Modal
          </Button>

          <Modal isOpen={firstControls.isOpen} onClose={firstControls.onClose}>
            <ModalHeader>Modal Header</ModalHeader>

            <ModalBody>This is modal body</ModalBody>

            <ModalFooter>
              <Button
                data-testid="PrimaryClose"
                variant="ghost"
                onClick={firstControls.onClose}
              >
                Close Primary Modal
              </Button>
              <Button
                data-testid="SecondaryOpen"
                colorScheme="primary"
                onClick={secondControls.onOpen}
              >
                Secondary Modal Open
              </Button>
            </ModalFooter>

            <Modal
              isOpen={secondControls.isOpen}
              onClose={secondControls.onClose}
              size="sm"
            >
              <ModalHeader data-testid="SecondaryModalHeader">
                Secondary Modal
              </ModalHeader>

              <ModalBody data-testid="SecondaryModalBody">
                This is a secondary modal
              </ModalBody>

              <ModalFooter>
                <Button
                  data-testid="Close"
                  variant="ghost"
                  onClick={secondControls.onClose}
                >
                  Close
                </Button>
                <Button colorScheme="primary">Wikipedia</Button>
              </ModalFooter>
            </Modal>
          </Modal>
        </>
      )
    }
    render(<NestedModal />)
    expect(screen.getByTestId("PrimaryOpen")).toHaveTextContent("Open Modal")
    fireEvent.click(screen.getByTestId("PrimaryOpen"))
    expect(screen.getByTestId("PrimaryClose")).toHaveTextContent(
      "Close Primary Modal",
    )
    expect(screen.getByTestId("SecondaryOpen")).toHaveTextContent(
      "Secondary Modal Open",
    )
    fireEvent.click(screen.getByTestId("SecondaryOpen"))
    expect(screen.getByTestId("SecondaryModalBody")).toHaveTextContent(
      "This is a secondary modal",
    )
  })
})
