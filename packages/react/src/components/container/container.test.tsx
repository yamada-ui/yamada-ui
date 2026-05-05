import { a11y } from "#test"
import { Heading } from "../heading"
import { Text } from "../text"
import { Container } from "./"

describe("<Container />", () => {
  test("renders component correctly", async () => {
    await a11y(
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
})
