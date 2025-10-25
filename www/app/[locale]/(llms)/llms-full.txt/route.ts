import { docs } from "@/.velite"

export const dynamic = "force-static"

export function GET() {
  // Filter and sort documents for consistent LLM comprehension
  const filteredDocs = docs
    .filter((doc) => doc.llm && doc.llm.length > 0)
    .sort((a, b) => {
      const slugA = a.slug.join("/")
      const slugB = b.slug.join("/")
      return slugA.localeCompare(slugB)
    })

  const content = [
    "<SYSTEM>This is the full developer documentation for Yamada UI v2.</SYSTEM>",
    ...filteredDocs.map((doc) => `# ${doc.title}\n\n${doc.llm}`),
    "",
  ].join("\n\n")

  return new Response(content, {
    headers: {
      "Cache-Control": "public, max-age=3600",
      "Content-Type": "text/plain; charset=utf-8",
    },
  })
}
