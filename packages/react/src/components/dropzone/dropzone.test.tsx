import { a11y, render, screen } from "#test"
import { Text } from "../text"
import { Dropzone } from "./"

describe("<Dropzone />", () => {
  test("renders component correctly", async () => {
    await a11y(
      <Dropzone.Root>
        <Text color="fg">Drag file here or click to select file</Text>
      </Dropzone.Root>,
    )
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
