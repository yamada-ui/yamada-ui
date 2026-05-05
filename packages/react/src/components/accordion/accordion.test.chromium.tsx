import { page, render } from "#test/browser"
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
  test("focus moves correctly on ArrowDown", async () => {
    const { user } = await render(<Accordion.Root items={items} />)

    const item1 = page.getByRole("button", { name: /Accordion Label 1/i })
    const item2 = page.getByRole("button", { name: /Accordion Label 2/i })
    const item3 = page.getByRole("button", { name: /Accordion Label 3/i })

    await user.click(item1)
    await expect.element(item1).toHaveFocus()

    await user.keyboard("{ArrowDown>}")
    await expect.element(item2).toHaveFocus()

    await user.keyboard("{ArrowDown>}")
    await expect.element(item3).toHaveFocus()

    await user.keyboard("{ArrowDown>}")
    await expect.element(item1).toHaveFocus()
  })

  test("focus moves correctly on ArrowUp", async () => {
    const { user } = await render(<Accordion.Root items={items} />)

    const item1 = page.getByRole("button", { name: /Accordion Label 1/i })
    const item2 = page.getByRole("button", { name: /Accordion Label 2/i })
    const item3 = page.getByRole("button", { name: /Accordion Label 3/i })

    await user.click(item1)
    await expect.element(item1).toHaveFocus()

    await user.keyboard("{ArrowUp>}")
    await expect.element(item3).toHaveFocus()

    await user.keyboard("{ArrowUp>}")
    await expect.element(item2).toHaveFocus()
  })

  test("focus moves correctly on Home", async () => {
    const { user } = await render(<Accordion.Root items={items} />)

    const item1 = page.getByRole("button", { name: /Accordion Label 1/i })
    const item3 = page.getByRole("button", { name: /Accordion Label 3/i })

    await user.click(item3)
    await expect.element(item3).toHaveFocus()

    await user.keyboard("{Home>}")
    await expect.element(item1).toHaveFocus()
  })

  test("focus moves correctly on End", async () => {
    const { user } = await render(<Accordion.Root items={items} />)

    const item1 = page.getByRole("button", { name: /Accordion Label 1/i })
    const item3 = page.getByRole("button", { name: /Accordion Label 3/i })

    await user.click(item1)
    await expect.element(item1).toHaveFocus()

    await user.keyboard("{End>}")
    await expect.element(item3).toHaveFocus()
  })
})
