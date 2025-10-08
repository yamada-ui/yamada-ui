import { a11y, act, fireEvent, render, screen } from "#test"
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

  test("sets `className` correctly", () => {
    render(
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
    expect(screen.getByTestId("root")).toHaveClass("ui-dropzone__root")
    expect(screen.getByTestId("title")).toHaveClass("ui-dropzone__title")
    expect(screen.getByTestId("description")).toHaveClass(
      "ui-dropzone__description",
    )
    expect(screen.getByTestId("icon")).toHaveClass("ui-dropzone__icon")
  })

  test("renders HTML tag correctly", () => {
    render(
      <Dropzone.Root data-testid="root">
        <Dropzone.Title data-testid="title">
          Drag images here or click to select files
        </Dropzone.Title>
        <Dropzone.Description data-testid="description">
          Attach as many files as you like, each file should not exceed 5mb
        </Dropzone.Description>
      </Dropzone.Root>,
    )
    expect(screen.getByTestId("root").tagName).toBe("DIV")
    expect(screen.getByTestId("title").tagName).toBe("P")
    expect(screen.getByTestId("description").tagName).toBe("P")
  })

  test("Is the multiple property being reflected correctly", () => {
    render(
      <Dropzone.Root multiple inputProps={{ "data-testid": "input" }}>
        <Text>Drag file here or click to select file</Text>
      </Dropzone.Root>,
    )
    expect(screen.getByTestId("input")).toHaveAttribute("multiple")
  })

  test("Is the accept property being reflected correctly", () => {
    render(
      <Dropzone.Root
        accept={{ "image/*": [] }}
        inputProps={{ "data-testid": "input" }}
      >
        <Text>Drag image here or click to select image</Text>
      </Dropzone.Root>,
    )
    expect(screen.getByTestId("input")).toHaveAttribute("accept", "image/*")
  })

  test("Is the disabled property being reflected correctly", () => {
    render(
      <Dropzone.Root
        variant="dashed"
        disabled
        inputProps={{ "data-testid": "input" }}
      >
        <Text>Drag file here or click to select file</Text>
      </Dropzone.Root>,
    )
    expect(screen.getByTestId("input")).toHaveAttribute("disabled")
    expect(screen.getByTestId("input")).toHaveAttribute("aria-disabled", "true")
  })

  test("Is the readOnly property being reflected correctly", () => {
    render(
      <Dropzone.Root
        variant="dashed"
        readOnly
        inputProps={{ "data-testid": "input" }}
      >
        <Text>Drag file here or click to select file</Text>
      </Dropzone.Root>,
    )
    expect(screen.getByTestId("input")).toHaveAttribute("readonly")
    expect(screen.getByTestId("input")).toHaveAttribute("aria-readonly", "true")
  })

  test("Is the loading property being reflected correctly", () => {
    render(
      <Dropzone.Root variant="dashed" data-testid="root" loading>
        <Text>Drag file here or click to select file</Text>
      </Dropzone.Root>,
    )

    expect(screen.getByTestId("root")).toHaveAttribute("data-loading")
  })

  test("Is the onDrop return files correctly", async () => {
    const file = new File(["test"], "test.png", { type: "image/png" })
    const onDrop = vi.fn()
    render(<Dropzone.Root data-testid="root" onDrop={onDrop} />)

    await act(() =>
      fireEvent.drop(screen.getByTestId("root")!, {
        dataTransfer: { files: [file], types: ["Files"] },
      }),
    )

    expect(onDrop).toHaveBeenCalledExactlyOnceWith(
      [file],
      [],
      expect.anything(),
    )
  })

  test("DropzoneAccept renders correctly when dragging accepted files", async () => {
    const file = new File(["test"], "test.png", { type: "image/png" })
    render(
      <Dropzone.Root data-testid="root" accept={IMAGE_ACCEPT_TYPE}>
        <Dropzone.Accept>
          <Text>Accepted</Text>
        </Dropzone.Accept>
      </Dropzone.Root>,
    )

    await act(() =>
      fireEvent.dragEnter(screen.getByTestId("root")!, {
        dataTransfer: { files: [file], types: ["Files"] },
      }),
    )

    expect(screen.getByText("Accepted")).toBeInTheDocument()
  })

  test("DropzoneReject renders correctly when dragging rejected files", async () => {
    const file = new File(["test"], "test.txt", { type: "text/plain" })
    render(
      <Dropzone.Root data-testid="root" accept={IMAGE_ACCEPT_TYPE}>
        <Dropzone.Reject>
          <Text>Rejected</Text>
        </Dropzone.Reject>
      </Dropzone.Root>,
    )

    await act(() =>
      fireEvent.dragEnter(screen.getByTestId("root")!, {
        dataTransfer: {
          files: [file],
          types: ["Files"],
        },
      }),
    )

    expect(screen.getByText("Rejected")).toBeInTheDocument()
  })

  test("DropzoneIdle renders correctly when not dragging files", () => {
    render(
      <Dropzone.Root>
        <Dropzone.Idle>
          <Text>Idle</Text>
        </Dropzone.Idle>
      </Dropzone.Root>,
    )

    expect(screen.getByText("Idle")).toBeInTheDocument()
  })
})
