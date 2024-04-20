import type { Theme } from "../theme.types"

export type ThemeSchemeScriptProps = {
  type?: "localStorage" | "cookie"
  initialThemeScheme?: Theme["themeSchemes"]
  storageKey?: string
  nonce?: string
}

export const THEME_SCHEME_STORAGE_KEY = "ui-theme-scheme"

export const getThemeSchemeScript = ({
  initialThemeScheme: init = "base",
  type = "localStorage",
  storageKey = THEME_SCHEME_STORAGE_KEY,
}: Omit<ThemeSchemeScriptProps, "nonce"> = {}) => {
  const isCookie = type === "cookie"

  const cookieScript = `(function(){try{var a=function(c){var o=document.documentElement;return o.dataset.theme=c,c},h='${init}',r='${storageKey}',t=document.cookie.match(new RegExp('(^| )'.concat(r,'=([^;]+)'))),c=t?t[2]:null;c?a(c):(document.cookie=''.concat(r,'=').concat(a(h),'; max-age=31536000; path=/'))}catch(a){}})();`

  const localStorageScript = `(function(){try{var a=function(c){var o=document.documentElement;return o.dataset.theme=c,c},m='${init}',e='${storageKey}',t=localStorage.getItem(e);t?a(t):localStorage.setItem(e, a(m))}catch(a){}})();`

  const fn = isCookie ? cookieScript : localStorageScript

  return `!${fn}`.trim()
}

export const ThemeSchemeScript = ({
  nonce,
  ...rest
}: ThemeSchemeScriptProps) => {
  const html = getThemeSchemeScript(rest)

  return (
    <script
      id="ui-theme-script"
      nonce={nonce}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
