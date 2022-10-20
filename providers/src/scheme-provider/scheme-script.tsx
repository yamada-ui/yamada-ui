import { Scheme } from '@yamada-ui/styled'

export const setScript = (initialScheme: Scheme | '../../system') => {
  const mql = window.matchMedia('(prefers-color-scheme: dark)')
  const systemScheme = mql.matches ? 'dark' : 'light'

  let scheme: Scheme

  const localScheme = localStorage.getItem('ui-scheme') as Scheme

  const isInStorage = typeof localScheme === 'string'

  if (isInStorage) {
    scheme = localScheme
  } else {
    scheme = initialScheme === '../../system' ? systemScheme : initialScheme
  }

  if (scheme) {
    document.documentElement.style.setProperty('color-scheme', scheme)
    document.documentElement.setAttribute('data-theme', scheme)
  }
}

type SchemeScriptProps = {
  initialScheme?: Scheme | '../../system'
  nonce?: string
}

export const SchemeScript = ({ initialScheme = 'light', nonce }: SchemeScriptProps) => {
  const html = `(${String(setScript)})('${initialScheme}')`

  return <script nonce={nonce} dangerouslySetInnerHTML={{ __html: html }} />
}
