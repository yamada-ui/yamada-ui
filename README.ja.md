<p align="center">
  <img src="https://raw.githubusercontent.com/hirotomoyamada/yamada-ui/main/logo/logo-colored@2x.png" alt="Yamada UI" width="480" />
</p>

<p align="center">
  <img alt="NPM Minzip" src="https://img.shields.io/bundlephobia/minzip/@yamada-ui/react"/>
  <a href="https://www.npmjs.com/package/@yamada-ui/react">
    <img alt="MIT License" src="https://img.shields.io/npm/v/@yamada-ui/react"/>
  </a>
  <img alt="NPM Downloads" src="https://img.shields.io/npm/dm/@yamada-ui/react.svg?style=flat"/>
  <a href="https://github.com/hirotomoyamada/yamada-ui/blob/main/LICENSE">
    <img alt="MIT License" src="https://img.shields.io/github/license/hirotomoyamada/yamada-ui"/>
  </a>
  <img alt="Github Stars" src="https://img.shields.io/github/stars/hirotomoyamada/yamada-ui" />
  <a href="https://discord.gg/ubYvRAxFEB">
    <img alt="MIT License" src="https://img.shields.io/badge/Chat%20on-Discord-%235865f2"/>
  </a>
</p>

<p align='center'>
<a href='./README.md'>English</a> | 日本語
</p>

Yamada UIは、最先端のWebアプリケーションやウェブサイトの開発を効率化するReactのUIコンポーネントライブラリです。このライブラリは、他のReact UIコンポーネントライブラリでは提供されていない、カラーモードやアニメーションなどの様々な機能を提供しています。現代の複雑なユーザーインターフェースを構築するために、簡単に組み合わせることができるさまざまなコンポーネントを提供します。

## Contents

- [リスペクト](#リスペクト)
- [ドキュメント](#ドキュメント)
- [特徴](#特徴)
- [インストール](#インストール)
- [使い方](#使い方)
- [CodeSandbox](#codesandbox)
- [貢献する](#貢献する)
- [ライセンス](#ライセンス)

## リスペクト

Yamada UIは、[Chakra UI](https://github.com/chakra-ui/chakra-ui)、[MUI](https://github.com/mui/material-ui)、[Mantine UI](https://github.com/mantinedev/mantine)から多くのインスピレーションを得ています。これは、私の人生に素晴らしい経験をもたらしました。Segun Adebayoをはじめとするすべての神々に、そのような経験をもたらしてくださったことに深く感謝しています。そして、愛しています。

## ドキュメント

現在、ドキュメントは[Storybook](https://hirotomoyamada.github.io/yamada-ui/)のみです。しかし、Storybookには全てのコンポーネントの各使い方を詳しく記載しています。

## 特徴

- スタイリングの簡単さ: Yamada UIには`Box`や`Stack`のようなレイアウトコンポーネントのセットが含まれており、`props`を通して簡単にコンポーネントをスタイルすることができます。
- フレキシブルかつ組み合わせ可能: Yamada UIのコンポーネントはReact UIプリミティブ上に構築されており、無限に組み合わせることが可能です。
- アニメーション: `Yamada UI`はアニメーションを簡単に宣言できるフックやコンポーネントを提供しています。フックはCSSアニメーションに似た形式で記述することが可能で、全てのコンポーネントでサポートされています。
- カラーモード: `Yamada UI`は、全てのコンポーネントの`props`で各カラーモードの値を定義することができます。これは現在、他のReact UIコンポーネントライブラリでは実装されていません。
- テーマの切り替え: `Yamada UI`は、ユーザーがテーマを切り替えることを可能にします。ユーザーは自身のテーマを適応させてWebアプリケーションやウェブサイトを使用することができます。これも現在、他のReact UIコンポーネントライブラリでは実装されていません。
- その他の特長: `Yamada UI`は、現代のウェブアプリケーションやウェブサイトにとって重要と考えられる、ローディング機能と通知機能を標準で提供しています。これにより、これらの機能を一つずつ開発する必要がなくなります。

## インストール

Yamada UIのコンポーネントを使用するためには、`@yamada-ui/react`をインストールするだけで十分です。

```sh
$ pnpm add @yamada-ui/react

# または

$ yarn add @yamada-ui/react

# または

$ npm install @yamada-ui/react
```

ただし、`@yamada-ui/table`や`@yamada-ui/calendar`などは、`@yamada-ui/react`には含まれていません。これらは別途インストールする必要があります。

```sh
# `@tanstack/react-table`を使用した、便利なテーブルコンポーネントを提供します。
$ pnpm add @yamada-ui/table

# 便利なカレンダーとデイトピッカーコンポーネントを提供します。
$ pnpm add @yamada-ui/calendar

# `embla-carousel-react`を使用した、便利なカルーセルコンポーネントを提供します。
$ pnpm add @yamada-ui/carousel

# `react-dropzone`を使用した、便利なドロップゾーンコンポーネントを提供します。
$ pnpm add @yamada-ui/dropzone

# `react-markdown`と`react-syntax-highlighter`を使用した、便利なマークダウンコンポーネントを提供します。
$ pnpm add @yamada-ui/markdown

# `Font Awesome`を便利に使用するためのコンポーネントを提供します。
$ pnpm add @yamada-ui/fontawesome
```

## 使い方

コンポーネントの使用するには、以下の手順に従ってください。

1. パッケージで提供されている`UIProvider`を、あなたのアプリケーションをラップします。

```tsx
import { UIProvider } from '@yamada-ui/react'

const App = ({ children }) => {
  return <UIProvider>{children}</UIProvider>
}

export default App
```

`Yamada UI`は、デフォルトでライトモードとダークモードをサポートしています。

2. これで、以下のようにコンポーネントを使用できます。

```tsx
import { Box, Text } from '@yamada-ui/react'

const Example = () => {
  return (
    <Box>
      <Text>ギャルのパンティーおくれーーーっ！！！！！</Text>
    </Box>
  )
}
```

## CodeSandbox

- [JavaScript](https://codesandbox.io/s/yamada-ui-javascript-1m1on8)
- [TypeScript](https://codesandbox.io/s/yamada-ui-typescript-7xqli9)
- [Next.js - Pages](https://codesandbox.io/p/sandbox/yamada-ui-next-js-pages-6d13de)
- [Next.js - App](https://codesandbox.io/p/sandbox/yamada-ui-next-js-app-3911zu)

## 貢献する

貢献したいと思いませんか？ それは、とても素晴らしいことです！

あなたを支援するために[ガイドライン](./CONTRIBUTING.ja.md)を準備しています。

## ライセンス

MIT © [Hirotomo Yamada](https://github.com/hirotomoyamada)
