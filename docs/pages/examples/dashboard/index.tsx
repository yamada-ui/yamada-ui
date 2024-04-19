import { Center, Grid } from "@yamada-ui/react"
import { memo } from "react"
import { HeaderBottom } from "./header-bottom"
import { HeaderTop } from "./header-top"
import { Item } from "./item"
import { Overview } from "./overview"
import { RecentSales } from "./recent-sales"

export const Dashboard = memo(() => {
  return (
    <Center minH="lg" style={{ display: "flex", flexDirection: "column" }}>
      <HeaderTop />
      <HeaderBottom />
      <Item />
      <Grid templateColumns="repeat(2, 1fr)" gap="md">
        <Overview />
        <RecentSales />
      </Grid>
    </Center>
  )
})

Dashboard.displayName = "Dashboard"
