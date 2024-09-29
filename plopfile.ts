import { readdirSync } from "fs"
import { appendFile, readFile, writeFile } from "fs/promises"
import path from "path"
import { findPackages } from "find-packages"
import { ActionType, NodePlopAPI } from "plop"

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
const validateDashCase = (i: string) => !/[A-Z]/.test(i) && !/_/.test(i)

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
    if (!answers) return "Answer not found."

    const { packageName } = answers

    const [project] = await findPackages(path.join(cwd, "packages", "react"))

    const { manifest } = project

    manifest.dependencies = {
      ...manifest.dependencies,
      [`@yamada-ui/${dashCase(lowerCase(packageName))}`]: "workspace:*",
    }

    project.writeProjectManifest(manifest)

    await appendFile(
      path.join(cwd, "packages", "react", "src", "index.ts"),
      `export * from '@yamada-ui/${dashCase(lowerCase(packageName))}'`,
    )

    return 'Updated "@yamada-ui/react".'
  })

  plop.setActionType("updateTheme", async (answers) => {
    if (!answers) return "Answer not found."

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
        message: "Which category does this belong?:",
        default: "layouts",
        choices: [...categories, "Create new category."],
      },
      {
        type: "input",
        name: "newCategoryName",
        message: "Enter category name:",
        when: ({ categoryName }) => categoryName === "Create new category.",
        validate: (input) => {
          if (!input) return "category name is required."

          if (!validateDashCase(input))
            return `Please enter the category name in kebab case.`

          if (categories.includes(input)) return `${input} already exist.`

          return true
        },
      },
      {
        type: "list",
        name: "componentType",
        message: "Does this use a provider?:",
        default: "No",
        choices: ["Yes", "No"],
      },
    ],

    actions: (answers) => {
      const actions: ActionType[] = []

      if (!answers) return actions

      const { packageName, categoryName, newCategoryName, componentType } =
        answers

      actions.push({
        type: "addMany",
        templateFiles:
          componentType === "Yes"
            ? "plop/component/package-multi/**"
            : "plop/component/package/**",
        destination: `./packages/components/{{dashCase packageName}}`,
        base:
          componentType === "Yes"
            ? "plop/component/package-multi"
            : "plop/component/package",
        data: { packageName },
        abortOnFail: true,
      })

      actions.push({
        type: "addMany",
        templateFiles: "plop/component/storybook/**",
        destination: `./stories/components/{{dashCase ${newCategoryName ? `newCategoryName` : `categoryName`}}}`,
        base: "plop/component/storybook",
        data: { packageName, categoryName: newCategoryName ?? categoryName },
        abortOnFail: true,
      })

      actions.push({
        type: "addMany",
        templateFiles:
          componentType === "Yes"
            ? "plop/component/theme-multi/**"
            : "plop/component/theme/**",
        destination: `./packages/theme/src/components`,
        base:
          componentType === "Yes"
            ? "plop/component/theme-multi"
            : "plop/component/theme",
        data: { packageName, categoryName: newCategoryName ?? categoryName },
        abortOnFail: true,
      })

      actions.push({
        type: "updateReact",
      })

      actions.push({
        type: "updateTheme",
      })

      return actions
    },
  })

  plop.setGenerator("hook", {
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

    actions: (answers) => {
      const actions: ActionType[] = []

      if (!answers) return actions

      const { packageName } = answers

      actions.push({
        type: "addMany",
        templateFiles: "plop/hook/package/**",
        destination: `./packages/hooks/{{dashCase packageName}}`,
        base: "plop/hook/package",
        data: { packageName },
        abortOnFail: true,
      })

      actions.push({
        type: "updateReact",
      })

      return actions
    },
  })
}
