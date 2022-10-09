import 'regenerator-runtime/runtime'
import fs from 'fs'
import path from 'path'
import moduleAlias from 'module-alias'
import * as tsNode from 'ts-node'
import * as tsConfigPaths from 'tsconfig-paths'
import { createThemeTypings } from '../command/tokens/createThemeTypings'
import { isObject } from '../utils'

const bold = (text: string) => `\x1b[1m${text}\x1b[22m`

const importTheme = async (themeFile: string): Promise<any> => {
  const module = await import(themeFile)
  const theme = module.default ?? module.theme ?? module.defaultTheme

  if (!theme)
    throw new Error(`
    Theme export not found in module: '${themeFile}'.

    A theme should have a ${bold('default')} export or a ${bold('theme')} named export.
    Found the following exports: ${bold(Object.keys(module).join(', '))}
  `)

  return theme
}

const readTheme = async (themeFile: string): Promise<any> => {
  const cwd = process.cwd()
  const rootPath = path.join(cwd, themeFile)
  const rootDir = path.dirname(rootPath)

  const tsConfig = tsConfigPaths.loadConfig(rootDir)

  if (tsConfig.resultType === 'success') {
    tsNode.register({
      project: tsConfig.configFileAbsolutePath,
      compilerOptions: {
        module: 'CommonJS',
        esModuleInterop: true,
      },
      transpileOnly: true,
      swc: true,
    })

    const aliases = Object.keys(tsConfig.paths).reduce((obj, value) => {
      const target = tsConfig.paths[value][0].replace(/\*$/, '')

      const key = value.replace(/\/\*$/, '')

      obj[key] = path.join(tsConfig.absoluteBaseUrl, target)

      return obj
    }, {} as Record<string, string>)

    moduleAlias.addAliases(aliases)
  } else {
    const project = path.join(__dirname, '..', '..', 'bin', 'tsconfig.json')

    tsNode.register({
      project,
    })
  }

  try {
    await fs.promises.stat(rootPath)

    return await importTheme(rootPath)
  } catch (statError) {
    try {
      return importTheme(require.resolve(themeFile, { paths: [cwd] }))
    } catch (resolveError) {
      throw new Error(`Theme file or package not found \n${statError} \n${resolveError}`)
    }
  }
}

export const run = async (): Promise<void> => {
  const themeFile = process.argv[2]

  if (!themeFile) throw new Error('No path to theme file provided.')

  let theme = await readTheme(themeFile)

  if (!isObject(theme)) throw new Error('Theme not found in default or named `theme` export')

  theme = await createThemeTypings(theme)

  if (process.send) {
    process.send(theme)
  } else {
    process.stdout.write(theme)
  }
}

run().catch((e: Error) => {
  const error = `${e.toString()}\n${e.stack}`

  if (process.send) {
    process.send({ error })
  } else {
    process.stderr.write(error)
  }
  process.exit(1)
})
