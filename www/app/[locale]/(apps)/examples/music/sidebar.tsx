"use client"

import type { ButtonProps, HeadingProps, StackProps } from "@yamada-ui/react"
import type { ElementType, ReactElement } from "react"
import {
  Box,
  Button,
  ButtonGroup,
  CirclePlayIcon,
  createContext,
  GlobeIcon,
  Heading,
  Icon,
  IconButton,
  ListMusicIcon,
  MicVocalIcon,
  Music2Icon,
  RadioIcon,
  Separator,
  Text,
  Tooltip,
  UserIcon,
  VStack,
} from "@yamada-ui/react"
import { useMemo } from "react"

interface MenuItem extends Omit<ButtonProps, "children"> {
  icon?: ElementType
  label: string
  selected?: boolean
}

const DISCOVER_MENU_ITEMS: MenuItem[] = [
  { icon: CirclePlayIcon, label: "Listen Now", selected: true },
  { icon: GlobeIcon, label: "Browse" },
  { icon: RadioIcon, label: "Radio" },
]

const LIBRARY_MENU_ITEMS: MenuItem[] = [
  { label: "Playlists" },
  { icon: Music2Icon, label: "Songs" },
  { icon: UserIcon, label: "Made for you" },
  { icon: MicVocalIcon, label: "Artists" },
  { icon: CirclePlayIcon, label: "Albums" },
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
  collapsed: boolean
}

const [SidebarProvider, useSidebar] = createContext<SidebarContext>({
  name: "SidebarContext",
})

export interface SidebarProps extends StackProps {
  collapsed: boolean
}

export function Sidebar({ collapsed, ...rest }: SidebarProps) {
  const value = useMemo(() => ({ collapsed }), [collapsed])

  return (
    <SidebarProvider value={value}>
      <VStack
        as="nav"
        gap={!collapsed ? { base: "lg", lg: "md" } : "md"}
        px="sm"
        py="lg"
        separator={
          <Separator
            display={collapsed ? "block" : { base: "none", lg: "block" }}
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
}

interface SidebarGroupProps extends StackProps {
  items?: MenuItem[]
  label: string
  buttonGroupProps?: ButtonGroup.RootProps
  labelProps?: HeadingProps
}

function SidebarGroup({
  children,
  items,
  label,
  buttonGroupProps,
  labelProps,
  ...rest
}: SidebarGroupProps) {
  const { collapsed } = useSidebar()

  return (
    <VStack gap="sm" {...rest}>
      <Box display={collapsed ? "none" : { base: "block", lg: "none" }} px="3">
        <Heading as="h3" size="md" {...labelProps}>
          {label}
        </Heading>
      </Box>

      <ButtonGroup.Root
        as="ul"
        size="sm"
        direction="column"
        gap="xs"
        {...buttonGroupProps}
      >
        {items
          ? items.map(
              ({ icon = ListMusicIcon, label, selected, ...rest }, index) => (
                <Box key={index} as="li">
                  <SidebarButton
                    variant={selected ? "solid" : "ghost"}
                    icon={
                      <Icon
                        as={icon}
                        color={selected ? "mono.contrast" : "fg.muted"}
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
      </ButtonGroup.Root>
    </VStack>
  )
}

interface SidebarButtonProps extends ButtonProps {
  icon?: ReactElement
}

function SidebarButton({ children, icon, ...rest }: SidebarButtonProps) {
  const { collapsed } = useSidebar()

  return collapsed ? (
    <Tooltip content={children} placement="end">
      <IconButton icon={icon} {...rest} />
    </Tooltip>
  ) : (
    <Button
      justifyContent="flex-start"
      px="3"
      startIcon={icon}
      w="full"
      {...rest}
    >
      <Text as="span" display={{ base: "inline", lg: "none" }}>
        {children}
      </Text>
    </Button>
  )
}
