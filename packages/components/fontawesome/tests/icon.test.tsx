import { faPoo } from "@fortawesome/free-solid-svg-icons"
import { Icon } from "@yamada-ui/fontawesome"
import { a11y } from "@yamada-ui/test"

describe("<Icon />", () => {
  test("Font Awesome icon renders correctly.", async () => {
    await a11y(<Icon icon={faPoo} />)
  })
})
