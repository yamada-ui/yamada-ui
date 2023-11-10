import { a11y } from "@yamada-ui/test"
import React from "react"
import { Md3DRotation } from "react-icons/md"
import { Icon } from "../src"

describe("<Icon/>", () => {
  it("passes a11y test", async () => {
    await a11y(<Icon />)
  })

  it("passes a11y test given a third-party icon", async () => {
    await a11y(<Icon as={Md3DRotation} />)
  })
})
