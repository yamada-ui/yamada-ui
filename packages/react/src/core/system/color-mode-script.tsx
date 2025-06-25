"use client"

import type { ColorModeWithSystem } from "./index.types"

export interface ColorModeScriptProps {
  type?: "cookie" | "localStorage"
  initialColorMode?: ColorModeWithSystem
  nonce?: string
  storageKey?: string
}

export const COLOR_MODE_STORAGE_KEY = "color-mode"

const COLOR_MODE_MAP = new Set(["dark", "light", "system"])

const normalizeColorMode = (initialColorMode: "dark" | "light" | "system") => {
  let value = initialColorMode

  if (!COLOR_MODE_MAP.has(value)) value = "light"

  return value
}

export const getColorModeScript = ({
  type = "localStorage",
  initialColorMode = "light",
  storageKey = COLOR_MODE_STORAGE_KEY,
}: Omit<ColorModeScriptProps, "nonce"> = {}) => {
  const init = normalizeColorMode(initialColorMode)

  const isCookie = type === "cookie"

  const cookieScript = `(function(){try{var a=function(o){var l="(prefers-color-scheme: dark)",v=window.matchMedia(l).matches?"dark":"light",e=o==="system"?v:o,d=document.documentElement,m=document.body,i="light",n="dark",s=e==="dark";return m.classList.add(s?n:i),m.classList.remove(s?i:n),d.style.colorScheme=e,d.dataset.mode=e,e},h="${init}",r="${storageKey}",t=document.cookie.match(new RegExp("(^| )".concat(r,"=([^;]+)"))),c=t?t[2]:null;c?a(c):document.cookie="".concat(r,"=").concat(a(h),"; max-age=31536000; path=/")}catch(a){}})();
  `

  const localStorageScript = `(function(){try{var a=function(c){var v="(prefers-color-scheme: dark)",h=window.matchMedia(v).matches?"dark":"light",r=c==="system"?h:c,o=document.documentElement,s=document.body,l="light",d="dark",i=r==="dark";return s.classList.add(i?d:l),s.classList.remove(i?l:d),o.style.colorScheme=r,o.dataset.mode=r,r},m="${init}",e="${storageKey}",t=localStorage.getItem(e);t?a(t):localStorage.setItem(e,a(m))}catch(a){}})();
  `

  const fn = isCookie ? cookieScript : localStorageScript

  return `!${fn}`.trim()
}

export const ColorModeScript = ({ nonce, ...rest }: ColorModeScriptProps) => {
  const html = getColorModeScript(rest)

  return <script dangerouslySetInnerHTML={{ __html: html }} nonce={nonce} />
}
