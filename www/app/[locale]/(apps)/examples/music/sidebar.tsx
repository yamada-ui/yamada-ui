"use client"

import type { ButtonProps, HeadingProps, StackProps } from "@yamada-ui/react"
import type { ElementType, ReactElement } from "react"
import {
  Box,
  Button,
  ButtonGroup,
  CirclePlayIcon,
  GlobeIcon,
  Heading,
  Icon,
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

export interface SidebarProps extends StackProps {}

export function Sidebar({ ...rest }: SidebarProps) {
  return (
    <VStack
      as="nav"
      gap="lg"
      px="sm"
      py="lg"
      separator={
        <Separator
          display="none"
          _container={[{ css: { display: "block" }, maxW: "53px" }]}
        />
      }
      _container={[{ css: { gap: "sm" }, maxW: "53px" }]}
      {...rest}
    >
      <SidebarGroup items={DISCOVER_MENU_ITEMS} label="Discover" />
      <SidebarGroup items={LIBRARY_MENU_ITEMS} label="Library" />
      <SidebarGroup items={PLAYLISTS_MENU_ITEMS} label="Playlists" />
    </VStack>
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
  return (
    <VStack gap="sm" {...rest}>
      <Box
        lineClamp={1}
        px="3"
        _container={[{ css: { display: "none" }, maxW: "53px" }]}
      >
        <Heading as="h3" size="md" {...labelProps}>
          {label}
        </Heading>
      </Box>

      <ButtonGroup.Root
        as="ul"
        size="sm"
        direction="column"
        gap="xs"
        isolation="inherit"
        position="inherit"
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
                        fontSize="xl"
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
  return (
    <Tooltip
      content={children}
      flip={false}
      placement="center-end"
      contentProps={{
        display: "none",
        _container: [{ css: { display: "block" }, maxW: "53px" }],
      }}
      portalProps={{ disabled: true }}
    >
      <Button
        justifyContent="flex-start"
        px="7px"
        startIcon={icon}
        w="full"
        {...rest}
      >
        <Text
          as="span"
          lineClamp={1}
          _container={[{ css: { display: "none" }, maxW: "53px" }]}
        >
          {children}
        </Text>
      </Button>
    </Tooltip>
  )
}
