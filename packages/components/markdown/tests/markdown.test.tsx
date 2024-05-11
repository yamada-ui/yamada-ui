import { a11y, render } from "@yamada-ui/test"
import dedent from "dedent"
import { Markdown } from "../src"

describe("<Markdown />", () => {
  describe("With Code Theme", () => {
    test("Code blocks within `Markdown` components should be rendered without any accessibility issues.", async () => {
      const content = dedent`
        This is an example of \`Markdown\` component.

        \`\`\`tsx
        import { Markdown } from "@yamada-ui/react"

        const Page = () => {

          const content = 'Yamada UI'

          return (
            <Markdown>{content}</Markdown>
          )
        }

        export default Page
        \`\`\`
        `
      const { container } = render(<Markdown>{content}</Markdown>)

      await a11y(container)
    })
  })
})
