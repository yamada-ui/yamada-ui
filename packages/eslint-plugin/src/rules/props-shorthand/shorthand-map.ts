// @yamada-ui/react が公式に持つ shorthand / longhand のスタイル定義
//   standardStyles : longhand 側の正規定義（"margin" → { ... } など）
//   shorthandStyles: shorthand 側の定義（"m" → 中身は標準定義への参照、または別オブジェクト）
import { shorthandStyles, standardStyles } from "@yamada-ui/react/core"

// ルール側が消費するための、shorthand ⇄ longhand を引くためのデータ束
//   longhandToShorthands: 1 つの longhand に対応する shorthand 配列（順序固定）
//   shorthandToLonghand : shorthand → longhand の逆引き
// すべて Readonly* なので、利用側からの書き換えは型でブロックされる
export interface ShorthandMap {
  longhandToShorthands: ReadonlyMap<string, readonly string[]>
  shorthandToLonghand: ReadonlyMap<string, string>
}

// プロセス内（モジュール）キャッシュ
// shorthandStyles / standardStyles は実行中に変わらないので、初回構築結果を再利用する
// ESLint はファイルごとに create を呼ぶが、このマップは全ファイル横断で 1 度だけ作れば十分
let cache: ShorthandMap | null = null

export function getShorthandMap(): ShorthandMap {
  // 2 回目以降は構築コストを払わない
  if (cache) return cache

  // shorthand → longhand の 1 対 1 マップ
  const shorthandToLonghand = new Map<string, string>()
  // longhand → shorthand[] の 1 対多マップ（同じ longhand を指す shorthand が複数ある）
  const longhandToShorthands = new Map<string, string[]>()

  // standardStyles の各定義オブジェクトを「参照 → 標準名」で引けるようにする逆引き
  // shorthandStyles の値が standardStyles のいずれかと同じ参照を持つ場合、ここで突合できる
  // WeakMap を使うのは、定義オブジェクトの GC を妨げないため
  const standardByRef = new WeakMap<object, string>()
  for (const [name, def] of Object.entries(standardStyles)) {
    if (def && typeof def === "object") standardByRef.set(def, name)
  }

  for (const [short, def] of Object.entries(shorthandStyles)) {
    // この shorthand が指す longhand 名（見つからなければ後続でスキップ）
    let long: string | undefined

    // 戦略 1: 値が standardStyles のいずれかと同じオブジェクト参照を持つ場合
    //   例: shorthandStyles.m === standardStyles.margin
    //   → standardByRef.get(def) で "margin" が引ける
    if (def && typeof def === "object") long = standardByRef.get(def)

    // 戦略 2: 戦略 1 で見つからなかったとき、定義オブジェクトの properties を確認する
    //   例: shorthandStyles.mx = { properties: ["marginX"], transform: ... }
    //   properties が 1 要素のみの場合だけ採用（1 対 1 の対応とみなせるもの限定）
    //   properties が複数（["marginLeft", "marginRight"] など）の合成 shorthand はスキップ
    if (!long) {
      const properties = (def as { properties?: readonly unknown[] } | null)
        ?.properties
      if (
        Array.isArray(properties) &&
        properties.length === 1 &&
        typeof properties[0] === "string"
      ) {
        long = properties[0]
      }
    }

    // どちらの戦略でも longhand を特定できないものは対象外
    // （複合 shorthand など、ルールでは扱えないケース）
    if (!long) continue

    // 2 つのコレクションに同時に登録する
    // shorthandToLonghand は 1 対 1 なので単純 set
    shorthandToLonghand.set(short, long)
    // longhandToShorthands は 1 対多なので、既存配列に push して同じ参照を再登録
    // 配列の並び順 = Object.entries(shorthandStyles) の登場順なので、
    // ルール側で「先頭を採用」した時の選ばれる shorthand が決まる
    const shorts = longhandToShorthands.get(long) ?? []
    shorts.push(short)
    longhandToShorthands.set(long, shorts)
  }

  cache = { longhandToShorthands, shorthandToLonghand }
  return cache
}
