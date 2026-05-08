import type { FC } from "react"
import { a11y, render, screen } from "#test"
import { LinkBox } from "."
import { Heading } from "../heading"
import { Text } from "../text"

const Component: FC<{ external?: boolean }> = ({ external }) => {
  return (
    <LinkBox.Root data-testid="linkBox">
      <Heading>
        <LinkBox.Overlay
          href="https://yamada-ui.com"
          data-testid="linkBoxOverlay"
          external={external}
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

  test("opens link in a new tab when external is true", () => {
    render(<Component external />)

    const link = screen.getByRole("link")

    expect(link).toHaveAttribute("target", "_blank")
    expect(link).toHaveAttribute("rel", "noopener")
  })
})
