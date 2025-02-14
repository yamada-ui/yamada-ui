import type { Meta } from "@storybook/react"
import { useRef, useState } from "react"
import { useInfiniteScroll } from "."
import { Button } from "../../components/button"
import { Card, CardBody, CardHeader } from "../../components/card"
import { Center } from "../../components/center"
import { Container } from "../../components/container"
import { Heading } from "../../components/heading"
import { Loading } from "../../components/loading"
import { Text } from "../../components/text"
import { noop } from "../../utils"

const meta: Meta = {
  title: "Hooks / useInfiniteScroll",
}

export default meta

export const Basic = () => {
  const [count, setCount] = useState<number>(50)
  const { ref, finish } = useInfiniteScroll({
    onLoad: ({ finish, index }) => {
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

      {!finish ? (
        <Center ref={ref} w="full">
          <Loading fontSize="2xl" />
        </Center>
      ) : null}
    </>
  )
}

export const WithRoot = () => {
  const rootRef = useRef<HTMLDivElement | null>(null)
  const resetRef = useRef<() => void>(noop)
  const [count, setCount] = useState<number>(50)
  const { ref, finish } = useInfiniteScroll({
    resetRef,
    rootRef,
    onLoad: ({ finish, index }) => {
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

        {!finish ? (
          <Center ref={ref} w="full">
            <Loading fontSize="2xl" />
          </Center>
        ) : null}
      </Container>

      <Button onClick={() => resetRef.current()}>Reset</Button>
    </>
  )
}

export const WithRootMargin = () => {
  const [count, setCount] = useState<number>(50)
  const { ref, finish } = useInfiniteScroll({
    rootMargin: "300px 0px 0px 0px",
    onLoad: ({ finish, index }) => {
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

      {!finish ? (
        <Center ref={ref} w="full">
          <Loading fontSize="2xl" />
        </Center>
      ) : null}
    </>
  )
}

export const WithThreshold = () => {
  const [count, setCount] = useState<number>(50)
  const { ref, finish } = useInfiniteScroll({
    threshold: 1,
    onLoad: ({ finish, index }) => {
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

      {!finish ? (
        <Center ref={ref} w="full">
          <Loading fontSize="2xl" />
        </Center>
      ) : null}
    </>
  )
}

export const WithInitialLoad = () => {
  const [count, setCount] = useState<number>(0)
  const { ref, finish } = useInfiniteScroll({
    initialLoad: true,
    onLoad: ({ finish, index }) => {
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

      {!finish ? (
        <Center ref={ref} w="full">
          <Loading fontSize="2xl" />
        </Center>
      ) : null}
    </>
  )
}

export const Reverse = () => {
  const [count, setCount] = useState<number>(50)
  const { ref, finish } = useInfiniteScroll({
    reverse: true,
    onLoad: ({ finish, index }) => {
      console.log("onLoad", index)

      setCount((prev) => prev + 50)

      if (index >= 5) finish()
    },
  })

  return (
    <>
      {!finish ? (
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
