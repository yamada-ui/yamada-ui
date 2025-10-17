import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"

export function generateOg(
  title: string | undefined,
  description: string | undefined,
): Metadata {
  const url = new URLSearchParams()

  if (title) url.set("title", title)
  if (description) url.set("description", description)

  return {
    openGraph: {
      type: "website",
      images: `/og?${url.toString()}`,
    },
    twitter: {
      card: "summary_large_image",
      creator: "@hirotomoyamada",
      images: `/og?${url.toString()}`,
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
