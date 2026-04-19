import { a11y, page, render } from "#test/browser"
import { ImageIcon } from "../icon"
import { Text } from "../text"
import { Dropzone } from "./"
import { IMAGE_ACCEPT_TYPE } from "./accept-types"

describe("<Dropzone />", () => {
  test("renders component correctly", async () => {
    await a11y(
      <Dropzone.Root>
        <Text>Drag file here or click to select file</Text>
      </Dropzone.Root>,
      {
        axeOptions: {
          rules: {
            "color-contrast": { enabled: false },
          },
        },
      },
    )
  })

  test("sets `displayName` correctly", () => {
    expect(Dropzone.Root.displayName).toBe("DropzoneRoot")
    expect(Dropzone.Accept.name).toBe("DropzoneAccept")
    expect(Dropzone.Idle.name).toBe("DropzoneIdle")
    expect(Dropzone.Reject.name).toBe("DropzoneReject")
    expect(Dropzone.Icon.displayName).toBe("DropzoneIcon")
    expect(Dropzone.Title.displayName).toBe("DropzoneTitle")
    expect(Dropzone.Description.displayName).toBe("DropzoneDescription")
  })

  test("sets `className` correctly", async () => {
    await render(
      <Dropzone.Root data-testid="root">
        <Dropzone.Idle>
          <Dropzone.Icon as={ImageIcon} data-testid="icon" />
        </Dropzone.Idle>

        <Dropzone.Title data-testid="title">
          Drag images here or click to select files
        </Dropzone.Title>
        <Dropzone.Description data-testid="description">
          Attach as many files as you like, each file should not exceed 5mb
        </Dropzone.Description>
      </Dropzone.Root>,
    )
    await expect
      .element(page.getByTestId("root"))
      .toHaveClass("ui-dropzone__root")
    await expect
      .element(page.getByTestId("title"))
      .toHaveClass("ui-dropzone__title")
    await expect
      .element(page.getByTestId("description"))
      .toHaveClass("ui-dropzone__description")
    await expect
      .element(page.getByTestId("icon"))
      .toHaveClass("ui-dropzone__icon")
  })

  test("renders HTML tag correctly", async () => {
    await render(
      <Dropzone.Root data-testid="root">
        <Dropzone.Title data-testid="title">
          Drag images here or click to select files
        </Dropzone.Title>
        <Dropzone.Description data-testid="description">
          Attach as many files as you like, each file should not exceed 5mb
        </Dropzone.Description>
      </Dropzone.Root>,
    )
    expect(page.getByTestId("root").element().tagName).toBe("DIV")
    expect(page.getByTestId("title").element().tagName).toBe("P")
    expect(page.getByTestId("description").element().tagName).toBe("P")
  })

  test("Is the multiple property being reflected correctly", async () => {
    await render(
      <Dropzone.Root multiple inputProps={{ "data-testid": "input" }}>
        <Text>Drag file here or click to select file</Text>
      </Dropzone.Root>,
    )
    await expect.element(page.getByTestId("input")).toHaveAttribute("multiple")
  })

  test("Is the accept property being reflected correctly", async () => {
    await render(
      <Dropzone.Root
        accept={{ "image/*": [] }}
        inputProps={{ "data-testid": "input" }}
      >
        <Text>Drag image here or click to select image</Text>
      </Dropzone.Root>,
    )
    await expect
      .element(page.getByTestId("input"))
      .toHaveAttribute("accept", "image/*")
  })

  test("Is the disabled property being reflected correctly", async () => {
    await render(
      <Dropzone.Root
        variant="dashed"
        disabled
        inputProps={{ "data-testid": "input" }}
      >
        <Text>Drag file here or click to select file</Text>
      </Dropzone.Root>,
    )
    await expect.element(page.getByTestId("input")).toHaveAttribute("disabled")
    await expect
      .element(page.getByTestId("input"))
      .toHaveAttribute("aria-disabled", "true")
  })

  test("Is the readOnly property being reflected correctly", async () => {
    await render(
      <Dropzone.Root
        variant="dashed"
        readOnly
        inputProps={{ "data-testid": "input" }}
      >
        <Text>Drag file here or click to select file</Text>
      </Dropzone.Root>,
    )
    await expect.element(page.getByTestId("input")).toHaveAttribute("readonly")
    await expect
      .element(page.getByTestId("input"))
      .toHaveAttribute("aria-readonly", "true")
  })

  test("Is the loading property being reflected correctly", async () => {
    await render(
      <Dropzone.Root variant="dashed" data-testid="root" loading>
        <Text>Drag file here or click to select file</Text>
      </Dropzone.Root>,
    )

    await expect
      .element(page.getByTestId("root"))
      .toHaveAttribute("data-loading")
  })

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

  test("DropzoneIdle renders correctly when not dragging files", async () => {
    await render(
      <Dropzone.Root>
        <Dropzone.Idle>
          <Text>Idle</Text>
        </Dropzone.Idle>
      </Dropzone.Root>,
    )

    await expect.element(page.getByText("Idle")).toBeInTheDocument()
  })
})
