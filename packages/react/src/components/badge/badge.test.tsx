import { a11y, render, screen } from "../../../test"
import { Badge } from "./"

describe("<Badge />", () => {
  test("renders badge correctly", () => {
    render(<Badge>Badge</Badge>)
    expect(screen.getByText("Badge")).toBeInTheDocument()
  })

  test("passes a11y test", async () => {
    await a11y(<Badge>Badge</Badge>)
  })
})
