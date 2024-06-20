import { a11y, render, screen, waitFor } from "@yamada-ui/test"
import { Select, Option, OptionGroup, MultiSelect } from "../src"

describe("<Select />", () => {
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
      <Select role="combobox">
        <Option value="one">One</Option>
        <Option value="two">Two</Option>
      </Select>,
    )

    const input = screen.getByRole("combobox")
    expect(input).toBeInTheDocument()

    await user.click(input)

    const options = await screen.findAllByRole("select-item")
    expect(options[0]).toHaveTextContent(/one/i)
    expect(options[1]).toHaveTextContent(/two/i)
  })

  test("when items passed to props, renders correctly", async () => {
    const { user } = render(
      <Select
        role="combobox"
        items={[
          { label: "One", value: "one" },
          { label: "Two", value: "two" },
        ]}
      />,
    )

    const input = screen.getByRole("combobox")
    expect(input).toBeInTheDocument()

    await user.click(input)

    const options = await screen.findAllByRole("select-item")
    expect(options[0]).toHaveTextContent(/one/i)
    expect(options[1]).toHaveTextContent(/two/i)
  })

  test("when nested items passed to props, renders correctly", async () => {
    const { user } = render(
      <Select
        role="combobox"
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

    const input = screen.getByRole("combobox")
    expect(input).toBeInTheDocument()

    await user.click(input)

    const select = await screen.findByRole("select")
    expect(select).toBeInTheDocument()
    expect(select).toHaveTextContent(/numbers/i)
    expect(select).toHaveTextContent(/one/i)
  })

  test("should render select with option group", async () => {
    const { user } = render(
      <Select role="combobox">
        <OptionGroup label="Numbers">
          <Option value="one">One</Option>
        </OptionGroup>
        <Option value="two">Two</Option>
      </Select>,
    )

    const input = screen.getByRole("combobox")
    expect(input).toBeInTheDocument()

    await user.click(input)

    const select = await screen.findByRole("select")
    expect(select).toBeInTheDocument()
    expect(select).toHaveTextContent(/numbers/i)
    expect(select).toHaveTextContent(/one/i)
  })

  test("should render select with placeholder", async () => {
    const { user } = render(
      <Select role="combobox" placeholder="Select numbers">
        <Option value="one">One</Option>
        <Option value="two">Two</Option>
      </Select>,
    )

    const input = screen.getByRole("combobox")
    expect(input).toBeInTheDocument()
    expect(input).toHaveTextContent(/select numbers/i)

    await user.click(input)

    const options = await screen.findAllByRole("select-item")
    expect(options[0]).toHaveTextContent(/select numbers/i)
  })

  test("should render correctly with placeholder not included in options", async () => {
    const { user } = render(
      <Select
        role="combobox"
        placeholder="Select numbers"
        placeholderInOptions={false}
      >
        <Option value="one">One</Option>
        <Option value="two">Two</Option>
      </Select>,
    )

    const input = screen.getByRole("combobox")
    expect(input).toBeInTheDocument()
    expect(input).toHaveTextContent(/select numbers/i)

    await user.click(input)

    const options = await screen.findAllByRole("select-item")
    expect(options[0]).not.toHaveTextContent(/select numbers/i)
  })

  test("should be disable", () => {
    render(
      <Select role="combobox" isDisabled>
        <Option value="one">One</Option>
        <Option value="two">Two</Option>
      </Select>,
    )

    const input = screen.getByRole("combobox")
    expect(input).toHaveAttribute("disabled")
    expect(input).toHaveAttribute("aria-disabled", "true")
  })

  test("should be readonly", () => {
    render(
      <Select role="combobox" placeholder="Numbers" isReadOnly>
        <Option value="one">One</Option>
        <Option value="two">Two</Option>
      </Select>,
    )

    const input = screen.getByRole("combobox")
    expect(input).toHaveAttribute("readonly")
    expect(input).toHaveAttribute("data-readonly")
  })

  test("should be disable option", async () => {
    const { user } = render(
      <Select role="combobox">
        <Option value="one" isDisabled>
          One
        </Option>
        <Option value="two">Two</Option>
      </Select>,
    )

    const input = screen.getByRole("combobox")
    expect(input).toBeInTheDocument()

    await user.click(input)

    const options = await screen.findAllByRole("select-item")
    expect(options[0]).toHaveTextContent(/one/i)
    expect(options[0]).toHaveAttribute("data-disabled")
    expect(options[0]).toHaveAttribute("aria-disabled", "true")
  })

  test("correct warnings should be issued when set empty value and placeholder in options", () => {
    const consoleWarnSpy = vi
      .spyOn(console, "warn")
      .mockImplementation(() => {})

    render(
      <Select
        role="combobox"
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
      const { user } = render(<Select role="combobox" items={ITEMS} />)

      const input = screen.getByRole("combobox")
      expect(input).toBeInTheDocument()

      await user.click(input)
      await user.keyboard("{Escape>}{ArrowDown>}")

      const options = await screen.findAllByRole("select-item")

      expect(options[0]).toHaveAttribute("data-focus")

      for (let i = 1; i < ITEMS.length; i++) {
        await user.keyboard("{ArrowDown>}")

        expect(options[i]).toHaveAttribute("data-focus")
      }

      await user.keyboard("{ArrowDown>}")
      expect(options[0]).toHaveAttribute("data-focus")
    })

    test("arrowDown keyDown should work correctly even when defaultValue is set", async () => {
      const { user } = render(
        <Select role="combobox" items={ITEMS} defaultValue="option2" />,
      )

      const input = screen.getByRole("combobox")
      expect(input).toBeInTheDocument()

      await user.click(input)
      await user.keyboard("{Escape>}{ArrowDown>}")

      const options = await screen.findAllByRole("select-item")
      expect(options[1]).toHaveAttribute("data-focus")
    })

    test("arrowUp keyDown should work correctly", async () => {
      const { user } = render(<Select role="combobox" items={ITEMS} />)

      const input = screen.getByRole("combobox")
      expect(input).toBeInTheDocument()

      await user.click(input)
      await user.keyboard("{Escape>}{ArrowUp>}")

      const options = await screen.findAllByRole("select-item")

      expect(options[ITEMS.length - 1]).toHaveAttribute("data-focus")

      for (let i = ITEMS.length - 2; i >= 0; i--) {
        await user.keyboard("{ArrowUp>}")

        expect(options[i]).toHaveAttribute("data-focus")
      }

      await user.keyboard("{ArrowUp>}")
      expect(options[ITEMS.length - 1]).toHaveAttribute("data-focus")
    })

    test("arrowUp keyDown should work correctly even when defaultValue is set", async () => {
      const { user } = render(
        <Select role="combobox" items={ITEMS} defaultValue="option2" />,
      )

      const input = screen.getByRole("combobox")
      expect(input).toBeInTheDocument()

      await user.click(input)
      await user.keyboard("{Escape>}{ArrowUp>}")

      const options = await screen.findAllByRole("select-item")
      expect(options[1]).toHaveAttribute("data-focus")
    })

    test("space keyDown should work correctly", async () => {
      const { user } = render(<Select role="combobox" items={ITEMS} />)

      const input = screen.getByRole("combobox")
      expect(input).toBeInTheDocument()

      await user.click(input)
      await user.keyboard("{Escape>}{Space>}")

      const options = await screen.findAllByRole("select-item")
      expect(options[0]).toHaveAttribute("data-focus")

      await user.keyboard("{Space>}")
      expect(input).toHaveTextContent("option1")
    })

    test("enter keyDown should work correctly", async () => {
      const { user } = render(<Select role="combobox" items={ITEMS} />)

      const input = screen.getByRole("combobox")
      expect(input).toBeInTheDocument()

      await user.click(input)
      await user.keyboard("{Escape>}{Enter>}")

      const options = await screen.findAllByRole("select-item")
      expect(options[0]).toHaveAttribute("data-focus")

      await user.keyboard("{Enter>}")
      expect(input).toHaveTextContent("option1")
    })

    test("home keyDown should work correctly", async () => {
      const { user } = render(<Select role="combobox" items={ITEMS} />)

      const input = screen.getByRole("combobox")
      expect(input).toBeInTheDocument()

      await user.click(input)
      await user.keyboard("{Escape>}{ArrowUp>}")

      const options = await screen.findAllByRole("select-item")
      expect(options[ITEMS.length - 1]).toHaveAttribute("data-focus")

      await user.keyboard("{Home>}")
      expect(options[0]).toHaveAttribute("data-focus")
    })

    test("end keyDown should work correctly", async () => {
      const { user } = render(<Select role="combobox" items={ITEMS} />)

      const input = screen.getByRole("combobox")
      expect(input).toBeInTheDocument()

      await user.click(input)

      const options = await screen.findAllByRole("select-item")
      expect(options[0]).toHaveAttribute("data-focus")

      await user.keyboard("{End>}")
      expect(options[options.length - 1]).toHaveAttribute("data-focus")
    })

    test("escape keyDown should work correctly", async () => {
      const { user } = render(<Select role="combobox" items={ITEMS} />)

      const input = screen.getByRole("combobox")
      expect(input).toBeInTheDocument()

      await user.click(input)

      const select = await screen.findByRole("select")
      expect(select).toHaveStyle({ visibility: "visible" })

      await user.keyboard("{Escape>}")
      await waitFor(() => expect(select).toHaveStyle({ visibility: "hidden" }))
    })
  })
})

