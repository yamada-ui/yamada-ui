import { For, HStack, toTitleCase } from "@yamada-ui/react"
import { NextLink } from "@/components"
import { SLUGS } from "./data"

interface ExampleNavProps {
  example: (typeof SLUGS)[number]
}

export const ExampleNav = ({ example }: ExampleNavProps) => {
  return (
    <HStack>
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
  )
}
