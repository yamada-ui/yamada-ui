import { useLocale as useLocaleNextIntl } from "next-intl"
import { createNavigation } from "next-intl/navigation"
import { getLang } from "@/utils/i18n"
import { routing } from "./routing"

export const {
  getPathname,
  Link,
  permanentRedirect,
  redirect,
  usePathname,
  useRouter,
} = createNavigation(routing)

export function useLocale() {
  const locale = useLocaleNextIntl()
  const lang = getLang(locale)

  return { lang, locale }
}
