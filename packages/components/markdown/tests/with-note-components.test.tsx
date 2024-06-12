import { render, screen } from "@yamada-ui/test"
import dedent from "dedent"
import { Markdown } from "../src"

describe("Markdown / With Note Components", () => {
  describe("without `status`", () => {
    test("should render as an `Alert` component.", async () => {
      const content = dedent`
        :::note
        Status is nothing.
        :::
      `
      render(<Markdown>{content}</Markdown>)

      const note = await screen.findByRole("alert")
      expect(note).toBeInTheDocument()

      const desc = await screen.findByText(/Status is nothing\./)
      expect(desc).toBeInTheDocument()
    })

    test("when written in a single line in Markdown, it also should be rendered as an `Alert` component.", async () => {
      const content = dedent`:::note Status is nothing. :::`
      render(<Markdown>{content}</Markdown>)

      const note = await screen.findByRole("alert")
      expect(note).toBeInTheDocument()

      const desc = await screen.findByText(/Status is nothing\./)
      expect(desc).toBeInTheDocument()
    })

    test("should render as a simple text", async () => {
      const content = dedent`
        :::note
        Status is nothing.
      `
      render(<Markdown>{content}</Markdown>)

      const firstLine = await screen.findByText(/:::note/)
      expect(firstLine).toBeInTheDocument()

      const secondLine = await screen.findByText(/Status is nothing\./)
      expect(secondLine).toBeInTheDocument()
    })

    test("when written in a single line in Markdown, should render as a simple text", async () => {
      const content = dedent`:::note Status is nothing.`
      render(<Markdown>{content}</Markdown>)

      const text = await screen.findByText(/:::note Status is nothing\./)
      expect(text).toBeInTheDocument()
    })
  })

  describe("with `status`", () => {
    test.each`
      status       | expected
      ${"info"}    | ${"Status is info."}
      ${"warning"} | ${"Status is warning."}
      ${"success"} | ${"Status is success."}
      ${"error"}   | ${"Status is error."}
      ${"loading"} | ${"Status is loading."}
    `(
      "should render as an `Alert` component with status=`$status`.",
      async ({ status, expected }) => {
        const content = dedent`
          :::note status=${status}
          Status is ${status}.
          :::
        `
        render(<Markdown>{content}</Markdown>)

        const note = await screen.findByRole("alert")
        expect(note).toBeInTheDocument()

        const desc = await screen.findByText(expected)
        expect(desc).toBeInTheDocument()
      },
    )

    test.each`
      status       | expected
      ${"info"}    | ${"Status is info."}
      ${"warning"} | ${"Status is warning."}
      ${"success"} | ${"Status is success."}
      ${"error"}   | ${"Status is error."}
      ${"loading"} | ${"Status is loading."}
    `(
      "when written in a single line in Markdown, it also should be rendered as an `Alert` component with status=`$status`.",
      async ({ status, expected }) => {
        const content = dedent`:::note status=${status} Status is ${status}. :::`
        render(<Markdown>{content}</Markdown>)

        const note = await screen.findByRole("alert")
        expect(note).toBeInTheDocument()

        const desc = await screen.findByText(expected)
        expect(desc).toBeInTheDocument()
      },
    )

    test.each`
      status       | expectedFirstLine           | expectedSecondLine
      ${"info"}    | ${":::note status=info"}    | ${"Status is info."}
      ${"warning"} | ${":::note status=warning"} | ${"Status is warning."}
      ${"success"} | ${":::note status=success"} | ${"Status is success."}
      ${"error"}   | ${":::note status=error"}   | ${"Status is error."}
      ${"loading"} | ${":::note status=loading"} | ${"Status is loading."}
    `(
      "should render as a simple text (includes status=`$status`).",
      async ({ status, expectedFirstLine, expectedSecondLine }) => {
        const content = dedent`
          :::note status=${status}
          Status is ${status}.
        `
        render(<Markdown>{content}</Markdown>)

        const firstLine = await screen.findByText(new RegExp(expectedFirstLine))
        expect(firstLine).toBeInTheDocument()

        const secondLine = await screen.findByText(
          new RegExp(expectedSecondLine),
        )
        expect(secondLine).toBeInTheDocument()
      },
    )

    test.each`
      status       | expected
      ${"info"}    | ${":::note status=info Status is info."}
      ${"warning"} | ${":::note status=warning Status is warning."}
      ${"success"} | ${":::note status=success Status is success."}
      ${"error"}   | ${":::note status=error Status is error."}
      ${"loading"} | ${":::note status=loading Status is loading."}
    `(
      "when written in a single line in Markdown, it also should be rendered as a simple text (includes status=`$status`).",
      async ({ status, expected }) => {
        const content = dedent`:::note status=${status} Status is ${status}.`
        render(<Markdown>{content}</Markdown>)

        const text = await screen.findByText(expected)
        expect(text).toBeInTheDocument()
      },
    )
  })

  test("the first note should not be rendered and the second one should be rendered correctly", async () => {
    const content = dedent`
      :::note
      This is a first Alert component.
      :::
      :::note
      This is a second Alert component.
      :::
    `
    render(<Markdown>{content}</Markdown>)

    const firstText = screen.queryByText(/This is a first Alert component\./)
    expect(firstText).toBeNull()

    const secondText = await screen.findByText(
      /This is a second Alert component/,
    )
    expect(secondText).toBeInTheDocument()
  })

  describe("note and texts", () => {
    test("should render two texts and an `Alert` component correctly", async () => {
      const content = dedent`
        This is the first text.

        :::note
        This is an Alert component.
        :::

        This is the second text.
      `
      render(<Markdown>{content}</Markdown>)

      const firstText = await screen.findByText(/This is the first text\./)
      expect(firstText).toBeInTheDocument()

      const noteText = await screen.findByText(/This is an Alert component\./)
      expect(noteText).toBeInTheDocument()

      const secondText = await screen.findByText(/This is the second text\./)
      expect(secondText).toBeInTheDocument()
    })

    test("the text on the previous line of the note should not be rendered", async () => {
      const content = dedent`
        This is a simple text.
        :::note
        This is an Alert component.
        :::
      `
      render(<Markdown>{content}</Markdown>)

      const simpleText = screen.queryByText(/This is a simple text\./)
      expect(simpleText).toBeNull()

      const noteText = await screen.findByText(/This is an Alert component\./)
      expect(noteText).toBeInTheDocument()
    })

    test("the text on the next line of the note should not be rendered", async () => {
      const content = dedent`
        :::note
        This is an Alert component.
        :::
        This is a simple text.
      `
      render(<Markdown>{content}</Markdown>)

      const simpleText = screen.queryByText(/This is a simple text\./)
      expect(simpleText).toBeNull()

      const noteText = await screen.findByText(/This is an Alert component\./)
      expect(noteText).toBeInTheDocument()
    })

    test("if nested, only the outermost one should be converted to an `Alert` component.", async () => {
      const content = dedent`
        :::note status=error
        :::note
        Status is error.
        :::
        :::
      `
      render(<Markdown>{content}</Markdown>)

      const firstLineText = screen.queryByText(/:::note/)
      expect(firstLineText).toBeInTheDocument()

      const noteText = await screen.findByText(/Status is error\./)
      expect(noteText).toBeInTheDocument()

      const thirdLineText = screen.queryByText(/:::/)
      expect(thirdLineText).toBeInTheDocument()
    })

    test("if there is no string between `:::note` and `:::`, nothing should be rendered.", async () => {
      const content = dedent`
        :::note
        :::
      `
      render(<Markdown>{content}</Markdown>)

      const firstLineText = screen.queryByText(/:::note/)
      expect(firstLineText).toBeNull()

      const thirdLineText = screen.queryByText(/:::/)
      expect(thirdLineText).toBeNull()
    })

    test("When the markdown syntax for strong (**) is used, it should render as a <strong> tag.", async () => {
      const content = dedent`
        :::note status=success
        This is a success **note**.
        :::
      `
      render(<Markdown>{content}</Markdown>)

      const text = screen.queryByText(/This is a success/)
      expect(text).toBeInTheDocument()

      const strong = text!.querySelector("strong")
      expect(strong).toBeInTheDocument()
      expect(strong).toHaveTextContent("note")
    })
  })
})
