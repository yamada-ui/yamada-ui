import { Divider, HStack, Heading, Text, VStack } from "@yamada-ui/react"
import { memo, useCallback, useState } from "react"
import { SelectedForm } from "./selectedForm"
import { Sidebar } from "./sidebar"

export type menuType =
  | "profile"
  | "account"
  | "appearance"
  | "notifications"
  | "display"

export const Forms = memo(() => {
  const [selectedMenu, setSelectedMenu] = useState<menuType>("profile")
  const onChangeMenu = useCallback((menu: menuType) => {
    setSelectedMenu(menu)
  }, [])
  return (
    <>
      <VStack
        divider={<Divider />}
        borderBottomWidth="1px"
        px={{ base: "lg", sm: "md" }}
        py="md"
        // {...rest}
      >
        <HStack>
          <VStack>
            <Heading as="h2" size="normal">
              Settings
            </Heading>
            <Text color="muted">
              Manage your account settings and set e-mail preferences.
            </Text>
          </VStack>
        </HStack>
        <HStack alignItems="flex-start">
          <Sidebar onChangeMenu={onChangeMenu} />
          <SelectedForm selectedMenu={selectedMenu} />
        </HStack>
      </VStack>
    </>
  )
})

Forms.displayName = "Forms"
