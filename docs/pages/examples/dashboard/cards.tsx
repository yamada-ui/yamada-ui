import type {
  CardProps,
  Component,
  GridProps,
  IconProps,
  StatProps,
} from "@yamada-ui/react"
import type { FC } from "react"
import { Activity, CreditCard, DollarSign, Users } from "@yamada-ui/lucide"
import {
  Card,
  CardBody,
  CardHeader,
  Grid,
  Heading,
  Spacer,
  Stat,
} from "@yamada-ui/react"
import { memo } from "react"

const ITEMS: ItemProps[] = [
  {
    helperMessage: "20.1% from last month",
    icon: DollarSign,
    number: "$4,649.758",
    statIcon: "increase",
    title: "Total Revenue",
  },
  {
    helperMessage: "180.1% from last month",
    icon: Users,
    number: "+818",
    statIcon: "increase",
    title: "Subscriptions",
  },
  {
    helperMessage: "19% from last month",
    icon: CreditCard,
    number: "+1,993",
    statIcon: "increase",
    title: "Sales",
  },
  {
    helperMessage: "201 since last hour",
    icon: Activity,
    number: "+4,545",
    statIcon: "increase",
    title: "Active Now",
  },
]

export interface CardsProps extends GridProps {}

export const Cards: FC<CardsProps> = memo(({ ...rest }) => {
  return (
    <Grid
      as="section"
      gap="md"
      templateColumns={{
        base: "repeat(4, 1fr)",
        sm: "1fr",
        lg: "repeat(2, 1fr)",
      }}
      {...rest}
    >
      {ITEMS.map((props, index) => (
        <Item key={index} {...props} />
      ))}
    </Grid>
  )
})

Cards.displayName = "Cards"

export interface ItemProps
  extends CardProps,
    Pick<StatProps, "helperMessage" | "number"> {
  icon: Component<"svg", IconProps>
  title: string
  statIcon?: StatProps["icon"]
  iconProps?: IconProps
  statProps?: StatProps
}

const Item: FC<ItemProps> = memo(
  ({
    helperMessage,
    icon: Icon,
    number,
    statIcon,
    title,
    iconProps,
    statProps,
    ...rest
  }) => {
    return (
      <Card variant="outline" {...rest}>
        <CardHeader>
          <Heading as="h4" size="sm" color="muted">
            {title}
          </Heading>

          <Spacer />

          <Icon color="muted" fontSize="2xl" {...iconProps} />
        </CardHeader>

        <CardBody pt={{ base: "sm", sm: "xs" }}>
          <Stat
            numberProps={{ fontSize: "2xl" }}
            {...{ helperMessage, icon: statIcon, number }}
            {...statProps}
          />
        </CardBody>
      </Card>
    )
  },
)

Item.displayName = "Item"
