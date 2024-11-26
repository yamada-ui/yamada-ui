import type { StackProps } from "@yamada-ui/react"
import type { FC } from "react"
import { PencilIcon } from "@yamada-ui/lucide"
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
      href={href}
      target="_blank"
      alignSelf="flex-start"
      color="muted"
      fontSize="sm"
      gap="sm"
      mt="xl"
      transitionDuration="normal"
      transitionProperty="colors"
      _focus={{ outline: "none" }}
      _focusVisible={{ boxShadow: "outline" }}
      _hover={{ color: ["black", "white"] }}
      {...rest}
    >
      <PencilIcon />

      <Text>{t("component.edit-page.label")}</Text>
    </HStack>
  )
}
