import type { AvatarProps, CardProps, StackProps } from "@yamada-ui/react"
import type { FC, ReactNode } from "react"
import {
  Avatar,
  Card,
  CardBody,
  CardHeader,
  Heading,
  HStack,
  Text,
  VStack,
} from "@yamada-ui/react"
import { memo } from "react"

const ITEMS: ItemProps[] = [
  {
    name: "Hirotomo Yamada",
    email: "hirotomoyamada@email.com",
    number: 530000,
    src: "https://avatars.githubusercontent.com/u/84060430?v=4",
  },
  {
    name: "tasukuwato",
    email: "tasukuwato@email.com",
    number: 758,
    src: "https://avatars.githubusercontent.com/u/116733827?v=4",
  },
  {
    name: "Kazuki Shirai",
    email: "kazukishirai@email.com",
    number: 4649,
    src: "https://avatars.githubusercontent.com/u/9676316?v=4",
  },
  {
    name: "koralle",
    email: "koralle@email.com",
    number: 891,
    src: "https://avatars.githubusercontent.com/u/33865215?v=4",
  },
  {
    name: "Ichinose Yuto",
    email: "ichinoseyuto@email.com",
    number: 818,
    src: "https://avatars.githubusercontent.com/u/60034520?v=4",
  },
]

export interface RecentSalesProps extends CardProps {}

export const RecentSales: FC<RecentSalesProps> = memo(({ ...rest }) => {
  return (
    <Card variant="outline" {...rest}>
      <CardHeader alignItems="flex-start" flexDirection="column" gap="0">
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
  name: ReactNode
  email: ReactNode
  number: number
  src: string
  isIncrease?: boolean
  avatarProps?: AvatarProps
}

const Item: FC<ItemProps> = memo(
  ({ name, email, isIncrease = true, number, src, avatarProps, ...rest }) => {
    return (
      <HStack as="li" gap={{ base: "md", sm: "sm" }} {...rest}>
        <Avatar boxSize={{ base: "10", sm: "8" }} src={src} {...avatarProps} />

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
