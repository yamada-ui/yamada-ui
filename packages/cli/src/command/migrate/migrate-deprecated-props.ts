import type { Node } from "ts-morph"
import { Project, SyntaxKind } from "ts-morph"
import { deprecatedMap } from "./deprecatedMap"

function isDeprecated(node: Node): boolean {
  const jsDocs = node.getJsDocs()
  return jsDocs.some((doc) =>
    doc.getTags().some((tag) => tag.getTagName() === "deprecated"),
  )
}

interface MigrateOptions {
  cwd: string
  dryRun?: boolean
}

export async function migrateDeprecatedProps({
  cwd,
  dryRun = false,
}: MigrateOptions) {
  const project = new Project({
    skipAddingFilesFromTsConfig: false,
    tsConfigFilePath: `${cwd}/tsconfig.json`,
  })

  // add all .ts / .tsx files under src directory
  project.addSourceFilesAtPaths(`${cwd}/src/**/*.{ts,tsx}`)

  for (const sourceFile of project.getSourceFiles()) {
    const changes: string[] = [] // 変更箇所ログ用

    // rename or remove deprecated properties in interfaces
    for (const iface of sourceFile.getInterfaces()) {
      for (const prop of iface.getProperties()) {
        if (isDeprecated(prop)) {
          const oldName = prop.getName()
          const mapEntry = deprecatedMap[oldName]
          if (mapEntry) {
            if (mapEntry.newProp !== oldName) {
              changes.push(
                `Interface '${iface.getName()}': ${oldName} -> ${mapEntry.newProp}`,
              )
              if (!dryRun) {
                prop.rename(mapEntry.newProp)
              }
            }
          } else {
            changes.push(
              `Interface '${iface.getName()}': remove deprecated prop '${oldName}'`,
            )
            if (!dryRun) {
              prop.remove()
            }
          }
        }
      }
    }

    // rename or remove deprecated properties in classes
    for (const jsxAttr of sourceFile.getDescendantsOfKind(
      SyntaxKind.JsxAttribute,
    )) {
      const attrNameNode = jsxAttr.getNameNode()
      const oldProp = attrNameNode.getText()

      if (deprecatedMap[oldProp]) {
        const { newProp, note } = deprecatedMap[oldProp]
        if (newProp !== oldProp) {
          changes.push(
            `JSX Attribute: ${oldProp} -> ${newProp} ${
              note ? `(Note: ${note})` : ""
            }`,
          )
          if (!dryRun) {
            attrNameNode.replaceWithText(newProp)
          }
        }
      }
    }

    // write log and save file if there are changes
    if (changes.length > 0) {
      console.log(`\n[${sourceFile.getBaseName()}] Changes:`)
      for (const change of changes) {
        console.log("  - " + change)
      }
      if (!dryRun) {
        await sourceFile.save()
      }
    }
  }

  if (!dryRun) {
    await project.save()
  }
}
