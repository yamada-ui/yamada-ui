import { faCloud } from "@fortawesome/free-solid-svg-icons"
import { Icon as FontAwesomeIcon } from "@yamada-ui/fontawesome"
import {
  Box,
  Button,
  Center,
  Divider,
  HStack,
  IconButton,
  Spacer,
  Text,
} from "@yamada-ui/react"
import { type Dispatch, type FC, type SetStateAction, memo } from "react"
import { MailHeader } from "./MailHeader"
import { type MailSidebarItemType, mailSidebarItems } from "./data"

type Props = {
  isCollapse: boolean
  selectedTab: MailSidebarItemType
  setSelectedTab: Dispatch<SetStateAction<MailSidebarItemType>>
}

export const MailSidebar: FC<Props> = memo(
  ({ isCollapse, selectedTab, setSelectedTab }) => {
    return (
      <Box>
        <MailHeader isCenter={!isCollapse}>
          <Center>
            <HStack>
              <FontAwesomeIcon icon={faCloud} size="lg" />
              {!isCollapse && (
                <Text fontSize="lg" fontWeight="bold">
                  Yamada UI
                </Text>
              )}
            </HStack>
          </Center>
        </MailHeader>
        {mailSidebarItems[0].map((item) => (
          <MailSidebarItem
            key={item.title}
            isCollapse={isCollapse}
            item={item}
            isSelected={item.title === selectedTab.title}
            setSelectedTab={setSelectedTab}
          />
        ))}
        <Divider />
        {mailSidebarItems[1].map((item) => (
          <MailSidebarItem
            key={item.title}
            isCollapse={isCollapse}
            item={item}
            isSelected={item.title === selectedTab.title}
            setSelectedTab={setSelectedTab}
          />
        ))}
      </Box>
    )
  },
)
MailSidebar.displayName = "MailSidebar"

type MailSidebarItemProps = {
  isCollapse: boolean
  item: MailSidebarItemType
  isSelected: boolean
  setSelectedTab: Dispatch<SetStateAction<MailSidebarItemType>>
}

const MailSidebarItem: FC<MailSidebarItemProps> = memo(
  ({ isCollapse, item, isSelected, setSelectedTab }) => {
    console.log(isSelected, item.title)
    return (
      <Box
        as={Center}
        h={12}
        p="sm"
        justifyContent={!isCollapse && "space-between"}
      >
        {isCollapse ? (
          <IconButton
            variant={isSelected ? "solid" : "ghost"}
            colorScheme={isSelected ? "primary" : "gray"}
            icon={<FontAwesomeIcon icon={item.icon} size="lg" />}
          />
        ) : (
          <Button
            w="full"
            variant={isSelected ? "solid" : "ghost"}
            colorScheme={isSelected ? "primary" : "gray"}
            leftIcon={<FontAwesomeIcon icon={item.icon} size="lg" />}
            onClick={() => setSelectedTab(item)}
          >
            <Text fontSize="md" fontWeight="medium">
              {item.title}
            </Text>
            <Spacer />
            {item.num && item.num > 0 && (
              <Text fontSize="sm" fontWeight="bolder">
                {item.num}
              </Text>
            )}
          </Button>
        )}
      </Box>
    )
  },
)

MailSidebarItem.displayName = "MailSidebarItem"
