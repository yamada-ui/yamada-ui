import { ColorScheme } from '@yamada-ui/styled'

export const setScript = (initialColorScheme: ColorScheme | 'system') => {
  const mql = window.matchMedia('(prefers-color-scheme: dark)')
  const systemColorScheme = mql.matches ? 'dark' : 'light'

  let colorScheme: ColorScheme

  const localColorScheme = localStorage.getItem('ui-scheme') as ColorScheme

  const isInStorage = typeof localColorScheme === 'string'

  if (isInStorage) {
    colorScheme = localColorScheme
  } else {
    colorScheme = initialColorScheme === 'system' ? systemColorScheme : initialColorScheme
  }

  if (colorScheme) {
    document.documentElement.style.setProperty('color-scheme', colorScheme)
    document.documentElement.setAttribute('data-theme', colorScheme)
  }
}

type ColorSchemeScriptProps = {
  initialColorScheme?: ColorScheme | 'system'
  nonce?: string
}

export const ColorSchemeScript = ({
  initialColorScheme = 'light',
  nonce,
}: ColorSchemeScriptProps) => {
  const html = `(${String(setScript)})('${initialColorScheme}')`

  return <script nonce={nonce} dangerouslySetInnerHTML={{ __html: html }} />
}
