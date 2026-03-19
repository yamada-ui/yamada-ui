"use client"

import type { Descendant, HTMLProps } from "@yamada-ui/react"
import type { KeyboardEvent, RefObject } from "react"
import type { FragmentContent, PageContent } from "@/data"
import {
  assignRef,
  Box,
  Center,
  CloseButton,
  createDescendants,
  handlerAll,
  HashIcon,
  HStack,
  IconButton,
  InfiniteScrollArea,
  Input,
  InputGroup,
  isApple,
  Kbd,
  Loading,
  mergeRefs,
  Modal,
  noop,
  runKeyAction,
  SearchIcon,
  Text,
  TextAlignStartIcon,
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
import { getContents, getDefaultContents } from "@/data"
import { Link, useLocale, usePathname } from "@/i18n"
import { createLocalStorage } from "@/utils/storage"

const ACTION_DEFAULT_KEY = "Ctrl"
const ACTION_APPLE_KEY = "⌘"

const {
  DescendantsContext,
  useDescendant,
  useDescendants,
  useDescendantsContext,
} = createDescendants<HTMLAnchorElement, { hit: Hit }>()

export function Search() {
  const { open, onClose, onOpen } = useDisclosure()
  const t = useTranslations("component.search")
  const pathname = usePathname()
  const [actionKey, setActionKey] = useState(ACTION_APPLE_KEY)

  useEffect(() => {
    if (!isApple()) setActionKey(ACTION_DEFAULT_KEY)
  }, [])

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

  return (
    <>
      <HStack
        as="button"
        type="button"
        bg={["bg.muted/30", "bg.muted/30"]}
        color={{ base: "fg.muted", _hover: "fg.emphasized" }}
        cursor="pointer"
        display={{ base: "flex", lg: "none" }}
        h="8"
        minW="fit-content"
        px="sm"
        rounded="l2"
        transitionDuration="moderate"
        transitionProperty="colors"
        onClick={onOpen}
      >
        <Text flex="1" fontSize="sm" lineClamp={1}>
          {t("placeholder")}
        </Text>

        <HStack gap="xs">
          <Kbd size="sm" variant="surface" letterSpacing="tight">
            {actionKey}
          </Kbd>
          <Kbd size="sm" variant="surface">
            K
          </Kbd>
        </HStack>
      </HStack>

      <IconButton
        aria-label={t("placeholder")}
        color="fg.emphasized"
        display={{ base: "none", lg: "flex" }}
        icon={<SearchIcon />}
        onClick={onOpen}
      />

      <Modal.Root
        size="lg"
        open={open}
        placement={{ base: "center", sm: "start-center" }}
        withCloseButton={false}
        onClose={onClose}
      >
        <SearchContent onClose={onClose} />
      </Modal.Root>
    </>
  )
}

type Hit = FragmentContent | PageContent
type LocalStorageHit = Hit & { storage: "recent" }

interface SearchContentProps {
  onClose: () => void
}

function SearchContent({ onClose }: SearchContentProps) {
  const bodyRef = useRef<HTMLDivElement>(null)
  const descendants = useDescendants()
  const onSearchRef = useRef<(value: string) => void>(noop)
  const activeDescendant = useRef<Descendant<
    HTMLAnchorElement,
    { hit: Hit }
  > | null>(null)

  const onActive = useCallback(
    (descendant?: Descendant<HTMLAnchorElement, { hit: Hit }>) => {
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
      <Modal.Content maxW="auto" w={{ base: "lg", sm: "full" }}>
        <SearchContentHeader
          activeDescendant={activeDescendant}
          onActive={onActive}
          onClose={onClose}
          onSearchRef={onSearchRef}
        />

        <SearchContentBody
          ref={bodyRef}
          onActive={onActive}
          onClose={onClose}
          onSearchRef={onSearchRef}
        />
      </Modal.Content>
    </DescendantsContext>
  )
}

interface SearchContentHeaderProps {
  activeDescendant: RefObject<Descendant<
    HTMLAnchorElement,
    { hit: Hit }
  > | null>
  onActive: (descendant?: Descendant<HTMLAnchorElement, { hit: Hit }>) => void
  onClose: () => void
  onSearchRef: RefObject<(value: string) => void>
}

function SearchContentHeader({
  activeDescendant,
  onActive,
  onClose,
  onSearchRef,
}: SearchContentHeaderProps) {
  const t = useTranslations("component.search")
  const descendants = useDescendantsContext()
  const compositionRef = useRef(false)
  const pathname = usePathname()
  const router = useRouter()

  const onSetFocusVisible = useCallback((node: HTMLElement) => {
    const el = node.querySelector("button")

    if (el) el.setAttribute("data-focus-visible", "")
  }, [])

  const onRemoveFocusVisible = useCallback((node: HTMLElement) => {
    const el = node.querySelector("button")

    if (el) el.removeAttribute("data-focus-visible")
  }, [])

  const onKeyDown = useCallback(
    (ev: KeyboardEvent<HTMLInputElement>) => {
      if (compositionRef.current) return

      runKeyAction(
        ev,
        {
          ArrowDown: (ev) => {
            ev.preventDefault()

            if (activeDescendant.current) {
              onRemoveFocusVisible(activeDescendant.current.node)

              const descendant = descendants.enabledNextValue(
                activeDescendant.current,
              )

              onActive(descendant)
            } else {
              const descendant = descendants.enabledFirstValue()

              onActive(descendant)
            }
          },
          ArrowLeft: (ev) => {
            if (ev.target instanceof HTMLInputElement && ev.target.value.length)
              return

            if (activeDescendant.current)
              onRemoveFocusVisible(activeDescendant.current.node)
          },
          ArrowRight: (ev) => {
            if (ev.target instanceof HTMLInputElement && ev.target.value.length)
              return

            const descendant =
              activeDescendant.current ?? descendants.enabledFirstValue()

            if (descendant) onSetFocusVisible(descendant.node)
          },
          ArrowUp: (ev) => {
            ev.preventDefault()

            if (activeDescendant.current) {
              onRemoveFocusVisible(activeDescendant.current.node)

              const descendant = descendants.enabledPrevValue(
                activeDescendant.current,
              )

              onActive(descendant)
            } else {
              const descendant = descendants.enabledLastValue()

              onActive(descendant)
            }
          },
          End: (ev) => {
            ev.preventDefault()

            if (activeDescendant.current)
              onRemoveFocusVisible(activeDescendant.current.node)

            const descendant = descendants.enabledLastValue()

            onActive(descendant)
          },
          Enter: (ev) => {
            ev.preventDefault()

            if (!activeDescendant.current) return

            const { hit, index, node } = activeDescendant.current
            const el = node.querySelector("button")

            if (el?.hasAttribute("data-focus-visible")) {
              el.click()

              setTimeout(() => {
                const descendant = descendants.enabledValue(index)

                if (descendant) {
                  onActive(descendant)

                  onSetFocusVisible(descendant.node)
                } else {
                  const descendant = descendants.enabledValue(index - 1)

                  onActive(descendant)

                  if (descendant) onSetFocusVisible(descendant.node)
                }
              })
            } else {
              router.push(hit.pathname)
              addRecentSearch(hit)

              if (hit.pathname.split("#")[0] === pathname) onClose()
            }
          },
          Home: (ev) => {
            ev.preventDefault()

            if (activeDescendant.current)
              onRemoveFocusVisible(activeDescendant.current.node)

            const descendant = descendants.enabledFirstValue()

            onActive(descendant)
          },
        },
        { preventDefault: false },
      )
    },
    [
      activeDescendant,
      descendants,
      onActive,
      onSetFocusVisible,
      onClose,
      onRemoveFocusVisible,
      pathname,
      router,
    ],
  )

  return (
    <Modal.Header pt="sm" px="sm">
      <InputGroup.Root>
        <InputGroup.Element>
          <SearchIcon fontSize="xl" />
        </InputGroup.Element>
        <Input
          placeholder={t("placeholder")}
          onChange={(ev) => onSearchRef.current(ev.target.value)}
          onCompositionEnd={() => {
            compositionRef.current = false
          }}
          onCompositionStart={() => {
            compositionRef.current = true
          }}
          onKeyDown={onKeyDown}
        />
      </InputGroup.Root>
    </Modal.Header>
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
const DEFAULT_LOCALE_CONTENTS = getContents(CONSTANTS.I18N.DEFAULT_LOCALE)
const PER_PAGE = 50

const [getRecentSearches, setRecentSearches] = createLocalStorage<
  LocalStorageHit[]
>(CONSTANTS.STORAGE.SEARCH.RECENT, [])

function addRecentSearch(hit: Hit) {
  setRecentSearches((prev) =>
    [
      { ...hit, storage: "recent" as const },
      ...prev.filter(({ pathname }) => pathname !== hit.pathname),
    ].slice(0, PER_PAGE),
  )
}

function removeRecentSearch(hit: Hit | LocalStorageHit) {
  setRecentSearches((prev) =>
    prev.filter(({ pathname }) => pathname !== hit.pathname),
  )
}

interface SearchContentBodyProps extends Modal.BodyProps {
  onActive: (descendant?: Descendant<HTMLAnchorElement, { hit: Hit }>) => void
  onClose: () => void
  onSearchRef: RefObject<(value: string) => void>
}

function SearchContentBody({
  onActive,
  onClose,
  onSearchRef,
  ...rest
}: SearchContentBodyProps) {
  const t = useTranslations("component.search")
  const { locale } = useLocale()
  const contents = useMemo(() => getContents(locale), [locale])
  const contentMap = useMemo(
    () => new Map(contents.map((content) => [content.pathname, content])),
    [contents],
  )
  const defaultContents = useMemo(() => getDefaultContents(locale), [locale])
  const [hits, setHits] = useState<(Hit | LocalStorageHit)[]>(() => {
    const recentContents = getRecentSearches()

    return recentContents.length ? recentContents : defaultContents
  })
  const maxIndex = Math.ceil(hits.length / PER_PAGE) - 1
  const [count, setCount] = useState(PER_PAGE)
  const disabled = hits.length <= count
  const list = useMemo(() => hits.slice(0, count), [hits, count])
  const resetRef = useRef<() => void>(noop)
  const [, startTransition] = useTransition()
  const descendants = useDescendantsContext()
  const [value, setValue] = useState("")

  const onRemoveRecent = useCallback(
    (hit: LocalStorageHit) => {
      setHits((prev) => {
        const next = prev.filter(({ pathname }) => pathname !== hit.pathname)

        return next.length ? next : defaultContents
      })
      removeRecentSearch(hit)
    },
    [defaultContents],
  )

  assignRef(onSearchRef, (value) => {
    startTransition(() => {
      resetRef.current()

      const recentContents = getRecentSearches()

      let hits: (Hit | LocalStorageHit)[] = recentContents.length
        ? recentContents
        : defaultContents

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
    <Modal.Body asChild {...rest}>
      <InfiniteScrollArea
        disabled={disabled}
        gap="sm"
        loading={<Loading.Oval fontSize="2xl" />}
        maxH={{ base: "44.5rem", sm: "full" }}
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
              hit={hit}
              onActive={onActive}
              onClose={onClose}
              onRemove={
                "storage" in hit ? () => onRemoveRecent(hit) : undefined
              }
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
    </Modal.Body>
  )
}

interface ItemProps extends HTMLProps<"a"> {
  hit: Hit
  onActive: (descendant?: Descendant<HTMLAnchorElement, { hit: Hit }>) => void
  onClose: () => void
  onRemove?: () => void
}

const Item = function Item({
  ref,
  hit,
  onActive,
  onClose,
  onRemove,
  ...rest
}: ItemProps) {
  const itemRef = useRef<HTMLAnchorElement>(null)
  const { descendants, register } = useDescendant({ hit })
  const pathname = usePathname()
  const Icon = useMemo(
    () => (hit.type === "fragment" ? HashIcon : TextAlignStartIcon),
    [hit],
  )
  const description = useMemo(() => {
    if (hit.type === "fragment") {
      return (
        (hit.group ? `${hit.group} / ` : "") +
        Object.values(hit.hierarchy).slice(0, -1).join(" / ")
      )
    } else {
      return hit.group
    }
  }, [hit])

  const onMouseMove = useCallback(() => {
    const descendant = descendants.value(itemRef.current)

    onActive(descendant)
  }, [descendants, onActive])

  const onClick = useCallback(() => {
    addRecentSearch(hit)

    if (hit.pathname.split("#")[0] === pathname) onClose()
  }, [hit, onClose, pathname])

  return (
    <Box
      ref={mergeRefs(ref, itemRef, register)}
      as={Link}
      href={hit.pathname}
      alignItems="center"
      bg={{
        base: "transparent",
        _activedescendant: ["bg.muted/40", "bg.muted/70"],
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
        <Text lineClamp={1}>{hit.title}</Text>
        {description ? (
          <Text color="fg.muted" lineClamp={1}>
            {description}
          </Text>
        ) : null}
      </VStack>

      {onRemove ? (
        <CloseButton
          key={hit.pathname}
          disableRipple
          tabIndex={-1}
          _hover={{ bg: "colorScheme.muted" }}
          onClick={(ev) => {
            ev.preventDefault()
            ev.stopPropagation()

            onRemove()
          }}
        />
      ) : null}
    </Box>
  )
}
