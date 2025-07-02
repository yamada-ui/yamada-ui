"use client"

import type { Doc } from "@/.velite"
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
import { EditPageButton } from "./edit-page-button"
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

export function Toc({ path, toc }: TocProps) {
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

        if (el.getBoundingClientRect().top < 100) currentId = id
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

  return (
    <VStack
      as="aside"
      alignItems="flex-start"
      gap="md"
      gridColumn="3 / 4"
      gridRow="1 / 3"
      maxH="calc(100dvh - {sizes.14} - {sizes.13} - {spaces.lg})"
      overflowY="auto"
      pb="lg"
      position="sticky"
      pt="1.5"
      px="1"
      top="calc({sizes.14} + {sizes.13} + {spaces.lg})"
      _media={[{ css: { display: "none" }, maxW: "75rem" }]}
    >
      {flattenedToc.length ? (
        <>
          <Text color="fg.muted" fontSize="sm">
            {t("title")}
          </Text>

          <VStack as="nav" alignItems="flex-start" gap="xs">
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
                  aria-current={current ? "page" : undefined}
                  color={{ base: "fg.muted", _current: "fg", _hover: "fg" }}
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

        <ScrollToTopButton />
      </VStack>
    </VStack>
  )
}
