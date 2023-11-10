import { faPencilAlt } from "@fortawesome/free-solid-svg-icons"
import { Icon } from "@yamada-ui/fontawesome"
import { HStack, StackProps, Text } from "@yamada-ui/react"
import { FC } from "react"
import { useI18n } from "contexts/i18n-context"

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
      <Icon icon={faPencilAlt} fontSize="0.8em" />

      <Text>{t("component.edit-page.label")}</Text>
    </HStack>
  )
}
