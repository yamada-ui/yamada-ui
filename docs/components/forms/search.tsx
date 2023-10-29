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
} from '@yamada-ui/react'
import { useRouter } from 'next/router'
import { memo, useEffect, useState } from 'react'
import { MagnifyingGlass } from 'components/media-and-icons'
import { useI18n } from 'contexts/i18n-context'
import { useEventListener } from 'hooks/use-event-listener'

const ACTION_DEFAULT_KEY = 'Ctrl'
const ACTION_APPLE_KEY = '⌘'

export type SearchProps = StackProps & {}

export const Search = memo(
  forwardRef<SearchProps, 'button'>(({ ...rest }, ref) => {
    const { events } = useRouter()
    const { t, tc } = useI18n()
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

        <Modal size='3xl' isOpen={isOpen} onClose={onClose} withCloseButton={false} placement='top'>
          <ModalBody position='relative'>
            <ui.input
              w='full'
              pl='lg'
              placeholder={t('component.forms.search.placeholder') as string}
              maxLength={64}
              autoComplete='off'
              autoCorrect='off'
              spellCheck='false'
              _placeholder={{
                color: ['gray.500', 'whiteAlpha.500'],
              }}
            />

            <MagnifyingGlass
              position='absolute'
              top='50%'
              left='md'
              transform='translateY(-50%)'
              color={['gray.500', 'whiteAlpha.500']}
              pointerEvents='none'
            />
          </ModalBody>
        </Modal>
      </>
    )
  }),
)
