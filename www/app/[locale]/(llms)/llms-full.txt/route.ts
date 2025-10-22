import { docs } from "@/.velite"

export const dynamic = "force-static"

export function GET() {
  let content =
    "<SYSTEM>This is the full developer documentation for Yamada UI v2.</SYSTEM>\n\n"

  for (const doc of docs) {
    if (!doc.llm || doc.llm.length === 0) continue
    content += `# ${doc.title}\n\n${doc.llm}\n\n`
  }

  return new Response(content, {
    headers: {
      "Cache-Control": "public, max-age=3600",
      "Content-Type": "text/plain; charset=utf-8",
    },
  })
}
