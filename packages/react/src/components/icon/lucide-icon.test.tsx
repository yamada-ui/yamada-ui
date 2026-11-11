import { burger } from "@lucide/lab"
import { a11y, render } from "#test"
import { GhostIcon } from "./icons"
import { LucideIcon } from "./lucide-icon"

describe("Lucide icon", () => {
  test("passes a11y checks", async () => {
    await a11y(<GhostIcon />)
  })

  test("renders icon correctly", () => {
    const { container } = render(<GhostIcon />)

    expect(container.firstChild).toBeInTheDocument()
  })
})

describe("<LucideIcon />", () => {
  test("renders Icon correctly", () => {
    const { container } = render(<LucideIcon iconNode={burger} />)

    expect(container.firstChild).toHaveClass("ui-icon")
    expect(container.firstChild?.nodeName).toBe("svg")
  })
})
