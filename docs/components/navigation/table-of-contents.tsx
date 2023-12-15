import type { StackProps } from "@yamada-ui/react"
import {
  Box,
  HStack,
  List,
  ListItem,
  Text,
  VStack,
  dataAttr,
  forwardRef,
  mergeRefs,
  useMotionValueEvent,
  useScroll,
  useToken,
  useUpdateEffect,
} from "@yamada-ui/react"
import type { RefObject } from "react"
import { createRef, memo, useRef, useState } from "react"
import scrollIntoView from "scroll-into-view-if-needed"
import { List as ListIcon } from "components/media-and-icons"
import { TextWithCode } from "components/typography"
import type { DocumentContent } from "contentlayer/generated"
import { useI18n } from "contexts/i18n-context"
import { useEventListener } from "hooks/use-event-listener"

export type TableOfContentsProps = StackProps & { contents: DocumentContent[] }

export const TableOfContents = memo(
  forwardRef<TableOfContentsProps, "div">(({ contents, ...rest }, ref) => {
    const [selectedId, setSelectedId] = useState<string>("")
    const containerRef = useRef<HTMLDivElement>(null)
    const itemRefs = useRef<Map<string, RefObject<HTMLLIElement>>>(new Map())
    const pl = useToken("spaces", "4")
    const { scrollY } = useScroll()
    const prevValue = useRef<number>(0)
    const directionRef = useRef<"up" | "down">("down")
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
        scrollMode: "if-needed",
        block: "nearest",
        inline: "nearest",
        boundary: containerRef.current,
      })
    }, [selectedId])

    return (
      <VStack
        ref={mergeRefs(ref, containerRef)}
        as="nav"
        position="sticky"
        top="4rem"
        w="sm"
        maxH="calc(100dvh - 4rem)"
        {...rest}
      >
        <VStack
          pt="lg"
          pb="16"
          pl="md"
          overflowY="scroll"
          overscrollBehavior="contain"
        >
          <HStack gap="sm">
            <ListIcon />
            <Text>{t("component.table-of-contents.title")}</Text>
          </HStack>

          <List gap="0" fontSize="sm" color="muted" ml="sm">
            {contents.map(({ lv, title, id }) => {
              const isSelected = selectedId == id
              const ref = createRef<HTMLLIElement>()

              itemRefs.current.set(id, ref)

              return (
                <ListItem
                  key={id}
                  ref={ref}
                  as="a"
                  href={`#${id}`}
                  outline="0"
                  _focusVisible={{
                    boxShadow: "inline",
                  }}
                  transitionProperty="colors"
                  transitionDuration="normal"
                >
                  <Box
                    data-selected={dataAttr(isSelected)}
                    py="sm"
                    pl={`calc(${lv - 1} * ${pl})`}
                    position="relative"
                    zIndex="-1"
                    userSelect="none"
                    borderLeftWidth="1px"
                    borderLeftColor={isSelected ? `primary.400` : "border"}
                    _selected={{
                      color: [`black`, "white"],
                      bg: [`primary.300`, `primary.300`],
                    }}
                    _hover={{
                      color: isSelected ? undefined : ["black", "white"],
                    }}
                    _before={{
                      content: "''",
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      bg: "white",
                      opacity: 0.8,
                    }}
                    _dark={{
                      _before: {
                        bg: "black",
                        opacity: 0.86,
                      },
                    }}
                  >
                    <TextWithCode
                      position="relative"
                      zIndex="yamcha"
                      isTruncated
                    >
                      {title}
                    </TextWithCode>
                  </Box>
                </ListItem>
              )
            })}
          </List>
        </VStack>

        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          zIndex="kurillin"
          w="full"
          h="4"
          bgGradient={[
            "linear(to-t, rgba(255, 255, 255, 0), white)",
            "linear(to-t, rgba(0, 0, 0, 0), black)",
          ]}
        />
        <Box
          position="absolute"
          bottom="0"
          left="0"
          right="0"
          zIndex="kurillin"
          w="full"
          h="4"
          bgGradient={[
            "linear(to-b, rgba(255, 255, 255, 0), white)",
            "linear(to-b, rgba(0, 0, 0, 0), black)",
          ]}
        />
      </VStack>
    )
  }),
)
