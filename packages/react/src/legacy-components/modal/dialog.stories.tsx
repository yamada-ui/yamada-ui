import type { Meta, StoryFn } from "@storybook/react"
import type { DialogProps } from "./"
import { useState } from "react"
import { useDisclosure } from "../../hooks/use-disclosure"
import { Button } from "../button"
import { Container } from "../container"
import { Wrap } from "../flex"
import { Heading } from "../heading"
import { Image } from "../image"
import { Text } from "../text"
import {
  Dialog,
  DialogBody,
  DialogCloseButton,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
} from "./"

type Story = StoryFn<typeof Dialog>

const meta: Meta<typeof Dialog> = {
  component: Dialog,
  title: "Components / Dialog",
}

export default meta

export const Basic: Story = () => {
  const { open, onClose, onOpen } = useDisclosure()

  return (
    <>
      <Button onClick={onOpen}>Open Dialog</Button>

      <Dialog
        cancel="わけない"
        header="孫悟空"
        open={open}
        success="わける"
        onCancel={onClose}
        onClose={onClose}
        onSuccess={onClose}
      >
        だ…大地よ海よ　そして生きているすべての　みんな…
        このオラにほんのちょっとずつだけ元気をわけてくれ…！！！
      </Dialog>
    </>
  )
}

export const WithDuration: Story = () => {
  const { open, onClose, onOpen } = useDisclosure()

  return (
    <>
      <Button onClick={onOpen}>Open Dialog</Button>

      <Dialog
        cancel="わけない"
        duration={0.4}
        header="孫悟空"
        open={open}
        success="わける"
        onCancel={onClose}
        onClose={onClose}
        onSuccess={onClose}
      >
        だ…大地よ海よ　そして生きているすべての　みんな…
        このオラにほんのちょっとずつだけ元気をわけてくれ…！！！
      </Dialog>
    </>
  )
}

export const CustomDialog: Story = () => {
  const { open, onClose, onOpen } = useDisclosure()

  return (
    <>
      <Button onClick={onOpen}>Open Dialog</Button>

      <Dialog open={open} onClose={onClose}>
        <DialogHeader>孫悟空</DialogHeader>

        <DialogBody>
          だ…大地よ海よ　そして生きているすべての　みんな…
          このオラにほんのちょっとずつだけ元気をわけてくれ…！！！
        </DialogBody>

        <DialogFooter>
          <Button variant="ghost" onClick={onClose}>
            わけない
          </Button>
          <Button colorScheme="primary" onClick={onClose}>
            わける
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  )
}

export const CustomHeader: Story = () => {
  const { open, onClose, onOpen } = useDisclosure()

  return (
    <>
      <Button onClick={onOpen}>Open Dialog</Button>

      <Dialog
        cancel="わけない"
        header={<Text color="orange.500">孫悟空</Text>}
        open={open}
        success="わける"
        onCancel={onClose}
        onClose={onClose}
        onSuccess={onClose}
      >
        だ…大地よ海よ　そして生きているすべての　みんな…
        このオラにほんのちょっとずつだけ元気をわけてくれ…！！！
      </Dialog>
    </>
  )
}

export const CustomFooter: Story = () => {
  const { open, onClose, onOpen } = useDisclosure()

  return (
    <>
      <Button onClick={onOpen}>Open Dialog</Button>

      <Dialog
        footer={
          <>
            <Button colorScheme="red" variant="ghost" onClick={onClose}>
              わけない
            </Button>
            <Button colorScheme="orange" variant="ghost" onClick={onClose}>
              どちらでもよい
            </Button>
            <Button colorScheme="blue" variant="ghost" onClick={onClose}>
              わける
            </Button>
          </>
        }
        header="孫悟空"
        open={open}
        onClose={onClose}
      >
        だ…大地よ海よ　そして生きているすべての　みんな…
        このオラにほんのちょっとずつだけ元気をわけてくれ…！！！
      </Dialog>
    </>
  )
}

