import {
  Box,
  ChevronIcon,
  List,
  ListIcon,
  ListItem,
  StackProps,
  Text,
  VStack,
  forwardRef,
  toneColor,
  useColorMode,
  useTheme,
  useToken,
} from '@yamada-ui/react'
import { memo, useState } from 'react'
import { Content } from 'contentlayer/generated'
import { useI18n } from 'contexts'
import { useEventListener } from 'hooks'

export type TableOfContentsProps = StackProps & { contents: Content[] }

export const TableOfContents = memo(
  forwardRef<TableOfContentsProps, 'div'>(({ contents, ...rest }, ref) => {
    const [activeId, setActiveId] = useState<string>('')
    const pl = useToken('spaces', '5')
    const { theme } = useTheme()
    const { colorMode } = useColorMode()
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

        setActiveId(currentId)
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
        maxW='sm'
        maxH='calc(100dvh - 4rem)'
        overflowY='scroll'
        overscrollBehavior='contain'
        {...rest}
      >
        <VStack pt='md' pb='16' pl='md'>
          <Text>{t('component.table-of-contents.title')}</Text>

          <List gap='sm' fontSize='sm' color='muted'>
            {contents.map(({ lv, title, id }) => {
              const isActive = activeId == id

              return (
                <ListItem
                  key={id}
                  as='a'
                  href={`#${id}`}
                  pl={`calc(${lv - 2} * ${pl})`}
                  color={
                    isActive
                      ? [
                          toneColor('brand', 500)(theme, colorMode),
                          toneColor('brand', 400)(theme, colorMode),
                        ]
                      : undefined
                  }
                  _hover={{
                    color: isActive ? undefined : ['black', 'white'],
                  }}
                  transitionProperty='colors'
                  transitionDuration='normal'
                  noOfLines={1}
                >
                  <ListIcon as={ChevronIcon} transform='rotate(-90deg)' fontSize='1.3em' />
                  {title}
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
