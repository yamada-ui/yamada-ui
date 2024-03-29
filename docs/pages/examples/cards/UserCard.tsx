import {
  HStack,
  VStack,
  Avatar,
  Text,
  Spacer,
  Select,
  Option,
} from "@yamada-ui/react"
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
      <HStack w="full">
        <Avatar src={avatarSrc} />
        <VStack gap={0}>
          <Text>{username}</Text>
          <Text color="muted">{userId}</Text>
        </VStack>
        <Spacer />
        <Select w="fit-content" defaultValue={defaultValue}>
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
