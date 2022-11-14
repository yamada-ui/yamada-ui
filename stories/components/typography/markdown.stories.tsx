import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Markdown, VStack } from '@yamada-ui/react'

export default {
  title: 'Components / Typography / Markdown',
  component: Markdown,
} as ComponentMeta<typeof Markdown>

export const basic: ComponentStory<typeof Markdown> = () => {
  const doc = `
# あいうえお 

テキスト
テキスト
~テキスト~

http://google.com

- aaa
- bbb
- ccc

1. aaa
1. bbbb
1. ccc

\`\`\`plantuml
Alice -> Bob
\`\`\`

\`\`\`mermaid
Alice --> Bob
\`\`\`


\`\`\`bash
echo "hoge"
\`\`\`

\`\`\`php 
<?php
echo "aaa";
\`\`\`

## 見出し2段階目
`

  console.log(doc)

  return (
    <VStack gap='md'>
      <Markdown doc={doc} />
    </VStack>
  )
}
