import { page, render } from "#test/browser"
import { Text } from "../text"
import { Dropzone } from "./"
import { IMAGE_ACCEPT_TYPE } from "./accept-types"
import { useDropzone } from "./use-dropzone"

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

  test("merges getRootProps values with rest and caller props", async () => {
    const restOnClick = vi.fn()
    const callerOnClick = vi.fn()
    const restRef = vi.fn()
    const callerRef = vi.fn()
    const Probe = () => {
      const { getRootProps } = useDropzone({
        ref: restRef,
        className: "from-rest",
        style: { backgroundColor: "red", paddingTop: "4px" },
        autoFocus: true,
        onClick: restOnClick,
      })

      return (
        <div
          data-testid="root"
          {...getRootProps({
            ref: callerRef,
            className: "from-caller",
            style: { color: "blue", paddingTop: "8px" },
            onClick: callerOnClick,
          })}
        />
      )
    }

    const { user } = await render(<Probe />)

    const root = page.getByTestId("root")
    const rootElement = root.element()

    await expect.element(root).toHaveClass("from-rest")
    await expect.element(root).toHaveClass("from-caller")
    await expect.element(root).toHaveStyle({ backgroundColor: "red" })
    await expect.element(root).toHaveStyle({ color: "blue" })
    await expect.element(root).toHaveStyle({ paddingTop: "8px" })
    await expect.element(root).toHaveFocus()

    await user.click(root)

    expect(restOnClick).toHaveBeenCalledTimes(1)
    expect(callerOnClick).toHaveBeenCalledTimes(1)
    expect(restRef).toHaveBeenCalledWith(rootElement)
    expect(callerRef).toHaveBeenCalledWith(rootElement)
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
