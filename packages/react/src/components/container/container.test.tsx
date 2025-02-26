import { render, screen } from "../../../test"
import { Heading } from "../heading"
import { Text } from "../text"
import { Container } from "./"

describe("<Container />", () => {
  test("renders container correctly", () => {
    render(
      <Container.Root>
        <Container.Header>
          <Heading size="xl">『ドラゴンボール』（DRAGON BALL）</Heading>
        </Container.Header>

        <Container.Body color="fg.muted">
          <Text>
            『ドラゴンボール』（DRAGON
            BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
          </Text>
        </Container.Body>
        <Container.Footer>
          <Text>© 鳥山明／集英社</Text>
        </Container.Footer>
      </Container.Root>,
    )
  })

  test("sets `displayName` and `__ui__` correctly", () => {
    expect(Container.Root.displayName).toBe("ContainerRoot")
    expect(Container.Root.__ui__).toBe("ContainerRoot")

    expect(Container.Header.displayName).toBe("ContainerHeader")
    expect(Container.Header.__ui__).toBe("ContainerHeader")

    expect(Container.Body.displayName).toBe("ContainerBody")
    expect(Container.Body.__ui__).toBe("ContainerBody")

    expect(Container.Footer.displayName).toBe("ContainerFooter")
    expect(Container.Footer.__ui__).toBe("ContainerFooter")
  })

  test("sets `className` correctly", () => {
    render(
      <Container.Root data-testid="root">
        <Container.Header data-testid="header">
          <Heading size="xl">『ドラゴンボール』（DRAGON BALL）</Heading>
        </Container.Header>

        <Container.Body data-testid="body" color="fg.muted">
          <Text>
            『ドラゴンボール』（DRAGON
            BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
          </Text>
        </Container.Body>
        <Container.Footer>
          <Text>© 鳥山明／集英社</Text>
        </Container.Footer>
      </Container.Root>,
    )

    expect(screen.getByTestId("root")).toHaveClass("ui-container__root")
    expect(screen.getByTestId("header")).toHaveClass("ui-container__header")
    expect(screen.getByTestId("body")).toHaveClass("ui-container__body")
    expect(screen.getByText("© 鳥山明／集英社")).toHaveClass(
      "ui-container__footer",
    )
  })

  test("renders HTML tag correctly", () => {
    render(
      <Container.Root data-testid="root">
        <Container.Header data-testid="header">
          <Heading size="xl">『ドラゴンボール』（DRAGON BALL）</Heading>
        </Container.Header>

        <Container.Body data-testid="body" color="fg.muted">
          <Text>
            『ドラゴンボール』（DRAGON
            BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
          </Text>
        </Container.Body>
        <Container.Footer data-testid="footer">
          <Text>© 鳥山明／集英社</Text>
        </Container.Footer>
      </Container.Root>,
    )

    expect(screen.getByTestId("root").tagName).toBe("SECTION")
    expect(screen.getByTestId("header").tagName).toBe("HEADER")
    expect(screen.getByTestId("body").tagName).toBe("DIV")
    expect(screen.getByTestId("footer").tagName).toBe("FOOTER")
  })

  test("centerContent - prop works correctly", () => {
    render(<Container.Root centerContent>Container</Container.Root>)

    expect(screen.getByText("Container")).toHaveStyle({ alignItems: "center" })
  })
})
