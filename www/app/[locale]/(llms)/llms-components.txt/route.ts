import { docs } from "@/.velite"
import { getLocale } from "@/utils/i18n"

export const dynamic = "force-static"

export async function GET(
  _request: Request,
  context: RouteContext<"/[locale]/llms-components.txt">,
) {
  const params = await context.params

  const componentDocs = docs
    .filter(
      (doc) =>
        doc.slug[0] === "components" && doc.locale === getLocale(params.locale),
    )
    .sort((a, b) => {
      const slugA = a.slug.join("/")
      const slugB = b.slug.join("/")
      return slugA.localeCompare(slugB)
    })

  const content = [
    "<SYSTEM>Documentation for all components in Yamada UI v2.</SYSTEM>",
    ...componentDocs.map((doc) => `# ${doc.title}\n\n${doc.llm}`),
    "",
  ].join("\n\n")

  return new Response(content, {
    headers: {
      "Cache-Control": "public, max-age=3600",
      "Content-Type": "text/plain; charset=utf-8",
    },
  })
}
