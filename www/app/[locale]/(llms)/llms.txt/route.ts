import { BASE_URL } from "../_constant"

export const dynamic = "force-static"

export const GET = async (
  _request: Request,
  context: RouteContext<"/[locale]/llms.txt">,
) => {
  const params = await context.params

  const documentSets = [
    {
      href: `${BASE_URL}/${params.locale}/llms-full.txt`,
      description:
        "The complete Yamada UI v2 documentation including all components, hooks, styling, and theming",
      title: "Complete documentation",
    },
    {
      href: `${BASE_URL}/${params.locale}/llms-components.txt`,
      description: "Documentation for all components in Yamada UI v2.",
      title: "Components",
    },
    {
      href: `${BASE_URL}/${params.locale}/llms-hooks.txt`,
      description: "Documentation for all hooks in Yamada UI v2.",
      title: "Hooks",
    },
    {
      href: `${BASE_URL}/${params.locale}/llms-styling.txt`,
      description: "Documentation for the styling system in Yamada UI v2.",
      title: "Styling",
    },
    {
      href: `${BASE_URL}/${params.locale}/llms-theming.txt`,
      description: "Documentation for theming Yamada UI v2.",
      title: "Theming",
    },
    {
      href: `${BASE_URL}/${params.locale}/llms-community.txt`,
      description: "Documentation for the community around Yamada UI v2.",
      title: "Community",
    },
    {
      href: `${BASE_URL}/${params.locale}/llms-changelog.txt`,
      description: "Documentation for the change log of Yamada UI v2.",
      title: "Changelog",
    },
  ]

  const content = TEMPLATE.replace(
    "%DOCUMENT_SETS%",
    documentSets
      .map((set) => `- [${set.title}](${set.href}): ${set.description}`)
      .join("\n"),
  )

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  })
}

const TEMPLATE = `
# Yamada UI v2 Documentation for LLMs

> Yamada UI is an accessible component system for building products with speed

## Documentation Sets

%DOCUMENT_SETS%
`
