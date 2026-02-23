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
import { useRef, useState } from "react"
import { Header } from "./header"
import { getDateDiff } from "./utils"

interface InboxProps extends StackProps {
  defaultMail: MailItem
  mails: MailItem[]
  setMailRef: RefObject<(mail: MailItem) => void>
}

export function Inbox({ defaultMail, mails, setMailRef, ...rest }: InboxProps) {
  const [mode, changeMode] = useState<string>("all")
  const resetMapRef = useRef<Map<number, () => void>>(new Map())

  return (
    <VStack gap="0" h="full" {...rest}>
      <Header>
        <Heading as="h4" size="lg" ms="sm">
          Inbox
        </Heading>

        <Spacer />

        <SegmentedControl.Root
          size="sm"
          display={{ base: "flex", sm: "none" }}
          items={[
            { label: "All Mail", value: "all" },
            { label: "Unread", value: "unread" },
          ]}
          value={mode}
          onChange={changeMode}
        />
      </Header>

      <VStack as="nav" flex="1" gap="0">
        <Box p="sm">
          <InputGroup.Root>
            <InputGroup.Element>
              <SearchIcon fontSize="lg" />
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

            const defaultSelected = id === defaultMail.id

            return (
              <Box
                key={id}
                as="li"
                display={mode === "unread" && !unRead ? "none" : "block"}
              >
                <InboxItem
                  defaultSelected={defaultSelected}
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
}

interface InboxItemProps
  extends MailItem, Omit<Card.RootProps, "content" | "id" | "title"> {
  defaultSelected?: boolean
  resetMapRef: RefObject<Map<number, () => void>>
}

function InboxItem({
  id,
  authorName,
  content,
  defaultSelected,
  resetMapRef,
  tags,
  timestamp,
  title,
  unRead,
  onClick,
  ...rest
}: InboxItemProps) {
  const [selected, { off, on }] = useBoolean(defaultSelected)

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
      bg={selected ? "bg.panel" : "transparent"}
      cursor="pointer"
      onClick={handlerAll(onClick, on, reset)}
      {...rest}
    >
      <Card.Header as={HStack}>
        <Heading as="h6" size="xs">
          {authorName}
        </Heading>

        {unRead ? <Box bg="mono" boxSize="2" rounded="full" /> : null}
        <Spacer />

        <Text color="fg.muted" fontSize="xs">
          {getDateDiff(timestamp)}
        </Text>
      </Card.Header>

      <Card.Body gap="xs" pt="sm">
        <Heading as="h5" size="sm" fontWeight="normal">
          {title}
        </Heading>

        <Text color="fg.muted" fontSize="xs" lineClamp={2}>
          {content}
        </Text>
      </Card.Body>

      <Card.Footer gap="sm">
        <For each={tags}>
          {(tag) => (
            <Tag key={tag} size="sm">
              {tag}
            </Tag>
          )}
        </For>
      </Card.Footer>
    </Card.Root>
  )
}
