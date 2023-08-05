import {
  Box,
  HStack,
  List,
  ListItem,
  StackProps,
  Text,
  VStack,
  forwardRef,
  toneColor,
  transparentizeColor,
  useColorMode,
  useTheme,
  useToken,
} from '@yamada-ui/react'
import { memo, useState } from 'react'
import { List as ListIcon } from 'components/media-and-icons'
import { Content } from 'contentlayer/generated'
import { useI18n } from 'contexts'
import { useEventListener } from 'hooks'

export type TableOfContentsProps = StackProps & { contents: Content[] }

export const TableOfContents = memo(
  forwardRef<TableOfContentsProps, 'div'>(({ contents, ...rest }, ref) => {
    const [activeId, setActiveId] = useState<string>('')
    const pl = useToken('spaces', '4')
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
              const isActive = activeId == id

              return (
                <ListItem
                  key={id}
                  as='a'
                  href={`#${id}`}
                  pl={`calc(${lv - 1} * ${pl})`}
                  py='sm'
                  borderLeftWidth='1px'
                  borderLeftColor={
                    isActive
                      ? [
                          toneColor('brand', 300)(theme, colorMode),
                          toneColor('brand', 200)(theme, colorMode),
                        ]
                      : 'border'
                  }
                  bg={
                    isActive
                      ? [
                          transparentizeColor(toneColor('brand', 400)(theme, colorMode), 0.08)(
                            theme,
                            colorMode,
                          ),
                          transparentizeColor(toneColor('brand', 200)(theme, colorMode), 0.12)(
                            theme,
                            colorMode,
                          ),
                        ]
                      : undefined
                  }
                  _hover={{
                    color: isActive ? undefined : ['black', 'white'],
                  }}
                  transitionProperty='colors'
                  transitionDuration='normal'
                  isTruncated
                >
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
