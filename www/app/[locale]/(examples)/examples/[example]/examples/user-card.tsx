import type { FC } from "react"
import { Avatar, For, HStack, Select, Text, VStack } from "@yamada-ui/react"
import { memo } from "react"

export interface UserCardProps {
  avatarSrc: string
  defaultValue: string
  options: string[]
  userId: string
  username: string
}

export const UserCard: FC<UserCardProps> = memo(
  ({ avatarSrc, defaultValue, options, userId, username }) => {
    return (
      <HStack
        alignItems={{ base: "center", sm: "stretch" }}
        flexDirection={{ base: "row", sm: "column" }}
        w="full"
      >
        <HStack flex="1">
          <Avatar src={avatarSrc} />

          <VStack gap={0}>
            <Text lineClamp={1}>{username}</Text>
            <Text color="muted" lineClamp={1}>
              {userId}
            </Text>
          </VStack>
        </HStack>

        <Select.Root
          defaultValue={defaultValue}
          w={{ base: "fit-content", sm: "full" }}
        >
          <For each={options}>
            {(option) => (
              <Select.Option key={option} value={option}>
                {option}
              </Select.Option>
            )}
          </For>
        </Select.Root>
      </HStack>
    )
  },
)

UserCard.displayName = "UserCard"
