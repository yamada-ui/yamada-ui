import { a11y, render, screen, waitFor } from "../../../test"
import { noop } from "../../utils"
import { Option, OptionGroup, Select } from "./"

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
              items: [{ label: "One", value: "one" }],
              label: "Numbers",
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

    test("should render select with option group labelProps", async () => {
      const { user } = render(
        <Select>
          <OptionGroup label="Numbers" labelProps={{ fontSize: "12px" }}>
            <Option value="one">One</Option>
          </OptionGroup>
          <Option value="two">Two</Option>
        </Select>,
      )

      const input = await screen.findByRole("combobox")

      await user.click(input)

      const group = await screen.findByText("Numbers")
      expect(group).toHaveStyle({
        fontSize: "12px",
      })
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
        <Select disabled>
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
        <Select placeholder="Numbers" readOnly>
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
          <Option disabled value="one">
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
      const { user } = render(<Select defaultValue="option2" items={ITEMS} />)

      const input = await screen.findByRole("combobox")
      expect(input).toBeInTheDocument()

      await user.click(input)
      await user.keyboard("{Escape>}{ArrowDown>}")

      const firstOption = await screen.findByRole("option", {
        name: ITEMS[1]?.label,
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

    test("alt + ArrowUp should close the listbox", async () => {
      const { user } = render(<Select items={ITEMS} />)

      const input = await screen.findByRole("combobox")
      expect(input).toBeInTheDocument()

      await user.click(input)

      const listbox = await screen.findByRole("listbox")
      expect(listbox).toBeInTheDocument()

      await user.keyboard("{Alt>}{ArrowUp}")
      expect(screen.queryByRole("listbox")).not.toBeInTheDocument()
    })

    test("arrowUp keyDown should work correctly even when defaultValue is set", async () => {
      const { user } = render(<Select defaultValue="option2" items={ITEMS} />)

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
      expect(input).toHaveTextContent(ITEMS[0]?.label ?? "")
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
      expect(input).toHaveTextContent(ITEMS[0]?.label ?? "")
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
      expect(listbox).toBeVisible()

      await user.keyboard("{Escape>}")
      await waitFor(() => expect(listbox).not.toBeVisible())
    })
  })

  test("correct warnings should be issued when set empty value and placeholder in options", () => {
    const consoleWarnSpy = vi.spyOn(console, "warn").mockImplementation(noop)

    render(
      <Select
        items={[
          { label: "One", value: "" },
          { label: "Two", value: "" },
        ]}
        placeholder="Select numbers"
        placeholderInOptions
      />,
    )

    expect(consoleWarnSpy).toHaveBeenCalledTimes(2)

    consoleWarnSpy.mockRestore()
  })

  describe("header rendering", () => {
    test("should be displayed properly when present.", () => {
      const HEADER_TEXT = "Header"
      const HEADER_STYLE = { background: "green" }

      const renderHeader = () => {
        return <header style={HEADER_STYLE}>{HEADER_TEXT}</header>
      }

      render(
        <Select
          header={renderHeader()}
          items={[
            { label: "One", value: "" },
            { label: "Two", value: "" },
          ]}
          placeholder="Select numbers"
          placeholderInOptions
        />,
      )

      const headerElement = screen.getByText(HEADER_TEXT)

      expect(headerElement).toBeInTheDocument()
      expect(headerElement).toHaveStyle(HEADER_STYLE)
      expect(headerElement.parentElement).toHaveClass("ui-select__header")
    })

    test("should be displayed properly when NOT present", () => {
      const { container } = render(
        <Select
          items={[
            { label: "One", value: "" },
            { label: "Two", value: "" },
          ]}
          placeholder="Select numbers"
          placeholderInOptions
        />,
      )

      const headerElement = container.querySelector(".ui-select__header")
      expect(headerElement).toBeNull()
    })
  })

  describe("footer rendering", () => {
    test("should be displayed properly when present.", () => {
      const FOOTER_TEXT = "Footer"
      const FOOTER_STYLE = { background: "green" }

      const renderFooter = () => {
        return <footer style={FOOTER_STYLE}>{FOOTER_TEXT}</footer>
      }

      render(
        <Select
          footer={renderFooter()}
          items={[
            { label: "One", value: "" },
            { label: "Two", value: "" },
          ]}
          placeholder="Select numbers"
          placeholderInOptions
        />,
      )

      const footerElement = screen.getByText(FOOTER_TEXT)

      expect(footerElement).toBeInTheDocument()
      expect(footerElement).toHaveStyle(FOOTER_STYLE)
      expect(footerElement.parentElement).toHaveClass("ui-select__footer")
    })

    test("should be displayed properly when NOT present", () => {
      const { container } = render(
        <Select
          items={[
            { label: "One", value: "" },
            { label: "Two", value: "" },
          ]}
          placeholder="Select numbers"
          placeholderInOptions
        />,
      )

      const footerElement = container.querySelector(".ui-select__footer")
      expect(footerElement).toBeNull()
    })
  })

  test("should have correct displayName and __ui__", () => {
    expect(Select.displayName).toBe("Select")
    expect(Select.__ui__).toBe("Select")
  })
})
