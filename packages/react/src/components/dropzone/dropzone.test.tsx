import { test } from "vitest"
import { a11y, act, fireEvent, render, screen } from "../../../test"
import { Dropzone } from "./"
import { IMAGE_ACCEPT_TYPE } from "./accept-types"

describe("<Dropzone />", () => {
  test("Dropzone renders correctly", async () => {
    const { container } = render(
      <Dropzone.Root>
        <p>Drag file here or click to select file</p>
      </Dropzone.Root>,
    )
    await a11y(container)
  })

  test("Children property renders correctly", () => {
    const text = "Drag file here or click to select file"
    const { container } = render(
      <Dropzone.Root>
        <p>{text}</p>
      </Dropzone.Root>,
    )
    expect(container.textContent).toBe(text)
  })

  test("Is the multiple property being reflected correctly", () => {
    const { container } = render(
      <Dropzone.Root multiple>
        <p>Drag file here or click to select file</p>
      </Dropzone.Root>,
    )
    expect(container.querySelector("input")).toHaveAttribute("multiple")
  })

  test("Is the accept property being reflected correctly", () => {
    const { container } = render(
      <Dropzone.Root
        accept={{
          "image/*": [],
        }}
      >
        <p>Drag image here or click to select image</p>
      </Dropzone.Root>,
    )
    expect(container.querySelector("input")).toHaveAttribute(
      "accept",
      "image/*",
    )
  })

  test("Is the disabled property being reflected correctly", () => {
    const { container } = render(
      <Dropzone.Root variant="dashed" disabled>
        <p>Drag file here or click to select file</p>
      </Dropzone.Root>,
    )
    expect(container.querySelector("input")).toHaveAttribute("disabled")
    expect(container.querySelector("input")).toHaveAttribute(
      "aria-disabled",
      "true",
    )
  })

  test("Is the readOnly property being reflected correctly", () => {
    const { container } = render(
      <Dropzone.Root variant="dashed" readOnly>
        <p>Drag file here or click to select file</p>
      </Dropzone.Root>,
    )
    expect(container.querySelector("input")).toHaveAttribute("readonly")
    expect(container.querySelector("input")).toHaveAttribute(
      "aria-readonly",
      "true",
    )
  })

  test("Is the loading property being reflected correctly", () => {
    const { container } = render(
      <Dropzone.Root variant="dashed" loading>
        <p>Drag file here or click to select file</p>
      </Dropzone.Root>,
    )

    expect(container.querySelector(".ui-dropzone__root")).toHaveAttribute(
      "data-loading",
      "",
    )
  })

  test("Is the onDrop return files correctly", async () => {
    const file = new File(["test"], "test.png", { type: "image/png" })
    const onDrop = vi.fn()
    const { container } = render(<Dropzone.Root onDrop={onDrop} />)

    const dropzone = container.querySelector(".ui-dropzone__root")

    await act(() =>
      fireEvent.drop(dropzone!, {
        dataTransfer: {
          files: [file],
          types: ["Files"],
        },
      }),
    )

    expect(onDrop).toHaveBeenCalledWith([file], [], expect.anything())
  })

  test("DropzoneAccept renders correctly when dragging accepted files", async () => {
    const file = new File(["test"], "test.png", { type: "image/png" })
    const { container } = render(
      <Dropzone.Root accept={IMAGE_ACCEPT_TYPE}>
        <Dropzone.Accept>
          <p>Accepted</p>
        </Dropzone.Accept>
      </Dropzone.Root>,
    )

    const dropzone = container.querySelector(".ui-dropzone__root")

    await act(() =>
      fireEvent.dragEnter(dropzone!, {
        dataTransfer: {
          files: [file],
          types: ["Files"],
        },
      }),
    )

    expect(container.textContent).toContain("Accepted")
  })

  test("DropzoneReject renders correctly when dragging rejected files", async () => {
    const file = new File(["test"], "test.txt", { type: "text/plain" })
    const { container } = render(
      <Dropzone.Root accept={IMAGE_ACCEPT_TYPE}>
        <Dropzone.Reject>
          <p>Rejected</p>
        </Dropzone.Reject>
      </Dropzone.Root>,
    )

    const dropzone = container.querySelector(".ui-dropzone__root")

    await act(() =>
      fireEvent.dragEnter(dropzone!, {
        dataTransfer: {
          files: [file],
          types: ["Files"],
        },
      }),
    )

    expect(container.textContent).toContain("Rejected")
  })

  test("DropzoneIdle renders correctly when not dragging files", () => {
    const { container } = render(
      <Dropzone.Root>
        <Dropzone.Idle>
          <p>Idle</p>
        </Dropzone.Idle>
      </Dropzone.Root>,
    )

    expect(container.textContent).toContain("Idle")
  })

  test("sets `displayName` correctly", () => {
    expect(Dropzone.Root.displayName).toBe("DropzoneRoot")
    expect(Dropzone.Accept.displayName).toBe("DropzoneAccept")
    expect(Dropzone.Idle.displayName).toBe("DropzoneIdle")
    expect(Dropzone.Reject.displayName).toBe("DropzoneReject")
  })

  test("sets `className` correctly", () => {
    render(<Dropzone.Root data-testid="root">Dropzone</Dropzone.Root>)

    expect(screen.getByTestId("root")).toHaveClass("ui-dropzone__root")
  })
})
