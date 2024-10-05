import type { ActionType, NodePlopAPI } from "plop"
import { findPackages } from "find-packages"
import { readdirSync } from "fs"
import { appendFile, readFile, writeFile } from "fs/promises"
import path from "path"

const cwd = process.cwd()

const upperCase = (t: string) => t.charAt(0).toUpperCase() + t.slice(1)
const lowerCase = (t: string) => t.charAt(0).toLowerCase() + t.slice(1)
const camelCase = (t: string) =>
  t.replace(/[-_](\w)/g, (_, c) => c.toUpperCase())
const dashCase = (t: string) =>
  t.replace(/[A-Z]/g, (c) => "-" + c.toLowerCase())
const titleCase = (t: string) =>
  t.replace(/[-_](\w)/g, (_, c) => " " + c.toUpperCase())
const descCase = (t: string) => t.replace(/[-_]/g, " ")
const validateDashCase = (i: string) => !/[A-Z]/.test(i) && !i.includes("_")

const components = readdirSync("./packages/components").filter(
  (n) => !n.includes("."),
)
const hooks = readdirSync("./packages/hooks").filter((n) => !n.includes("."))
const categories = readdirSync("./stories/components").filter(
  (n) => !n.includes("."),
)

export default function plop(plop: NodePlopAPI) {
  plop.setHelper("upperCase", (text) => upperCase(camelCase(text)))
  plop.setHelper("titleCase", (text) => upperCase(titleCase(text)))
  plop.setHelper("descCase", (text) => descCase(text))

  plop.setActionType("updateReact", async (answers) => {
    const { packageName } = answers

    const [project] = await findPackages(path.join(cwd, "packages", "react"))

    const { manifest } = project ?? {}

    if (manifest?.dependencies) {
      manifest.dependencies = {
        ...manifest.dependencies,
        [`@yamada-ui/${dashCase(lowerCase(packageName))}`]: "workspace:*",
      }
    }

    if (manifest) project?.writeProjectManifest(manifest)

    await appendFile(
      path.join(cwd, "packages", "react", "src", "index.ts"),
      `export * from '@yamada-ui/${dashCase(lowerCase(packageName))}'`,
    )

    return 'Updated "@yamada-ui/react".'
  })

  plop.setActionType("updateTheme", async (answers) => {
    const { packageName } = answers

    let data = await readFile(
      path.join(cwd, "packages", "theme", "src", "components", "index.ts"),
      "utf8",
    )

    data =
      `import { ${upperCase(
        camelCase(packageName),
      )} } from "./${packageName}"\n` + data

    const keyword = "export const components = {"
    const target = data.indexOf(keyword) + keyword.length
    data =
      data.slice(0, target) +
      `\n  ${upperCase(camelCase(packageName))},` +
      data.slice(target)

    await writeFile(
      path.join(cwd, "packages", "theme", "src", "components", "index.ts"),
      data,
    )

    return 'Updated "@yamada-ui/theme".'
  })

  plop.setGenerator("component", {
    actions: (answers) => {
      const actions: ActionType[] = []

      if (!answers) return actions

      const { categoryName, componentType, newCategoryName, packageName } =
        answers

      actions.push({
        type: "addMany",
        base:
          componentType === "Yes"
            ? "plop/component/package-multi"
            : "plop/component/package",
        abortOnFail: true,
        data: { packageName },
        destination: `./packages/components/{{dashCase packageName}}`,
        templateFiles:
          componentType === "Yes"
            ? "plop/component/package-multi/**"
            : "plop/component/package/**",
      })

      actions.push({
        type: "addMany",
        base: "plop/component/storybook",
        abortOnFail: true,
        data: { categoryName: newCategoryName ?? categoryName, packageName },
        destination: `./stories/components/{{dashCase ${newCategoryName ? `newCategoryName` : `categoryName`}}}`,
        templateFiles: "plop/component/storybook/**",
      })

      actions.push({
        type: "addMany",
        base:
          componentType === "Yes"
            ? "plop/component/theme-multi"
            : "plop/component/theme",
        abortOnFail: true,
        data: { categoryName: newCategoryName ?? categoryName, packageName },
        destination: `./packages/theme/src/components`,
        templateFiles:
          componentType === "Yes"
            ? "plop/component/theme-multi/**"
            : "plop/component/theme/**",
      })

      actions.push({
        type: "updateReact",
      })

      actions.push({
        type: "updateTheme",
      })

      return actions
    },
    description: "Generates a component",

    prompts: [
      {
        type: "input",
        name: "packageName",
        message: "Enter component name:",
        validate: (input) => {
          if (!input) return "component name is required."

          if (!validateDashCase(input))
            return `Please enter the component name in kebab case.`

          if (components.includes(input)) return `${input} already exist.`

          return true
        },
      },
      {
        type: "list",
        name: "categoryName",
        choices: [...categories, "Create new category."],
        default: "layouts",
        message: "Which category does this belong?:",
      },
      {
        type: "input",
        name: "newCategoryName",
        message: "Enter category name:",
        validate: (input) => {
          if (!input) return "category name is required."

          if (!validateDashCase(input))
            return `Please enter the category name in kebab case.`

          if (categories.includes(input)) return `${input} already exist.`

          return true
        },
        when: ({ categoryName }) => categoryName === "Create new category.",
      },
      {
        type: "list",
        name: "componentType",
        choices: ["Yes", "No"],
        default: "No",
        message: "Does this use a provider?:",
      },
    ],
  })

  plop.setGenerator("hook", {
    actions: (answers) => {
      const actions: ActionType[] = []

      if (!answers) return actions

      const { packageName } = answers

      actions.push({
        type: "addMany",
        base: "plop/hook/package",
        abortOnFail: true,
        data: { packageName },
        destination: `./packages/hooks/{{dashCase packageName}}`,
        templateFiles: "plop/hook/package/**",
      })

      actions.push({
        type: "updateReact",
      })

      return actions
    },
    description: "Generates a hook",

    prompts: [
      {
        type: "input",
        name: "packageName",
        message: "Enter custom hook name:",
        validate: (input) => {
          if (!input) return "custom hook name is required."

          if (!validateDashCase(input))
            return `Please enter the custom hook name in kebab case.`

          if (hooks.includes(input)) return `${input} already exist.`

          return true
        },
      },
    ],
  })
}
