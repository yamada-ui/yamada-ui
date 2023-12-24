import type { ListProps } from "@yamada-ui/react"
import {
  Center,
  ChevronIcon,
  Collapse,
  HStack,
  List,
  ListItem,
  Text,
  dataAttr,
  forwardRef,
  useBoolean,
} from "@yamada-ui/react"
import Link from "next/link"
import type { FC } from "react"
import { memo, useEffect } from "react"
import { Label } from "components/data-display"
import type { DocumentTypeTree } from "contentlayer/generated"
import { usePage } from "contexts/page-context"

export type TreeProps = ListProps

export const Tree = memo(
  forwardRef<TreeProps, "div">(({ ...rest }, ref) => {
    const { documentTree } = usePage()

    return (
      <List ref={ref} gap="sm" fontSize="sm" {...rest}>
        {documentTree.map((document) => (
          <RecursiveListItem key={document.slug} {...document} />
        ))}
      </List>
    )
  }),
)

type RecursiveListItemProps = DocumentTypeTree & { isNested?: boolean }

const RecursiveListItem: FC<RecursiveListItemProps> = memo(
  ({ title, slug, label, children, isNested, is_expanded }) => {
    const [isOpen, { on, toggle }] = useBoolean(is_expanded)

    useEffect(() => {
      if (is_expanded) on()
    }, [is_expanded, on])

    const isChildExpanded = children.some(({ is_expanded }) => is_expanded)
    const isSelected = !isChildExpanded && is_expanded
    const withToggleButton = !!children.length

    return (
      <ListItem>
        <ListItemLink
          {...{
            title,
            label,
            slug,
            isNested,
            isSelected,
            isOpen,
            withToggleButton,
            onToggle: toggle,
          }}
        />

        {children.length ? (
          <Collapse isOpen={isOpen} unmountOnExit>
            <List mt="sm" gap="sm" borderLeftWidth="1px" ml="3" pl="3">
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

RecursiveListItem.displayName = "RecursiveListItem"

type ListItemLinkProps = Pick<
  RecursiveListItemProps,
  "title" | "label" | "slug" | "isNested"
> & {
  isSelected?: boolean
  isOpen?: boolean
  withToggleButton?: boolean
  onToggle?: () => void
}

const ListItemLink: FC<ListItemLinkProps> = memo(
  ({
    title,
    label,
    slug,
    isNested,
    isOpen,
    isSelected,
    withToggleButton,
    onToggle,
  }) => {
    return (
      <HStack
        data-selected={dataAttr(isSelected)}
        cursor="pointer"
        userSelect="none"
        rounded="md"
        gap="0"
        color={isNested ? "muted" : undefined}
        _selected={{
          color: [`black`, "white"],
          bg: [`primary.300`, `primary.300`],
        }}
        _hover={{
          color: ["black", "white"],
          bg: !isSelected ? [`blackAlpha.400`, "whiteAlpha.400"] : undefined,
        }}
        _active={{
          bg: !isSelected ? ["blackAlpha.500", "whiteAlpha.500"] : undefined,
        }}
        transitionProperty="colors"
        transitionDuration="normal"
        position="relative"
        _before={{
          content: "''",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          bg: "white",
          opacity: 0.8,
        }}
        _dark={{
          _before: {
            bg: "black",
            opacity: 0.86,
          },
        }}
      >
        <Text
          as={Link}
          href={slug}
          position="static"
          zIndex="yamcha"
          display="inline-flex"
          pl="3"
          py="sm"
          flex="1"
          rounded="md"
          _focus={{ outline: "none" }}
          _focusVisible={{ boxShadow: "inline" }}
          onClick={!isOpen ? onToggle : undefined}
        >
          <Text as="span" lineClamp={1}>
            {title}
          </Text>

          <Label ms="sm">{label}</Label>
        </Text>

        {withToggleButton ? (
          <Center
            as="button"
            position="static"
            zIndex="yamcha"
            p="sm"
            fontSize="1.5em"
            rounded="md"
            boxSizing="content-box"
            _focus={{ outline: "none" }}
            _focusVisible={{ boxShadow: "inline" }}
            onClick={onToggle}
            aria-label="Toggle children"
          >
            <ChevronIcon
              transform={isOpen ? undefined : "rotate(-90deg)"}
              transitionProperty="transform"
              transitionDuration="slow"
            />
          </Center>
        ) : null}
      </HStack>
    )
  },
)

ListItemLink.displayName = "ListItemLink"
