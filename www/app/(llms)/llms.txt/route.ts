import type { DocMap } from "@/data"
import { docs } from "#velite"
import { CONSTANTS } from "@/constants"
import docMap from "@/data/doc-map.en.json"

export const dynamic = "force-static"

function flattenItems(items: DocMap[] = []): DocMap[] {
  return items
    .flatMap(({ items, ...rest }) => [rest, ...flattenItems(items)])
    .filter(({ pathname }) => !!pathname)
}

const descriptions = Object.fromEntries(
  docs
    .filter(({ locale }) => locale === CONSTANTS.I18N.DEFAULT_LOCALE)
    .map(({ description, pathname }) => [pathname, description]),
)
const excludedItems = docMap.items!.filter(
  ({ segment }) => !CONSTANTS.LLMS.EXCLUDE.includes(segment),
)
const content = [
  "# Yamada UI v2 Documentation for LLMs",
  `> Provides a design system that delivers beautiful, consistent, accessible components and advanced styling. Bring your ideas to life.`,
  "## Full Documentation",
  [
    {
      description: "Full documentation of Yamada UI v2.",
      pathname: "/llms-full.txt",
      title: "Full",
    },
    {
      description: "Documentation for the Get Started of Yamada UI v2.",
      pathname: "/llms/get-started.txt",
      title: "Get Started",
    },
    {
      description: "Documentation for the Components of Yamada UI v2.",
      pathname: "/llms/components.txt",
      title: "Components",
    },
    {
      description: "Documentation for the Hooks of Yamada UI v2.",
      pathname: "/llms/hooks.txt",
      title: "Hooks",
    },
    {
      description: "Documentation for the Styling of Yamada UI v2.",
      pathname: "/llms/styling.txt",
      title: "Styling",
    },
    {
      description: "Documentation for the Theming of Yamada UI v2.",
      pathname: "/llms/theming.txt",
      title: "Theming",
    },
  ]
    .map(
      ({ description, pathname, title }) =>
        `- [${title}](${CONSTANTS.SNS.HOMEPAGE}${pathname}): ${description}`,
    )
    .join("\n"),
  "## Overview",
  excludedItems
    .map(
      ({ pathname, title }) =>
        `- [${title}](${CONSTANTS.SNS.HOMEPAGE}${pathname}.md): ${descriptions[pathname]}`,
    )
    .join("\n"),
  ...excludedItems.flatMap(({ items, title }) => [
    `## ${title}`,
    flattenItems(items as DocMap[])
      .map(
        ({ pathname, title }) =>
          `- [${title}](${CONSTANTS.SNS.HOMEPAGE}${pathname}.md): ${descriptions[pathname!]}`,
      )
      .join("\n"),
  ]),
].join("\n\n")

export function GET() {
  return new Response(content, {
    headers: {
      "Cache-Control": "public, max-age=3600",
      "Content-Type": "text/plain; charset=utf-8",
    },
  })
}
