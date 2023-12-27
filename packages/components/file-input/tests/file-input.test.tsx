import { a11y, render, screen, fireEvent } from "@yamada-ui/test"
import { FileInput } from "../src"

describe("<FileInput />", () => {
  test("FileInput renders correctly", async () => {
    const { container } = render(<FileInput placeholder="basic" />)
    await a11y(container)
  })

  test("should render FileInput", () => {
    render(<FileInput data-testid="FileInput" placeholder="basic" />)
    expect(screen.getByTestId("FileInput")).toBeInTheDocument()
  })

  test("should render FileInput with multiple inputs", () => {
    const { container } = render(
      <FileInput data-testid="FileInput" placeholder="multiple" multiple />,
    )
    expect(container.getElementsByTagName("input")[0]).toHaveAttribute(
      "multiple",
    )
  })

  test("should accept only provided file types", () => {
    const { container } = render(
      <FileInput placeholder="only png, jpeg" accept="image/png,image/jpeg" />,
    )
    expect(container.getElementsByTagName("input")[0]).toHaveAttribute(
      "accept",
      "image/png,image/jpeg",
    )
  })

  test("should render files with provided seperator", () => {
    const { container } = render(
      <FileInput data-testid="FileInput" multiple separator=";" />,
    )
    const mockedFile = new File(["foo"], "foo.txt", { type: "text/plain" })
    const fileInput = container.querySelector('input[type="file"]')!

    fireEvent.change(fileInput, { target: { files: [mockedFile, mockedFile] } })
    expect(screen.getByTestId("FileInput")).toHaveTextContent("foo.txt;foo.txt")
  })

  test("should render files with format", () => {
    const { container } = render(
      <FileInput
        data-testid="FileInput"
        placeholder="multiple"
        multiple
        format={({ name }) => `${name.substring(0, name.indexOf("."))}`}
      />,
    )
    const mockedFile = new File(["foo"], "foo.txt", { type: "text/plain" })
    const fileInput = container.querySelector('input[type="file"]')!

    fireEvent.change(fileInput, { target: { files: [mockedFile, mockedFile] } })
    expect(screen.getByTestId("FileInput")).toHaveTextContent("foo,foo")
  })

  test("should render files with children", () => {
    const { container } = render(
      <FileInput data-testid="FileInput" multiple>
        {(files) => <div>Selected: {files?.length ?? 0}</div>}
      </FileInput>,
    )
    const mockedFile = new File(["foo"], "foo.txt", { type: "text/plain" })
    const fileInput = container.querySelector('input[type="file"]')!

    fireEvent.change(fileInput, { target: { files: [mockedFile, mockedFile] } })
    expect(screen.getByTestId("FileInput")).toHaveTextContent("Selected: 2")
  })

  test("should be disabled", () => {
    const { container } = render(
      <FileInput data-testid="FileInput" isDisabled />,
    )
    expect(container.querySelector('input[type="file"]')).toBeDisabled()
  })

  test("should be read only", () => {
    const { container } = render(
      <FileInput data-testid="FileInput" isReadOnly />,
    )
    expect(container.querySelector('input[type="file"]')).toHaveAttribute(
      "readonly",
    )
  })

  test("should be invalid", () => {
    const { container } = render(
      <FileInput data-testid="FileInput" isInvalid />,
    )
    expect(container.querySelector('input[type="file"]')).toHaveAttribute(
      "aria-invalid",
      "true",
    )
  })
})
