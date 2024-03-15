import { Icon } from "@yamada-ui/icon"
import { a11y, render } from "@yamada-ui/test"
import { FaBold } from "react-icons/fa"
import { Toggle } from "../src"

describe("<Toggle />", () => {
  test("Toggle renders correctly", async () => {
    const { container } = render(
      <Toggle icon={<Icon as={FaBold} />} aria-label="Toggle bold" />,
    )
    await a11y(container)
  })
})
