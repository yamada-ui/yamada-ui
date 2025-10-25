import { docs } from "@/.velite"
import { getLocale } from "@/utils/i18n"

export const dynamic = "force-static"

export async function GET(
  _request: Request,
  context: RouteContext<"/[locale]/llms-theming.txt">,
) {
  const params = await context.params

  const themingDocs = docs.filter(
    (doc) =>
      doc.slug.length > 0 &&
      doc.slug[0] === "theming" &&
      doc.locale === getLocale(params.locale) &&
      doc.llm,
  )

  const content = [
    "<SYSTEM>Documentation for theming Yamada UI v2.</SYSTEM>",
    ...themingDocs.map((doc) => `# ${doc.title}\n\n${doc.llm}`),
    "",
  ].join("\n\n")

  return new Response(content, {
    headers: {
      "Cache-Control": "public, max-age=3600",
      "Content-Type": "text/plain; charset=utf-8",
    },
  })
}
