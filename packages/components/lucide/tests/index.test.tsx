import { burger } from "@lucide/lab"
import type { IconProps } from "@yamada-ui/icon"
import { render } from "@yamada-ui/test"
import type { FC } from "react"
import type { IconNames } from "../src"
import { Ghost, Icon, icons } from "../src"

describe("Lucide icon", () => {
  test("renders icon correctly", () => {
    render(<Ghost />)
  })

  test("renders icons correctly", () => {
    const Icon: FC<IconProps & { name: IconNames }> = ({ name, ...rest }) => {
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
