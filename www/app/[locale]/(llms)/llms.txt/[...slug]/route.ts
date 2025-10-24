import type { Doc } from "@/.velite"
import { redirect } from "next/navigation"
import { docs } from "@/.velite"
import { getLang, getLocale } from "@/utils/i18n"
import { BASE_URL } from "../../_constant"

interface RouteContext {
  params: Promise<{ locale: string; slug: string[] }>
}

function getLlmContent(doc: Doc, locale: string) {
  const lang = getLang(locale)
  const sourceUrl = `${BASE_URL}/${lang}${doc.pathname}.mdx`
  const pathname = doc.pathname.startsWith("/")
    ? doc.pathname.substring(1)
    : doc.pathname
  const category = doc.slug[0] ?? ""

  const links = [
    doc.source && `- source: ${doc.source}`,
    doc.style && `- style: ${doc.style}`,
    doc.storybook && `- storybook: ${doc.storybook}`,
  ]
    .filter(Boolean)
    .join("\n")

  const header = `# ${category} > ${doc.title}

URL: ${pathname}
Source: ${sourceUrl}

${doc.description}

***

title: ${doc.title}
description: ${doc.description}
${links ? `links:\n${links}` : ""}
------------------------------------------------------------------------------------------------

`
  return `${header}${doc.llm}`
}

export async function GET(_request: Request, context: RouteContext) {
  const params = await context.params

  const isLlmRequest = params.slug[params.slug.length - 1]?.includes(".mdx")
  if (!isLlmRequest) {
    return redirect(`/${params.locale}/llms.txt`)
  }

  const cleanSlug = params.slug.map((segment) => segment.replace(".mdx", ""))
  const targetPath = [...cleanSlug].join("/")

  const page = docs.find((doc) => {
    const docPath = doc.slug.join("/")
    return docPath === targetPath && doc.locale === getLocale(params.locale)
  })

  if (!page?.llm || page.llm.trim() === "") {
    return redirect(`/${params.locale}/llms.txt`)
  }

  return new Response(getLlmContent(page, params.locale), {
    headers: {
      "Cache-Control": "public, max-age=3600",
      "Content-Type": "text/plain; charset=utf-8",
    },
  })
}
