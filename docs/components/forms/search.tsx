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
} from '@yamada-ui/react'
import { memo } from 'react'
import { MagnifyingGlass } from '../media-and-icons'
import { useI18n } from 'contexts'

export type SearchProps = StackProps & {}

export const Search = memo(
  forwardRef<SearchProps, 'button'>(({ ...rest }, ref) => {
    const { t, tc } = useI18n()
    const { isOpen, onOpen, onClose } = useDisclosure()

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
          rounded='md'
          gap='sm'
          color={['gray.500', 'whiteAlpha.500']}
          _focus={{ shadow: 'outline' }}
          transitionProperty='common'
          transitionDuration='slower'
          {...rest}
          onClick={handlerAll(rest.onClick, onOpen)}
        >
          <MagnifyingGlass />

          <Text flex='1'>{tc('component.forms.search.message')}</Text>

          <Kbd>{tc('component.forms.search.command')}</Kbd>
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
