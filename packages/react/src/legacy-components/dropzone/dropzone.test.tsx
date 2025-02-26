import { a11y, act, fireEvent, render } from "../../../test"
import {
  Dropzone,
  DropzoneAccept,
  DropzoneIdle,
  DropzoneReject,
  IMAGE_ACCEPT_TYPE,
} from "./"

describe("<Dropzone />", () => {
  test("Dropzone renders correctly", async () => {
    const { container } = render(
      <Dropzone>
        <p>Drag file here or click to select file</p>
      </Dropzone>,
    )
    await a11y(container)
  })

  test("Children property renders correctly", () => {
    const text = "Drag file here or click to select file"
    const { container } = render(
      <Dropzone>
        <p>{text}</p>
      </Dropzone>,
    )
    expect(container.textContent).toBe(text)
  })

  test("Is the multiple property being reflected correctly", () => {
    const { container } = render(
      <Dropzone multiple>
        <p>Drag file here or click to select file</p>
      </Dropzone>,
    )
    expect(container.querySelector("input")).toHaveAttribute("multiple")
  })

  test("Is the accept property being reflected correctly", () => {
    const { container } = render(
      <Dropzone
        accept={{
          "image/*": [],
        }}
      >
        <p>Drag image here or click to select image</p>
      </Dropzone>,
    )
    expect(container.querySelector("input")).toHaveAttribute(
      "accept",
      "image/*",
    )
  })

  test("Is the disabled property being reflected correctly", () => {
    const { container } = render(
      <Dropzone variant="dashed" disabled>
        <p>Drag file here or click to select file</p>
      </Dropzone>,
    )
    expect(container.querySelector("input")).toHaveAttribute("disabled")
    expect(container.querySelector("input")).toHaveAttribute(
      "aria-disabled",
      "true",
    )
  })

  test("Is the readOnly property being reflected correctly", () => {
    const { container } = render(
      <Dropzone variant="dashed" readOnly>
        <p>Drag file here or click to select file</p>
      </Dropzone>,
    )
    expect(container.querySelector("input")).toHaveAttribute("readonly")
    expect(container.querySelector("input")).toHaveAttribute(
      "aria-readonly",
      "true",
    )
  })

  test("Is the loading property being reflected correctly", () => {
    const { container } = render(
      <Dropzone variant="dashed" loading>
        <p>Drag file here or click to select file</p>
      </Dropzone>,
    )
    expect(
      container.querySelector(".ui-dropzone__overlay__loading"),
    ).toBeTruthy()
  })

  test("Is the onDrop return files correctly", async () => {
    const file = new File(["test"], "test.png", { type: "image/png" })
    const onDrop = vi.fn()
    const { container } = render(<Dropzone onDrop={onDrop} />)

    const dropzone = container.querySelector(".ui-dropzone")

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
      <Dropzone accept={IMAGE_ACCEPT_TYPE}>
        <DropzoneAccept>
          <p>Accepted</p>
        </DropzoneAccept>
      </Dropzone>,
    )

    const dropzone = container.querySelector(".ui-dropzone")

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
      <Dropzone accept={IMAGE_ACCEPT_TYPE}>
        <DropzoneReject>
          <p>Rejected</p>
        </DropzoneReject>
      </Dropzone>,
    )

    const dropzone = container.querySelector(".ui-dropzone")

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
      <Dropzone>
        <DropzoneIdle>
          <p>Idle</p>
        </DropzoneIdle>
      </Dropzone>,
    )

    expect(container.textContent).toContain("Idle")
  })
})
