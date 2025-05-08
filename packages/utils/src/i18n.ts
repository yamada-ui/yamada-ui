const RTL_SCRIPTS = new Set([
  "Adlm",
  "Arab",
  "Hebr",
  "Mand",
  "Mend",
  "Nkoo",
  "Rohg",
  "Samr",
  "Syrc",
  "Thaa",
  "Yezi",
])

const RTL_LANGS = new Set([
  "ae",
  "ar",
  "arc",
  "bcc",
  "bqi",
  "ckb",
  "dv",
  "fa",
  "glk",
  "he",
  "ku",
  "mzn",
  "nqo",
  "pnb",
  "ps",
  "sd",
  "ug",
  "ur",
  "yi",
])

export function isRtl(_locale: string) {
  const locale = new Intl.Locale(_locale).maximize()

  if ("textInfo" in locale) return (locale.textInfo as any).direction === "rtl"

  if (locale.script) {
    return RTL_SCRIPTS.has(locale.script)
  } else {
    return RTL_LANGS.has(_locale.split("-")[0]!)
  }
}
