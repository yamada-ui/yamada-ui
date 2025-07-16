import type { FC } from "react"
import type { IconProps } from "./icon"
import type { IconNames } from "./icons"
import { a11y, render } from "#test"
import { burger } from "@lucide/lab"
import { icons } from "./"
import { GhostIcon } from "./icons"
import { LucideIcon } from "./lucide-icon"

describe("Lucide icon", () => {
  test("passes a11y test", async () => {
    await a11y(<GhostIcon />)
  })

  test("sets `displayName` correctly", () => {
    expect(GhostIcon.displayName).toBe("Icon")
  })

  test("sets `className` correctly", () => {
    const { container } = render(<GhostIcon />)
    expect(container.firstChild).toHaveClass("ui-icon")
  })

  test("renders HTML tag correctly", () => {
    const { container } = render(<GhostIcon />)
    expect(container.firstChild?.nodeName).toBe("svg")
  })

  test("renders icon correctly", () => {
    render(<GhostIcon />)
  })

  test("renders icons correctly", () => {
    const Icon: FC<IconProps & { name: IconNames }> = ({ name, ...rest }) => {
      const Icon = icons[name]

      return <Icon {...rest} />
    }

    render(<Icon name="GhostIcon" />)
  })
})

describe("<LucideIcon />", () => {
  test("renders Icon correctly", () => {
    render(<LucideIcon iconNode={burger} />)
  })
})
