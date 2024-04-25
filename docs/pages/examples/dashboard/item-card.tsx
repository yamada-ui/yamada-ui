import { HStack, VStack, Avatar, Text, Heading } from "@yamada-ui/react"
import type { FC } from "react"
import { memo } from "react"

export type UserCardProps = {
  name: string
  value: string
  ratio: string
  avatarSrc: string
}

export const ItemCard: FC<UserCardProps> = memo(
  ({ name, value, ratio, avatarSrc }) => {
    return (
      <HStack
        w="full"
        justifyContent="space-between"
        flexDirection={{ base: "row", sm: "column" }}
        alignItems={{ base: "center", sm: "stretch" }}
      >
        <VStack alignItems="flex-start" flex="1" gap={0}>
          <Text fontSize="sm" isTruncated lineClamp={1}>
            {name}
          </Text>
          <Heading size="md" lineClamp={1}>
            {value}
          </Heading>
          <Text fontSize="xs" color="muted" lineClamp={1}>
            {ratio}
          </Text>
        </VStack>
        <Avatar src={avatarSrc} alignSelf="flex-start" />
      </HStack>
    )
  },
)

ItemCard.displayName = "ItemCard"
