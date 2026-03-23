import { CONSTANTS } from "@/constants"

export function createFrontMatter(data: any = {}) {
  if (data == null) return ""
  if (typeof data !== "object" || Array.isArray(data)) return ""

  const hasLinks = data.style || data.source || data.storybook

  const content = [
    "---",
    `title: ${data.title}`,
    `description: "${data.description}"`,
    hasLinks ? `links:` : null,
    data.style
      ? `  - style: ${CONSTANTS.SNS.GITHUB.PACKAGE_EDIT_URL}/${data.style}`
      : null,
    data.source
      ? `  - source: ${CONSTANTS.SNS.GITHUB.PACKAGE_EDIT_URL}/${data.source}`
      : null,
    data.storybook
      ? `  - storybook: ${CONSTANTS.SNS.STORYBOOK}?path=/story/${data.storybook}`
      : null,
    "---",
  ]
    .filter(Boolean)
    .join("\n")

  return (
    content +
    "\n\n" +
    [`# ${data.title}`, data.description].join("\n\n") +
    "\n\n"
  )
}
