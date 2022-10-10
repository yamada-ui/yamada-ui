import checkNode from 'cli-check-node'
import unhandledError from 'cli-handle-unhandled'
import welcome from 'cli-welcome'

export const initCLI = async () => {
  checkNode('12')

  await unhandledError()

  welcome({
    title: 'Yamada UI CLI',
    tagLine: `by Yamada UI\nGenerate theme tokens for autocomplete`,
    bgColor: `#49b657`,
    color: `#FFFFFF`,
    bold: true,
    clear: false,
    version: '0.1.1',
  })
}
