import { Pencil } from "@yamada-ui/lucide"
import { HStack, Text } from "@yamada-ui/react"
import type { StackProps } from "@yamada-ui/react"
import { useI18n } from "contexts"
import type { FC } from "react"

export type EditPageLinkProps = StackProps & { href?: string }

export const EditPageLink: FC<EditPageLinkProps> = ({ href, ...rest }) => {
  const { t } = useI18n()

  return (
    <HStack
      as="a"
      href={href}
      target="_blank"
      mt="xl"
      alignSelf="flex-start"
      gap="sm"
      fontSize="sm"
      color="muted"
      _focus={{ outline: "none" }}
      _focusVisible={{ boxShadow: "outline" }}
      _hover={{ color: ["black", "white"] }}
      transitionProperty="colors"
      transitionDuration="normal"
      {...rest}
    >
      <Pencil />

      <Text>{t("component.edit-page.label")}</Text>
    </HStack>
  )
}
