import type { FC } from "react"
import type { IconProps } from "./icon"
import type { IconNames } from "./icons"
import { burger } from "@lucide/lab"
import { render } from "../../../test"
import { icons } from "./"
import { GhostIcon } from "./icons"
import { LucideIcon } from "./lucide-icon"

describe("Lucide icon", () => {
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
