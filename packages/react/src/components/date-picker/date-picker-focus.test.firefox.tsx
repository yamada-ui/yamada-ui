import { page, render } from "#test/browser"
import { DatePicker } from "."

describe("Firefox page focus isolation", () => {
  test.each(Array.from({ length: 30 }, (_, index) => index))(
    "preserves the input until Enter %i",
    async () => {
      const events: unknown[][] = []
      const record = (event: Event) => {
        events.push([
          performance.now(),
          event.type,
          document.hasFocus(),
          event.target instanceof HTMLElement
            ? event.target.outerHTML.slice(0, 180)
            : null,
          document.activeElement?.outerHTML.slice(0, 180),
          event instanceof FocusEvent &&
          event.relatedTarget instanceof HTMLElement
            ? event.relatedTarget.outerHTML.slice(0, 180)
            : null,
          page.getByRole("textbox").query()?.getAttribute("value"),
        ])
      }
      const types = ["focusin", "focusout", "input", "change", "keydown"]

      types.forEach((type) => document.addEventListener(type, record, true))

      try {
        const { user } = await render(
          <DatePicker defaultOpen placeholder="Select date" />,
        )
        const input = page.getByRole("textbox").first()

        await user.click(input)
        await user.fill(input, "2024-01-15")
        await expect.element(input).toHaveValue("2024-01-15")
        await user.keyboard("{Enter}")
        await expect.element(input).toHaveValue("January 15, 2024")
      } catch (error) {
        throw new Error(JSON.stringify(events), { cause: error })
      } finally {
        types.forEach((type) =>
          document.removeEventListener(type, record, true),
        )
      }
    },
  )
})
