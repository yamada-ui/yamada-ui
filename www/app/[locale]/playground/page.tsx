import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import { Suspense } from "react"
import { Playground } from "./playground"

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("component.playground")
  return { title: t("title") }
}

export default function Page() {
  return (
    <Suspense>
      <Playground />
    </Suspense>
  )
}
