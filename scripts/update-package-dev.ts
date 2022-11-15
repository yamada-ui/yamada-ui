import findPkgs from 'find-packages'
import ora from 'ora'

const run = async () => {
  const spinner = ora('Updating package.json').start()

  try {
    const projects = await findPkgs(process.cwd(), {
      ignore: ['**/node_modules/**', 'package.json', 'cli', 'examples'],
    })

    const writeProjectManifests = projects
      .map((project) => {
        const { manifest } = project

        manifest.main = 'src/index.ts'

        delete manifest.module
        delete manifest.types

        return project.writeProjectManifest(manifest)
      })
      .filter(Boolean)

    spinner.info()
    spinner.text = `Write file ...`

    await Promise.allSettled(writeProjectManifests)

    spinner.succeed('Updated')
  } catch (e) {
    spinner.fail('An error occurred')

    if (e instanceof Error) console.error(e.message)
  } finally {
    spinner.stop()
  }
}

run()
