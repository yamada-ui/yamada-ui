import { HStack, VStack, Avatar, Text } from "@yamada-ui/react"
import type { FC } from "react"
import { memo } from "react"

export type UserCardProps = {
  avatarSrc: string
  name: string
  mail_addres: string
  money: string
}

export const NameCard: FC<UserCardProps> = memo(
  ({ avatarSrc, name, mail_addres, money }) => {
    return (
      <HStack
        w="full"
        flexDirection={{ base: "row", sm: "column" }}
        alignItems={{ base: "center", sm: "stretch" }}
      >
        <HStack flex="1">
          <Avatar src={avatarSrc} />
          <VStack gap={0}>
            <Text lineClamp={1}>{name}</Text>
            <Text color="muted" lineClamp={1}>
              {mail_addres}
            </Text>
          </VStack>
        </HStack>
        <Text ml={{ base: "3xl", sm: "md" }} fontWeight="bold">
          {money}
        </Text>
      </HStack>
    )
  },
)

NameCard.displayName = "NameCard"
