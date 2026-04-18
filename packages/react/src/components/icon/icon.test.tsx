import { a11y, render } from "#test/browser"
import { FaMarkdown } from "react-icons/fa"
import { Icon } from "./icon"

describe("<Icon />", () => {
  test("renders component correctly", async () => {
    await a11y(<Icon />)
  })

  test("renders component correctly given a third-party icon", async () => {
    await a11y(<Icon as={FaMarkdown} />)
  })

  test("sets `displayName` correctly", () => {
    expect(Icon.displayName).toBe("Icon")
  })

  test("sets `className` correctly", async () => {
    const { container } = await render(<Icon />)

    expect(container.firstChild).toHaveClass("ui-icon")
  })

  test("renders HTML tag correctly", async () => {
    const { container } = await render(<Icon />)

    expect(container.firstChild?.nodeName).toBe("svg")
  })
})
