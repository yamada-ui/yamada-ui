import type { Metadata } from "next"
import { Grid, GridItem } from "@yamada-ui/react"
import { getTranslations } from "next-intl/server"
import { Suspense } from "react"
import { PlaygroundEditor, PlaygroundHeader } from "./components"
import { PlaygroundProvider } from "./playground-provider"

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("component.playground")
  return { title: t("title") }
}

export default function Page() {
  return (
    <Suspense>
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
    </Suspense>
  )
}
