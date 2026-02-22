import type { Component, IconProps } from "@yamada-ui/react"
import {
  ArchiveIcon,
  Button,
  CircleAlertIcon,
  CloudIcon,
  FileIcon,
  Heading,
  HStack,
  IconButton,
  InboxIcon,
  MessageSquareIcon,
  SendIcon,
  Separator,
  ShoppingCartIcon,
  Spacer,
  Text,
  Tooltip,
  TrashIcon,
  UsersIcon,
  VStack,
} from "@yamada-ui/react"
import { Header } from "./header"

export const MAIN_MENU_ITEMS = [
  { icon: InboxIcon, label: "Inbox", num: 53 },
  { icon: FileIcon, label: "Drafts", num: 4 },
  { icon: SendIcon, label: "Sent" },
  { icon: TrashIcon, label: "Trash" },
  { icon: ArchiveIcon, label: "Archive" },
]

export const SUB_MENU_ITEMS = [
  { icon: UsersIcon, label: "Personal", num: 435 },
  { icon: CircleAlertIcon, label: "Updates", num: 342 },
  { icon: MessageSquareIcon, label: "Forum", num: 167 },
  { icon: ShoppingCartIcon, label: "Shopping", num: 8 },
  { icon: ArchiveIcon, label: "Promotions", num: 13 },
]

interface SidebarProps {
  collapsed: boolean
}

export function Sidebar({ collapsed }: SidebarProps) {
  return (
    <VStack gap="0" h="full">
      <Header
        justifyContent={
          collapsed ? "center" : { base: "flex-start", xl: "center" }
        }
        ms={{ base: collapsed ? "0" : "sm", xl: "0" }}
      >
        <CloudIcon fontSize="3xl" />

        {!collapsed ? (
          <Heading as="h3" size="lg" display={{ base: "inline", xl: "none" }}>
            Yamada UI
          </Heading>
        ) : null}
      </Header>

      <VStack as="nav" gap="0" separator={<Separator />}>
        <VStack as="ul" gap="sm" p="sm">
          {MAIN_MENU_ITEMS.map(({ icon, label, num }) => (
            <SidebarItem
              key={label}
              collapsed={collapsed}
              icon={icon}
              isSelected={label === "Inbox"}
              label={label}
              num={num}
            />
          ))}
        </VStack>

        <VStack as="ul" gap="sm" p="sm">
          {SUB_MENU_ITEMS.map(({ icon, label, num }) => (
            <SidebarItem
              key={label}
              collapsed={collapsed}
              icon={icon}
              label={label}
              num={num}
            />
          ))}
        </VStack>
      </VStack>
    </VStack>
  )
}

interface SidebarItemProps {
  collapsed?: boolean
  icon: Component<"svg", IconProps>
  isSelected?: boolean
  label: string
  num?: number
}

function SidebarItem({
  collapsed = false,
  icon: Icon,
  isSelected = false,
  label,
  num,
}: SidebarItemProps) {
  const showNum = num && num > 0

  return (
    <HStack as="li" justifyContent={collapsed ? "center" : "flex-start"}>
      {collapsed ? (
        <Tooltip
          content={
            <HStack gap="sm">
              <Text as="span">{label}</Text>

              {showNum ? (
                <Text as="span" color="fg.muted">
                  {num}
                </Text>
              ) : null}
            </HStack>
          }
          placement="end"
        >
          <IconButton
            size="sm"
            variant={isSelected ? "solid" : "ghost"}
            icon={<Icon color={isSelected ? "mono.contrast" : "fg.muted"} />}
          />
        </Tooltip>
      ) : (
        <Button
          size="sm"
          variant={isSelected ? "solid" : "ghost"}
          display={{ base: "flex", xl: "center" }}
          justifyContent="flex-start"
          px={{ base: "2", xl: "0" }}
          startIcon={
            <Icon
              color={isSelected ? "mono.contrast" : "fg.muted"}
              fontSize="xl"
            />
          }
          w="full"
        >
          <Text
            as="span"
            display={{ base: "inline", xl: "none" }}
            fontSize="md"
          >
            {label}
          </Text>

          <Spacer display={{ base: "block", xl: "none" }} />

          {showNum ? (
            <Text
              as="span"
              display={{ base: "inline", xl: "none" }}
              fontSize="sm"
            >
              {num}
            </Text>
          ) : null}
        </Button>
      )}
    </HStack>
  )
}
