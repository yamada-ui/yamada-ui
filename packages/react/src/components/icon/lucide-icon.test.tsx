import type { FC } from "react"
import type { IconProps } from "./icon"
import type { IconNames } from "./icons"
import { burger } from "@lucide/lab"
import { a11y, render } from "#test"
import { icons } from "./"
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

  test("renders icons correctly", () => {
    const Icon: FC<IconProps & { name: IconNames }> = ({ name, ...rest }) => {
      const Icon = icons[name]

      return <Icon {...rest} />
    }

    const { container } = render(<Icon name="GhostIcon" />)

    expect(container.firstChild).toHaveClass("ui-icon")
  })
})

describe("<LucideIcon />", () => {
  test("renders Icon correctly", () => {
    const { container } = render(<LucideIcon iconNode={burger} />)

    expect(container.firstChild).toHaveClass("ui-icon")
    expect(container.firstChild?.nodeName).toBe("svg")
  })
})
