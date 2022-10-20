import { fork, Serializable } from 'child_process'
import { writeFile } from 'fs'
import * as path from 'path'
import { promisify } from 'util'
import ora from 'ora'
import { resolveOutputPath, themePath } from './resolve-output-path'

type Error = Record<'error', string>

const writeFileAsync = promisify(writeFile)

const themeWorker = ({ themeFile }: { themeFile: string }): Promise<string> => {
  const worker = fork(
    path.join(__dirname, '..', '..', 'scripts', 'read-theme-file.worker.js'),
    [themeFile],
    {
      stdio: ['pipe', 'pipe', 'pipe', 'ipc'],
      cwd: process.cwd(),
    },
  )

  return new Promise((resolve, reject) => {
    worker.on('message', (message: Error | Serializable) => {
      const errorMessage = (message as Error)?.error

      if (errorMessage) {
        reject(new Error(errorMessage))
      }

      return resolve(String(message))
    })

    worker.on('error', reject)
  })
}

export const generateThemeTypings = async ({
  themeFile,
  outFile,
}: {
  themeFile: string
  outFile?: string
}) => {
  const spinner = ora('Generating Yamada-UI theme typings').start()

  try {
    const theme = await themeWorker({
      themeFile,
    })

    const outPath = await resolveOutputPath(outFile)

    spinner.info()
    spinner.text = `Write file "${outPath}"...`

    await writeFileAsync(outPath, theme, 'utf8')

    spinner.succeed('Generated')
  } catch (e) {
    spinner.fail('An error occurred')

    if (e instanceof Error) console.error(e.message)
  } finally {
    spinner.stop()
  }
}

export { themePath }
