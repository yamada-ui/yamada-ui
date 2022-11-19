const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1)

const camelCase = (str) => str.replace(/[-_](\w)/g, (_, c) => c.toUpperCase())

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
  plop.setHelper('capitalize', (text) => capitalize(camelCase(text)))

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
        message: 'Does this use a provider?',
        default: 'No',
        choices: ['Yes', 'No'],
      },
    ],

    actions(answers) {
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
        message: 'Where does this belong?',
        default: 'layouts',
        choices: workspaces,
      },
      {
        type: 'list',
        name: 'componentType',
        message: 'Does this use a provider?',
        default: 'No',
        choices: ['Yes', 'No'],
      },
    ],

    actions(answers) {
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

      return actions
    },
  })
}
