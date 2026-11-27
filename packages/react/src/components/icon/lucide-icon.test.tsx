import { burger } from "@lucide/lab"
import { a11y, render } from "#test"
import { GhostIcon } from "./icons"
import * as icons from "./icons"
import { LucideIcon } from "./lucide-icon"

describe("Lucide icon", () => {
  test("passes a11y checks", async () => {
    await a11y(<GhostIcon />)
  })

  test("renders icon correctly", () => {
    const { container } = render(<GhostIcon />)

    expect(container.firstChild).toBeInTheDocument()
  })

  test.each<[keyof typeof icons, keyof typeof icons]>([
    ["BadgeAlertIcon", "BadgeExclamationPointIcon"],
    ["BatteryWarningIcon", "BatteryExclamationPointIcon"],
    ["BookAlertIcon", "BookExclamationPointIcon"],
    ["CircleAlertIcon", "CircleExclamationPointIcon"],
    ["ClockAlertIcon", "ClockExclamationPointIcon"],
    ["CloudAlertIcon", "CloudExclamationPointIcon"],
    ["MailWarningIcon", "MailExclamationPointIcon"],
    ["MessageCircleWarningIcon", "MessageCircleExclamationPointIcon"],
    ["MessageSquareWarningIcon", "MessageSquareExclamationPointIcon"],
    ["OctagonAlertIcon", "OctagonExclamationPointIcon"],
    ["SearchAlertIcon", "SearchExclamationPointIcon"],
    ["ShieldAlertIcon", "ShieldExclamationPointIcon"],
    ["TriangleAlertIcon", "TriangleExclamationPointIcon"],
  ])("preserves %s as an alias for %s", (previousName, currentName) => {
    const PreviousIcon = icons[previousName]
    const CurrentIcon = icons[currentName]
    const { container } = render(
      <>
        <PreviousIcon />
        <CurrentIcon />
      </>,
    )
    const [previousIcon, currentIcon] = container.querySelectorAll("svg")

    expect(previousIcon).toBeInTheDocument()
    expect(currentIcon).toBeInTheDocument()
    expect(previousIcon?.innerHTML).toBe(currentIcon?.innerHTML)
  })
})

describe("<LucideIcon />", () => {
  test("renders Icon correctly", () => {
    const { container } = render(<LucideIcon iconNode={burger} />)

    expect(container.firstChild).toHaveClass("ui-icon")
    expect(container.firstChild?.nodeName).toBe("svg")
  })
})
