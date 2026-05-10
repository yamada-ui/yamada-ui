import { a11y, fireEvent, render, screen } from "#test"
import { FileInput } from "./"

const getInput = (): HTMLInputElement => {
  const input = document.querySelector('input[type="file"]')
  if (!(input instanceof HTMLInputElement))
    throw new TypeError("Expected an HTMLInputElement")
  return input
}

const changeFiles = (files: File[] | null) => {
  const input = getInput()

  Object.defineProperty(input, "files", {
    configurable: true,
    value: files,
  })

  fireEvent.change(input)
}

describe("<FileInput />", () => {
  test("sets `displayName` correctly", () => {
    expect(FileInput.displayName).toBe("FileInputRoot")
  })

  test("passes a11y checks", async () => {
    await a11y(
      <FileInput
        placeholder="placeholder"
        _placeholder={{ color: "black", opacity: 1 }}
      />,
    )
  })

  test("renders placeholder with correct className and tag", () => {
    render(<FileInput placeholder="placeholder" />)
    const el = screen.getByText("placeholder")
    expect(el.tagName).toBe("SPAN")
    expect(el.parentElement?.tagName).toBe("DIV")
    expect(el.parentElement).toHaveClass("ui-file-input__root")
  })

  test("forwards `multiple` and `accept` to the inner input", () => {
    render(
      <FileInput
        accept="image/png,image/jpeg"
        multiple
        placeholder="multiple"
      />,
    )
    const input = getInput()
    expect(input).toHaveAttribute("multiple")
    expect(input).toHaveAttribute("accept", "image/png,image/jpeg")
  })

  test("renders selected files joined with the configured separator", () => {
    render(<FileInput data-testid="fileInput" multiple separator=";" />)
    const file = new File(["foo"], "foo.txt", { type: "text/plain" })

    changeFiles([file, file])

    expect(screen.getByTestId("fileInput")).toHaveTextContent("foo.txt;foo.txt")
  })

  test("renders selected files using the `format` formatter", () => {
    render(
      <FileInput
        data-testid="fileInput"
        format={({ name }) => name.substring(0, name.indexOf("."))}
        multiple
        placeholder="multiple"
      />,
    )
    const file = new File(["foo"], "foo.txt", { type: "text/plain" })

    changeFiles([file, file])

    expect(screen.getByTestId("fileInput")).toHaveTextContent("foo,foo")
  })

  test("renders selected files via the `children` render prop", () => {
    render(
      <FileInput data-testid="fileInput" multiple>
        {(files) => <div>Selected: {files?.length ?? 0}</div>}
      </FileInput>,
    )
    const file = new File(["foo"], "foo.txt", { type: "text/plain" })

    changeFiles([file, file])

    expect(screen.getByTestId("fileInput")).toHaveTextContent("Selected: 2")
  })

  test("renders selected files via the `component` render prop", () => {
    const files: File[] = []

    render(
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
      />,
    )

    const file1 = new File(["foo"], "foo.txt", { type: "text/plain" })
    const file2 = new File(["foo bar"], "foo-bar.png", { type: "image/png" })

    changeFiles([file1, file2])

    expect(screen.getByText("foo.txt")).toBeInTheDocument()
    expect(screen.getByText("foo-bar.png")).toBeInTheDocument()
    expect(screen.getByText("0")).toBeInTheDocument()
    expect(screen.getByText("1")).toBeInTheDocument()
    expect(screen.getByText("text/plain")).toBeInTheDocument()
    expect(screen.getByText("image/png")).toBeInTheDocument()
    expect(files).toStrictEqual([file1, file2])
  })

  test("invokes the `component` render prop even when it returns null", () => {
    const files: File[] = []

    render(
      <FileInput
        component={({ value }) => {
          files.push(value)

          return null
        }}
        multiple
      />,
    )

    const file1 = new File(["foo"], "foo.txt", { type: "text/plain" })
    const file2 = new File(["foo bar"], "foo-bar.txt", { type: "text/plain" })

    changeFiles([file1, file2])

    expect(files).toStrictEqual([file1, file2])
    expect(screen.queryByText("foo.txt")).not.toBeInTheDocument()
    expect(screen.queryByText("foo-bar.txt")).not.toBeInTheDocument()
  })

  test("disables the inner input when `disabled`", () => {
    render(<FileInput disabled />)
    expect(getInput()).toBeDisabled()
  })

  test("marks the inner input as `readonly`", () => {
    render(<FileInput readOnly />)
    expect(getInput()).toHaveAttribute("readonly")
  })

  test("marks the inner input as `aria-invalid` when `invalid`", () => {
    render(<FileInput invalid />)
    expect(getInput()).toHaveAttribute("aria-invalid", "true")
  })

  test("invokes `onChange` with the selected files", () => {
    let files: File[] | undefined
    const onChange = vi.fn((newFiles: File[] | undefined) => {
      files = newFiles
    })

    render(<FileInput multiple onChange={onChange} />)

    const file = new File(["foo"], "foo.txt", { type: "text/plain" })

    changeFiles([file, file, file])

    expect(onChange).toHaveBeenCalledTimes(1)
    expect(files).toHaveLength(3)
    files?.forEach((value) => expect(value).toStrictEqual(file))
  })

  test("does not pass empty files to `onChange`", () => {
    let value: File[] | undefined
    const onChange = (val: File[] | undefined) => {
      value = val
    }

    render(<FileInput onChange={onChange} />)

    const file = new File(["foo"], "foo.txt", { type: "text/plain" })

    changeFiles([file, file, file])
    changeFiles(null)

    expect(value).toBeFalsy()
  })

  test("resets selected files via `resetRef`", () => {
    const resetRef: { current: (() => void) | null } = { current: null }
    let files: File[] | undefined
    const onChange = vi.fn((newFiles: File[] | undefined) => {
      files = newFiles
    })

    render(<FileInput multiple resetRef={resetRef} onChange={onChange} />)

    const file1 = new File(["hoge"], "hoge.txt", { type: "text/plain" })
    const file2 = new File(["foo"], "foo.png", { type: "image/png" })
    const file3 = new File(["bar"], "bar.pdf", { type: "application/pdf" })

    changeFiles([file1, file2, file3])

    expect(files).toHaveLength(3)
    expect(files?.[0]).toStrictEqual(file1)
    expect(files?.[1]).toStrictEqual(file2)
    expect(files?.[2]).toStrictEqual(file3)
    expect(typeof resetRef.current).toBe("function")

    resetRef.current?.()

    expect(files).toBeFalsy()
    expect(onChange).toHaveBeenCalledTimes(2)
  })

  test("does not click the inner input when disabled", () => {
    render(<FileInput data-testid="fileInput" disabled />)

    const input = getInput()
    const fn = vi.fn()

    input.addEventListener("click", fn)
    fireEvent.click(screen.getByTestId("fileInput"))

    expect(fn).toHaveBeenCalledTimes(0)
  })

  test("does not click the inner input when readonly", () => {
    render(<FileInput data-testid="fileInput" readOnly />)

    const input = getInput()
    const fn = vi.fn()

    input.addEventListener("click", fn)
    fireEvent.click(screen.getByTestId("fileInput"))

    expect(fn).toHaveBeenCalledTimes(0)
  })
})
