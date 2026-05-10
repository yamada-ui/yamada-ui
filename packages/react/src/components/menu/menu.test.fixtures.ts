import type { Menu } from "./"

export const items: Menu.Item[] = [
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

export const itemsWithRadioGroup: Menu.Item[] = [
  {
    type: "radio",
    items: [
      { label: "Option 1", value: "option-1" },
      { label: "Option 2", value: "option-2" },
      { label: "Option 3", value: "option-3" },
    ],
  },
]

export const itemsWithCheckboxGroup: Menu.Item[] = [
  {
    type: "checkbox",
    items: [
      { label: "Option 1", value: "option-1" },
      { label: "Option 2", value: "option-2" },
      { label: "Option 3", value: "option-3" },
    ],
  },
]

export const fullItems: Menu.Item[] = [
  ...items,
  { type: "separator" },
  ...itemsWithRadioGroup,
  { type: "separator" },
  ...itemsWithCheckboxGroup,
]
