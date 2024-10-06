import type { StackProps } from "@yamada-ui/react"
import type { FC } from "react"
import { Pencil } from "@yamada-ui/lucide"
import { HStack, Text } from "@yamada-ui/react"
import { useI18n } from "contexts"

export interface EditPageLinkProps extends StackProps {
  href?: string
}

export const EditPageLink: FC<EditPageLinkProps> = ({ href, ...rest }) => {
  const { t } = useI18n()

  return (
    <HStack
      as="a"
      _focus={{ outline: "none" }}
      _focusVisible={{ boxShadow: "outline" }}
      _hover={{ color: ["black", "white"] }}
      alignSelf="flex-start"
      color="muted"
      fontSize="sm"
      gap="sm"
      href={href}
      mt="xl"
      target="_blank"
      transitionDuration="normal"
      transitionProperty="colors"
      {...rest}
    >
      <Pencil />

      <Text>{t("component.edit-page.label")}</Text>
    </HStack>
  )
}
