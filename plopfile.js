const fs = require('fs').promises
const path = require('path')
const findPkgs = require('find-packages').default
const { format, resolveConfig } = require('prettier')

const cwd = process.cwd()

const upperCase = (t) => t.charAt(0).toUpperCase() + t.slice(1)
const lowerCase = (t) => t.charAt(0).toLowerCase() + t.slice(1)
const camelCase = (t) => t.replace(/[-_](\w)/g, (_, c) => c.toUpperCase())
const dashCase = (t) => t.replace(/[A-Z]/g, (c) => '-' + c.toLowerCase())
const titleCase = (t) => t.replace(/[-_](\w)/g, (_, c) => ' ' + c.toUpperCase())

const workspaces = [
  'data-display',
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

  plop.setActionType('updateReact', async (answers) => {
    if (!answers) return

    const { packageName } = answers

    const [project] = await findPkgs(path.join(cwd, 'react'))

    const { manifest } = project

    manifest.dependencies = {
      ...manifest.dependencies,
      [`@yamada-ui/${dashCase(lowerCase(packageName))}`]: 'workspace:*',
    }

    project.writeProjectManifest(manifest)

    await fs.appendFile(
      path.join(cwd, 'react', 'src', 'index.ts'),
      `export * from '@yamada-ui/${dashCase(lowerCase(packageName))}'`,
    )
  })

  plop.setActionType('updateTheme', async (answers) => {
    if (!answers) return

    const { componentName } = answers

    let data = await fs.readFile(path.join(cwd, 'theme', 'src', 'components', 'index.ts'), 'utf8')

    data = `import { ${upperCase(camelCase(componentName))} } from "./${componentName}"\n` + data

    const keyword = 'export default {'
    const target = data.indexOf(keyword) + keyword.length
    data =
      data.slice(0, target) + `\n  ${upperCase(camelCase(componentName))},` + data.slice(target)

    await fs.writeFile(path.join(cwd, 'theme', 'src', 'components', 'index.ts'), data)
  })

  plop.setActionType('updateComponent', async (answers) => {
    if (!answers) return

    const { componentName, packageName } = answers

    await fs.appendFile(
      path.join(cwd, 'components', packageName, 'src', 'index.ts'),
      `export * from './${componentName}'`,
    )
  })

  plop.setActionType('updateConfig', async (answers) => {
    if (!answers) return

    const { packageNames, isDocuments, isSystem } = answers

    let data = await fs.readFile(path.join(cwd, '.storybook', 'main.ts'), 'utf8')

    let dir = ''

    if (packageNames.length) {
      for (let [i, packageName] of Object.entries(packageNames)) {
        i = Number(i)

        const path = `../stories/components/${packageName}/*.stories.@(js|jsx|ts|tsx|mdx)`

        dir = dir + `${i ? ', ' : ''}\'${path}\'`
      }

      if (isDocuments === 'Yes')
        dir = dir + ", '../stories/documents/**/*.stories.@(js|jsx|ts|tsx|mdx)'"

      if (isSystem === 'Yes') dir = dir + ", '../stories/system/**/*.stories.@(js|jsx|ts|tsx|mdx)'"
    } else {
      dir = "'../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)'"
    }

    dir = '[' + dir + ']'

    data = data.replace(/stories:[\s\S]*?\],/, `stories: ${dir},`)

    const config = await resolveConfig(cwd)

    data = format(data, { ...config, parser: 'typescript' })

    await fs.writeFile(path.join(cwd, '.storybook', 'main.ts'), data)
  })

  plop.setGenerator('storybook', {
    description: '',
    prompts: [
      {
        type: 'checkbox',
        name: 'packageNames',
        message: 'Select a component. If none are selected, all will be selected:',
        choices: workspaces,
      },
      {
        type: 'list',
        name: 'isDocuments',
        message: 'Show documents?:',
        when: ({ packageNames }) => packageNames.length,
        default: 'Yes',
        choices: ['Yes', 'No'],
      },
      {
        type: 'list',
        name: 'isSystem',
        message: 'Show system?:',
        when: ({ packageNames }) => packageNames.length,
        default: 'Yes',
        choices: ['Yes', 'No'],
      },
    ],

    actions: (answers) => {
      const actions = []

      if (!answers) return actions

      actions.push({
        type: 'updateConfig',
      })

      return actions
    },
  })

  plop.setGenerator('package', {
    description: 'Generates a package',
    prompts: [
      {
        type: 'input',
        name: 'packageName',
        message: 'Enter package name:',
      },
      {
        type: 'input',
        name: 'componentName',
        message: 'Enter first component name:',
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

      const { packageName, componentName, componentType } = answers

      actions.push({
        type: 'addMany',
        templateFiles: 'plop/package/**',
        destination: `./components/{{dashCase packageName}}`,
        base: 'plop/package',
        data: { packageName, componentName },
        abortOnFail: true,
      })

      actions.push({
        type: 'addMany',
        templateFiles:
          componentType === 'Yes' ? 'plop/component/with-provider/**' : 'plop/component/default/**',
        destination: `./components/{{dashCase packageName}}/src`,
        base: componentType === 'Yes' ? 'plop/component/with-provider' : 'plop/component/default',
        data: { componentName, packageName, componentType },
        abortOnFail: true,
      })

      actions.push({
        type: 'addMany',
        templateFiles: 'plop/component/storybook/**',
        destination: `./stories/components/{{dashCase packageName}}`,
        base: 'plop/component/storybook',
        data: { componentName, packageName, componentType },
        abortOnFail: true,
      })

      actions.push({
        type: 'addMany',
        templateFiles: 'plop/component/theme/**',
        destination: `./theme/src/components`,
        base: 'plop/component/theme',
        data: { componentName, packageName, componentType },
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

  plop.setGenerator('component', {
    description: 'Generates a component',
    prompts: [
      {
        type: 'input',
        name: 'componentName',
        message: 'Enter component name:',
      },
      {
        type: 'list',
        name: 'packageName',
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

      const { componentName, packageName, componentType } = answers

      actions.push({
        type: 'addMany',
        templateFiles:
          componentType === 'Yes' ? 'plop/component/with-provider/**' : 'plop/component/default/**',
        destination: `./components/{{dashCase packageName}}/src`,
        base: componentType === 'Yes' ? 'plop/component/with-provider' : 'plop/component/default',
        data: { componentName, packageName, componentType },
        abortOnFail: true,
      })

      actions.push({
        type: 'addMany',
        templateFiles: 'plop/component/storybook/**',
        destination: `./stories/components/{{dashCase packageName}}`,
        base: 'plop/component/storybook',
        data: { componentName, packageName, componentType },
        abortOnFail: true,
      })

      actions.push({
        type: 'addMany',
        templateFiles: 'plop/component/theme/**',
        destination: `./theme/src/components`,
        base: 'plop/component/theme',
        data: { componentName, packageName, componentType },
        abortOnFail: true,
      })

      actions.push({
        type: 'updateComponent',
      })

      actions.push({
        type: 'updateTheme',
      })

      return actions
    },
  })
}
