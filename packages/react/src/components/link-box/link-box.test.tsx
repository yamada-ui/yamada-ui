import type { FC } from "react"
import { LinkBox } from "."
import { a11y, render, screen } from "../../../test"
import { Heading } from "../heading"
import { Text } from "../text"

const Component: FC = () => {
  return (
    <LinkBox.Root data-testid="linkBox">
      <Heading>
        <LinkBox.Overlay
          href="https://yamada-ui.com"
          data-testid="linkBoxOverlay"
          external
        >
          Link Box
        </LinkBox.Overlay>
      </Heading>

      <Text>Description</Text>
    </LinkBox.Root>
  )
}

describe("<LinkBox />", () => {
  test("passes a11y test", async () => {
    await a11y(<Component />)
  })

  test("sets `displayName` and `__ui__` correctly", () => {
    expect(LinkBox.Root.displayName).toBe("LinkBoxRoot")
    expect(LinkBox.Root.__ui__).toBe("LinkBoxRoot")
    expect(LinkBox.Overlay.displayName).toBe("LinkBoxOverlay")
    expect(LinkBox.Overlay.__ui__).toBe("LinkBoxOverlay")
  })

  test("sets `className` correctly", () => {
    render(<Component />)
    expect(screen.getByTestId("linkBox")).toHaveClass("ui-link-box__root")
    expect(screen.getByTestId("linkBoxOverlay")).toHaveClass(
      "ui-link-box__overlay",
    )
  })

  test("renders HTML tag correctly", () => {
    render(<Component />)
    expect(screen.getByTestId("linkBox").tagName).toBe("DIV")
    expect(screen.getByTestId("linkBoxOverlay").tagName).toBe("A")
  })

  test("opens link in a new tab when external is true", () => {
    render(<Component />)
    const link = screen.getByRole("link")
    expect(link).toHaveAttribute("target", "_blank")
    expect(link).toHaveAttribute("rel", "noopener")
  })
})
