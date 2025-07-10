import type { IconButtonProps, MenuProps } from "@yamada-ui/react"
import type { FC } from "react"
import type { ModalType } from "."
import { EllipsisIcon } from "@yamada-ui/lucide"
import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@yamada-ui/react"
import { memo } from "react"

export interface ControlButtonProps extends IconButtonProps {
  onOpen: (type: ModalType) => void
  menuProps?: MenuProps
}

export const ControlButton: FC<ControlButtonProps> = memo(
  ({ menuProps, onOpen, ...rest }) => {
    return (
      <Menu {...menuProps}>
        <MenuButton
          as={IconButton}
          icon={<EllipsisIcon fontSize="2xl" />}
          {...rest}
        />

        <MenuList>
          <MenuItem
            display={{ base: "none", lg: "flex" }}
            onClick={() => onOpen("save")}
          >
            Save
          </MenuItem>
          <MenuItem
            display={{ base: "none", lg: "flex" }}
            onClick={() => onOpen("viewCode")}
          >
            View code
          </MenuItem>
          <MenuItem onClick={() => onOpen("filter")}>
            Content filter preferences
          </MenuItem>
          <MenuItem color="danger" onClick={() => onOpen("delete")}>
            Delete preset
          </MenuItem>
        </MenuList>
      </Menu>
    )
  },
)

ControlButton.displayName = "ControlButton"
