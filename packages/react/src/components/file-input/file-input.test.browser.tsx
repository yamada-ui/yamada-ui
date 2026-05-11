import { page, render } from "#test/browser"
import { FileInput } from "./"

describe("<FileInput />", () => {
  test("clicks the inner input when the wrapper is clicked", async () => {
    const { user } = await render(<FileInput data-testid="fileInput" />)

    const input = document.querySelector(
      'input[type="file"]',
    ) as HTMLInputElement
    const fn = vi.fn()

    input.addEventListener("click", fn)
    await user.click(page.getByTestId("fileInput"))

    expect(fn).toHaveBeenCalledTimes(1)
  })
})
