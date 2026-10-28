import { createRef } from "react"
import { a11y, render, screen } from "#test"
import { Bubble } from "./"

describe("<Bubble />", () => {
  test("renders component correctly", async () => {
    await a11y(
      <Bubble.Root>
        <Bubble.Group>
          <Bubble.Item>
            <Bubble.Content>Hello!</Bubble.Content>
            <Bubble.Reactions
              aria-label="Reactions: thumbs up and fire"
              role="img"
            >
              <span>👍</span>
              <span>🔥</span>
            </Bubble.Reactions>
          </Bubble.Item>
          <Bubble.Item variant="panel" direction="end">
            <Bubble.Content as="button" type="button">
              Tell me more
            </Bubble.Content>
          </Bubble.Item>
        </Bubble.Group>
      </Bubble.Root>,
    )
  })

  test("forwards refs and attributes to each part", () => {
    const groupRef = createRef<HTMLDivElement>()
    const rootRef = createRef<HTMLDivElement>()
    const itemRef = createRef<HTMLDivElement>()
    const contentRef = createRef<HTMLDivElement>()
    const reactionsRef = createRef<HTMLDivElement>()

    render(
      <Bubble.Root ref={rootRef} data-testid="bubble">
        <Bubble.Group ref={groupRef} data-testid="group">
          <Bubble.Item ref={itemRef} data-testid="item">
            <Bubble.Content ref={contentRef}>Hello!</Bubble.Content>
            <Bubble.Reactions
              ref={reactionsRef}
              aria-label="One thumbs up reaction"
              role="img"
            >
              👍
            </Bubble.Reactions>
          </Bubble.Item>
        </Bubble.Group>
      </Bubble.Root>,
    )

    expect(groupRef.current).toBe(screen.getByTestId("group"))
    expect(rootRef.current).toBe(screen.getByTestId("bubble"))
    expect(itemRef.current).toBe(screen.getByTestId("item"))
    expect(contentRef.current).toBe(screen.getByText("Hello!"))
    expect(reactionsRef.current).toBe(
      screen.getByRole("img", { name: "One thumbs up reaction" }),
    )
    expect(groupRef.current).toHaveClass("ui-bubble__group")
    expect(rootRef.current).toHaveClass("ui-bubble__root")
    expect(itemRef.current).toHaveClass("ui-bubble__item")
    expect(itemRef.current).toHaveAttribute("data-direction", "start")
    expect(contentRef.current).toHaveClass("ui-bubble__content")
    expect(reactionsRef.current).toHaveClass("ui-bubble__reactions")
    expect(reactionsRef.current).toHaveAttribute("data-placement", "end-end")
  })

  test("composes content with a native link", () => {
    render(
      <Bubble.Root>
        <Bubble.Item>
          <Bubble.Content asChild>
            <a href="https://yamada-ui.com">Read the documentation</a>
          </Bubble.Content>
        </Bubble.Item>
      </Bubble.Root>,
    )

    expect(
      screen.getByRole("link", { name: "Read the documentation" }),
    ).toHaveAttribute("href", "https://yamada-ui.com")
    expect(screen.getByRole("link")).toHaveClass("ui-bubble__content")
  })

  test("wraps omitted elements without wrapping reactions", () => {
    render(
      <Bubble.Root>
        <Bubble.Item contentProps={{ "data-testid": "content" }}>
          <strong>Hello world</strong>
          <Bubble.Reactions aria-label="One thumbs up reaction" role="img">
            👍
          </Bubble.Reactions>
        </Bubble.Item>
      </Bubble.Root>,
    )

    const content = screen.getByTestId("content")
    const reactions = screen.getByRole("img", {
      name: "One thumbs up reaction",
    })

    expect(content).toHaveClass("ui-bubble__content")
    expect(content).toHaveTextContent("Hello world")
    expect(content).toContainElement(screen.getByText("Hello world"))
    expect(content).not.toContainElement(reactions)
    expect(reactions.parentElement).toBe(content.parentElement)
  })

  test("uses explicit content instead of creating internal content", () => {
    render(
      <Bubble.Root>
        <Bubble.Item contentProps={{ "data-testid": "internal-content" }}>
          <Bubble.Content data-testid="custom-content">Hello!</Bubble.Content>
          <Bubble.Reactions aria-label="One thumbs up reaction" role="img">
            👍
          </Bubble.Reactions>
        </Bubble.Item>
      </Bubble.Root>,
    )

    expect(screen.queryByTestId("internal-content")).not.toBeInTheDocument()
    expect(screen.getByTestId("custom-content")).toHaveTextContent("Hello!")
    expect(screen.getByTestId("custom-content").parentElement).toHaveClass(
      "ui-bubble__item",
    )
    expect(
      screen.getByRole("img", { name: "One thumbs up reaction" }).parentElement,
    ).toBe(screen.getByTestId("custom-content").parentElement)
  })

  test("inherits group direction and lets explicit item props override directional defaults", () => {
    render(
      <Bubble.Root
        endItemProps={{ title: "end" }}
        itemProps={{ title: "common" }}
        startItemProps={{ title: "start" }}
      >
        <Bubble.Group>
          <Bubble.Item data-testid="default-start">Default start</Bubble.Item>
        </Bubble.Group>
        <Bubble.Group direction="end">
          <Bubble.Item data-testid="inherited-end">Inherited end</Bubble.Item>
          <Bubble.Item data-testid="explicit-start" direction="start">
            Explicit start
          </Bubble.Item>
          <Bubble.Item data-testid="explicit-props" title="explicit">
            Explicit props
          </Bubble.Item>
        </Bubble.Group>
      </Bubble.Root>,
    )

    expect(screen.getByTestId("default-start")).toHaveAttribute(
      "data-direction",
      "start",
    )
    expect(screen.getByTestId("default-start")).toHaveAttribute(
      "title",
      "start",
    )
    expect(screen.getByTestId("inherited-end")).toHaveAttribute(
      "data-direction",
      "end",
    )
    expect(screen.getByTestId("inherited-end")).toHaveAttribute("title", "end")
    expect(screen.getByTestId("explicit-start")).toHaveAttribute(
      "data-direction",
      "start",
    )
    expect(screen.getByTestId("explicit-start")).toHaveAttribute(
      "title",
      "start",
    )
    expect(screen.getByTestId("explicit-props")).toHaveAttribute(
      "title",
      "explicit",
    )
  })

  test("generates standalone and grouped items with content and reactions", () => {
    render(
      <Bubble.Root
        items={[
          {
            children: "Standalone message",
            contentProps: { title: "Standalone content" },
          },
          {
            "data-testid": "standalone-reply",
            children: "Standalone reply",
            direction: "end",
            reactions: "👍",
            contentProps: { title: "Reply content" },
            reactionsProps: {
              "aria-label": "Thumbs up reaction",
              placement: "start-center",
              role: "img",
            },
          },
          {
            items: [
              {
                children: "Grouped message",
                contentProps: { title: "Grouped content" },
              },
              {
                "data-testid": "grouped-reply",
                children: "Grouped reply",
                direction: "end",
                reactions: "🎉",
                contentProps: { title: "Grouped reply content" },
                reactionsProps: {
                  "aria-label": "Celebration reaction",
                  placement: "end-start",
                  role: "img",
                },
              },
            ],
            title: "Generated group",
          },
        ]}
      />,
    )

    expect(screen.getByTitle("Standalone content")).toHaveTextContent(
      "Standalone message",
    )
    expect(screen.getByTitle("Reply content")).toHaveTextContent(
      "Standalone reply",
    )
    expect(screen.getByTitle("Generated group")).toHaveClass("ui-bubble__group")
    expect(screen.getByTitle("Grouped content")).toHaveTextContent(
      "Grouped message",
    )
    expect(screen.getByTitle("Grouped reply content")).toHaveTextContent(
      "Grouped reply",
    )
    expect(screen.getByTestId("standalone-reply")).toHaveAttribute(
      "data-direction",
      "end",
    )
    expect(screen.getByTestId("grouped-reply")).toHaveAttribute(
      "data-direction",
      "end",
    )
    expect(
      screen.getByRole("img", { name: "Thumbs up reaction" }),
    ).toHaveAttribute("data-placement", "start-center")
    expect(
      screen.getByRole("img", { name: "Celebration reaction" }),
    ).toHaveAttribute("data-placement", "end-start")
  })

  test("prefers explicit children over items in roots and groups", () => {
    render(
      <Bubble.Root items={[{ children: "Ignored root item" }]}>
        <Bubble.Group items={[{ children: "Ignored group item" }]}>
          <Bubble.Item>Explicit message</Bubble.Item>
        </Bubble.Group>
      </Bubble.Root>,
    )

    expect(screen.getByText("Explicit message")).toBeInTheDocument()
    expect(screen.queryByText("Ignored root item")).not.toBeInTheDocument()
    expect(screen.queryByText("Ignored group item")).not.toBeInTheDocument()
  })

  test("renders empty roots and groups without items", () => {
    render(
      <>
        <Bubble.Root data-testid="empty-root" />
        <Bubble.Root>
          <Bubble.Group data-testid="empty-group" />
        </Bubble.Root>
      </>,
    )

    expect(screen.getByTestId("empty-root")).toBeEmptyDOMElement()
    expect(screen.getByTestId("empty-group")).toBeEmptyDOMElement()
  })
})
