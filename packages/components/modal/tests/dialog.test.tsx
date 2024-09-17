import { a11y, render, waitFor } from "@yamada-ui/test"
import { useState } from "react"
import { Dialog, DialogHeader, DialogFooter, DialogBody } from "../src"

describe("<Dialog />", () => {
  const DialogOpenExample = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
      <>
        <button data-testid="OpenDialog" onClick={() => setIsOpen(true)}>
          Open Dialog
        </button>

        <Dialog
          data-testid="Dialog"
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          cancel={{
            children: "dialog-cancel",
          }}
          onCancel={() => setIsOpen(false)}
          other={{
            children: "dialog-other",
          }}
          onOther={() => setIsOpen(false)}
          success={{
            children: "dialog-success",
          }}
          onSuccess={() => setIsOpen(false)}
        >
          <DialogHeader data-testid="DialogHeader">header</DialogHeader>
          <DialogBody data-testid="DialogBody">body</DialogBody>
          <DialogFooter data-testid="DialogFooter">footer</DialogFooter>
        </Dialog>
      </>
    )
  }

  const DialogCloseExample = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
      <>
        <button data-testid="OpenDialog" onClick={() => setIsOpen(true)}>
          Open Dialog
        </button>

        <Dialog
          data-testid="Dialog"
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          cancel={{
            children: "dialog-cancel",
          }}
          onCancel={() => setIsOpen(false)}
          other={{
            children: "dialog-other",
          }}
          onOther={() => setIsOpen(false)}
          success={{
            children: "dialog-success",
          }}
          onSuccess={() => setIsOpen(false)}
        ></Dialog>
      </>
    )
  }

  test("Dialog renders correctly", async () => {
    const { container } = render(<DialogOpenExample />)
    await a11y(container)
  })

  test("Dialog renders correctly when open", async () => {
    const { user, findByTestId } = render(<DialogOpenExample />)

    const openDialogButton = await findByTestId("OpenDialog")
    expect(openDialogButton).toBeInTheDocument()

    await user.click(openDialogButton)

    await expect(findByTestId("Dialog")).resolves.toBeInTheDocument()
    await expect(findByTestId("DialogHeader")).resolves.toHaveTextContent(
      "header",
    )
    await expect(findByTestId("DialogBody")).resolves.toHaveTextContent("body")
    await expect(findByTestId("DialogFooter")).resolves.toHaveTextContent(
      "footer",
    )
  })

  test("Dialog renders correctly when close", async () => {
    const { user, findByTestId, queryByTestId, getByText } = render(
      <DialogCloseExample />,
    )

    const openDialogButton = await findByTestId("OpenDialog")

    await user.click(openDialogButton)
    await expect(findByTestId("Dialog")).resolves.toBeInTheDocument()
    const cancelDialogButton = getByText("dialog-cancel")
    await user.click(cancelDialogButton)
    await waitFor(async () => {
      expect(queryByTestId("Dialog")).toBeNull()
    })
    await user.click(openDialogButton)
    await expect(findByTestId("Dialog")).resolves.toBeInTheDocument()
    const otherDialogButton = getByText("dialog-other")
    await user.click(otherDialogButton)
    await waitFor(async () => {
      expect(queryByTestId("Dialog")).toBeNull()
    })

    await user.click(openDialogButton)
    await expect(findByTestId("Dialog")).resolves.toBeInTheDocument()
    const successDialogButton = getByText("dialog-success")
    await user.click(successDialogButton)
    await waitFor(async () => {
      expect(queryByTestId("Dialog")).toBeNull()
    })
  })
})
