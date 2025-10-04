import type { IconButtonProps, UseMenuProps } from "@yamada-ui/react"
import type { ModalType } from "."
import { EllipsisIcon, IconButton, Menu } from "@yamada-ui/react"
import { memo } from "react"

export interface ControlButtonProps extends IconButtonProps {
  onOpen: (type: ModalType) => void
  menuProps?: UseMenuProps
}

export const ControlButton = memo<ControlButtonProps>(
  ({ menuProps, onOpen, ...rest }) => {
    return (
      <Menu.Root {...menuProps}>
        <Menu.Trigger>
          <IconButton icon={<EllipsisIcon fontSize="2xl" />} {...rest} />
        </Menu.Trigger>

        <Menu.Content>
          <Menu.Item
            display={{ base: "none", lg: "flex" }}
            onClick={() => onOpen("save")}
          >
            Save
          </Menu.Item>
          <Menu.Item
            display={{ base: "none", lg: "flex" }}
            onClick={() => onOpen("viewCode")}
          >
            View code
          </Menu.Item>
          <Menu.Item onClick={() => onOpen("filter")}>
            Content filter preferences
          </Menu.Item>
          <Menu.Item color="danger" onClick={() => onOpen("delete")}>
            Delete preset
          </Menu.Item>
        </Menu.Content>
      </Menu.Root>
    )
  },
)

ControlButton.displayName = "ControlButton"
