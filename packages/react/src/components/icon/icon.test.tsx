import { a11y } from "#test"
import { FaMarkdown } from "react-icons/fa"
import { Icon } from "./icon"

describe("<Icon />", () => {
  test("passes a11y checks", async () => {
    await a11y(<Icon />)
  })

  test("passes a11y checks given a third-party icon", async () => {
    await a11y(<Icon as={FaMarkdown} />)
  })
})
