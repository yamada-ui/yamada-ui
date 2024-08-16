import { render, screen, waitFor, type RenderReturn } from "@yamada-ui/test"
import { Select, Option } from "../src"

describe("<SelectList />", () => {
  let user: RenderReturn["user"]

  beforeEach(() => {
    const renderResult = render(
      <Select>
        <Option value="one">One</Option>
        <Option value="two">Two</Option>
      </Select>,
    )
    user = renderResult.user
  })

  describe("rendered correctly", () => {
    test("Initially, SelectList should be hidden.", async () => {
      waitFor(async () => {
        const ul = await screen.findByRole("listbox")
        expect(ul).toHaveStyle({ visibility: "hidden" })
      })
    })

    test("When Select is clicked, SelectList should be visible.", async () => {
      const input = await waitFor(() => screen.findByRole("combobox"))
      expect(input).toBeInTheDocument()

      await user.click(input)

      await waitFor(async () => {
        const ul = await screen.findByRole("listbox")
        expect(ul).toHaveStyle({ visibility: "visible" })
      })
    })
  })
})
