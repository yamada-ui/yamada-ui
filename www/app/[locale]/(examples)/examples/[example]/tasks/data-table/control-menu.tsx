"use client"
import type { IconButtonProps } from "@yamada-ui/react"
import { EllipsisIcon, For, IconButton, Menu } from "@yamada-ui/react"
import { memo } from "react"
import { LABEL } from "../data"

interface ControlMenuProps extends IconButtonProps {}

export const ControlMenu = memo<ControlMenuProps>(
  (props) => {
    return (
      <Menu.Root>
        <Menu.Trigger>
          <IconButton
            size="2xs"
            variant="ghost"
            icon={<EllipsisIcon />}
            onClick={(ev) => {
              ev.stopPropagation()
            }}
            {...props}
          />
        </Menu.Trigger>

        <Menu.Content
          onClick={(ev) => {
            ev.stopPropagation()
          }}
        >
          <Menu.Item>Edit</Menu.Item>
          <Menu.Item>Make a copy</Menu.Item>
          <Menu.Item>Favorite</Menu.Item>

          <Menu.Separator />

          <Menu.Item>
            <Menu.Root>
              <Menu.Trigger>
                <Menu.Item>Label</Menu.Item>
              </Menu.Trigger>

              <Menu.Content>
                <Menu.OptionGroup type="radio">
                  <For each={LABEL}>
                    {(value) => (
                      <Menu.OptionItem key={value} value={value}>
                        {value}
                      </Menu.OptionItem>
                    )}
                  </For>
                </Menu.OptionGroup>
              </Menu.Content>
            </Menu.Root>
          </Menu.Item>

          <Menu.Separator />

          <Menu.Item>
            Delete<Menu.Command>⌘⌫</Menu.Command>
          </Menu.Item>
        </Menu.Content>
      </Menu.Root>
    )
  },
  () => false,
)

ControlMenu.displayName = "ControlMenu"
