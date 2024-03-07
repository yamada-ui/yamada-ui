import { ESLint } from "eslint"

const omitIgnoredPaths = async (paths) => {
  const eslint = new ESLint()

  const resolvedPaths = (
    await Promise.all(
      paths.map(async (path) => {
        const isPathIgnored = await eslint.isPathIgnored(path)

        if (!isPathIgnored) return path
      }),
    )
  ).filter(Boolean)

  return resolvedPaths.join(" ")
}

export default {
  "**/*.{js,jsx,ts,tsx,mjs,mts,md,mdx,yml,json,html,css}": ["prettier --write"],
  "**/*.{js,jsx,ts,tsx,mjs,mts}": async (paths) => {
    const resolvedPaths = await omitIgnoredPaths(paths)

    return [`eslint --max-warnings=0 ${resolvedPaths}`]
  },
}
