import { a11y, render, screen } from "@yamada-ui/test"
import { Select, Option, MultiSelect } from "../src"

describe("<MultiSelect />", () => {
  describe("rendered correctly", () => {
    test("should pass a11y test", async () => {
      await a11y(
        <MultiSelect>
          <Option value="one">One</Option>
          <Option value="two">Two</Option>
        </MultiSelect>,
      )
    })

    test("MultiSelect renders correctly", async () => {
      const { user } = render(
        <MultiSelect>
          <Option value="one">One</Option>
          <Option value="two">Two</Option>
        </MultiSelect>,
      )

      const input = await screen.findByRole("combobox")
      expect(input).toBeInTheDocument()

      await user.click(input)

      const firstOption = await screen.findByRole("option", { name: /one/i })
      const secondOption = await screen.findByRole("option", { name: /two/i })
      expect(firstOption).toBeVisible()
      expect(secondOption).toBeVisible()
    })

    test("when items passed to props, renders correctly", async () => {
      const { user } = render(
        <MultiSelect
          items={[
            { label: "One", value: "one" },
            { label: "Two", value: "two" },
          ]}
        />,
      )

      const input = await screen.findByRole("combobox")
      expect(input).toBeInTheDocument()

      await user.click(input)

      const firstOption = await screen.findByRole("option", { name: /one/i })
      const secondOption = await screen.findByRole("option", { name: /two/i })
      expect(firstOption).toBeVisible()
      expect(secondOption).toBeVisible()
    })

    test("when nested items passed to props, renders correctly", async () => {
      const { user } = render(
        <MultiSelect
          items={[
            {
              label: "Numbers",
              items: [{ label: "One", value: "one" }],
            },
            {
              label: "Two",
              value: "two",
            },
          ]}
        />,
      )

      const input = await screen.findByRole("combobox")
      expect(input).toBeInTheDocument()

      await user.click(input)

      const select = await screen.findByRole("listbox")
      expect(select).toBeInTheDocument()
      expect(select).toHaveTextContent(/numbers/i)
      expect(select).toHaveTextContent(/one/i)
    })

    test("when items clicked twice, renders correctly", async () => {
      const { user } = render(
        <MultiSelect>
          <Option value="one">One</Option>
          <Option value="two">Two</Option>
          <Option value="three">Three</Option>
        </MultiSelect>,
      )

      const input = await screen.findByRole("combobox")

      await user.click(input)

      const option1 = await screen.findByRole("option", { name: /one/i })
      await user.click(option1)

      const option2 = await screen.findByRole("option", { name: /two/i })
      await user.click(option2)

      expect(option1).toBeVisible()
      expect(option2).toBeVisible()
    })

    test("empty items, render correctly", async () => {
      render(<MultiSelect />)

      const input = await screen.findByRole("combobox")
      expect(input).toBeInTheDocument()

      const span = input.querySelector("span")
      expect(span).toBeInTheDocument()
      expect(span).toHaveTextContent("")

      expect(input).not.toHaveAttribute("placeholder")

      const options = screen.queryAllByRole("option")
      expect(options).toHaveLength(0)
    })
  })

  describe("click event", () => {
    const ITEMS = [
      {
        label: "option1",
        value: "option1",
      },
      {
        label: "option2",
        value: "option2",
      },
      {
        label: "option3",
        value: "option3",
      },
    ]

    test("click option should work correctly", async () => {
      const { user } = render(<Select items={ITEMS} />)

      const input = await screen.findByRole("combobox")
      expect(input).toBeInTheDocument()

      await user.click(input)

      const option1 = await screen.findByRole("option", { name: /option1/i })
      expect(option1).toBeVisible()

      await user.click(option1)
      expect(input).toHaveTextContent(/option1/i)
    })
  })

  describe("keyDown event", () => {
    test("arrowDown should work correctly when omitSelectedValues is set", async () => {
      const items = [
        {
          label: "option1",
          value: "option1",
        },
        {
          label: "option2",
          value: "option2",
        },
        {
          label: "option3",
          value: "option3",
        },
      ]

      const { user } = render(<MultiSelect omitSelectedValues items={items} />)

      const input = await screen.findByRole("combobox")
      expect(input).toBeInTheDocument()

      await user.click(input)
      await user.keyboard("{Escape>}{ArrowDown>}")

      const options = await screen.findAllByRole("option")

      expect(options[0]).toHaveAttribute("data-focus")

      for (let i = 1; i < items.length; i++) {
        await user.keyboard("{ArrowDown>}")

        expect(options[i]).toHaveAttribute("data-focus")
      }

      await user.keyboard("{ArrowDown>}")
      expect(options[0]).toHaveAttribute("data-focus")
    })

    test("arrowDown should work correctly when defaultValue and omitSelectedValues is set", async () => {
      const items = [
        {
          label: "option1",
          value: "option1",
        },
        {
          label: "option2",
          value: "option2",
        },
        {
          label: "option3",
          value: "option3",
        },
      ]

      const { user } = render(
        <MultiSelect
          omitSelectedValues
          items={items}
          defaultValue={[items[1].label]}
        />,
      )

      const input = await screen.findByRole("combobox")
      expect(input).toBeInTheDocument()

      await user.click(input)
      await user.keyboard("{Escape>}{ArrowDown>}")

      const options = await screen.findAllByRole("option")
      expect(options[0]).toHaveAttribute("data-focus")

      await user.keyboard("{ArrowDown>}")
      expect(options[2]).toHaveAttribute("data-focus")

      await user.keyboard("{ArrowDown>}")
      expect(options[0]).toHaveAttribute("data-focus")
    })

    test("arrowUp should work correctly when omitSelectedValues is set", async () => {
      const items = [
        {
          label: "option1",
          value: "option1",
        },
        {
          label: "option2",
          value: "option2",
        },
        {
          label: "option3",
          value: "option3",
        },
      ]

      const { user } = render(<MultiSelect omitSelectedValues items={items} />)

      const input = await screen.findByRole("combobox")
      expect(input).toBeInTheDocument()

      await user.click(input)
      await user.keyboard("{Escape>}{ArrowUp>}")

      const options = await screen.findAllByRole("option")

      expect(options[items.length - 1]).toHaveAttribute("data-focus")

      for (let i = items.length - 2; i >= 0; i--) {
        await user.keyboard("{ArrowUp>}")

        expect(options[i]).toHaveAttribute("data-focus")
      }

      await user.keyboard("{ArrowUp>}")
      expect(options[items.length - 1]).toHaveAttribute("data-focus")
    })

    test("arrowUp should work correctly when defaultValue and omitSelectedValues is set", async () => {
      const items = [
        {
          label: "option1",
          value: "option1",
        },
        {
          label: "option2",
          value: "option2",
        },
        {
          label: "option3",
          value: "option3",
        },
      ]

      const { user } = render(
        <MultiSelect
          omitSelectedValues
          items={items}
          defaultValue={[items[1].label]}
        />,
      )

      const input = await screen.findByRole("combobox")
      expect(input).toBeInTheDocument()

      await user.click(input)
      await user.keyboard("{Escape>}{ArrowUp>}")

      const options = await screen.findAllByRole("option")
      expect(options[2]).toHaveAttribute("data-focus")

      await user.keyboard("{ArrowUp>}")
      expect(options[0]).toHaveAttribute("data-focus")

      await user.keyboard("{ArrowUp>}")
      expect(options[2]).toHaveAttribute("data-focus")
    })

    test("home should work correctly when the topmost option is excluded", async () => {
      const items = [
        {
          label: "option1",
          value: "option1",
        },
        {
          label: "option2",
          value: "option2",
        },
        {
          label: "option3",
          value: "option3",
        },
      ]

      const { user } = render(
        <MultiSelect
          omitSelectedValues
          items={items}
          defaultValue={[items[0].label]}
        />,
      )

      const input = await screen.findByRole("combobox")
      expect(input).toBeInTheDocument()

      await user.click(input)
      await user.keyboard("{Escape>}{ArrowUp>}")

      const options = await screen.findAllByRole("option")
      expect(options[items.length - 1]).toHaveAttribute("data-focus")

      await user.keyboard("{Home>}")
      expect(options[1]).toHaveAttribute("data-focus")
    })

    test("end should work correctly when the lowest option is excluded", async () => {
      const items = [
        {
          label: "option1",
          value: "option1",
        },
        {
          label: "option2",
          value: "option2",
        },
        {
          label: "option3",
          value: "option3",
        },
      ]

      const { user } = render(
        <MultiSelect
          omitSelectedValues
          items={items}
          defaultValue={["option3"]}
        />,
      )

      const input = await screen.findByRole("combobox")
      expect(input).toBeInTheDocument()

      await user.click(input)
      await user.keyboard("{Escape>}{ArrowDown>}")

      const options = await screen.findAllByRole("option")
      expect(options[0]).toHaveAttribute("data-focus")

      await user.keyboard("{End>}")
      expect(options[1]).toHaveAttribute("data-focus")
    })
  })
})
