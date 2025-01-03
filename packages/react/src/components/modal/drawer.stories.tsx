import type { Meta, StoryFn } from "@storybook/react"
import type { DrawerProps } from "./"
import { useState } from "react"
import { useDisclosure } from "../../hooks/use-disclosure"
import { Button } from "../button"
import { Container } from "../container"
import { Wrap } from "../flex"
import { Heading } from "../heading"
import { Image } from "../image"
import { Text } from "../text"
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from "./"

type Story = StoryFn<typeof Drawer>

const meta: Meta<typeof Drawer> = {
  component: Drawer,
  title: "Components / Drawer",
}

export default meta

export const Basic: Story = () => {
  const { open, onClose, onOpen } = useDisclosure()

  return (
    <>
      <Button onClick={onOpen}>Open Drawer</Button>

      <Drawer open={open} onClose={onClose}>
        <DrawerHeader>ドラゴンボール</DrawerHeader>

        <DrawerBody>
          『ドラゴンボール』（DRAGON
          BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
        </DrawerBody>

        <DrawerFooter>
          <Button variant="ghost" onClick={onClose}>
            とじる
          </Button>
          <Button colorScheme="primary">Wikipedia</Button>
        </DrawerFooter>
      </Drawer>
    </>
  )
}

export const WithDuration: Story = () => {
  const { open, onClose, onOpen } = useDisclosure()

  return (
    <>
      <Button onClick={onOpen}>Open Drawer</Button>

      <Drawer duration={0.7} open={open} onClose={onClose}>
        <DrawerHeader>ドラゴンボール</DrawerHeader>

        <DrawerBody>
          『ドラゴンボール』（DRAGON
          BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
        </DrawerBody>

        <DrawerFooter>
          <Button variant="ghost" onClick={onClose}>
            とじる
          </Button>
          <Button colorScheme="primary">Wikipedia</Button>
        </DrawerFooter>
      </Drawer>
    </>
  )
}

export const WithSize: Story = () => {
  const [size, setSize] = useState<DrawerProps["size"]>("md")
  const { open, onClose, onOpen } = useDisclosure()

  return (
    <>
      <Wrap gap="md">
        <Button
          onClick={() => {
            setSize("sm")
            onOpen()
          }}
        >
          Open sm Drawer
        </Button>

        <Button
          onClick={() => {
            setSize("md")
            onOpen()
          }}
        >
          Open md Drawer
        </Button>

        <Button
          onClick={() => {
            setSize("lg")
            onOpen()
          }}
        >
          Open lg Drawer
        </Button>

        <Button
          onClick={() => {
            setSize("xl")
            onOpen()
          }}
        >
          Open xl Drawer
        </Button>

        <Button
          onClick={() => {
            setSize("full")
            onOpen()
          }}
        >
          Open full Drawer
        </Button>
      </Wrap>

      <Drawer size={size} open={open} onClose={onClose}>
        <DrawerHeader>ドラゴンボール</DrawerHeader>

        <DrawerBody>
          『ドラゴンボール』（DRAGON
          BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
        </DrawerBody>

        <DrawerFooter>
          <Button variant="ghost" onClick={onClose}>
            とじる
          </Button>
          <Button colorScheme="primary">Wikipedia</Button>
        </DrawerFooter>
      </Drawer>
    </>
  )
}

export const WithPosition: Story = () => {
  const [placement, setPlacement] = useState<DrawerProps["placement"]>("right")
  const { open, onClose, onOpen } = useDisclosure()

  return (
    <>
      <Wrap gap="md">
        <Button
          onClick={() => {
            setPlacement("top")
            onOpen()
          }}
        >
          Open top Drawer
        </Button>

        <Button
          onClick={() => {
            setPlacement("left")
            onOpen()
          }}
        >
          Open left Drawer
        </Button>

        <Button
          onClick={() => {
            setPlacement("bottom")
            onOpen()
          }}
        >
          Open bottom Drawer
        </Button>

        <Button
          onClick={() => {
            setPlacement("right")
            onOpen()
          }}
        >
          Open right Drawer
        </Button>
      </Wrap>

      <Drawer open={open} placement={placement} onClose={onClose}>
        <DrawerHeader>ドラゴンボール</DrawerHeader>

        <DrawerBody>
          『ドラゴンボール』（DRAGON
          BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
        </DrawerBody>

        <DrawerFooter>
          <Button variant="ghost" onClick={onClose}>
            とじる
          </Button>
          <Button colorScheme="primary">Wikipedia</Button>
        </DrawerFooter>
      </Drawer>
    </>
  )
}

export const WithFullHeight: Story = () => {
  const { open, onClose, onOpen } = useDisclosure()

  return (
    <>
      <Button onClick={onOpen}>Open Drawer</Button>

      <Drawer fullHeight open={open} placement="bottom" onClose={onClose}>
        <DrawerHeader>ドラゴンボール</DrawerHeader>

        <DrawerBody>
          『ドラゴンボール』（DRAGON
          BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
        </DrawerBody>

        <DrawerFooter>
          <Button variant="ghost" onClick={onClose}>
            とじる
          </Button>
          <Button colorScheme="primary">Wikipedia</Button>
        </DrawerFooter>
      </Drawer>
    </>
  )
}

