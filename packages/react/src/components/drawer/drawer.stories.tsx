import type { Meta, StoryFn } from "@storybook/react-vite"
import { useState } from "react"
import { useDisclosure } from "../../hooks/use-disclosure"
import { noop } from "../../utils"
import { Button } from "../button"
import { Container } from "../container"
import { For } from "../for"
import { Heading } from "../heading"
import { Image } from "../image"
import { Text } from "../text"
import { Wrap } from "../wrap"
import { Drawer } from "./"

type Story = StoryFn<typeof Drawer.Root>

const meta: Meta<typeof Drawer.Root> = {
  component: Drawer.Root,
  title: "Components / Drawer",
}

export default meta

export const Basic: Story = () => {
  return (
    <Drawer.Root>
      <Drawer.OpenTrigger>
        <Button>Open Drawer</Button>
      </Drawer.OpenTrigger>

      <Drawer.Content>
        <Drawer.Header>
          <Drawer.Title>ドラゴンボール</Drawer.Title>
        </Drawer.Header>

        <Drawer.Body>
          『ドラゴンボール』（DRAGON
          BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
        </Drawer.Body>

        <Drawer.Footer>
          <Drawer.CloseTrigger>
            <Button variant="ghost">とじる</Button>
          </Drawer.CloseTrigger>
          <Button>Wikipedia</Button>
        </Drawer.Footer>
      </Drawer.Content>
    </Drawer.Root>
  )
}

export const PropsPattern: Story = () => {
  return (
    <Drawer.Root
      body="『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"
      cancel="とじる"
      success="Wikipedia"
      title="ドラゴンボール"
      trigger={<Button>Open Drawer</Button>}
      onCancel={(onClose) => onClose()}
      onSuccess={noop}
    />
  )
}

export const Size: Story = () => {
  const [size, setSize] = useState<Drawer.RootProps["size"]>("md")
  const { open, onClose, onOpen } = useDisclosure()

  return (
    <>
      <Wrap gap="md">
        <For each={["xs", "sm", "md", "lg", "xl", "full"] as const}>
          {(size) => (
            <Button
              key={size}
              onClick={() => {
                setSize(size)
                onOpen()
              }}
            >
              Open "{size}" Drawer
            </Button>
          )}
        </For>
      </Wrap>

      <Drawer.Root size={size} open={open} onClose={onClose}>
        <Drawer.Content>
          <Drawer.Header>
            <Drawer.Title>ドラゴンボール</Drawer.Title>
          </Drawer.Header>

          <Drawer.Body>
            『ドラゴンボール』（DRAGON
            BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
          </Drawer.Body>

          <Drawer.Footer>
            <Button variant="ghost" onClick={onClose}>
              とじる
            </Button>
            <Button>Wikipedia</Button>
          </Drawer.Footer>
        </Drawer.Content>
      </Drawer.Root>
    </>
  )
}

export const Duration: Story = () => {
  return (
    <Drawer.Root duration={0.7}>
      <Drawer.OpenTrigger>
        <Button>Open Drawer</Button>
      </Drawer.OpenTrigger>

      <Drawer.Content>
        <Drawer.Header>
          <Drawer.Title>ドラゴンボール</Drawer.Title>
        </Drawer.Header>

        <Drawer.Body>
          『ドラゴンボール』（DRAGON
          BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
        </Drawer.Body>

        <Drawer.Footer>
          <Drawer.CloseTrigger>
            <Button variant="ghost">とじる</Button>
          </Drawer.CloseTrigger>
          <Button>Wikipedia</Button>
        </Drawer.Footer>
      </Drawer.Content>
    </Drawer.Root>
  )
}

export const Placement: Story = () => {
  const [placement, setPlacement] =
    useState<Drawer.RootProps["placement"]>("inline-end")
  const { open, onClose, onOpen } = useDisclosure()

  return (
    <>
      <Wrap gap="md">
        <For
          each={
            ["block-start", "block-end", "inline-start", "inline-end"] as const
          }
        >
          {(placement) => (
            <Button
              key={placement}
              onClick={() => {
                setPlacement(placement)
                onOpen()
              }}
            >
              Open "{placement}" Drawer
            </Button>
          )}
        </For>
      </Wrap>

      <Drawer.Root open={open} placement={placement} onClose={onClose}>
        <Drawer.Content>
          <Drawer.Header>
            <Drawer.Title>ドラゴンボール</Drawer.Title>
          </Drawer.Header>

          <Drawer.Body>
            『ドラゴンボール』（DRAGON
            BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
          </Drawer.Body>

          <Drawer.Footer>
            <Button variant="ghost" onClick={onClose}>
              とじる
            </Button>
            <Button>Wikipedia</Button>
          </Drawer.Footer>
        </Drawer.Content>
      </Drawer.Root>
    </>
  )
}

