import { faPoo } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@yamada-ui/fontawesome"
import { a11y } from "@yamada-ui/test"

describe("<FontAwesomeIcon />", () => {
  test("Font Awesome icon renders correctly.", async () => {
    await a11y(<FontAwesomeIcon icon={faPoo} />)
  })
})
