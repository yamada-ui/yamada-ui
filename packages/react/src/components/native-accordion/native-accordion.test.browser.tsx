import { page, render } from "#test/browser"
import { BoxIcon } from "../icon"
import { NativeAccordion } from "./"

const items = [
  {
    button: "Accordion Label 1",
    children: "This is an accordion item 1",
  },
  {
    button: "Accordion Label 2",
    children: "This is an accordion item 2",
  },
  {
    button: "Accordion Label 3",
    children: "This is an accordion item 3",
  },
]

describe("<NativeAccordion />", () => {
  test("toggles with native details behavior", async () => {
    const { user } = await render(<NativeAccordion.Root items={items} />)

    const button = page.getByText(/Accordion Label 1/i).element()
    const item = button.closest("details")

    await user.click(button)
    expect(item).toHaveAttribute("open")

    await user.click(button)
    expect(item).not.toHaveAttribute("open")
  })

  test("can open multiple items when `multiple` is true", async () => {
    const { user } = await render(
      <NativeAccordion.Root items={items} multiple />,
    )

    const button1 = page.getByText(/Accordion Label 1/i).element()
    const button2 = page.getByText(/Accordion Label 2/i).element()
    const item1 = button1.closest("details")
    const item2 = button2.closest("details")

    await user.click(button1)
    await user.click(button2)

    expect(item1).toHaveAttribute("open")
    expect(item2).toHaveAttribute("open")
  })

  test("keeps only one item open by default", async () => {
    const { user } = await render(<NativeAccordion.Root items={items} />)

    const button1 = page.getByText(/Accordion Label 1/i).element()
    const button2 = page.getByText(/Accordion Label 2/i).element()
    const item1 = button1.closest("details")
    const item2 = button2.closest("details")

    await user.click(button1)
    expect(item1).toHaveAttribute("open")

    await user.click(button2)
    expect(item1).not.toHaveAttribute("open")
    expect(item2).toHaveAttribute("open")
  })

  test("renders a disabled item", async () => {
    const { user } = await render(
      <NativeAccordion.Root>
        <NativeAccordion.Item button="Accordion Label" disabled>
          This is an accordion item
        </NativeAccordion.Item>
      </NativeAccordion.Root>,
    )

    const button = page.getByText(/Accordion Label/i).element()
    const item = button.closest("details")

    await user.click(button)
    expect(item).not.toHaveAttribute("open")
  })

  test("renders item with custom icon", async () => {
    const { user } = await render(
      <NativeAccordion.Root
        icon={<BoxIcon data-icon="custom" data-testid="custom-icon" />}
      >
        <NativeAccordion.Item button="Accordion Label">
          This is an accordion item
        </NativeAccordion.Item>
      </NativeAccordion.Root>,
    )

    await expect
      .element(page.getByTestId("custom-icon"))
      .toHaveAttribute("data-icon", "custom")

    await user.click(page.getByText(/Accordion Label/i).element())
    await expect.element(page.getByTestId("custom-icon")).toBeInTheDocument()
  })
})
