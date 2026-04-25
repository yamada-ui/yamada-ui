import type { Meta, StoryFn } from "@storybook/react-vite"
import { CodeBlock } from "./"

type Story = StoryFn<typeof CodeBlock.Root>

const meta: Meta<typeof CodeBlock.Root> = {
  component: CodeBlock.Root,
  title: "Components / CodeBlock",
}

export default meta

const code = `import { Button } from "@yamada-ui/react"

export function App() {
  return (
    <Button colorScheme="primary">
      Hello Yamada UI
    </Button>
  )
}`

const longCode = `import { Button, VStack } from "@yamada-ui/react"

export function Toolbar() {
  return (
    <VStack align="flex-start">
      <Button colorScheme="primary">Save</Button>
      <Button variant="outline">Cancel</Button>
      <Button variant="ghost">Preview</Button>
      <Button colorScheme="danger" variant="subtle">
        Delete
      </Button>
    </VStack>
  )
}`

const highlightedCode = `export function Counter() {
  const [count, setCount] = useState(0)

  return (
    <Button onClick={() => setCount(count + 1)}>
      Count: {count}
    </Button>
  )
}`

const diffCode = `export function ButtonExample() {
  return (
-    <Button colorScheme="gray">Submit</Button>
+    <Button colorScheme="primary">Submit</Button>
  )
}`

export const Basic: Story = () => {
  return <CodeBlock.Root code={code} language="tsx" />
}

export const Title: Story = () => {
  return <CodeBlock.Root code={code} language="tsx" title="App.tsx" />
}

export const LineNumbers: Story = () => {
  return <CodeBlock.Root code={code} language="tsx" lineNumbers />
}

export const Highlight: Story = () => {
  return (
    <CodeBlock.Root
      code={highlightedCode}
      highlight="{2,6}"
      language="tsx"
      lineNumbers
      title="Counter.tsx"
    />
  )
}

export const Diff: Story = () => {
  return (
    <CodeBlock.Root
      code={diffCode}
      language="tsx"
      lineNumbers
      title="ButtonExample.tsx"
    />
  )
}

export const Collapse: Story = () => {
  return (
    <CodeBlock.Root
      code={longCode}
      defaultCollapsed
      language="tsx"
      lineNumbers
      maxLines={6}
      title="Toolbar.tsx"
    />
  )
}

export const Composition: Story = () => {
  return (
    <CodeBlock.Root code={code} language="tsx" lineNumbers title="App.tsx">
      <CodeBlock.Header>
        <CodeBlock.Title />
        <CodeBlock.Control>
          <CodeBlock.LanguageLabel />
          <CodeBlock.CopyTrigger copyLabel="Copy snippet" />
        </CodeBlock.Control>
      </CodeBlock.Header>
      <CodeBlock.Content>
        <CodeBlock.Code />
      </CodeBlock.Content>
    </CodeBlock.Root>
  )
}
