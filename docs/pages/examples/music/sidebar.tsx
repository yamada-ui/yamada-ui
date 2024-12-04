import type {
  ButtonGroupProps,
  ButtonProps,
  HeadingProps,
  StackProps,
} from "@yamada-ui/react"
import type { ElementType, FC, ReactElement } from "react"
import {
  CirclePlayIcon,
  GlobeIcon,
  ListMusicIcon,
  MicVocalIcon,
  Music2Icon,
  RadioIcon,
  UserIcon,
} from "@yamada-ui/lucide"
import {
  Box,
  Button,
  ButtonGroup,
  createContext,
  Heading,
  Icon,
  IconButton,
  Separator,
  Text,
  Tooltip,
  VStack,
} from "@yamada-ui/react"
import { memo, useMemo } from "react"

interface MenuItem extends Omit<ButtonProps, "children"> {
  label: string
  icon?: ElementType
  isSelected?: boolean
}

const DISCOVER_MENU_ITEMS: MenuItem[] = [
  {
    icon: CirclePlayIcon,
    isSelected: true,
    label: "Listen Now",
  },
  {
    icon: GlobeIcon,
    label: "Browse",
  },
  {
    icon: RadioIcon,
    label: "Radio",
  },
]

const LIBRARY_MENU_ITEMS: MenuItem[] = [
  {
    label: "Playlists",
  },
  {
    icon: Music2Icon,
    label: "Songs",
  },
  {
    icon: UserIcon,
    label: "Made for you",
  },
  {
    icon: MicVocalIcon,
    label: "Artists",
  },
  {
    icon: CirclePlayIcon,
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

export interface SidebarProps extends StackProps {
  isCollapse: boolean
}

export const Sidebar: FC<SidebarProps> = memo(({ isCollapse, ...rest }) => {
  const value = useMemo(() => ({ isCollapse }), [isCollapse])

  return (
    <SidebarProvider value={value}>
      <VStack
        as="nav"
        gap={!isCollapse ? { base: "lg", lg: "md" } : "md"}
        px="sm"
        py="lg"
        separator={
          <Separator
            display={isCollapse ? "block" : { base: "none", lg: "block" }}
          />
        }
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

interface SidebarGroupProps extends StackProps {
  label: string
  items?: MenuItem[]
  buttonGroupProps?: ButtonGroupProps
  labelProps?: HeadingProps
}

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
                (
                  { icon = ListMusicIcon, isSelected, label, ...rest },
                  index,
                ) => (
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

interface SidebarButtonProps extends ButtonProps {
  icon?: ReactElement
}

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
