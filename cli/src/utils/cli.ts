import checkNode from 'cli-check-node'
import unhandledError from 'cli-handle-unhandled'
import welcome from 'cli-welcome'
import JSON from '../../package.json'

export const initCLI = async () => {
  checkNode('12')

  await unhandledError()

  welcome({
    title: 'Yamada UI CLI',
    tagLine: `by Yamada UI\n${JSON.description}`,
    bgColor: `#49b657`,
    color: `#FFFFFF`,
    bold: true,
    clear: false,
    version: JSON.version,
  })
}
