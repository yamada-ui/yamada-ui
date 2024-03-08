import { Button, useDisclosure } from "@yamada-ui/react"
import { a11y, fireEvent, render, screen } from "@yamada-ui/test"
import { Dialog, DialogHeader, DialogFooter, DialogBody } from "../src"

describe("<Dialog />", () => {
  const DialogOpenExample = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
      <>
        <Button data-testid="OpenDialog" onClick={onOpen}>
          Open Dialog
        </Button>

        <Dialog
          data-testid="Dialog"
          isOpen={isOpen}
          onClose={onClose}
          cancel={{
            children: "dialog-cancel",
          }}
          onCancel={onClose}
          other={{
            children: "dialog-other",
          }}
          onOther={onClose}
          success={{
            children: "dialog-success",
          }}
          onSuccess={onClose}
        >
          <DialogHeader data-testid="DialogHeader">header</DialogHeader>
          <DialogBody data-testid="DialogBody">body</DialogBody>
          <DialogFooter data-testid="DialogFooter">footer</DialogFooter>
        </Dialog>
      </>
    )
  }

  const DialogCloseExample = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
      <>
        <Button data-testid="OpenDialog" onClick={onOpen}>
          Open Dialog
        </Button>

        <Dialog
          data-testid="Dialog"
          isOpen={isOpen}
          onClose={onClose}
          cancel={{
            children: "dialog-cancel",
          }}
          onCancel={onClose}
          other={{
            children: "dialog-other",
          }}
          onOther={onClose}
          success={{
            children: "dialog-success",
          }}
          onSuccess={onClose}
        ></Dialog>
      </>
    )
  }

  test("Dialog renders correctly", async () => {
    const { container } = render(<DialogOpenExample />)
    await a11y(container)
  })

  test("Dialog renders correctly when open", async () => {
    render(<DialogOpenExample />)

    expect(screen.getByTestId("OpenDialog")).toBeInTheDocument()

    fireEvent.click(screen.getByTestId("OpenDialog"))

    expect(screen.getByTestId("Dialog")).toBeInTheDocument()
    expect(screen.getByTestId("DialogHeader")).toHaveTextContent("header")
    expect(screen.getByTestId("DialogBody")).toHaveTextContent("body")
    expect(screen.getByTestId("DialogFooter")).toHaveTextContent("footer")
  })

  test("Dialog renders correctly when close", async () => {
    render(<DialogCloseExample />)

    fireEvent.click(screen.getByTestId("OpenDialog"))
    expect(screen.getByTestId("Dialog")).toBeInTheDocument()
    fireEvent.click(screen.getByText("dialog-cancel"))
    expect(screen.getByTestId("Dialog")).toBeNull

    fireEvent.click(screen.getByTestId("OpenDialog"))
    expect(screen.getByTestId("Dialog")).toBeInTheDocument()
    fireEvent.click(screen.getByText("dialog-other"))
    expect(screen.getByTestId("Dialog")).toBeNull

    fireEvent.click(screen.getByTestId("OpenDialog"))
    expect(screen.getByTestId("Dialog")).toBeInTheDocument()
    fireEvent.click(screen.getByText("dialog-success"))
    expect(screen.getByTestId("Dialog")).toBeNull
  })
})
