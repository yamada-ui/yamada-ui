import type {
  Component,
  IconButtonProps,
  IconProps,
  StackProps,
} from "@yamada-ui/react"
import type { FC, MutableRefObject } from "react"
import type { MailItem } from "./data"
import {
  Archive,
  Clock,
  EllipsisVertical,
  Reply,
  ReplyAll,
  Share,
  Trash,
} from "@yamada-ui/lucide"
import {
  assignRef,
  Avatar,
  Button,
  Divider,
  Heading,
  HStack,
  IconButton,
  Spacer,
  Switch,
  Text,
  Textarea,
  Tooltip,
  VStack,
} from "@yamada-ui/react"
import { memo, useState } from "react"
import { Header } from "./header"
import { getTimestamp } from "./utils"

interface DetailProps extends StackProps {
  defaultMail: MailItem
  setMailRef: MutableRefObject<(mail: MailItem) => void>
}

export const Detail: FC<DetailProps> = memo(
  ({ defaultMail, setMailRef, ...rest }) => {
    const [{ authorName, content, email, timestamp, title }, setMail] =
      useState<MailItem>(defaultMail)

    assignRef(setMailRef, setMail)

    return (
      <VStack gap={0} h="full" {...rest}>
        <Header px="sm">
          <HStack gap="xs">
            <ControlIcon aria-label="Archive" icon={Archive} label="Archive" />
            <ControlIcon
              aria-label="Move to trash"
              icon={Trash}
              label="Move to trash"
            />
            <Divider
              display={{ base: "block", sm: "none" }}
              h="6"
              orientation="vertical"
            />
            <ControlIcon
              aria-label="Snooze"
              display={{ base: "flex", sm: "none" }}
              icon={Clock}
              label="Snooze"
            />
          </HStack>

          <Spacer display={{ base: "block", sm: "none" }} />

          <HStack gap="xs">
            <ControlIcon aria-label="Reply" icon={Reply} label="Reply" />
            <ControlIcon
              aria-label="Reply all"
              icon={ReplyAll}
              label="Reply all"
            />
            <ControlIcon aria-label="Forward" icon={Share} label="Forward" />
            <Divider
              display={{ base: "block", sm: "none" }}
              h="6"
              orientation="vertical"
            />
            <ControlIcon
              aria-label="More message options"
              icon={EllipsisVertical}
            />
          </HStack>
        </Header>

        <VStack divider={<Divider />} flex="1" gap="0">
          <HStack align="start" p="md">
            <Avatar name={authorName} />

            <HStack
              align="start"
              direction={{ base: "row", sm: "column" }}
              gap="xs"
              w="full"
            >
              <VStack gap="xs">
                <Heading as="h6" size="xs">
                  {authorName}
                </Heading>

                <Heading
                  as="h5"
                  color="muted"
                  fontSize="xs"
                  fontWeight="normal"
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

              <Text color="muted" fontSize="xs" textWrap="nowrap">
                {getTimestamp(timestamp)}
              </Text>
            </HStack>
          </HStack>

          <VStack flex="1" p="md">
            <Text>{content}</Text>
          </VStack>

          <VStack p="md">
            <Textarea
              autosize
              maxRows={6}
              minRows={3}
              placeholder={`Reply ${authorName}`}
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

type ControlIconProps = {
  icon: Component<"svg", IconProps>
  label?: string
} & Omit<IconButtonProps, "icon">

const ControlIcon: FC<ControlIconProps> = memo(
  ({ icon: Icon, label, ...rest }) => {
    return (
      <Tooltip label={label} placement="top">
        <IconButton
          variant="ghost"
          icon={<Icon color="muted" fontSize="md" />}
          {...rest}
        />
      </Tooltip>
    )
  },
)

ControlIcon.displayName = "ControlIcon"
