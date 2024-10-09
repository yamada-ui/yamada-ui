import type { AutocompleteItem } from "../src"
import { act, render, renderHook, screen, waitFor } from "@yamada-ui/test"
import { noop } from "@yamada-ui/utils"
import { useState } from "react"
import {
  Autocomplete,
  AutocompleteOption,
  AutocompleteOptionGroup,
} from "../src"

describe("<Autocomplete />", () => {
  const AUTOCOMPLETE_CLASS = ".ui-autocomplete"
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
      const { container, user } = render(
        <Autocomplete placeholder="Select Option">
          <AutocompleteOption value="option1">option1</AutocompleteOption>
          <AutocompleteOption value="option2">option2</AutocompleteOption>
          <AutocompleteOption value="option3">option3</AutocompleteOption>
        </Autocomplete>,
      )

      expect(screen.getByRole("combobox")).toHaveAttribute(
        "placeholder",
        "Select Option",
      )

      const autocomplete = container.querySelector(AUTOCOMPLETE_CLASS)
      expect(autocomplete).toBeInTheDocument()

      await user.click(autocomplete!)

      const optionElements = await screen.findAllByRole(OPTION_ROLE)
      expect(optionElements).toHaveLength(3)
    })

    test("with group label", async () => {
      const { container, user } = render(
        <Autocomplete>
          <AutocompleteOptionGroup label="Group1">
            <AutocompleteOption value="option1">option1</AutocompleteOption>
          </AutocompleteOptionGroup>
          <AutocompleteOptionGroup label="Group2">
            <AutocompleteOption value="option2">option2</AutocompleteOption>
          </AutocompleteOptionGroup>
          <AutocompleteOptionGroup label="Group3">
            <AutocompleteOption value="option3">option3</AutocompleteOption>
          </AutocompleteOptionGroup>
        </Autocomplete>,
      )

      const autocomplete = container.querySelector(AUTOCOMPLETE_CLASS)
      expect(autocomplete).toBeInTheDocument()

      await user.click(autocomplete!)

      await waitFor(() => {
        const groupLabels = screen.getAllByText(/Group\d/)
        groupLabels.forEach((g) => expect(g).toBeVisible())
      })
    })

    test("with group label props", async () => {
      const { container, user } = render(
        <Autocomplete>
          <AutocompleteOptionGroup
            label="Group1"
            labelProps={{ fontSize: "12px" }}
          >
            <AutocompleteOption value="option1">option1</AutocompleteOption>
          </AutocompleteOptionGroup>
        </Autocomplete>,
      )

      const autocomplete = container.querySelector(AUTOCOMPLETE_CLASS)

      await user.click(autocomplete!)

      await waitFor(() => {
        const groupLabel = screen.getByText("Group1")
        expect(groupLabel).toHaveStyle({ fontSize: "12px" })
      })
    })

    test.each(["xs", "sm", "md", "lg"])(`with size prop %s`, (size) => {
      const { container } = render(<Autocomplete size={size} items={ITEMS} />)

      const autocomplete = container.querySelector(AUTOCOMPLETE_CLASS)
      expect(autocomplete).toBeInTheDocument()

      expect(autocomplete).toHaveStyle(`font-size: var(--ui-fontSizes-${size})`)
    })

    test("with default value", () => {
      render(<Autocomplete defaultValue="option1" items={ITEMS} />)

      expect(screen.getByRole("combobox")).toHaveValue("option1")
    })

    test("with disabled", () => {
      render(<Autocomplete isDisabled items={ITEMS} />)

      expect(screen.getByRole("combobox")).toBeDisabled()
    })

    test("with readOnly", () => {
      render(<Autocomplete isReadOnly items={ITEMS} />)

      expect(screen.getByRole("combobox")).toHaveAttribute("readonly")
    })

    test("with invalid", () => {
      render(<Autocomplete isInvalid items={ITEMS} />)

      expect(screen.getByRole("combobox")).toHaveAttribute(
        "aria-invalid",
        "true",
      )
    })

    test("with emptyProps icon", async () => {
      const { container, user } = render(
        <Autocomplete
          items={ITEMS}
          emptyProps={{ icon: <svg data-testid="icon" /> }}
        />,
      )

      const autocomplete = container.querySelector(AUTOCOMPLETE_CLASS)
      expect(autocomplete).toBeInTheDocument()

      await user.click(autocomplete!)

      await waitFor(() => {
        expect(screen.getByTestId("icon")).toBeInTheDocument()
      })
    })

    test("items are updated correctly", async () => {
      const { result } = renderHook(() => useState(ITEMS))

      const { container, rerender, user } = render(
        <Autocomplete items={result.current[0]} />,
      )

      const autocomplete = container.querySelector(AUTOCOMPLETE_CLASS)
      await user.click(autocomplete!)

      let optionElements = await screen.findAllByRole(OPTION_ROLE)
      await waitFor(() => expect(optionElements).toHaveLength(3))

      act(() => {
        result.current[1]((prev) => [
          ...prev,
          { label: "option4", value: "option4" },
        ])
      })

      rerender(<Autocomplete items={result.current[0]} />)

      optionElements = await screen.findAllByRole(OPTION_ROLE)
      await waitFor(() => expect(optionElements).toHaveLength(4))
    })
  })

  describe("select options", () => {
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

    test("select the first option when clicked", async () => {
      const { container, user } = render(<Autocomplete items={ITEMS} />)

      const autocomplete = container.querySelector(AUTOCOMPLETE_CLASS)
      expect(autocomplete).toBeInTheDocument()

      await user.click(autocomplete!)

      const optionElements = await screen.findAllByRole(OPTION_ROLE)
      await user.click(optionElements[0]!)

      await waitFor(() =>
        expect(screen.getByRole("combobox")).toHaveValue("option1"),
      )
    })

    test("update the value when typing in the combobox", async () => {
      const { container, user } = render(<Autocomplete items={ITEMS} />)

      const autocomplete = container.querySelector(AUTOCOMPLETE_CLASS)
      expect(autocomplete).toBeInTheDocument()

      await user.click(autocomplete!)

      const input = screen.getByRole("combobox")
      await user.type(input, "option2")
      await user.keyboard("{Enter}")

      expect(input).toHaveValue("option2")
    })

    test("should be searchable in uppercase and full-width characters", async () => {
      const { container, user } = render(<Autocomplete items={ITEMS} />)

      const autocomplete = container.querySelector(AUTOCOMPLETE_CLASS)
      expect(autocomplete).toBeInTheDocument()

      await user.click(autocomplete!)

      const input = screen.getByRole("combobox")
      await user.type(input, "ＯＰＴＩＯＮ２")
      await user.keyboard("{Enter}")

      expect(input).toHaveValue("option2")
    })

    test("display 'No results found' when selecting a non-existent option", async () => {
      const NO_RESULTS = "No results found"
      const { container, user } = render(
        <Autocomplete emptyMessage={NO_RESULTS} items={ITEMS} />,
      )

      const autocomplete = container.querySelector(AUTOCOMPLETE_CLASS)
      expect(autocomplete).toBeInTheDocument()

      await user.click(autocomplete!)
      expect(screen.getByText(NO_RESULTS)).toHaveStyle("position: absolute")

      await user.type(screen.getByRole("combobox"), "option4")
      expect(screen.getByText(NO_RESULTS)).not.toHaveStyle("position: absolute")
    })

    test("does not close the dropdown list when an option is selected", async () => {
      const { container, user } = render(
        <Autocomplete closeOnSelect={false} items={ITEMS} />,
      )

      const autocomplete = container.querySelector(AUTOCOMPLETE_CLASS)
      expect(autocomplete).toBeInTheDocument()

      await user.click(autocomplete!)

      const optionElements = await screen.findAllByRole(OPTION_ROLE)
      await user.click(optionElements[0]!)

      optionElements.forEach(async (o) => {
        await waitFor(() => expect(o).toBeVisible())
      })
    })

    test("does not close the dropdown list when blurred", async () => {
      const { container, user } = render(
        <>
          <input type="text" placeholder="focus-other" />
          <Autocomplete closeOnBlur={false} items={ITEMS} />
        </>,
      )

      const autocomplete = container.querySelector(AUTOCOMPLETE_CLASS)
      expect(autocomplete).toBeInTheDocument()

      await user.click(autocomplete!)

      act(() => {
        screen.getByPlaceholderText("focus-other").focus()
      })

      const optionElements = await screen.findAllByRole(OPTION_ROLE)
      optionElements.forEach(async (o) => {
        await waitFor(() => expect(o).toBeVisible())
      })
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

    test("arrowDown keyDown should work correctly", async () => {
      const { container, user } = render(<Autocomplete items={ITEMS} />)

      const autocomplete = container.querySelector(AUTOCOMPLETE_CLASS)
      expect(autocomplete).toBeInTheDocument()

      await user.click(autocomplete!)
      await user.keyboard("{Escape}{ArrowDown>}")

      const optionElements = await screen.findAllByRole(OPTION_ROLE)

      expect(optionElements[0]).toHaveAttribute("data-focus")

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
      const { container, user } = render(
        <Autocomplete defaultValue="option2" items={ITEMS} />,
      )

      const autocomplete = container.querySelector(AUTOCOMPLETE_CLASS)
      expect(autocomplete).toBeInTheDocument()

      await user.click(autocomplete!)
      await user.keyboard("{Escape}{ArrowDown>}")

      const optionElements = await screen.findAllByRole(OPTION_ROLE)
      expect(optionElements[1]).toHaveAttribute("data-focus")
    })

    test("arrowUp keyDown should work correctly", async () => {
      const { container, user } = render(<Autocomplete items={ITEMS} />)

      const autocomplete = container.querySelector(AUTOCOMPLETE_CLASS)
      expect(autocomplete).toBeInTheDocument()

      await user.click(autocomplete!)
      await user.keyboard("{Escape}{ArrowUp>}")

      const optionElements = await screen.findAllByRole(OPTION_ROLE)

      expect(optionElements[ITEMS.length - 1]).toHaveAttribute("data-focus")

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
      const { container, user } = render(
        <Autocomplete defaultValue="option2" items={ITEMS} />,
      )

      const autocomplete = container.querySelector(AUTOCOMPLETE_CLASS)
      expect(autocomplete).toBeInTheDocument()

      await user.click(autocomplete!)
      await user.keyboard("{Escape}{ArrowUp>}")

      const optionElements = await screen.findAllByRole(OPTION_ROLE)
      expect(optionElements[1]).toHaveAttribute("data-focus")
    })

    test("space keyDown should work correctly", async () => {
      const { container, user } = render(<Autocomplete items={ITEMS} />)

      const autocomplete = container.querySelector(AUTOCOMPLETE_CLASS)
      expect(autocomplete).toBeInTheDocument()

      await user.click(autocomplete!)
      await user.keyboard("{Escape}{Space>}")

      const optionElements = await screen.findAllByRole(OPTION_ROLE)
      expect(optionElements[0]).toHaveAttribute("data-focus")

      await user.keyboard("{Space}")

      const input = screen.getByRole("combobox")
      await waitFor(() => expect(input).toHaveValue("option1"))
    })

    test("space keyDown should be able to create options", async () => {
      const { container, user } = render(
        <Autocomplete allowCreate items={ITEMS} />,
      )

      const autocomplete = container.querySelector(AUTOCOMPLETE_CLASS)
      expect(autocomplete).toBeInTheDocument()

      await user.click(autocomplete!)

      const input = screen.getByRole("combobox")
      await user.type(input, "option4")
      await user.keyboard("{Space}")

      const optionElements = await screen.findAllByRole(OPTION_ROLE)
      await waitFor(() =>
        expect(optionElements[0]).toHaveTextContent("option4"),
      )
    })

    test("enter keyDown should work correctly", async () => {
      const { container, user } = render(<Autocomplete items={ITEMS} />)

      const autocomplete = container.querySelector(AUTOCOMPLETE_CLASS)
      expect(autocomplete).toBeInTheDocument()

      await user.click(autocomplete!)
      await user.keyboard("{Escape}{Enter>}")

      const optionElements = await screen.findAllByRole(OPTION_ROLE)
      expect(optionElements[0]).toHaveAttribute("data-focus")

      await user.keyboard("{Enter}")

      const input = screen.getByRole("combobox")
      await waitFor(() => expect(input).toHaveValue("option1"))
    })

    test("enter keyDown should be able to create options", async () => {
      const { container, user } = render(
        <Autocomplete allowCreate items={ITEMS} />,
      )

      const autocomplete = container.querySelector(AUTOCOMPLETE_CLASS)
      expect(autocomplete).toBeInTheDocument()

      await user.click(autocomplete!)

      const input = screen.getByRole("combobox")
      await user.type(input, "option4")
      await user.keyboard("{Enter}")

      const optionElements = await screen.findAllByRole(OPTION_ROLE)
      await waitFor(() => {
        expect(optionElements[0]).toHaveTextContent("option4")
      })
    })

    test("home keyDown should work correctly", async () => {
      const { container, user } = render(<Autocomplete items={ITEMS} />)

      const autocomplete = container.querySelector(AUTOCOMPLETE_CLASS)
      expect(autocomplete).toBeInTheDocument()

      await user.click(autocomplete!)
      await user.keyboard("{Escape}{ArrowUp>}")

      const optionElements = await screen.findAllByRole(OPTION_ROLE)

      expect(optionElements[ITEMS.length - 1]).toHaveAttribute("data-focus")

      await user.keyboard("{Home}")

      await waitFor(() =>
        expect(optionElements[0]).toHaveAttribute("data-focus"),
      )
    })

    test("end keyDown should work correctly", async () => {
      const { container, user } = render(<Autocomplete items={ITEMS} />)

      const autocomplete = container.querySelector(AUTOCOMPLETE_CLASS)
      expect(autocomplete).toBeInTheDocument()

      await user.click(autocomplete!)

      const optionElements = await screen.findAllByRole(OPTION_ROLE)
      expect(optionElements[0]).toHaveAttribute("data-focus")

      await user.keyboard("{End}")
      await waitFor(() =>
        expect(optionElements[optionElements.length - 1]).toHaveAttribute(
          "data-focus",
        ),
      )
    })

    test("escape keyDown should work correctly", async () => {
      const { container, user } = render(<Autocomplete items={ITEMS} />)

      const autocomplete = container.querySelector(AUTOCOMPLETE_CLASS)
      expect(autocomplete).toBeInTheDocument()

      await user.click(autocomplete!)

      const select = await screen.findByRole("listbox")
      await waitFor(() => expect(select).toHaveStyle({ visibility: "visible" }))

      await user.keyboard("{Escape}")
      await waitFor(() => expect(select).toHaveStyle({ visibility: "hidden" }))
    })

    test("backspace keyDown should work correctly", async () => {
      const { container, user } = render(<Autocomplete items={ITEMS} />)

      const autocomplete = container.querySelector(AUTOCOMPLETE_CLASS)
      expect(autocomplete).toBeInTheDocument()

      await user.click(autocomplete!)

      const optionElements = await screen.findAllByRole(OPTION_ROLE)
      expect(optionElements[0]).toHaveAttribute("data-focus")

      const input = screen.getByRole("combobox")

      await user.keyboard("{Enter}{Enter>}")
      await waitFor(() => expect(input).toHaveValue("option1"))

      await user.keyboard("{Backspace}")
      await waitFor(() => expect(input).not.toHaveValue())
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
        items: [
          {
            label: "option2",
            value: "option2",
          },
        ],
        label: GROUP_LABEL,
      },
      {
        label: "option3",
        value: "option3",
      },
    ]

    test("create option when no options are available", async () => {
      const { container, user } = render(
        <Autocomplete allowCreate items={items} />,
      )

      const autocomplete = container.querySelector(AUTOCOMPLETE_CLASS)
      expect(autocomplete).toBeInTheDocument()

      await user.click(autocomplete!)

      const input = screen.getByRole("combobox")
      await user.type(input, CREATE_OPTION_VALUE)
      await user.keyboard("{Enter}")

      const optionElements = await screen.findAllByRole(OPTION_ROLE)
      expect(optionElements[0]).toHaveTextContent(CREATE_OPTION_VALUE)
    })

    test("correct warnings should be issued when both `allowCreate` and `children` are present", () => {
      const consoleWarnSpy = vi.spyOn(console, "warn").mockImplementation(noop)

      render(
        <Autocomplete allowCreate>
          <AutocompleteOption value="option1">option1</AutocompleteOption>
          <AutocompleteOption value="option2">option2</AutocompleteOption>
          <AutocompleteOption value="option3">option3</AutocompleteOption>
        </Autocomplete>,
      )

      expect(consoleWarnSpy).toHaveBeenCalledOnce()

      consoleWarnSpy.mockRestore()
    })

    describe("with insert position", () => {
      test("first", async () => {
        const { container, user } = render(
          <Autocomplete allowCreate insertPositionItem="first" items={items} />,
        )

        const autocomplete = container.querySelector(AUTOCOMPLETE_CLASS)
        expect(autocomplete).toBeInTheDocument()

        await user.click(autocomplete!)

        const input = screen.getByRole("combobox")
        await user.type(input, CREATE_OPTION_VALUE)
        await user.keyboard("{Enter}")

        const optionElements = await screen.findAllByRole(OPTION_ROLE)
        await waitFor(() => {
          expect(optionElements[0]).toHaveTextContent(CREATE_OPTION_VALUE)
        })
      })

      test("last", async () => {
        const { container, user } = render(
          <Autocomplete allowCreate insertPositionItem="last" items={items} />,
        )

        const autocomplete = container.querySelector(AUTOCOMPLETE_CLASS)
        expect(autocomplete).toBeInTheDocument()

        await user.click(autocomplete!)

        const input = screen.getByRole("combobox")
        await user.type(input, CREATE_OPTION_VALUE)
        await user.keyboard("{Enter}")

        const optionElements = await screen.findAllByRole(OPTION_ROLE)
        await waitFor(() => {
          expect(optionElements[optionElements.length - 1]).toHaveTextContent(
            CREATE_OPTION_VALUE,
          )
        })
      })

      test("group2", async () => {
        const { container, user } = render(
          <Autocomplete
            allowCreate
            insertPositionItem={GROUP_LABEL}
            items={items}
          />,
        )

        const autocomplete = container.querySelector(AUTOCOMPLETE_CLASS)
        expect(autocomplete).toBeInTheDocument()

        await user.click(autocomplete!)

        const input = screen.getByRole("combobox")
        await user.type(input, CREATE_OPTION_VALUE)
        await user.keyboard("{Enter}")

        const optionElements = await screen.findAllByRole(OPTION_ROLE)
        await waitFor(() => {
          expect(optionElements[1]).toHaveTextContent(CREATE_OPTION_VALUE)
        })
      })

      test("group2 last", async () => {
        const { container, user } = render(
          <Autocomplete
            allowCreate
            insertPositionItem={[GROUP_LABEL, "last"]}
            items={items}
          />,
        )

        const autocomplete = container.querySelector(AUTOCOMPLETE_CLASS)
        expect(autocomplete).toBeInTheDocument()

        await user.click(autocomplete!)

        const input = screen.getByRole("combobox")
        await user.type(input, CREATE_OPTION_VALUE)
        await user.keyboard("{Enter}")

        const optionElements = await screen.findAllByRole(OPTION_ROLE)
        await waitFor(() => {
          expect(optionElements[2]).toHaveTextContent(CREATE_OPTION_VALUE)
        })
      })

      test("correct warnings should be  issued when insertPosition does not exist", async () => {
        const consoleWarnSpy = vi
          .spyOn(console, "warn")
          .mockImplementation(noop)

        const { container, user } = render(
          <Autocomplete
            allowCreate
            insertPositionItem="Group4"
            items={items}
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
          items: [
            {
              label: "option2",
              value: "option2",
            },
          ],
          label: GROUP_LABEL,
        },
        {
          label: "option3",
          value: "option3",
        },
      ]

      const items: AutocompleteItem[] = JSON.parse(JSON.stringify(original))

      const { container, user } = render(
        <Autocomplete
          allowCreate
          insertPositionItem={GROUP_LABEL}
          items={items}
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

      expect(items).toStrictEqual(original)
    })

    test("with createProps icon", async () => {
      const { container, user } = render(
        <Autocomplete
          allowCreate
          items={items}
          createProps={{
            icon: <svg data-testid="icon" />,
          }}
        />,
      )

      const autocomplete = container.querySelector(AUTOCOMPLETE_CLASS)
      expect(autocomplete).toBeInTheDocument()

      await user.click(autocomplete!)

      const input = screen.getByRole("combobox")
      await user.type(input, CREATE_OPTION_VALUE)
      await user.keyboard("{Enter}")

      await waitFor(() => {
        expect(screen.getByTestId("icon")).toBeInTheDocument()
      })
    })
  })

  describe("header rendering", () => {
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

    test("should be displayed properly when present.", () => {
      const HEADER_TEXT = "Header"
      const HEADER_STYLE = { background: "green" }

      const renderHeader = () => {
        return <header style={HEADER_STYLE}>{HEADER_TEXT}</header>
      }

      render(<Autocomplete header={renderHeader()} items={ITEMS} />)

      const headerElement = screen.getByText(HEADER_TEXT)

      expect(headerElement).toBeInTheDocument()
      expect(headerElement).toHaveStyle(HEADER_STYLE)
      expect(headerElement.parentElement).toHaveClass("ui-autocomplete__header")
    })

    test("should be displayed properly when NOT present", () => {
      const { container } = render(<Autocomplete items={ITEMS} />)

      const headerElement = container.querySelector(".ui-autocomplete__header")
      expect(headerElement).toBeNull()
    })
  })

  describe("footer rendering", () => {
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

    test("should be displayed properly when present.", () => {
      const FOOTER_TEXT = "Footer"
      const FOOTER_STYLE = { background: "green" }

      const renderFooter = () => {
        return <footer style={FOOTER_STYLE}>{FOOTER_TEXT}</footer>
      }

      render(<Autocomplete footer={renderFooter()} items={ITEMS} />)

      const footerElement = screen.getByText(FOOTER_TEXT)

      expect(footerElement).toBeInTheDocument()
      expect(footerElement).toHaveStyle(FOOTER_STYLE)
      expect(footerElement.parentElement).toHaveClass("ui-autocomplete__footer")
    })

    test("should be displayed properly when NOT present", () => {
      const { container } = render(<Autocomplete items={ITEMS} />)

      const footerElement = container.querySelector(".ui-autocomplete__footer")
      expect(footerElement).toBeNull()
    })
  })
})
