import { Text } from "@yamada-ui/react"
import { useTranslations } from "next-intl"
import { CONSTANTS } from "@/constants"

export interface EditPageButtonProps {
  path: string
}

export function EditPageButton({ path }: EditPageButtonProps) {
  const t = useTranslations("component.toc")

  return (
    <Text
      as="a"
      href={`${CONSTANTS.SNS.GITHUB.CONTENT_EDIT_URL}/${path}`}
      target="_blank"
      color={{ base: "fg.muted", _hover: "fg" }}
      fontSize="sm"
      rounded="l1"
      transitionDuration="moderate"
      transitionProperty="colors"
    >
      {t("edit")}
    </Text>
  )
}
