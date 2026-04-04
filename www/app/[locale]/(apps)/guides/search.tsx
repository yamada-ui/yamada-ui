"use client"

import type { Descendant, HTMLProps } from "@yamada-ui/react"
import type { ElementType, KeyboardEvent, ReactNode, RefObject } from "react"
import type { Guide } from "@/.velite"
import {
  assignRef,
  Box,
  Center,
  createDescendants,
  handlerAll,
  HashIcon,
  InfiniteScrollArea,
  Input,
  InputGroup,
  Loading,
  mergeRefs,
  noop,
  Popover,
  runKeyAction,
  SearchIcon,
  Text,
  useDisclosure,
  useUpdateEffect,
  useWindowEvent,
  VStack,
} from "@yamada-ui/react"
import { matchSorter } from "match-sorter"
import { useTranslations } from "next-intl"
import { useRouter } from "next/navigation"
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  useTransition,
} from "react"
import scrollIntoView from "scroll-into-view-if-needed"
import { CONSTANTS } from "@/constants"
import { getGuides } from "@/data/guide"
import { Link, useLocale, usePathname } from "@/i18n"

const {
  DescendantsContext,
  useDescendant,
  useDescendants,
  useDescendantsContext,
} = createDescendants<HTMLAnchorElement, { href: string }>()

export function GuideSearch() {
  const { open, onClose, onOpen } = useDisclosure()
  const pathname = usePathname()
  const bodyRef = useRef<HTMLDivElement>(null)
  const descendants = useDescendants()
  const onSearchRef = useRef<(value: string) => void>(noop)
  const activeDescendant = useRef<Descendant<
    HTMLAnchorElement,
    { href: string }
  > | null>(null)

  useUpdateEffect(() => {
    if (open) onClose()
  }, [pathname])

  useWindowEvent("keydown", (ev) => {
    if (ev.key.toLowerCase() !== "k") return
    if (!ev.metaKey && !ev.ctrlKey) return

    ev.preventDefault()

    if (open) {
      onClose()
    } else {
      onOpen()
    }
  })

  const onActive = useCallback(
    (descendant?: Descendant<HTMLAnchorElement, { href: string }>) => {
      if (!descendant) return

      activeDescendant.current = descendant

      descendants.active(descendant)

      scrollIntoView(descendant.node, {
        behavior: (actions) =>
          actions.forEach(({ el, top }) => {
            el.scrollTop = top
          }),
        block: "nearest",
        boundary: bodyRef.current,
        inline: "nearest",
        scrollMode: "if-needed",
      })
    },
    [activeDescendant, bodyRef, descendants],
  )

  return (
    <DescendantsContext value={descendants}>
      <Popover.Root
        animationScheme="block-start"
        autoFocus={false}
        closeOnBlur
        matchWidth
        open={open}
        onClose={onClose}
        onOpen={onOpen}
      >
        <Popover.Anchor asChild>
          <InputGroup.Root>
            <InputGroup.Element>
              <SearchIcon fontSize="xl" />
            </InputGroup.Element>

            <SearchInput
              activeDescendant={activeDescendant}
              onActive={onActive}
              onClose={onClose}
              onOpen={onOpen}
              onSearchRef={onSearchRef}
            />
          </InputGroup.Root>
        </Popover.Anchor>

        <Popover.Content p="0" rounded="l2" shadow="lg">
          <SearchContentBody
            ref={bodyRef}
            onActive={onActive}
            onClose={onClose}
            onSearchRef={onSearchRef}
          />
        </Popover.Content>
      </Popover.Root>
    </DescendantsContext>
  )
}

type Hit = Guide

interface SearchInputProps {
  activeDescendant: RefObject<Descendant<
    HTMLAnchorElement,
    { href: string }
  > | null>
  onActive: (
    descendant?: Descendant<HTMLAnchorElement, { href: string }>,
  ) => void
  onClose: () => void
  onOpen: () => void
  onSearchRef: RefObject<(value: string) => void>
}

function SearchInput({
  activeDescendant,
  onActive,
  onClose,
  onOpen,
  onSearchRef,
}: SearchInputProps) {
  const t = useTranslations("component.search")
  const descendants = useDescendantsContext()
  const compositionRef = useRef(false)
  const pathname = usePathname()
  const router = useRouter()

  const onKeyDown = useCallback(
    (ev: KeyboardEvent<HTMLInputElement>) => {
      if (compositionRef.current) return

      runKeyAction(ev, {
        ArrowDown: () => {
          if (activeDescendant.current) {
            const descendant = descendants.enabledNextValue(
              activeDescendant.current,
            )

            onActive(descendant)
          } else {
            const descendant = descendants.enabledFirstValue()

            onActive(descendant)
          }
        },
        ArrowUp: () => {
          if (activeDescendant.current) {
            const descendant = descendants.enabledPrevValue(
              activeDescendant.current,
            )

            onActive(descendant)
          } else {
            const descendant = descendants.enabledLastValue()

            onActive(descendant)
          }
        },
        End: () => {
          const descendant = descendants.enabledLastValue()

          onActive(descendant)
        },
        Enter: () => {
          const { href } = activeDescendant.current ?? {}

          if (!href) return

          router.push(href)

          if (href.split("#")[0] === pathname) onClose()
        },
        Home: () => {
          const descendant = descendants.enabledFirstValue()

          onActive(descendant)
        },
      })
    },
    [activeDescendant, descendants, onActive, onClose, pathname, router],
  )

  return (
    <Input
      placeholder={t("placeholder")}
      onChange={(ev) => {
        const value = ev.target.value
        onSearchRef.current(value)
        if (value.length) {
          onOpen()
        } else {
          onClose()
        }
      }}
      onCompositionEnd={() => {
        compositionRef.current = false
      }}
      onCompositionStart={() => {
        compositionRef.current = true
      }}
      onKeyDown={onKeyDown}
    />
  )
}

