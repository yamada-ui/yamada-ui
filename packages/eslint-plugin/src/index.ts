// ============================================================================
// @yamada-ui/eslint-plugin のエントリーポイント
// ----------------------------------------------------------------------------
// ESLint プラグインの「公開形」を組み立てるファイル。
// ESLint 9 の flat config を前提に、次の 2 通りの使い方を提供する:
//
//   A. 推奨設定をそのまま使う（README で案内している使い方）
//        import yamadaUi from "@yamada-ui/eslint-plugin"
//        export default [yamadaUi.configs.recommended]
//
//   B. プラグインとして登録し、ルールを個別に設定する
//        export default [{
//          plugins: { "@yamada-ui/eslint-plugin": yamadaUi },
//          rules: { "@yamada-ui/eslint-plugin/no-hardcoded-token": "warn" },
//        }]
// ============================================================================

import type { ESLint, Linter } from "eslint"
// package.json から名前とバージョンを取り込むことで、
// プラグイン名（= ルールのプレフィックス）とメタ情報を一元管理する。
// name = "@yamada-ui/eslint-plugin" なのでルールのフル ID は
// "@yamada-ui/eslint-plugin/no-hardcoded-token" になる。
import packageJson from "../package.json"
import { noHardcodedToken } from "./rules/no-hardcoded-token"

const { name, version } = packageJson

// プラグインの中核部分: メタ情報と、ルール名 → ルール実装のマップ。
// meta.name / meta.version は ESLint がキャッシュや --print-config で
// プラグインを識別するのに使う。
const basePlugin = {
  meta: { name, version },
  rules: {
    "no-hardcoded-token": noHardcodedToken,
  },
} satisfies ESLint.Plugin

// 推奨設定（flat config の 1 エントリとして完結した形）。
// plugins にプラグイン自身を登録し、rules で有効化までやってしまうので、
// 利用者は配列に足すだけでよい。
//
// 注意: ここでは recommended → basePlugin を参照させる（plugin 全体では
// なく）ことで、plugin.configs.recommended.plugins[name] が plugin 自身を
// 指す循環参照になるのを避けている。
const recommended: Linter.Config = {
  name: `${name}/recommended`,
  plugins: {
    [name]: basePlugin,
  },
  rules: {
    // `${name}/ルール名` = "@yamada-ui/eslint-plugin/no-hardcoded-token"
    [`${name}/no-hardcoded-token`]: "error",
  },
}

// 最終的な公開オブジェクト = 中核部分 + configs。
const plugin: ESLint.Plugin = {
  ...basePlugin,
  configs: { recommended },
}

export default plugin
