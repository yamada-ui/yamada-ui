import { a11y } from "#test"
import { Button } from "../button"
import { Menu } from "./"

const items: Menu.Item[] = [
  { label: "Menu 1", value: "menu-1" },
  { label: "Menu 2", value: "menu-2" },
  { label: "Menu 3", value: "menu-3" },
  { type: "separator" },
  {
    items: [
      { label: "Menu 4", value: "menu-4" },
      { label: "Menu 5", value: "menu-5" },
      { label: "Menu 6", value: "menu-6" },
    ],
    label: "Group",
    labelProps: { "data-testid": "label" },
  },
]

const itemsWithRadioGroup: Menu.Item[] = [
  {
    type: "radio",
    items: [
      { label: "Option 1", value: "option-1" },
      { label: "Option 2", value: "option-2" },
      { label: "Option 3", value: "option-3" },
    ],
  },
]

const itemsWithCheckboxGroup: Menu.Item[] = [
  {
    type: "checkbox",
    items: [
      { label: "Option 1", value: "option-1" },
      { label: "Option 2", value: "option-2" },
      { label: "Option 3", value: "option-3" },
    ],
  },
]

describe("<Menu />", () => {
  test("renders component correctly", async () => {
    await a11y(
      <Menu.Root defaultOpen>
        <Menu.Trigger>
          <Button>Menu</Button>
        </Menu.Trigger>

        <Menu.Content
          items={[
            ...items,
            { type: "separator" },
            ...itemsWithRadioGroup,
            { type: "separator" },
            ...itemsWithCheckboxGroup,
          ]}
        />
      </Menu.Root>,
    )
  })
})
