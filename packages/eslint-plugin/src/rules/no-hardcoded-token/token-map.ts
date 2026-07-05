// ============================================================================
// token-map
// ----------------------------------------------------------------------------
// ルールが必要とする 2 種類のマップを、@yamada-ui/react の実データから
// 「実行時に」生成するモジュール。ハードコードした対応表を持たないため、
// Yamada UI 側でトークンやスタイル prop が増減しても追従できる。
//
// 1. getPropTokenScaleMap:
//      prop 名 → トークンスケール名
//      例: "p" → "spaces", "bg" → "colors", "fontSize" → "fontSizes"
//      「この prop はどのスケールのトークンを受け取るのか」を引くために使う。
//
// 2. getValueToTokenMap:
//      スケール名 → (CSS 実値 → トークン名) の逆引きマップ
//      例: "spaces" → { "1rem" → "4" }, "colors" → { "#ef4444" → "red.500" }
//      「このハードコード値に対応するトークンは何か」を引くために使う。
//
// どちらも生成コストが高い（theme 全体を走査する）ので、モジュール内の
// 変数にキャッシュして 2 回目以降は再利用する。ESLint はファイルごとに
// ルールの create() を呼ぶが、このキャッシュはプロセス全体で共有される。
// ============================================================================

// standardStyles / shorthandStyles: Yamada UI が定義する全スタイル prop の定義集。
//   standardStyles: "padding", "color" などの正式名
//   shorthandStyles: "p", "bg" などの省略形
// 各定義は { token: "spaces", ... } のように、対応するトークンスケール名を持つ。
import { shorthandStyles, standardStyles } from "@yamada-ui/react/core"
// theme: Yamada UI のデフォルトテーマ。
// { colors: { red: { 500: "#ef4444", ... } }, spaces: { 4: "1rem", ... }, ... }
// のような「スケール → トークンキー → CSS 実値」の入れ子構造。
import { theme } from "@yamada-ui/react/theme"

// getPropTokenScaleMap の結果キャッシュ（初回呼び出しで生成）
let propTokenScaleCache: Map<string, string> | null = null

export function getPropTokenScaleMap(): Map<string, string> {
  if (propTokenScaleCache) return propTokenScaleCache

  const map = new Map<string, string>()

  // 正式名と省略形の両方を 1 つのマップに統合する。
  // 例: standardStyles の "padding" も shorthandStyles の "p" も
  //     どちらも "spaces" にマッピングされる。
  for (const [name, def] of [
    ...Object.entries(standardStyles),
    ...Object.entries(shorthandStyles),
  ])
    // def が token プロパティを持つものだけが「トークンを受け取る prop」。
    // 持たないもの（例: display など単なる CSS パススルー）はマップに
    // 含めない = ルールの検査対象外になる。
    if (def && typeof def === "object" && "token" in def)
      map.set(name, def.token as string)

  propTokenScaleCache = map

  return map
}

// 逆引きマップの生成から除外するスケール。
// - animations / keyframes / gradients: 値がオブジェクトや特殊構文で、
//   ハードコード文字列との単純な一致比較が成立しない
// - breakpoints: レスポンシブ指定用でスタイル値として書かれない
// - fonts / shadows: 値が長い複合文字列で、部分一致や書式ゆれが多く
//   誤検出リスクが高い
// - semanticTokens: 実値ではなく他トークンへの参照（"red.500" など）
// - styles: テキストスタイルなどのオブジェクト定義
const EXCLUDED_SCALES = new Set([
  "animations",
  "breakpoints",
  "fonts",
  "gradients",
  "keyframes",
  "semanticTokens",
  "shadows",
  "styles",
])

// getValueToTokenMap の結果キャッシュ
let valueToTokenCache: Map<string, Map<string, string>> | null = null

export function getValueToTokenMap(): Map<string, Map<string, string>> {
  if (valueToTokenCache) return valueToTokenCache

  // 外側: スケール名 → 逆引きマップ
  // 内側: CSS 実値 → トークン名
  const result = new Map<string, Map<string, string>>()

  for (const [scaleName, scaleValue] of Object.entries(
    theme as { [key: string]: unknown },
  )) {
    if (EXCLUDED_SCALES.has(scaleName)) continue
    if (!scaleValue || typeof scaleValue !== "object") continue

    const reverseMap = new Map<string, string>()
    // colors だけは大文字小文字の書式ゆれ（#FF0000 と #ff0000）を
    // 吸収するため、キーを小文字に正規化して格納する。
    // ルール側（lookupToken）も検索時に同じ正規化を行う。
    const isColors = scaleName === "colors"

    for (const [tokenKey, tokenValue] of Object.entries(
      scaleValue as { [key: string]: unknown },
    ))
      if (tokenValue !== null && typeof tokenValue === "object") {
        // 2 階層のトークン: colors.red = { 50: "...", 500: "#ef4444", ... }
        // のようなパレット構造。トークン名は "red.500" のようにドット結合する。
        for (const [shade, shadeValue] of Object.entries(
          tokenValue as { [key: string]: unknown },
        )) {
          if (typeof shadeValue !== "string") continue
          // "tint(...)" / "shade(...)" は Yamada UI が実行時に色を計算する
          // 特殊構文で、静的な CSS 値ではないため逆引き対象から外す。
          if (/^(?:tint|shade)\(/.test(shadeValue)) continue
          const key = isColors ? shadeValue.toLowerCase() : shadeValue
          reverseMap.set(key, `${tokenKey}.${shade}`)
        }
      } else if (typeof tokenValue === "string") {
        // 1 階層の文字列トークン: fontSizes.md = "1rem" など。
        // トークン名はキーそのまま（"md"）。
        const key = isColors ? tokenValue.toLowerCase() : tokenValue
        reverseMap.set(key, tokenKey)
      } else if (typeof tokenValue === "number") {
        // 1 階層の数値トークン: lineHeights.normal = 1.5 や
        // zIndices.docked = 10 など。比較を文字列で統一するため
        // String() で変換して格納する。
        reverseMap.set(String(tokenValue), tokenKey)
      }

    // 逆引きエントリが 1 件もないスケールはマップ自体を登録しない。
    // ルール側は reverseMap が無ければ「トークン未発見」として扱う。
    if (reverseMap.size > 0) result.set(scaleName, reverseMap)
  }

  valueToTokenCache = result

  return result
}
