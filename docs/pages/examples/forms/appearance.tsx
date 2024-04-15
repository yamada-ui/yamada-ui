import {
  Spacer,
  Text,
  VStack,
  Divider,
  NativeSelect,
  NativeOption,
} from "@yamada-ui/react"
import { memo } from "react"

export const AppearanceForm = memo(() => {
  return (
    <VStack divider={<Divider />}>
      <>
        <Text as="h5" fontSize="xl">
          Appearance
        </Text>
        <Text as="p" color="muted" fontSize="xs">
          Customize the appearance of the app. Automatically switch between day
          and night themes.
        </Text>
      </>
      <>
        <Text as="h6" fontSize="sm">
          Font
        </Text>
        <NativeSelect width="xs">
          <NativeOption value="Inter">Inter</NativeOption>
          <NativeOption value="Manrope">Manrope</NativeOption>
          <NativeOption value="System">System</NativeOption>
        </NativeSelect>
        <Text as="p" color="muted" fontSize="xs">
          Set the font you want to use in the dashboard.
        </Text>
        <Spacer />
        <Text as="h6" fontSize="sm">
          Theme
        </Text>
        <Text as="p" color="muted" fontSize="xs">
          Select the theme for the dashboard.
        </Text>
      </>
    </VStack>
  )
})

AppearanceForm.displayName = "AppearanceForm"
