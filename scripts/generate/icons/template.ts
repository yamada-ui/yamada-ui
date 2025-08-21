export const ICON_TEMPLATE = [
  `"use client"`,
  ``,
  `import { {{iconName}} } from "lucide-react"`,
  `import { component, Icon } from "../icon"`,
  ``,
  `/**`,
  ` * \`{{iconName}}Icon\` is [Lucide](https://lucide.dev) SVG icon component.`,
  ` *`,
  ` * @see https://yamada-ui.com/components/icon`,
  ` */`,
  `export const {{iconName}}Icon = component(Icon)({ as: {{iconName}} })`,
  ``,
].join("\n")
