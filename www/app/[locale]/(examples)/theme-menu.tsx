"use client"

import { Button, ChevronDownIcon, For, Menu } from "@yamada-ui/react"
import { toTitleCase } from "@yamada-ui/utils"
import { exampleThemeMethods, useExampleTheme } from "./examples/context"
import { COLORS, THEME } from "./examples/data"

export const ThemeMenu = () => {
  const value = useExampleTheme()
  return (
    <Menu.Root size="sm">
      <Menu.Trigger>
        <Button
          size="xs"
          variant="subtle"
          justifyContent="space-between"
          w="36"
        >
          {`Theme: ${toTitleCase(value)}`}
          <ChevronDownIcon />
        </Button>
      </Menu.Trigger>
      <Menu.Content>
        <Menu.OptionGroup
          type="radio"
          value={value}
          onChange={exampleThemeMethods.set}
        >
          <For each={THEME}>
            {(theme) => (
              <Menu.OptionItem key={theme} value={theme}>
                {toTitleCase(theme)}
              </Menu.OptionItem>
            )}
          </For>
          <Menu.Separator />
          <Menu.Label>Colors</Menu.Label>
          <For each={COLORS}>
            {(color) => (
              <Menu.OptionItem key={color} value={color}>
                {toTitleCase(color)}
              </Menu.OptionItem>
            )}
          </For>
        </Menu.OptionGroup>
      </Menu.Content>
    </Menu.Root>
  )
}
