"use client"

import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ButtonGroup,
  Flex,
  Text,
} from "@yamada-ui/react"
import { useMemo } from "react"
import { NextLinkButton } from "@/components"
import { flattenDocMap, getDocMap } from "@/data"
import { useLocale, usePathname } from "@/i18n"

export function Pagination() {
  const pathname = usePathname()
  const { locale } = useLocale()

  const { next, prev } = useMemo(() => {
    const { items = [] } = getDocMap(locale)
    const flattenedDocMap = flattenDocMap(items)
    const index = flattenedDocMap.findIndex((doc) => doc.pathname === pathname)
    const prev = flattenedDocMap[index - 1]
    const next = flattenedDocMap[index + 1]

    return { next, prev }
  }, [locale, pathname])

  return (
    <ButtonGroup.Root
      as="nav"
      size="sm"
      variant="subtle"
      display="grid"
      gridColumn={{ base: "2 / 3", md: "1 / 2" }}
      gridTemplateColumns="1fr 1fr"
    >
      <Flex justifyContent="flex-start" minW="0">
        {prev?.pathname ? (
          <NextLinkButton href={prev.pathname} startIcon={<ArrowLeftIcon />}>
            <Text as="span" truncated>
              {prev.title}
            </Text>
          </NextLinkButton>
        ) : null}
      </Flex>

      <Flex justifyContent="flex-end" minW="0">
        {next?.pathname ? (
          <NextLinkButton href={next.pathname} endIcon={<ArrowRightIcon />}>
            <Text as="span" truncated>
              {next.title}
            </Text>
          </NextLinkButton>
        ) : null}
      </Flex>
    </ButtonGroup.Root>
  )
}