export const WithCloseOnDrag: Story = () => {
  const [placement, setPlacement] = useState<DrawerProps["placement"]>("right")
  const { open, onClose, onOpen } = useDisclosure()

  return (
    <>
      <Wrap gap="md">
        <Button
          onClick={() => {
            setPlacement("top")
            onOpen()
          }}
        >
          Open top Drawer
        </Button>

        <Button
          onClick={() => {
            setPlacement("left")
            onOpen()
          }}
        >
          Open left Drawer
        </Button>

        <Button
          onClick={() => {
            setPlacement("bottom")
            onOpen()
          }}
        >
          Open bottom Drawer
        </Button>

        <Button
          onClick={() => {
            setPlacement("right")
            onOpen()
          }}
        >
          Open right Drawer
        </Button>
      </Wrap>

      <Drawer closeOnDrag open={open} placement={placement} onClose={onClose}>
        <DrawerHeader>ドラゴンボール</DrawerHeader>

        <DrawerBody>
          『ドラゴンボール』（DRAGON
          BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
        </DrawerBody>

        <DrawerFooter>
          <Button variant="ghost" onClick={onClose}>
            とじる
          </Button>
          <Button colorScheme="primary">Wikipedia</Button>
        </DrawerFooter>
      </Drawer>
    </>
  )
}

export const HiddenDragBar: Story = () => {
  const { open, onClose, onOpen } = useDisclosure()

  return (
    <>
      <Button onClick={onOpen}>Open Drawer</Button>

      <Drawer
        closeOnDrag
        open={open}
        placement="bottom"
        withCloseButton
        withDragBar={false}
        onClose={onClose}
      >
        <DrawerHeader>ドラゴンボール</DrawerHeader>

        <DrawerBody>
          『ドラゴンボール』（DRAGON
          BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
        </DrawerBody>

        <DrawerFooter>
          <Button variant="ghost" onClick={onClose}>
            とじる
          </Button>
          <Button colorScheme="primary">Wikipedia</Button>
        </DrawerFooter>
      </Drawer>
    </>
  )
}

export const DisabledCloseButton: Story = () => {
  const { open, onClose, onOpen } = useDisclosure()

  return (
    <>
      <Button onClick={onOpen}>Open Drawer</Button>

      <Drawer open={open}>
        <DrawerHeader>ドラゴンボール</DrawerHeader>

        <DrawerBody>
          『ドラゴンボール』（DRAGON
          BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
        </DrawerBody>

        <DrawerFooter>
          <Button variant="ghost" onClick={onClose}>
            とじる
          </Button>
          <Button colorScheme="primary">Wikipedia</Button>
        </DrawerFooter>
      </Drawer>
    </>
  )
}

export const CustomCloseButton: Story = () => {
  const { open, onClose, onOpen } = useDisclosure()

  return (
    <>
      <Button onClick={onOpen}>Open Drawer</Button>

      <Drawer open={open} onClose={onClose}>
        <DrawerCloseButton color="gray.400" />

        <DrawerHeader>ドラゴンボール</DrawerHeader>

        <DrawerBody>
          『ドラゴンボール』（DRAGON
          BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
        </DrawerBody>

        <DrawerFooter>
          <Button variant="ghost" onClick={onClose}>
            とじる
          </Button>
          <Button colorScheme="primary">Wikipedia</Button>
        </DrawerFooter>
      </Drawer>
    </>
  )
}

export const DisabledOverlay: Story = () => {
  const { open, onClose, onOpen } = useDisclosure()

  return (
    <>
      <Button onClick={onOpen}>Open Drawer</Button>

      <Drawer open={open} withOverlay={false} onClose={onClose}>
        <DrawerHeader>ドラゴンボール</DrawerHeader>

        <DrawerBody>
          『ドラゴンボール』（DRAGON
          BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
        </DrawerBody>

        <DrawerFooter>
          <Button variant="ghost" onClick={onClose}>
            とじる
          </Button>
          <Button colorScheme="primary">Wikipedia</Button>
        </DrawerFooter>
      </Drawer>
    </>
  )
}

export const CustomOverlay: Story = () => {
  const { open, onClose, onOpen } = useDisclosure()

  return (
    <>
      <Button onClick={onOpen}>Open Drawer</Button>

      <Drawer open={open} onClose={onClose}>
        <DrawerOverlay backdropFilter="blur(10px)" bg="blackAlpha.300" />

        <DrawerHeader>ドラゴンボール</DrawerHeader>

        <DrawerBody>
          『ドラゴンボール』（DRAGON
          BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
        </DrawerBody>

        <DrawerFooter>
          <Button variant="ghost" onClick={onClose}>
            とじる
          </Button>
          <Button colorScheme="primary">Wikipedia</Button>
        </DrawerFooter>
      </Drawer>
    </>
  )
}

export const ScrollOnMount: Story = () => {
  const { open, onClose, onOpen } = useDisclosure()

  return (
    <>
      <Button onClick={onOpen}>Open Drawer</Button>

      <Container
        alignItems="center"
        border="1px solid"
        borderColor="inherit"
        boxShadow="md"
        gap="md"
        p="md"
        rounded="md"
        textAlign="center"
      >
        <Image
          src="https://dragon-ball-official.com/assets/img/intro/intro_2.png"
          alt="ドラゴンボール"
          maxW="sm"
        />

        <Heading size="xl">『ドラゴンボール』（DRAGON BALL）</Heading>

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
      </Container>

      <Drawer blockScrollOnMount={false} open={open} onClose={onClose}>
        <DrawerHeader>ドラゴンボール</DrawerHeader>

        <DrawerBody>
          『ドラゴンボール』（DRAGON
          BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
        </DrawerBody>

        <DrawerFooter>
          <Button variant="ghost" onClick={onClose}>
            とじる
          </Button>
          <Button colorScheme="primary">Wikipedia</Button>
        </DrawerFooter>
      </Drawer>
    </>
  )
}
