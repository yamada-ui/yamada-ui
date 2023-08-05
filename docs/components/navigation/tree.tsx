import {
  Center,
  ChevronIcon,
  Collapse,
  HStack,
  List,
  ListItem,
  ListProps,
  Tag,
  Text,
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
import { usePage } from 'contexts'

export type TreeProps = ListProps

export const Tree = memo(
  forwardRef<TreeProps, 'div'>(({ ...rest }, ref) => {
    const { tree } = usePage()

    return (
      <List ref={ref} gap='sm' fontSize='sm' {...rest}>
        {tree.map((doc) => (
          <RecursiveListItem key={doc.slug} {...doc} />
        ))}
      </List>
    )
  }),
)

type ListItemLinkProps = RecursiveListItemProps & { isOpen?: boolean; onToggle?: () => void }

const ListItemLink: FC<ListItemLinkProps> = memo(
  ({ title, label, slug, isNested, isOpen, is_tabs, onToggle, children }) => {
    const { theme } = useTheme()
    const { colorMode } = useColorMode()
    const { asPath } = useRouter()
    const outline = useToken('shadows', 'outline')

    const isActive = !is_tabs ? asPath === slug : new RegExp(`^${slug}($|\\/[^\\/]+$)`).test(asPath)

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
          bg: isActive ? undefined : ['gray.100', 'whiteAlpha.50'],
        }}
        _active={{
          bg: isActive ? undefined : ['gray.200', 'whiteAlpha.100'],
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
  ({ title, menu, slug, children, isNested, ...rest }) => {
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
        <ListItemLink {...{ title, slug, isNested, isOpen, onToggle: toggle, children, ...rest }} />

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
