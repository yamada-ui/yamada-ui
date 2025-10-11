export const dynamic = "force-static"

export const GET = () => {
  const documentSets = [
    {
      href: `https://v2.yamada-ui.com/llms-components.txt`,
      description: "Documentation for all components in Yamada UI v2.",
      title: "Components",
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
