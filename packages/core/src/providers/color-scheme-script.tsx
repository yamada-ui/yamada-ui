import { ColorMode } from '..'

type ColorModeScriptProps = {
  type?: 'localStorage' | 'cookie'
  initialColorMode?: ColorMode | 'system'
  storageKey?: string
  nonce?: string
}

export const STORAGE_KEY = 'ui-scheme'

const SCHEME_MAP = new Set(['dark', 'light', 'system'])

const normalizeScheme = (initialColorMode: 'light' | 'dark' | 'system') => {
  let value = initialColorMode

  if (!SCHEME_MAP.has(value)) value = 'light'

  return value
}

export const getScript = ({
  initialColorMode = 'light',
  type = 'localStorage',
  storageKey = STORAGE_KEY,
}: Omit<ColorModeScriptProps, 'nonce'>) => {
  const init = normalizeScheme(initialColorMode)

  const isCookie = type === 'cookie'

  const cookieScript = `(function(){try{var a=function(o){var l="(prefers-color-scheme: dark)",v=window.matchMedia(l).matches?"dark":"light",e=o==="system"?v:o,d=document.documentElement,m=document.body,i="ui-light",n="ui-dark",s=e==="dark";return m.classList.add(s?n:i),m.classList.remove(s?i:n),d.style.colorMode=e,d.dataset.theme=e,e},u=a,h="${init}",r="${storageKey}",t=document.cookie.match(new RegExp("(^| )".concat(r,"=([^;]+)"))),c=t?t[2]:null;c?a(c):document.cookie="".concat(r,"=").concat(a(h),"; max-age=31536000; path=/")}catch(a){}})();
  `

  const localStorageScript = `(function(){try{var a=function(c){var v="(prefers-color-scheme: dark)",h=window.matchMedia(v).matches?"dark":"light",r=c==="system"?h:c,o=document.documentElement,s=document.body,l="ui-light",d="ui-dark",i=r==="dark";return s.classList.add(i?d:l),s.classList.remove(i?l:d),o.style.colorMode=r,o.dataset.theme=r,r},n=a,m="${init}",e="${storageKey}",t=localStorage.getItem(e);t?a(t):localStorage.setItem(e,a(m))}catch(a){}})();
  `

  const fn = isCookie ? cookieScript : localStorageScript

  return `!${fn}`.trim()
}

export const ColorModeScript = ({ nonce, ...rest }: ColorModeScriptProps) => {
  const html = getScript(rest)

  return <script id='ui-script' nonce={nonce} dangerouslySetInnerHTML={{ __html: html }} />
}