const SEARCH_KEYS = [
  "title",
  "hierarchy.6",
  "hierarchy.5",
  "hierarchy.4",
  "hierarchy.3",
  "hierarchy.2",
  "hierarchy.1",
] as const
const DEFAULT_LOCALE_CONTENTS = getGuides(CONSTANTS.I18N.DEFAULT_LOCALE)
const PER_PAGE = 50

interface SearchContentBodyProps {
  onActive: (
    descendant?: Descendant<HTMLAnchorElement, { href: string }>,
  ) => void
  onClose: () => void
  onSearchRef: RefObject<(value: string) => void>
}

function SearchContentBody({
  ref,
  onActive,
  onClose,
  onSearchRef,
}: SearchContentBodyProps & { ref?: RefObject<HTMLDivElement | null> }) {
  const t = useTranslations("component.search")
  const { locale } = useLocale()
  const contents = useMemo(() => getGuides(locale), [locale])
  const contentMap = useMemo(
    () => new Map(contents.map((content) => [content.pathname, content])),
    [contents],
  )

  const [hits, setHits] = useState<Hit[]>([])
  const maxIndex = Math.ceil(hits.length / PER_PAGE) - 1
  const [count, setCount] = useState(PER_PAGE)
  const list = useMemo(() => hits.slice(0, count), [hits, count])
  const resetRef = useRef<() => void>(noop)
  const [, startTransition] = useTransition()
  const descendants = useDescendantsContext()
  const [value, setValue] = useState("")

  assignRef(onSearchRef, (value) => {
    startTransition(() => {
      resetRef.current()

      let hits: Hit[] = []

      if (value.length) {
        const localeHits = matchSorter(contents, value, { keys: SEARCH_KEYS })

        if (locale !== CONSTANTS.I18N.DEFAULT_LOCALE) {
          const localePathnames = new Set(
            localeHits.map(({ pathname }) => pathname),
          )
          const defaultLocaleHits = matchSorter(
            DEFAULT_LOCALE_CONTENTS,
            value,
            { keys: SEARCH_KEYS },
          )
            .filter(({ pathname }) => !localePathnames.has(pathname))
            .map((hit) => contentMap.get(hit.pathname) ?? hit)

          hits = [...localeHits, ...defaultLocaleHits]
        } else {
          hits = localeHits
        }
      }

      setCount(PER_PAGE)
      setHits(hits)
      setValue(value)
    })
  })

  useEffect(() => {
    const descendant = descendants.enabledFirstValue()

    onActive(descendant)
  }, [descendants, onActive, value])

  return (
    <InfiniteScrollArea
      ref={ref}
      gap="sm"
      loading={<Loading.Oval fontSize="2xl" />}
      maxH="44.5rem"
      my="sm"
      px="sm"
      resetRef={resetRef}
      rootMargin="0px 0px 600px 0px"
      tabIndex={-1}
      onLoad={({ finish, index }) => {
        setCount((prev) => prev + PER_PAGE)

        if (index >= maxIndex) finish()
      }}
    >
      {list.length ? (
        list.map((hit, index) => (
          <Item
            key={`${hit.pathname}-${index}`}
            href={hit.pathname}
            description={hit.description}
            icon={HashIcon}
            title={hit.title}
            onActive={onActive}
            onClose={onClose}
          />
        ))
      ) : (
        <Center minH="16" w="full">
          <Text color="fg.muted" fontSize="sm" lineClamp={1}>
            {t("notFound", { value })}
          </Text>
        </Center>
      )}
    </InfiniteScrollArea>
  )
}

interface ItemProps extends Omit<HTMLProps<"a">, "href" | "popover" | "title"> {
  href: string
  icon: ElementType
  title: ReactNode
  onActive: (
    descendant?: Descendant<HTMLAnchorElement, { href: string }>,
  ) => void
  onClose: () => void
  description?: ReactNode
}

const Item = function Item({
  ref,
  href,
  description,
  icon: Icon,
  title,
  onActive,
  onClose,
  ...rest
}: ItemProps) {
  const itemRef = useRef<HTMLAnchorElement>(null)
  const { descendants, register } = useDescendant({ href })
  const pathname = usePathname()

  const onMouseMove = useCallback(() => {
    const descendant = descendants.value(itemRef.current)

    onActive(descendant)
  }, [descendants, onActive])

  const onClick = useCallback(() => {
    if (href.split("#")[0] === pathname) onClose()
  }, [href, onClose, pathname])

  return (
    <Box
      ref={mergeRefs(ref, itemRef, register)}
      as={Link}
      href={href}
      alignItems="center"
      bg={{
        base: "transparent",
        _activedescendant: ["bg.muted/70", "bg.muted/70"],
      }}
      display="flex"
      focusVisibleRing="none"
      gap="4"
      minH="16"
      px="4"
      rounded="l2"
      tabIndex={-1}
      transitionDuration="moderate"
      transitionProperty="colors"
      w="full"
      {...rest}
      onClick={handlerAll(onClick, rest.onClick)}
      onMouseMove={handlerAll(onMouseMove, rest.onMouseMove)}
    >
      <Icon fontSize="2xl" />

      <VStack alignItems="flex-start" fontSize="sm" gap="0">
        <Text lineClamp={1}>{title}</Text>
        {description ? (
          <Text color="fg.muted" lineClamp={1}>
            {description}
          </Text>
        ) : null}
      </VStack>
    </Box>
  )
}
