"use client"

import type { Doc } from "#velite"
import type { RefObject } from "react"
import {
  Link,
  Separator,
  Text,
  useEventListener,
  useUpdateEffect,
  VStack,
} from "@yamada-ui/react"
import { useMotionValueEvent, useScroll } from "motion/react"
import { useTranslations } from "next-intl"
import { createRef, useMemo, useRef, useState } from "react"
import scrollIntoView from "scroll-into-view-if-needed"
import { BASE_URL } from "@/app/[locale]/(llms)/_constant"
import { getLang } from "@/utils/i18n"
import { EditPageButton } from "./edit-page-button"
import { LlmsLink } from "./llms-link"
import { ScrollToTopButton } from "./scroll-to-top-button"

interface FlattenTocEntry extends Omit<Doc["toc"][number], "items"> {
  depth: number
}

function flattenToc(toc: Doc["toc"], depth = 0): FlattenTocEntry[] {
  return toc.flatMap(({ items = [], ...rest }) => [
    { ...rest, depth },
    ...flattenToc(items, depth + 1),
  ])
}

export interface TocProps extends Doc {}

export function Toc({ locale, path, pathname, slug, toc }: TocProps) {
  const t = useTranslations("component.toc")
  const [currentId, setCurrentId] = useState<string>("")
  const containerRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<Map<string, RefObject<HTMLAnchorElement | null>>>(
    new Map(),
  )
  const { scrollY } = useScroll()
  const prevValue = useRef(0)
  const directionRef = useRef<"down" | "up">("down")
  const flattenedToc = useMemo(() => flattenToc(toc), [toc])

  useMotionValueEvent(scrollY, "change", (value) => {
    directionRef.current = prevValue.current < value ? "down" : "up"

    prevValue.current = value
  })

  useEventListener(
    () => document,
    "scroll",
    () => {
      let currentId = ""

      for (const { url } of flattenedToc) {
        const id = url.replace("#", "")
        const el = document.getElementById(id)

        if (!el) continue

        if (el.getBoundingClientRect().top < 140) currentId = id
      }

      setCurrentId(currentId)
    },
    { passive: true },
  )

  useUpdateEffect(() => {
    if (!containerRef.current) return

    const itemRef = itemRefs.current.get(currentId)

    if (!itemRef?.current) return

    scrollIntoView(itemRef.current, {
      behavior: (actions) =>
        actions.forEach(({ el, top }) => {
          if (directionRef.current === "down") {
            el.scrollTop = top + 16
          } else {
            el.scrollTop = top - 16
          }
        }),
      block: "nearest",
      boundary: containerRef.current,
      inline: "nearest",
      scrollMode: "if-needed",
    })
  }, [currentId])

  const slugPath = slug.length > 0 ? slug.join("/") : "components"
  const readUrl = encodeURIComponent(
    `Use web browsing to access links and information: ${BASE_URL}/${getLang(locale)}/docs/${slugPath}.mdx. I want to ask some questions`,
  )

  const items = [
    {
      href: `/${getLang(locale)}${pathname}.mdx`,
      label: t("markdown"),
    },
    {
      href: `https://chatgpt.com/?q=${readUrl}`,
      label: t("chatgpt"),
    },
    {
      href: `https://claude.ai/new?q=${readUrl}`,
      label: t("claude"),
    },
  ] as const

  return (
    <VStack
      as="aside"
      alignItems="flex-start"
      gap="md"
      gridColumn="3 / 4"
      gridRow="1 / 3"
      maxH="calc(100dvh - {header-height})"
      overflowY="auto"
      pb="lg"
      position="sticky"
      pt="1.5"
      px="1"
      top="{header-height}"
      _media={[{ css: { display: "none" }, maxW: "75rem" }]}
    >
      {flattenedToc.length ? (
        <>
          <Text color="fg" fontSize="sm">
            {t("title")}
          </Text>

          <VStack as="nav" alignItems="flex-start" gap="sm">
            {flattenedToc.map(({ depth, title, url }, index) => {
              const id = url.replace("#", "")
              const current = currentId == id
              const ref = createRef<HTMLAnchorElement>()

              itemRefs.current.set(id, ref)

              return (
                <Link
                  key={index}
                  ref={ref}
                  href={url}
                  css={{ "--depth": depth }}
                  colorScheme="mono"
                  aria-current={current ? "page" : undefined}
                  color={{
                    base: "fg.muted",
                    _current: "fg",
                    _hover: "fg",
                  }}
                  fontSize="sm"
                  lineClamp={1}
                  ms="calc(md * {depth})"
                  textDecoration="none"
                  transitionDuration="moderate"
                  transitionProperty="colors"
                >
                  {title}
                </Link>
              )
            })}
          </VStack>

          <Separator />
        </>
      ) : null}

      <VStack alignItems="flex-start" gap="sm">
        <EditPageButton path={path} />
        {items.map(({ href, label }) => (
          <LlmsLink key={label} href={href} label={label} />
        ))}
        <ScrollToTopButton />
      </VStack>
    </VStack>
  )
}
