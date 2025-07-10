import { hasLocale } from "next-intl"
import { getRequestConfig } from "next-intl/server"
import { getLang } from "@/utils/i18n"
import { routing } from "./routing"

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale
  const lang = getLang(locale)
  const messages = (await import(`../messages/${lang}.json`)).default

  return { locale, messages }
})
