import { page, render } from "#test/browser"
import { Heading } from "../heading"
import { Text } from "../text"
import { Container } from "./"

describe("<Container />", () => {
  test("renders component correctly", async () => {
    await render(
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

  test("sets `displayName` correctly", () => {
    expect(Container.Root.displayName).toBe("ContainerRoot")
    expect(Container.Header.displayName).toBe("ContainerHeader")
    expect(Container.Body.displayName).toBe("ContainerBody")
    expect(Container.Footer.displayName).toBe("ContainerFooter")
  })

  test("sets `className` correctly", async () => {
    await render(
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

    await expect
      .element(page.getByTestId("root"))
      .toHaveClass("ui-container__root")
    await expect
      .element(page.getByTestId("header"))
      .toHaveClass("ui-container__header")
    await expect
      .element(page.getByTestId("body"))
      .toHaveClass("ui-container__body")
    await expect
      .element(page.getByTestId("footer"))
      .toHaveClass("ui-container__footer")
  })

  test("renders HTML tag correctly", async () => {
    await render(
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

    await expect
      .poll(() => page.getByTestId("root").element().tagName)
      .toBe("SECTION")
    await expect
      .poll(() => page.getByTestId("header").element().tagName)
      .toBe("HEADER")
    await expect
      .poll(() => page.getByTestId("body").element().tagName)
      .toBe("DIV")
    await expect
      .poll(() => page.getByTestId("footer").element().tagName)
      .toBe("FOOTER")
  })
})
