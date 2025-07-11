import type { IconNames } from "@yamada-ui/lucide"
import type { InputGroupProps, InputProps, StackProps } from "@yamada-ui/react"
import type { FC, MutableRefObject } from "react"
import { icons, SearchIcon } from "@yamada-ui/lucide"
import {
  AspectRatio,
  assignRef,
  Box,
  Center,
  Grid,
  InfiniteScrollArea,
  Input,
  InputGroup,
  InputLeftElement,
  noop,
  Tooltip,
  VStack,
} from "@yamada-ui/react"
import { useI18n } from "contexts"
import { matchSorter } from "match-sorter"
import { memo, useCallback, useMemo, useRef, useState } from "react"
import { IconDrawer } from "./icon-drawer"
import { NotFound } from "./not-found"
import { TAGS } from "./tags"

const resolvedIcons = Object.entries(icons).filter(
  ([name]) => !name.endsWith("Icon"),
)

const DATA = resolvedIcons.map(([name, Icon]) => ({
  name,
  Icon,
  tags: TAGS[name] ?? [],
}))
const PER_PAGE = 200
const TOTAL_COUNT = resolvedIcons.length

export interface ListProps extends StackProps {}

export const List: FC<ListProps> = memo(({ ...rest }) => {
  const [index, setIndex] = useState<number>(0)
  const [value, setValue] = useState("")
  const openRef = useRef<(name: IconNames) => void>(noop)

  const timeoutIdRef = useRef<NodeJS.Timeout | null>(null)
  const valueResetRef = useRef<() => void>(noop)
  const scrollResetRef = useRef<() => void>(noop)

  const onSearch = useCallback((value: string) => {
    if (timeoutIdRef.current) clearTimeout(timeoutIdRef.current)

    timeoutIdRef.current = setTimeout(() => {
      setValue(value)
    }, 400)
  }, [])

  const hits = useMemo(() => {
    setIndex(0)
    scrollResetRef.current()

    if (value.length) {
      return matchSorter(DATA, value, {
        keys: ["tags", "name"],
      })
    } else {
      return DATA
    }
  }, [value])

  const data = useMemo(
    () => hits.slice(0, PER_PAGE * (index + 1)),
    [hits, index],
  )

  const totalIndex = Math.ceil(hits.length / PER_PAGE) - 1

  return (
    <>
      <VStack gap={{ base: "xl", md: "md" }} mt="6" {...rest}>
        <Search valueResetRef={valueResetRef} onSearch={onSearch} />

        <InfiniteScrollArea
          disabled={index === totalIndex}
          loading={<Box h="px" w="full" />}
          resetRef={scrollResetRef}
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
                <Tooltip key={name} label={`${name}Icon`}>
                  <AspectRatio ratio={1 / 1}>
                    <Center
                      as="button"
                      aria-label={name}
                      bg={["blackAlpha.50", "whiteAlpha.50"]}
                      cursor="pointer"
                      outline="0"
                      rounded="md"
                      transitionDuration="slower"
                      transitionProperty="background"
                      _focusVisible={{ boxShadow: "outline" }}
                      _hover={{ bg: ["blackAlpha.100", "whiteAlpha.100"] }}
                      onClick={() => openRef.current(name as IconNames)}
                    >
                      <Icon fontSize="2xl" />
                    </Center>
                  </AspectRatio>
                </Tooltip>
              ))}
            </Grid>
          ) : (
            <NotFound valueResetRef={valueResetRef} />
          )}
        </InfiniteScrollArea>
      </VStack>

      <IconDrawer openRef={openRef} />
    </>
  )
})

List.displayName = "List"

interface SearchProps extends InputProps {
  valueResetRef: MutableRefObject<() => void>
  onSearch: (value: string) => void
  containerProps?: InputGroupProps
}

const Search: FC<SearchProps> = memo(
  ({ valueResetRef, containerProps, onSearch, ...rest }) => {
    const [value, setValue] = useState<string>("")
    const { t } = useI18n()

    assignRef(valueResetRef, () => {
      onSearch("")
      setValue("")
    })

    return (
      <InputGroup {...containerProps}>
        <InputLeftElement>
          <SearchIcon color="muted" fontSize="xl" />
        </InputLeftElement>

        <Input
          placeholder={t("icons.placeholder", TOTAL_COUNT)}
          value={value}
          {...rest}
          onChange={(ev) => {
            onSearch(ev.target.value)
            setValue(ev.target.value)
          }}
        />
      </InputGroup>
    )
  },
)

Search.displayName = "Search"
