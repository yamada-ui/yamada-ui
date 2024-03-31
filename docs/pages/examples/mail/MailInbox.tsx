import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { Icon as FontAwesomeIcon } from "@yamada-ui/fontawesome"
import {
  Badge,
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  HStack,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  SegmentedControl,
  SegmentedControlButton,
  Spacer,
  Text,
  ui,
} from "@yamada-ui/react"
import {
  type Dispatch,
  type FC,
  type SetStateAction,
  memo,
  useState,
} from "react"
import { MailHeader } from "./MailHeader"
import { type MailType } from "./data"
import { dateDiff } from "./date"

type Props = {
  mails: MailType[]
  selectedMail: MailType
  setSelectedMail: Dispatch<SetStateAction<MailType>>
}

export const MailInbox: FC<Props> = memo(
  ({ mails, selectedMail, setSelectedMail }) => {
    const [mode, changeMode] = useState<string>("all")
    return (
      <Box>
        <MailHeader>
          <Flex w="full" alignItems="center">
            <Text fontSize="lg" fontWeight="bold">
              Inbox
            </Text>
            <Spacer />
            <SegmentedControl size="sm" value={mode} onChange={changeMode}>
              <SegmentedControlButton value="all">
                All Mail
              </SegmentedControlButton>
              <SegmentedControlButton value="unread">
                Unread
              </SegmentedControlButton>
            </SegmentedControl>
          </Flex>
        </MailHeader>
        <Box px="sm" pt="sm">
          <InputGroup>
            <InputLeftElement>
              <FontAwesomeIcon icon={faSearch} />
            </InputLeftElement>
            <Input placeholder="Search" />
          </InputGroup>
          <Flex direction="column" gap="sm" mt="sm" h="2xl" overflowY="scroll">
            {mails.map((mail: MailType) => {
              if (mode === "unread" && !mail.unRead) {
                return null
              }
              return (
                <MailInboxCard
                  key={mail.key}
                  mail={mail}
                  isSelected={selectedMail.key === mail.key}
                  setSelectedMail={setSelectedMail}
                />
              )
            })}
          </Flex>
        </Box>
      </Box>
    )
  },
)

MailInbox.displayName = "MailInbox"

type MailInboxCardProps = {
  mail: MailType
  isSelected: boolean
  setSelectedMail: Dispatch<SetStateAction<MailType>>
}

const MailInboxCard: FC<MailInboxCardProps> = memo(
  ({ mail, isSelected, setSelectedMail }) => {
    return (
      <Card
        variant={isSelected ? "solid" : "outline"}
        justifyContent="start"
        size="sm"
        w="full"
        p="sm"
        onClick={() => setSelectedMail(mail)}
      >
        <CardHeader as={HStack}>
          <Heading size="xs">{mail.authorName}</Heading>
          {mail.unRead && (
            <ui.span
              w={2}
              h={2}
              bg={isSelected ? "current" : "primary"}
              rounded="full"
            />
          )}
          <Spacer />
          <Text fontSize="xs">{dateDiff(mail.timestamp)}</Text>
        </CardHeader>
        <CardBody>
          <Text fontSize="xs">{mail.title}</Text>
          <Text lineClamp={2} fontSize="xs">
            {mail.content}
          </Text>
        </CardBody>
        <CardFooter>
          {mail.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </CardFooter>
      </Card>
    )
  },
)

MailInboxCard.displayName = "MailInboxCard"
