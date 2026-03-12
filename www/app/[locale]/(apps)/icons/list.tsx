"use client"

import type { CenterProps, StackProps } from "@yamada-ui/react"
import type { ElementType } from "react"
import {
  BirdIcon,
  Button,
  Center,
  FishIcon,
  Grid,
  icons,
  InfiniteScrollArea,
  Input,
  InputGroup,
  Loading,
  noop,
  IconButton as OriginalIconButton,
  RabbitIcon,
  SearchIcon,
  SnailIcon,
  SquirrelIcon,
  Text,
  Tooltip,
  VStack,
} from "@yamada-ui/react"
import { matchSorter } from "match-sorter"
import { useTranslations } from "next-intl"
import { memo, useCallback, useRef, useState, useTransition } from "react"
import data from "@/data/icons.json"
import { useRouter } from "@/i18n"
import { PreviewDrawer } from "./preview-drawer"

export interface Data {
  categories: string[]
  Icon: ElementType
  keywords: string[]
  name: string
  related: string[]
}

const CONTENTS: Data[] = Object.entries(icons).map(([name, Icon]) => ({
  name,
  Icon,
  ...data[name as keyof typeof data],
}))

const PER_PAGE = 204

export interface ListProps extends StackProps {}

export function List({ ...rest }: ListProps) {
  const t = useTranslations("icons")
  const [value, setValue] = useState("")
  const total = CONTENTS.length
  const hitsRef = useRef(CONTENTS)
  const [list, setList] = useState(CONTENTS.slice(0, PER_PAGE))
  const resetRef = useRef<() => void>(noop)
  const openRef = useRef<(data: Data) => void>(noop)
  const router = useRouter()
  const totalIndex = Math.ceil(total / PER_PAGE) - 1
  const [, startTransition] = useTransition()

  const onSearch = useCallback((value: string) => {
    setValue(value)

    startTransition(() => {
      resetRef.current()

      let hits = CONTENTS

      if (value.length)
        hits = matchSorter(CONTENTS, value, {
          keys: ["title", "keywords"],
        })

      hitsRef.current = hits

      setList(hits.slice(0, PER_PAGE))
    })
  }, [])

  const onReset = useCallback(() => {
    setValue("")
    setList(CONTENTS.slice(0, PER_PAGE))
    resetRef.current()
    hitsRef.current = CONTENTS
  }, [])

  const onOpen = useCallback(
    (data: Data) => {
      router.replace(
        { pathname: "/icons", query: { name: data.name } },
        { scroll: false },
      )
      openRef.current(data)
    },
    [router],
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
          loading={<Loading.Oval fontSize="2xl" />}
          resetRef={resetRef}
          rootMargin="0px 0px 600px 0px"
          rootRef={null}
          onLoad={({ finish, index }) => {
            setList(hitsRef.current.slice(0, PER_PAGE * (index + 1)))

            if (index >= totalIndex) finish()
          }}
        >
          {list.length ? (
            <Grid
              gap="md"
              templateColumns="repeat(auto-fill, minmax(3.5rem, 1fr))"
            >
              {list.map((data) => (
                <IconButton key={data.name} data={data} onOpen={onOpen} />
              ))}
            </Grid>
          ) : (
            <NotFound onReset={onReset} />
          )}
        </InfiniteScrollArea>
      </VStack>

      <PreviewDrawer onOpenRef={openRef} />
    </>
  )
}

interface IconButtonProps {
  data: Data
  onOpen: (data: Data) => void
}

const IconButton = memo(function IconButton({ data, onOpen }: IconButtonProps) {
  const { name, Icon } = data
  const t = useTranslations("icons")

  return (
    <Tooltip content={name}>
      <OriginalIconButton
        as="button"
        variant="subtle"
        aria-label={t("openPreview", { name })}
        aspectRatio={1}
        bg={{
          base: "bg.panel",
          _hover: ["bg.subtle", "bg.muted"],
        }}
        icon={<Icon fontSize="2xl" />}
        onClick={() => onOpen(data)}
      />
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
