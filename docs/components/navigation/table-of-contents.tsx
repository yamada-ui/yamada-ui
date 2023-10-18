import {
  Box,
  HStack,
  List,
  ListItem,
  StackProps,
  Text,
  VStack,
  dataAttr,
  forwardRef,
  useToken,
} from '@yamada-ui/react'
import { memo, useState } from 'react'
import { List as ListIcon } from 'components/media-and-icons'
import { TextWithCode } from 'components/typography'
import { Content } from 'contentlayer/generated'
import { useI18n } from 'contexts/i18n-context'
import { useEventListener } from 'hooks/use-event-listener'

export type TableOfContentsProps = StackProps & { contents: Content[] }

export const TableOfContents = memo(
  forwardRef<TableOfContentsProps, 'div'>(({ contents, ...rest }, ref) => {
    const [selectedId, setSelectedId] = useState<string>('')
    const pl = useToken('spaces', '4')

    const { t } = useI18n()

    useEventListener(
      'scroll',
      () => {
        let currentId = ''

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

    return (
      <VStack
        ref={ref}
        as='nav'
        position='sticky'
        top='4rem'
        w='sm'
        maxH='calc(100dvh - 4rem)'
        {...rest}
      >
        <VStack pt='lg' pb='16' pl='lg' overflowY='scroll' overscrollBehavior='contain'>
          <HStack gap='sm'>
            <ListIcon />
            <Text>{t('component.table-of-contents.title')}</Text>
          </HStack>

          <List gap='0' fontSize='sm' color='muted' ml='sm'>
            {contents.map(({ lv, title, id }) => {
              const isSelected = selectedId == id

              return (
                <ListItem
                  key={id}
                  as='a'
                  href={`#${id}`}
                  userSelect='none'
                  pl={`calc(${lv - 1} * ${pl})`}
                  py='sm'
                  outline='0'
                  borderLeftWidth='1px'
                  borderLeftColor={isSelected ? `primary.400` : 'border'}
                  data-selected={dataAttr(isSelected)}
                  _selected={{
                    color: [`black`, 'white'],
                    bg: [`primary.300`, `primary.300`],
                  }}
                  _hover={{
                    color: isSelected ? undefined : ['black', 'white'],
                  }}
                  _focusVisible={{
                    boxShadow: 'inner-outline',
                  }}
                  transitionProperty='colors'
                  transitionDuration='normal'
                  position='relative'
                  _before={{
                    content: "''",
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    bg: 'white',
                    opacity: 0.8,
                  }}
                  _dark={{
                    _before: {
                      bg: 'black',
                      opacity: 0.86,
                    },
                  }}
                >
                  <TextWithCode position='relative' zIndex='yamcha' isTruncated>
                    {title}
                  </TextWithCode>
                </ListItem>
              )
            })}
          </List>
        </VStack>

        <Box
          position='absolute'
          top='0'
          left='0'
          right='0'
          zIndex='kurillin'
          w='full'
          h='4'
          bgGradient={[
            'linear(to-t, rgba(255, 255, 255, 0), white)',
            'linear(to-t, rgba(0, 0, 0, 0), black)',
          ]}
        />
        <Box
          position='absolute'
          bottom='0'
          left='0'
          right='0'
          zIndex='kurillin'
          w='full'
          h='4'
          bgGradient={[
            'linear(to-b, rgba(255, 255, 255, 0), white)',
            'linear(to-b, rgba(0, 0, 0, 0), black)',
          ]}
        />
      </VStack>
    )
  }),
)
