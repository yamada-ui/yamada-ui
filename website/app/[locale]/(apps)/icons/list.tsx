"use client"

import type { CenterProps, StackProps } from "@yamada-ui/react"
import type { ElementType, RefObject } from "react"
import {
  AspectRatio,
  assignRef,
  BirdIcon,
  Box,
  Button,
  Center,
  CloseButton,
  Drawer,
  FishIcon,
  Grid,
  Heading,
  HStack,
  Icon,
  InfiniteScrollArea,
  Input,
  InputGroup,
  noop,
  RabbitIcon,
  SearchIcon,
  SnailIcon,
  SquirrelIcon,
  Text,
  Tooltip,
  useDisclosure,
  VStack,
} from "@yamada-ui/react"
import { matchSorter } from "match-sorter"
import { useTranslations } from "next-intl"
import { Fragment, useCallback, useMemo, useRef, useState } from "react"
import { CodePreview } from "@/components"
import { getIcons } from "@/data"

const ICONS = getIcons()
const COUNT = ICONS.length
const PER_PAGE = 300

export interface ListProps extends StackProps {}

export function List({ ...rest }: ListProps) {
  const t = useTranslations("icons")
  const [index, setIndex] = useState(0)
  const [value, setValue] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const resetRef = useRef<() => void>(noop)
  const openRef = useRef<(name: string, Icon: ElementType) => void>(noop)

  const onSearch = useCallback((value: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)

    timeoutRef.current = setTimeout(() => setValue(value), 400)
  }, [])

  const onReset = useCallback(() => {
    if (inputRef.current) inputRef.current.value = ""

    setValue("")
  }, [])

  const hits = useMemo(() => {
    setIndex(0)
    resetRef.current()

    if (value.length) {
      return matchSorter(ICONS, value, {
        keys: ["tags", "name"],
      })
    } else {
      return ICONS
    }
  }, [value])

  const data = useMemo(
    () => hits.slice(0, PER_PAGE * (index + 1)),
    [hits, index],
  )

  const totalIndex = Math.ceil(hits.length / PER_PAGE) - 1

  return (
    <>
      <VStack flex="1" gap={{ base: "lg", md: "md" }} {...rest}>
        <InputGroup.Root>
          <InputGroup.Element>
            <SearchIcon fontSize="xl" />
          </InputGroup.Element>
          <Input
            ref={inputRef}
            name="search"
            placeholder={t("placeholder", { count: COUNT })}
            onChange={(ev) => onSearch(ev.target.value)}
          />
        </InputGroup.Root>

        <InfiniteScrollArea
          disabled={index === totalIndex}
          flex="1"
          loading={<Box h="px" w="full" />}
          resetRef={resetRef}
          rootMargin="0px 0px 640px 0px"
          onLoad={({ finish, index }) => {
            setIndex(index)

            if (index >= totalIndex) finish()
          }}
        >
          {data.length ? (
            <Grid
              gap="md"
              templateColumns="repeat(auto-fill, minmax(56px, 1fr))"
            >
              {data.map(({ name, Icon }) => (
                <Tooltip key={name} content={`${name}Icon`}>
                  <AspectRatio ratio={1 / 1}>
                    <Center
                      as="button"
                      aria-label={name}
                      bg={{
                        base: "bg.panel",
                        _hover: ["bg.subtle", "bg.muted"],
                      }}
                      cursor="pointer"
                      focusVisibleRing="outline"
                      outline="0"
                      rounded="l2"
                      transitionDuration="moderate"
                      transitionProperty="background"
                      onClick={() => openRef.current(name, Icon)}
                    >
                      <Icon fontSize="2xl" />
                    </Center>
                  </AspectRatio>
                </Tooltip>
              ))}
            </Grid>
          ) : (
            <NotFound onReset={onReset} />
          )}
        </InfiniteScrollArea>
      </VStack>

      <Preview onOpenRef={openRef} />
    </>
  )
}

interface NotFoundProps extends CenterProps {
  onReset: () => void
}

function NotFound({ onReset, ...rest }: NotFoundProps) {
  const t = useTranslations("icons")

  const Icon = [RabbitIcon, SnailIcon, SquirrelIcon, BirdIcon, FishIcon][
    Math.floor(Math.random() * 5)
  ]!

  return (
    <Center flex="1" flexDirection="column" gap="lg" {...rest}>
      <Icon
        fontSize="12rem"
        strokeWidth="1"
        _hover={{ transform: "scaleX(-1)" }}
      />

      <Text color="fg.muted" fontSize="lg" lineClamp={1}>
        {t("not-found")}
      </Text>

      <Button size="sm" variant="subtle" onClick={onReset}>
        {t("reset")}
      </Button>
    </Center>
  )
}

interface PreviewProps extends Drawer.RootProps {
  onOpenRef: RefObject<(name: string, Icon: ElementType) => void>
}

function Preview({ onOpenRef, ...rest }: PreviewProps) {
  const data = useRef<null | { name: string; Icon: ElementType }>(null)
  const { open, onClose, onOpen } = useDisclosure({
    onClose: () => {
      data.current = null
    },
  })

  assignRef(onOpenRef, (name, Icon) => {
    data.current = { name, Icon }
    onOpen()
  })

  const { name, Icon: PreviewIcon = Fragment } = data.current ?? {}

  return (
    <Drawer.Root
      closeOnDrag
      open={open}
      placement="block-end"
      withDragBar={false}
      onClose={onClose}
      onOpen={onOpen}
      {...rest}
    >
      <Drawer.Content
        alignItems="stretch"
        display="grid"
        gap="lg"
        gridTemplateColumns={{ base: "auto 1fr", lg: "1fr" }}
        p={{ base: "lg", md: "md" }}
      >
        <Center
          bg="bg"
          boxSize={{ base: "auto", md: "xs" }}
          gridRow={{ base: "1 / 3", md: "2 / 3" }}
          mx="auto"
          p="md"
          position="relative"
          rounded="l4"
        >
          <PreviewIcon fontSize="12rem" zIndex="1" />

          <Icon
            boxSize="full"
            fill="none"
            left="0"
            position="absolute"
            stroke="border.subtle"
            strokeWidth="0.1"
            top="0"
            viewBox="0 0 24 24"
          >
            {Array.from({ length: 23 }).map((_, index) => {
              index += 1

              return (
                <g key={index}>
                  <line x1="0" x2="24" y1={index} y2={index} />
                  <line x1={index} x2={index} y1="0" y2="24" />
                </g>
              )
            })}
          </Icon>
        </Center>

        <HStack alignItems="flex-start" minW="0" w="full">
          <Heading as="h3" flex="1" lineClamp={1}>
            {name}
          </Heading>

          <Drawer.CloseTrigger>
            <CloseButton />
          </Drawer.CloseTrigger>
        </HStack>

        <VStack minW="0">
          <CodePreview
            lang="tsx"
            bg="bg"
            code={`import { ${name} } from "@yamada-ui/react"`}
            m="0"
          />

          <CodePreview lang="tsx" bg="bg" code={`<${name}Icon />`} m="0" />
        </VStack>
      </Drawer.Content>
    </Drawer.Root>
  )
}
