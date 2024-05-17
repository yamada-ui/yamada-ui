import type { AutocompleteItem } from "@yamada-ui/react"
import {
  Autocomplete,
  AutocompleteOption,
  AutocompleteOptionGroup,
} from "@yamada-ui/react"
import { act, fireEvent, render, screen, waitFor } from "@yamada-ui/test"

describe("<Autocomplete />", () => {
  const AUTOCOMPLETE_CLASS = ".ui-autocomplete"
  const AUTOCOMPLETE_ITEM_ROLE = "autocomplete-item"

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
      const { container } = render(
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

      fireEvent.click(autocomplete!)
      await waitFor(() => {
        const optionElements = screen.getAllByRole(AUTOCOMPLETE_ITEM_ROLE)
        expect(optionElements).toHaveLength(3)
      })
    })
    test("with group label", async () => {
      const { container } = render(
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

      fireEvent.click(autocomplete!)
      await waitFor(() => {
        const groupLabels = screen.getAllByText(/Group\d/)
        groupLabels.forEach((g) => {
          expect(g).toBeVisible()
        })
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
      const { container } = render(<Autocomplete items={ITEMS} />)

      const autocomplete = container.querySelector(AUTOCOMPLETE_CLASS)
      expect(autocomplete).toBeInTheDocument()

      fireEvent.click(autocomplete!)
      await waitFor(() => {
        const optionElements = screen.getAllByRole(AUTOCOMPLETE_ITEM_ROLE)
        fireEvent.click(optionElements[0])
      })
      expect(screen.getByRole("combobox")).toHaveValue("option1")
    })
    test("update the value when typing in the combobox", async () => {
      const { container } = render(<Autocomplete items={ITEMS} />)

      const autocomplete = container.querySelector(AUTOCOMPLETE_CLASS)
      expect(autocomplete).toBeInTheDocument()

      fireEvent.click(autocomplete!)

      const input = screen.getByRole("combobox")
      fireEvent.change(input, { target: { value: "option2" } })
      expect(input).toHaveValue("option2")
    })
    test("display 'No results found' when selecting a non-existent option", async () => {
      const NO_RESULTS = "No results found"
      const { container } = render(
        <Autocomplete emptyMessage={NO_RESULTS} items={ITEMS} />,
      )

      const autocomplete = container.querySelector(AUTOCOMPLETE_CLASS)
      expect(autocomplete).toBeInTheDocument()

      fireEvent.click(autocomplete!)
      expect(screen.getByText(NO_RESULTS)).toHaveStyle("position: absolute")

      fireEvent.change(screen.getByRole("combobox"), {
        target: { value: "option4" },
      })
      expect(screen.getByText(NO_RESULTS)).not.toHaveStyle("position: absolute")
    })
    test("does not close the dropdown list when an option is selected", async () => {
      const { container } = render(
        <Autocomplete closeOnSelect={false} items={ITEMS} />,
      )

      const autocomplete = container.querySelector(AUTOCOMPLETE_CLASS)
      expect(autocomplete).toBeInTheDocument()

      fireEvent.click(autocomplete!)
      await waitFor(() => {
        const optionElements = screen.getAllByRole(AUTOCOMPLETE_ITEM_ROLE)
        fireEvent.click(optionElements[0])
      })
      const optionElements = screen.getAllByRole(AUTOCOMPLETE_ITEM_ROLE)
      optionElements.forEach((o) => {
        expect(o).toBeVisible()
      })
    })
    test("does not close the dropdown list when blurred", async () => {
      const { container } = render(
        <>
          <input type="text" placeholder="focus-other" />
          <Autocomplete closeOnBlur={false} items={ITEMS} />
        </>,
      )

      const autocomplete = container.querySelector(AUTOCOMPLETE_CLASS)
      expect(autocomplete).toBeInTheDocument()

      fireEvent.click(autocomplete!)
      act(() => {
        screen.getByPlaceholderText("focus-other").focus()
      })
      const optionElements = await screen.findAllByRole(AUTOCOMPLETE_ITEM_ROLE)
      optionElements.forEach((o) => {
        expect(o).toBeVisible()
      })
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
      const { container } = render(<Autocomplete allowCreate items={items} />)

      const autocomplete = container.querySelector(AUTOCOMPLETE_CLASS)
      expect(autocomplete).toBeInTheDocument()

      fireEvent.click(autocomplete!)
      await waitFor(() => {
        const input = screen.getByRole("combobox")
        fireEvent.change(input, { target: { value: CREATE_OPTION_VALUE } })
        fireEvent.keyDown(input, { key: "Enter" })
      })
      expect(screen.getByRole("combobox")).toHaveValue(CREATE_OPTION_VALUE)
    })
    describe("with insert position", () => {
      test("first", async () => {
        const { container } = render(
          <Autocomplete allowCreate items={items} insertPositionItem="first" />,
        )

        const autocomplete = container.querySelector(AUTOCOMPLETE_CLASS)
        expect(autocomplete).toBeInTheDocument()

        fireEvent.click(autocomplete!)
        await waitFor(() => {
          const input = screen.getByRole("combobox")
          fireEvent.change(input, { target: { value: CREATE_OPTION_VALUE } })
          fireEvent.keyDown(input, { key: "Enter" })
        })
        const optionElements = screen.getAllByRole(AUTOCOMPLETE_ITEM_ROLE)
        expect(optionElements[0]).toHaveTextContent(CREATE_OPTION_VALUE)
      })
      test("last", async () => {
        const { container } = render(
          <Autocomplete allowCreate items={items} insertPositionItem="last" />,
        )

        const autocomplete = container.querySelector(AUTOCOMPLETE_CLASS)
        expect(autocomplete).toBeInTheDocument()

        fireEvent.click(autocomplete!)
        await waitFor(() => {
          const input = screen.getByRole("combobox")
          fireEvent.change(input, { target: { value: CREATE_OPTION_VALUE } })
          fireEvent.keyDown(input, { key: "Enter" })
        })
        const optionElements = screen.getAllByRole(AUTOCOMPLETE_ITEM_ROLE)
        expect(optionElements[optionElements.length - 1]).toHaveTextContent(
          CREATE_OPTION_VALUE,
        )
      })
      test("any", async () => {
        const { container } = render(
          <Autocomplete
            allowCreate
            items={items}
            insertPositionItem={GROUP_LABEL}
          />,
        )

        const autocomplete = container.querySelector(AUTOCOMPLETE_CLASS)
        expect(autocomplete).toBeInTheDocument()

        fireEvent.click(autocomplete!)
        await waitFor(() => {
          const input = screen.getByRole("combobox")
          fireEvent.change(input, { target: { value: CREATE_OPTION_VALUE } })
          fireEvent.keyDown(input, { key: "Enter" })
        })
        const optionElements = screen.getAllByRole(AUTOCOMPLETE_ITEM_ROLE)
        expect(optionElements[1]).toHaveTextContent(CREATE_OPTION_VALUE)
      })
    })
  })
})
