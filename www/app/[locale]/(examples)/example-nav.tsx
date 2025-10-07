import { For, HStack, ScrollArea, toTitleCase } from "@yamada-ui/react"
import { NextLink } from "@/components"
import { SLUGS } from "./data"
import { ThemeMenu } from "./theme-menu"

interface ExampleNavProps {
  example: (typeof SLUGS)[number]
}

export const ExampleNav = ({ example }: ExampleNavProps) => {
  return (
    <HStack justifyContent="space-between" px="4" py="2">
      <ScrollArea>
        <HStack gap="xl">
          <For each={SLUGS}>
            {(slug) => (
              <NextLink
                key={slug}
                href={slug === "example" ? "/" : `/examples/${slug}`}
                colorScheme={slug === example ? "primary" : "gray"}
              >
                {toTitleCase(slug)}
              </NextLink>
            )}
          </For>
        </HStack>
      </ScrollArea>
      <ThemeMenu />
    </HStack>
  )
}
