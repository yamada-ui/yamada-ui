import type { PropsWithChildren } from "react"
import { Grid, VStack } from "@yamada-ui/react"
import { Pagination } from "./[...slug]/pagination"
import { Header } from "./header"
import { Sidebar } from "./sidebar"

interface LayoutProps extends PropsWithChildren {}

export default function Layout({ children }: LayoutProps) {
  return (
    <VStack
      css={{
        "--docs-header-height": {
          base: "calc({sizes.13} + {spaces.lg})",
          md: "0px",
        },
        "--header-height": "calc({root-header-height} + {docs-header-height})",
      }}
      flex="1"
      gap="lg"
    >
      <Header />

      <Grid
        alignItems="flex-start"
        flex="1"
        gap="{space}"
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
