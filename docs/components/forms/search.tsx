import {
  ui,
  HStack,
  Kbd,
  Modal,
  ModalBody,
  StackProps,
  Text,
  forwardRef,
  handlerAll,
  useDisclosure,
  isApple,
  ModalProps,
  Divider,
  VStack,
  ModalHeader,
  Highlight,
  dataAttr,
  useUpdateEffect,
} from '@yamada-ui/react'
import { matchSorter } from 'match-sorter'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import {
  FC,
  KeyboardEvent,
  RefObject,
  createRef,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import scrollIntoView from 'scroll-into-view-if-needed'
import { File, Hash, MagnifyingGlass } from 'components/media-and-icons'
import { useI18n } from 'contexts/i18n-context'
import { useEventListener } from 'hooks/use-event-listener'
const ACTION_DEFAULT_KEY = 'Ctrl'
const ACTION_APPLE_KEY = '⌘'

export type SearchProps = StackProps & {}

export const Search = memo(
  forwardRef<SearchProps, 'button'>(({ ...rest }, ref) => {
    const { events } = useRouter()
    const { tc } = useI18n()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [actionKey, setActionKey] = useState(ACTION_APPLE_KEY)

    useEffect(() => {
      if (!isApple()) setActionKey(ACTION_DEFAULT_KEY)
    }, [])

    useEffect(() => {
      events.on('routeChangeComplete', onClose)

      return () => {
        events.off('routeChangeComplete', onClose)
      }
    }, [onClose, events])

    useEventListener('keydown', (ev) => {
      if (ev.key.toLowerCase() !== 'k' || !ev[isApple() ? 'metaKey' : 'ctrlKey']) return

      ev.preventDefault()

      isOpen ? onClose() : onOpen()
    })

    return (
      <>
        <HStack
          as='button'
          type='button'
          ref={ref}
          w='full'
          maxW='xl'
          h='10'
          px='3'
          outline='0'
          border='1px solid'
          borderColor={[`gray.200`, `whiteAlpha.300`]}
          bg={['white', 'black']}
          rounded='md'
          gap='sm'
          color={['gray.600', 'whiteAlpha.600']}
          _focusVisible={{ shadow: 'outline' }}
          transitionProperty='common'
          transitionDuration='slower'
          {...rest}
          onClick={handlerAll(rest.onClick, onOpen)}
        >
          <MagnifyingGlass />
          <Text flex='1'>{tc('component.forms.search.message')}</Text>
          <Kbd>{actionKey} + K</Kbd>
        </HStack>

        <SearchModal isOpen={isOpen} onClose={onClose} />
      </>
    )
  }),
)

type SearchModalProps = ModalProps

const SearchModal: FC<SearchModalProps> = memo(({ isOpen, onClose, ...rest }) => {
  const [query, setQuery] = useState<string>('')
  const [selectedIndex, setSelectedIndex] = useState<number>(0)
  const { t, contents } = useI18n()
  const router = useRouter()
  const eventRef = useRef<'mouse' | 'keyboard'>(null)
  const directionRef = useRef<'up' | 'down'>('down')
  const compositionRef = useRef<boolean>(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<Map<number, RefObject<HTMLDivElement>>>(new Map())

  const hits = useMemo(() => {
    if (!query.length) return []

    return matchSorter(contents, query, {
      keys: ['hierarchy.lv1', 'hierarchy.lv2', 'hierarchy.lv3', 'description', 'title'],
    }).slice(0, 20)
  }, [query, contents])

  const onKeyDown = useCallback(
    (ev: KeyboardEvent<HTMLInputElement>) => {
      if (compositionRef.current) return

      eventRef.current = 'keyboard'

      const actions: Record<string, Function | undefined> = {
        ArrowDown: () => {
          if (selectedIndex + 1 === hits.length) return

          directionRef.current = 'down'
          setSelectedIndex(selectedIndex + 1)
        },
        ArrowUp: () => {
          if (selectedIndex === 0) return

          directionRef.current = 'up'
          setSelectedIndex(selectedIndex - 1)
        },
        Enter: () => {
          if (!hits.length) return

          onClose()
          router.push(hits[selectedIndex].slug)
        },
        Home: () => {
          directionRef.current = 'up'
          setSelectedIndex(0)
        },
        End: () => {
          directionRef.current = 'down'
          setSelectedIndex(hits.length - 1)
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
    if (isOpen) return

    setQuery('')
  }, [isOpen])

  useUpdateEffect(() => {
    setSelectedIndex(0)
  }, [query])

  useUpdateEffect(() => {
    if (!containerRef.current || eventRef.current === 'mouse') return

    const itemRef = itemRefs.current.get(selectedIndex)

    if (!itemRef.current) return

    scrollIntoView(itemRef.current, {
      behavior: (actions) =>
        actions.forEach(({ el, top }) => {
          if (directionRef.current === 'down') {
            el.scrollTop = top + 16
          } else {
            el.scrollTop = top - 17
          }
        }),
      scrollMode: 'if-needed',
      block: 'nearest',
      inline: 'nearest',
      boundary: containerRef.current,
    })
  }, [selectedIndex])

  return (
    <Modal
      size='3xl'
      withCloseButton={false}
      placement='top'
      isOpen={isOpen}
      onClose={onClose}
      {...rest}
    >
      <ModalHeader fontWeight='normal' fontSize='md' pb='md'>
        <HStack position='relative' w='full'>
          <ui.input
            flex='1'
            pl='lg'
            placeholder={t('component.forms.search.placeholder') as string}
            maxLength={64}
            autoComplete='off'
            autoCorrect='off'
            spellCheck='false'
            _placeholder={{
              color: ['gray.500', 'whiteAlpha.500'],
            }}
            value={query}
            onChange={(ev) => setQuery(ev.target.value)}
            onKeyDown={onKeyDown}
            onCompositionStart={() => {
              compositionRef.current = true
            }}
            onCompositionEnd={() => {
              compositionRef.current = false
            }}
          />

          <MagnifyingGlass
            position='absolute'
            top='50%'
            left='0'
            transform='translateY(-50%)'
            color={['gray.500', 'whiteAlpha.500']}
            pointerEvents='none'
          />
        </HStack>
      </ModalHeader>

      {hits.length ? (
        <ModalBody ref={containerRef} my='0' pb='md'>
          <Divider />

          <VStack as='ul' gap='sm'>
            {hits.map(({ title, type, slug, hierarchy }, index) => {
              const isSelected = index === selectedIndex
              const ref = createRef<HTMLDivElement>()

              itemRefs.current.set(index, ref)

              return (
                <HStack
                  as={NextLink}
                  ref={ref}
                  key={slug}
                  href={slug}
                  borderWidth='1px'
                  rounded='md'
                  minH='16'
                  py='sm'
                  px='md'
                  data-selected={dataAttr(isSelected)}
                  bg={['gray.100', 'whiteAlpha.50']}
                  transitionProperty='colors'
                  transitionDuration='normal'
                  _focus={{ outline: 'none' }}
                  _focusVisible={{ boxShadow: 'outline' }}
                  _selected={{ bg: ['gray.200', 'whiteAlpha.100'] }}
                  _active={{ bg: ['gray.300', 'whiteAlpha.200'] }}
                  onClick={onClose}
                  onMouseEnter={() => {
                    eventRef.current = 'mouse'
                    setSelectedIndex(index)
                  }}
                >
                  {type === 'page' ? (
                    <File fontSize='xl' color={['gray.600', 'whiteAlpha.500']} />
                  ) : (
                    <Hash fontSize='xl' color={['gray.500', 'whiteAlpha.400']} />
                  )}

                  <VStack gap='0'>
                    {type === 'fragment' ? (
                      <Text fontSize='xs' color='muted'>
                        {hierarchy.lv1}
                      </Text>
                    ) : null}

                    <Highlight
                      query={query}
                      markProps={{
                        variant: 'solid',
                      }}
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

SearchModal.displayName = 'SearchModal'
