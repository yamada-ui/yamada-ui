<p align='center'>
<a href='./CONTRIBUTING.md'>English</a> | 日本語
</p>

## Yamada UIへの貢献に興味をもってくれて、ありがとうございます😎 あなたは素晴らしいです！！！

オープンソースへの貢献は、いくつかの方法で行うことができ、すべてが価値あるものです。これらは、あなたが貢献を準備する際に役立つガイドラインです。

## セットアップ

以下の手順で、`Yamada UI`への貢献を始められるようになります。

1. [リポジトリ](https://github.com/yamada-ui/yamada-ui)をフォークします。

2. あなたのローカルにクローンします。

```sh
git clone https://github.com/<your_github_username>/yamada-ui.git

cd yamada-ui
```

3. `pnpm install`を実行して、すべての依存関係とパッケージをセットアップします。このコマンドは、依存関係をインストールします。

## 開発手段

開発プロセスを快適するために、ツールとシステムを用意しています。`Yamada UI`はモノレポ構造であり、各コンポーネントは独立したパッケージです。

### コマンド

- **`pnpm install`**: すべての依存関係とパッケージをセットアップし、モノレポ開発のためにすべての依存関係をシンボリックリンクします。
- **`pnpm clean`**: ビルドやテストのキャッシュを削除します。
- **`pnpm react storybook`**: ストーリーブックを起動します。
- **`pnpm www dev`**: ドキュメントサイトを起動します。
- **`pnpm build`**: すべてのパッケージに対してビルドを実行します。
- **`pnpm format`**: すべてのパッケージに対してフォーマットを実行します。
- **`pnpm lint`**: すべてのパッケージに対してlintを実行します。
- **`pnpm typecheck`**: すべてのパッケージに対して型チェックを実行します。
- **`pnpm test`**: すべてのパッケージに対してテストを実行します。

### Visual Studio Code

拡張機能を正しく動作させるために、`.vscode/setting.json`に以下の設定を追加してください。

```json
{
  "typescript.tsdk": "node_modules/typescript/lib",
  "prettier.requireConfig": true,
  "eslint.workingDirectories": [
    "www",
    "packages/cli",
    "packages/react",
    "packages/utils",
    "packages/workspace",
    "playgrounds/next/app",
    "playgrounds/next/pages",
    "playgrounds/react-router/framework",
    "playgrounds/vite"
  ]
}
```

## バグを見つけたと思いますか？

[テンプレート](https://github.com/yamada-ui/yamada-ui/issues/new/choose)に従って、提供してください。

## 新規または変更のAPIを提案しますか？

設計とサンプルAPIコードを提供してください。ロードマップに合わない提案や、説明がない提案はクローズします。

## プルリクエストを作成しますか？

### コミット規約

プルリクエストを作成する前に、あなたのコミットがこのリポジトリで使用されているコミット規約に準拠しているかどうかを確認してください。

コミットを作成する際は、次のタイプのいずれかを使用しながら、コミットメッセージで規約`タイプ: あなたのコミットメッセージ`に従うことをお願いします。

- `feat / feature`: 完全に新しいコードや新機能を導入した場合
- `fix`: バグを修正した変更の場合（可能であれば、詳細も記述する）
- `refactor`: `fix`でも`feat / feature`でもない、コード関連の変更をした場合
- `docs`: 既存のドキュメンテーションの変更や新しいドキュメンテーションを作成した場合（例：READMEやJSDocを記述）
- `build`: ビルドに関する変更、依存関係の変更、新しい依存関係の追加をした場合
- `test`: テストに関する変更をした場合（新しいテストの追加や既存のテストの変更）
- `ci`: 継続的インテグレーションの設定に関する変更をした場合（例：github actions、CIシステムなど）
- `chore`: 上記のいずれにも当てはまらないリポジトリへの変更をした場合

> [!TIP]
>
> 詳しい仕様については、[Conventional Commits](https://www.conventionalcommits.org)を確認するか、[Angular Commit Message Guidelines](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines)を確認してください。

### プルリクエストの手順

1. [リポジトリ](https://github.com/yamada-ui/yamada-ui)をフォークし、クローンします。

2. `main`ブランチから新しいブランチを作成します。[タイプ/スコープ]という命名規則に従います。例えば、`fix/accordion-hook`や`docs/menu-typo`などです。`タイプ`は`docs`、`fix`、`feat`、`build`などの標準的なコミットタイプのいずれかです。`スコープ`は作業範囲を表す短い言葉です。

3. 変更を行ったら、その変更のテストコードを追加してください。`pnpm test`または`pnpm test <package-name>`を実行して、すべてのテストが合格することを確認してください。更なるテストの情報は[テストのためのヒント](https://github.com/yamada-ui/yamada-ui/wiki/%E3%83%86%E3%82%B9%E3%83%88%E3%81%AE%E3%81%9F%E3%82%81%E3%81%AE%E3%83%92%E3%83%B3%E3%83%88)を確認してください。

4. `pnpm changeset`を実行して、変更の詳細な説明を作成します。これは、更新を公開する際にチェンジログを生成するために使用されます。
   [Changesetについてさらに学ぶ](https://github.com/atlassian/changesets/tree/master/packages/cli)

> [!NOTE]
>
> CIの設定やPrettierなどの小さな変更を行った場合は、`pnpm changeset add --empty`を実行して、空のchangesetファイルを生成し、変更を文書化することができます。

5. 次に、[コミット規約](#コミット規約)に従ってコミットします。

6. 上記の全てのタスクを完了したら、変更をプッシュしてください。プッシュ後、プルリクエストのURLが生成されます。テンプレートに従ってリクエストを提出してください。また、プルリクエスト内のチェックを確認し、品質チェックが正常に完了していることを確認してください。問題がある場合、このプルリクエストはマージされません。

## ライセンス

`Yamada UI`のGitHubリポジトリにコードを寄贈することで、あなたの寄贈するコードはMITライセンスの下でライセンス付けされることに同意します。

### 最後まで読んでくださり、ありがとうございます。私もあなたを愛しています。 💖
