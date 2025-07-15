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
import {
  Fragment,
  memo,
  useCallback,
  useRef,
  useState,
  useTransition,
} from "react"
import { CodePreview } from "@/components"
import { iconContents } from "@/data"

const PER_PAGE = 200

export interface ListProps extends StackProps {}

export function List({ ...rest }: ListProps) {
  const t = useTranslations("icons")
  const [value, setValue] = useState("")
  const total = iconContents.length
  const hitsRef = useRef(iconContents)
  const [list, setList] = useState(iconContents.slice(0, PER_PAGE))
  const resetRef = useRef<() => void>(noop)
  const openRef = useRef<(title: string, Icon: ElementType) => void>(noop)
  const totalIndex = Math.ceil(total / PER_PAGE) - 1
  const [, startTransition] = useTransition()

  const onSearch = useCallback((value: string) => {
    setValue(value)

    startTransition(() => {
      resetRef.current()

      let hits = iconContents

      if (value.length)
        hits = matchSorter(iconContents, value, {
          keys: ["title", "keywords"],
        })

      hitsRef.current = hits

      setList(hits.slice(0, PER_PAGE))
    })
  }, [])

  const onReset = useCallback(() => {
    setValue("")
    setList(iconContents.slice(0, PER_PAGE))
    resetRef.current()
    hitsRef.current = iconContents
  }, [])

  const onOpen = useCallback(
    (title: string, Icon: ElementType) => openRef.current(title, Icon),
    [],
  )

  return (
    <>
      <VStack
        id="icons"
        flex="1"
        gap="{space}"
        scrollMarginTop="{header-height}"
        {...rest}
      >
        <InputGroup.Root>
          <InputGroup.Element>
            <SearchIcon fontSize="xl" />
          </InputGroup.Element>
          <Input
            name="search"
            placeholder={t("placeholder", { total })}
            value={value}
            onChange={(ev) => onSearch(ev.target.value)}
          />
        </InputGroup.Root>

        <InfiniteScrollArea
          disabled={list.length === hitsRef.current.length}
          flex="1"
          loading={<Box h="px" w="full" />}
          resetRef={resetRef}
          rootMargin="0px 0px 600px 0px"
          onLoad={({ finish, index }) => {
            setList(hitsRef.current.slice(0, PER_PAGE * (index + 1)))

            if (index >= totalIndex) finish()
          }}
        >
          {list.length ? (
            <Grid
              gap="md"
              templateColumns="repeat(auto-fill, minmax(56px, 1fr))"
            >
              {list.map(({ Icon, title }) => (
                <IconButton
                  key={title}
                  Icon={Icon}
                  title={title}
                  onOpen={onOpen}
                />
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

interface IconButtonProps extends CenterProps {
  Icon: ElementType
  title: string
  onOpen: (title: string, Icon: ElementType) => void
}

const IconButton = memo(function IconButton({
  Icon,
  title,
  onOpen,
  ...rest
}: IconButtonProps) {
  const t = useTranslations("icons")

  return (
    <Tooltip content={title}>
      <AspectRatio ratio={1 / 1}>
        <Center
          as="button"
          aria-label={t("openPreview", { title })}
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
          onClick={() => onOpen(title, Icon)}
          {...rest}
        >
          <Icon fontSize="2xl" />
        </Center>
      </AspectRatio>
    </Tooltip>
  )
})

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
        {t("notFound")}
      </Text>

      <Button size="sm" variant="subtle" onClick={onReset}>
        {t("reset")}
      </Button>
    </Center>
  )
}

interface PreviewProps extends Drawer.RootProps {
  onOpenRef: RefObject<(title: string, Icon: ElementType) => void>
}

const Preview = memo(function Preview({ onOpenRef, ...rest }: PreviewProps) {
  const data = useRef<null | { Icon: ElementType; title: string }>(null)
  const { open, onClose, onOpen } = useDisclosure({
    onClose: () => {
      data.current = null
    },
  })

  assignRef(onOpenRef, (title, Icon) => {
    data.current = { Icon, title }
    onOpen()
  })

  const { Icon: PreviewIcon = Fragment, title } = data.current ?? {}

  return (
    <Drawer.Root
      autoFocus={false}
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
        p="{space}"
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
            {title}
          </Heading>

          <Drawer.CloseTrigger>
            <CloseButton />
          </Drawer.CloseTrigger>
        </HStack>

        <VStack minW="0">
          <CodePreview
            lang="tsx"
            bg="bg"
            code={`import { ${title} } from "@yamada-ui/react"`}
            m="0"
          />

          <CodePreview lang="tsx" bg="bg" code={`<${title} />`} m="0" />
        </VStack>
      </Drawer.Content>
    </Drawer.Root>
  )
})
