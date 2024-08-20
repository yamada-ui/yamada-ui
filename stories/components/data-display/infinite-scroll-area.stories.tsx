import type { Meta, StoryFn } from "@storybook/react"
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Container,
  Heading,
  InfiniteScrollArea,
  Loading,
  Text,
} from "@yamada-ui/react"
import { useRef, useState } from "react"

type Story = StoryFn<typeof InfiniteScrollArea>

const meta: Meta<typeof InfiniteScrollArea> = {
  title: "Components / Data Display / InfiniteScrollArea",
  component: InfiniteScrollArea,
}

export default meta

const wait = (ms: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms)
  })

export const basic: Story = () => {
  const [count, setCount] = useState<number>(50)

  return (
    <InfiniteScrollArea
      onLoad={async ({ index, finish }) => {
        console.log("load", index)

        setCount((prev) => prev + 50)

        if (index >= 5) finish()
      }}
      loading={<Loading fontSize="2xl" />}
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

export const withRoot: Story = () => {
  const rootRef = useRef<HTMLDivElement>(null)
  const [count, setCount] = useState<number>(50)
  const resetRef = useRef<() => void>(() => {})

  return (
    <>
      <Container
        ref={rootRef}
        maxH="xl"
        borderWidth="1px"
        rounded="md"
        p="md"
        overflowY="auto"
      >
        <InfiniteScrollArea
          rootRef={rootRef}
          resetRef={resetRef}
          onLoad={async ({ index, finish }) => {
            console.log("load", index)

            setCount((prev) => prev + 50)

            if (index >= 5) finish()
          }}
          loading={<Loading fontSize="2xl" />}
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

export const withRootMargin: Story = () => {
  const [count, setCount] = useState<number>(50)

  return (
    <InfiniteScrollArea
      onLoad={async ({ index, finish }) => {
        console.log("load", index)

        setCount((prev) => prev + 50)

        if (index >= 5) finish()
      }}
      loading={<Loading fontSize="2xl" />}
      rootMargin="300px 0px 0px 0px"
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

export const withThreshold: Story = () => {
  const [count, setCount] = useState<number>(50)

  return (
    <InfiniteScrollArea
      onLoad={async ({ index, finish }) => {
        console.log("load", index)

        setCount((prev) => prev + 50)

        if (index >= 5) finish()
      }}
      loading={<Loading fontSize="2xl" />}
      threshold={1}
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

export const withInitialLoad: Story = () => {
  const [count, setCount] = useState<number>(0)

  return (
    <InfiniteScrollArea
      initialLoad
      onLoad={async ({ index, finish }) => {
        console.log("load", index)

        await wait(1000)

        setCount((prev) => prev + 50)

        if (index >= 5) finish()
      }}
      loading={<Loading fontSize="2xl" />}
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

export const withOverflow: Story = () => {
  const [count, setCount] = useState<number>(50)

  return (
    <InfiniteScrollArea
      maxH="xl"
      borderWidth="1px"
      rounded="md"
      p="md"
      overflowY="auto"
      onLoad={async ({ index, finish }) => {
        setCount((prev) => prev + 50)

        if (index >= 5) finish()
      }}
      loading={<Loading fontSize="2xl" />}
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

export const withOrientation: Story = () => {
  const [count, setCount] = useState<number>(50)

  return (
    <InfiniteScrollArea
      orientation="horizontal"
      borderWidth="1px"
      rounded="md"
      p="md"
      overflowX="auto"
      onLoad={async ({ index, finish }) => {
        setCount((prev) => prev + 50)

        if (index >= 5) finish()
      }}
      loading={<Loading fontSize="2xl" />}
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

export const withStartIndex: Story = () => {
  const [count, setCount] = useState<number>(50)

  return (
    <InfiniteScrollArea
      onLoad={async ({ index, finish }) => {
        console.log("load", index)

        setCount((prev) => prev + 50)

        if (index >= 5) finish()
      }}
      loading={<Loading fontSize="2xl" />}
      startIndex={3}
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

export const withFinish: Story = () => {
  const [count, setCount] = useState<number>(50)

  return (
    <InfiniteScrollArea
      onLoad={async ({ index, finish }) => {
        console.log("load", index)

        setCount((prev) => prev + 50)

        if (index >= 5) finish()
      }}
      loading={<Loading fontSize="2xl" />}
      finish={<>Finished</>}
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

export const isReverse: Story = () => {
  const [count, setCount] = useState<number>(50)

  return (
    <InfiniteScrollArea
      onLoad={async ({ index, finish }) => {
        console.log("load", index)

        setCount((prev) => prev + 50)

        if (index >= 5) finish()
      }}
      loading={<Loading fontSize="2xl" />}
      isReverse
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

export const isDisabled: Story = () => {
  const [isDisabled, setIsDisabled] = useState<boolean>(false)
  const [count, setCount] = useState<number>(50)

  return (
    <>
      <InfiniteScrollArea
        maxH="xl"
        borderWidth="1px"
        rounded="md"
        p="md"
        overflowY="auto"
        onLoad={async ({ index, finish }) => {
          console.log("load", index)

          setCount((prev) => prev + 50)

          if (index >= 5) finish()
        }}
        loading={<Loading fontSize="2xl" />}
        isDisabled={isDisabled}
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
        colorScheme={isDisabled ? "success" : "danger"}
        onClick={() => setIsDisabled((prev) => !prev)}
      >
        {isDisabled ? "Enable" : "Disabled"}
      </Button>
    </>
  )
}

export const useReset: Story = () => {
  const resetRef = useRef<() => void>(() => {})
  const [count, setCount] = useState<number>(50)

  return (
    <>
      <InfiniteScrollArea
        maxH="xl"
        borderWidth="1px"
        rounded="md"
        p="md"
        overflowY="auto"
        onLoad={async ({ index, finish }) => {
          console.log("load", index)

          setCount((prev) => prev + 50)

          if (index >= 5) finish()
        }}
        loading={<Loading fontSize="2xl" />}
        resetRef={resetRef}
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

export const customTrigger: Story = () => {
  const [count, setCount] = useState<number>(50)

  return (
    <InfiniteScrollArea
      onLoad={async ({ index, finish }) => {
        console.log("load", index)

        await wait(5000)

        setCount((prev) => prev + 50)

        if (index >= 5) finish()
      }}
      loading={<Loading fontSize="2xl" />}
      triggerProps={{ bg: "primary.50", p: "md", rounded: "md" }}
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

export const customLoading: Story = () => {
  const [count, setCount] = useState<number>(50)

  return (
    <InfiniteScrollArea
      onLoad={async ({ index, finish }) => {
        console.log("load", index)

        setCount((prev) => prev + 50)

        if (index >= 5) finish()
      }}
      loading={<>Loading…</>}
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
