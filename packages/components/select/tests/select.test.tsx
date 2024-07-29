import { a11y, render, screen, waitFor } from "@yamada-ui/test"
import { Select, Option, OptionGroup, MultiSelect } from "../src"

describe("<Select />", () => {
  describe("rendered correctly", () => {
    test("Select renders correctly", async () => {
      await a11y(
        <Select>
          <Option value="one">One</Option>
          <Option value="two">Two</Option>
        </Select>,
      )
    })

    test("should render select", async () => {
      const { user } = render(
        <Select>
          <Option value="one">One</Option>
          <Option value="two">Two</Option>
        </Select>,
      )

      const input = await screen.findByRole("combobox")
      expect(input).toBeInTheDocument()
      expect(input).toHaveAccessibleName(/Select an option\./i)

      await user.click(input)

      const firstOption = await screen.findByRole("option", { name: /one/i })
      const secondOption = await screen.findByRole("option", { name: /two/i })

      expect(firstOption).toBeVisible()
      expect(secondOption).toBeVisible()
    })

    test("when items passed to props, renders correctly", async () => {
      const { user } = render(
        <Select
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
        <Select
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
      expect(select).toBeVisible()

      const firstOption = await screen.findByRole("option", { name: /one/i })
      const secondOption = await screen.findByRole("option", { name: /two/i })

      expect(firstOption).toBeVisible()
      expect(secondOption).toBeVisible()
    })

    test("should render select with option group", async () => {
      const { user } = render(
        <Select>
          <OptionGroup label="Numbers">
            <Option value="one">One</Option>
          </OptionGroup>
          <Option value="two">Two</Option>
        </Select>,
      )

      const input = await screen.findByRole("combobox")
      expect(input).toBeInTheDocument()
      expect(input).toHaveAccessibleName(/Select an option\./i)

      await user.click(input)

      const listbox = await screen.findByRole("listbox")
      expect(listbox).toBeVisible()

      const optionGroups = await screen.findAllByRole("group", {
        name: /Numbers/i,
      })
      expect(optionGroups[0]).toBeVisible()

      const firstOption = await screen.findByRole("option", { name: /one/i })
      expect(firstOption).toBeVisible()

      const secondOption = await screen.findByRole("option", { name: /two/i })
      expect(secondOption).toBeVisible()
    })

    test("should render select with placeholder", async () => {
      const { user } = render(
        <Select placeholder="Select numbers">
          <Option value="one">One</Option>
          <Option value="two">Two</Option>
        </Select>,
      )

      const input = await screen.findByRole("combobox", {
        name: /Select numbers/i,
      })
      expect(input).toBeInTheDocument()

      await user.click(input)

      const firstOption = await screen.findByRole("option", { name: /one/i })
      expect(firstOption).toBeVisible()
    })

    test("should render correctly with placeholder not included in options", async () => {
      const { user } = render(
        <Select placeholder="Select numbers" placeholderInOptions={false}>
          <Option value="one">One</Option>
          <Option value="two">Two</Option>
        </Select>,
      )

      const input = await screen.findByRole("combobox", {
        name: /Select numbers/,
      })
      expect(input).toBeInTheDocument()

      await user.click(input)

      const option = screen.queryByRole("option", { name: /select numbers/i })
      expect(option).toBeNull()
    })
  })

  describe("disabled and readonly", () => {
    test("should be disable", async () => {
      render(
        <Select isDisabled>
          <Option value="one">One</Option>
          <Option value="two">Two</Option>
        </Select>,
      )

      const input = await screen.findByRole("combobox")
      expect(input).toHaveAttribute("disabled")
      expect(input).toHaveAttribute("aria-disabled", "true")
    })

    test("should be readonly", async () => {
      render(
        <Select placeholder="Numbers" isReadOnly>
          <Option value="one">One</Option>
          <Option value="two">Two</Option>
        </Select>,
      )

      const input = await screen.findByRole("combobox")
      expect(input).toHaveAttribute("readonly")
      expect(input).toHaveAttribute("data-readonly")
    })

    test("should be disable option", async () => {
      const { user } = render(
        <Select>
          <Option value="one" isDisabled>
            One
          </Option>
          <Option value="two">Two</Option>
        </Select>,
      )

      const input = await screen.findByRole("combobox")
      expect(input).toBeInTheDocument()

      await user.click(input)

      const firstOption = await screen.findByRole("option", { name: /one/i })
      expect(firstOption).toBeVisible()
      expect(firstOption).toHaveAttribute("data-disabled")
      expect(firstOption).toHaveAttribute("aria-disabled", "true")
    })
  })

  describe("keyDown event", () => {
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

    test("arrowDown keyDown should work correctly", async () => {
      const { user } = render(<Select items={ITEMS} />)

      const input = await screen.findByRole("combobox")
      expect(input).toBeInTheDocument()

      await user.click(input)
      await user.keyboard("{Escape>}{ArrowDown>}")

      const options = await screen.findAllByRole("option")

      expect(options[0]).toHaveAttribute("data-focus")

      for (let i = 1; i < ITEMS.length; i++) {
        await user.keyboard("{ArrowDown>}")

        expect(options[i]).toHaveAttribute("data-focus")
      }

      await user.keyboard("{ArrowDown>}")
      expect(options[0]).toHaveAttribute("data-focus")
    })

    test("arrowDown keyDown should work correctly even when defaultValue is set", async () => {
      const { user } = render(<Select items={ITEMS} defaultValue="option2" />)

      const input = await screen.findByRole("combobox")
      expect(input).toBeInTheDocument()

      await user.click(input)
      await user.keyboard("{Escape>}{ArrowDown>}")

      const firstOption = await screen.findByRole("option", {
        name: ITEMS[1].label,
      })
      expect(firstOption).toHaveAttribute("data-focus")
    })

    test("arrowUp keyDown should work correctly", async () => {
      const { user } = render(<Select items={ITEMS} />)

      const input = await screen.findByRole("combobox")
      expect(input).toBeInTheDocument()

      await user.click(input)
      await user.keyboard("{Escape>}{ArrowUp>}")

      const options = await screen.findAllByRole("option")

      expect(options[ITEMS.length - 1]).toHaveAttribute("data-focus")

      for (let i = ITEMS.length - 2; i >= 0; i--) {
        await user.keyboard("{ArrowUp>}")

        expect(options[i]).toHaveAttribute("data-focus")
      }

      await user.keyboard("{ArrowUp>}")
      expect(options[ITEMS.length - 1]).toHaveAttribute("data-focus")
    })

    test("arrowUp keyDown should work correctly even when defaultValue is set", async () => {
      const { user } = render(<Select items={ITEMS} defaultValue="option2" />)

      const input = await screen.findByRole("combobox")
      expect(input).toBeInTheDocument()

      await user.click(input)
      await user.keyboard("{Escape>}{ArrowUp>}")

      const options = await screen.findAllByRole("option")
      expect(options[1]).toHaveAttribute("data-focus")
    })

    test("space keyDown should work correctly", async () => {
      const { user } = render(<Select items={ITEMS} />)

      const input = await screen.findByRole("combobox")
      expect(input).toBeInTheDocument()

      await user.click(input)
      await user.keyboard("{Escape>}{Space>}")

      const options = await screen.findAllByRole("option")
      expect(options[0]).toHaveAttribute("data-focus")

      await user.keyboard("{Space>}")
      expect(input).toHaveTextContent(ITEMS[0].label)
    })

    test("enter keyDown should work correctly", async () => {
      const { user } = render(<Select items={ITEMS} />)

      const input = await screen.findByRole("combobox")
      expect(input).toBeInTheDocument()

      await user.click(input)
      await user.keyboard("{Escape>}{Enter>}")

      const options = await screen.findAllByRole("option")
      expect(options[0]).toHaveAttribute("data-focus")

      await user.keyboard("{Enter>}")
      expect(input).toHaveTextContent(ITEMS[0].label)
    })

    test("home keyDown should work correctly", async () => {
      const { user } = render(<Select items={ITEMS} />)

      const input = await screen.findByRole("combobox")
      expect(input).toBeInTheDocument()

      await user.click(input)
      await user.keyboard("{Escape>}{ArrowUp>}")

      const options = await screen.findAllByRole("option")
      expect(options[ITEMS.length - 1]).toHaveAttribute("data-focus")

      await user.keyboard("{Home>}")
      expect(options[0]).toHaveAttribute("data-focus")
    })

    test("end keyDown should work correctly", async () => {
      const { user } = render(<Select items={ITEMS} />)

      const input = await screen.findByRole("combobox")
      expect(input).toBeInTheDocument()

      await user.click(input)

      const options = await screen.findAllByRole("option")
      expect(options[0]).toHaveAttribute("data-focus")

      await user.keyboard("{End>}")
      expect(options[options.length - 1]).toHaveAttribute("data-focus")
    })

    test("escape keyDown should work correctly", async () => {
      const { user } = render(<Select items={ITEMS} />)

      const input = await screen.findByRole("combobox")
      expect(input).toBeInTheDocument()

      await user.click(input)

      const listbox = await screen.findByRole("listbox")
      expect(listbox).toHaveStyle({ visibility: "visible" })
      expect(listbox).toBeVisible()

      await user.keyboard("{Escape>}")
      // await waitFor(() => expect(listbox).toHaveStyle({ visibility: "hidden" }))
      await waitFor(() => expect(listbox).not.toBeVisible())
    })
  })

  test("correct warnings should be issued when set empty value and placeholder in options", () => {
    const consoleWarnSpy = vi
      .spyOn(console, "warn")
      .mockImplementation(() => {})

    render(
      <Select
        placeholder="Select numbers"
        placeholderInOptions={true}
        items={[
          { label: "One", value: "" },
          { label: "Two", value: "" },
        ]}
      />,
    )

    expect(consoleWarnSpy).toHaveBeenCalledTimes(2)

    consoleWarnSpy.mockRestore()
  })
})

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
