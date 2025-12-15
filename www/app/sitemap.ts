import type { MetadataRoute } from "next"
import { docs } from "#velite"
import { execFileSync } from "child_process"
import { readdirSync } from "fs"
import { join } from "path"
import { CONSTANTS } from "@/constants"
import { getLang } from "@/utils/i18n"

export const dynamic = "force-static"
export const revalidate = false

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://yamada-ui.com"
  const cwd = process.cwd()
  const staticRoutes = findStaticRoutes()

  const staticPaths = staticRoutes.map((r) =>
    r.filePath.startsWith(cwd) ? r.filePath.slice(cwd.length + 1) : r.filePath,
  )
  const docPaths = docs.map((doc) => `contents/${doc.path}`)
  const timestamps = getGitTimestamps([...staticPaths, ...docPaths])

  const staticUrls = CONSTANTS.I18N.LOCALES.flatMap((locale) => {
    const lang = getLang(locale)
    const prefix = locale === CONSTANTS.I18N.DEFAULT_LOCALE ? "" : `/${lang}`

    return staticRoutes.map(({ route }, index) => ({
      lastModified: timestamps.get(staticPaths[index] || "") || new Date(),
      priority: route === "/" ? 1.0 : 0.7,
      url: `${baseUrl}${prefix}${route}`,
    }))
  })

  const docUrls = docs.map((doc) => {
    const lang = getLang(doc.locale)
    const url =
      doc.locale === CONSTANTS.I18N.DEFAULT_LOCALE
        ? `${baseUrl}${doc.pathname}`
        : `${baseUrl}/${lang}${doc.pathname}`

    return {
      lastModified: timestamps.get(`contents/${doc.path}`) || new Date(),
      priority: 0.8,
      url,
    }
  })

  return [...staticUrls, ...docUrls]
}

interface RouteInfo {
  filePath: string
  route: string
}

function findStaticRoutes(): RouteInfo[] {
  const routes: RouteInfo[] = []
  const appsDir = join(process.cwd(), "app", "[locale]", "(apps)")

  function scan(dir: string, currentPath = "") {
    try {
      const entries = readdirSync(dir, { withFileTypes: true })

      for (const entry of entries) {
        if (entry.isDirectory()) {
          scan(join(dir, entry.name), `${currentPath}/${entry.name}`)
        } else if (entry.name === "page.tsx" || entry.name === "page.ts") {
          routes.push({
            filePath: join(dir, entry.name),
            route: currentPath || "/",
          })
        }
      }
    } catch {}
  }

  scan(appsDir)
  return routes
}

function getGitTimestamps(filePaths: string[]): Map<string, Date> {
  const result = new Map<string, Date>()

  try {
    const output = execFileSync(
      "git",
      ["log", "--name-only", "--format=COMMIT:%aI", "--", ...filePaths],
      {
        encoding: "utf-8",
        maxBuffer: 50 * 1024 * 1024,
      },
    ).trim()

    let currentTimestamp = ""

    for (const line of output.split("\n")) {
      if (line.startsWith("COMMIT:")) {
        currentTimestamp = line.slice(7)
      } else if (line && currentTimestamp) {
        const path = line.startsWith("www/") ? line.slice(4) : line
        if (!result.has(path)) {
          result.set(path, new Date(currentTimestamp))
        }
      }
    }
  } catch {}

  for (const path of filePaths) {
    if (!result.has(path)) {
      result.set(path, new Date())
    }
  }

  return result
}