export const CloseOnDrag: Story = () => {
  const [placement, setPlacement] =
    useState<Drawer.RootProps["placement"]>("inline-end")
  const { open, onClose, onOpen } = useDisclosure()

  return (
    <>
      <Wrap gap="md">
        <For
          each={
            ["block-start", "block-end", "inline-start", "inline-end"] as const
          }
        >
          {(placement) => (
            <Button
              key={placement}
              onClick={() => {
                setPlacement(placement)
                onOpen()
              }}
            >
              Open "{placement}" Drawer
            </Button>
          )}
        </For>
      </Wrap>

      <Drawer.Root
        closeOnDrag
        open={open}
        placement={placement}
        onClose={onClose}
      >
        <Drawer.Content>
          <Drawer.Header>
            <Drawer.Title>ドラゴンボール</Drawer.Title>
          </Drawer.Header>

          <Drawer.Body>
            『ドラゴンボール』（DRAGON
            BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
          </Drawer.Body>

          <Drawer.Footer>
            <Button variant="ghost" onClick={onClose}>
              とじる
            </Button>
            <Button>Wikipedia</Button>
          </Drawer.Footer>
        </Drawer.Content>
      </Drawer.Root>
    </>
  )
}

export const HiddenDragBar: Story = () => {
  return (
    <Drawer.Root closeOnDrag withCloseButton withDragBar={false}>
      <Drawer.OpenTrigger>
        <Button>Open Drawer</Button>
      </Drawer.OpenTrigger>

      <Drawer.Content>
        <Drawer.Header>
          <Drawer.Title>ドラゴンボール</Drawer.Title>
        </Drawer.Header>

        <Drawer.Body>
          『ドラゴンボール』（DRAGON
          BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
        </Drawer.Body>

        <Drawer.Footer>
          <Drawer.CloseTrigger>
            <Button variant="ghost">とじる</Button>
          </Drawer.CloseTrigger>
          <Button>Wikipedia</Button>
        </Drawer.Footer>
      </Drawer.Content>
    </Drawer.Root>
  )
}

export const HiddenCloseButton: Story = () => {
  return (
    <Drawer.Root withCloseButton={false}>
      <Drawer.OpenTrigger>
        <Button>Open Drawer</Button>
      </Drawer.OpenTrigger>

      <Drawer.Content>
        <Drawer.Header>
          <Drawer.Title>ドラゴンボール</Drawer.Title>
        </Drawer.Header>

        <Drawer.Body>
          『ドラゴンボール』（DRAGON
          BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
        </Drawer.Body>

        <Drawer.Footer>
          <Drawer.CloseTrigger>
            <Button variant="ghost">とじる</Button>
          </Drawer.CloseTrigger>
          <Button>Wikipedia</Button>
        </Drawer.Footer>
      </Drawer.Content>
    </Drawer.Root>
  )
}

export const CustomCloseButton: Story = () => {
  return (
    <Drawer.Root>
      <Drawer.OpenTrigger>
        <Button>Open Drawer</Button>
      </Drawer.OpenTrigger>

      <Drawer.Content>
        <Drawer.CloseButton colorScheme="red" />

        <Drawer.Header>
          <Drawer.Title>ドラゴンボール</Drawer.Title>
        </Drawer.Header>

        <Drawer.Body>
          『ドラゴンボール』（DRAGON
          BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
        </Drawer.Body>

        <Drawer.Footer>
          <Drawer.CloseTrigger>
            <Button variant="ghost">とじる</Button>
          </Drawer.CloseTrigger>
          <Button>Wikipedia</Button>
        </Drawer.Footer>
      </Drawer.Content>
    </Drawer.Root>
  )
}

export const HiddenOverlay: Story = () => {
  return (
    <Drawer.Root withOverlay={false}>
      <Drawer.OpenTrigger>
        <Button>Open Drawer</Button>
      </Drawer.OpenTrigger>

      <Drawer.Content>
        <Drawer.Header>
          <Drawer.Title>ドラゴンボール</Drawer.Title>
        </Drawer.Header>

        <Drawer.Body>
          『ドラゴンボール』（DRAGON
          BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
        </Drawer.Body>

        <Drawer.Footer>
          <Drawer.CloseTrigger>
            <Button variant="ghost">とじる</Button>
          </Drawer.CloseTrigger>
          <Button>Wikipedia</Button>
        </Drawer.Footer>
      </Drawer.Content>
    </Drawer.Root>
  )
}

