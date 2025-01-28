import { a11y, render, screen } from "../../../test"
import { BoxIcon } from "../icon"
import { Switch } from "./"

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

  test("The icon should render correctly.", () => {
    const { container } = render(<Switch icon={<BoxIcon />}>basic</Switch>)

    const icon = container.querySelector("svg")
    expect(icon).toBeInTheDocument()
  })

  test("checked and focused works correctly when using the icon prop.", async () => {
    const { user } = render(<Switch icon={<BoxIcon />}>basic</Switch>)

    const switchElement = await screen.findByRole("switch", { name: /basic/i })

    expect(switchElement).not.toHaveFocus()
    expect(switchElement).not.toBeChecked()
    expect(switchElement).toHaveAttribute("aria-checked", "false")

    await user.click(switchElement)

    expect(switchElement).toBeChecked()
    expect(switchElement).toHaveFocus()
    expect(switchElement).toHaveAttribute("aria-checked", "true")
  })
})
