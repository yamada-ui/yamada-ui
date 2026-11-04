import type { Meta, StoryFn } from "@storybook/react-vite"
import Markdown from "react-markdown"
import rehypeRaw from "rehype-raw"
import remarkGfm from "remark-gfm"
import { PropsTable } from "#storybook"
import { Prose } from "./prose"

type Story = StoryFn<typeof Prose>

const meta: Meta<typeof Prose> = {
  component: Prose,
  title: "Components / Prose",
}

export default meta

function ListContent() {
  return (
    <>
      <h3>登場人物</h3>
      <ul>
        <li>水篠 旬</li>
        <li>
          ハンタースギルド
          <ol>
            <li>最上 真</li>
            <li>向坂 雫</li>
          </ol>
        </li>
        <li>
          白虎ギルド
          <ol>
            <li>白川 大虎</li>
          </ol>
        </li>
        <li>
          ハンター協会
          <ol>
            <li>後藤 清臣</li>
            <li>犬飼 晃</li>
          </ol>
        </li>
      </ul>
    </>
  )
}

function TableContent() {
  return (
    <>
      <h3>影の軍団</h3>
      <table>
        <thead>
          <tr>
            <th scope="col">名前</th>
            <th scope="col">役割</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>イグリット</td>
            <td>先陣を切る騎士</td>
          </tr>
          <tr>
            <td>ベル</td>
            <td>圧倒的な力で敵を制圧する兵士</td>
          </tr>
          <tr>
            <td>アイアン</td>
            <td>仲間を守る重装兵</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

function BlockquoteContent() {
  return (
    <>
      <h3>セリフ</h3>
      <figure>
        <blockquote>
          <p>起きろ。</p>
        </blockquote>
        <figcaption>
          水篠旬 - <cite>俺だけレベルアップな件</cite>
        </figcaption>
      </figure>
      <hr />
      <figure>
        <blockquote>
          <p>兄貴！</p>
        </blockquote>
        <figcaption>
          諸菱賢太 - <cite>俺だけレベルアップな件</cite>
        </figcaption>
      </figure>
    </>
  )
}

function CodeBlockContent() {
  return (
    <>
      <h3>ステータス</h3>
      <p>
        <code>プレイヤー情報</code>を確認するには、
        <kbd>Enter</kbd>を押してください。
      </p>
      <pre>
        <code>
          {
            'const player = {\n  name: "水篠旬",\n  role: "影の君主",\n  skills: ["影の抽出", "影の保存"],\n}'
          }
        </code>
      </pre>
    </>
  )
}

function Content() {
  return (
    <>
      <h1>俺だけレベルアップな件</h1>
      <p>
        人類最弱兵器と呼ばれるE級ハンター、水篠旬。二重ダンジョンから生還した彼にだけ、
        <a href="https://sololeveling-anime.net/">新たな物語</a>
        の幕が開く。
      </p>
      <h2>あらすじ</h2>
      <p>
        死の淵で謎のシステムに選ばれた旬は、<em>唯一のプレイヤー</em>
        として成長する力を手に入れる。クエストと戦いを重ねながら、 ゲートに
        <strong>隠された秘密</strong>へと近づいていく。
      </p>
      <ListContent />
      <TableContent />
      <BlockquoteContent />
      <CodeBlockContent />
    </>
  )
}

export const Basic: Story = () => {
  return (
    <Prose>
      <Content />
    </Prose>
  )
}

export const Size: Story = () => {
  return (
    <PropsTable variant="stack" rows={["sm", "md", "lg"]}>
      {(_, row, key) => (
        <Prose key={key} size={row}>
          <Content />
        </Prose>
      )}
    </PropsTable>
  )
}

export const ColorScheme: Story = () => {
  return (
    <Prose colorScheme="blue">
      <Content />
    </Prose>
  )
}

export const Code: Story = () => {
  return (
    <PropsTable
      variant="stack"
      rows={["solid", "subtle", "surface", "outline"]}
    >
      {(_, row, key) => (
        <Prose key={key} code={row}>
          <CodeBlockContent />
        </Prose>
      )}
    </PropsTable>
  )
}

export const Kbd: Story = () => {
  return (
    <PropsTable
      variant="stack"
      rows={["solid", "subtle", "surface", "outline"]}
    >
      {(_, row, key) => (
        <Prose key={key} kbd={row}>
          <CodeBlockContent />
        </Prose>
      )}
    </PropsTable>
  )
}

export const Blockquote: Story = () => {
  return (
    <PropsTable variant="stack" rows={["solid", "subtle"]}>
      {(_, row, key) => (
        <Prose key={key} blockquote={row}>
          <BlockquoteContent />
        </Prose>
      )}
    </PropsTable>
  )
}

export const CodeBlock: Story = () => {
  return (
    <Prose>
      <CodeBlockContent />
    </Prose>
  )
}

export const List: Story = () => {
  return (
    <Prose>
      <ListContent />
    </Prose>
  )
}

export const Table: Story = () => {
  return (
    <PropsTable variant="stack" rows={["line", "outline"]}>
      {(_, row, key) => (
        <Prose key={key} table={row}>
          <TableContent />
        </Prose>
      )}
    </PropsTable>
  )
}

export const ReactMarkdown: Story = () => {
  return (
    <Prose>
      <Markdown rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]}>
        {`# 俺だけレベルアップな件

人類最弱兵器と呼ばれるE級ハンター、水篠旬。二重ダンジョンから生還した彼にだけ、[新たな物語](https://sololeveling-anime.net/)の幕が開く。

## あらすじ

死の淵で謎のシステムに選ばれた旬は、*唯一のプレイヤー*として成長する力を手に入れる。クエストと戦いを重ねながら、 ゲートに**隠された秘密**へと近づいていく。

### 登場人物

- 水篠 旬
- ハンタースギルド
  1. 最上 真
  2. 向坂 雫
- 白虎ギルド
  1. 白川 大虎
- ハンター協会
  1. 後藤 清臣
  2. 犬飼 晃

### 影の軍団

| 名前 | 役割 |
| --- | --- |
| イグリット | 先陣を切る騎士 |
| ベル | 圧倒的な力で敵を制圧する兵士 |
| アイアン | 仲間を守る重装兵 |

### セリフ

<figure>

> 起きろ。

<figcaption>水篠旬 - <cite>俺だけレベルアップな件</cite></figcaption>
</figure>

---

<figure>

> 兄貴！

<figcaption>諸菱賢太 - <cite>俺だけレベルアップな件</cite></figcaption>
</figure>

### ステータス

\`プレイヤー情報\`を確認するには、<kbd>Enter</kbd>を押してください。

\`\`\`js
const player = {
  name: "水篠旬",
  role: "影の君主",
  skills: ["影の抽出", "影の保存"],
}
\`\`\`
`}
      </Markdown>
    </Prose>
  )
}

export const Exclude: Story = () => {
  return (
    <Prose>
      <h2>ダンジョン攻略記録</h2>
      <p>任務を終えた水篠旬は、ハンター協会に報告へ向かう。</p>
      <div className="not-prose">
        <h2>ハンター協会の掲示板</h2>
        <p>
          本日の任務は<code>E級ダンジョン</code>の調査です。
        </p>
      </div>
      <p>報告を終えた旬は、次のゲートへと向かった。</p>
    </Prose>
  )
}

export const HTML: Story = () => {
  return (
    <Prose
      dangerouslySetInnerHTML={{
        __html:
          "<h1>影の軍団</h1><p>影の君主のもとに、新たな仲間が集う。</p><ul><li>イグリット</li><li>ベル</li><li>アイアン</li></ul>",
      }}
    />
  )
}
