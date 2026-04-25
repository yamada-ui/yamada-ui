"use client"

import type { UrlObject } from "node:url"
import type { ComponentProps } from "react"
import { isObject } from "@yamada-ui/utils"
import { useLocale as useLocaleNextIntl } from "next-intl"
import { createNavigation } from "next-intl/navigation"
import { getLang } from "@/utils/i18n"
import { routing } from "./routing"

export const { Link, permanentRedirect, redirect, usePathname, useRouter } =
  createNavigation(routing)

export type LinkProps = ComponentProps<typeof Link>

export function getPathname(href: string | UrlObject) {
  if (isObject(href)) {
    return href.pathname ?? ""
  } else {
    return href
  }
}

export function useLocale() {
  const locale = useLocaleNextIntl()
  const lang = getLang(locale)

  return { lang, locale }
}
