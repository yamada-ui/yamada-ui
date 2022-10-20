import * as path from 'path'
import chokidar from 'chokidar'
import { program } from 'commander'
import throttle from 'lodash.throttle'
import { generateThemeTypings, themePath } from './command/tokens'
import { initCLI } from './utils'

type Options = {
  out?: string
  watch?: string
}

export const run = async () => {
  await initCLI()

  program
    .command('tokens <source>')
    .option('--out <path>', `output file to ${path.join(...themePath)}`)
    .option('--watch [path]', 'Watch directory for changes and rebuild')
    .action(async (themeFile: string, { out: outFile, watch: watchFile }: Options) => {
      if (watchFile) {
        const watchPath = typeof watchFile === 'string' ? watchFile : path.dirname(themeFile)

        const throttledGenerateThemeTypings = throttle(async () => {
          console.time('Generated Theme')

          await generateThemeTypings({ themeFile, outFile })

          console.timeEnd('Generated Theme')
          console.info(new Date().toLocaleString())
        }, 1000)

        throttledGenerateThemeTypings()

        chokidar.watch(watchPath).on('change', throttledGenerateThemeTypings)
      } else {
        await generateThemeTypings({ themeFile, outFile })
      }
    })

  program.on('--help', () => {
    console.info(`Example call:\n\n$ yamada-cli tokens theme.ts`)
  })

  program.parse()
}
