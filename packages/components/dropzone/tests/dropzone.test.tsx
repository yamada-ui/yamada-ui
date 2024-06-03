import { act, fireEvent } from "@testing-library/react"
import { Dropzone } from "@yamada-ui/dropzone"
import { Text } from "@yamada-ui/react"
import { a11y, render } from "@yamada-ui/test"

describe("<Dropzone />", () => {
  test("Dropzone renders correctly", async () => {
    const { container } = render(
      <Dropzone>
        <Text>Drag file here or click to select file</Text>
      </Dropzone>,
    )
    await a11y(container)
  })

  test("Children property renders correctly", async () => {
    const text = "Drag file here or click to select file"
    const { container } = render(
      <Dropzone>
        <Text>{text}</Text>
      </Dropzone>,
    )
    expect(container.textContent).toBe(text)
  })

  test("Is the multiple property being reflected correctly", async () => {
    const { container } = render(
      <Dropzone multiple>
        <Text>Drag file here or click to select file</Text>
      </Dropzone>,
    )
    expect(container.querySelector("input")).toHaveAttribute("multiple")
  })

  test("Is the accept property being reflected correctly", async () => {
    const { container } = render(
      <Dropzone
        accept={{
          "image/*": [],
        }}
      >
        <Text>Drag image here or click to select image</Text>
      </Dropzone>,
    )
    expect(container.querySelector("input")).toHaveAttribute(
      "accept",
      "image/*",
    )
  })

  test("Is the isDisabled property being reflected correctly", async () => {
    const { container } = render(
      <Dropzone isDisabled variant="dashed">
        <Text>Drag file here or click to select file</Text>
      </Dropzone>,
    )
    expect(container.querySelector("input")).toHaveAttribute("disabled")
    expect(container.querySelector("input")).toHaveAttribute(
      "aria-disabled",
      "true",
    )
  })

  test("Is the isReadOnly property being reflected correctly", async () => {
    const { container } = render(
      <Dropzone isReadOnly variant="dashed">
        <Text>Drag file here or click to select file</Text>
      </Dropzone>,
    )
    expect(container.querySelector("input")).toHaveAttribute("readonly")
    expect(container.querySelector("input")).toHaveAttribute(
      "aria-readonly",
      "true",
    )
  })

  test("Is the isLoading property being reflected correctly", async () => {
    const { container } = render(
      <Dropzone isLoading variant="dashed">
        <Text>Drag file here or click to select file</Text>
      </Dropzone>,
    )
    expect(container.querySelector(".ui-dropzone__loading")).toBeTruthy()
  })

  test("Is the onDrop return files correctly", async () => {
    const file = new File(["test"], "test.png", { type: "image/png" })
    const onDrop = vi.fn()
    const { container } = render(<Dropzone onDrop={onDrop} />)

    const dropzone = container.querySelector(".ui-dropzone")

    await act(async () => {
      fireEvent.drop(dropzone!, {
        dataTransfer: {
          files: [file],
          types: ["Files"],
        },
      })
    })

    expect(onDrop).toHaveBeenCalledWith([file], [], expect.anything())
  })
})
