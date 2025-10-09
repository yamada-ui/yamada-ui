import { docs } from "@/.velite"

interface RouteContext {
  params: Promise<{ locale: string }>
}

export const dynamic = "force-static"

export async function GET(_request: Request, context: RouteContext) {
  const params = await context.params

  let content =
    "<SYSTEM>Documentation for all components in Yamada UI v2.</SYSTEM>\n\n"

  // Map URL locale to velite locale format
  const localeMap: { [key: string]: string } = {
    en: "en-US",
    ja: "ja-JP",
  }
  const targetLocale = localeMap[params.locale]

  const componentDocs = docs.filter(
    (doc) =>
      doc.slug.length > 0 &&
      doc.slug[0].startsWith("components") &&
      doc.locale === targetLocale,
  )

  for (const doc of componentDocs) {
    if (!doc.llm) continue
    content += `# ${doc.title}\n\n${doc.llm}\n\n`
  }

  return new Response(content, {
    headers: {
      "Cache-Control": "public, max-age=3600",
      "Content-Type": "text/plain; charset=utf-8",
    },
  })
}
