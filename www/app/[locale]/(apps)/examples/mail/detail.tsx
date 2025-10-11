import type {
  Component,
  IconButtonProps,
  IconProps,
  StackProps,
} from "@yamada-ui/react"
import type { Ref } from "react"
import type { MailItem } from "./data"
import {
  ArchiveIcon,
  assignRef,
  Avatar,
  Button,
  ClockIcon,
  EllipsisVerticalIcon,
  Heading,
  HStack,
  IconButton,
  ReplyAllIcon,
  ReplyIcon,
  Separator,
  ShareIcon,
  Spacer,
  Switch,
  Text,
  Textarea,
  Tooltip,
  TrashIcon,
  VStack,
} from "@yamada-ui/react"
import { useState } from "react"
import { Header } from "./header"
import { getTimestamp } from "./utils"

interface DetailProps extends StackProps {
  defaultMail: MailItem
  setMailRef: Ref<(mail: MailItem) => void>
}

export function Detail({ defaultMail, setMailRef, ...rest }: DetailProps) {
  const [{ authorName, content, email, timestamp, title }, setMail] =
    useState<MailItem>(defaultMail)

  assignRef(setMailRef, setMail)

  return (
    <VStack gap={0} h="full" {...rest}>
      <Header px="sm">
        <HStack gap="xs">
          <ControlIcon icon={ArchiveIcon} label="Archive" />
          <ControlIcon icon={TrashIcon} label="Move to trash" />
          <Separator
            display={{ base: "block", sm: "none" }}
            h="6"
            orientation="vertical"
          />
          <ControlIcon
            display={{ base: "flex", sm: "none" }}
            icon={ClockIcon}
            label="Snooze"
          />
        </HStack>

        <Spacer display={{ base: "block", sm: "none" }} />

        <HStack gap="xs">
          <ControlIcon icon={ReplyIcon} label="Reply" />
          <ControlIcon icon={ReplyAllIcon} label="Reply all" />
          <ControlIcon icon={ShareIcon} label="Forward" />
          <Separator
            display={{ base: "block", sm: "none" }}
            h="6"
            orientation="vertical"
          />
          <ControlIcon icon={EllipsisVerticalIcon} />
        </HStack>
      </Header>

      <VStack flex="1" gap="0" separator={<Separator />}>
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
                color="fg.muted"
                fontSize="xs"
                fontWeight="normal"
              >
                {title}
              </Heading>

              <Text fontSize="xs">
                <Text as="span">Reply-To</Text>: {email}
              </Text>
            </VStack>

            <Spacer display={{ base: "block", sm: "none" }} />

            <Text color="fg.muted" fontSize="xs" textWrap="nowrap">
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

            <Button>Send</Button>
          </HStack>
        </VStack>
      </VStack>
    </VStack>
  )
}

type ControlIconProps = Omit<IconButtonProps, "icon"> & {
  icon: Component<"svg", IconProps>
  label?: string
}

function ControlIcon({ icon: Icon, label, ...rest }: ControlIconProps) {
  return (
    <Tooltip content={label} placement="start-center">
      <IconButton
        size="sm"
        variant="ghost"
        icon={<Icon color="fg.muted" fontSize="md" />}
        {...rest}
      />
    </Tooltip>
  )
}
