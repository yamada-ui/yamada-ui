import { a11y, render, screen } from "@yamada-ui/test"
import { Badge } from "../src"

describe("<Badge />", () => {
  test("renders badge correctly", () => {
    render(<Badge>Badge</Badge>)
    expect(screen.getByText("Badge")).toBeInTheDocument()
  })

  test("passes a11y test", async () => {
    await a11y(<Badge>Badge</Badge>)
  })
})
