import { a11y, page, render } from "#test/browser"
import { FileInput } from "."
import { InputPropsContext } from "../input"

const getInput = () =>
  document.querySelector('input[type="file"]') as HTMLInputElement

const changeFiles = (files: File[] | null) => {
  const input = getInput()

  Object.defineProperty(input, "files", {
    configurable: true,
    value: files,
  })

  input.dispatchEvent(new Event("change", { bubbles: true }))
}

describe("<FileInput />", () => {
  test("renders component correctly", async () => {
    await a11y(<FileInput placeholder="placeholder" />, {
      axeOptions: {
        rules: {
          "color-contrast": { enabled: false },
        },
      },
    })
  })

  test("sets `displayName` correctly", () => {
    expect(FileInput.displayName).toBe("FileInputRoot")
  })

  test("sets `className` correctly", async () => {
    await render(<FileInput placeholder="placeholder" />)
    const el = page.getByText("placeholder").element()
    expect(el.parentElement).toHaveClass("ui-file-input__root")
  })

  test("renders HTML tag correctly", async () => {
    await render(<FileInput placeholder="placeholder" />)
    const el = page.getByText("placeholder").element()
    expect(el.parentElement?.tagName).toBe("DIV")
    expect(el.tagName).toBe("SPAN")
  })

  test("sets multiple attribute", async () => {
    await render(<FileInput multiple placeholder="multiple" />)
    expect(getInput()).toHaveAttribute("multiple")
  })

  test("should accept only provided file types", async () => {
    await render(
      <FileInput accept="image/png,image/jpeg" placeholder="only png, jpeg" />,
    )
    expect(getInput()).toHaveAttribute("accept", "image/png,image/jpeg")
  })

  test("should render files with provided separator", async () => {
    await render(<FileInput data-testid="fileInput" multiple separator=";" />)
    const file = new File(["foo"], "foo.txt", { type: "text/plain" })

    changeFiles([file, file])

    await expect
      .element(page.getByTestId("fileInput"))
      .toHaveTextContent("foo.txt;foo.txt")
  })

  test("should render files with format", async () => {
    await render(
      <FileInput
        data-testid="fileInput"
        format={({ name }) => name.substring(0, name.indexOf("."))}
        multiple
        placeholder="multiple"
      />,
    )
    const file = new File(["foo"], "foo.txt", { type: "text/plain" })

    changeFiles([file, file])

    await expect
      .element(page.getByTestId("fileInput"))
      .toHaveTextContent("foo,foo")
  })

  test("should render files with children", async () => {
    await render(
      <FileInput data-testid="fileInput" multiple>
        {(files) => <div>Selected: {files?.length ?? 0}</div>}
      </FileInput>,
    )
    const file = new File(["foo"], "foo.txt", { type: "text/plain" })

    changeFiles([file, file])

    await expect
      .element(page.getByTestId("fileInput"))
      .toHaveTextContent("Selected: 2")
  })

  test("should be disabled", async () => {
    await render(<FileInput disabled />)
    expect(getInput()).toBeDisabled()
  })

  test("should be read only", async () => {
    await render(<FileInput readOnly />)
    expect(getInput()).toHaveAttribute("readonly")
  })

  test("should be invalid", async () => {
    await render(<FileInput invalid />)
    expect(getInput()).toHaveAttribute("aria-invalid", "true")
  })

  test("should receive the resetRef, which resets files when invoked", async () => {
    const resetRef: { current: (() => void) | null } = { current: null }
    let files: File[] | undefined = []
    const onChange = vi.fn((newFiles: File[] | undefined) => {
      files = newFiles
    })

    await render(<FileInput multiple resetRef={resetRef} onChange={onChange} />)

    const file1 = new File(["hoge"], "hoge.txt", { type: "text/plain" })
    const file2 = new File(["foo"], "foo.png", {
      type: "image/png",
    })
    const file3 = new File(["bar"], "bar.pdf", {
      type: "application/pdf",
    })

    changeFiles([file1, file2, file3])

    expect(files).toHaveLength(3)
    expect(files[0]).toStrictEqual(file1)
    expect(files[1]).toStrictEqual(file2)
    expect(files[2]).toStrictEqual(file3)
    expect(resetRef).toBeTruthy()
    expect(typeof resetRef.current).toBe("function")

    resetRef.current?.()

    await expect.poll(() => files).toBeFalsy()
    expect(onChange).toHaveBeenCalledTimes(2)
  })

  test("should receive the files onChange", async () => {
    let files: File[] | undefined = []
    const onChange = vi.fn((newFiles: File[] | undefined) => {
      files = newFiles
    })

    await render(<FileInput multiple onChange={onChange} />)

    const file = new File(["foo"], "foo.txt", { type: "text/plain" })

    changeFiles([file, file, file])

    expect(onChange).toHaveBeenCalledTimes(1)
    expect(files).toHaveLength(3)
    files.forEach((value: File) => expect(value).toStrictEqual(file))
  })

  test("should not show files in the onChange function if no files are present", async () => {
    let value: any = null
    const onChange = (val: any) => {
      value = val
    }

    await render(<FileInput onChange={onChange} />)

    const file = new File(["foo"], "foo.txt", { type: "text/plain" })

    changeFiles([file, file, file])
    changeFiles(null)

    expect(value).toBeFalsy()
  })

  test("should work with custom component for displaying files", async () => {
    let files: any = []

    await render(
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

    changeFiles([file1, file2])

    await expect.element(page.getByText("foo.txt")).toBeInTheDocument()
    await expect.element(page.getByText("foo-bar.png")).toBeInTheDocument()
    await expect.element(page.getByText("0")).toBeInTheDocument()
    await expect.element(page.getByText("1")).toBeInTheDocument()
    await expect.element(page.getByText("text/plain")).toBeInTheDocument()
    await expect.element(page.getByText("image/png")).toBeInTheDocument()
    expect(files).toStrictEqual([file1, file2])
  })

  test("should work with custom component which returns null for displaying files", async () => {
    let files: any = []

    await render(
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

    changeFiles([file1, file2])

    expect(files).toStrictEqual([file1, file2])
    await expect.element(page.getByText("foo.txt")).not.toBeInTheDocument()
    await expect.element(page.getByText("foo-bar.txt")).not.toBeInTheDocument()
  })

  test("click should not be called in the inner input element after click when disabled", async () => {
    await render(<FileInput data-testid="fileInput" disabled />)

    const input = getInput()
    const fn = vi.fn()

    input.addEventListener("click", fn)
    page.getByTestId("fileInput").element().click()

    expect(fn).toHaveBeenCalledTimes(0)
  })

  test("click should not be called in the inner input element after click when readonly", async () => {
    await render(<FileInput data-testid="fileInput" readOnly />)

    const input = getInput()
    const fn = vi.fn()

    input.addEventListener("click", fn)
    page.getByTestId("fileInput").element().click()

    expect(fn).toHaveBeenCalledTimes(0)
  })

  test("click should be called in the inner input element after click", async () => {
    await render(<FileInput data-testid="fileInput" />)

    const input = getInput()
    const fn = vi.fn()

    input.addEventListener("click", fn)
    page.getByTestId("fileInput").element().click()

    expect(fn).toHaveBeenCalledTimes(1)
  })

  test("should merge context and user props without overwriting className, style, and event handlers", async () => {
    const onContextClick = vi.fn()
    const onUserClick = vi.fn()

    await render(
      <InputPropsContext
        value={{
          className: "from-context",
          style: { color: "red" },
          onClick: onContextClick,
        }}
      >
        <FileInput
          className="from-user"
          style={{ backgroundColor: "blue" }}
          data-testid="fileInput"
          placeholder="placeholder"
          onClick={onUserClick}
        />
      </InputPropsContext>,
    )

    const el = page.getByTestId("fileInput")

    await expect.element(el).toHaveClass("from-context", "from-user")
    await expect.element(el).toHaveStyle({ color: "rgb(255, 0, 0)" })
    await expect.element(el).toHaveStyle({ backgroundColor: "rgb(0, 0, 255)" })

    el.element().click()

    expect(onContextClick).toHaveBeenCalledTimes(1)
    expect(onUserClick).toHaveBeenCalledTimes(1)
  })
})
