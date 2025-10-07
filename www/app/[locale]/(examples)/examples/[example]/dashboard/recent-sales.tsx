import type { AvatarProps, StackProps } from "@yamada-ui/react"
import type { ReactNode } from "react"
import { Avatar, Card, Heading, HStack, Text, VStack } from "@yamada-ui/react"
import { memo } from "react"

const ITEMS: ItemProps[] = [
  {
    name: "Hirotomo Yamada",
    src: "https://avatars.githubusercontent.com/u/84060430?v=4",
    email: "hirotomoyamada@email.com",
    number: 530000,
  },
  {
    name: "tasukuwato",
    src: "https://avatars.githubusercontent.com/u/116733827?v=4",
    email: "tasukuwato@email.com",
    number: 758,
  },
  {
    name: "Kazuki Shirai",
    src: "https://avatars.githubusercontent.com/u/9676316?v=4",
    email: "kazukishirai@email.com",
    number: 4649,
  },
  {
    name: "koralle",
    src: "https://avatars.githubusercontent.com/u/33865215?v=4",
    email: "koralle@email.com",
    number: 891,
  },
  {
    name: "Ichinose Yuto",
    src: "https://avatars.githubusercontent.com/u/60034520?v=4",
    email: "ichinoseyuto@email.com",
    number: 818,
  },
]

export interface RecentSalesProps extends Card.RootProps {}

export const RecentSales = memo<RecentSalesProps>(({ ...rest }) => {
  return (
    <Card.Root variant="outline" {...rest}>
      <Card.Header alignItems="flex-start" flexDirection="column" gap="0">
        <Heading as="h4" size="md">
          RecentSales
        </Heading>

        <Text color="muted" lineClamp={1}>
          You made 265 sales this month.
        </Text>
      </Card.Header>

      <Card.Body>
        <VStack as="ul" gap={{ base: "md", sm: "sm" }}>
          {ITEMS.map((props, index) => (
            <Item key={index} {...props} />
          ))}
        </VStack>
      </Card.Body>
    </Card.Root>
  )
})

RecentSales.displayName = "RecentSales"

export interface ItemProps extends StackProps {
  name: ReactNode
  src: string
  email: ReactNode
  number: number
  isIncrease?: boolean
  avatarProps?: AvatarProps
}

const Item = memo<ItemProps>(
  ({ name, src, email, isIncrease = true, number, avatarProps, ...rest }) => {
    return (
      <HStack as="li" gap={{ base: "md", sm: "sm" }} {...rest}>
        <Avatar src={src} boxSize={{ base: "10", sm: "8" }} {...avatarProps} />

        <VStack gap="0">
          <Text
            as="h5"
            fontSize={{ base: "lg", sm: "sm" }}
            fontWeight="semibold"
            lineClamp={1}
            wordBreak="break-all"
          >
            {name}
          </Text>

          <Text
            color="muted"
            fontSize={{ base: "sm", sm: "xs" }}
            lineClamp={1}
            wordBreak="break-all"
          >
            {email}
          </Text>
        </VStack>

        <Text
          as="span"
          fontSize={{ base: "lg", sm: "sm" }}
          fontWeight="semibold"
        >
          {isIncrease ? `+` : `-`}$
          {number.toLocaleString(undefined, {
            maximumFractionDigits: 2,
            minimumFractionDigits: 2,
          })}
        </Text>
      </HStack>
    )
  },
)

Item.displayName = "Item"
