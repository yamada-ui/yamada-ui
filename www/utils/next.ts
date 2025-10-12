import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"

export function generateOg(title: string, description: string): Metadata {
  return {
    openGraph: {
      type: "website",
      images: `/og?title=${title}&description=${description}`,
    },
    twitter: {
      card: "summary_large_image",
      creator: "@hirotomoyamada",
      images: `/og?title=${title}&description=${description}`,
      site: "@hirotomoyamada",
    },
  }
}

export function generateSharedMetadata(namespace: string) {
  return async function ({
    params,
  }: {
    params: Promise<{ locale: string }>
  }): Promise<Metadata> {
    const { locale } = await params
    const t = await getTranslations({ locale, namespace })
    const title = t("title")
    const description = t("description")

    return { description, title, ...generateOg(title, description) }
  }
}
