import { promises as fs } from 'fs'
import path from 'path'

const cwd = process.cwd()

export const run = async () => {
  let data = await fs.readFile(path.join(cwd, '.storybook', 'main.ts'), 'utf8')

  const dir = `['../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)']`

  data = data.replace(/stories:[\s\S]*?\],/, `stories: ${dir},`)

  await fs.writeFile(path.join(cwd, '.storybook', 'main.ts'), data)
}

run()
