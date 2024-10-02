import type { Meta } from "@storybook/react"
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Center,
  Container,
  Heading,
  Loading,
  Text,
  useInfiniteScroll,
} from "@yamada-ui/react"
import { useRef, useState } from "react"

const meta: Meta = {
  title: "Hooks / useInfiniteScroll",
}

export default meta

export const basic = () => {
  const [count, setCount] = useState<number>(50)
  const { ref, isFinish } = useInfiniteScroll({
    onLoad: async ({ finish, index }) => {
      console.log("onLoad", index)

      setCount((prev) => prev + 50)

      if (index >= 5) finish()
    },
  })

  return (
    <>
      {Array(count)
        .fill(0)
        .map((_, index) => (
          <Card key={index}>
            <CardHeader>
              <Heading size="md">『ドラゴンボール』（DRAGON BALL）</Heading>
            </CardHeader>

            <CardBody>
              <Text>
                『ドラゴンボール』（DRAGON
                BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
              </Text>
            </CardBody>
          </Card>
        ))}

      {!isFinish ? (
        <Center ref={ref} w="full">
          <Loading fontSize="2xl" />
        </Center>
      ) : null}
    </>
  )
}

export const withRoot = () => {
  const rootRef = useRef<HTMLDivElement>(null)
  const resetRef = useRef<() => void>(() => {})
  const [count, setCount] = useState<number>(50)
  const { ref, isFinish } = useInfiniteScroll({
    resetRef,
    rootRef,
    onLoad: async ({ finish, index }) => {
      console.log("onLoad", index)

      setCount((prev) => prev + 50)

      if (index >= 5) finish()
    },
  })

  return (
    <>
      <Container
        ref={rootRef}
        borderWidth="1px"
        maxH="xl"
        overflowY="auto"
        p="md"
        rounded="md"
      >
        {Array(count)
          .fill(0)
          .map((_, index) => (
            <Card key={index}>
              <CardHeader>
                <Heading size="md">『ドラゴンボール』（DRAGON BALL）</Heading>
              </CardHeader>

              <CardBody>
                <Text>
                  『ドラゴンボール』（DRAGON
                  BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
                </Text>
              </CardBody>
            </Card>
          ))}

        {!isFinish ? (
          <Center ref={ref} w="full">
            <Loading fontSize="2xl" />
          </Center>
        ) : null}
      </Container>

      <Button onClick={() => resetRef.current()}>Reset</Button>
    </>
  )
}

export const withRootMargin = () => {
  const [count, setCount] = useState<number>(50)
  const { ref, isFinish } = useInfiniteScroll({
    rootMargin: "300px 0px 0px 0px",
    onLoad: async ({ finish, index }) => {
      console.log("onLoad", index)

      setCount((prev) => prev + 50)

      if (index >= 5) finish()
    },
  })

  return (
    <>
      {Array(count)
        .fill(0)
        .map((_, index) => (
          <Card key={index}>
            <CardHeader>
              <Heading size="md">『ドラゴンボール』（DRAGON BALL）</Heading>
            </CardHeader>

            <CardBody>
              <Text>
                『ドラゴンボール』（DRAGON
                BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
              </Text>
            </CardBody>
          </Card>
        ))}

      {!isFinish ? (
        <Center ref={ref} w="full">
          <Loading fontSize="2xl" />
        </Center>
      ) : null}
    </>
  )
}

export const withThreshold = () => {
  const [count, setCount] = useState<number>(50)
  const { ref, isFinish } = useInfiniteScroll({
    threshold: 1,
    onLoad: async ({ finish, index }) => {
      console.log("onLoad", index)

      setCount((prev) => prev + 50)

      if (index >= 5) finish()
    },
  })

  return (
    <>
      {Array(count)
        .fill(0)
        .map((_, index) => (
          <Card key={index}>
            <CardHeader>
              <Heading size="md">『ドラゴンボール』（DRAGON BALL）</Heading>
            </CardHeader>

            <CardBody>
              <Text>
                『ドラゴンボール』（DRAGON
                BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
              </Text>
            </CardBody>
          </Card>
        ))}

      {!isFinish ? (
        <Center ref={ref} w="full">
          <Loading fontSize="2xl" />
        </Center>
      ) : null}
    </>
  )
}

export const withInitialLoad = () => {
  const [count, setCount] = useState<number>(0)
  const { ref, isFinish } = useInfiniteScroll({
    initialLoad: true,
    onLoad: async ({ finish, index }) => {
      console.log("onLoad", index)

      setCount((prev) => prev + 50)

      if (index >= 5) finish()
    },
  })

  return (
    <>
      {Array(count)
        .fill(0)
        .map((_, index) => (
          <Card key={index}>
            <CardHeader>
              <Heading size="md">『ドラゴンボール』（DRAGON BALL）</Heading>
            </CardHeader>

            <CardBody>
              <Text>
                『ドラゴンボール』（DRAGON
                BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
              </Text>
            </CardBody>
          </Card>
        ))}

      {!isFinish ? (
        <Center ref={ref} w="full">
          <Loading fontSize="2xl" />
        </Center>
      ) : null}
    </>
  )
}

export const isReverse = () => {
  const [count, setCount] = useState<number>(50)
  const { ref, isFinish } = useInfiniteScroll({
    isReverse: true,
    onLoad: async ({ finish, index }) => {
      console.log("onLoad", index)

      setCount((prev) => prev + 50)

      if (index >= 5) finish()
    },
  })

  return (
    <>
      {!isFinish ? (
        <Center ref={ref} w="full">
          <Loading fontSize="2xl" />
        </Center>
      ) : null}

      {Array(count)
        .fill(0)
        .map((_, index) => (
          <Card key={index}>
            <CardHeader>
              <Heading size="md">『ドラゴンボール』（DRAGON BALL）</Heading>
            </CardHeader>

            <CardBody>
              <Text>
                『ドラゴンボール』（DRAGON
                BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
              </Text>
            </CardBody>
          </Card>
        ))}
    </>
  )
}
