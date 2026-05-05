import { burger } from "@lucide/lab"
import { a11y, render } from "#test"
import { GhostIcon } from "./icons"
import { LucideIcon } from "./lucide-icon"

describe("Lucide icon", () => {
  test("passes a11y checks", async () => {
    await a11y(<GhostIcon />)
  })
})

describe("<LucideIcon />", () => {
  test("renders Icon correctly", () => {
    render(<LucideIcon iconNode={burger} />)
  })
})
