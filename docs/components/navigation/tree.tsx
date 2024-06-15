import {
  AppWindowMac,
  Blocks,
  Compass,
  Figma,
  Globe,
  History,
  Paintbrush,
  Palette,
  Parentheses,
  Smile,
} from "@yamada-ui/lucide"
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
import type { IconProps, ListProps } from "@yamada-ui/react"
import { Label } from "components/data-display"
import { CONSTANT } from "constant"
import type { DocumentTypeTree } from "contentlayer/generated"
import { useI18n } from "contexts/i18n-context"
import { usePage } from "contexts/page-context"
import Link from "next/link"
import { memo, useEffect } from "react"
import type { FC } from "react"

export type TreeProps = ListProps

export const Tree = memo(
  forwardRef<TreeProps, "div">(({ ...rest }, ref) => {
    const { documentTree } = usePage()
    const { t } = useI18n()

    return (
      <List ref={ref} gap="sm" fontSize="sm" {...rest}>
        {documentTree.map((document) => (
          <RecursiveListItem key={document.slug} {...document} />
        ))}

        {CONSTANT.MENU.map(({ icon, name, href, isExternal }) => (
          <ListItemLink
            key={name}
            menu_icon={icon}
            slug={href}
            title={t(`component.tree.${name}`)}
            isExternal={isExternal}
          />
        ))}
      </List>
    )
  }),
)

type RecursiveListItemProps = DocumentTypeTree & { isNested?: boolean }

const RecursiveListItem: FC<RecursiveListItemProps> = memo(
  ({ menu_icon, title, slug, label, children, isNested, is_expanded }) => {
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
            menu_icon,
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
  "title" | "label" | "slug" | "isNested" | "menu_icon"
> & {
  isSelected?: boolean
  isOpen?: boolean
  withToggleButton?: boolean
  onToggle?: () => void
  isExternal?: boolean
}

const ListItemLink: FC<ListItemLinkProps> = memo(
  ({
    menu_icon,
    title,
    label,
    slug,
    isNested,
    isOpen,
    isSelected,
    withToggleButton,
    onToggle,
    isExternal,
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
          alignItems="center"
          pl="3"
          pr={!withToggleButton ? "3" : undefined}
          py="sm"
          flex="1"
          rounded="md"
          _focus={{ outline: "none" }}
          _focusVisible={{ boxShadow: "inline" }}
          onClick={!isOpen ? onToggle : undefined}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener" : undefined}
        >
          <ListItemIcon icon={menu_icon} color="muted" me="sm" />

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

type ListItemIconProps = { icon?: string | null } & IconProps

const ListItemIcon: FC<ListItemIconProps> = memo(({ icon, ...rest }) => {
  switch (icon) {
    case "compass":
      return <Compass fontSize="2xl" {...rest} />

    case "palette":
      return <Palette fontSize="2xl" {...rest} />

    case "blocks":
      return <Blocks fontSize="2xl" {...rest} />

    case "globe":
      return <Globe fontSize="2xl" {...rest} />

    case "parentheses":
      return <Parentheses fontSize="2xl" {...rest} />

    case "figma":
      return <Figma fontSize="2xl" {...rest} />

    case "history":
      return <History fontSize="2xl" {...rest} />

    case "paintbrush":
      return <Paintbrush fontSize="2xl" {...rest} />

    case "app-window-mac":
      return <AppWindowMac fontSize="2xl" {...rest} />

    case "smile":
      return <Smile fontSize="2xl" {...rest} />

    default:
      return <></>
  }
})

ListItemIcon.displayName = "ListItemIcon"
