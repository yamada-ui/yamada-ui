import { a11y, act, fireEvent, render, screen } from "#test"
import { FileInput } from "."

describe("<FileInput />", () => {
  test("FileInput renders correctly", async () => {
    await a11y(<FileInput placeholder="placeholder" />)
  })

  test("sets `displayName` correctly", () => {
    expect(FileInput.displayName).toBe("FileInputRoot")
  })

  test("sets `className` correctly", () => {
    render(<FileInput placeholder="placeholder" />)
    const el = screen.getByText("placeholder")
    expect(el.parentElement).toHaveClass("ui-file-input__root")
  })

  test("renders HTML tag correctly", () => {
    render(<FileInput placeholder="placeholder" />)
    const el = screen.getByText("placeholder")
    expect(el.parentElement?.tagName).toBe("DIV")
    expect(el.tagName).toBe("SPAN")
  })

  test("sets multiple attribute", () => {
    render(<FileInput multiple placeholder="multiple" />)
    const el = document.querySelector('input[type="file"]')
    expect(el).toHaveAttribute("multiple")
  })

  test("should accept only provided file types", () => {
    render(
      <FileInput accept="image/png,image/jpeg" placeholder="only png, jpeg" />,
    )
    const el = document.querySelector('input[type="file"]')
    expect(el).toHaveAttribute("accept", "image/png,image/jpeg")
  })

  test("should render files with provided separator", () => {
    render(<FileInput data-testid="fileInput" multiple separator=";" />)
    const file = new File(["foo"], "foo.txt", { type: "text/plain" })
    fireEvent.change(document.querySelector('input[type="file"]')!, {
      target: { files: [file, file] },
    })
    expect(screen.getByTestId("fileInput")).toHaveTextContent("foo.txt;foo.txt")
  })

  test("should render files with format", () => {
    render(
      <FileInput
        data-testid="fileInput"
        format={({ name }) => name.substring(0, name.indexOf("."))}
        multiple
        placeholder="multiple"
      />,
    )
    const file = new File(["foo"], "foo.txt", { type: "text/plain" })
    fireEvent.change(document.querySelector('input[type="file"]')!, {
      target: { files: [file, file] },
    })
    expect(screen.getByTestId("fileInput")).toHaveTextContent("foo,foo")
  })

  test("should render files with children", () => {
    render(
      <FileInput data-testid="fileInput" multiple>
        {(files) => <div>Selected: {files?.length ?? 0}</div>}
      </FileInput>,
    )
    const file = new File(["foo"], "foo.txt", { type: "text/plain" })
    fireEvent.change(document.querySelector('input[type="file"]')!, {
      target: { files: [file, file] },
    })
    expect(screen.getByTestId("fileInput")).toHaveTextContent("Selected: 2")
  })

  test("should be disabled", () => {
    render(<FileInput disabled />)
    expect(document.querySelector('input[type="file"]')).toBeDisabled()
  })

  test("should be read only", () => {
    render(<FileInput readOnly />)
    expect(document.querySelector('input[type="file"]')).toHaveAttribute(
      "readonly",
    )
  })

  test("should be invalid", () => {
    render(<FileInput invalid />)
    expect(document.querySelector('input[type="file"]')).toHaveAttribute(
      "aria-invalid",
      "true",
    )
  })

  test("should receive the resetRef, which resets files when invoked", () => {
    const resetRef: { current: (() => void) | null } = { current: null }
    let files: File[] | undefined = []
    const onChange = vi.fn((newFiles: File[] | undefined) => {
      files = newFiles
    })
    render(<FileInput multiple resetRef={resetRef} onChange={onChange} />)
    const file1 = new File(["hoge"], "hoge.txt", { type: "text/plain" })
    const file2 = new File(["foo"], "foo.png", {
      type: "image/png",
    })
    const file3 = new File(["bar"], "bar.pdf", {
      type: "application/pdf",
    })
    fireEvent.change(document.querySelector('input[type="file"]')!, {
      target: { files: [file1, file2, file3] },
    })
    expect(files).toHaveLength(3)
    expect(files[0]).toStrictEqual(file1)
    expect(files[1]).toStrictEqual(file2)
    expect(files[2]).toStrictEqual(file3)
    expect(resetRef).toBeTruthy()
    expect(typeof resetRef.current).toBe("function")
    act(() => {
      if (resetRef.current) resetRef.current()
    })
    expect(files).toBeFalsy()
    expect(onChange).toHaveBeenCalledTimes(2)
  })

  test("should receive the files onChange", () => {
    let files: File[] | undefined = []
    const onChange = vi.fn((newFiles: File[] | undefined) => {
      files = newFiles
    })
    render(<FileInput multiple onChange={onChange} />)
    const file = new File(["foo"], "foo.txt", { type: "text/plain" })
    fireEvent.change(document.querySelector('input[type="file"]')!, {
      target: { files: [file, file, file] },
    })
    expect(onChange).toHaveBeenCalledTimes(1)
    expect(files).toHaveLength(3)
    files!.forEach((file: File) => expect(file).toStrictEqual(file))
  })

  test("should not show files in the onChange function if no files are present", () => {
    let value: any = null
    const onChange = (val: any) => {
      value = val
    }
    render(<FileInput onChange={onChange} />)
    const file = new File(["foo"], "foo.txt", { type: "text/plain" })
    const el = document.querySelector('input[type="file"]')!
    fireEvent.change(el, {
      target: { files: [file, file, file] },
    })
    fireEvent.change(el, {
      target: { files: null },
    })
    expect(value).toBeFalsy()
  })

  test("should work with custom component for displaying files", () => {
    let files: any = []
    render(
      <div>
        <FileInput
          component={({ index, value }) => {
            files.push(value)
            return (
              <div>
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
    const file1 = new File(["foo"], "foo.txt", { type: "text/plain" })
    const file2 = new File(["foo bar"], "foo-bar.png", {
      type: "image/png",
    })
    fireEvent.change(document.querySelector('input[type="file"]')!, {
      target: { files: [file1, file2] },
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
    render(
      <div>
        <FileInput
          component={({ value }) => {
            files.push(value)
            return null
          }}
          multiple
        />
      </div>,
    )
    const file1 = new File(["foo"], "foo.txt", { type: "text/plain" })
    const file2 = new File(["foo bar"], "foo-bar.txt", {
      type: "text/plain",
    })
    fireEvent.change(document.querySelector('input[type="file"]')!, {
      target: { files: [file1, file2] },
    })
    expect(files).toStrictEqual([file1, file2])
    expect(screen.queryByText("foo.txt")).toBeNull()
    expect(screen.queryByText("foo-bar.txt")).toBeNull()
  })

  test("click should not be called in the inner input element after click when disabled", () => {
    render(<FileInput data-testid="fileInput" disabled />)
    const el = document.querySelector('input[type="file"]')
    const fn = vi.fn()
    el?.addEventListener("click", fn)
    screen.getByTestId("fileInput").click()
    expect(fn).toHaveBeenCalledTimes(0)
  })

  test("click should not be called in the inner input element after click when readonly", () => {
    render(<FileInput data-testid="fileInput" readOnly />)
    const el = document.querySelector('input[type="file"]')
    const fn = vi.fn()
    el?.addEventListener("click", fn)
    screen.getByTestId("fileInput").click()
    expect(fn).toHaveBeenCalledTimes(0)
  })

  test("click should be called in the inner input element after click", () => {
    render(<FileInput data-testid="fileInput" />)
    const el = document.querySelector('input[type="file"]')
    const fn = vi.fn()
    el?.addEventListener("click", fn)
    screen.getByTestId("fileInput").click()
    expect(fn).toHaveBeenCalledTimes(1)
  })
})
