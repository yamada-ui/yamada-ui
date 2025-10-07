import type { Component, GridProps, IconProps } from "@yamada-ui/react"
import {
  ActivityIcon,
  Card,
  CreditCardIcon,
  DollarSignIcon,
  For,
  Grid,
  Heading,
  Spacer,
  Stat,
  UsersIcon,
} from "@yamada-ui/react"
import { memo } from "react"

const ITEMS: ItemProps[] = [
  {
    helperMessage: "20.1% from last month",
    icon: DollarSignIcon,
    statIcon: "increase",
    title: "Total Revenue",
    value: "$4,649.758",
  },
  {
    helperMessage: "180.1% from last month",
    icon: UsersIcon,
    statIcon: "increase",
    title: "Subscriptions",
    value: "+818",
  },
  {
    helperMessage: "19% from last month",
    icon: CreditCardIcon,
    statIcon: "increase",
    title: "Sales",
    value: "+1,993",
  },
  {
    helperMessage: "201 since last hour",
    icon: ActivityIcon,
    statIcon: "increase",
    title: "Active Now",
    value: "+4,545",
  },
]

export interface CardsProps extends GridProps {}

export const Cards = memo<CardsProps>(({ ...rest }) => {
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
      <For each={ITEMS}>
        {(props, index) => <Item key={index} {...props} />}
      </For>
    </Grid>
  )
})

Cards.displayName = "Cards"

export interface ItemProps
  extends Card.RootProps,
    Pick<Stat.RootProps, "helperMessage" | "value"> {
  icon: Component<"svg", IconProps>
  title: string
  statIcon?: Stat.RootProps["icon"]
  iconProps?: IconProps
  statProps?: Stat.RootProps
}

const Item = memo<ItemProps>(
  ({
    helperMessage,
    icon: Icon,
    statIcon,
    title,
    value,
    iconProps,
    statProps,
    ...rest
  }) => {
    return (
      <Card.Root variant="outline" {...rest}>
        <Card.Header>
          <Heading as="h4" size="sm" color="muted">
            {title}
          </Heading>

          <Spacer />

          <Icon color="muted" fontSize="2xl" {...iconProps} />
        </Card.Header>

        <Card.Body pt={{ base: "sm", sm: "xs" }}>
          <Stat.Root
            valueProps={{ fontSize: "2xl" }}
            {...{ helperMessage, icon: statIcon, value }}
            {...statProps}
          />
        </Card.Body>
      </Card.Root>
    )
  },
)

Item.displayName = "Item"
