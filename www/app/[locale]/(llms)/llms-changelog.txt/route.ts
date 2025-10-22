import { docs } from "@/.velite"
import { getLocale } from "@/utils/i18n"

export const dynamic = "force-static"

export async function GET(
  _request: Request,
  context: RouteContext<"/[locale]/llms-changelog.txt">,
) {
  const params = await context.params

  const changelogDocs = docs.filter(
    (doc) =>
      doc.slug[0] === "changelog" && doc.locale === getLocale(params.locale),
  )

  const content = [
    "<SYSTEM>Documentation for the change log of Yamada UI v2.</SYSTEM>",
    ...changelogDocs.map((doc) => `# ${doc.title}\n\n${doc.llm}`),
    "",
  ].join("\n\n")

  return new Response(content, {
    headers: {
      "Cache-Control": "public, max-age=3600",
      "Content-Type": "text/plain; charset=utf-8",
    },
  })
}
