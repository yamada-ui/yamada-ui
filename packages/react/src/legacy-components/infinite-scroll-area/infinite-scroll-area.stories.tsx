import type { Meta, StoryFn } from "@storybook/react"
import { useRef, useState } from "react"
import { InfiniteScrollArea } from "."
import { Button } from "../../components/button"
import { Card, CardHeader } from "../../components/card"
import { CardBody } from "../../components/card"
import { Container } from "../../components/container"
import { Heading } from "../../components/heading"
import { Loading } from "../../components/loading"
import { Text } from "../../components/text"
import { noop } from "../../utils"

type Story = StoryFn<typeof InfiniteScrollArea>

const meta: Meta<typeof InfiniteScrollArea> = {
  component: InfiniteScrollArea,
  title: "Components / InfiniteScrollArea",
}

export default meta

const wait = async (ms: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms)
  })

export const Basic: Story = () => {
  const [count, setCount] = useState<number>(50)

  return (
    <InfiniteScrollArea
      loading={<Loading fontSize="2xl" />}
      onLoad={({ finish, index }) => {
        console.log("load", index)

        setCount((prev) => prev + 50)

        if (index >= 5) finish()
      }}
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
    </InfiniteScrollArea>
  )
}

export const WithRoot: Story = () => {
  const rootRef = useRef<HTMLDivElement>(null)
  const [count, setCount] = useState<number>(50)
  const resetRef = useRef<() => void>(noop)

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
        <InfiniteScrollArea
          loading={<Loading fontSize="2xl" />}
          resetRef={resetRef}
          rootRef={rootRef}
          onLoad={({ finish, index }) => {
            console.log("load", index)

            setCount((prev) => prev + 50)

            if (index >= 5) finish()
          }}
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
        </InfiniteScrollArea>
      </Container>

      <Button onClick={() => resetRef.current()}>Reset</Button>
    </>
  )
}

export const WithRootMargin: Story = () => {
  const [count, setCount] = useState<number>(50)

  return (
    <InfiniteScrollArea
      loading={<Loading fontSize="2xl" />}
      rootMargin="300px 0px 0px 0px"
      onLoad={({ finish, index }) => {
        console.log("load", index)

        setCount((prev) => prev + 50)

        if (index >= 5) finish()
      }}
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
    </InfiniteScrollArea>
  )
}

export const WithThreshold: Story = () => {
  const [count, setCount] = useState<number>(50)

  return (
    <InfiniteScrollArea
      loading={<Loading fontSize="2xl" />}
      threshold={1}
      onLoad={({ finish, index }) => {
        console.log("load", index)

        setCount((prev) => prev + 50)

        if (index >= 5) finish()
      }}
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
    </InfiniteScrollArea>
  )
}

export const WithInitialLoad: Story = () => {
  const [count, setCount] = useState<number>(0)

  return (
    <InfiniteScrollArea
      initialLoad
      loading={<Loading fontSize="2xl" />}
      onLoad={async ({ finish, index }) => {
        console.log("load", index)

        await wait(1000)

        setCount((prev) => prev + 50)

        if (index >= 5) finish()
      }}
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
    </InfiniteScrollArea>
  )
}

