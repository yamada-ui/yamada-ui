"use client"

import type { FragmentContent, PageContent } from "@/data"
import type { HTMLProps } from "@yamada-ui/react"
import type { ElementType, KeyboardEvent, ReactNode, RefObject } from "react"
import {
  AlignLeftIcon,
  Box,
  Center,
  dataAttr,
  HashIcon,
  HStack,
  IconButton,
  Input,
  InputGroup,
  Kbd,
  Modal,
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
  createRef,
  memo,
  useCallback,
  useMemo,
  useRef,
  useState,
  useTransition,
} from "react"
import scrollIntoView from "scroll-into-view-if-needed"
import { getContents, getDefaultContents } from "@/data"
import { useLocale, usePathname } from "@/i18n"

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
        bg={["bg.subtle/40", "bg.subtle"]}
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
        <SearchContents onClose={onClose} />
      </Modal.Root>
    </>
  )
}

type Hit = FragmentContent | PageContent

interface SearchContentsProps {
  onClose: () => void
}

function SearchContents({ onClose }: SearchContentsProps) {
  const t = useTranslations("component.search")
  const { locale } = useLocale()
  const pathname = usePathname()
  const router = useRouter()
  const contents = useMemo(() => getContents(locale), [locale])
  const defaultContents = useMemo(() => getDefaultContents(locale), [locale])
  const [value, setValue] = useState("")
  const [hits, setHits] = useState<Hit[]>(defaultContents)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [, startTransition] = useTransition()
  const compositionRef = useRef(false)
  const eventRef = useRef<"keyboard" | "mouse" | null>(null)
  const bodyRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<Map<number, RefObject<HTMLAnchorElement | null>>>(
    new Map(),
  )

  const onSearch = useCallback(
    (value: string) => {
      setValue(value)

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

        setSelectedIndex(0)
        setHits(hits)
      })
    },
    [contents, defaultContents],
  )

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

  const onKeyDown = useCallback(
    (ev: KeyboardEvent<HTMLInputElement>) => {
      if (compositionRef.current) return

      eventRef.current = "keyboard"

      runKeyAction(ev, {
        ArrowDown: () => {
          if (selectedIndex === hits.length - 1) return

          setSelectedIndex((prev) => prev + 1)
        },
        ArrowUp: () => {
          if (selectedIndex === 0) return

          setSelectedIndex((prev) => prev - 1)
        },
        End: () => {
          setSelectedIndex(hits.length - 1)
        },
        Enter: () => {
          const item = hits[selectedIndex]

          if (!item?.pathname) return

          router.push(item.pathname)

          if (item.pathname.split("#")[0] === pathname) onClose()
        },
        Home: () => {
          setSelectedIndex(0)
        },
      })
    },
    [hits, onClose, pathname, router, selectedIndex],
  )

  const onClick = useCallback(
    (item: Hit) => {
      if (item.pathname.split("#")[0] === pathname) onClose()
    },
    [onClose, pathname],
  )

  const onMouseEnter = useCallback(
    (index: number) => {
      if (eventRef.current !== "mouse") return

      setSelectedIndex(index)
    },
    [eventRef, setSelectedIndex],
  )

  useWindowEvent("mousemove", () => {
    eventRef.current = "mouse"
  })

  useUpdateEffect(() => {
    if (!bodyRef.current || eventRef.current === "mouse") return

    const itemRef = itemRefs.current.get(selectedIndex)

    if (!itemRef?.current) return

    scrollIntoView(itemRef.current, {
      behavior: (actions) =>
        actions.forEach(({ el, top }) => {
          el.scrollTop = top
        }),
      block: "nearest",
      boundary: bodyRef.current,
      inline: "nearest",
      scrollMode: "if-needed",
    })
  }, [selectedIndex])

  return (
    <Modal.Content
      maxH={{ base: "4xl", sm: "full" }}
      maxW="auto"
      w={{ base: "lg", sm: "full" }}
    >
      <Modal.Header pt="sm" px="sm">
        <InputGroup.Root>
          <InputGroup.Element>
            <SearchIcon fontSize="xl" />
          </InputGroup.Element>
          <Input
            placeholder={t("placeholder")}
            value={value}
            onChange={(ev) => onSearch(ev.target.value)}
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

      <Modal.Body ref={bodyRef} as="nav" gap="sm" my="sm" px="sm" tabIndex={-1}>
        {hits.length ? (
          hits.map((hit, index) => {
            const selected = selectedIndex === index

            const ref = createRef<HTMLAnchorElement>()

            itemRefs.current.set(index, ref)

            return (
              <Item
                key={hit.pathname}
                ref={ref}
                href={hit.pathname}
                data-selected={dataAttr(selected)}
                description={getDescription(hit)}
                icon={hit.type === "fragment" ? HashIcon : AlignLeftIcon}
                title={hit.title}
                onClick={() => onClick(hit)}
                onMouseEnter={() => onMouseEnter(index)}
              />
            )
          })
        ) : (
          <Center minH="16" w="full">
            <Text color="fg.muted" fontSize="sm" lineClamp={1}>
              {t("notFound", { value })}
            </Text>
          </Center>
        )}
      </Modal.Body>
    </Modal.Content>
  )
}

interface ItemProps extends Omit<HTMLProps<"a">, "href" | "title"> {
  href: string
  icon: ElementType
  title: ReactNode
  description?: ReactNode
}

const Item = memo(function Item({
  description,
  icon: Icon,
  title,
  ...rest
}: ItemProps) {
  return (
    <Box
      as={NextLink}
      alignItems="center"
      bg={{
        base: "transparent",
        _selected: ["bg.subtle/70", "bg.muted/70"],
        _hover: ["bg.subtle/70", "bg.muted/70"],
      }}
      display="flex"
      focusVisibleRing="none"
      gap="4"
      minH="16"
      px="4"
      rounded="l2"
      tabIndex={-1}
      w="full"
      {...rest}
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
})
