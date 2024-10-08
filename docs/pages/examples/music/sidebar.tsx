import type {
  ButtonGroupProps,
  ButtonProps,
  HeadingProps,
  StackProps,
} from "@yamada-ui/react"
import type { ElementType, FC, ReactElement } from "react"
import {
  CirclePlay,
  Globe,
  ListMusic,
  MicVocal,
  Music2,
  Radio,
  User,
} from "@yamada-ui/lucide"
import {
  Box,
  Button,
  ButtonGroup,
  createContext,
  Divider,
  Heading,
  Icon,
  IconButton,
  Text,
  Tooltip,
  VStack,
} from "@yamada-ui/react"
import { memo, useMemo } from "react"

type MenuItem = {
  label: string
  icon?: ElementType
  isSelected?: boolean
} & Omit<ButtonProps, "children">

const DISCOVER_MENU_ITEMS: MenuItem[] = [
  {
    icon: CirclePlay,
    isSelected: true,
    label: "Listen Now",
  },
  {
    icon: Globe,
    label: "Browse",
  },
  {
    icon: Radio,
    label: "Radio",
  },
]

const LIBRARY_MENU_ITEMS: MenuItem[] = [
  {
    label: "Playlists",
  },
  {
    icon: Music2,
    label: "Songs",
  },
  {
    icon: User,
    label: "Made for you",
  },
  {
    icon: MicVocal,
    label: "Artists",
  },
  {
    icon: CirclePlay,
    label: "Albums",
  },
]

const PLAYLISTS_MENU_ITEMS: MenuItem[] = [
  { label: "Recently Added" },
  { label: "Recently Played" },
  { label: "Top Songs" },
  { label: "Top Albums" },
  { label: "Top Artists" },
  { label: "Logic Discography" },
  { label: "Bedtime Beats" },
]

interface SidebarContext {
  isCollapse: boolean
}

const [SidebarProvider, useSidebar] = createContext<SidebarContext>({
  name: "SidebarContext",
})

export type SidebarProps = {
  isCollapse: boolean
} & StackProps

export const Sidebar: FC<SidebarProps> = memo(({ isCollapse, ...rest }) => {
  const value = useMemo(() => ({ isCollapse }), [isCollapse])

  return (
    <SidebarProvider value={value}>
      <VStack
        as="nav"
        divider={
          <Divider
            display={isCollapse ? "block" : { base: "none", lg: "block" }}
          />
        }
        gap={!isCollapse ? { base: "lg", lg: "md" } : "md"}
        px="sm"
        py="lg"
        {...rest}
      >
        <SidebarGroup items={DISCOVER_MENU_ITEMS} label="Discover" />
        <SidebarGroup items={LIBRARY_MENU_ITEMS} label="Library" />
        <SidebarGroup items={PLAYLISTS_MENU_ITEMS} label="Playlists" />
      </VStack>
    </SidebarProvider>
  )
})

Sidebar.displayName = "Sidebar"

type SidebarGroupProps = {
  label: string
  items?: MenuItem[]
  buttonGroupProps?: ButtonGroupProps
  labelProps?: HeadingProps
} & StackProps

const SidebarGroup: FC<SidebarGroupProps> = memo(
  ({ children, items, label, buttonGroupProps, labelProps, ...rest }) => {
    const { isCollapse } = useSidebar()

    return (
      <VStack gap="sm" {...rest}>
        <Box
          display={isCollapse ? "none" : { base: "block", lg: "none" }}
          px="3"
        >
          <Heading as="h3" size="md" fontWeight="semibold" {...labelProps}>
            {label}
          </Heading>
        </Box>

        <ButtonGroup as="ul" direction="column" gap="xs" {...buttonGroupProps}>
          {items
            ? items.map(
                ({ icon = ListMusic, isSelected, label, ...rest }, index) => (
                  <Box key={index} as="li">
                    <SidebarButton
                      colorScheme={isSelected ? "primary" : "gray"}
                      variant={isSelected ? "solid" : "ghost"}
                      icon={
                        <Icon
                          as={icon}
                          color={isSelected ? "white" : "muted"}
                        />
                      }
                      {...rest}
                    >
                      {label}
                    </SidebarButton>
                  </Box>
                ),
              )
            : children}
        </ButtonGroup>
      </VStack>
    )
  },
)

SidebarGroup.displayName = "SidebarGroup"

type SidebarButtonProps = {
  icon?: ReactElement
} & ButtonProps

const SidebarButton: FC<SidebarButtonProps> = memo(
  ({ children, icon, ...rest }) => {
    const { isCollapse } = useSidebar()

    return isCollapse ? (
      <Tooltip label={children} placement="right">
        <IconButton icon={icon} {...rest} />
      </Tooltip>
    ) : (
      <Button
        fontWeight="normal"
        justifyContent="flex-start"
        leftIcon={icon}
        px="3"
        w="full"
        {...rest}
      >
        <Text as="span" display={{ base: "inline", lg: "none" }}>
          {children}
        </Text>
      </Button>
    )
  },
)

SidebarButton.displayName = "SidebarButton"
