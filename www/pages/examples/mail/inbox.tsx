import type { CardProps, StackProps } from "@yamada-ui/react"
import type { FC, MutableRefObject } from "react"
import type { MailItem } from "./data"
import { SearchIcon } from "@yamada-ui/lucide"
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  handlerAll,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  SegmentedControl,
  SegmentedControlButton,
  Spacer,
  Tag,
  Text,
  useBoolean,
  VStack,
} from "@yamada-ui/react"
import { memo, useRef, useState } from "react"
import { Header } from "./header"
import { getDateDiff } from "./utils"

interface Props extends StackProps {
  defaultMail: MailItem
  mails: MailItem[]
  setMailRef: MutableRefObject<(mail: MailItem) => void>
}

export const Inbox: FC<Props> = memo(
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

          <SegmentedControl
            size="sm"
            display={{ base: "flex", sm: "none" }}
            value={mode}
            onChange={changeMode}
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
                <SearchIcon />
              </InputLeftElement>

              <Input placeholder="Search" />
            </InputGroup>
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
    Omit<CardProps, "content" | "id" | "title"> {
  resetMapRef: MutableRefObject<Map<number, () => void>>
  defaultIsSelected?: boolean
}

const InboxItem: FC<InboxItemProps> = memo(
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
      <Card
        as="article"
        variant="outline"
        bg={isSelected ? ["blackAlpha.50", "whiteAlpha.100"] : "transparent"}
        cursor="pointer"
        onClick={handlerAll(onClick, on, reset)}
        {...rest}
      >
        <CardHeader as={HStack}>
          <Heading as="h6" size="sm">
            {authorName}
          </Heading>

          {unRead ? <Box bg="primary" boxSize="2" rounded="full" /> : null}
          <Spacer />

          <Text color="muted" fontSize="xs">
            {getDateDiff(timestamp)}
          </Text>
        </CardHeader>

        <CardBody gap="xs" pt="sm">
          <Heading as="h5" size="xs" fontWeight="normal">
            {title}
          </Heading>

          <Text color="muted" fontSize="xs" lineClamp={2}>
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
