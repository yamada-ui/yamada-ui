interface RouteContext {
  params: Promise<{ locale: string }>
}

export const dynamic = "force-static"

export const GET = async (_request: Request, context: RouteContext) => {
  const params = await context.params

  const documentSets = [
    {
      href: `https://v2.yamada-ui.com/${params.locale}/llms-full.txt`,
      description:
        "The complete Yamada UI v2 documentation including all components, hooks and styling and theming",
      title: "Complete documentation",
    },
    {
      href: `https://v2.yamada-ui.com/${params.locale}/llms-components.txt`,
      description: "Documentation for all components in Yamada UI v2.",
      title: "Components",
    },
    {
      href: `https://v2.yamada-ui.com/${params.locale}/llms-hooks.txt`,
      description: "Documentation for all hooks in Yamada UI v2.",
      title: "Hooks",
    },
    {
      href: `https://v2.yamada-ui.com/${params.locale}/llms-styling.txt`,
      description: "Documentation for the styling system in Yamada UI v2.",
      title: "Styling",
    },
    {
      href: `https://v2.yamada-ui.com/${params.locale}/llms-theming.txt`,
      description: "Documentation for theming Yamada UI v2.",
      title: "Theming",
    },
    {
      href: `https://v2.yamada-ui.com/${params.locale}/llms-community.txt`,
      description: "Documentation for the community around Yamada UI v2.",
      title: "Community",
    },
    {
      href: `https://v2.yamada-ui.com/${params.locale}/llms-changelog.txt`,
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

  return new Response(content)
}

const TEMPLATE = `
# Yamada UI v2 Documentation for LLMs

> Yamada UI is an accessible component system for building products with speed

## Documentation Sets

%DOCUMENT_SETS%
`