export const CustomButton: Story = () => {
  const { open, onClose, onOpen } = useDisclosure()

  return (
    <>
      <Button onClick={onOpen}>Open Dialog</Button>

      <Dialog
        cancel={{
          colorScheme: "red",
          variant: "outline",
          children: "わけない",
        }}
        header="孫悟空"
        open={open}
        other={{
          colorScheme: "orange",
          variant: "outline",
          children: "どちらでもよい",
        }}
        success={{
          colorScheme: "blue",
          variant: "outline",
          children: "わける",
        }}
        onCancel={onClose}
        onClose={onClose}
        onOther={onClose}
        onSuccess={onClose}
      >
        だ…大地よ海よ　そして生きているすべての　みんな…
        このオラにほんのちょっとずつだけ元気をわけてくれ…！！！
      </Dialog>
    </>
  )
}

export const UseOtherButton: Story = () => {
  const { open, onClose, onOpen } = useDisclosure()

  return (
    <>
      <Button onClick={onOpen}>Open Dialog</Button>

      <Dialog
        cancel="わけない"
        header="孫悟空"
        open={open}
        other="どちらでもよい"
        success="わける"
        onCancel={onClose}
        onClose={onClose}
        onOther={onClose}
        onSuccess={onClose}
      >
        だ…大地よ海よ　そして生きているすべての　みんな…
        このオラにほんのちょっとずつだけ元気をわけてくれ…！！！
      </Dialog>
    </>
  )
}

export const WithSize: Story = () => {
  const [size, setSize] = useState<DialogProps["size"]>("md")
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
          Open sm Dialog
        </Button>

        <Button
          onClick={() => {
            setSize("md")
            onOpen()
          }}
        >
          Open md Dialog
        </Button>

        <Button
          onClick={() => {
            setSize("lg")
            onOpen()
          }}
        >
          Open lg Dialog
        </Button>

        <Button
          onClick={() => {
            setSize("xl")
            onOpen()
          }}
        >
          Open xl Dialog
        </Button>

        <Button
          onClick={() => {
            setSize("full")
            onOpen()
          }}
        >
          Open full Dialog
        </Button>
      </Wrap>

      <Dialog
        size={size}
        cancel="わけない"
        header="孫悟空"
        open={open}
        success="わける"
        onCancel={onClose}
        onClose={onClose}
        onSuccess={onClose}
      >
        だ…大地よ海よ　そして生きているすべての　みんな…
        このオラにほんのちょっとずつだけ元気をわけてくれ…！！！
      </Dialog>
    </>
  )
}

export const WithPlacement: Story = () => {
  const [placement, setPlacement] = useState<DialogProps["placement"]>("center")
  const { open, onClose, onOpen } = useDisclosure()

  return (
    <>
      <Wrap gap="md">
        <Button
          onClick={() => {
            setPlacement("center")
            onOpen()
          }}
        >
          Open center Dialog
        </Button>

        <Button
          onClick={() => {
            setPlacement("top")
            onOpen()
          }}
        >
          Open top Dialog
        </Button>

        <Button
          onClick={() => {
            setPlacement("top-left")
            onOpen()
          }}
        >
          Open top & left Dialog
        </Button>

        <Button
          onClick={() => {
            setPlacement("left")
            onOpen()
          }}
        >
          Open left Dialog
        </Button>

        <Button
          onClick={() => {
            setPlacement("bottom-left")
            onOpen()
          }}
        >
          Open bottom & left Dialog
        </Button>

        <Button
          onClick={() => {
            setPlacement("bottom")
            onOpen()
          }}
        >
          Open bottom Dialog
        </Button>

        <Button
          onClick={() => {
            setPlacement("bottom-right")
            onOpen()
          }}
        >
          Open bottom & right Dialog
        </Button>

        <Button
          onClick={() => {
            setPlacement("right")
            onOpen()
          }}
        >
          Open right Dialog
        </Button>

        <Button
          onClick={() => {
            setPlacement("top-right")
            onOpen()
          }}
        >
          Open top & right Dialog
        </Button>
      </Wrap>

      <Dialog
        cancel="わけない"
        header="孫悟空"
        open={open}
        placement={placement}
        success="わける"
        onCancel={onClose}
        onClose={onClose}
        onSuccess={onClose}
      >
        だ…大地よ海よ　そして生きているすべての　みんな…
        このオラにほんのちょっとずつだけ元気をわけてくれ…！！！
      </Dialog>
    </>
  )
}

