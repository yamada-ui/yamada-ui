import { Divider, HStack, Heading, Text, VStack } from "@yamada-ui/react"
import { memo, useCallback, useState } from "react"
import { SelectedForm } from "./selectedForm"
import { Sidebar } from "./sidebar"
// import { useI18n } from "contexts/i18n-context"

export type menuType =
  | "profile"
  | "account"
  | "appearance"
  | "notifications"
  | "display"

export const Forms = memo(() => {
  // const { t } = useI18n()
  const [selectedMenu, setSelectedMenu] = useState<menuType>("profile")
  const onChangeMenu = useCallback((menu: menuType) => {
    setSelectedMenu(menu)
  }, [])
  return (
    // <Center minH="lg">
    //   <Text color="muted">Coming soon!</Text>
    // </Center>
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
          {/* <VStack divider={<Divider />}> */}
          <SelectedForm selectedMenu={selectedMenu} />
          {/* </VStack> */}
        </HStack>
        {/* <Preset display={{ base: "none", md: "block" }} /> */}
      </VStack>
      {/* <Resizable>
        <ResizableItem>nav</ResizableItem>
        <ResizableItem>nav</ResizableItem>
      </Resizable> */}
    </>
  )
})

Forms.displayName = "Forms"
