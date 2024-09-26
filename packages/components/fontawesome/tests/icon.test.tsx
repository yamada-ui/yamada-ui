import { faPoo } from "@fortawesome/free-solid-svg-icons"
import { a11y } from "@yamada-ui/test"
import { Icon } from "@yamada-ui/fontawesome"

describe("<Icon />", () => {
  test("Font Awesome icon renders correctly.", async () => {
    await a11y(<Icon icon={faPoo} />)
  })
})
