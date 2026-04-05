import type { Guide } from "#velite"
import { guides } from "#velite"
import en from "./guide-map.en.json"
import ja from "./guide-map.ja.json"

export interface GuideCollection {
  collection: string
  description: string
  guides: Guide[]
  title: string
}

interface GuideMap {
  collection: Guide["collection"]
  description: Guide["description"]
  pathname: string
  title: Guide["title"]
}

export function getGuides(locale: string): Guide[] {
  return guides.filter((guide) => guide.locale === locale)
}

function getGuideMap(locale: string): GuideMap[] {
  switch (locale) {
    case "ja-JP":
      return ja as GuideMap[]
    default:
      return en as GuideMap[]
  }
}

export function getCollectionTitle(
  locale: string,
  collection: string,
): string | undefined {
  const guideMap = getGuideMap(locale)

  return guideMap.find((entry) => entry.collection === collection)?.title
}

export function getGuideCollections(locale: string): GuideCollection[] {
  const localeGuides = getGuides(locale)
  const guideMap = getGuideMap(locale)

  return guideMap.flatMap((entry) => {
    const collectionGuides = localeGuides.filter(
      (guide) => guide.collection === entry.collection,
    )

    if (!collectionGuides.length) return []

    return [{ ...entry, guides: collectionGuides }]
  })
}
