import { ESLint } from "eslint"

const omitIgnoredPaths = async (paths) => {
  const eslint = new ESLint()

  const resolvedPaths = (
    await Promise.all(
      paths.map((path) => (!eslint.isPathIgnored(path) ? path : undefined)),
    )
  ).filter(Boolean)

  return resolvedPaths.join(" ")
}

export default {
  "**/*.{js,jsx,ts,tsx,md,mdx,yml,json,html,css}": ["prettier --write"],
  "**/*.{js,jsx,ts,tsx}": async (paths) => {
    const resolvedPaths = await omitIgnoredPaths(paths)

    return [`eslint --max-warnings=0 ${resolvedPaths}`]
  },
}
