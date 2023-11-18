import { CheckIcon } from "@yamada-ui/icon"
import { render } from "@yamada-ui/test"
import React from "react"
import { Tag } from "../src"

describe("<Tag />", () => {
  test("renders tag correctly", () => {
    render(<Tag>Tag</Tag>)
  })

  test("Tag with icon renders correctly", () => {
    const { getByTestId } = render(
      <Tag leftIcon={<CheckIcon data-testid="icon" />}>Tag</Tag>,
    )

    expect(getByTestId("icon")).toBeInTheDocument()
  })

  test("Tag with close button renders correctly", async () => {
    const { getByTestId } = render(
      <Tag data-testid="tag" onClose={() => {}}>
        Tag
      </Tag>,
    )

    expect(getByTestId("tag").lastChild).toBeInTheDocument()

    expect(getByTestId("tag").lastChild).toHaveAttribute("aria-label")
  })
})
