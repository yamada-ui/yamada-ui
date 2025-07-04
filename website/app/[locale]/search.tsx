import { HStack, IconButton, Kbd, SearchIcon, Text } from "@yamada-ui/react"
import { useTranslations } from "next-intl"

export function Search() {
  const t = useTranslations("component.search")

  return (
    <>
      <HStack
        as="button"
        type="button"
        bg={["bg.subtle/40", "bg.subtle"]}
        color={{ base: "fg.muted", _hover: "fg.emphasized" }}
        cursor="pointer"
        display={{ base: "flex", lg: "none" }}
        h="8"
        minW="fit-content"
        px="sm"
        rounded="l2"
        transitionDuration="moderate"
        transitionProperty="colors"
      >
        <Text flex="1" fontSize="sm" lineClamp={1}>
          {t("placeholder")}
        </Text>

        <HStack gap="xs">
          <Kbd size="sm" variant="surface" fontSize="sm">
            ⌘
          </Kbd>
          <Kbd size="sm" variant="surface">
            K
          </Kbd>
        </HStack>
      </HStack>

      <IconButton
        aria-label={t("placeholder")}
        color="fg.emphasized"
        display={{ base: "none", lg: "flex" }}
        icon={<SearchIcon />}
      />
    </>
  )
}
