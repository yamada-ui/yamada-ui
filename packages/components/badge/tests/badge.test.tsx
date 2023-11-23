import { render, a11y } from "@yamada-ui/test"
import { Badge } from "../src"

describe("<Badge />", () => {
  test("renders badge correctly", () => {
    render(<Badge>Badge</Badge>)
  })

  test("passes a11y test", async () => {
    await a11y(<Badge>Badge</Badge>)
  })
})