export const WithOverflow: Story = () => {
  const [count, setCount] = useState<number>(50)

  return (
    <InfiniteScrollArea
      borderWidth="1px"
      loading={<Loading fontSize="2xl" />}
      maxH="xl"
      overflowY="auto"
      p="md"
      rounded="md"
      onLoad={({ finish, index }) => {
        setCount((prev) => prev + 50)

        if (index >= 5) finish()
      }}
    >
      {Array(count)
        .fill(0)
        .map((_, index) => (
          <Card key={index} minW="lg">
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
    </InfiniteScrollArea>
  )
}

export const WithOrientation: Story = () => {
  const [count, setCount] = useState<number>(50)

  return (
    <InfiniteScrollArea
      borderWidth="1px"
      loading={<Loading fontSize="2xl" />}
      orientation="horizontal"
      overflowX="auto"
      p="md"
      rounded="md"
      onLoad={({ finish, index }) => {
        setCount((prev) => prev + 50)

        if (index >= 5) finish()
      }}
    >
      {Array(count)
        .fill(0)
        .map((_, index) => (
          <Card key={index} minW="lg">
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
    </InfiniteScrollArea>
  )
}

export const WithStartIndex: Story = () => {
  const [count, setCount] = useState<number>(50)

  return (
    <InfiniteScrollArea
      loading={<Loading fontSize="2xl" />}
      startIndex={3}
      onLoad={({ finish, index }) => {
        console.log("load", index)

        setCount((prev) => prev + 50)

        if (index >= 5) finish()
      }}
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
    </InfiniteScrollArea>
  )
}

export const WithFinish: Story = () => {
  const [count, setCount] = useState<number>(50)

  return (
    <InfiniteScrollArea
      finish={<>Finished</>}
      loading={<Loading fontSize="2xl" />}
      onLoad={({ finish, index }) => {
        console.log("load", index)

        setCount((prev) => prev + 50)

        if (index >= 5) finish()
      }}
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
    </InfiniteScrollArea>
  )
}

export const Reverse: Story = () => {
  const [count, setCount] = useState<number>(50)

  return (
    <InfiniteScrollArea
      loading={<Loading fontSize="2xl" />}
      reverse
      onLoad={({ finish, index }) => {
        console.log("load", index)

        setCount((prev) => prev + 50)

        if (index >= 5) finish()
      }}
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
    </InfiniteScrollArea>
  )
}

export const Disabled: Story = () => {
  const [disabled, setDisabled] = useState<boolean>(false)
  const [count, setCount] = useState<number>(50)

  return (
    <>
      <InfiniteScrollArea
        borderWidth="1px"
        disabled={disabled}
        loading={<Loading fontSize="2xl" />}
        maxH="xl"
        overflowY="auto"
        p="md"
        rounded="md"
        onLoad={({ finish, index }) => {
          console.log("load", index)

          setCount((prev) => prev + 50)

          if (index >= 5) finish()
        }}
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
      </InfiniteScrollArea>

      <Button
        colorScheme={disabled ? "success" : "danger"}
        onClick={() => setDisabled((prev) => !prev)}
      >
        {disabled ? "Enable" : "Disabled"}
      </Button>
    </>
  )
}

export const UseReset: Story = () => {
  const resetRef = useRef<() => void>(noop)
  const [count, setCount] = useState<number>(50)

  return (
    <>
      <InfiniteScrollArea
        borderWidth="1px"
        loading={<Loading fontSize="2xl" />}
        maxH="xl"
        overflowY="auto"
        p="md"
        resetRef={resetRef}
        rounded="md"
        onLoad={({ finish, index }) => {
          console.log("load", index)

          setCount((prev) => prev + 50)

          if (index >= 5) finish()
        }}
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
      </InfiniteScrollArea>

      <Button onClick={() => resetRef.current()}>Reset</Button>
    </>
  )
}

export const CustomTrigger: Story = () => {
  const [count, setCount] = useState<number>(50)

  return (
    <InfiniteScrollArea
      loading={<Loading fontSize="2xl" />}
      triggerProps={{ bg: "primary.50", p: "md", rounded: "md" }}
      onLoad={async ({ finish, index }) => {
        console.log("load", index)

        await wait(5000)

        setCount((prev) => prev + 50)

        if (index >= 5) finish()
      }}
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
    </InfiniteScrollArea>
  )
}

export const CustomLoading: Story = () => {
  const [count, setCount] = useState<number>(50)

  return (
    <InfiniteScrollArea
      loading={<>Loading…</>}
      onLoad={({ finish, index }) => {
        console.log("load", index)

        setCount((prev) => prev + 50)

        if (index >= 5) finish()
      }}
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
    </InfiniteScrollArea>
  )
}
