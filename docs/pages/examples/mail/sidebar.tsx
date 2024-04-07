import type { IconDefinition } from "@fortawesome/free-solid-svg-icons"
import {
  faCloud,
  faArchive,
  faCartShopping,
  faCircleExclamation,
  faComments,
  faFile,
  faInbox,
  faPaperPlane,
  faTrash,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons"
import { Icon as FontAwesomeIcon } from "@yamada-ui/fontawesome"
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
  { icon: faInbox, title: "Inbox", num: 53 },
  { icon: faFile, title: "Drafts", num: 4 },
  { icon: faPaperPlane, title: "Sent" },
  { icon: faTrash, title: "Trash" },
  { icon: faArchive, title: "Archive" },
]

export const SUB_MENU_ITEMS = [
  { icon: faUserGroup, title: "Personal", num: 435 },
  { icon: faCircleExclamation, title: "Updates", num: 342 },
  { icon: faComments, title: "Forum", num: 167 },
  { icon: faCartShopping, title: "Shopping", num: 8 },
  { icon: faArchive, title: "Promotions", num: 13 },
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
        <FontAwesomeIcon icon={faCloud} size="xl" />

        {!isCollapse ? (
          <Heading as="h3" size="md" display={{ base: "inline", xl: "none" }}>
            Yamada UI
          </Heading>
        ) : null}
      </Header>

      <VStack as="nav" divider={<Divider />} gap="0">
        <VStack as="ul" p="sm" gap="sm">
          {MAIN_MENU_ITEMS.map(({ icon, title, num }) => (
            <SidebarItem
              key={title}
              icon={icon}
              title={title}
              num={num}
              isCollapse={isCollapse}
              isSelected={title === "Inbox"}
            />
          ))}
        </VStack>

        <VStack as="ul" p="sm" gap="sm">
          {SUB_MENU_ITEMS.map(({ icon, title, num }) => (
            <SidebarItem
              key={title}
              icon={icon}
              title={title}
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
  icon: IconDefinition
  title: string
  num: number
  isCollapse?: boolean
  isSelected?: boolean
}

const SidebarItem: FC<SidebarItemProps> = memo(
  ({ icon, title, num, isCollapse = false, isSelected = false }) => {
    const showNum = num && num > 0

    return (
      <HStack as="li" justifyContent={isCollapse ? "center" : "flex-start"}>
        {isCollapse ? (
          <Tooltip
            placement="right"
            label={
              <HStack gap="sm">
                <Text as="span">{title}</Text>

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
              icon={
                <FontAwesomeIcon
                  icon={icon}
                  size="md"
                  color={isSelected ? "white" : "muted"}
                />
              }
            />
          </Tooltip>
        ) : (
          <Button
            w="full"
            variant={isSelected ? "solid" : "ghost"}
            colorScheme={isSelected ? "primary" : "gray"}
            leftIcon={
              <FontAwesomeIcon
                icon={icon}
                size="md"
                color={isSelected ? "white" : "muted"}
              />
            }
            px="3"
            justifyContent="flex-start"
          >
            <Text
              as="span"
              fontSize="md"
              display={{ base: "inline", xl: "none" }}
            >
              {title}
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
