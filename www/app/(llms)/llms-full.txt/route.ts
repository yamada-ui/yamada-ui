import { docs } from "#velite"
import { CONSTANTS } from "@/constants"

export const dynamic = "force-static"

const content = [
  "<SYSTEM>This is the full developer documentation for Yamada UI v2.</SYSTEM>",
  ...docs
    .filter(
      ({ md, locale }) => !!md && locale === CONSTANTS.I18N.DEFAULT_LOCALE,
    )
    .map(({ md, title }) => `# ${title}\n\n${md}`),
].join("\n\n")

export function GET() {
  return new Response(content, {
    headers: {
      "Cache-Control": "public, max-age=3600",
      "Content-Type": "text/plain; charset=utf-8",
    },
  })
}
