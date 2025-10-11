import type { Example } from "../example-menu"
import { useTranslations } from "next-intl"
import { NextLink } from "@/components"
import { CONSTANTS } from "@/constants"

export interface SourceCodeLinkProps {
  page?: Example
}

export function SourceCodeLink({ page }: SourceCodeLinkProps) {
  const t = useTranslations("examples")

  return (
    <NextLink
      href={
        CONSTANTS.SNS.GITHUB.PROJECT +
        "/tree/main/www/app/%5Blocale%5D/(apps)/" +
        (page ? "examples/" + page : "examples")
      }
      alignSelf="center"
      color={{ base: "fg.muted", _hover: "fg" }}
      external
      fontSize="sm"
      textDecoration="none"
    >
      {t("source")}
    </NextLink>
  )
}
