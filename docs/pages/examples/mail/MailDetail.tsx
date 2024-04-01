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
import {
  Avatar,
  Button,
  Divider,
  Flex,
  HStack,
  IconButton,
  Spacer,
  Switch,
  Text,
  Textarea,
  Tooltip,
  VStack,
  ui,
} from "@yamada-ui/react"
import { type FC, memo } from "react"
import { MailHeader } from "./MailHeader"
import { type MailType } from "./data"
import { timestamp2date } from "./date"

type Props = {
  mail: MailType
}

export const MailDetail: FC<Props> = memo(({ mail }) => {
  return (
    <VStack gap={0} h="full">
      <MailHeader>
        <Flex h={8} w="full" gap={1} justifyContent="start" alignItems="center">
          <MailDetailHeaderIcon icon={faBoxArchive} label="Archive" />
          <MailDetailHeaderIcon icon={faTrash} label="Move to trash" />
          <Divider orientation="vertical" variant="solid" />
          <MailDetailHeaderIcon icon={faClock} label="Snooze" />
        </Flex>
        <Flex h={8} w="full" gap={1} justifyContent="end" alignItems="center">
          <MailDetailHeaderIcon icon={faReply} label="Reply" />
          <MailDetailHeaderIcon icon={faReplyAll} label="Reply all" />
          <MailDetailHeaderIcon icon={faShare} label="Forward" />
          <Divider orientation="vertical" variant="solid" />
          <MailDetailHeaderIcon icon={faEllipsisVertical} />
        </Flex>
      </MailHeader>
      <HStack p="md" gap={3} align="start">
        <Avatar name={mail.authorName} size="md" />
        <VStack gap="xs">
          <Text fontSize="sm" fontWeight="bolder">
            {mail.authorName}
          </Text>
          <Text fontSize="xs" color="muted">
            {mail.title}
          </Text>
          <Text fontSize="xs">
            <ui.span fontWeight="bolder">Reply-To</ui.span>: {mail.email}
          </Text>
        </VStack>
        <Spacer />
        <Text textWrap="nowrap" color="muted" fontSize="xs">
          {timestamp2date(mail.timestamp)}
        </Text>
      </HStack>
      <Divider />
      <VStack p="md">
        <Text>{mail.content}</Text>
      </VStack>
      <Spacer />
      <Divider />
      <VStack p="md">
        <Textarea
          placeholder={`Reply ${mail.authorName}`}
          fontSize="sm"
          autosize
          minRows={3}
          maxRows={6}
        />
      </VStack>
      <HStack px="md" pb="md">
        <Switch>Mute this thread</Switch>
        <Button size="sm" colorScheme="primary">
          Send
        </Button>
      </HStack>
    </VStack>
  )
})

MailDetail.displayName = "MailDetail"

type MailDetailHeaderIconProps = {
  icon: IconDefinition
  label?: string
}

const MailDetailHeaderIcon: FC<MailDetailHeaderIconProps> = memo(
  ({ icon, label }) => {
    return (
      <Tooltip label={label} placement="top">
        <IconButton
          icon={<FontAwesomeIcon icon={icon} size="lg" />}
          variant="ghost"
        />
      </Tooltip>
    )
  },
)

MailDetailHeaderIcon.displayName = "MailDetailHeaderIcon"
