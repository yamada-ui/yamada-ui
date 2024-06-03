import { Link } from "@yamada-ui/react"
import { a11y, render, screen } from "@yamada-ui/test"
import { FileButton } from "../src"

describe("<FileButton/ >", () => {
  afterAll(() => {
    vi.restoreAllMocks()
  })

  test("FileButton renders correctly", async () => {
    const { container } = render(<FileButton>Upload</FileButton>)
    await a11y(container)
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
          <Link href="https://yamada-ui.com" onClick={onClick}>
            Upload
          </Link>
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
      <FileButton onClick={onClickMock} isReadOnly>
        Upload
      </FileButton>,
    )

    const fileButton = await screen.findByRole("button", { name: /Upload/i })
    await user.click(fileButton)
    expect(onClickMock).toHaveBeenCalledTimes(1)
  })

  test("should not call onClick", async () => {
    const onClickMock = vi.fn()

    const { user } = render(
      <FileButton onClick={onClickMock} isDisabled>
        Upload
      </FileButton>,
    )

    const fileButtton = await screen.findByRole("button", { name: /Upload/i })
    expect(fileButtton).toBeDisabled()

    await user.click(fileButtton)
    expect(onClickMock).toHaveBeenCalledTimes(0)
  })
})
