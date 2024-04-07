import {
  type IconDefinition,
  faBoxArchive,
  faClock,
  faEllipsisVertical,
  faReply,
  faReplyAll,
  faShare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons"
import { Icon as FontAwesomeIcon } from "@yamada-ui/fontawesome"
import type { IconButtonProps, StackProps } from "@yamada-ui/react"
import {
  Avatar,
  Button,
  Divider,
  HStack,
  Heading,
  IconButton,
  Spacer,
  Switch,
  Text,
  Textarea,
  Tooltip,
  VStack,
  assignRef,
} from "@yamada-ui/react"
import { memo, useState } from "react"
import type { MutableRefObject, FC } from "react"
import { type MailItem } from "./data"
import { Header } from "./header"
import { timestamp2date } from "./utils"

type DetailProps = StackProps & {
  defaultMail: MailItem
  setMailRef: MutableRefObject<(mail: MailItem) => void>
}

export const Detail: FC<DetailProps> = memo(
  ({ defaultMail, setMailRef, ...rest }) => {
    const [{ title, authorName, timestamp, content, email }, setMail] =
      useState<MailItem>(defaultMail)

    assignRef(setMailRef, setMail)

    return (
      <VStack gap={0} h="full" {...rest}>
        <Header px="sm">
          <HStack gap="xs">
            <ControlIcon icon={faBoxArchive} label="Archive" />
            <ControlIcon icon={faTrash} label="Move to trash" />
            <Divider
              orientation="vertical"
              h="6"
              display={{ base: "block", sm: "none" }}
            />
            <ControlIcon
              icon={faClock}
              label="Snooze"
              display={{ base: "flex", sm: "none" }}
            />
          </HStack>

          <Spacer display={{ base: "block", sm: "none" }} />

          <HStack gap="xs">
            <ControlIcon icon={faReply} label="Reply" />
            <ControlIcon icon={faReplyAll} label="Reply all" />
            <ControlIcon icon={faShare} label="Forward" />
            <Divider
              orientation="vertical"
              h="6"
              display={{ base: "block", sm: "none" }}
            />
            <ControlIcon icon={faEllipsisVertical} />
          </HStack>
        </Header>

        <VStack flex="1" gap="0" divider={<Divider />}>
          <HStack p="md" align="start">
            <Avatar name={authorName} />

            <HStack
              w="full"
              direction={{ base: "row", sm: "column" }}
              align="start"
              gap="xs"
            >
              <VStack gap="xs">
                <Heading as="h6" size="xs">
                  {authorName}
                </Heading>

                <Heading
                  as="h5"
                  fontSize="xs"
                  fontWeight="normal"
                  color="muted"
                >
                  {title}
                </Heading>

                <Text fontSize="xs">
                  <Text as="span" fontWeight="bold">
                    Reply-To
                  </Text>
                  : {email}
                </Text>
              </VStack>

              <Spacer display={{ base: "block", sm: "none" }} />

              <Text textWrap="nowrap" color="muted" fontSize="xs">
                {timestamp2date(timestamp)}
              </Text>
            </HStack>
          </HStack>

          <VStack p="md" flex="1">
            <Text>{content}</Text>
          </VStack>

          <VStack p="md">
            <Textarea
              placeholder={`Reply ${authorName}`}
              autosize
              minRows={3}
              maxRows={6}
            />

            <HStack>
              <Switch display={{ base: "flex", sm: "none" }}>
                Mute this thread
              </Switch>

              <Spacer />

              <Button colorScheme="primary">Send</Button>
            </HStack>
          </VStack>
        </VStack>
      </VStack>
    )
  },
)

Detail.displayName = "Detail"

type ControlIconProps = Omit<IconButtonProps, "icon"> & {
  icon: IconDefinition
  label?: string
}

const ControlIcon: FC<ControlIconProps> = memo(({ icon, label, ...rest }) => {
  return (
    <Tooltip label={label} placement="top">
      <IconButton
        icon={<FontAwesomeIcon icon={icon} size="md" color="muted" />}
        variant="ghost"
        {...rest}
      />
    </Tooltip>
  )
})

ControlIcon.displayName = "ControlIcon"
