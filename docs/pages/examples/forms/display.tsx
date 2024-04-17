import {
  Spacer,
  Text,
  VStack,
  Divider,
  Checkbox,
  Button,
} from "@yamada-ui/react"
import { memo } from "react"

const checkboxElements = [
  "Recents",
  "Home",
  "Applications",
  "Desktop",
  "Downloads",
  "Documents",
]

export const DisplayForm = memo(() => {
  return (
    <VStack divider={<Divider />}>
      <>
        <Text as="h5" fontSize="xl">
          Display
        </Text>
        <Text as="p" color="muted" fontSize="xs">
          Turn items on or off to control what's displayed in the app.
        </Text>
      </>
      <>
        <Text as="h6" fontSize="sm">
          Sidebar
        </Text>
        <Text as="p" color="muted" fontSize="xs">
          Select the items you want to display in the sidebar.
        </Text>
        <VStack gap={0}>
          {checkboxElements.map((checkboxElement, index) => (
            <Checkbox key={index}>{checkboxElement}</Checkbox>
          ))}
        </VStack>
        <Spacer />
        <Button
          width="xs"
          bgColor="black"
          color="white"
          _hover={{ bgColor: "black" }}
        >
          Update profile
        </Button>
      </>
    </VStack>
  )
})

DisplayForm.displayName = "DisplayForm"