export const CustomOverlay: Story = () => {
  return (
    <Drawer.Root>
      <Drawer.OpenTrigger>
        <Button>Open Drawer</Button>
      </Drawer.OpenTrigger>

      <Drawer.Overlay backdropFilter="blur(4px)" />

      <Drawer.Content>
        <Drawer.Header>
          <Drawer.Title>ドラゴンボール</Drawer.Title>
        </Drawer.Header>

        <Drawer.Body>
          『ドラゴンボール』（DRAGON
          BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
        </Drawer.Body>

        <Drawer.Footer>
          <Drawer.CloseTrigger>
            <Button variant="ghost">とじる</Button>
          </Drawer.CloseTrigger>
          <Button>Wikipedia</Button>
        </Drawer.Footer>
      </Drawer.Content>
    </Drawer.Root>
  )
}

export const CustomButton: Story = () => {
  return (
    <Drawer.Root
      size="lg"
      body="『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"
      cancel={{ colorScheme: "danger", variant: "solid", children: "とじる" }}
      middle={{ colorScheme: "info", children: "あらすじ" }}
      success={{ colorScheme: "success", children: "Wikipedia" }}
      title="ドラゴンボール"
      trigger={<Button>Open Drawer</Button>}
    />
  )
}

export const ScrollOnMount: Story = () => {
  return (
    <>
      <Drawer.Root blockScrollOnMount={false}>
        <Drawer.OpenTrigger>
          <Button>Open Drawer</Button>
        </Drawer.OpenTrigger>

        <Drawer.Content>
          <Drawer.Header>
            <Drawer.Title>ドラゴンボール</Drawer.Title>
          </Drawer.Header>

          <Drawer.Body>
            『ドラゴンボール』（DRAGON
            BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
          </Drawer.Body>

          <Drawer.Footer>
            <Drawer.CloseTrigger>
              <Button variant="ghost">とじる</Button>
            </Drawer.CloseTrigger>
            <Button>Wikipedia</Button>
          </Drawer.Footer>
        </Drawer.Content>
      </Drawer.Root>

      <Container.Root
        alignItems="center"
        border="1px solid"
        borderColor="inherit"
        boxShadow="md"
        gap="md"
        p="md"
        rounded="md"
        textAlign="center"
      >
        <Container.Header flexDirection="column">
          <Image
            src="https://dragon-ball-official.com/assets/img/intro/intro_2.png"
            alt="ドラゴンボール"
            maxW="md"
          />
          <Heading size="3xl">『ドラゴンボール』（DRAGON BALL）</Heading>
        </Container.Header>

        <Container.Body>
          <Text>
            『ドラゴンボール』（DRAGON
            BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
          </Text>

          <Text>
            1986年から1996年までフジテレビ系列で『ドラゴンボール』、『ドラゴンボールZ』が放送され、11年間のシリーズ放送期間中、平均視聴率20%以上を記録した。また、全世界80か国以上で放送されるなど、世界中で絶大な人気を誇る、日本の漫画・アニメを代表する作品である。
            連載終了後もテレビアニメ・映画・ゲームなどが展開しており、映画『ドラゴンボール超
            ブロリー』が全世界興行収入135億円を記録し、各国で大ヒットした。
          </Text>

          <Text>
            1991年に『週刊少年ジャンプ21・22合併号』で行われた読者アンケートでは、同誌のアンケート史上最大得票となる1000通中815票を獲得し、1995年3・4合併号（1994年12月発売）で同誌の発行部数は653万部を記録。本作の連載終了後は同誌の部数が急速に減少していくなど、連載作品の中でも特に影響は大きかった。
          </Text>

          <Text>
            単行本の発行部数は完全版（2000万部）を含み国内で1億6000万部以上、全世界累計で2億6000万部を記録。
          </Text>

          <Text>
            ゲームソフトは現在までにミリオンセラーを10本以上輩出し、シリーズ累計販売本数は全世界5000万本に達する。『スーパードラゴンボールヒーローズ』はカード累計出荷枚数10億枚、登録ユーザー数は400万人を突破し、デジタルキッズカードゲーム市場でNo.1の人気タイトルである。
          </Text>

          <Text>
            2019年時点で、漫画・アニメシリーズ・ゲーム作品などを含めた総売上は230億ドル（約2兆5000億円）に達する。
          </Text>
        </Container.Body>
      </Container.Root>
    </>
  )
}
