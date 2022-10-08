import * as path from 'path'
import chokidar from 'chokidar'
import { program } from 'commander'
import throttle from 'lodash.throttle'
import { generateThemeTypings } from './command/tokens'
import { initCLI } from './utils'

type Options = {
  watchFile?: string
}

export const run = async () => {
  await initCLI()

  program
    .command('tokens <source>')
    .option('--watch [path]', 'Watch directory for changes and rebuild')
    .action(async (themeFile: string, { watchFile }: Options) => {
      if (watchFile) {
        const watchPath = typeof watchFile === 'string' ? watchFile : path.dirname(themeFile)

        const throttledGenerateThemeTypings = throttle(async () => {
          console.time('Generated Theme')

          await generateThemeTypings({ themeFile })

          console.timeEnd('Generated Theme')
          console.info(new Date().toLocaleString())
        }, 1000)

        throttledGenerateThemeTypings()

        chokidar.watch(watchPath).on('change', throttledGenerateThemeTypings)
      }

      await generateThemeTypings({ themeFile })
    })

  program.parse()
}

run().catch((e) => {
  console.error(e)
  process.exit(1)
})
