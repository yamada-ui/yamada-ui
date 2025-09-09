"use client"

import { Grid, GridItem } from "@yamada-ui/react"
import { PlaygroundHeader, PlaygroundTabs } from "./components"
import { PlaygroundProvider } from "./playground-provider"

export function Playground() {
  return (
    <PlaygroundProvider>
      <Grid flex={1} gap="lg" maxW="8xl" py="sm" templateRows="auto 1fr">
        <GridItem>
          <PlaygroundHeader />
        </GridItem>
        <GridItem>
          <PlaygroundTabs />
        </GridItem>
      </Grid>
    </PlaygroundProvider>
  )
}
