import { docs } from "#velite"
import { CONSTANTS } from "@/constants"
import { getLang } from "@/utils/i18n"

export const dynamic = "force-static"

function getDoc(locale: string, slug: string[]) {
  return docs.find(
    (doc) => doc.locale === locale && doc.slug.join("/") === slug.join("/"),
  )
}

export async function GET(
  _request: Request,
  context: RouteContext<"/[locale]/llms/[...slug]">,
) {
  const { locale: lang, slug } = await context.params
  const locale = CONSTANTS.I18N.LOCALES.find(
    (locale) => locale === lang || getLang(locale) === lang,
  )
  const lastSegment = slug.at(-1)

  if (!locale || !lastSegment?.endsWith(".md"))
    return new Response(null, { status: 404 })

  const doc = getDoc(locale, [...slug.slice(0, -1), lastSegment.slice(0, -3)])

  if (!doc?.md) return new Response(null, { status: 404 })

  return new Response(doc.md, {
    headers: {
      "Cache-Control": "public, max-age=3600",
      "Content-Type": "text/plain; charset=utf-8",
      "X-Robots-Tag": "noindex",
    },
  })
}
