import { render } from "../../../test"
import { ThemeSchemeScript } from "./theme-script"

describe("ThemeSchemeScript", () => {
  test("sets the correct theme scheme on initial render", () => {
    render(<ThemeSchemeScript />)

    const scriptTag = document.querySelector("script")

    expect(scriptTag?.textContent).toContain(
      `!(function(){try{var a=function(c){var o=document.documentElement;return o.dataset.theme=c,c},m='base',e='theme-scheme',t=localStorage.getItem(e);t?a(t):localStorage.setItem(e, a(m))}catch(a){}})();`,
    )
  })

  test("change cookie mode", () => {
    render(<ThemeSchemeScript type="cookie" />)

    const scriptTag = document.querySelector("script")

    expect(scriptTag?.textContent).toContain(
      `!(function(){try{var a=function(c){var o=document.documentElement;return o.dataset.theme=c,c},h='base',r='theme-scheme',t=document.cookie.match(new RegExp('(^| )'.concat(r,'=([^;]+)'))),c=t?t[2]:null;c?a(c):(document.cookie=''.concat(r,'=').concat(a(h),'; max-age=31536000; path=/'))}catch(a){}})();`,
    )
  })
})
