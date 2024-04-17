import {
  Spacer,
  Text,
  VStack,
  Divider,
  NativeSelect,
  NativeOption,
  Radio,
  HStack,
  Box,
} from "@yamada-ui/react"
import { memo } from "react"

const fonts = ["Inter", "Manrope", "System"]

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
          {fonts.map((font, index) => (
            <NativeOption key={index} value={font}>
              {font}
            </NativeOption>
          ))}
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
        <HStack>
          <Radio>
            <Box>aaa</Box>
          </Radio>
          <Radio></Radio>
        </HStack>
      </>
    </VStack>
  )
})

AppearanceForm.displayName = "AppearanceForm"
