import { page, render } from "#test/browser"
import { Text } from "../text"
import { Dropzone } from "./"
import { IMAGE_ACCEPT_TYPE } from "./accept-types"

describe("<Dropzone />", () => {
  test("Is the onDrop return files correctly", async () => {
    const file = new File(["test"], "test.png", { type: "image/png" })
    const onDrop = vi.fn()
    await render(<Dropzone.Root data-testid="root" onDrop={onDrop} />)

    const dataTransfer = new DataTransfer()
    dataTransfer.items.add(file)
    page
      .getByTestId("root")
      .element()
      .dispatchEvent(new DragEvent("drop", { bubbles: true, dataTransfer }))

    await vi.waitFor(() => {
      expect(onDrop).toHaveBeenCalledExactlyOnceWith(
        [file],
        [],
        expect.anything(),
      )
    })
  })

  test("DropzoneAccept renders correctly when dragging accepted files", async () => {
    const file = new File(["test"], "test.png", { type: "image/png" })
    await render(
      <Dropzone.Root data-testid="root" accept={IMAGE_ACCEPT_TYPE}>
        <Dropzone.Accept>
          <Text>Accepted</Text>
        </Dropzone.Accept>
      </Dropzone.Root>,
    )

    const dataTransfer = new DataTransfer()
    dataTransfer.items.add(file)
    page
      .getByTestId("root")
      .element()
      .dispatchEvent(
        new DragEvent("dragenter", { bubbles: true, dataTransfer }),
      )

    await expect.element(page.getByText("Accepted")).toBeInTheDocument()
  })

  test("DropzoneReject renders correctly when dragging rejected files", async () => {
    const file = new File(["test"], "test.txt", { type: "text/plain" })
    await render(
      <Dropzone.Root data-testid="root" accept={IMAGE_ACCEPT_TYPE}>
        <Dropzone.Reject>
          <Text>Rejected</Text>
        </Dropzone.Reject>
      </Dropzone.Root>,
    )

    const dataTransfer = new DataTransfer()
    dataTransfer.items.add(file)
    page
      .getByTestId("root")
      .element()
      .dispatchEvent(
        new DragEvent("dragenter", { bubbles: true, dataTransfer }),
      )

    await expect.element(page.getByText("Rejected")).toBeInTheDocument()
  })
})
