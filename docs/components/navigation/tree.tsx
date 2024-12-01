import type { IconProps, ListProps } from "@yamada-ui/react"
import type { DocumentTree } from "mdx"
import type { FC } from "react"
import {
  AppWindowMacIcon,
  BlocksIcon,
  ChevronDownIcon,
  CompassIcon,
  FigmaIcon,
  GlobeIcon,
  HistoryIcon,
  PaintbrushIcon,
  PaletteIcon,
  ParenthesesIcon,
  SmileIcon,
} from "@yamada-ui/lucide"
import {
  Center,
  Collapse,
  dataAttr,
  forwardRef,
  HStack,
  List,
  ListItem,
  Text,
  useBoolean,
} from "@yamada-ui/react"
import { Label } from "components/data-display"
import { CONSTANT } from "constant"
import { useI18n, usePage } from "contexts"
import Link from "next/link"
import { memo, useEffect } from "react"

export interface TreeProps extends ListProps {}

export const Tree = memo(
  forwardRef<TreeProps, "div">(({ ...rest }, ref) => {
    const { documentTree } = usePage()
    const { t } = useI18n()

    return (
      <List ref={ref} fontSize="sm" gap="sm" {...rest}>
        {documentTree.map((document) => (
          <RecursiveListItem key={document.slug} {...document} />
        ))}

        {CONSTANT.MENU.map(({ href, name, icon, isExternal }) => (
          <ListItemLink
            key={name}
            isExternal={isExternal}
            menu_icon={icon}
            slug={href}
            title={t(`component.tree.${name}`)}
          />
        ))}
      </List>
    )
  }),
)

interface RecursiveListItemProps extends DocumentTree {
  isNested?: boolean
}

const RecursiveListItem: FC<RecursiveListItemProps> = memo(
  ({ children, is_expanded, isNested, label, menu_icon, slug, title }) => {
    const [isOpen, { toggle, on }] = useBoolean(is_expanded)

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
            isNested,
            isOpen,
            isSelected,
            label,
            menu_icon,
            slug,
            title,
            withToggleButton,
            onToggle: toggle,
          }}
        />

        {children.length ? (
          <Collapse isOpen={isOpen} unmountOnExit>
            <List borderLeftWidth="1px" gap="sm" ml="3" mt="sm" pl="3">
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

interface ListItemLinkProps
  extends Pick<
    RecursiveListItemProps,
    "isNested" | "label" | "menu_icon" | "slug" | "title"
  > {
  isExternal?: boolean
  isOpen?: boolean
  isSelected?: boolean
  withToggleButton?: boolean
  onToggle?: () => void
}

const ListItemLink: FC<ListItemLinkProps> = memo(
  ({
    isExternal,
    isNested,
    isOpen,
    isSelected,
    label,
    menu_icon,
    slug,
    title,
    withToggleButton,
    onToggle,
  }) => {
    return (
      <HStack
        data-selected={dataAttr(isSelected)}
        color={isNested ? "muted" : undefined}
        cursor="pointer"
        gap="0"
        position="relative"
        rounded="md"
        transitionDuration="normal"
        transitionProperty="colors"
        userSelect="none"
        _active={{
          bg: !isSelected ? ["blackAlpha.500", "whiteAlpha.500"] : undefined,
        }}
        _before={{
          bg: "white",
          bottom: 0,
          content: "''",
          left: 0,
          opacity: 0.8,
          position: "absolute",
          right: 0,
          top: 0,
        }}
        _dark={{
          _before: {
            bg: "black",
            opacity: 0.86,
          },
        }}
        _hover={{
          bg: !isSelected ? [`blackAlpha.400`, "whiteAlpha.400"] : undefined,
          color: ["black", "white"],
        }}
        _selected={{
          bg: [`primary.300`, `primary.300`],
          color: [`black`, "white"],
        }}
      >
        <Text
          as={Link}
          href={slug}
          target={isExternal ? "_blank" : undefined}
          alignItems="center"
          display="inline-flex"
          flex="1"
          pl="3"
          position="static"
          pr={!withToggleButton ? "3" : undefined}
          py="sm"
          rel={isExternal ? "noopener" : undefined}
          rounded="md"
          zIndex="yamcha"
          _focus={{ outline: "none" }}
          _focusVisible={{ boxShadow: "inline" }}
          onClick={!isOpen ? onToggle : undefined}
        >
          <ListItemIcon color="muted" icon={menu_icon} me="sm" />

          <Text as="span" lineClamp={1}>
            {title}
          </Text>

          <Label ms="sm">{label}</Label>
        </Text>

        {withToggleButton ? (
          <Center
            as="button"
            aria-label="Toggle children"
            boxSizing="content-box"
            fontSize="1.5em"
            p="sm"
            position="static"
            rounded="md"
            zIndex="yamcha"
            _focus={{ outline: "none" }}
            _focusVisible={{ boxShadow: "inline" }}
            onClick={onToggle}
          >
            <ChevronDownIcon
              transform={isOpen ? undefined : "rotate(-90deg)"}
              transitionDuration="slow"
              transitionProperty="transform"
            />
          </Center>
        ) : null}
      </HStack>
    )
  },
)

ListItemLink.displayName = "ListItemLink"

interface ListItemIconProps extends IconProps {
  icon?: null | string
}

const ListItemIcon: FC<ListItemIconProps> = memo(({ icon, ...rest }) => {
  switch (icon) {
    case "compass":
      return <CompassIcon fontSize="2xl" {...rest} />

    case "palette":
      return <PaletteIcon fontSize="2xl" {...rest} />

    case "blocks":
      return <BlocksIcon fontSize="2xl" {...rest} />

    case "globe":
      return <GlobeIcon fontSize="2xl" {...rest} />

    case "parentheses":
      return <ParenthesesIcon fontSize="2xl" {...rest} />

    case "figma":
      return <FigmaIcon fontSize="2xl" {...rest} />

    case "history":
      return <HistoryIcon fontSize="2xl" {...rest} />

    case "paintbrush":
      return <PaintbrushIcon fontSize="2xl" {...rest} />

    case "app-window-mac":
      return <AppWindowMacIcon fontSize="2xl" {...rest} />

    case "smile":
      return <SmileIcon fontSize="2xl" {...rest} />

    default:
      return null
  }
})

ListItemIcon.displayName = "ListItemIcon"
