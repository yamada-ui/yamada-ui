import { render, screen } from "@yamada-ui/test"
import { VisuallyHidden } from "../src"

describe("<VisuallyHidden />", () => {
  test("VisuallyHidden renders correctly", () => {
    render(<VisuallyHidden>Test</VisuallyHidden>)
    const el = screen.getByText("Test")
    expect(el.textContent).toBe("Test")
  })

  test("VisuallyHidden is visually hidden", () => {
    render(<VisuallyHidden>Test</VisuallyHidden>)
    const style = window.getComputedStyle(screen.getByText("Test"))
    expect(style.clipPath).toBe("rect(0px 0px 0px 0px)")
    expect(style.border).toBe("0px")
    expect(style.height).toBe("1px")
    expect(style.width).toBe("1px")
    expect(style.margin).toBe("-1px")
    expect(style.padding).toBe("0px")
    expect(style.overflow).toBe("hidden")
    expect(style.whiteSpace).toBe("nowrap")
    expect(style.position).toBe("absolute")
  })
})
