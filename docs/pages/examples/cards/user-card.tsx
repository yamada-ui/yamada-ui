import { HStack, VStack, Avatar, Text, Select, Option } from "@yamada-ui/react"
import type { FC } from "react"
import { memo } from "react"

export type UserCardProps = {
  avatarSrc: string
  username: string
  userId: string
  defaultValue: string
  options: string[]
}

export const UserCard: FC<UserCardProps> = memo(
  ({ avatarSrc, username, userId, defaultValue, options }) => {
    return (
      <HStack
        w="full"
        flexDirection={{ base: "row", sm: "column" }}
        alignItems={{ base: "center", sm: "stretch" }}
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

        <Select
          w={{ base: "fit-content", sm: "full" }}
          defaultValue={defaultValue}
        >
          {options.map((option) => (
            <Option key={option} value={option}>
              {option}
            </Option>
          ))}
        </Select>
      </HStack>
    )
  },
)

UserCard.displayName = "UserCard"
