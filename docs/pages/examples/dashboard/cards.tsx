import { Users, CreditCard, Activity, DollarSign } from "@yamada-ui/lucide"
import {
  Card,
  CardBody,
  CardHeader,
  Grid,
  Heading,
  Spacer,
  Stat,
} from "@yamada-ui/react"
import type {
  CardProps,
  Component,
  GridProps,
  IconProps,
  StatProps,
} from "@yamada-ui/react"
import { memo } from "react"
import type { FC } from "react"

const ITEMS: ItemProps[] = [
  {
    title: "Total Revenue",
    icon: DollarSign,
    number: "$4,649.758",
    statIcon: "increase",
    helperMessage: "20.1% from last month",
  },
  {
    title: "Subscriptions",
    icon: Users,
    number: "+818",
    statIcon: "increase",
    helperMessage: "180.1% from last month",
  },
  {
    title: "Sales",
    icon: CreditCard,
    number: "+1,993",
    statIcon: "increase",
    helperMessage: "19% from last month",
  },
  {
    title: "Active Now",
    icon: Activity,
    number: "+4,545",
    statIcon: "increase",
    helperMessage: "201 since last hour",
  },
]

export type CardsProps = GridProps & {}

export const Cards: FC<CardsProps> = memo(({ ...rest }) => {
  return (
    <Grid
      as="section"
      templateColumns={{
        base: "repeat(4, 1fr)",
        lg: "repeat(2, 1fr)",
        sm: "1fr",
      }}
      gap="md"
      {...rest}
    >
      {ITEMS.map((props, index) => (
        <Item key={index} {...props} />
      ))}
    </Grid>
  )
})

Cards.displayName = "Cards"

type ItemProps = CardProps &
  Pick<StatProps, "number" | "helperMessage"> & {
    title: string
    icon: Component<"svg", IconProps>
    iconProps?: IconProps
    statProps?: StatProps
    statIcon?: StatProps["icon"]
  }

const Item: FC<ItemProps> = memo(
  ({
    title,
    icon: Icon,
    iconProps,
    number,
    helperMessage,
    statIcon,
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
            {...{ number, helperMessage, icon: statIcon }}
            {...statProps}
          />
        </CardBody>
      </Card>
    )
  },
)

Item.displayName = "Item"
