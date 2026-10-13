import type { Guide } from "#velite"
import { guides } from "#velite"
import en from "./guide-map.en.json"
import ja from "./guide-map.ja.json"

export interface GuideCategory {
  category: string
  description: string
  guides: Guide[]
  title: string
}

interface GuideMap {
  category: Guide["category"]
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

export function getCategoryTitle(
  locale: string,
  category: string,
): string | undefined {
  const guideMap = getGuideMap(locale)

  return guideMap.find((entry) => entry.category === category)?.title
}

export function getGuideCategories(locale: string): GuideCategory[] {
  const localeGuides = getGuides(locale)
  const guideMap = getGuideMap(locale)

  return guideMap.flatMap((entry) => {
    const categoryGuides = localeGuides.filter(
      (guide) => guide.category === entry.category,
    )

    if (!categoryGuides.length) return []

    return [{ ...entry, guides: categoryGuides }]
  })
}
