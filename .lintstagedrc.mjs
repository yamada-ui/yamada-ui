import { ESLint } from "eslint"

const removeIgnoredFiles = async (files) => {
  const eslint = new ESLint()

  const isIgnoredMap = await Promise.all(
    files.map((file) => eslint.isPathIgnored(file)),
  )

  const filteredFiles = files.filter((_, i) => !isIgnoredMap[i])

  console.log(filteredFiles)

  return filteredFiles.join(" ")
}

export default {
  "**/*.{js,jsx,ts,tsx,md,mdx,yml,json,html,css}": ["prettier --write"],
  "**/*.{js,jsx,ts,tsx}": async (files) => {
    const filesToLint = await removeIgnoredFiles(files)

    return [`eslint --max-warnings=0 ${filesToLint}`]
  },
}
