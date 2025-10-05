"use client"

import { Grid, GridItem } from "@yamada-ui/react"
import { memo } from "react"
import { PlaygroundEditor, PlaygroundHeader } from "./components"
import { PlaygroundProvider } from "./playground-provider"

export const Playground = memo(function Playground() {
  return (
    <PlaygroundProvider>
      <Grid flex={1} gap="lg" maxW="8xl" py="sm" templateRows="auto 1fr">
        <GridItem>
          <PlaygroundHeader />
        </GridItem>
        <GridItem>
          <PlaygroundEditor />
        </GridItem>
      </Grid>
    </PlaygroundProvider>
  )
})
