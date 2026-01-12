"use client"

import type { ColorModeWithSystem, ThemeScheme } from "./index.types"
import type { Storage } from "./storage-manager"
import { COLOR_MODE_STORAGE_KEY, THEME_SCHEME_STORAGE_KEY } from "../constant"

export interface StorageScriptProps<Y extends string> {
  key?: string
  type?: Storage
  defaultValue?: Y
  nonce?: string
}

export function getStorageScript<Y extends string>(
  type: "colorMode" | "themeScheme",
  defaultKey: string,
) {
  return function ({
    key = defaultKey,
    type: storage = "localStorage",
    defaultValue,
  }: Omit<StorageScriptProps<Y>, "nonce"> = {}) {
    if (type === "colorMode") {
      if (storage === "localStorage") {
        return `!(function(){try{var a=function(c){var v="(prefers-color-scheme: dark)",h=window.matchMedia(v).matches?"dark":"light",r=c==="system"?h:c,o=document.documentElement,s=document.body,l="light",d="dark",i=r==="dark";return s.classList.add(i?d:l),s.classList.remove(i?l:d),o.style.colorScheme=r,o.dataset.mode=r,r},m="${defaultValue}",e="${key}",t=localStorage.getItem(e);t?a(t):(localStorage.setItem(e,m),localStorage.setItem(\`default-\${e}\`,a(m)))}catch{}})();`
      } else {
        return `!(function(){try{var a=function(o){var l="(prefers-color-scheme: dark)",v=window.matchMedia(l).matches?"dark":"light",e=o==="system"?v:o,d=document.documentElement,m=document.body,i="light",n="dark",s=e==="dark";return m.classList.add(s?n:i),m.classList.remove(s?i:n),d.style.colorScheme=e,d.dataset.mode=e,e},h="${defaultValue}",r="${key}",t=document.cookie.match(new RegExp("(^| )".concat(r,"=([^;]+)"))),c=t?t[2]:null;c?a(c):(document.cookie="".concat(r,"=").concat(h,"; max-age=31536000; path=/"),document.cookie="".concat(\`default-\${r}\`,"=").concat(a(h),"; max-age=31536000; path=/"))}catch{}})();`
      }
    } else {
      if (storage === "localStorage") {
        return `!(function(){try{var a=function(c){var o=document.documentElement;return o.dataset.theme=c,c},m='${defaultValue}',e='${key}',t=localStorage.getItem(e);t?a(t):localStorage.setItem(e, a(m))}catch{}})();`
      } else {
        return `!(function(){try{var a=function(c){var o=document.documentElement;return o.dataset.theme=c,c},h='${defaultValue}',r='${key}',t=document.cookie.match(new RegExp('(^| )'.concat(r,'=([^;]+)'))),c=t?t[2]:null;c?a(c):(document.cookie=''.concat(r,'=').concat(a(h),'; max-age=31536000; path=/'))}catch{}})();`
      }
    }
  }
}

export function ColorModeScript({
  nonce,
  ...rest
}: StorageScriptProps<ColorModeWithSystem>) {
  const html = getStorageScript(
    "colorMode",
    COLOR_MODE_STORAGE_KEY,
  )({ defaultValue: "light", ...rest })

  return <script dangerouslySetInnerHTML={{ __html: html }} nonce={nonce} />
}

export function ThemeSchemeScript({
  nonce,
  ...rest
}: StorageScriptProps<ThemeScheme>) {
  const html = getStorageScript(
    "themeScheme",
    THEME_SCHEME_STORAGE_KEY,
  )({
    defaultValue: "base",
    ...rest,
  })

  return <script dangerouslySetInnerHTML={{ __html: html }} nonce={nonce} />
}
