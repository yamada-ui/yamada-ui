import { Grid, Card, CardBody } from "@yamada-ui/react"
import { memo } from "react"
import { ItemCard } from "./item-card"

export const Item = memo(() => {
  return (
    <Grid templateColumns="repeat(4, 1fr)" gap="md">
      <Card mb={{ base: "md", sm: "sm" }} rounded="xl" variant="outline">
        <CardBody>
          <ItemCard
            name="Total Revenue"
            value="$45,231.89"
            ratio="+50%"
            avatarSrc="https://avatars.githubusercontent.com/u/84060430?v=4"
          />
        </CardBody>
      </Card>
      <Card mb={{ base: "md", sm: "sm" }} rounded="xl" variant="outline">
        <CardBody>
          <ItemCard
            name="Subscription"
            value="+2350"
            ratio="+180.1% from last month"
            avatarSrc="https://avatars.githubusercontent.com/u/84060430?v=4"
          />
        </CardBody>
      </Card>
      <Card mb={{ base: "md", sm: "sm" }} rounded="xl" variant="outline">
        <CardBody>
          <ItemCard
            name="Sales"
            value="+12,234"
            ratio="+19% from last month"
            avatarSrc="https://avatars.githubusercontent.com/u/84060430?v=4"
          />
        </CardBody>
      </Card>
      <Card mb={{ base: "md", sm: "sm" }} rounded="xl" variant="outline">
        <CardBody>
          <ItemCard
            name="Active Now"
            value="+573"
            ratio="+201 since last hour"
            avatarSrc="https://avatars.githubusercontent.com/u/84060430?v=4"
          />
        </CardBody>
      </Card>
    </Grid>
  )
})

Item.displayName = "Item"
