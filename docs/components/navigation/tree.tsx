import {
  Center,
  ChevronIcon,
  Collapse,
  HStack,
  List,
  ListItem,
  ListProps,
  Text,
  forwardRef,
  useBoolean,
  useTheme,
  useColorMode,
  transparentizeColor,
} from '@yamada-ui/react'
import Link from 'next/link'
import { FC, memo } from 'react'
import { Label } from 'components/data-display'
import { DocWithChildren } from 'contentlayer/generated'
import { useConfigs } from 'contexts/configs-context'
import { usePage } from 'contexts/page-context'

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

type RecursiveListItemProps = DocWithChildren & { isNested?: boolean }

const RecursiveListItem: FC<RecursiveListItemProps> = memo(
  ({ title, menu, slug, label, children, isNested, is_expand }) => {
    if (menu) title = menu

    const [isOpen, { toggle }] = useBoolean(is_expand)

    const isChildActive = children.some(({ is_expand }) => is_expand)
    const isActive = !isChildActive && is_expand
    const withToggleButton = !!children.length

    return (
      <ListItem>
        <ListItemLink
          {...{
            title,
            label,
            slug,
            isNested,
            isActive,
            isOpen,
            withToggleButton,
            onToggle: toggle,
          }}
        />

        {children.length ? (
          <Collapse isOpen={isOpen} unmountOnExit>
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
  () => false,
)

RecursiveListItem.displayName = 'RecursiveListItem'

type ListItemLinkProps = Pick<RecursiveListItemProps, 'title' | 'label' | 'slug' | 'isNested'> & {
  isActive?: boolean
  isOpen?: boolean
  withToggleButton?: boolean
  onToggle?: () => void
}

const ListItemLink: FC<ListItemLinkProps> = memo(
  ({ title, label, slug, isNested, isOpen, isActive, withToggleButton, onToggle }) => {
    const { theme } = useTheme()
    const { colorMode } = useColorMode()
    const { colorScheme } = useConfigs()

    return (
      <HStack
        cursor='pointer'
        userSelect='none'
        rounded='md'
        gap='0'
        color={isActive ? [`${colorScheme}.700`, 'white'] : isNested ? 'muted' : undefined}
        bg={
          isActive
            ? [
                transparentizeColor(`${colorScheme}.200`, 0.32)(theme, colorMode),
                transparentizeColor(`${colorScheme}.400`, 0.16)(theme, colorMode),
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
          _focus={{ outline: 'none' }}
          _focusVisible={{ boxShadow: 'inner-outline' }}
          onClick={!isOpen ? onToggle : undefined}
        >
          <Text as='span' noOfLines={1}>
            {title}
          </Text>

          <Label ms='sm'>{label}</Label>
        </Text>

        {withToggleButton ? (
          <Center
            as='button'
            px='3'
            py='sm'
            fontSize='1.5em'
            rounded='md'
            boxSizing='content-box'
            _focus={{ outline: 'none' }}
            _focusVisible={{ boxShadow: 'inner-outline' }}
            onClick={onToggle}
            aria-label='Toggle children'
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
