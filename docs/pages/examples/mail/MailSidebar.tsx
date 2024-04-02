import { faCloud } from "@fortawesome/free-solid-svg-icons"
import { Icon as FontAwesomeIcon } from "@yamada-ui/fontawesome"
import {
  Button,
  Center,
  Divider,
  HStack,
  IconButton,
  Spacer,
  Text,
  Tooltip,
  VStack,
} from "@yamada-ui/react"
import { type FC, memo } from "react"
import { MailHeader } from "./MailHeader"
import { type MailSidebarItemType, mailSidebarItems } from "./data"

type Props = {
  isCollapse: boolean
}

export const MailSidebar: FC<Props> = memo(({ isCollapse }) => {
  return (
    <VStack gap={0}>
      <MailHeader isCenter={!isCollapse}>
        <Center>
          <HStack>
            <FontAwesomeIcon icon={faCloud} size="lg" />
            {!isCollapse ? (
              <Text fontSize="lg" fontWeight="bold">
                Yamada UI
              </Text>
            ) : null}
          </HStack>
        </Center>
      </MailHeader>
      {mailSidebarItems[0].map((item) => (
        <MailSidebarItem
          key={item.title}
          isCollapse={isCollapse}
          item={item}
          isSelected={item.title === "Inbox"}
        />
      ))}
      <Divider />
      {mailSidebarItems[1].map((item) => (
        <MailSidebarItem
          key={item.title}
          isCollapse={isCollapse}
          item={item}
          isSelected={item.title === "Inbox"}
        />
      ))}
    </VStack>
  )
})
MailSidebar.displayName = "MailSidebar"

type MailSidebarItemProps = {
  isCollapse: boolean
  item: MailSidebarItemType
  isSelected: boolean
}

const MailSidebarItem: FC<MailSidebarItemProps> = memo(
  ({ isCollapse, item, isSelected }) => {
    console.log(isSelected, item.title)
    return (
      <HStack
        as={Center}
        h={12}
        p="sm"
        justifyContent={!isCollapse ? "space-between" : "center"}
      >
        {isCollapse ? (
          <Tooltip
            placement="right"
            label={`${item.title} ${item.num && item.num > 0 ? item.num : ""}`}
          >
            <IconButton
              variant={isSelected ? "solid" : "ghost"}
              colorScheme={isSelected ? "primary" : "gray"}
              icon={<FontAwesomeIcon icon={item.icon} size="lg" />}
            />
          </Tooltip>
        ) : (
          <Button
            w="full"
            variant={isSelected ? "solid" : "ghost"}
            colorScheme={isSelected ? "primary" : "gray"}
            leftIcon={<FontAwesomeIcon icon={item.icon} size="lg" />}
          >
            <Text fontSize="md" fontWeight="medium">
              {item.title}
            </Text>
            <Spacer />
            {item.num && item.num > 0 ? (
              <Text fontSize="sm" fontWeight="semibold">
                {item.num}
              </Text>
            ) : null}
          </Button>
        )}
      </HStack>
    )
  },
)

MailSidebarItem.displayName = "MailSidebarItem"
