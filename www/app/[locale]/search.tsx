"use client"

import type { FragmentContent, PageContent } from "@/data"
import type { Descendant, HTMLProps } from "@yamada-ui/react"
import type { ElementType, KeyboardEvent, ReactNode, RefObject } from "react"
import {
  AlignLeftIcon,
  assignRef,
  Box,
  Center,
  createDescendants,
  handlerAll,
  HashIcon,
  HStack,
  IconButton,
  Input,
  InputGroup,
  Kbd,
  mergeRefs,
  Modal,
  noop,
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
import NextLink from "next/link"
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
import { getContents, getDefaultContents } from "@/data"
import { useLocale, usePathname } from "@/i18n"

const {
  DescendantsContext,
  useDescendant,
  useDescendants,
  useDescendantsContext,
} = createDescendants<HTMLAnchorElement, { href: string }>()

export function Search() {
  const { open, onClose, onOpen } = useDisclosure()
  const t = useTranslations("component.search")
  const pathname = usePathname()

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
          <Kbd size="sm" variant="surface" fontSize="sm">
            ⌘
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

interface SearchContentProps {
  onClose: () => void
}

function SearchContent({ onClose }: SearchContentProps) {
  const bodyRef = useRef<HTMLDivElement>(null)
  const descendants = useDescendants()
  const onSearchRef = useRef<(value: string) => void>(noop)
  const activeDescendant = useRef<Descendant<
    HTMLAnchorElement,
    { href: string }
  > | null>(null)

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
      <Modal.Content
        maxH={{ base: "4xl", sm: "full" }}
        maxW="auto"
        w={{ base: "lg", sm: "full" }}
      >
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
    { href: string }
  > | null>
  onActive: (
    descendant?: Descendant<HTMLAnchorElement, { href: string }>,
  ) => void
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

interface SearchContentBodyProps extends Modal.BodyProps {
  onActive: (
    descendant?: Descendant<HTMLAnchorElement, { href: string }>,
  ) => void
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
  const defaultContents = useMemo(() => getDefaultContents(locale), [locale])
  const [hits, setHits] = useState<Hit[]>(defaultContents)
  const [, startTransition] = useTransition()
  const descendants = useDescendantsContext()
  const [value, setValue] = useState("")

  const getDescription = useCallback((hit: Hit) => {
    if (hit.type === "fragment") {
      return (
        (hit.group ? `${hit.group} / ` : "") +
        Object.values(hit.hierarchy).slice(0, -1).join(" / ")
      )
    } else {
      return hit.group
    }
  }, [])

  assignRef(onSearchRef, (value) => {
    startTransition(() => {
      let hits: Hit[] = defaultContents

      if (value.length)
        hits = matchSorter(contents, value, {
          keys: [
            "title",
            "hierarchy.6",
            "hierarchy.5",
            "hierarchy.4",
            "hierarchy.3",
            "hierarchy.2",
            "hierarchy.1",
          ],
        })

      setHits(hits)
      setValue(value)

      if (!hits.length) return
    })
  })

  useEffect(() => {
    const descendant = descendants.enabledFirstValue()

    onActive(descendant)
  }, [descendants, onActive, value])

  return (
    <Modal.Body as="nav" gap="sm" my="sm" px="sm" tabIndex={-1} {...rest}>
      {hits.length ? (
        hits.map((hit, index) => (
          <Item
            key={`${hit.pathname}-${index}`}
            href={hit.pathname}
            description={getDescription(hit)}
            icon={hit.type === "fragment" ? HashIcon : AlignLeftIcon}
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
    </Modal.Body>
  )
}

interface ItemProps extends Omit<HTMLProps<"a">, "href" | "title"> {
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
      as={NextLink}
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
