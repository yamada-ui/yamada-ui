import { a11y, render, screen } from "#test"
import { Tooltip } from "."
import { Text } from "../text"

describe("<Tooltip />", () => {
  test("renders component correctly", async () => {
    await a11y(
      <Tooltip content="Tooltip Hovered" open>
        <Text as="span">Trigger</Text>
      </Tooltip>,
    )
  })

  test("renders only children when content is not provided", () => {
    render(
      <Tooltip>
        <Text as="span">Trigger</Text>
      </Tooltip>,
    )

    expect(screen.getByText("Trigger")).toBeInTheDocument()
    expect(screen.queryByRole("tooltip")).not.toBeInTheDocument()
  })

  test("does not render tooltip content when closed", () => {
    render(
      <Tooltip content="Tooltip Hovered">
        <Text as="span">Trigger</Text>
      </Tooltip>,
    )

    expect(screen.queryByRole("tooltip")).not.toBeInTheDocument()
  })
})
