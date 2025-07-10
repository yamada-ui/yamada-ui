import type { Component, IconProps } from "@yamada-ui/react"
import type { FC } from "react"
import {
  ArchiveIcon,
  CircleAlertIcon,
  CloudIcon,
  FileIcon,
  InboxIcon,
  MessageSquareIcon,
  SendIcon,
  ShoppingCartIcon,
  TrashIcon,
  UsersIcon,
} from "@yamada-ui/lucide"
import {
  Button,
  Heading,
  HStack,
  IconButton,
  Separator,
  Spacer,
  Text,
  Tooltip,
  VStack,
} from "@yamada-ui/react"
import { memo } from "react"
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
  isCollapse: boolean
}

export const Sidebar: FC<SidebarProps> = memo(({ isCollapse }) => {
  return (
    <VStack gap="0" h="full">
      <Header
        justifyContent={
          isCollapse ? "center" : { base: "flex-start", xl: "center" }
        }
      >
        <CloudIcon fontSize="xl" />

        {!isCollapse ? (
          <Heading as="h3" size="md" display={{ base: "inline", xl: "none" }}>
            Yamada UI
          </Heading>
        ) : null}
      </Header>

      <VStack as="nav" gap="0" separator={<Separator />}>
        <VStack as="ul" gap="sm" p="sm">
          {MAIN_MENU_ITEMS.map(({ icon, label, num }) => (
            <SidebarItem
              key={label}
              icon={icon}
              isCollapse={isCollapse}
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
              icon={icon}
              isCollapse={isCollapse}
              label={label}
              num={num}
            />
          ))}
        </VStack>
      </VStack>
    </VStack>
  )
})

Sidebar.displayName = "Sidebar"

interface SidebarItemProps {
  icon: Component<"svg", IconProps>
  label: string
  isCollapse?: boolean
  isSelected?: boolean
  num?: number
}

const SidebarItem: FC<SidebarItemProps> = memo(
  ({ icon: Icon, isCollapse = false, isSelected = false, label, num }) => {
    const showNum = num && num > 0

    return (
      <HStack as="li" justifyContent={isCollapse ? "center" : "flex-start"}>
        {isCollapse ? (
          <Tooltip
            label={
              <HStack gap="sm">
                <Text as="span">{label}</Text>

                {showNum ? (
                  <Text as="span" color="muted">
                    {num}
                  </Text>
                ) : null}
              </HStack>
            }
            placement="right"
          >
            <IconButton
              colorScheme={isSelected ? "primary" : "gray"}
              variant={isSelected ? "solid" : "ghost"}
              icon={<Icon color={isSelected ? "white" : "muted"} />}
            />
          </Tooltip>
        ) : (
          <Button
            colorScheme={isSelected ? "primary" : "gray"}
            variant={isSelected ? "solid" : "ghost"}
            justifyContent="flex-start"
            leftIcon={<Icon color={isSelected ? "white" : "muted"} />}
            px="3"
            w="full"
          >
            <Text
              as="span"
              display={{ base: "inline", xl: "none" }}
              fontSize="md"
            >
              {label}
            </Text>

            <Spacer />

            {showNum ? (
              <Text
                as="span"
                display={{ base: "inline", xl: "none" }}
                fontSize="sm"
                fontWeight="semibold"
              >
                {num}
              </Text>
            ) : null}
          </Button>
        )}
      </HStack>
    )
  },
)

SidebarItem.displayName = "SidebarItem"
