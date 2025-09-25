import type { StackProps } from "@yamada-ui/react"
import type { RefObject } from "react"
import type { MailItem } from "./data"
import {
  Box,
  Card,
  For,
  handlerAll,
  Heading,
  HStack,
  Input,
  InputGroup,
  SearchIcon,
  SegmentedControl,
  Spacer,
  Tag,
  Text,
  useBoolean,
  VStack,
} from "@yamada-ui/react"
import { memo, useRef, useState } from "react"
import { Header } from "./header"
import { getDateDiff } from "./utils"

interface InboxProps extends StackProps {
  defaultMail: MailItem
  mails: MailItem[]
  setMailRef: RefObject<(mail: MailItem) => void>
}

export const Inbox = memo<InboxProps>(
  ({ defaultMail, mails, setMailRef, ...rest }) => {
    const [mode, changeMode] = useState<string>("all")
    const resetMapRef = useRef<Map<number, () => void>>(new Map())

    return (
      <VStack gap="0" h="full" {...rest}>
        <Header>
          <Heading as="h4" size="md">
            Inbox
          </Heading>

          <Spacer />

          <SegmentedControl.Root
            size="sm"
            display={{ base: "flex", sm: "none" }}
            value={mode}
            onChange={changeMode}
          >
            <SegmentedControl.Item value="all">All Mail</SegmentedControl.Item>

            <SegmentedControl.Item value="unread">Unread</SegmentedControl.Item>
          </SegmentedControl.Root>
        </Header>

        <VStack as="nav" flex="1" gap="0">
          <Box p="sm">
            <InputGroup.Root>
              <InputGroup.Element>
                <SearchIcon />
              </InputGroup.Element>

              <Input placeholder="Search" />
            </InputGroup.Root>
          </Box>

          <VStack
            as="ul"
            flexBasis="0"
            flexGrow="1"
            gap="sm"
            overflowY="auto"
            pb="sm"
            px="sm"
          >
            {mails.map((props) => {
              const { id, unRead } = props

              const defaultIsSelected = id === defaultMail.id

              return (
                <Box
                  key={id}
                  as="li"
                  display={mode === "unread" && !unRead ? "none" : "block"}
                >
                  <InboxItem
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

interface InboxItemProps
  extends MailItem,
    Omit<Card.RootProps, "content" | "id" | "title"> {
  resetMapRef: RefObject<Map<number, () => void>>
  defaultIsSelected?: boolean
}

const InboxItem = memo<InboxItemProps>(
  ({
    id,
    authorName,
    content,
    defaultIsSelected,
    resetMapRef,
    tags,
    timestamp,
    title,
    unRead,
    onClick,
    ...rest
  }) => {
    const [isSelected, { off, on }] = useBoolean(defaultIsSelected)

    resetMapRef.current.set(id, off)

    const reset = () => {
      for (const [resetId, func] of resetMapRef.current.entries()) {
        if (id !== resetId) func()
      }
    }

    return (
      <Card.Root
        as="article"
        variant="outline"
        bg={isSelected ? ["blackAlpha.50", "whiteAlpha.100"] : "transparent"}
        cursor="pointer"
        onClick={handlerAll(onClick, on, reset)}
        {...rest}
      >
        <Card.Header as={HStack}>
          <Heading as="h6" size="sm">
            {authorName}
          </Heading>

          {unRead ? <Box bg="primary" boxSize="2" rounded="full" /> : null}
          <Spacer />

          <Text color="muted" fontSize="xs">
            {getDateDiff(timestamp)}
          </Text>
        </Card.Header>

        <Card.Body gap="xs" pt="sm">
          <Heading as="h5" size="xs" fontWeight="normal">
            {title}
          </Heading>

          <Text color="muted" fontSize="xs" lineClamp={2}>
            {content}
          </Text>
        </Card.Body>

        <Card.Footer>
          <For each={tags}>
            {(tag) => (
              <Tag key={tag} colorScheme="gray" size="sm">
                {tag}
              </Tag>
            )}
          </For>
        </Card.Footer>
      </Card.Root>
    )
  },
)

InboxItem.displayName = "InboxItem"
