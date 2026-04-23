import type { FC } from "react"
import { a11y, page, render } from "#test/browser"
import { LinkBox } from "."
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
  test("renders component correctly", async () => {
    await a11y(<Component />)
  })

  test("sets `displayName` correctly", () => {
    expect(LinkBox.Root.displayName).toBe("LinkBoxRoot")
    expect(LinkBox.Overlay.displayName).toBe("LinkBoxOverlay")
  })

  test("sets `className` correctly", async () => {
    await render(<Component />)

    await expect
      .element(page.getByTestId("linkBox"))
      .toHaveClass("ui-link-box__root")
    await expect
      .element(page.getByTestId("linkBoxOverlay"))
      .toHaveClass("ui-link-box__overlay")
  })

  test("renders HTML tag correctly", async () => {
    await render(<Component />)

    expect(page.getByTestId("linkBox").element().tagName).toBe("DIV")
    expect(page.getByTestId("linkBoxOverlay").element().tagName).toBe("A")
  })

  test("opens link in a new tab when external is true", async () => {
    await render(<Component />)

    const link = page.getByRole("link")

    await expect.element(link).toHaveAttribute("target", "_blank")
    await expect.element(link).toHaveAttribute("rel", "noopener")
  })
})
