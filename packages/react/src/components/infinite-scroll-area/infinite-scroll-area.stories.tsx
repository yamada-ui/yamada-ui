import type { Meta, StoryFn } from "@storybook/react"
import { useRef, useState } from "react"
import { noop } from "../../utils"
import { Button } from "../button"
import { Card } from "../card"
import { Heading } from "../heading"
import { Loading } from "../loading"
import { VStack } from "../stack"
import { Text } from "../text"
import { InfiniteScrollArea } from "./"

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
      loading={<Loading.Oval fontSize="2xl" />}
      onLoad={({ finish, index }) => {
        console.log("load", index)

        setCount((prev) => prev + 50)

        if (index >= 5) finish()
      }}
    >
      {Array(count)
        .fill(0)
        .map((_, index) => (
          <Card.Root key={index}>
            <Card.Header>
              <Heading size="xl">『ドラゴンボール』（DRAGON BALL）</Heading>
            </Card.Header>

            <Card.Body>
              <Text>
                『ドラゴンボール』（DRAGON
                BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
              </Text>
            </Card.Body>
          </Card.Root>
        ))}
    </InfiniteScrollArea>
  )
}

export const Root: Story = () => {
  const rootRef = useRef<HTMLDivElement>(null)
  const [count, setCount] = useState<number>(50)
  const resetRef = useRef<() => void>(noop)

  return (
    <>
      <VStack
        ref={rootRef}
        borderWidth="1px"
        maxH="xl"
        overflowY="auto"
        p="lg"
        rounded="l3"
      >
        <InfiniteScrollArea
          loading={<Loading.Oval fontSize="2xl" />}
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
              <Card.Root key={index}>
                <Card.Header>
                  <Heading size="xl">『ドラゴンボール』（DRAGON BALL）</Heading>
                </Card.Header>

                <Card.Body>
                  <Text>
                    『ドラゴンボール』（DRAGON
                    BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
                  </Text>
                </Card.Body>
              </Card.Root>
            ))}
        </InfiniteScrollArea>
      </VStack>

      <Button onClick={() => resetRef.current()}>Reset</Button>
    </>
  )
}

export const RootMargin: Story = () => {
  const [count, setCount] = useState<number>(50)

  return (
    <InfiniteScrollArea
      loading={<Loading.Oval fontSize="2xl" />}
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
          <Card.Root key={index}>
            <Card.Header>
              <Heading size="xl">『ドラゴンボール』（DRAGON BALL）</Heading>
            </Card.Header>

            <Card.Body>
              <Text>
                『ドラゴンボール』（DRAGON
                BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
              </Text>
            </Card.Body>
          </Card.Root>
        ))}
    </InfiniteScrollArea>
  )
}

export const Threshold: Story = () => {
  const [count, setCount] = useState<number>(50)

  return (
    <InfiniteScrollArea
      loading={<Loading.Oval fontSize="2xl" />}
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
          <Card.Root key={index}>
            <Card.Header>
              <Heading size="xl">『ドラゴンボール』（DRAGON BALL）</Heading>
            </Card.Header>

            <Card.Body>
              <Text>
                『ドラゴンボール』（DRAGON
                BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
              </Text>
            </Card.Body>
          </Card.Root>
        ))}
    </InfiniteScrollArea>
  )
}

export const InitialLoad: Story = () => {
  const [count, setCount] = useState<number>(0)

  return (
    <InfiniteScrollArea
      initialLoad
      loading={<Loading.Oval fontSize="2xl" />}
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
          <Card.Root key={index}>
            <Card.Header>
              <Heading size="xl">『ドラゴンボール』（DRAGON BALL）</Heading>
            </Card.Header>

            <Card.Body>
              <Text>
                『ドラゴンボール』（DRAGON
                BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
              </Text>
            </Card.Body>
          </Card.Root>
        ))}
    </InfiniteScrollArea>
  )
}

export const Overflow: Story = () => {
  const [count, setCount] = useState<number>(50)

  return (
    <InfiniteScrollArea
      borderWidth="1px"
      loading={<Loading.Oval fontSize="2xl" />}
      maxH="xl"
      overflowY="auto"
      p="lg"
      rounded="l3"
      onLoad={({ finish, index }) => {
        setCount((prev) => prev + 50)

        if (index >= 5) finish()
      }}
    >
      {Array(count)
        .fill(0)
        .map((_, index) => (
          <Card.Root key={index}>
            <Card.Header>
              <Heading size="xl">『ドラゴンボール』（DRAGON BALL）</Heading>
            </Card.Header>

            <Card.Body>
              <Text>
                『ドラゴンボール』（DRAGON
                BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
              </Text>
            </Card.Body>
          </Card.Root>
        ))}
    </InfiniteScrollArea>
  )
}

