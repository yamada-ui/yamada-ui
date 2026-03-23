import { docs } from "#velite"
import { getLocale } from "@/utils/i18n"

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
  const params = await context.params
  const slug = params.slug
  const locale = getLocale(params.locale)
  const lastSegment = slug.at(-1)!

  if (!lastSegment.includes(".md")) return new Response(null, { status: 404 })

  slug[slug.length - 1] = lastSegment.split(".")[0]!

  const doc = getDoc(locale, slug)

  if (!doc?.md) return new Response(null, { status: 404 })

  return new Response(doc.md, {
    headers: {
      "Cache-Control": "public, max-age=3600",
      "Content-Type": "text/plain; charset=utf-8",
    },
  })
}
