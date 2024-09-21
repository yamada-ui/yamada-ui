import { render, screen, waitFor } from "@yamada-ui/test"
import type { AutocompleteItem } from "../src"
import { AutocompleteOption, MultiAutocomplete } from "../src"

describe("<MultiAutoComplete />", () => {
  const AUTOCOMPLETE_CLASS = ".ui-multi-autocomplete"
  const OPTION_ROLE = "option"

  describe("renders correctly", () => {
    const ITEMS: AutocompleteItem[] = [
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

    test("default", async () => {
      const { user, container } = render(
        <MultiAutocomplete placeholder="Select Option">
          <AutocompleteOption value="option1">option1</AutocompleteOption>
          <AutocompleteOption value="option2">option2</AutocompleteOption>
          <AutocompleteOption value="option3">option3</AutocompleteOption>
        </MultiAutocomplete>,
      )

      expect(screen.getByRole("combobox")).toHaveAttribute(
        "placeholder",
        "Select Option",
      )

      const multiAutocomplete = container.querySelector(AUTOCOMPLETE_CLASS)
      expect(multiAutocomplete).toBeInTheDocument()

      await user.click(multiAutocomplete!)

      const optionElements = await screen.findAllByRole(OPTION_ROLE)
      expect(optionElements).toHaveLength(3)
    })

    test("have default value", () => {
      render(
        <MultiAutocomplete
          placeholder="Select Option"
          defaultValue={["option1", "option2"]}
        >
          <AutocompleteOption value="option1">option1</AutocompleteOption>
          <AutocompleteOption value="option2">option2</AutocompleteOption>
          <AutocompleteOption value="option3">option3</AutocompleteOption>
        </MultiAutocomplete>,
      )

      expect(screen.getByText("option1,")).toBeInTheDocument()
    })

    test("with component", () => {
      render(
        <MultiAutocomplete
          defaultValue={["option1"]}
          component={({ label }) => (
            <div data-testid="label-component">{label}</div>
          )}
        >
          <AutocompleteOption value="option1">option1</AutocompleteOption>
          <AutocompleteOption value="option2">option2</AutocompleteOption>
          <AutocompleteOption value="option3">option3</AutocompleteOption>
        </MultiAutocomplete>,
      )

      expect(screen.getByTestId("label-component")).toBeInTheDocument()
    })

    test("clear button should work correctly", async () => {
      const { user, container } = render(<MultiAutocomplete items={ITEMS} />)

      const autocomplete = container.querySelector(AUTOCOMPLETE_CLASS)
      expect(autocomplete).toBeInTheDocument()

      await user.click(autocomplete!)

      const optionElements = await screen.findAllByRole(OPTION_ROLE)
      expect(optionElements[0]).toHaveAttribute("data-focus")

      await user.keyboard("{Enter}{ArrowDown}{Enter}")

      const option1Span = screen.getByText("option1,")
      const option2Span = screen.getByText("option2,")
      expect(option1Span).toBeInTheDocument()
      expect(option2Span).toBeInTheDocument()

      const clearButton = screen.getByRole("button", { name: "Clear value" })
      await user.click(clearButton)

      expect(option1Span).not.toBeInTheDocument()
      expect(option2Span).not.toBeInTheDocument()
    })
  })

  describe("first item is selected", () => {
    const ITEMS: AutocompleteItem[] = [
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

    test("focuses first enabled item when the first item is selected", async () => {
      const { user, container } = render(
        <MultiAutocomplete
          placeholder="Select Option"
          items={ITEMS}
          defaultValue={["option1", "option2"]}
          omitSelectedValues
        />,
      )

      const autocomplete = container.querySelector(AUTOCOMPLETE_CLASS)
      expect(autocomplete).toBeInTheDocument()

      await user.click(autocomplete!)

      const optionElements = await screen.findAllByRole(OPTION_ROLE)
      expect(optionElements).toHaveLength(3)

      await user.keyboard("{Escape}{ArrowDown}")
      await waitFor(() =>
        expect(optionElements[2]).toHaveAttribute("data-focus"),
      )
    })

    test("focuses first item when the first item is not selected", async () => {
      const { user, container } = render(
        <MultiAutocomplete
          placeholder="Select Option"
          items={ITEMS}
          defaultValue={["option3"]}
          omitSelectedValues
        />,
      )

      const autocomplete = container.querySelector(AUTOCOMPLETE_CLASS)
      expect(autocomplete).toBeInTheDocument()

      await user.click(autocomplete!)

      const optionElements = await screen.findAllByRole(OPTION_ROLE)
      expect(optionElements).toHaveLength(3)

      await user.keyboard("{Escape}{ArrowDown}")
      await waitFor(() =>
        expect(optionElements[0]).toHaveAttribute("data-focus"),
      )
    })
  })

  describe("last item is selected", () => {
    const ITEMS: AutocompleteItem[] = [
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

    test("focuses last enabled item when the last item is selected", async () => {
      const { user, container } = render(
        <MultiAutocomplete
          placeholder="Select Option"
          items={ITEMS}
          defaultValue={["option1", "option3"]}
          omitSelectedValues
        />,
      )

      const autocomplete = container.querySelector(AUTOCOMPLETE_CLASS)
      expect(autocomplete).toBeInTheDocument()

      await user.click(autocomplete!)

      const optionElements = await screen.findAllByRole(OPTION_ROLE)
      expect(optionElements).toHaveLength(3)

      await user.keyboard("{Escape}{ArrowUp}")
      await waitFor(() =>
        expect(optionElements[1]).toHaveAttribute("data-focus"),
      )
    })

    test("focuses last item when the last item is not selected", async () => {
      const { user, container } = render(
        <MultiAutocomplete
          placeholder="Select Option"
          items={ITEMS}
          defaultValue={["option1"]}
          omitSelectedValues
        />,
      )

      const autocomplete = container.querySelector(AUTOCOMPLETE_CLASS)
      expect(autocomplete).toBeInTheDocument()

      await user.click(autocomplete!)

      const optionElements = await screen.findAllByRole(OPTION_ROLE)
      expect(optionElements).toHaveLength(3)

      await user.keyboard("{Escape}{ArrowUp}")
      await waitFor(() =>
        expect(optionElements[2]).toHaveAttribute("data-focus"),
      )
    })
  })

  describe("focus item", () => {
    const ITEMS: AutocompleteItem[] = [
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

    test("focuses next item when set omitSelectedValues and item selected", async () => {
      const { user, container } = render(
        <MultiAutocomplete
          placeholder="Select Option"
          items={ITEMS}
          defaultValue={["option2"]}
          omitSelectedValues
        />,
      )

      const autocomplete = container.querySelector(AUTOCOMPLETE_CLASS)
      expect(autocomplete).toBeInTheDocument()

      await user.click(autocomplete!)

      const optionElements = await screen.findAllByRole(OPTION_ROLE)
      await user.click(optionElements[0])

      await waitFor(() =>
        expect(optionElements[2]).toHaveAttribute("data-focus"),
      )
    })
  })

  describe("keyDown event", () => {
    const ITEMS: AutocompleteItem[] = [
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

    test("enter keyDown should work correctly even whe allowFree is enable", async () => {
      const { user, container } = render(
        <MultiAutocomplete items={ITEMS} allowFree />,
      )

      const autocomplete = container.querySelector(AUTOCOMPLETE_CLASS)
      expect(autocomplete).toBeInTheDocument()

      await user.click(autocomplete!)
      await user.keyboard("{Escape}{Enter}")

      const inputText = "test"
      await user.keyboard(inputText)
      await user.keyboard("{Enter}")

      const option1Span = screen.getByText("option1,")
      expect(option1Span).toBeInTheDocument()
      const inputTextSpan = screen.getByText(`${inputText},`)
      expect(inputTextSpan).toBeInTheDocument()
    })

    test("arrowDown keyDown should work correctly", async () => {
      const { user, container } = render(<MultiAutocomplete items={ITEMS} />)

      const autocomplete = container.querySelector(AUTOCOMPLETE_CLASS)
      expect(autocomplete).toBeInTheDocument()

      await user.click(autocomplete!)
      await user.keyboard("{Escape}{ArrowDown}")

      const optionElements = await screen.findAllByRole(OPTION_ROLE)

      await waitFor(() =>
        expect(optionElements[0]).toHaveAttribute("data-focus"),
      )

      for (let i = 1; i < ITEMS.length; i++) {
        await user.keyboard("{ArrowDown}")

        await waitFor(() =>
          expect(optionElements[i]).toHaveAttribute("data-focus"),
        )
      }

      await user.keyboard("{ArrowDown}")

      await waitFor(() =>
        expect(optionElements[0]).toHaveAttribute("data-focus"),
      )
    })

    test("arrowDown keyDown should work correctly even when defaultValue is set", async () => {
      const { user, container } = render(
        <MultiAutocomplete items={ITEMS} defaultValue={["option2"]} />,
      )

      const autocomplete = container.querySelector(AUTOCOMPLETE_CLASS)
      expect(autocomplete).toBeInTheDocument()

      await user.click(autocomplete!)
      await user.keyboard("{Escape}{ArrowDown}")

      const optionElements = await screen.findAllByRole(OPTION_ROLE)
      await waitFor(() =>
        expect(optionElements[1]).toHaveAttribute("data-focus"),
      )
    })

    test("arrowUp keyDown should work correctly", async () => {
      const { user, container } = render(<MultiAutocomplete items={ITEMS} />)

      const autocomplete = container.querySelector(AUTOCOMPLETE_CLASS)
      expect(autocomplete).toBeInTheDocument()

      await user.click(autocomplete!)
      await user.keyboard("{Escape}{ArrowUp}")

      const optionElements = await screen.findAllByRole(OPTION_ROLE)

      await waitFor(() =>
        expect(optionElements[ITEMS.length - 1]).toHaveAttribute("data-focus"),
      )

      for (let i = ITEMS.length - 2; i >= 0; i--) {
        await user.keyboard("{ArrowUp}")

        await waitFor(() =>
          expect(optionElements[i]).toHaveAttribute("data-focus"),
        )
      }

      await user.keyboard("{ArrowUp}")

      await waitFor(() =>
        expect(optionElements[ITEMS.length - 1]).toHaveAttribute("data-focus"),
      )
    })

    test("arrowUp keyDown should work correctly even when defaultValue is set", async () => {
      const { user, container } = render(
        <MultiAutocomplete items={ITEMS} defaultValue={["option2"]} />,
      )

      const autocomplete = container.querySelector(AUTOCOMPLETE_CLASS)
      expect(autocomplete).toBeInTheDocument()

      await user.click(autocomplete!)
      await user.keyboard("{Escape}{ArrowUp}")

      const optionElements = await screen.findAllByRole(OPTION_ROLE)
      await waitFor(() =>
        expect(optionElements[1]).toHaveAttribute("data-focus"),
      )
    })

    test("backspace keyDown should work correctly", async () => {
      const { user, container } = render(<MultiAutocomplete items={ITEMS} />)

      const autocomplete = container.querySelector(AUTOCOMPLETE_CLASS)
      expect(autocomplete).toBeInTheDocument()

      await user.click(autocomplete!)

      const optionElements = await screen.findAllByRole(OPTION_ROLE)
      expect(optionElements[0]).toHaveAttribute("data-focus")

      await user.keyboard("{Enter}{ArrowDown}{Enter}")
      const option1Span = screen.getByText("option1,")
      const option2Span = screen.getByText("option2,")
      expect(option1Span).toBeInTheDocument()
      expect(option2Span).toBeInTheDocument()

      await user.keyboard("{Backspace}")
      expect(option2Span).not.toBeInTheDocument()

      await user.keyboard("{Backspace}")
      expect(option1Span).not.toBeInTheDocument()
    })
  })

  describe("create option", () => {
    const GROUP_LABEL = "Group2"
    const CREATE_OPTION_VALUE = "option4"
    const items: AutocompleteItem[] = [
      {
        label: "option1",
        value: "option1",
      },
      {
        label: GROUP_LABEL,
        items: [
          {
            label: "option2",
            value: "option2",
          },
        ],
      },
      {
        label: "option3",
        value: "option3",
      },
    ]

    test("create option when no options are available", async () => {
      const { user, container } = render(
        <MultiAutocomplete allowCreate items={items} />,
      )

      const autocomplete = container.querySelector(AUTOCOMPLETE_CLASS)
      expect(autocomplete).toBeInTheDocument()

      await user.click(autocomplete!)

      const input = screen.getByRole("combobox")
      await user.type(input, CREATE_OPTION_VALUE)
      await user.keyboard("{Enter}")

      const optionElements = await screen.findAllByRole(OPTION_ROLE)
      await waitFor(() =>
        expect(optionElements[0]).toHaveTextContent(CREATE_OPTION_VALUE),
      )
    })

    test("correct warnings should be issued when both `allowCreate` and `children` are present", () => {
      const consoleWarnSpy = vi
        .spyOn(console, "warn")
        .mockImplementation(() => {})

      render(
        <MultiAutocomplete allowCreate>
          <AutocompleteOption value="option1">option1</AutocompleteOption>
          <AutocompleteOption value="option2">option2</AutocompleteOption>
          <AutocompleteOption value="option3">option3</AutocompleteOption>
        </MultiAutocomplete>,
      )

      expect(consoleWarnSpy).toHaveBeenCalledOnce()

      consoleWarnSpy.mockRestore()
    })

    describe("with insert position", () => {
      test("first", async () => {
        const { user, container } = render(
          <MultiAutocomplete
            allowCreate
            items={items}
            insertPositionItem="first"
          />,
        )

        const autocomplete = container.querySelector(AUTOCOMPLETE_CLASS)
        expect(autocomplete).toBeInTheDocument()

        await user.click(autocomplete!)

        const input = screen.getByRole("combobox")
        await user.type(input, CREATE_OPTION_VALUE)
        await user.keyboard("{Enter}")

        const optionElements = await screen.findAllByRole(OPTION_ROLE)
        await waitFor(() =>
          expect(optionElements[0]).toHaveTextContent(CREATE_OPTION_VALUE),
        )
      })

      test("last", async () => {
        const { user, container } = render(
          <MultiAutocomplete
            allowCreate
            items={items}
            insertPositionItem="last"
          />,
        )

        const autocomplete = container.querySelector(AUTOCOMPLETE_CLASS)
        expect(autocomplete).toBeInTheDocument()

        await user.click(autocomplete!)

        const input = screen.getByRole("combobox")
        await user.type(input, CREATE_OPTION_VALUE)
        await user.keyboard("{Enter}")

        const optionElements = await screen.findAllByRole(OPTION_ROLE)
        await waitFor(() =>
          expect(optionElements[optionElements.length - 1]).toHaveTextContent(
            CREATE_OPTION_VALUE,
          ),
        )
      })

      test("group2", async () => {
        const { user, container } = render(
          <MultiAutocomplete
            allowCreate
            items={items}
            insertPositionItem={GROUP_LABEL}
          />,
        )

        const autocomplete = container.querySelector(AUTOCOMPLETE_CLASS)
        expect(autocomplete).toBeInTheDocument()

        await user.click(autocomplete!)

        const input = screen.getByRole("combobox")
        await user.type(input, CREATE_OPTION_VALUE)
        await user.keyboard("{Enter}")

        const optionElements = await screen.findAllByRole(OPTION_ROLE)
        await waitFor(() =>
          expect(optionElements[1]).toHaveTextContent(CREATE_OPTION_VALUE),
        )
      })

      test("group2 last", async () => {
        const { user, container } = render(
          <MultiAutocomplete
            allowCreate
            items={items}
            insertPositionItem={[GROUP_LABEL, "last"]}
          />,
        )

        const autocomplete = container.querySelector(AUTOCOMPLETE_CLASS)
        expect(autocomplete).toBeInTheDocument()

        await user.click(autocomplete!)

        const input = screen.getByRole("combobox")
        await user.type(input, CREATE_OPTION_VALUE)
        await user.keyboard("{Enter}")

        const optionElements = await screen.findAllByRole(OPTION_ROLE)
        await waitFor(() =>
          expect(optionElements[2]).toHaveTextContent(CREATE_OPTION_VALUE),
        )
      })

      test("correct warnings should be  issued when insertPosition does not exist", async () => {
        const consoleWarnSpy = vi
          .spyOn(console, "warn")
          .mockImplementation(() => {})

        const { user, container } = render(
          <MultiAutocomplete
            allowCreate
            items={items}
            insertPositionItem="Group4"
          />,
        )

        const autocomplete = container.querySelector(AUTOCOMPLETE_CLASS)
        expect(autocomplete).toBeInTheDocument()

        await user.click(autocomplete!)

        const input = screen.getByRole("combobox")
        await user.type(input, CREATE_OPTION_VALUE)
        await user.keyboard("{Enter}")

        await waitFor(() => expect(consoleWarnSpy).toHaveBeenCalledOnce())

        consoleWarnSpy.mockRestore()
      })
    })

    test("original list is not affected", async () => {
      const original: AutocompleteItem[] = [
        {
          label: "option1",
          value: "option1",
        },
        {
          label: GROUP_LABEL,
          items: [
            {
              label: "option2",
              value: "option2",
            },
          ],
        },
        {
          label: "option3",
          value: "option3",
        },
      ]

      const items: AutocompleteItem[] = JSON.parse(JSON.stringify(original))

      const { user, container } = render(
        <MultiAutocomplete
          allowCreate
          items={items}
          insertPositionItem={GROUP_LABEL}
        />,
      )

      const autocomplete = container.querySelector(AUTOCOMPLETE_CLASS)
      expect(autocomplete).toBeInTheDocument()

      await user.click(autocomplete!)

      const input = screen.getByRole("combobox")
      await user.type(input, CREATE_OPTION_VALUE)
      await user.keyboard("{Enter}")

      const optionElements = await screen.findAllByRole(OPTION_ROLE)
      expect(optionElements[1]).toHaveTextContent(CREATE_OPTION_VALUE)

      expect(items).toStrictEqual(original)
    })
  })
})
