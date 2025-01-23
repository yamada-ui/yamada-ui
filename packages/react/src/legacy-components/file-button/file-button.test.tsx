import { useRef, useState } from "react"
import { FileButton } from "."
import { a11y, fireEvent, render, screen, waitFor } from "../../../test"

describe("<FileButton />", () => {
  afterAll(() => {
    vi.restoreAllMocks()
  })

  test("FileButton renders correctly", async () => {
    await a11y(<FileButton>Upload</FileButton>)
  })

  test("should render FileButton", async () => {
    render(<FileButton>Upload</FileButton>)

    const fileButton = await screen.findByRole("button", { name: /Upload/i })
    expect(fileButton).toBeInTheDocument()
  })

  test("should render FileButton with Link", async () => {
    render(
      <FileButton>
        {({ onClick }) => (
          <a href="https://yamada-ui.com" onClick={onClick}>
            Upload
          </a>
        )}
      </FileButton>,
    )

    const fileButtonLink = await screen.findByRole("link", { name: /Upload/i })
    expect(fileButtonLink).toBeInTheDocument()
  })

  test("should call onClick", async () => {
    const onClickMock = vi.fn()

    const { user } = render(
      <FileButton onClick={onClickMock}>Upload</FileButton>,
    )

    const button = await screen.findByRole("button")
    await user.click(button)
    expect(onClickMock).toHaveBeenCalledTimes(1)
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
    expect(onClickMock).toHaveBeenCalledTimes(1)
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
    expect(onClickMock).toHaveBeenCalledTimes(0)
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

    render(<TestComponent />)

    const uploadButton = await screen.findByRole("button", { name: /Upload/i })
    const fileCount = screen.getByTestId("file-count")
    const fileInput = uploadButton.previousSibling as HTMLInputElement

    expect(fileCount).toHaveTextContent("files: 0")
    expect(handleFileChangeMock).not.toHaveBeenCalled()

    const file1 = new File(["test1"], "test1.txt", { type: "text/plain" })
    fireEvent.change(fileInput, { target: { files: [file1] } })

    await waitFor(() => {
      expect(fileCount).toHaveTextContent("files: 1")
    })
    expect(handleFileChangeMock).toHaveBeenCalledWith([file1])

    const file2 = new File(["test2"], "test2.txt", { type: "text/plain" })
    fireEvent.change(fileInput, { target: { files: [file1, file2] } })

    await waitFor(() => {
      expect(fileCount).toHaveTextContent("files: 2")
    })
    expect(handleFileChangeMock).toHaveBeenCalledWith([file1, file2])

    fireEvent.change(fileInput, { target: { files: [] } })

    await waitFor(() => {
      expect(fileCount).toHaveTextContent("files: 0")
    })
    expect(handleFileChangeMock).toHaveBeenCalledWith([])

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

    render(<TestComponent />)

    const uploadButton = await screen.findByRole("button", { name: /Upload/i })
    const resetButton = await screen.findByRole("button", { name: /Reset/i })
    const fileCount = screen.getByTestId("file-count")

    expect(fileCount).toHaveTextContent("files: 0")

    const file = new File(["test"], "test.txt", { type: "text/plain" })
    const fileInput = uploadButton.previousSibling as HTMLInputElement
    fireEvent.change(fileInput, { target: { files: [file] } })

    await waitFor(() => {
      expect(fileCount).toHaveTextContent("files: 1")
    })

    fireEvent.click(resetButton)

    await waitFor(() => {
      expect(fileCount).toHaveTextContent("files: 0")
    })
  })
})
