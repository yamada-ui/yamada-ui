import { Grid } from "@yamada-ui/react"
import { memo } from "react"
import { Company } from "./company"
import { Form } from "./form"

export const Authentication = memo(() => {
  return (
    <Grid
      as="section"
      templateColumns={{ base: "repeat(2, 1fr)", lg: "1fr" }}
      minH={{ base: "5xl", sm: "2xl" }}
    >
      <Company />
      <Form />
    </Grid>
  )
})

Authentication.displayName = "Authentication"
