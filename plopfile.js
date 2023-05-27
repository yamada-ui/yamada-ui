const fs = require('fs').promises
const path = require('path')
const { findPackages } = require('find-packages')

const cwd = process.cwd()

const upperCase = (t) => t.charAt(0).toUpperCase() + t.slice(1)
const lowerCase = (t) => t.charAt(0).toLowerCase() + t.slice(1)
const camelCase = (t) => t.replace(/[-_](\w)/g, (_, c) => c.toUpperCase())
const dashCase = (t) => t.replace(/[A-Z]/g, (c) => '-' + c.toLowerCase())
const titleCase = (t) => t.replace(/[-_](\w)/g, (_, c) => ' ' + c.toUpperCase())
const descCase = (t) => t.replace(/[-_]/g, ' ')

const workspaces = [
  'data-display',
  'disclosure',
  'feedback',
  'forms',
  'layouts',
  'media-and-icons',
  'navigation',
  'overlay',
  'transitions',
  'typography',
]

module.exports = function (plop) {
  plop.setHelper('upperCase', (text) => upperCase(camelCase(text)))
  plop.setHelper('titleCase', (text) => upperCase(titleCase(text)))
  plop.setHelper('descCase', (text) => descCase(text))

  plop.setActionType('updateReact', async (answers) => {
    if (!answers) return

    const { packageName } = answers

    const [project] = await findPackages(path.join(cwd, 'packages', 'react'))

    const { manifest } = project

    manifest.dependencies = {
      ...manifest.dependencies,
      [`@yamada-ui/${dashCase(lowerCase(packageName))}`]: 'workspace:*',
    }

    project.writeProjectManifest(manifest)

    await fs.appendFile(
      path.join(cwd, 'packages', 'react', 'src', 'index.ts'),
      `export * from '@yamada-ui/${dashCase(lowerCase(packageName))}'`,
    )
  })

  plop.setActionType('updateTheme', async (answers) => {
    if (!answers) return

    const { packageName } = answers

    let data = await fs.readFile(
      path.join(cwd, 'packages', 'theme', 'src', 'components', 'index.ts'),
      'utf8',
    )

    data = `import { ${upperCase(camelCase(packageName))} } from "./${packageName}"\n` + data

    const keyword = 'export default {'
    const target = data.indexOf(keyword) + keyword.length
    data = data.slice(0, target) + `\n  ${upperCase(camelCase(packageName))},` + data.slice(target)

    await fs.writeFile(path.join(cwd, 'packages', 'theme', 'src', 'components', 'index.ts'), data)
  })

  plop.setGenerator('component', {
    description: 'Generates a component',
    prompts: [
      {
        type: 'input',
        name: 'packageName',
        message: 'Enter component name:',
      },
      {
        type: 'list',
        name: 'packageType',
        message: 'Where does this belong?:',
        default: 'layouts',
        choices: workspaces,
      },
      {
        type: 'list',
        name: 'componentType',
        message: 'Does this use a provider?:',
        default: 'No',
        choices: ['Yes', 'No'],
      },
    ],

    actions: (answers) => {
      const actions = []

      if (!answers) return actions

      const { packageName, packageType, componentType } = answers

      actions.push({
        type: 'addMany',
        templateFiles:
          componentType === 'Yes' ? 'plop/component/package-multi/**' : 'plop/component/package/**',
        destination: `./packages/components/{{dashCase packageName}}`,
        base: componentType === 'Yes' ? 'plop/component/package-multi' : 'plop/component/package',
        data: { packageName },
        abortOnFail: true,
      })

      actions.push({
        type: 'addMany',
        templateFiles: 'plop/component/storybook/**',
        destination: `./stories/components/{{dashCase packageType}}`,
        base: 'plop/component/storybook',
        data: { packageName, packageType },
        abortOnFail: true,
      })

      actions.push({
        type: 'addMany',
        templateFiles:
          componentType === 'Yes' ? 'plop/component/theme-multi/**' : 'plop/component/theme/**',
        destination: `./packages/theme/src/components`,
        base: componentType === 'Yes' ? 'plop/component/theme-multi' : 'plop/component/theme',
        data: { packageName },
        abortOnFail: true,
      })

      actions.push({
        type: 'updateReact',
      })

      actions.push({
        type: 'updateTheme',
      })

      return actions
    },
  })

  plop.setGenerator('hook', {
    description: 'Generates a hook',
    prompts: [
      {
        type: 'input',
        name: 'packageName',
        message: 'Enter custom hook name:',
      },
    ],

    actions: (answers) => {
      const actions = []

      if (!answers) return actions

      const { packageName } = answers

      actions.push({
        type: 'addMany',
        templateFiles: 'plop/hook/package/**',
        destination: `./packages/hooks/{{dashCase packageName}}`,
        base: 'plop/hook/package',
        data: { packageName },
        abortOnFail: true,
      })

      actions.push({
        type: 'updateReact',
      })

      return actions
    },
  })
}
