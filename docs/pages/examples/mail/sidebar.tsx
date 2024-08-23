import {
  Archive,
  CircleAlert,
  Cloud,
  File,
  Inbox,
  MessageSquare,
  Send,
  ShoppingCart,
  Trash,
  Users,
} from "@yamada-ui/lucide"
import type { Component, IconProps } from "@yamada-ui/react"
import {
  Button,
  Divider,
  HStack,
  Heading,
  IconButton,
  Spacer,
  Text,
  Tooltip,
  VStack,
} from "@yamada-ui/react"
import { type FC, memo } from "react"
import { Header } from "./header"

export const MAIN_MENU_ITEMS = [
  { icon: Inbox, label: "Inbox", num: 53 },
  { icon: File, label: "Drafts", num: 4 },
  { icon: Send, label: "Sent" },
  { icon: Trash, label: "Trash" },
  { icon: Archive, label: "Archive" },
]

export const SUB_MENU_ITEMS = [
  { icon: Users, label: "Personal", num: 435 },
  { icon: CircleAlert, label: "Updates", num: 342 },
  { icon: MessageSquare, label: "Forum", num: 167 },
  { icon: ShoppingCart, label: "Shopping", num: 8 },
  { icon: Archive, label: "Promotions", num: 13 },
]

type SidebarProps = {
  isCollapse: boolean
}

export const Sidebar: FC<SidebarProps> = memo(({ isCollapse }) => {
  return (
    <VStack h="full" gap="0">
      <Header
        justifyContent={
          isCollapse ? "center" : { base: "flex-start", xl: "center" }
        }
      >
        <Cloud fontSize="xl" />

        {!isCollapse ? (
          <Heading as="h3" size="md" display={{ base: "inline", xl: "none" }}>
            Yamada UI
          </Heading>
        ) : null}
      </Header>

      <VStack as="nav" divider={<Divider />} gap="0">
        <VStack as="ul" p="sm" gap="sm">
          {MAIN_MENU_ITEMS.map(({ icon, label, num }) => (
            <SidebarItem
              key={label}
              icon={icon}
              label={label}
              num={num}
              isCollapse={isCollapse}
              isSelected={label === "Inbox"}
            />
          ))}
        </VStack>

        <VStack as="ul" p="sm" gap="sm">
          {SUB_MENU_ITEMS.map(({ icon, label, num }) => (
            <SidebarItem
              key={label}
              icon={icon}
              label={label}
              num={num}
              isCollapse={isCollapse}
            />
          ))}
        </VStack>
      </VStack>
    </VStack>
  )
})

Sidebar.displayName = "Sidebar"

type SidebarItemProps = {
  icon: Component<"svg", IconProps>
  label: string
  num?: number
  isCollapse?: boolean
  isSelected?: boolean
}

const SidebarItem: FC<SidebarItemProps> = memo(
  ({ icon: Icon, label, num, isCollapse = false, isSelected = false }) => {
    const showNum = num && num > 0

    return (
      <HStack as="li" justifyContent={isCollapse ? "center" : "flex-start"}>
        {isCollapse ? (
          <Tooltip
            placement="right"
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
          >
            <IconButton
              variant={isSelected ? "solid" : "ghost"}
              colorScheme={isSelected ? "primary" : "gray"}
              icon={<Icon color={isSelected ? "white" : "muted"} />}
            />
          </Tooltip>
        ) : (
          <Button
            w="full"
            variant={isSelected ? "solid" : "ghost"}
            colorScheme={isSelected ? "primary" : "gray"}
            startIcon={<Icon color={isSelected ? "white" : "muted"} />}
            px="3"
            justifyContent="flex-start"
          >
            <Text
              as="span"
              fontSize="md"
              display={{ base: "inline", xl: "none" }}
            >
              {label}
            </Text>

            <Spacer />

            {showNum ? (
              <Text
                as="span"
                fontSize="sm"
                fontWeight="semibold"
                display={{ base: "inline", xl: "none" }}
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
