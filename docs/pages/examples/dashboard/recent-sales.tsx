import {
  Card,
  Text,
  Heading,
  CardHeader,
  CardBody,
  HStack,
  VStack,
  Avatar,
} from "@yamada-ui/react"
import type { AvatarProps, CardProps, StackProps } from "@yamada-ui/react"
import { memo } from "react"
import type { FC, ReactNode } from "react"

const ITEMS: ItemProps[] = [
  {
    src: "https://avatars.githubusercontent.com/u/84060430?v=4",
    name: "Hirotomo Yamada",
    email: "hirotomoyamada@email.com",
    number: 530000,
  },
  {
    src: "https://avatars.githubusercontent.com/u/116733827?v=4",
    name: "tasukuwato",
    email: "tasukuwato@email.com",
    number: 758,
  },
  {
    src: "https://avatars.githubusercontent.com/u/9676316?v=4",
    name: "Kazuki Shirai",
    email: "kazukishirai@email.com",
    number: 4649,
  },
  {
    src: "https://avatars.githubusercontent.com/u/33865215?v=4",
    name: "koralle",
    email: "koralle@email.com",
    number: 891,
  },
  {
    src: "https://avatars.githubusercontent.com/u/60034520?v=4",
    name: "Ichinose Yuto",
    email: "ichinoseyuto@email.com",
    number: 818,
  },
]

export interface RecentSalesProps extends CardProps {}

export const RecentSales: FC<RecentSalesProps> = memo(({ ...rest }) => {
  return (
    <Card variant="outline" {...rest}>
      <CardHeader flexDirection="column" alignItems="flex-start" gap="0">
        <Heading as="h4" size="md">
          RecentSales
        </Heading>

        <Text color="muted" lineClamp={1}>
          You made 265 sales this month.
        </Text>
      </CardHeader>

      <CardBody>
        <VStack as="ul" gap={{ base: "md", sm: "sm" }}>
          {ITEMS.map((props, index) => (
            <Item key={index} {...props} />
          ))}
        </VStack>
      </CardBody>
    </Card>
  )
})

RecentSales.displayName = "RecentSales"

export interface ItemProps extends StackProps {
  src: string
  avatarProps?: AvatarProps
  name: ReactNode
  email: ReactNode
  isIncrease?: boolean
  number: number
}

const Item: FC<ItemProps> = memo(
  ({ src, avatarProps, name, email, isIncrease = true, number, ...rest }) => {
    return (
      <HStack as="li" gap={{ base: "md", sm: "sm" }} {...rest}>
        <Avatar src={src} boxSize={{ base: "10", sm: "8" }} {...avatarProps} />

        <VStack gap="0">
          <Text
            as="h5"
            fontSize={{ base: "lg", sm: "sm" }}
            fontWeight="semibold"
            wordBreak="break-all"
            lineClamp={1}
          >
            {name}
          </Text>

          <Text
            fontSize={{ base: "sm", sm: "xs" }}
            color="muted"
            wordBreak="break-all"
            lineClamp={1}
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
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </Text>
      </HStack>
    )
  },
)

Item.displayName = "Item"
