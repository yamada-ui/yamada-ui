import { docs } from "#velite"
import { CONSTANTS } from "@/constants"

export const dynamic = "force-static"

export async function GET(
  _request: Request,
  context: RouteContext<"/llms/[slug]">,
) {
  const params = await context.params

  if (!params.slug.includes(".txt")) return new Response(null, { status: 404 })

  const [slug] = params.slug.split(".")
  const targetDocs = docs
    .filter(
      (doc) =>
        doc.slug[0] === slug && doc.locale === CONSTANTS.I18N.DEFAULT_LOCALE,
    )
    .sort((a, b) => {
      if (a.slug.length === 1 && b.slug.length !== 1) return -1
      if (a.slug.length !== 1 && b.slug.length === 1) return 1

      return 0
    })
  const { title } = targetDocs.find((doc) => doc.slug.length === 1) ?? {}

  if (!title) return new Response(null, { status: 404 })

  const content = [
    `<SYSTEM>Documentation for the ${title} of Yamada UI v2.</SYSTEM>`,
    ...targetDocs.map(
      ({ md, slug, title }) =>
        `# ${slug.length === 1 ? "Overview" : title}\n\n${md}`,
    ),
  ].join("\n\n")

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  })
}
