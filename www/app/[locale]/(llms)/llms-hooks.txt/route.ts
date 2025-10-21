import { docs } from "@/.velite"
import { getLocale } from "@/utils/i18n"

interface RouteContext {
  params: Promise<{ locale: string }>
}

export const dynamic = "force-static"

export async function GET(_request: Request, context: RouteContext) {
  const params = await context.params

  const hookDocs = docs.filter(
    (doc) =>
      doc.slug[0] === "hooks" && doc.locale === getLocale(params.locale),
  )

  const content = [
    "<SYSTEM>Documentation for all hooks in Yamada UI v2.</SYSTEM>",
    ...hookDocs.map((doc) => `# ${doc.title}\n\n${doc.llm}`),
    "",
  ].join("\n\n")

  return new Response(content, {
    headers: {
      "Cache-Control": "public, max-age=3600",
      "Content-Type": "text/plain; charset=utf-8",
    },
  })
}
