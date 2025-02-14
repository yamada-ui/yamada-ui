import type { ButtonProps, ModalProps, StackProps } from "@yamada-ui/react"
import type { FC, KeyboardEvent, RefObject } from "react"
import { FileIcon, HashIcon, SearchIcon } from "@yamada-ui/lucide"
import {
  dataAttr,
  forwardRef,
  handlerAll,
  Highlight,
  HStack,
  IconButton,
  isApple,
  Kbd,
  Modal,
  ModalBody,
  ModalHeader,
  Separator,
  Text,
  ui,
  useDisclosure,
  useUpdateEffect,
  VStack,
} from "@yamada-ui/react"
import { useI18n } from "contexts"
import { useEventListener } from "hooks"
import { matchSorter } from "match-sorter"
import NextLink from "next/link"
import { useRouter } from "next/router"
import {
  createRef,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react"
import scrollIntoView from "scroll-into-view-if-needed"

const ACTION_DEFAULT_KEY = "Ctrl"
const ACTION_APPLE_KEY = "⌘"

const useRouteDisclosure = () => {
  const { events } = useRouter()
  const { open, onClose, onOpen } = useDisclosure()

  useEffect(() => {
    events.on("routeChangeComplete", onClose)

    return () => {
      events.off("routeChangeComplete", onClose)
    }
  }, [onClose, events])

  return { open, onClose, onOpen }
}

export interface SearchProps extends StackProps {}

export const Search = memo(
  forwardRef<SearchProps, "button">(({ ...rest }, ref) => {
    const { tc } = useI18n()
    const { open, onClose, onOpen } = useRouteDisclosure()
    const [actionKey, setActionKey] = useState(ACTION_APPLE_KEY)

    useEffect(() => {
      if (!isApple()) setActionKey(ACTION_DEFAULT_KEY)
    }, [])

    useEventListener("keydown", (ev) => {
      if (
        ev.key.toLowerCase() !== "k" ||
        !ev[isApple() ? "metaKey" : "ctrlKey"]
      )
        return

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
          ref={ref}
          as="button"
          type="button"
          bg={["white", "black"]}
          border="1px solid"
          color={["blackAlpha.600", "whiteAlpha.400"]}
          gap="sm"
          h="10"
          maxW="lg"
          outline="0"
          px="3"
          rounded="md"
          transitionDuration="slower"
          transitionProperty="common"
          w="full"
          _focusVisible={{ shadow: "outline" }}
          {...rest}
          onClick={handlerAll(rest.onClick, onOpen)}
        >
          <SearchIcon fontSize="xl" />
          <Text flex="1">{tc("component.forms.search.message")}</Text>
          <Kbd>{actionKey} + K</Kbd>
        </HStack>

        <SearchModal open={open} onClose={onClose} />
      </>
    )
  }),
)

export interface SearchButtonProps extends ButtonProps {}

export const SearchButton = memo(
  forwardRef<SearchButtonProps, "button">(({ ...rest }, ref) => {
    const { open, onClose, onOpen } = useRouteDisclosure()

    return (
      <>
        <IconButton
          ref={ref}
          type="button"
          variant="ghost"
          color="muted"
          icon={<SearchIcon fontSize="2xl" />}
          _hover={{ bg: ["blackAlpha.100", "whiteAlpha.50"] }}
          {...rest}
          onClick={handlerAll(rest.onClick, onOpen)}
        />

        <SearchModal open={open} onClose={onClose} />
      </>
    )
  }),
)

interface SearchModalProps extends ModalProps {}

const SearchModal: FC<SearchModalProps> = memo(({ open, onClose, ...rest }) => {
  const [query, setQuery] = useState<string>("")
  const [selectedIndex, setSelectedIndex] = useState<number>(0)
  const { contents, t } = useI18n()
  const router = useRouter()
  const eventRef = useRef<"keyboard" | "mouse" | null>(null)
  const directionRef = useRef<"down" | "up">("down")
  const compositionRef = useRef<boolean>(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<Map<number, RefObject<HTMLAnchorElement>>>(new Map())

  const hits = useMemo(() => {
    if (query.length < 1) return []

    return matchSorter(contents, query, {
      keys: [
        "hierarchy.lv1",
        "hierarchy.lv2",
        "hierarchy.lv3",
        "hierarchy.lv4",
        "description",
        "title",
      ],
    }).slice(0, 20)
  }, [query, contents])

  const onKeyDown = useCallback(
    (ev: KeyboardEvent<HTMLInputElement>) => {
      if (compositionRef.current) return

      eventRef.current = "keyboard"

      const actions: { [key: string]: Function | undefined } = {
        ArrowDown: () => {
          if (selectedIndex + 1 === hits.length) return

          directionRef.current = "down"
          setSelectedIndex(selectedIndex + 1)
        },
        ArrowUp: () => {
          if (selectedIndex === 0) return

          directionRef.current = "up"
          setSelectedIndex(selectedIndex - 1)
        },
        End: () => {
          directionRef.current = "down"
          setSelectedIndex(hits.length - 1)
        },
        Enter: () => {
          if (!hits.length) return

          onClose?.()
          router.push(hits[selectedIndex]?.slug)
        },
        Home: () => {
          directionRef.current = "up"
          setSelectedIndex(0)
        },
      }

      const action = actions[ev.key]

      if (!action) return

      ev.preventDefault()
      ev.stopPropagation()

      action(ev)
    },
    [hits, onClose, selectedIndex, router],
  )

  useEffect(() => {
    if (open) return

    setQuery("")
  }, [open])

  useUpdateEffect(() => {
    setSelectedIndex(0)
  }, [query])

  useUpdateEffect(() => {
    if (!containerRef.current || eventRef.current === "mouse") return

    const itemRef = itemRefs.current.get(selectedIndex)

    if (!itemRef?.current) return

    scrollIntoView(itemRef.current, {
      behavior: (actions) =>
        actions.forEach(({ el, top }) => {
          if (directionRef.current === "down") {
            el.scrollTop = top + 16
          } else {
            el.scrollTop = top - 17
          }
        }),
      block: "nearest",
      boundary: containerRef.current,
      inline: "nearest",
      scrollMode: "if-needed",
    })
  }, [selectedIndex])

  return (
    <Modal
      size="3xl"
      open={open}
      placement="top"
      withCloseButton={false}
      onClose={onClose}
      {...rest}
    >
      <ModalHeader fontSize="md" fontWeight="normal" pb="md">
        <HStack position="relative" w="full">
          <ui.input
            autoComplete="off"
            autoCorrect="off"
            flex="1"
            maxLength={64}
            pl="lg"
            placeholder={t("component.forms.search.placeholder") as string}
            spellCheck="false"
            value={query}
            onChange={(ev) => setQuery(ev.target.value)}
            onCompositionEnd={() => {
              compositionRef.current = false
            }}
            onCompositionStart={() => {
              compositionRef.current = true
            }}
            onKeyDown={onKeyDown}
          />

          <SearchIcon
            color="muted"
            fontSize="2xl"
            left="0"
            pointerEvents="none"
            position="absolute"
            top="50%"
            transform="translateY(-50%)"
          />
        </HStack>
      </ModalHeader>

      {hits.length ? (
        <ModalBody ref={containerRef} my="0" pb="md">
          <Separator />

          <VStack as="ul" gap="sm">
            {hits.map(({ type, hierarchy, slug, title }, index) => {
              const isSelected = index === selectedIndex
              const ref = createRef<HTMLAnchorElement>()

              itemRefs.current.set(index, ref)

              return (
                <HStack
                  key={slug}
                  ref={ref}
                  as={NextLink}
                  href={slug}
                  data-selected={dataAttr(isSelected)}
                  bg={["blackAlpha.50", "whiteAlpha.50"]}
                  borderWidth="1px"
                  gap="2"
                  minH="16"
                  px="md"
                  py="sm"
                  rounded="md"
                  transitionDuration="normal"
                  transitionProperty="colors"
                  _active={{}}
                  _focus={{ outline: "none" }}
                  _focusVisible={{ boxShadow: "outline" }}
                  _hover={{ boxShadow: "outline" }}
                  _selected={{ boxShadow: "outline" }}
                  onClick={onClose}
                  onMouseEnter={() => {
                    eventRef.current = "mouse"
                    setSelectedIndex(index)
                  }}
                >
                  {type === "page" ? (
                    <FileIcon color="muted" fontSize="2xl" />
                  ) : (
                    <HashIcon
                      color={["blackAlpha.500", "whiteAlpha.400"]}
                      fontSize="2xl"
                    />
                  )}

                  <VStack gap="0">
                    {type === "fragment" ? (
                      <Highlight
                        color="muted"
                        fontSize="xs"
                        lineClamp={1}
                        query={query}
                        markProps={{ variant: "text-accent" }}
                      >
                        {hierarchy.lv1}
                      </Highlight>
                    ) : null}

                    <Highlight
                      lineClamp={1}
                      query={query}
                      markProps={{ variant: "text-accent" }}
                    >
                      {title}
                    </Highlight>
                  </VStack>
                </HStack>
              )
            })}
          </VStack>
        </ModalBody>
      ) : null}
    </Modal>
  )
})

SearchModal.displayName = "SearchModal"
