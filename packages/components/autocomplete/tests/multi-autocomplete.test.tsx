import { AutocompleteOption, MultiAutocomplete } from "@yamada-ui/react"
import { fireEvent, render, screen, waitFor } from "@yamada-ui/test"

describe("<MultiAutoComplete />", () => {
  describe("renders correctly", () => {
    test("default", async () => {
      const { container } = render(
        <MultiAutocomplete placeholder="Select Option">
          <AutocompleteOption value="option1">option1</AutocompleteOption>
          <AutocompleteOption value="option2">option2</AutocompleteOption>
          <AutocompleteOption value="option3">option3</AutocompleteOption>
        </MultiAutocomplete>,
      )

      expect(screen.getByRole("textbox")).toHaveAttribute(
        "placeholder",
        "Select Option",
      )

      const multiAutocomplete = container.querySelector(
        ".ui-multi-autocomplete",
      )
      expect(multiAutocomplete).toBeInTheDocument()

      fireEvent.click(multiAutocomplete!)
      await waitFor(() => {
        const optionElements = screen.getAllByRole("autocomplete-item")
        expect(optionElements).toHaveLength(3)
      })
    })

    test("have default value", async () => {
      const { container } = render(
        <MultiAutocomplete
          placeholder="Select Option"
          defaultValue={["option1", "option2"]}
        >
          <AutocompleteOption value="option1">option1</AutocompleteOption>
          <AutocompleteOption value="option2">option2</AutocompleteOption>
          <AutocompleteOption value="option3">option3</AutocompleteOption>
        </MultiAutocomplete>,
      )

      const multiAutocomplete = container.querySelector(
        ".ui-multi-autocomplete",
      )
      expect(multiAutocomplete).toBeInTheDocument()
      expect(screen.getByText("option1,")).toBeInTheDocument()

      fireEvent.click(multiAutocomplete!)
      await waitFor(() => {
        const optionElements = screen.getAllByRole("autocomplete-item")
        expect(optionElements).toHaveLength(3)
      })
    })
  })
})
