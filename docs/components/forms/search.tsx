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
} from '@yamada-ui/react'
import { matchSorter } from 'match-sorter'
import { useRouter } from 'next/router'
import { FC, KeyboardEvent, memo, useCallback, useEffect, useMemo, useState } from 'react'
import { MagnifyingGlass } from 'components/media-and-icons'
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

const SearchModal: FC<SearchModalProps> = memo(({ isOpen, ...rest }) => {
  const [query, setQuery] = useState<string>('')
  const { t, contents } = useI18n()

  const hits = useMemo(() => {
    if (!query.length) return []

    return matchSorter(contents, query, {
      keys: ['hierarchy.lv1', 'hierarchy.lv2', 'hierarchy.lv3', 'content'],
    }).slice(0, 40)
  }, [query, contents])

  const onKeyDown = useCallback((ev: KeyboardEvent<HTMLInputElement>) => {
    console.log(ev)
  }, [])

  useEffect(() => {
    if (isOpen) return

    setQuery('')
  }, [isOpen])

  return (
    <Modal size='3xl' withCloseButton={false} placement='top' isOpen={isOpen} {...rest}>
      <ModalBody>
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

        {hits.length ? (
          <>
            <Divider />

            <VStack gap='sm'></VStack>
          </>
        ) : null}
      </ModalBody>
    </Modal>
  )
})

SearchModal.displayName = 'SearchModal'