export const Orientation: Story = () => {
  const [count, setCount] = useState<number>(50)

  return (
    <InfiniteScrollArea
      borderWidth="1px"
      loading={<Loading.Oval fontSize="2xl" />}
      orientation="horizontal"
      overflowX="auto"
      p="lg"
      rounded="l3"
      onLoad={({ finish, index }) => {
        setCount((prev) => prev + 50)

        if (index >= 5) finish()
      }}
    >
      {Array(count)
        .fill(0)
        .map((_, index) => (
          <Card.Root key={index} minW="lg">
            <Card.Header>
              <Heading size="xl">『ドラゴンボール』（DRAGON BALL）</Heading>
            </Card.Header>

            <Card.Body>
              <Text>
                『ドラゴンボール』（DRAGON
                BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
              </Text>
            </Card.Body>
          </Card.Root>
        ))}
    </InfiniteScrollArea>
  )
}

export const StartIndex: Story = () => {
  const [count, setCount] = useState<number>(50)

  return (
    <InfiniteScrollArea
      loading={<Loading.Oval fontSize="2xl" />}
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
          <Card.Root key={index}>
            <Card.Header>
              <Heading size="xl">『ドラゴンボール』（DRAGON BALL）</Heading>
            </Card.Header>

            <Card.Body>
              <Text>
                『ドラゴンボール』（DRAGON
                BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
              </Text>
            </Card.Body>
          </Card.Root>
        ))}
    </InfiniteScrollArea>
  )
}

export const Finish: Story = () => {
  const [count, setCount] = useState<number>(50)

  return (
    <InfiniteScrollArea
      finish={<>Finished</>}
      loading={<Loading.Oval fontSize="2xl" />}
      onLoad={({ finish, index }) => {
        console.log("load", index)

        setCount((prev) => prev + 50)

        if (index >= 5) finish()
      }}
    >
      {Array(count)
        .fill(0)
        .map((_, index) => (
          <Card.Root key={index}>
            <Card.Header>
              <Heading size="xl">『ドラゴンボール』（DRAGON BALL）</Heading>
            </Card.Header>

            <Card.Body>
              <Text>
                『ドラゴンボール』（DRAGON
                BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
              </Text>
            </Card.Body>
          </Card.Root>
        ))}
    </InfiniteScrollArea>
  )
}

export const Reverse: Story = () => {
  const [count, setCount] = useState<number>(50)

  return (
    <InfiniteScrollArea
      loading={<Loading.Oval fontSize="2xl" />}
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
          <Card.Root key={index}>
            <Card.Header>
              <Heading size="xl">『ドラゴンボール』（DRAGON BALL）</Heading>
            </Card.Header>

            <Card.Body>
              <Text>
                『ドラゴンボール』（DRAGON
                BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
              </Text>
            </Card.Body>
          </Card.Root>
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
        loading={<Loading.Oval fontSize="2xl" />}
        maxH="xl"
        overflowY="auto"
        p="lg"
        rounded="l3"
        onLoad={({ finish, index }) => {
          console.log("load", index)

          setCount((prev) => prev + 50)

          if (index >= 5) finish()
        }}
      >
        {Array(count)
          .fill(0)
          .map((_, index) => (
            <Card.Root key={index}>
              <Card.Header>
                <Heading size="xl">『ドラゴンボール』（DRAGON BALL）</Heading>
              </Card.Header>

              <Card.Body>
                <Text>
                  『ドラゴンボール』（DRAGON
                  BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
                </Text>
              </Card.Body>
            </Card.Root>
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

export const Reset: Story = () => {
  const resetRef = useRef<() => void>(noop)
  const [count, setCount] = useState<number>(50)

  return (
    <>
      <InfiniteScrollArea
        borderWidth="1px"
        loading={<Loading.Oval fontSize="2xl" />}
        maxH="xl"
        overflowY="auto"
        p="lg"
        resetRef={resetRef}
        rounded="l3"
        onLoad={({ finish, index }) => {
          console.log("load", index)

          setCount((prev) => prev + 50)

          if (index >= 5) finish()
        }}
      >
        {Array(count)
          .fill(0)
          .map((_, index) => (
            <Card.Root key={index}>
              <Card.Header>
                <Heading size="xl">『ドラゴンボール』（DRAGON BALL）</Heading>
              </Card.Header>

              <Card.Body>
                <Text>
                  『ドラゴンボール』（DRAGON
                  BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
                </Text>
              </Card.Body>
            </Card.Root>
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
      loading={<Loading.Oval fontSize="2xl" />}
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
          <Card.Root key={index}>
            <Card.Header>
              <Heading size="xl">『ドラゴンボール』（DRAGON BALL）</Heading>
            </Card.Header>

            <Card.Body>
              <Text>
                『ドラゴンボール』（DRAGON
                BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
              </Text>
            </Card.Body>
          </Card.Root>
        ))}
    </InfiniteScrollArea>
  )
}

export const CustomLoading: Story = () => {
  const [count, setCount] = useState<number>(50)

  return (
    <InfiniteScrollArea
      loading={<>Loading…</>}
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
          <Card.Root key={index}>
            <Card.Header>
              <Heading size="xl">『ドラゴンボール』（DRAGON BALL）</Heading>
            </Card.Header>

            <Card.Body>
              <Text>
                『ドラゴンボール』（DRAGON
                BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
              </Text>
            </Card.Body>
          </Card.Root>
        ))}
    </InfiniteScrollArea>
  )
}
