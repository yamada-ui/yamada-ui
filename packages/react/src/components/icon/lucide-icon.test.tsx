import type { FC } from "react"
import type { IconProps } from "./icon"
import type { IconNames } from "./icons"
import { a11y, render } from "#test/browser"
import { burger } from "@lucide/lab"
import { icons } from "./"
import { GhostIcon } from "./icons"
import { LucideIcon } from "./lucide-icon"

describe("Lucide icon", () => {
  test("renders component correctly", async () => {
    await a11y(<GhostIcon />)
  })

  test("sets `displayName` correctly", () => {
    expect(GhostIcon.displayName).toBe("Icon")
  })

  test("sets `className` correctly", async () => {
    const { container } = await render(<GhostIcon />)

    expect(container.firstChild).toHaveClass("ui-icon")
  })

  test("renders HTML tag correctly", async () => {
    const { container } = await render(<GhostIcon />)

    expect(container.firstChild?.nodeName).toBe("svg")
  })

  test("renders icon correctly", async () => {
    await render(<GhostIcon />)
  })

  test("renders icons correctly", async () => {
    const Icon: FC<IconProps & { name: IconNames }> = ({ name, ...rest }) => {
      const Icon = icons[name]

      return <Icon {...rest} />
    }

    await render(<Icon name="GhostIcon" />)
  })
})

describe("<LucideIcon />", () => {
  test("renders Icon correctly", async () => {
    await render(<LucideIcon iconNode={burger} />)
  })
})
