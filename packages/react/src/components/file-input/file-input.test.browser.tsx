import { page, render } from "#test/browser"
import { FileInput } from "./"

describe("<FileInput />", () => {
  beforeEach(() => {
    vi.spyOn(HTMLInputElement.prototype, "click").mockImplementation(() => {})
  })

  afterAll(() => {
    vi.restoreAllMocks()
  })

  test("clicks the inner input when the wrapper is clicked", async () => {
    const { user } = await render(<FileInput data-testid="fileInput" />)

    await user.click(page.getByTestId("fileInput"))

    expect(HTMLInputElement.prototype.click).toHaveBeenCalledTimes(1)
  })
})
