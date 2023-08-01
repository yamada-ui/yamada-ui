import {
  Box,
  Center,
  ChevronIcon,
  Collapse,
  HStack,
  List,
  ListItem,
  StackProps,
  Tag,
  Text,
  VStack,
  forwardRef,
  toneColor,
  transparentizeColor,
  useBoolean,
  useColorMode,
  useTheme,
  useToken,
} from '@yamada-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, memo, useEffect } from 'react'
import { DocWithChildren } from 'contentlayer/generated'

type ListItemLinkProps = Pick<
  RecursiveListItemProps,
  'title' | 'label' | 'slug' | 'isNested' | 'children'
> & { isOpen?: boolean; onToggle?: () => void }

const ListItemLink: FC<ListItemLinkProps> = memo(
  ({ title, label, slug, isNested, isOpen, onToggle, children }) => {
    const { theme } = useTheme()
    const { colorMode } = useColorMode()
    const { asPath } = useRouter()
    const outline = useToken('shadows', 'outline')

    const isActive = asPath === slug

    return (
      <HStack
        cursor='pointer'
        userSelect='none'
        rounded='md'
        gap='0'
        color={
          isActive
            ? [toneColor('brand', 600)(theme, colorMode), 'white']
            : isNested
            ? 'muted'
            : undefined
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
          bg: isActive ? undefined : ['blackAlpha.50', 'whiteAlpha.50'],
        }}
        transitionProperty='colors'
        transitionDuration='normal'
      >
        <Text
          as={Link}
          href={slug}
          display='inline-flex'
          pl='3'
          py='sm'
          flex='1'
          rounded='md'
          _focus={{
            outline: 'none',
          }}
          _focusVisible={{
            boxShadow: `${outline} inset`,
          }}
          onClick={!isOpen ? onToggle : undefined}
        >
          <Text as='span' noOfLines={1}>
            {title}
          </Text>

          {label ? (
            <Tag
              size='sm'
              ms='sm'
              colorScheme={
                label === 'New'
                  ? 'blue'
                  : label === 'Experimental'
                  ? 'purple'
                  : label === 'Planned'
                  ? 'orange'
                  : 'gray'
              }
            >
              {label}
            </Tag>
          ) : null}
        </Text>

        {isNested && children.length ? (
          <Center
            as='button'
            px='3'
            py='sm'
            fontSize='1.5em'
            rounded='md'
            boxSizing='content-box'
            _focus={{
              outline: 'none',
            }}
            _focusVisible={{
              boxShadow: `${outline} inset`,
            }}
            onClick={onToggle}
          >
            <ChevronIcon
              transform={isOpen ? undefined : 'rotate(-90deg)'}
              transitionProperty='transform'
              transitionDuration='slow'
            />
          </Center>
        ) : null}
      </HStack>
    )
  },
)

ListItemLink.displayName = 'ListItemLink'

type RecursiveListItemProps = DocWithChildren & { isNested?: boolean }

const RecursiveListItem: FC<RecursiveListItemProps> = memo(
  ({ title, menu, label, slug, children, isNested }) => {
    if (menu) title = menu

    const { asPath, events } = useRouter()

    const [isOpen, { on, off, toggle }] = useBoolean(asPath.startsWith(slug))

    useEffect(() => {
      events.on('routeChangeComplete', () => {
        if (asPath.startsWith(slug)) on()
      })

      return () => {
        events.off('routeChangeComplete', off)
      }
    }, [asPath, events, off, on, slug])

    return (
      <ListItem key={slug}>
        <ListItemLink {...{ title, slug, label, isNested, isOpen, onToggle: toggle, children }} />

        {children.length ? (
          <Collapse isOpen={!isNested || isOpen}>
            <List mt='sm' gap='sm' borderLeftWidth='1px' ml='3' pl='3'>
              {children.map((doc) => (
                <RecursiveListItem key={doc.slug} {...doc} isNested />
              ))}
            </List>
          </Collapse>
        ) : null}
      </ListItem>
    )
  },
)

RecursiveListItem.displayName = 'RecursiveListItem'

export type SidebarProps = StackProps & { tree: DocWithChildren[] }

export const Sidebar = memo(
  forwardRef<SidebarProps, 'aside'>(({ tree, ...rest }, ref) => {
    return (
      <VStack
        ref={ref}
        as='aside'
        position='sticky'
        top='4rem'
        maxW='sm'
        maxH='calc(100dvh - 4rem)'
        {...rest}
      >
        <VStack as='nav' overflowY='scroll' overscrollBehavior='contain'>
          <List pt='md' pb='16' pr='md' gap='sm' fontSize='sm'>
            {tree.map((doc) => (
              <RecursiveListItem key={doc.slug} {...doc} />
            ))}
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
