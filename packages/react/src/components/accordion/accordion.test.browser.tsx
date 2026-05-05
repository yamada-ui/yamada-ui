import { a11y, page, render } from "#test/browser"
import { BoxIcon } from "../icon"
import { Accordion } from "./"

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

describe("<Accordion />", () => {
  async function setupKeyboardFocus() {
    const renderResult = await render(
      <Accordion.Root>
        <Accordion.Item index={0}>
          <Accordion.Button
            as="div"
            data-testid="keyboard-button-1"
            tabIndex={0}
          >
            Accordion Label 1
          </Accordion.Button>
          <Accordion.Panel>This is an accordion item 1</Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item index={1}>
          <Accordion.Button
            as="div"
            data-testid="keyboard-button-2"
            tabIndex={0}
          >
            Accordion Label 2
          </Accordion.Button>
          <Accordion.Panel>This is an accordion item 2</Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item index={2}>
          <Accordion.Button
            as="div"
            data-testid="keyboard-button-3"
            tabIndex={0}
          >
            Accordion Label 3
          </Accordion.Button>
          <Accordion.Panel>This is an accordion item 3</Accordion.Panel>
        </Accordion.Item>
      </Accordion.Root>,
    )

    const item1 = page.getByTestId("keyboard-button-1")
    const item2 = page.getByTestId("keyboard-button-2")
    const item3 = page.getByTestId("keyboard-button-3")

    await renderResult.user.click(item1)
    await expect.element(item1).toHaveFocus()

    return { item1, item2, item3, user: renderResult.user }
  }

  test("renders component correctly", async () => {
    await a11y(
      <Accordion.Root>
        <Accordion.Item button="Accordion Label" index={0}>
          This is an accordion item
        </Accordion.Item>
      </Accordion.Root>,
    )
  })

  test("should work correctly with toggle", async () => {
    const { user } = await render(<Accordion.Root items={items} toggle />)

    const button = page.getByRole("button", { name: /Accordion Label 1/i })

    await user.click(button)
    await expect.element(button).toHaveAttribute("aria-expanded", "true")

    await user.click(button)
    await expect.element(button).toHaveAttribute("aria-expanded", "false")
  })

  test("should show multiple items", async () => {
    const { user } = await render(
      <Accordion.Root defaultIndex={[0, 1]} items={items} multiple />,
    )

    const item1 = page.getByRole("button", { name: /Accordion Label 1/i })
    const item2 = page.getByRole("button", { name: /Accordion Label 2/i })
    const item3 = page.getByRole("button", { name: /Accordion Label 3/i })

    await expect.element(item1).toHaveAttribute("aria-expanded", "true")
    await expect.element(item2).toHaveAttribute("aria-expanded", "true")
    await expect.element(item3).toHaveAttribute("aria-expanded", "false")

    await user.click(item3)
    await expect.element(item3).toHaveAttribute("aria-expanded", "true")
  })

  test("should render item with custom icon", async () => {
    const { user } = await render(
      <Accordion.Root
        icon={({ expanded }) => (
          <BoxIcon
            data-icon={!expanded ? "plus" : "minus"}
            data-testid="custom-icon"
          />
        )}
      >
        <Accordion.Item button="Accordion Label" index={0}>
          This is an accordion item
        </Accordion.Item>
      </Accordion.Root>,
    )

    await expect
      .element(page.getByTestId("custom-icon"))
      .toHaveAttribute("data-icon", "plus")

    await user.click(page.getByRole("button", { name: /Accordion Label/i }))

    await expect
      .element(page.getByTestId("custom-icon"))
      .toHaveAttribute("data-icon", "minus")
  })

  test("should render item with custom icon in AccordionItem", async () => {
    const { user } = await render(
      <Accordion.Root>
        <Accordion.Item
          button="Accordion Label"
          icon={({ expanded }) => (
            <BoxIcon
              data-icon={!expanded ? "plus" : "minus"}
              data-testid="custom-icon"
            />
          )}
          index={0}
        >
          This is an accordion item
        </Accordion.Item>
      </Accordion.Root>,
    )

    await expect
      .element(page.getByTestId("custom-icon"))
      .toHaveAttribute("data-icon", "plus")

    await user.click(page.getByRole("button", { name: /Accordion Label/i }))

    await expect
      .element(page.getByTestId("custom-icon"))
      .toHaveAttribute("data-icon", "minus")
  })

  test("should render item with custom icon in AccordionButton", async () => {
    const { user } = await render(
      <Accordion.Root>
        <Accordion.Item index={0}>
          <Accordion.Button
            icon={({ expanded }) => (
              <BoxIcon
                data-icon={!expanded ? "plus" : "minus"}
                data-testid="custom-icon"
              />
            )}
          >
            Accordion Label
          </Accordion.Button>
          This is an accordion item
        </Accordion.Item>
      </Accordion.Root>,
    )

    await expect
      .element(page.getByTestId("custom-icon"))
      .toHaveAttribute("data-icon", "plus")

    await user.click(page.getByRole("button", { name: /Accordion Label/i }))

    await expect
      .element(page.getByTestId("custom-icon"))
      .toHaveAttribute("data-icon", "minus")
  })

  test("should render label with function label", async () => {
    const { user } = await render(
      <Accordion.Root>
        <Accordion.Item
          button={({ disabled, expanded }) => {
            if (disabled) return <p>Is disabled</p>

            if (expanded) return <p>Is expanded</p>
            else return <p>Not expanded</p>
          }}
          index={0}
        >
          This is an accordion item
        </Accordion.Item>
      </Accordion.Root>,
    )

    const button = page.getByRole("button", { name: /Not expanded/i })
    await expect.element(button).toBeVisible()

    await user.click(button)

    await expect
      .element(page.getByRole("button", { name: /Is expanded/i }))
      .toBeVisible()
  })

  test("focus moves correctly on ArrowDown", async () => {
    const { item1, item2, item3, user } = await setupKeyboardFocus()

    await user.keyboard("{ArrowDown>}")
    await expect.element(item2).toHaveFocus()

    await user.keyboard("{ArrowDown>}")
    await expect.element(item3).toHaveFocus()

    await user.keyboard("{ArrowDown>}")
    await expect.element(item1).toHaveFocus()
  })

  test("focus moves correctly on ArrowUp", async () => {
    const { item2, item3, user } = await setupKeyboardFocus()

    await user.keyboard("{ArrowUp>}")
    await expect.element(item3).toHaveFocus()

    await user.keyboard("{ArrowUp>}")
    await expect.element(item2).toHaveFocus()
  })

  test("focus moves correctly on Home", async () => {
    const { item1, item3, user } = await setupKeyboardFocus()

    await user.keyboard("{ArrowDown>}{ArrowDown>}")
    await expect.element(item3).toHaveFocus()

    await user.keyboard("{Home>}")
    await expect.element(item1).toHaveFocus()
  })

  test("focus moves correctly on End", async () => {
    const { item3, user } = await setupKeyboardFocus()

    await user.keyboard("{End>}")
    await expect.element(item3).toHaveFocus()
  })
})
