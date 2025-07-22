import { a11y, render, screen, waitFor } from "#test"
import { useRef, useState } from "react"
import { FileButton } from "."

describe("<FileButton />", () => {
  afterAll(() => {
    vi.restoreAllMocks()
  })

  test("renders component correctly", async () => {
    await a11y(<FileButton>Upload</FileButton>)
  })

  test("sets `displayName`", () => {
    expect(FileButton.displayName).toBe("FileButton")
  })

  test("sets `className` correctly", () => {
    render(<FileButton>Upload</FileButton>)

    const fileButton = screen.getByRole("button", { name: /Upload/i })
    expect(fileButton).toHaveClass("ui-file-button")
  })

  test("renders HTML tag correctly", () => {
    render(<FileButton>Upload</FileButton>)
    const fileButton = screen.getByRole("button", { name: /Upload/i })
    expect(fileButton.tagName).toBe("BUTTON")
  })

  test("should render FileButton", async () => {
    render(<FileButton>Upload</FileButton>)

    const fileButton = await screen.findByRole("button", { name: /Upload/i })
    expect(fileButton).toBeInTheDocument()
  })

  test("should call onClick", async () => {
    const onClickMock = vi.fn()

    const { user } = render(
      <FileButton onClick={onClickMock}>Upload</FileButton>,
    )

    const button = await screen.findByRole("button")
    await user.click(button)
    waitFor(() => {
      expect(onClickMock).toHaveBeenCalledTimes(1)
    })
  })

  test("should call onClick (when readonly)", async () => {
    const onClickMock = vi.fn()

    const { user } = render(
      <FileButton readOnly onClick={onClickMock}>
        Upload
      </FileButton>,
    )

    const fileButton = await screen.findByRole("button", { name: /Upload/i })
    await user.click(fileButton)
    waitFor(() => {
      expect(onClickMock).toHaveBeenCalledTimes(1)
    })
  })

  test("should not call onClick when disabled", async () => {
    const onClickMock = vi.fn()

    const { user } = render(
      <FileButton disabled onClick={onClickMock}>
        Upload
      </FileButton>,
    )

    const fileButton = await screen.findByRole("button", { name: /Upload/i })
    expect(fileButton).toBeDisabled()

    await user.click(fileButton)
    waitFor(() => {
      expect(onClickMock).toHaveBeenCalledTimes(0)
    })
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

    const { user } = render(<TestComponent />)

    const fileCount = screen.getByTestId("file-count")
    const fileInput = document.querySelector(
      'input[type="file"]',
    ) as HTMLInputElement

    expect(fileCount).toHaveTextContent("files: 0")
    expect(handleFileChangeMock).not.toHaveBeenCalled()

    const file1 = new File(["test1"], "test1.txt", { type: "text/plain" })
    await user.upload(fileInput, file1)

    waitFor(() => {
      expect(fileCount).toHaveTextContent("files: 1")
    })
    waitFor(() => {
      expect(handleFileChangeMock).toHaveBeenCalledWith([file1])
    })

    const file2 = new File(["test2"], "test2.txt", { type: "text/plain" })
    await user.upload(fileInput, [file1, file2])

    await waitFor(() => {
      expect(fileCount).toHaveTextContent("files: 2")
    })
    expect(handleFileChangeMock).toHaveBeenCalledWith([file1, file2])

    await user.upload(fileInput, [])

    await waitFor(() => {
      expect(fileCount).toHaveTextContent("files: 0")
    })
    expect(handleFileChangeMock).toHaveBeenCalledWith(undefined)

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

    const { user } = render(<TestComponent />)

    const resetButton = await screen.findByRole("button", { name: /Reset/i })
    const fileCount = screen.getByTestId("file-count")

    expect(fileCount).toHaveTextContent("files: 0")

    const file = new File(["test"], "test.txt", { type: "text/plain" })
    const fileInput = document.querySelector(
      'input[type="file"]',
    ) as HTMLInputElement
    await user.upload(fileInput, file)

    await waitFor(() => {
      expect(fileCount).toHaveTextContent("files: 1")
    })

    await user.click(resetButton)

    await waitFor(() => {
      expect(fileCount).toHaveTextContent("files: 0")
    })
  })
})
