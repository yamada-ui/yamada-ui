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
  Divider,
  Heading,
  Icon,
  IconButton,
  Text,
  Tooltip,
  VStack,
  createContext,
} from "@yamada-ui/react"
import type {
  ButtonGroupProps,
  ButtonProps,
  HeadingProps,
  StackProps,
} from "@yamada-ui/react"
import { memo, useMemo } from "react"
import type { ElementType, FC, ReactElement } from "react"

type MenuItem = {
  icon?: ElementType
  label: string
  isSelected?: boolean
} & Omit<ButtonProps, "children">

const DISCOVER_MENU_ITEMS: MenuItem[] = [
  {
    icon: CirclePlay,
    label: "Listen Now",
    isSelected: true,
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
  strict: false,
})

export type SidebarProps = StackProps & {
  isCollapse: boolean
}

export const Sidebar: FC<SidebarProps> = memo(({ isCollapse, ...rest }) => {
  const value = useMemo(() => ({ isCollapse }), [isCollapse])

  return (
    <SidebarProvider value={value}>
      <VStack
        as="nav"
        py="lg"
        px="sm"
        gap={!isCollapse ? { base: "lg", lg: "md" } : "md"}
        divider={
          <Divider
            display={isCollapse ? "block" : { base: "none", lg: "block" }}
          />
        }
        {...rest}
      >
        <SidebarGroup label="Discover" items={DISCOVER_MENU_ITEMS} />
        <SidebarGroup label="Library" items={LIBRARY_MENU_ITEMS} />
        <SidebarGroup label="Playlists" items={PLAYLISTS_MENU_ITEMS} />
      </VStack>
    </SidebarProvider>
  )
})

Sidebar.displayName = "Sidebar"

type SidebarGroupProps = StackProps & {
  label: string
  labelProps?: HeadingProps
  buttonGroupProps?: ButtonGroupProps
  items?: MenuItem[]
}

const SidebarGroup: FC<SidebarGroupProps> = memo(
  ({ label, labelProps, buttonGroupProps, items, children, ...rest }) => {
    const { isCollapse } = useSidebar()

    return (
      <VStack gap="sm" {...rest}>
        <Box
          px="3"
          display={isCollapse ? "none" : { base: "block", lg: "none" }}
        >
          <Heading as="h3" size="md" fontWeight="semibold" {...labelProps}>
            {label}
          </Heading>
        </Box>

        <ButtonGroup as="ul" direction="column" gap="xs" {...buttonGroupProps}>
          {items
            ? items.map(
                ({ icon = ListMusic, label, isSelected, ...rest }, index) => (
                  <Box key={index} as="li">
                    <SidebarButton
                      variant={isSelected ? "solid" : "ghost"}
                      colorScheme={isSelected ? "primary" : "gray"}
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

type SidebarButtonProps = ButtonProps & {
  icon?: ReactElement
}

const SidebarButton: FC<SidebarButtonProps> = memo(
  ({ icon, children, ...rest }) => {
    const { isCollapse } = useSidebar()

    return isCollapse ? (
      <Tooltip placement="right" label={children}>
        <IconButton icon={icon} {...rest} />
      </Tooltip>
    ) : (
      <Button
        w="full"
        justifyContent="flex-start"
        fontWeight="normal"
        startIcon={icon}
        px="3"
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