describe("<MultiSelect />", () => {
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
      <MultiSelect role="combobox">
        <Option value="one">One</Option>
        <Option value="two">Two</Option>
      </MultiSelect>,
    )

    const input = screen.getByRole("combobox")
    expect(input).toBeInTheDocument()

    await user.click(input)

    const options = await screen.findAllByRole("select-item")
    expect(options[0]).toHaveTextContent(/one/i)
    expect(options[1]).toHaveTextContent(/two/i)
  })

  test("when items passed to props, renders correctly", async () => {
    const { user } = render(
      <MultiSelect
        role="combobox"
        items={[
          { label: "One", value: "one" },
          { label: "Two", value: "two" },
        ]}
      />,
    )

    const input = screen.getByRole("combobox")
    expect(input).toBeInTheDocument()

    await user.click(input)

    const options = await screen.findAllByRole("select-item")
    expect(options[0]).toHaveTextContent(/one/i)
    expect(options[1]).toHaveTextContent(/two/i)
  })

  test("when nested items passed to props, renders correctly", async () => {
    const { user } = render(
      <MultiSelect
        role="combobox"
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

    const input = screen.getByRole("combobox")
    expect(input).toBeInTheDocument()

    await user.click(input)

    const select = await screen.findByRole("select")
    expect(select).toBeInTheDocument()
    expect(select).toHaveTextContent(/numbers/i)
    expect(select).toHaveTextContent(/one/i)
  })

  test("when items clicked twice, renders correctly", async () => {
    const { user } = render(
      <MultiSelect role="combobox">
        <Option value="one">One</Option>
        <Option value="two">Two</Option>
        <Option value="three">Three</Option>
      </MultiSelect>,
    )

    const input = screen.getByRole("combobox")

    await user.click(input)

    const option1 = await screen.findByText(/one/i)
    await user.click(option1)

    const option2 = await screen.findByText(/two/i)
    await user.click(option2)

    expect(input).toHaveTextContent(/one/i)
    expect(input).toHaveTextContent(/two/i)
  })

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

    const { user } = render(
      <MultiSelect role="combobox" omitSelectedValues items={items} />,
    )

    const input = screen.getByRole("combobox")
    expect(input).toBeInTheDocument()

    await user.click(input)
    await user.keyboard("{Escape>}{ArrowDown>}")

    const options = await screen.findAllByRole("select-item")

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
        role="combobox"
        omitSelectedValues
        items={items}
        defaultValue={["option2"]}
      />,
    )

    const input = screen.getByRole("combobox")
    expect(input).toBeInTheDocument()

    await user.click(input)
    await user.keyboard("{Escape>}{ArrowDown>}")

    const options = await screen.findAllByRole("select-item")
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

    const { user } = render(
      <MultiSelect role="combobox" omitSelectedValues items={items} />,
    )

    const input = screen.getByRole("combobox")
    expect(input).toBeInTheDocument()

    await user.click(input)
    await user.keyboard("{Escape>}{ArrowUp>}")

    const options = await screen.findAllByRole("select-item")

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
        role="combobox"
        omitSelectedValues
        items={items}
        defaultValue={["option2"]}
      />,
    )

    const input = screen.getByRole("combobox")
    expect(input).toBeInTheDocument()

    await user.click(input)
    await user.keyboard("{Escape>}{ArrowUp>}")

    const options = await screen.findAllByRole("select-item")
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
        role="combobox"
        omitSelectedValues
        items={items}
        defaultValue={["option1"]}
      />,
    )

    const input = screen.getByRole("combobox")
    expect(input).toBeInTheDocument()

    await user.click(input)
    await user.keyboard("{Escape>}{ArrowUp>}")

    const options = await screen.findAllByRole("select-item")
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
        role="combobox"
        omitSelectedValues
        items={items}
        defaultValue={["option3"]}
      />,
    )

    const input = screen.getByRole("combobox")
    expect(input).toBeInTheDocument()

    await user.click(input)
    await user.keyboard("{Escape>}{ArrowDown>}")

    const options = await screen.findAllByRole("select-item")
    expect(options[0]).toHaveAttribute("data-focus")

    await user.keyboard("{End>}")
    expect(options[1]).toHaveAttribute("data-focus")
  })
})
