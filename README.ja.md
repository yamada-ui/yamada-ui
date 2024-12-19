<p align="center">
  <img src="https://raw.githubusercontent.com/yamada-ui/yamada-ui/main/logo/logo-colored@2x.png" alt="Yamada UI" width="480"/>
</p>

<p align="center">
  <img alt="NPM Minzip" src="https://img.shields.io/bundlephobia/minzip/@yamada-ui/react"/>
  <a href="https://www.npmjs.com/package/@yamada-ui/react">
    <img alt="MIT License" src="https://img.shields.io/npm/v/@yamada-ui/react"/>
  </a>
  <img alt="NPM Downloads" src="https://img.shields.io/npm/dm/@yamada-ui/react.svg?style=flat"/>
  <a href="https://codecov.io/gh/yamada-ui/yamada-ui" >
    <img src="https://codecov.io/gh/yamada-ui/yamada-ui/graph/badge.svg?token=LRQMRQNE7N"/>
  </a>
  <a href="https://github.com/yamada-ui/yamada-ui/blob/main/LICENSE">
    <img alt="MIT License" src="https://img.shields.io/github/license/yamada-ui/yamada-ui"/>
  </a>
  <img alt="Github Stars" src="https://img.shields.io/github/stars/yamada-ui/yamada-ui" />
  <a href="https://discord.gg/H7V5RfEDTR">
    <img alt="MIT License" src="https://img.shields.io/badge/Chat%20on-Discord-%235865f2"/>
  </a>
</p>

<p align='center'>
<a href='./README.md'>English</a> | 日本語
</p>

Yamada UIは、最先端のWebアプリケーションやウェブサイトの開発を効率化するReactのUIコンポーネントライブラリです。このライブラリは、他のReact UIコンポーネントライブラリでは提供されていない、カラーモードやアニメーションなどの様々な機能を提供しています。現代の複雑なユーザーインターフェースを構築するために、簡単に組み合わせることができるさまざまなコンポーネントを提供します。

## コンテンツ

- [リスペクト](#リスペクト)
- [ドキュメント](https://yamada-ui.com/ja)
- [特徴](#特徴)
- [インストール](#インストール)
- [使い方](#使い方)
- [CodeSandbox](#codesandbox)
- [Storybook](https://yamada-ui.github.io/yamada-ui/)
- [サポートする](#サポートする)
- [貢献する](#貢献する)
- [ライセンス](#ライセンス)

## リスペクト

Yamada UIは、[Chakra UI](https://github.com/chakra-ui/chakra-ui)、[MUI](https://github.com/mui/material-ui)、[Mantine UI](https://github.com/mantinedev/mantine)から多くのインスピレーションを得ています。これは、私の人生に素晴らしい経験をもたらしました。Segun Adebayoをはじめとするすべての神々に、そのような経験をもたらしてくださったことに深く感謝しています。そして、愛しています。

## ドキュメント

最新のバージョンのWebサイトは、https://yamada-ui.com です。

## 特徴

- スタイリングの簡単さ: Yamada UIには`Box`や`Stack`のようなレイアウトコンポーネントのセットが含まれており、`props`を通して簡単にコンポーネントをスタイルすることができます。
- フレキシブルかつ組み合わせ可能: Yamada UIのコンポーネントは、React UIプリミティブ上に構築されており、無限に組み合わせることが可能です。
- アニメーション: Yamada UIは、アニメーションを簡単に宣言できるフックやコンポーネントを提供しています。フックはCSSアニメーションに似た形式で記述することが可能で、全てのコンポーネントでサポートされています。
- カラーモード: Yamada UIは、全てのコンポーネントの`props`で各カラーモードの値を定義することができます。
- テーマの切り替え: Yamada UIは、ユーザーがテーマを切り替えることを可能にします。ユーザーは自身のテーマを適応させてWebアプリケーションやウェブサイトを使用することができます。
- その他の特徴: Yamada UIは、現代のウェブアプリケーションやウェブサイトにとって重要と考えられる、ローディング機能と通知機能を標準で提供しています。これにより、これらの機能を一つずつ開発する必要がなくなります。

## インストール

Yamada UIのコンポーネントを使用するためには、`@yamada-ui/react`をインストールするだけで十分です。

```sh
pnpm add @yamada-ui/react
# または
yarn add @yamada-ui/react
# または
npm install @yamada-ui/react
# または
bun add @yamada-ui/react
```

## 使い方

コンポーネントの使用するには、以下の手順に従ってください。

1. パッケージで提供されている`UIProvider`を、あなたのアプリケーションをラップします。

```tsx
import { UIProvider } from "@yamada-ui/react"

const App = ({ children }) => {
  return <UIProvider>{children}</UIProvider>
}

export default App
```

`Yamada UI`は、デフォルトでライトモードとダークモードをサポートしています。

2. これで、以下のようにコンポーネントを使用できます。

```tsx
import { Box, Text } from "@yamada-ui/react"

const Example = () => {
  return (
    <Box>
      <Text>ギャルのパンティーおくれーーーっ！！！！！</Text>
    </Box>
  )
}
```

## CodeSandbox

- [JavaScript](https://codesandbox.io/p/devbox/yamada-ui-javascript-1m1on8)
- [TypeScript](https://codesandbox.io/p/devbox/yamada-ui-typescript-7xqli9)
- [Next.js - Pages](https://codesandbox.io/p/devbox/yamada-ui-next-js-pages-6d13de)
- [Next.js - App](https://codesandbox.io/p/devbox/yamada-ui-next-js-app-3911zu)

## サポートする

ぜひ、このプロジェクトをサポートしてください！ あなたのアイコンや組織のロゴがWebサイトのリンクとともに、こちらに表示されます。ご支援のほど、宜しくお願いいたします。 [[貢献する](https://opencollective.com/yamada-ui/contribute)]

### 組織

<a href="https://opencollective.com/yamada-ui"><img src="https://opencollective.com/yamada-ui/organizations.svg?avatarHeight=40&button=false" /></a>

### 個人

<a href="https://opencollective.com/yamada-ui"><img src="https://opencollective.com/yamada-ui/individuals.svg?avatarHeight=40" /></a>

## 貢献する

貢献したいと思いませんか？ それは、とても素晴らしいことです！

あなたを支援するために[ガイドライン](./CONTRIBUTING.ja.md)を準備しています。

もし、ドキュメントへの貢献に興味がある場合は、こちらの[ガイドライン](https://yamada-ui.com/ja/community/contributing)を参照してください。

## ライセンス

MIT © [Hirotomo Yamada](https://github.com/hirotomoyamada)
