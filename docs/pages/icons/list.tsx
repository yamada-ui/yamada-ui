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
import type { InputGroupProps, InputProps, StackProps } from "@yamada-ui/react"
import { useI18n } from "contexts/i18n-context"
import { memo, useCallback, useMemo, useRef, useState } from "react"
import type { FC, MutableRefObject } from "react"
import type { IconNames } from "@yamada-ui/lucide"
import { icons, Search as SearchIcon } from "@yamada-ui/lucide"
import { TAGS } from "./tags"
import { matchSorter } from "match-sorter"
import { NotFound } from "./not-found"
import { IconDrawer } from "./icon-drawer"

const DATA = Object.entries(icons).map(([name, Icon]) => ({
  name,
  tags: TAGS[name] ?? [],
  Icon,
}))
const PER_PAGE = 200
const TOTAL_COUNT = Object.keys(icons).length

export type ListProps = StackProps & {}

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
      <VStack mt="6" gap={{ base: "xl", md: "md" }} {...rest}>
        <Search valueResetRef={valueResetRef} onSearch={onSearch} />

        <InfiniteScrollArea
          isDisabled={index === totalIndex}
          onLoad={({ index, finish }) => {
            setIndex(index)

            if (index >= totalIndex) finish()
          }}
          loading={<Box w="full" h="px" />}
          rootMargin="0px 0px 640px 0px"
          resetRef={scrollResetRef}
        >
          {data.length ? (
            <Grid
              templateColumns="repeat(auto-fill, minmax(56px, 1fr))"
              gap="md"
            >
              {data.map(({ name, Icon }) => (
                <Tooltip key={name} label={name}>
                  <AspectRatio ratio={1 / 1}>
                    <Center
                      as="button"
                      aria-label={name}
                      cursor="pointer"
                      bg={["blackAlpha.50", "whiteAlpha.50"]}
                      rounded="md"
                      outline="0"
                      transitionProperty="background"
                      transitionDuration="slower"
                      _hover={{ bg: ["blackAlpha.100", "whiteAlpha.100"] }}
                      _focusVisible={{ boxShadow: "outline" }}
                      onClick={() => openRef.current(name as IconNames)}
                    >
                      <Icon size="2xl" />
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

type SearchProps = InputProps & {
  onSearch: (value: string) => void
  containerProps?: InputGroupProps
  valueResetRef: MutableRefObject<() => void>
}

const Search: FC<SearchProps> = memo(
  ({ onSearch, containerProps, valueResetRef, ...rest }) => {
    const [value, setValue] = useState<string>("")
    const { t } = useI18n()

    assignRef(valueResetRef, () => {
      onSearch("")
      setValue("")
    })

    return (
      <InputGroup {...containerProps}>
        <InputLeftElement>
          <SearchIcon color={["blackAlpha.700", "whiteAlpha.600"]} size="xl" />
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
