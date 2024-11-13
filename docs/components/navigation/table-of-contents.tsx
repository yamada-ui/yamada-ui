import type { StackProps } from "@yamada-ui/react"
import type { DocumentContent } from "mdx"
import type { RefObject } from "react"
import { ListIcon } from "@yamada-ui/lucide"
import {
  Box,
  dataAttr,
  forwardRef,
  HStack,
  List,
  ListItem,
  mergeRefs,
  Text,
  useMotionValueEvent,
  useScroll,
  useUpdateEffect,
  VStack,
} from "@yamada-ui/react"
import { ScrollShadow } from "components/data-display"
import { TextWithCode } from "components/typography"
import { useI18n } from "contexts"
import { useEventListener } from "hooks"
import { createRef, memo, useRef, useState } from "react"
import scrollIntoView from "scroll-into-view-if-needed"

export interface TableOfContentsProps extends StackProps {
  contents: DocumentContent[]
}

export const TableOfContents = memo(
  forwardRef<TableOfContentsProps, "div">(({ contents, ...rest }, ref) => {
    const [selectedId, setSelectedId] = useState<string>("")
    const containerRef = useRef<HTMLDivElement>(null)
    const itemRefs = useRef<Map<string, RefObject<HTMLLIElement>>>(new Map())
    const { scrollY } = useScroll()
    const prevValue = useRef<number>(0)
    const directionRef = useRef<"down" | "up">("down")
    const { t } = useI18n()

    useMotionValueEvent(scrollY, "change", (value) => {
      directionRef.current = prevValue.current < value ? "down" : "up"

      prevValue.current = value
    })

    useEventListener(
      "scroll",
      () => {
        let currentId = ""

        for (const { id } of contents) {
          const el = document.getElementById(id)

          if (!el) continue

          if (el.getBoundingClientRect().top < 100) currentId = id
        }

        setSelectedId(currentId)
      },
      () => document,
      { passive: true },
    )

    useUpdateEffect(() => {
      if (!containerRef.current) return

      const itemRef = itemRefs.current.get(selectedId)

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
    }, [selectedId])

    return (
      <VStack
        ref={mergeRefs(ref, containerRef)}
        as="nav"
        maxH="calc(100dvh - 4rem)"
        position="sticky"
        top="4rem"
        w="sm"
        {...rest}
      >
        <VStack
          overflowY="auto"
          overscrollBehavior="contain"
          pb="16"
          pl="md"
          pt="lg"
        >
          <HStack gap="sm">
            <ListIcon fontSize="2xl" />
            <Text>{t("component.table-of-contents.title")}</Text>
          </HStack>

          <List color="muted" fontSize="sm" gap="0" ml="sm">
            {contents.map(({ id, lv, title }) => {
              const isSelected = selectedId == id
              const ref = createRef<HTMLLIElement>()

              itemRefs.current.set(id, ref)

              return (
                <ListItem key={id} ref={ref}>
                  <Box
                    as="a"
                    href={`#${id}`}
                    display="block"
                    outline="0"
                    transitionDuration="normal"
                    transitionProperty="colors"
                    _focusVisible={{
                      boxShadow: "inline",
                    }}
                    _hover={{
                      color: isSelected ? undefined : ["black", "white"],
                    }}
                  >
                    <Box
                      data-selected={dataAttr(isSelected)}
                      borderLeftColor={isSelected ? `primary.400` : "border"}
                      borderLeftWidth="1px"
                      pl={`calc(${lv - 1} * $spaces.4)`}
                      position="relative"
                      py="sm"
                      userSelect="none"
                      zIndex="-1"
                      _before={{
                        bg: "white",
                        bottom: 0,
                        content: "''",
                        left: 0,
                        opacity: 0.8,
                        position: "absolute",
                        right: 0,
                        top: 0,
                      }}
                      _dark={{
                        _before: {
                          bg: "black",
                          opacity: 0.86,
                        },
                      }}
                      _selected={{
                        bg: `primary.300`,
                        color: [`black`, "white"],
                      }}
                    >
                      <TextWithCode
                        isTruncated
                        position="relative"
                        zIndex="yamcha"
                      >
                        {title}
                      </TextWithCode>
                    </Box>
                  </Box>
                </ListItem>
              )
            })}
          </List>
        </VStack>

        <ScrollShadow />
      </VStack>
    )
  }),
)
