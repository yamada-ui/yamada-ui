import type { Doc } from "@/.velite"
import { redirect } from "next/navigation"
import { docs } from "@/.velite"

interface RouteContext {
  params: Promise<{ locale: string; slug: string[] }>
}

function getLlmContent(doc: Doc, locale: string) {
  const sourceUrl = `https://v2.yamada-ui.com/${locale}${doc.pathname}.mdx`

  const category = doc.slug[0]
  const header = `# ${category} > ${doc.title}

  URL: ${doc.pathname}
  Source: ${sourceUrl}

  ${doc.description}

  ***

  title: ${doc.title}
  description: ${doc.description}
  links:
${doc.source ? `- source: ${doc.source}` : ""}
${doc.style ? `- style: ${doc.style}` : ""}
${doc.storybook ? `- storybook: ${doc.storybook}` : ""}
  ------------------------------------------------------------------------------------------------

  `
  return `${header}${doc.llm}`
}

export async function GET(_request: Request, context: RouteContext) {
  const params = await context.params

  // Check if the slug includes .mdx to return LLM content
  const isLlmRequest = params.slug[0]?.includes(".mdx")
  if (!isLlmRequest) {
    return redirect(`/${params.locale}/llms.txt`)
  }

  // Remove .mdx from slug segments for matching
  const cleanSlug = params.slug[0]?.replace(".mdx", "")
  const targetPath = ["components", cleanSlug].join("/")

  // Map URL locale to velite locale format
  const localeMap: { [key: string]: string } = {
    en: "en-US",
    ja: "ja-JP",
  }
  const targetLocale = localeMap[params.locale]

  const page = docs.find((doc) => {
    const docPath = doc.slug.join("/")
    return docPath === targetPath && doc.locale === targetLocale
  })

  if (!page?.llm) {
    return redirect(`/${params.locale}/llms.txt`)
  }

  // Return the MDX content as plain text
  return new Response(getLlmContent(page, params.locale), {
    headers: {
      "Cache-Control": "public, max-age=3600",
      "Content-Type": "text/plain; charset=utf-8",
    },
  })
}