export const WithAnimation: Story = () => {
  const [animation, setAnimation] = useState<DialogProps["animation"]>("scale")
  const { open, onClose, onOpen } = useDisclosure()

  return (
    <>
      <Wrap gap="md">
        <Button
          onClick={() => {
            setAnimation("scale")
            onOpen()
          }}
        >
          Open scale Dialog
        </Button>

        <Button
          onClick={() => {
            setAnimation("top")
            onOpen()
          }}
        >
          Open top Dialog
        </Button>

        <Button
          onClick={() => {
            setAnimation("left")
            onOpen()
          }}
        >
          Open left Dialog
        </Button>

        <Button
          onClick={() => {
            setAnimation("bottom")
            onOpen()
          }}
        >
          Open bottom Dialog
        </Button>

        <Button
          onClick={() => {
            setAnimation("right")
            onOpen()
          }}
        >
          Open right Dialog
        </Button>
      </Wrap>

      <Dialog
        animation={animation}
        cancel="わけない"
        header="孫悟空"
        open={open}
        success="わける"
        onCancel={onClose}
        onClose={onClose}
        onSuccess={onClose}
      >
        だ…大地よ海よ　そして生きているすべての　みんな…
        このオラにほんのちょっとずつだけ元気をわけてくれ…！！！
      </Dialog>
    </>
  )
}

export const DisabledCloseButton: Story = () => {
  const { open, onClose, onOpen } = useDisclosure()

  return (
    <>
      <Button onClick={onOpen}>Open Dialog</Button>

      <Dialog
        cancel="わけない"
        header="孫悟空"
        open={open}
        success="わける"
        onCancel={onClose}
        onSuccess={onClose}
      >
        だ…大地よ海よ　そして生きているすべての　みんな…
        このオラにほんのちょっとずつだけ元気をわけてくれ…！！！
      </Dialog>
    </>
  )
}

export const CustomCloseButton: Story = () => {
  const { open, onClose, onOpen } = useDisclosure()

  return (
    <>
      <Button onClick={onOpen}>Open Dialog</Button>

      <Dialog
        cancel="わけない"
        header="孫悟空"
        open={open}
        success="わける"
        onCancel={onClose}
        onClose={onClose}
        onSuccess={onClose}
      >
        <DialogCloseButton color="gray.400" />

        <Text>
          だ…大地よ海よ　そして生きているすべての　みんな…
          このオラにほんのちょっとずつだけ元気をわけてくれ…！！！
        </Text>
      </Dialog>
    </>
  )
}

export const DisabledOverlay: Story = () => {
  const { open, onClose, onOpen } = useDisclosure()

  return (
    <>
      <Button onClick={onOpen}>Open Dialog</Button>

      <Dialog
        cancel="わけない"
        header="孫悟空"
        open={open}
        success="わける"
        withOverlay={false}
        onCancel={onClose}
        onClose={onClose}
        onSuccess={onClose}
      >
        だ…大地よ海よ　そして生きているすべての　みんな…
        このオラにほんのちょっとずつだけ元気をわけてくれ…！！！
      </Dialog>
    </>
  )
}

export const CustomOverlay: Story = () => {
  const { open, onClose, onOpen } = useDisclosure()

  return (
    <>
      <Button onClick={onOpen}>Open Dialog</Button>

      <Dialog
        cancel="わけない"
        header="孫悟空"
        open={open}
        success="わける"
        onCancel={onClose}
        onClose={onClose}
        onSuccess={onClose}
      >
        <DialogOverlay backdropFilter="blur(10px)" bg="blackAlpha.300" />

        <Text>
          だ…大地よ海よ　そして生きているすべての　みんな…
          このオラにほんのちょっとずつだけ元気をわけてくれ…！！！
        </Text>
      </Dialog>
    </>
  )
}

export const ScrollOnMount: Story = () => {
  const { open, onClose, onOpen } = useDisclosure()

  return (
    <>
      <Button onClick={onOpen}>Open Dialog</Button>

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

      <Dialog
        blockScrollOnMount={false}
        cancel="わけない"
        header="孫悟空"
        open={open}
        success="わける"
        onCancel={onClose}
        onClose={onClose}
        onSuccess={onClose}
      >
        だ…大地よ海よ　そして生きているすべての　みんな…
        このオラにほんのちょっとずつだけ元気をわけてくれ…！！！
      </Dialog>
    </>
  )
}
