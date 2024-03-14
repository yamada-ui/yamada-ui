import { a11y } from "@yamada-ui/test"
import { Md3DRotation } from "react-icons/md"
import { Icon } from "../src"

describe("<Icon/>", () => {
  test("passes a11y test", async () => {
    await a11y(<Icon />)
  })

  test("passes a11y test given a third-party icon", async () => {
    await a11y(<Icon as={Md3DRotation} />)
  })
})
