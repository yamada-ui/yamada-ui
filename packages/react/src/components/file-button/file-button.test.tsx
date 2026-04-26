import { useRef, useState } from "react"
import { a11y, page, render } from "#test/browser"
import { FileButton } from "."

describe("<FileButton />", () => {
  beforeEach(() => {
    vi.spyOn(HTMLInputElement.prototype, "click").mockImplementation(() => {})
  })

  afterAll(() => {
    vi.restoreAllMocks()
  })

  test("renders component correctly", async () => {
    await a11y(<FileButton>Upload</FileButton>)
  })

  test("sets `displayName`", () => {
    expect(FileButton.displayName).toBe("FileButton")
  })

  test("sets `className` correctly", async () => {
    await render(<FileButton>Upload</FileButton>)

    await expect
      .element(page.getByRole("button", { name: /Upload/i }))
      .toHaveClass("ui-file-button")
  })

  test("renders HTML tag correctly", async () => {
    await render(<FileButton>Upload</FileButton>)
    const fileButton = page.getByRole("button", { name: /Upload/i })
    expect(fileButton.element().tagName).toBe("BUTTON")
  })

  test("should render FileButton", async () => {
    await render(<FileButton>Upload</FileButton>)

    await expect
      .element(page.getByRole("button", { name: /Upload/i }))
      .toBeInTheDocument()
  })

  test("should call onClick", async () => {
    const onClickMock = vi.fn()

    const { user } = await render(
      <FileButton onClick={onClickMock}>Upload</FileButton>,
    )

    await user.click(page.getByRole("button", { name: /Upload/i }))

    await vi.waitFor(() => {
      expect(onClickMock).toHaveBeenCalledTimes(1)
    })
  })

  test("renders as non-actionable when readonly", async () => {
    await render(<FileButton readOnly>Upload</FileButton>)

    await expect
      .element(page.getByRole("button", { name: /Upload/i }))
      .toHaveAttribute("aria-disabled", "true")
  })

  test("renders as disabled when disabled", async () => {
    await render(<FileButton disabled>Upload</FileButton>)

    await expect
      .element(page.getByRole("button", { name: /Upload/i }))
      .toBeDisabled()
  })

  test("should handle file selection correctly", async () => {
    const handleFileChangeMock = vi.fn()

    const TestComponent = () => {
      const [files, setFiles] = useState<File[] | null>(null)

      const handleFileChange = (newFiles: File[] | undefined) => {
        setFiles(newFiles || null)
        handleFileChangeMock(newFiles)
      }

      return (
        <>
          <p data-testid="file-count">files: {files ? files.length : 0}</p>
          <FileButton multiple onChange={handleFileChange}>
            Upload
          </FileButton>
        </>
      )
    }

    const { user } = await render(<TestComponent />)

    const fileCount = page.getByTestId("file-count")
    const fileInput = document.querySelector(
      'input[type="file"]',
    ) as HTMLInputElement

    await expect.element(fileCount).toHaveTextContent("files: 0")
    expect(handleFileChangeMock).not.toHaveBeenCalled()

    const file1 = new File(["test1"], "test1.txt", { type: "text/plain" })
    await user.upload(fileInput, file1)

    await vi.waitFor(() => {
      expect(fileCount.element()).toHaveTextContent("files: 1")
    })
    await vi.waitFor(() => {
      expect(handleFileChangeMock).toHaveBeenLastCalledWith([file1])
    })

    const file2 = new File(["test2"], "test2.txt", { type: "text/plain" })
    await user.upload(fileInput, [file1, file2])

    await vi.waitFor(() => {
      expect(fileCount.element()).toHaveTextContent("files: 2")
    })
    expect(handleFileChangeMock).toHaveBeenLastCalledWith([file1, file2])

    await user.upload(fileInput, [])

    await vi.waitFor(() => {
      expect(fileCount.element()).toHaveTextContent("files: 0")
    })
    expect(handleFileChangeMock).toHaveBeenLastCalledWith(undefined)

    expect(handleFileChangeMock).toHaveBeenCalledTimes(3)
  })

  test("should handle reset correctly", async () => {
    const TestComponent = () => {
      const [files, setFiles] = useState<File[] | null>(null)
      const resetRef = useRef<() => void>(null)

      const onReset = () => {
        setFiles(null)
        resetRef.current?.()
      }

      const handleFileChange = (newFiles: File[] | undefined) => {
        setFiles(newFiles || null)
      }

      return (
        <>
          <p data-testid="file-count">files: {files ? files.length : 0}</p>
          <>
            <FileButton resetRef={resetRef} onChange={handleFileChange}>
              Upload
            </FileButton>
            <button onClick={onReset}>Reset</button>
          </>
        </>
      )
    }

    const { user } = await render(<TestComponent />)

    const resetButton = page.getByRole("button", { name: /Reset/i }).element()
    const fileCount = page.getByTestId("file-count")

    await expect.element(fileCount).toHaveTextContent("files: 0")

    const file = new File(["test"], "test.txt", { type: "text/plain" })
    const fileInput = document.querySelector(
      'input[type="file"]',
    ) as HTMLInputElement
    await user.upload(fileInput, file)

    await vi.waitFor(() => {
      expect(fileCount.element()).toHaveTextContent("files: 1")
    })

    await user.click(resetButton)

    await vi.waitFor(() => {
      expect(fileCount.element()).toHaveTextContent("files: 0")
    })
  })
})
