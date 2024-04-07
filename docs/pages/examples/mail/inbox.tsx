import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { Icon as FontAwesomeIcon } from "@yamada-ui/fontawesome"
import type { CardProps, StackProps } from "@yamada-ui/react"
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  HStack,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  SegmentedControl,
  SegmentedControlButton,
  Spacer,
  Tag,
  Text,
  VStack,
  handlerAll,
  useBoolean,
} from "@yamada-ui/react"
import { memo, useRef, useState } from "react"
import type { MutableRefObject, FC } from "react"
import { type MailItem } from "./data"
import { Header } from "./header"
import { dateDiff } from "./utils"

type Props = StackProps & {
  mails: MailItem[]
  defaultMail: MailItem
  setMailRef: MutableRefObject<(mail: MailItem) => void>
}

export const Inbox: FC<Props> = memo(
  ({ defaultMail, mails, setMailRef, ...rest }) => {
    const [mode, changeMode] = useState<string>("all")
    const resetMapRef = useRef<Map<number, () => void>>(new Map())

    return (
      <VStack h="full" gap="0" {...rest}>
        <Header>
          <Heading as="h4" size="md">
            Inbox
          </Heading>

          <Spacer />

          <SegmentedControl
            size="sm"
            value={mode}
            onChange={changeMode}
            display={{ base: "flex", sm: "none" }}
          >
            <SegmentedControlButton value="all">
              All Mail
            </SegmentedControlButton>

            <SegmentedControlButton value="unread">
              Unread
            </SegmentedControlButton>
          </SegmentedControl>
        </Header>

        <VStack as="nav" flex="1" gap="0">
          <Box p="sm">
            <InputGroup>
              <InputLeftElement>
                <FontAwesomeIcon icon={faSearch} />
              </InputLeftElement>

              <Input placeholder="Search" />
            </InputGroup>
          </Box>

          <VStack
            as="ul"
            pb="sm"
            px="sm"
            gap="sm"
            flexBasis="0"
            flexGrow="1"
            overflowY="auto"
          >
            {mails.map((props) => {
              const { id, unRead } = props

              const defaultIsSelected = id === defaultMail.id

              return (
                <Box as="li" key={id}>
                  <InboxItem
                    display={mode === "unread" && !unRead ? "none" : "flex"}
                    defaultIsSelected={defaultIsSelected}
                    resetMapRef={resetMapRef}
                    onClick={() => setMailRef.current(props)}
                    {...props}
                  />
                </Box>
              )
            })}
          </VStack>
        </VStack>
      </VStack>
    )
  },
)

Inbox.displayName = "Inbox"

type InboxItemProps = Omit<CardProps, "id"> &
  MailItem & {
    defaultIsSelected?: boolean
    resetMapRef: MutableRefObject<Map<number, () => void>>
  }

const InboxItem: FC<InboxItemProps> = memo(
  ({
    id,
    authorName,
    timestamp,
    title,
    defaultIsSelected,
    content,
    tags,
    unRead,
    onClick,
    resetMapRef,
    ...rest
  }) => {
    const [isSelected, { toggle, off }] = useBoolean(defaultIsSelected)

    resetMapRef.current.set(id, off)

    const reset = () => {
      for (const [resetId, func] of resetMapRef.current.entries()) {
        if (id !== resetId) func()
      }
    }

    return (
      <Card
        as="article"
        variant="outline"
        cursor="pointer"
        bg={isSelected ? ["blackAlpha.50", "whiteAlpha.100"] : "transparent"}
        onClick={handlerAll(onClick, toggle, reset)}
        {...rest}
      >
        <CardHeader as={HStack}>
          <Heading as="h6" size="sm">
            {authorName}
          </Heading>

          {unRead ? <Box boxSize="2" bg="primary" rounded="full" /> : null}
          <Spacer />

          <Text fontSize="xs" color="muted">
            {dateDiff(timestamp)}
          </Text>
        </CardHeader>

        <CardBody pt="sm" gap="xs">
          <Heading as="h5" size="xs" fontWeight="normal">
            {title}
          </Heading>

          <Text lineClamp={2} fontSize="xs" color="muted">
            {content}
          </Text>
        </CardBody>

        <CardFooter>
          {tags.map((tag, index) => (
            <Tag key={index} colorScheme="gray" size="sm">
              {tag}
            </Tag>
          ))}
        </CardFooter>
      </Card>
    )
  },
)

InboxItem.displayName = "InboxItem"
