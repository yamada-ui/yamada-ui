import { FileButton } from "../src"
import { a11y, fireEvent, render, screen } from "@yamada-ui/test"
import { Link } from "@yamada-ui/react"

describe("<FileButton/ >", () => {
  test("FileButton renders correctly", async () => {
    const { container } = render(<FileButton>Upload</FileButton>)
    await a11y(container)
  })

  test("should render FileButton", () => {
    render(<FileButton data-testid="FileButton">Upload</FileButton>)
    expect(screen.getByTestId("FileButton")).toBeInTheDocument()
    expect(screen.getByTestId("FileButton").textContent).toBe("Upload")
  })

  test("should render FileButton with Link", () => {
    render(
      <FileButton>
        {({ onClick }) => (
          <Link data-testid="FileButtonLink" onClick={onClick}>
            Upload
          </Link>
        )}
      </FileButton>,
    )
    expect(screen.getByTestId("FileButtonLink")).toBeInTheDocument()
    expect(screen.getByTestId("FileButtonLink").textContent).toBe("Upload")
    expect(screen.getByTestId("FileButtonLink").tagName).toBe("A")
  })

  test("should call onClick", async () => {
    const onClickMock = jest.fn()
    render(<FileButton onClick={onClickMock}>Upload</FileButton>)
    const button = screen.getByRole("button")
    fireEvent.click(button)
    expect(onClickMock).toHaveBeenCalledTimes(1)

    render(
      <FileButton
        data-testid="FileButtonReadOnly"
        onClick={onClickMock}
        isReadOnly
      >
        Upload
      </FileButton>,
    )
    const buttonReadOnly = screen.getByTestId("FileButtonReadOnly")
    fireEvent.click(buttonReadOnly)
    expect(onClickMock).toHaveBeenCalledTimes(2)
  })

  test("should not call onClick", async () => {
    const onClickMock = jest.fn()
    render(
      <FileButton
        data-testid="FileButtonDisable"
        onClick={onClickMock}
        isDisabled
      >
        Upload
      </FileButton>,
    )
    const buttonDisable = screen.getByTestId("FileButtonDisable")
    fireEvent.click(buttonDisable)
    expect(onClickMock).toHaveBeenCalledTimes(0)
  })
})
