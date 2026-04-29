import { a11y, render, screen, waitFor } from "#test"
import { vi } from "vitest"
import { CodeBlock } from "."
import { useClipboard } from "../../hooks/use-clipboard"
import { codeToHighlightedHtml } from "./code-to-html"

vi.mock("./code-to-html", () => ({
  codeToHighlightedHtml: vi.fn(),
}))

vi.mock("../../hooks/use-clipboard", () => ({
  useClipboard: vi.fn(),
}))

describe("<CodeBlock.Root />", () => {
  beforeEach(() => {
    vi.mocked(codeToHighlightedHtml).mockResolvedValue(
      '<span class="line">const count = 1</span><span class="line">return count</span>',
    )
    vi.mocked(useClipboard).mockReturnValue({
      copied: false,
      setValue: vi.fn(),
      value: "",
      onCopy: vi.fn(),
    })
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  test("renders component correctly", async () => {
    await a11y(<CodeBlock.Root code="const count = 1" language="ts" />)
  })

  test("sets `displayName` correctly", () => {
    expect(CodeBlock.Root.displayName).toBe("CodeBlockRoot")
  })

  test("sets `className` correctly", () => {
    render(<CodeBlock.Root data-testid="code-block" code="const count = 1" />)

    expect(screen.getByTestId("code-block")).toHaveClass("ui-code-block__root")
  })

  test("renders title and language label correctly", async () => {
    render(
      <CodeBlock.Root
        code="const count = 1"
        language="tsx"
        title="Button.tsx"
      />,
    )

    expect(screen.getByText("Button.tsx")).toBeInTheDocument()
    expect(screen.getByText("tsx")).toBeInTheDocument()

    await waitFor(() =>
      expect(codeToHighlightedHtml).toHaveBeenCalledWith("const count = 1", {
        highlight: undefined,
        language: "tsx",
      }),
    )
  })

  test("renders plain text fallback while highlighted HTML is pending", () => {
    vi.mocked(codeToHighlightedHtml).mockReturnValue(new Promise(() => {}))

    render(<CodeBlock.Root code={"const count = 1\nreturn count"} />)

    expect(screen.getByText("const count = 1")).toBeInTheDocument()
    expect(screen.getByText("return count")).toBeInTheDocument()
  })

  test("copies code when the copy trigger is pressed", async () => {
    const onCopy = vi.fn()

    vi.mocked(useClipboard).mockReturnValue({
      copied: false,
      setValue: vi.fn(),
      value: "",
      onCopy,
    })

    const { user } = render(<CodeBlock.Root code="const count = 1" />)

    const button = screen.getByRole("button", { name: "Copy code" })

    await user.click(button)

    expect(onCopy).toHaveBeenCalledWith("const count = 1")
  })

  test("renders line numbers when enabled", async () => {
    render(
      <CodeBlock.Root code={"const count = 1\nreturn count"} lineNumbers />,
    )

    await waitFor(() =>
      expect(
        screen.getByText("const count = 1").closest("pre"),
      ).toHaveAttribute("data-line-numbers", ""),
    )
  })

  test("keeps highlighted line numbers aligned with plain lines", async () => {
    render(
      <CodeBlock.Root code={"const count = 1\nreturn count"} lineNumbers>
        <CodeBlock.Code html='<span class="line">const count = 1</span><span class="line highlighted">return count</span>' />
      </CodeBlock.Root>,
    )

    await waitFor(() => {
      const styles = [...document.querySelectorAll("style")]
        .map((style) => style.textContent)
        .join("\n")

      expect(styles).toContain(
        ".line.highlighted::before{left:var(--ui-spaces-4);",
      )
    })
  })

  test("keeps highlighted lines aligned with plain lines", async () => {
    render(
      <CodeBlock.Root code={"const count = 1\nreturn count"} lineNumbers>
        <CodeBlock.Code html='<span class="line">const count = 1</span><span class="line highlighted">return count</span>' />
      </CodeBlock.Root>,
    )

    await waitFor(() => {
      const styles = [...document.querySelectorAll("style")]
        .map((style) => style.textContent)
        .join("\n")

      expect(styles).toMatch(
        /\.line\{[^}]*padding-inline-start:var\(--ui-spaces-10\);[^}]*}.*\.highlighted\{[^}]*padding-inline-start:var\(--ui-spaces-14\);/s,
      )
    })
  })

  test("passes highlight metadata to the highlighter", async () => {
    render(
      <CodeBlock.Root
        code={"const count = 1\nreturn count"}
        highlight="{2}"
        language="ts"
      />,
    )

    await waitFor(() =>
      expect(codeToHighlightedHtml).toHaveBeenCalledWith(
        "const count = 1\nreturn count",
        {
          highlight: "{2}",
          language: "ts",
        },
      ),
    )
  })

  test("toggles collapsed state when maxLines is exceeded", async () => {
    const { user } = render(
      <CodeBlock.Root
        code={"1\n2\n3\n4"}
        defaultCollapsed
        language="ts"
        maxLines={2}
      />,
    )

    const button = screen.getByRole("button", { name: "Expand code" })
    const content = document.getElementById(
      button.getAttribute("aria-controls") ?? "",
    )

    expect(button).toHaveAttribute("aria-expanded", "false")
    expect(button).toHaveTextContent("Expand code")
    expect(button.closest(".ui-code-block__footer")).toBeInTheDocument()
    expect(content).toHaveAttribute("data-collapsed", "")

    await user.click(button)

    await waitFor(() =>
      expect(
        screen.getByRole("button", { name: "Collapse code" }),
      ).toHaveAttribute("aria-expanded", "true"),
    )
    expect(content).not.toHaveAttribute("data-collapsed")
  })
})
