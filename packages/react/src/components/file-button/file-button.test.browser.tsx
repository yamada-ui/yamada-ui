import { page, render } from "#test/browser"
import { useRef, useState } from "react"
import { type Locator, locators } from "vitest/browser"
import { FileButton } from "./file-button"

declare module "vitest/browser" {
  interface LocatorSelectors {
    getByCSS(css: string): Locator
  }
}

describe("<FileButton />", () => {
  beforeAll(() => {
    locators.extend({
      getByCSS(css: string) {
        return `css=${css}`
      },
    })
  })

  beforeEach(() => {
    vi.spyOn(HTMLInputElement.prototype, "click").mockImplementation(() => {})
  })

  afterAll(() => {
    vi.restoreAllMocks()
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

  test("should not call onClick (when readonly)", async () => {
    const onClickMock = vi.fn()

    const { user } = await render(
      <FileButton readOnly onClick={onClickMock}>
        Upload
      </FileButton>,
    )

    await expect
      .element(page.getByRole("button", { name: /Upload/i }))
      .toHaveAttribute("aria-disabled", "true")

    await user.click(page.getByRole("button", { name: /Upload/i }), {
      force: true,
    })
    expect(onClickMock).not.toHaveBeenCalled()
  })

  test("should not call onClick when disabled", async () => {
    const onClickMock = vi.fn()

    const { user } = await render(
      <FileButton disabled onClick={onClickMock}>
        Upload
      </FileButton>,
    )

    await expect
      .element(page.getByRole("button", { name: /Upload/i }))
      .toBeDisabled()

    await user.click(page.getByRole("button", { name: /Upload/i }), {
      force: true,
    })
    expect(onClickMock).not.toHaveBeenCalled()
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
          <p>files: {files ? files.length : 0}</p>
          <FileButton multiple onChange={handleFileChange}>
            Upload
          </FileButton>
        </>
      )
    }

    const { user } = await render(<TestComponent />)

    const fileInput = page.getByCSS('input[type="file"]')

    await expect.element(page.getByText("files: 0")).toBeInTheDocument()
    expect(handleFileChangeMock).not.toHaveBeenCalled()

    const file1 = new File(["test1"], "test1.txt", { type: "text/plain" })
    await user.upload(fileInput, file1)

    await expect.element(page.getByText("files: 1")).toBeInTheDocument()
    await vi.waitFor(() => {
      expect(handleFileChangeMock).toHaveBeenLastCalledWith([file1])
    })

    const file2 = new File(["test2"], "test2.txt", { type: "text/plain" })
    await user.upload(fileInput, [file1, file2])

    await expect.element(page.getByText("files: 2")).toBeInTheDocument()
    expect(handleFileChangeMock).toHaveBeenLastCalledWith([file1, file2])

    await user.upload(fileInput, [])

    await expect.element(page.getByText("files: 0")).toBeInTheDocument()
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
          <p>files: {files ? files.length : 0}</p>
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

    await expect.element(page.getByText("files: 0")).toBeInTheDocument()

    const file = new File(["test"], "test.txt", { type: "text/plain" })
    const fileInput = page.getByCSS('input[type="file"]')
    await user.upload(fileInput, file)

    await expect.element(page.getByText("files: 1")).toBeInTheDocument()

    await user.click(page.getByRole("button", { name: /Reset/i }))

    await expect.element(page.getByText("files: 0")).toBeInTheDocument()
  })
})
