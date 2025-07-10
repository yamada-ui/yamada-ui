import type { Meta } from "@storybook/react-vite"
import { Container } from "../../components/container"
import { For } from "../../components/for"
import { Heading } from "../../components/heading"
import { HStack, VStack } from "../../components/stack"
import { Text } from "../../components/text"
import { lineHeights } from "./line-heights"

const meta: Meta = {
  title: "Theme / Tokens / Line Heights",
}

export default meta

export const Basic = () => {
  return (
    <>
      <Heading>Line Heights</Heading>

      <Container.Root>
        <Container.Body gap="lg">
          <For each={Object.entries(lineHeights)}>
            {([token, value], index) => (
              <VStack key={index}>
                <HStack>
                  <Text>{token}</Text>
                  <Text color="fg.muted">{value}</Text>
                </HStack>

                <Text fontSize="2xl" lineHeight={token}>
                  『ドラゴンボール』（DRAGON
                  BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
                </Text>
              </VStack>
            )}
          </For>
        </Container.Body>
      </Container.Root>
    </>
  )
}
