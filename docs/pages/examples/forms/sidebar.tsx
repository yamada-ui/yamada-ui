import { Button, VStack } from "@yamada-ui/react"
import { memo } from "react"
import type { FC } from "react"
import type { menuType } from "."

export type MenuProps = {
  onChangeMenu: (menu: menuType) => void
}

export const Sidebar: FC<MenuProps> = memo(({ onChangeMenu }) => {
  return (
    <VStack as="nav" width="xs" alignContent="flex-start">
      <Button
        onClick={() => onChangeMenu("profile")}
        _hover={{ textDecoration: "underline" }}
      >
        Profile
      </Button>
      <Button
        onClick={() => onChangeMenu("account")}
        _hover={{ textDecoration: "underline" }}
      >
        Account
      </Button>
      <Button
        onClick={() => onChangeMenu("appearance")}
        _hover={{ textDecoration: "underline" }}
      >
        Appearance
      </Button>
      <Button
        onClick={() => onChangeMenu("notifications")}
        _hover={{ textDecoration: "underline" }}
      >
        Notifications
      </Button>
      <Button
        onClick={() => onChangeMenu("display")}
        _hover={{ textDecoration: "underline" }}
      >
        Display
      </Button>
    </VStack>
  )
})

Sidebar.displayName = "Sidebar"
