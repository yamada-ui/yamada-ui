import { render, screen, a11y } from "@yamada-ui/test"
import { Switch } from "../src"

describe("<Switch />", () => {
  test("Switch renders correctly", async () => {
    const { container } = render(
      <Switch aria-label="Switch value">basic</Switch>,
    )
    await a11y(container)
  })

  test("should render switch", async () => {
    const { user } = render(<Switch>basic</Switch>)

    const switchElement = await screen.findByRole("switch", { name: /basic/i })
    expect(switchElement).toHaveAttribute("aria-checked", "false")

    await user.click(switchElement)

    expect(switchElement).toBeChecked()
    expect(switchElement).toHaveAttribute("aria-checked", "true")
  })

  test("should be checked by default", async () => {
    render(<Switch defaultIsChecked>basic</Switch>)

    const switchElement = await screen.findByRole("switch", { name: /basic/i })

    expect(switchElement).toBeChecked()
    expect(switchElement).toHaveAttribute("aria-checked", "true")
  })

  test("When `Space` key (` `) pressed, the state should be changed.", async () => {
    const { user } = render(<Switch>basic</Switch>)

    const switchElement = await screen.findByRole("switch", { name: /basic/i })

    await user.tab()
    expect(switchElement).toHaveFocus()
    expect(switchElement).not.toBeChecked()
    expect(switchElement).toHaveAttribute("aria-checked", "false")

    await user.keyboard(" ")

    expect(switchElement).toBeChecked()
    expect(switchElement).toHaveAttribute("aria-checked", "true")
  })
})
