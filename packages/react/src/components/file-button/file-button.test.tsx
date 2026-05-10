import { a11y, render, screen } from "#test"
import { FileButton } from "./file-button"

describe("<FileButton />", () => {
  test("renders component correctly", async () => {
    await a11y(<FileButton>Upload</FileButton>)
  })

  test("sets displayName", () => {
    expect(FileButton.displayName).toBe("FileButton")
  })

  test("sets className correctly", () => {
    render(<FileButton>Upload</FileButton>)
    expect(screen.getByRole("button")).toHaveClass("ui-file-button")
  })

  test("renders HTML tag correctly", () => {
    render(<FileButton>Upload</FileButton>)
    expect(screen.getByRole("button").tagName).toBe("BUTTON")
  })

  test("should render FileButton", () => {
    render(<FileButton>Upload</FileButton>)
    expect(screen.getByRole("button", { name: "Upload" })).toBeInTheDocument()
  })
})
