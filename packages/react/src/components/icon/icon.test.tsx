import { FaMarkdown } from "react-icons/fa"
import { a11y, render } from "@/test"
import { Icon } from "./icon"

describe("<Icon />", () => {
  test("passes a11y test", async () => {
    await a11y(<Icon />)
  })

  test("passes a11y test given a third-party icon", async () => {
    await a11y(<Icon as={FaMarkdown} />)
  })

  test("sets `displayName` correctly", () => {
    expect(Icon.displayName).toBe("Icon")
  })

  test("sets `className` correctly", () => {
    const { container } = render(<Icon />)
    expect(container.firstChild).toHaveClass("ui-icon")
  })

  test("renders HTML tag correctly", () => {
    const { container } = render(<Icon />)
    expect(container.firstChild?.nodeName).toBe("svg")
  })
})
