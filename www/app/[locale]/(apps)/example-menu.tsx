"use client"

import type { StackProps } from "@yamada-ui/react"
import { For, HStack } from "@yamada-ui/react"
import { useTranslations } from "next-intl"
import { NextLink } from "@/components"
import { usePathname } from "@/i18n"

export type Example =
  | "authentication"
  | "examples"
  | "forms"
  | "mail"
  | "music"
  | "playground"

export interface ExampleMenuProps extends StackProps {}

export function ExampleMenu({ ...rest }: ExampleMenuProps) {
  const pathname = usePathname()
  const t = useTranslations("examples.menu")
  const [, currentSlug = "examples"] = pathname.split("/").slice(1)

  return (
    <HStack
      as="nav"
      gap="lg"
      maxW="full"
      overflowX="auto"
      scrollbarWidth="none"
      whiteSpace="nowrap"
      {...rest}
    >
      <For<Example>
        each={[
          "examples",
          "mail",
          "playground",
          "forms",
          "music",
          "authentication",
        ]}
      >
        {(slug, index) => (
          <NextLink
            key={index}
            href={slug === "examples" ? "/examples" : `/examples/${slug}`}
            color={
              slug === currentSlug ? "fg" : { base: "fg.muted", _hover: "fg" }
            }
            cursor="pointer"
            focusVisibleRing="inside"
            p="1"
            rounded="l2"
            textDecoration="none"
            transitionDuration="moderate"
            transitionProperty="colors"
          >
            {t(slug)}
          </NextLink>
        )}
      </For>
    </HStack>
  )
}
