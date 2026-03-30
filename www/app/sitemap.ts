import type { MetadataRoute } from "next"
import type { Locale } from "@/utils/i18n"
import { execFile } from "child_process"
import { glob } from "fs/promises"
import path from "path"
import { promisify } from "util"
import { CONSTANTS } from "@/constants"
import { getDocs } from "@/data"
import { getLang } from "@/utils/i18n"

const execFileAsync = promisify(execFile)

interface Data {
  filaPath: string
  url: string
}

type DataMap = {
  [key in Locale]: { [key: string]: Data }
}

export const dynamic = "force-static"
export const revalidate = false

async function getAppDataMap(): Promise<DataMap> {
  const rootPath = path.resolve("app", "[[]locale[]]", "(apps)")
  const targetPaths = await Array.fromAsync(
    glob(path.join(rootPath, "**", "page.{ts,tsx}")),
  )

  return Object.fromEntries(
    CONSTANTS.I18N.LOCALES.map((locale) => [
      locale,
      Object.fromEntries(
        targetPaths.map((targetPath) => {
          const filaPath = targetPath.replace(path.resolve() + "/", "")
          const lang = getLang(locale)
          const defaultLocale = locale === CONSTANTS.I18N.DEFAULT_LOCALE
          const pathname = targetPath
            .replace(rootPath.replaceAll("[]", ""), "")
            .replace(/\/page\.(tsx|ts)$/, "")
          const url = `${CONSTANTS.SNS.HOMEPAGE}${defaultLocale ? "" : `/${lang}`}${pathname}`

          return [pathname, { filaPath, url }]
        }),
      ),
    ]),
  ) as DataMap
}

function getDocDataMap(): DataMap {
  return Object.fromEntries(
    CONSTANTS.I18N.LOCALES.map((locale) => [
      locale,
      Object.fromEntries(
        getDocs(locale).map(({ locale, path, pathname }) => {
          const filaPath = `contents/${path}`
          const lang = getLang(locale)
          const defaultLocale = locale === CONSTANTS.I18N.DEFAULT_LOCALE
          const url = `${CONSTANTS.SNS.HOMEPAGE}${defaultLocale ? "" : `/${lang}`}${pathname}`

          return [pathname, { filaPath, url }]
        }),
      ),
    ]),
  ) as DataMap
}

function createAlternates(data: DataMap, pathname: string) {
  return {
    languages: {
      ...Object.fromEntries(
        CONSTANTS.I18N.LOCALES.map((locale) => {
          const lang = getLang(locale)

          return [lang, data[locale][pathname]!.url]
        }),
      ),
      "x-default": data[CONSTANTS.I18N.DEFAULT_LOCALE][pathname]!.url,
    },
  }
}

async function createSitemap(appData: DataMap, docData: DataMap) {
  const lastModifiedMap = new Map<string, Date>()
  const targetPaths = CONSTANTS.I18N.LOCALES.flatMap((locale) => [
    ...Object.values(appData[locale]).map(({ filaPath }) => filaPath),
    ...Object.values(docData[locale]).map(({ filaPath }) => filaPath),
  ])

  try {
    const { stdout } = await execFileAsync(
      "git",
      ["log", "--name-only", "--format=COMMIT:%aI", "--", ...targetPaths],
      { encoding: "utf-8", maxBuffer: 50 * 1024 * 1024 },
    )
    const lines = stdout.trim().split("\n")

    let timestamp = ""

    for (const line of lines) {
      if (line.startsWith("COMMIT:")) {
        timestamp = line.slice(7)
      } else if (line && timestamp) {
        const path = line.startsWith("www/") ? line.slice(4) : line

        if (lastModifiedMap.has(path)) continue

        lastModifiedMap.set(path, new Date(timestamp))
      }
    }
  } catch {}

  return [
    ...CONSTANTS.I18N.LOCALES.flatMap((locale) =>
      Object.entries(appData[locale]).map(([pathname, { filaPath, url }]) => ({
        alternates: createAlternates(appData, pathname),
        lastModified: lastModifiedMap.get(filaPath),
        url,
      })),
    ),
    ...CONSTANTS.I18N.LOCALES.flatMap((locale) =>
      Object.entries(docData[locale]).map(([pathname, { filaPath, url }]) => ({
        alternates: createAlternates(docData, pathname),
        lastModified: lastModifiedMap.get(filaPath),
        url,
      })),
    ),
  ]
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const appData = await getAppDataMap()
  const docData = getDocDataMap()
  const sitemap = await createSitemap(appData, docData)

  return sitemap
}
