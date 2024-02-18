import { MultiAutocomplete, AutocompleteOption } from "@yamada-ui/react"
import { render, screen, fireEvent, waitFor } from "@yamada-ui/test"

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
      if (!multiAutocomplete) throw new Error("Multi Autocomplete not found")

      fireEvent.click(multiAutocomplete)
      await waitFor(() => {
        const optionElements = screen.getAllByRole("autocomplete-item")
        expect(optionElements).toHaveLength(3)
      })
    })
  })
})
