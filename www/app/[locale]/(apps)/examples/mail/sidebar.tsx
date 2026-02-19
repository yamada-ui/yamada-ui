import type { Component, IconProps } from "@yamada-ui/react"
import {
  ArchiveIcon,
  Button,
  CircleAlertIcon,
  CloudIcon,
  FileIcon,
  Heading,
  HStack,
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

export function Sidebar() {
  return (
    <VStack alignItems="flex-start" gap="0" h="full">
      <Header ms="1">
        <CloudIcon fontSize="3xl" />

        <Heading
          as="h3"
          size="lg"
          lineClamp={1}
          _container={[{ css: { display: "none" }, maxW: "53px" }]}
        >
          Yamada UI
        </Heading>
      </Header>

      <VStack as="nav" gap="0" separator={<Separator />}>
        <VStack as="ul" gap="sm" p="sm">
          {MAIN_MENU_ITEMS.map(({ icon, label, num }) => (
            <SidebarItem
              key={label}
              icon={icon}
              isSelected={label === "Inbox"}
              label={label}
              num={num}
            />
          ))}
        </VStack>

        <VStack as="ul" gap="sm" p="sm">
          {SUB_MENU_ITEMS.map(({ icon, label, num }) => (
            <SidebarItem key={label} icon={icon} label={label} num={num} />
          ))}
        </VStack>
      </VStack>
    </VStack>
  )
}

interface SidebarItemProps {
  icon: Component<"svg", IconProps>
  isSelected?: boolean
  label: string
  num?: number
}

function SidebarItem({
  icon: Icon,
  isSelected = false,
  label,
  num,
}: SidebarItemProps) {
  const showNum = num && num > 0

  return (
    <HStack as="li" justifyContent="flex-start">
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
        flip={false}
        placement="center-end"
        contentProps={{
          display: "none",
          _container: [{ css: { display: "block" }, maxW: "53px" }],
        }}
        portalProps={{ disabled: true }}
      >
        <Button
          size="sm"
          variant={isSelected ? "solid" : "ghost"}
          justifyContent="flex-start"
          px="7px"
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
            fontSize="md"
            _container={[{ css: { display: "none" }, maxW: "53px" }]}
          >
            {label}
          </Text>

          <Spacer display={{ base: "block", xl: "none" }} />

          {showNum ? (
            <Text
              as="span"
              fontSize="sm"
              _container={[{ css: { display: "none" }, maxW: "53px" }]}
            >
              {num}
            </Text>
          ) : null}
        </Button>
      </Tooltip>
    </HStack>
  )
}
