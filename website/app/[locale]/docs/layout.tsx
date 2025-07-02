import type { PropsWithChildren } from "react"
import { Grid, VStack } from "@yamada-ui/react"
import { Pagination } from "./[...slug]/pagination"
import { Header } from "./header"
import { Sidebar } from "./sidebar"

interface LayoutProps extends PropsWithChildren {}

export default function Layout({ children }: LayoutProps) {
  return (
    <VStack flex="1" gap="lg" pt={{ base: "0", md: "md" }}>
      <Header />

      <Grid
        alignItems="flex-start"
        flex="1"
        gap={{ base: "lg", md: "md" }}
        templateColumns="{sizes.64} 1fr {sizes.64}"
        templateRows="1fr auto"
        w="full"
        _media={[
          {
            css: { gridTemplateColumns: "min(30%, {sizes.64}) 1fr" },
            maxW: "75rem",
          },
          { css: { gridTemplateColumns: "1fr" }, maxW: "48rem" },
        ]}
      >
        <Sidebar />

        {children}

        <Pagination />
      </Grid>
    </VStack>
  )
}
