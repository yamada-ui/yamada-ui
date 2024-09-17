import {
  Reply,
  ReplyAll,
  Share,
  Clock,
  Trash,
  Archive,
  EllipsisVertical,
} from "@yamada-ui/lucide"
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
import type {
  Component,
  IconButtonProps,
  IconProps,
  StackProps,
} from "@yamada-ui/react"
import { memo, useState } from "react"
import type { MutableRefObject, FC } from "react"
import type { MailItem } from "./data"
import { Header } from "./header"
import { getTimestamp } from "./utils"

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
            <ControlIcon icon={Archive} label="Archive" />
            <ControlIcon icon={Trash} label="Move to trash" />
            <Divider
              orientation="vertical"
              h="6"
              display={{ base: "block", sm: "none" }}
            />
            <ControlIcon
              icon={Clock}
              label="Snooze"
              display={{ base: "flex", sm: "none" }}
            />
          </HStack>

          <Spacer display={{ base: "block", sm: "none" }} />

          <HStack gap="xs">
            <ControlIcon icon={Reply} label="Reply" />
            <ControlIcon icon={ReplyAll} label="Reply all" />
            <ControlIcon icon={Share} label="Forward" />
            <Divider
              orientation="vertical"
              h="6"
              display={{ base: "block", sm: "none" }}
            />
            <ControlIcon icon={EllipsisVertical} />
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
                {getTimestamp(timestamp)}
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
  icon: Component<"svg", IconProps>
  label?: string
}

const ControlIcon: FC<ControlIconProps> = memo(
  ({ icon: Icon, label, ...rest }) => {
    return (
      <Tooltip label={label} placement="top">
        <IconButton
          icon={<Icon fontSize="md" color="muted" />}
          variant="ghost"
          {...rest}
        />
      </Tooltip>
    )
  },
)

ControlIcon.displayName = "ControlIcon"
