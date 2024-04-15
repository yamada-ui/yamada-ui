import {
  Button,
  Checkbox,
  Icon,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Text,
} from "@yamada-ui/react"
import type { Dispatch, FC, SetStateAction } from "react"
import { BsToggles } from "react-icons/bs"

interface ViewProps {
  displayColumns: Record<"title" | "status" | "priority", boolean>
  setDisplayColumns: Dispatch<
    SetStateAction<Record<"title" | "status" | "priority", boolean>>
  >
}

export const View: FC<ViewProps> = ({ displayColumns, setDisplayColumns }) => {
  const handleCheck = (key: string) => {
    if (["title", "status", "priority"].includes(key)) {
    }
    setDisplayColumns((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  return (
    <Menu closeOnSelect={false}>
      <MenuButton
        as={Button}
        size="sm"
        variant="outline"
        colorScheme="neutral"
        leftIcon={<Icon as={BsToggles} />}
      >
        Menu
      </MenuButton>
      <MenuList>
        <MenuGroup px={4}>
          <Text fontSize="sm" fontWeight="bold">
            Toggle columns
          </Text>
        </MenuGroup>
        <MenuDivider />
        {Object.entries(displayColumns).map(([key, value]) => (
          <MenuItem key={key} p={0}>
            <Checkbox
              isChecked={value}
              onChange={() => handleCheck(key)}
              px={3}
              py={2}
              w="100%"
              labelProps={{ w: "100%" }}
            >
              <Text fontSize="sm">
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </Text>
            </Checkbox>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}
