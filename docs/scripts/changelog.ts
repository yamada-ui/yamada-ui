import { readFile, readdir, writeFile } from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'

const DIR_PATH = path.join('contents', 'changelog')

const main = async () => {
  let fileNames = await readdir(DIR_PATH)

  fileNames = fileNames
    .map((fileName) => {
      if (fileName.startsWith('index')) return

      return fileName
        .replace('v', '')
        .replace('.mdx', '')
        .split('.')
        .map((n) => parseInt(n))
    })
    .filter(Boolean)
    .sort((a, b) => {
      for (let i = 0; i < Math.max(a.length, b.length); i++) {
        if ((a[i] || 0) > (b[i] || 0)) return -1
        if ((a[i] || 0) < (b[i] || 0)) return 1
      }

      return 0
    })
    .map((version) => `v${version.join('.')}.mdx`)

  fileNames.forEach(async (fileName, index) => {
    index += 1

    let file = await readFile(path.join(DIR_PATH, fileName), 'utf8')

    const { data, content } = matter(file)

    data.table_of_contents_max_lv = 2
    data.order = index

    file = matter.stringify(content, data)

    await writeFile(path.join(DIR_PATH, fileName), file)

    if (index !== 1) return

    data.menu = 'Changelog'
    data.order = 7

    file = matter.stringify(content, data)

    await writeFile(path.join(DIR_PATH, 'index.mdx'), file)

    data.menu = '変更履歴'

    file = matter.stringify(content, data)

    await writeFile(path.join(DIR_PATH, 'index.ja.mdx'), file)
  })
}

main()
