import { page, render } from "#test/browser"
import { InputPropsContext } from "../input"
import { FileInput } from "./"

const getInput = (): HTMLInputElement => {
  const input = document.querySelector('input[type="file"]')
  if (!(input instanceof HTMLInputElement))
    throw new TypeError("Expected an HTMLInputElement")
  return input
}

describe("<FileInput />", () => {
  test("clicks the inner input when the wrapper is clicked", async () => {
    const { user } = await render(<FileInput data-testid="fileInput" />)

    const input = getInput()
    const fn = vi.fn()

    input.addEventListener("click", fn)
    await user.click(page.getByTestId("fileInput"))

    expect(fn).toHaveBeenCalledTimes(1)
  })

  test("merges context and user props without overwriting className, style, and event handlers", async () => {
    const onContextClick = vi.fn()
    const onUserClick = vi.fn()

    const { user } = await render(
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

    await user.click(el)

    expect(onContextClick).toHaveBeenCalledTimes(1)
    expect(onUserClick).toHaveBeenCalledTimes(1)
  })
})
