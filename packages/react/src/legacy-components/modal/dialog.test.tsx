import { useState } from "react"
import { a11y, render, waitFor } from "../../../test"
import { Dialog, DialogBody, DialogFooter, DialogHeader } from "./"

describe("<Dialog />", () => {
  const DialogOpenExample = () => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <button data-testid="OpenDialog" onClick={() => setOpen(true)}>
          Open Dialog
        </button>

        <Dialog
          data-testid="Dialog"
          cancel={{
            children: "dialog-cancel",
          }}
          open={open}
          other={{
            children: "dialog-other",
          }}
          success={{
            children: "dialog-success",
          }}
          onCancel={() => setOpen(false)}
          onClose={() => setOpen(false)}
          onOther={() => setOpen(false)}
          onSuccess={() => setOpen(false)}
        >
          <DialogHeader data-testid="DialogHeader">header</DialogHeader>
          <DialogBody data-testid="DialogBody">body</DialogBody>
          <DialogFooter data-testid="DialogFooter">footer</DialogFooter>
        </Dialog>
      </>
    )
  }

  const DialogCloseExample = () => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <button data-testid="OpenDialog" onClick={() => setOpen(true)}>
          Open Dialog
        </button>

        <Dialog
          data-testid="Dialog"
          cancel={{
            children: "dialog-cancel",
          }}
          open={open}
          other={{
            children: "dialog-other",
          }}
          success={{
            children: "dialog-success",
          }}
          onCancel={() => setOpen(false)}
          onClose={() => setOpen(false)}
          onOther={() => setOpen(false)}
          onSuccess={() => setOpen(false)}
        />
      </>
    )
  }

  test("Dialog renders correctly", async () => {
    const { container } = render(<DialogOpenExample />)
    await a11y(container)
  })

  test("Dialog renders correctly when open", async () => {
    const { findByTestId, user } = render(<DialogOpenExample />)

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
    const { findByTestId, getByText, queryByTestId, user } = render(
      <DialogCloseExample />,
    )

    const openDialogButton = await findByTestId("OpenDialog")

    await user.click(openDialogButton)
    await expect(findByTestId("Dialog")).resolves.toBeInTheDocument()
    const cancelDialogButton = getByText("dialog-cancel")
    await user.click(cancelDialogButton)
    await waitFor(() => {
      expect(queryByTestId("Dialog")).toBeNull()
    })
    await user.click(openDialogButton)
    await expect(findByTestId("Dialog")).resolves.toBeInTheDocument()
    const otherDialogButton = getByText("dialog-other")
    await user.click(otherDialogButton)
    await waitFor(() => {
      expect(queryByTestId("Dialog")).toBeNull()
    })

    await user.click(openDialogButton)
    await expect(findByTestId("Dialog")).resolves.toBeInTheDocument()
    const successDialogButton = getByText("dialog-success")
    await user.click(successDialogButton)
    await waitFor(() => {
      expect(queryByTestId("Dialog")).toBeNull()
    })
  })
})
