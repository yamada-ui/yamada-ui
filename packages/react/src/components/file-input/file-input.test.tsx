import { FileInput } from "."
import { a11y, act, fireEvent, render, screen } from "../../../test"

describe("<FileInput />", () => {
  test("FileInput renders correctly", async () => {
    await a11y(<FileInput placeholder="basic" />)
  })

  test("should render FileInput", () => {
    render(<FileInput data-testid="FileInput" placeholder="basic" />)
    expect(screen.getByTestId("FileInput")).toBeInTheDocument()
  })

  test("should render FileInput with multiple inputs", () => {
    const { container } = render(
      <FileInput data-testid="FileInput" multiple placeholder="multiple" />,
    )
    expect(container.getElementsByTagName("input")[0]).toHaveAttribute(
      "multiple",
    )
  })

  test("should accept only provided file types", () => {
    const { container } = render(
      <FileInput accept="image/png,image/jpeg" placeholder="only png, jpeg" />,
    )
    expect(container.getElementsByTagName("input")[0]).toHaveAttribute(
      "accept",
      "image/png,image/jpeg",
    )
  })

  test("should render files with provided separator", () => {
    const { container } = render(
      <FileInput data-testid="FileInput" multiple separator=";" />,
    )
    const mockedFile = new File(["foo"], "foo.txt", { type: "text/plain" })
    const fileInput = container.querySelector('input[type="file"]')!

    fireEvent.change(fileInput, {
      target: { files: [mockedFile, mockedFile] },
    })
    expect(screen.getByTestId("FileInput")).toHaveTextContent("foo.txt;foo.txt")
  })

  test("should render files with format", () => {
    const { container } = render(
      <FileInput
        data-testid="FileInput"
        format={({ name }) => name.substring(0, name.indexOf("."))}
        multiple
        placeholder="multiple"
      />,
    )
    const mockedFile = new File(["foo"], "foo.txt", { type: "text/plain" })
    const fileInput = container.querySelector('input[type="file"]')!

    fireEvent.change(fileInput, {
      target: { files: [mockedFile, mockedFile] },
    })
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

    fireEvent.change(fileInput, {
      target: { files: [mockedFile, mockedFile] },
    })
    expect(screen.getByTestId("FileInput")).toHaveTextContent("Selected: 2")
  })

  test("should be disabled", () => {
    const { container } = render(<FileInput data-testid="FileInput" disabled />)
    expect(container.querySelector('input[type="file"]')).toBeDisabled()
  })

  test("should be read only", () => {
    const { container } = render(<FileInput data-testid="FileInput" readOnly />)
    expect(container.querySelector('input[type="file"]')).toHaveAttribute(
      "readonly",
    )
  })

  test("should be invalid", () => {
    const { container } = render(<FileInput data-testid="FileInput" invalid />)
    expect(container.querySelector('input[type="file"]')).toHaveAttribute(
      "aria-invalid",
      "true",
    )
  })

  test("should receive the resetRef, which resets files when invoked", () => {
    const resetRef: { current: (() => void) | null } = { current: null }
    let files: File[] | undefined = []
    const setFiles = vi.fn((newFiles: File[] | undefined) => {
      files = newFiles
    })
    const { container } = render(
      <FileInput
        data-testid="FileInput"
        multiple
        resetRef={resetRef}
        onChange={setFiles}
      />,
    )
    const mockedFile1 = new File(["foo"], "foo.txt", { type: "text/plain" })
    const mockedFile2 = new File(["images"], "image.png", {
      type: "image/png",
    })
    const mockedFile3 = new File(["pdf"], "doc.pdf", {
      type: "application/pdf",
    })
    const fileInput = container.querySelector('input[type="file"]')!
    const mockedFiles = [mockedFile1, mockedFile2, mockedFile3]
    fireEvent.change(fileInput, {
      target: { files: mockedFiles },
    })

    expect(files).toHaveLength(3)
    expect(files[0]).toStrictEqual(mockedFile1)
    expect(files[1]).toStrictEqual(mockedFile2)
    expect(files[2]).toStrictEqual(mockedFile3)

    expect(resetRef).toBeTruthy()
    expect(typeof resetRef.current).toBe("function")
    act(() => {
      if (resetRef.current) resetRef.current()
    })
    expect(files).toBeFalsy()
    expect(setFiles).toHaveBeenCalledTimes(2)
  })

  test("should receive the files onChange", () => {
    let files: File[] | undefined = []
    const setFiles = vi.fn((newFiles: File[] | undefined) => {
      files = newFiles
    })

    const { container } = render(
      <FileInput data-testid="FileInput" multiple onChange={setFiles} />,
    )

    const mockedFile = new File(["foo"], "foo.txt", { type: "text/plain" })
    const fileInput = container.querySelector('input[type="file"]')!

    fireEvent.change(fileInput, {
      target: { files: [mockedFile, mockedFile, mockedFile] },
    })

    expect(setFiles).toHaveBeenCalledTimes(1)
    expect(files).toHaveLength(3)

    files!.forEach((file: File) => expect(file).toStrictEqual(mockedFile))
  })

  test("should not show files in the onChange function if no files are present", () => {
    let value: any = null
    const setValue = (val: any) => {
      value = val
    }
    const { container } = render(
      <FileInput data-testid="FileInput" onChange={setValue} />,
    )
    const mockedFile = new File(["foo"], "foo.txt", { type: "text/plain" })
    const fileInput = container.querySelector('input[type="file"]')!

    fireEvent.change(fileInput, {
      target: { files: [mockedFile, mockedFile, mockedFile] },
    })
    fireEvent.change(fileInput, {
      target: { files: null },
    })

    expect(value).toBeFalsy()
  })

  test("should work with custom component for displaying files", () => {
    let files: any = []
    const { container } = render(
      <div>
        <FileInput
          data-testid="FileInput"
          component={({ index, value }) => {
            files.push(value)
            return (
              <div>
                {" "}
                <div data-testid={"index " + index}>{index}</div>
                <div data-testid={"name" + index}>{value.name}</div>
                <div data-testid={"type" + index}>{value.type}</div>
              </div>
            )
          }}
          multiple
        />
      </div>,
    )
    const fileInput = container.querySelector('input[type="file"]')!
    const mockedFile1 = new File(["foo"], "foo.txt", { type: "text/plain" })
    const mockedFile2 = new File(["foo bar"], "foo-bar.png", {
      type: "image/png",
    })
    fireEvent.change(fileInput, {
      target: { files: [mockedFile1, mockedFile2] },
    })

    expect(screen.getByText("foo.txt")).toBeInTheDocument()
    expect(screen.getByText("foo-bar.png")).toBeInTheDocument()
    expect(screen.getByText("0")).toBeInTheDocument()
    expect(screen.getByText("1")).toBeInTheDocument()
    expect(screen.getByText("text/plain")).toBeInTheDocument()
    expect(screen.getByText("image/png")).toBeInTheDocument()
  })

  test("should work with custom component which returns null for displaying files", () => {
    let files: any = []
    const { container } = render(
      <div>
        <FileInput
          data-testid="FileInput"
          component={({ value }) => {
            files.push(value)
            return null
          }}
          multiple
        />
      </div>,
    )
    const fileInput = container.querySelector('input[type="file"]')!
    const mockedFile1 = new File(["foo"], "foo.txt", { type: "text/plain" })
    const mockedFile2 = new File(["foo bar"], "foo-bar.txt", {
      type: "text/plain",
    })
    fireEvent.change(fileInput, {
      target: { files: [mockedFile1, mockedFile2] },
    })

    expect(files).toStrictEqual([mockedFile1, mockedFile2])
    expect(screen.queryByText("foo.txt")).toBeNull()
    expect(screen.queryByText("foo-bar.txt")).toBeNull()
  })

  test("click should not be called in the inner input element after click when disabled", () => {
    const { container } = render(
      <FileInput data-testid="file-input" disabled />,
    )
    const fileInputElement = container.querySelector('input[type="file"]')
    const listener = vi.fn()

    fileInputElement?.addEventListener("click", listener)
    screen.getByTestId("file-input").click()

    expect(listener).toHaveBeenCalledTimes(0)
  })

  test("click should not be called in the inner input element after click when readonly", () => {
    const { container } = render(
      <FileInput data-testid="file-input" readOnly />,
    )
    const fileInputElement = container.querySelector('input[type="file"]')
    const listener = vi.fn()

    fileInputElement?.addEventListener("click", listener)
    screen.getByTestId("file-input").click()

    expect(listener).toHaveBeenCalledTimes(0)
  })

  test("click should be called in the inner input element after click", () => {
    const { container } = render(<FileInput data-testid="file-input" />)
    const fileInputElement = container.querySelector('input[type="file"]')
    const listener = vi.fn()
    fileInputElement?.addEventListener("click", listener)
    screen.getByTestId("file-input").click()

    expect(listener).toHaveBeenCalledTimes(1)
  })
})
