import type { IconProps } from "@yamada-ui/icon"
import type { FC } from "react"
import type { IconNames } from "../src"
import { burger } from "@lucide/lab"
import { render } from "@yamada-ui/test"
import { Ghost, Icon, icons } from "../src"

describe("Lucide icon", () => {
  test("renders icon correctly", () => {
    render(<Ghost />)
  })

  test("renders icons correctly", () => {
    const Icon: FC<{ name: IconNames } & IconProps> = ({ name, ...rest }) => {
      const Icon = icons[name]

      return <Icon {...rest} />
    }

    render(<Icon name="Ghost" />)
  })
})

describe("<Icon />", () => {
  test("renders Icon correctly", () => {
    render(<Icon icon={burger} />)
  })
})
