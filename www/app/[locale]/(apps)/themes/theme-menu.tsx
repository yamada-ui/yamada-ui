"use client"

import type { StackProps, ThemeScheme } from "@yamada-ui/react"
import { For, HStack, Text, useTheme } from "@yamada-ui/react"
import { useTranslations } from "next-intl"

export interface ThemeMenuProps extends StackProps {}

export function ThemeMenu({ ...rest }: ThemeMenuProps) {
  const { changeThemeScheme, themeScheme } = useTheme()
  const t = useTranslations("themes.menu")

  return (
    <HStack
      as="nav"
      gap="lg"
      maxW="full"
      overflowX="auto"
      scrollbarWidth="none"
      whiteSpace="nowrap"
      {...rest}
    >
      <For
        each={[
          "base",
          "blue",
          "red",
          "orange",
          "yellow",
          "green",
          "violet",
          "pink",
        ]}
      >
        {(value, index) => (
          <Text
            key={index}
            as="button"
            type="button"
            color={
              value === themeScheme ? "fg" : { base: "fg.muted", _hover: "fg" }
            }
            cursor="pointer"
            focusVisibleRing="inside"
            p="1"
            rounded="l2"
            textDecoration="none"
            transitionDuration="moderate"
            transitionProperty="colors"
            onClick={() => changeThemeScheme(value as unknown as ThemeScheme)}
          >
            {t(value)}
          </Text>
        )}
      </For>
    </HStack>
  )
}
