import { ComponentStory, ComponentMeta } from '@storybook/react'
import {
  useDisclosure,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  DialogOverlay,
  DialogCloseButton,
  Wrap,
  Button,
  DialogProps,
  Container,
  Image,
  Heading,
  Text,
} from '@yamada-ui/react'
import { useState } from 'react'

export default {
  title: 'Components / Overlay / Dialog',
  component: Dialog,
} as ComponentMeta<typeof Dialog>

export const basic: ComponentStory<typeof Dialog> = () => {
  const [isOpen, onOpen, onClose] = useDisclosure()

  return (
    <>
      <Button onClick={onOpen}>Open Dialog</Button>

      <Dialog
        isOpen={isOpen}
        onClose={onClose}
        header='孫悟空'
        cancel='わけない'
        onCancel={onClose}
        success='わける'
        onSuccess={onClose}
      >
        だ…大地よ海よ　そして生きているすべての　みんな…
        このオラにほんのちょっとずつだけ元気をわけてくれ…！！！
      </Dialog>
    </>
  )
}

export const withDuration: ComponentStory<typeof Dialog> = () => {
  const [isOpen, onOpen, onClose] = useDisclosure()

  return (
    <>
      <Button onClick={onOpen}>Open Dialog</Button>

      <Dialog
        isOpen={isOpen}
        onClose={onClose}
        header='孫悟空'
        cancel='わけない'
        onCancel={onClose}
        success='わける'
        onSuccess={onClose}
        duration={0.4}
      >
        だ…大地よ海よ　そして生きているすべての　みんな…
        このオラにほんのちょっとずつだけ元気をわけてくれ…！！！
      </Dialog>
    </>
  )
}

export const customDialog: ComponentStory<typeof Dialog> = () => {
  const [isOpen, onOpen, onClose] = useDisclosure()

  return (
    <>
      <Button onClick={onOpen}>Open Dialog</Button>

      <Dialog isOpen={isOpen} onClose={onClose}>
        <DialogHeader>孫悟空</DialogHeader>

        <DialogBody>
          だ…大地よ海よ　そして生きているすべての　みんな…
          このオラにほんのちょっとずつだけ元気をわけてくれ…！！！
        </DialogBody>

        <DialogFooter>
          <Button variant='ghost' onClick={onClose}>
            わけない
          </Button>
          <Button colorScheme='primary' onClick={onClose}>
            わける
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  )
}

export const customHeader: ComponentStory<typeof Dialog> = () => {
  const [isOpen, onOpen, onClose] = useDisclosure()

  return (
    <>
      <Button onClick={onOpen}>Open Dialog</Button>

      <Dialog
        isOpen={isOpen}
        onClose={onClose}
        header={<Text color='orange.500'>孫悟空</Text>}
        cancel='わけない'
        onCancel={onClose}
        success='わける'
        onSuccess={onClose}
      >
        だ…大地よ海よ　そして生きているすべての　みんな…
        このオラにほんのちょっとずつだけ元気をわけてくれ…！！！
      </Dialog>
    </>
  )
}

export const customFooter: ComponentStory<typeof Dialog> = () => {
  const [isOpen, onOpen, onClose] = useDisclosure()

  return (
    <>
      <Button onClick={onOpen}>Open Dialog</Button>

      <Dialog
        isOpen={isOpen}
        onClose={onClose}
        header='孫悟空'
        footer={
          <>
            <Button variant='ghost' colorScheme='red' onClick={onClose}>
              わけない
            </Button>
            <Button variant='ghost' colorScheme='orange' onClick={onClose}>
              どちらでもよい
            </Button>
            <Button variant='ghost' colorScheme='blue' onClick={onClose}>
              わける
            </Button>
          </>
        }
      >
        だ…大地よ海よ　そして生きているすべての　みんな…
        このオラにほんのちょっとずつだけ元気をわけてくれ…！！！
      </Dialog>
    </>
  )
}

export const customButton: ComponentStory<typeof Dialog> = () => {
  const [isOpen, onOpen, onClose] = useDisclosure()

  return (
    <>
      <Button onClick={onOpen}>Open Dialog</Button>

      <Dialog
        isOpen={isOpen}
        onClose={onClose}
        header='孫悟空'
        cancel={{ variant: 'outline', colorScheme: 'red', children: 'わけない' }}
        onCancel={onClose}
        other={{ variant: 'outline', colorScheme: 'orange', children: 'どちらでもよい' }}
        onOther={onClose}
        success={{ variant: 'outline', colorScheme: 'blue', children: 'わける' }}
        onSuccess={onClose}
      >
        だ…大地よ海よ　そして生きているすべての　みんな…
        このオラにほんのちょっとずつだけ元気をわけてくれ…！！！
      </Dialog>
    </>
  )
}

export const useOtherButton: ComponentStory<typeof Dialog> = () => {
  const [isOpen, onOpen, onClose] = useDisclosure()

  return (
    <>
      <Button onClick={onOpen}>Open Dialog</Button>

      <Dialog
        isOpen={isOpen}
        onClose={onClose}
        header='孫悟空'
        cancel='わけない'
        onCancel={onClose}
        other='どちらでもよい'
        onOther={onClose}
        success='わける'
        onSuccess={onClose}
      >
        だ…大地よ海よ　そして生きているすべての　みんな…
        このオラにほんのちょっとずつだけ元気をわけてくれ…！！！
      </Dialog>
    </>
  )
}

export const withSize: ComponentStory<typeof Dialog> = () => {
  const [size, setSize] = useState<DialogProps['size']>('md')
  const [isOpen, onOpen, onClose] = useDisclosure()

  return (
    <>
      <Wrap gap='md'>
        <Button
          onClick={() => {
            setSize('sm')
            onOpen()
          }}
        >
          Open sm Dialog
        </Button>

        <Button
          onClick={() => {
            setSize('md')
            onOpen()
          }}
        >
          Open md Dialog
        </Button>

        <Button
          onClick={() => {
            setSize('lg')
            onOpen()
          }}
        >
          Open lg Dialog
        </Button>

        <Button
          onClick={() => {
            setSize('xl')
            onOpen()
          }}
        >
          Open xl Dialog
        </Button>

        <Button
          onClick={() => {
            setSize('full')
            onOpen()
          }}
        >
          Open full Dialog
        </Button>
      </Wrap>

      <Dialog
        isOpen={isOpen}
        onClose={onClose}
        size={size}
        header='孫悟空'
        cancel='わけない'
        onCancel={onClose}
        success='わける'
        onSuccess={onClose}
      >
        だ…大地よ海よ　そして生きているすべての　みんな…
        このオラにほんのちょっとずつだけ元気をわけてくれ…！！！
      </Dialog>
    </>
  )
}

export const withPlacement: ComponentStory<typeof Dialog> = () => {
  const [placement, setPlacement] = useState<DialogProps['placement']>('center')
  const [isOpen, onOpen, onClose] = useDisclosure()

  return (
    <>
      <Wrap gap='md'>
        <Button
          onClick={() => {
            setPlacement('center')
            onOpen()
          }}
        >
          Open center Dialog
        </Button>

        <Button
          onClick={() => {
            setPlacement('top')
            onOpen()
          }}
        >
          Open top Dialog
        </Button>

        <Button
          onClick={() => {
            setPlacement('top-left')
            onOpen()
          }}
        >
          Open top & left Dialog
        </Button>

        <Button
          onClick={() => {
            setPlacement('left')
            onOpen()
          }}
        >
          Open left Dialog
        </Button>

        <Button
          onClick={() => {
            setPlacement('bottom-left')
            onOpen()
          }}
        >
          Open bottom & left Dialog
        </Button>

        <Button
          onClick={() => {
            setPlacement('bottom')
            onOpen()
          }}
        >
          Open bottom Dialog
        </Button>

        <Button
          onClick={() => {
            setPlacement('bottom-right')
            onOpen()
          }}
        >
          Open bottom & right Dialog
        </Button>

        <Button
          onClick={() => {
            setPlacement('right')
            onOpen()
          }}
        >
          Open right Dialog
        </Button>

        <Button
          onClick={() => {
            setPlacement('top-right')
            onOpen()
          }}
        >
          Open top & right Dialog
        </Button>
      </Wrap>

      <Dialog
        isOpen={isOpen}
        onClose={onClose}
        placement={placement}
        header='孫悟空'
        cancel='わけない'
        onCancel={onClose}
        success='わける'
        onSuccess={onClose}
      >
        だ…大地よ海よ　そして生きているすべての　みんな…
        このオラにほんのちょっとずつだけ元気をわけてくれ…！！！
      </Dialog>
    </>
  )
}

export const withAnimation: ComponentStory<typeof Dialog> = () => {
  const [animation, setAnimation] = useState<DialogProps['animation']>('scale')
  const [isOpen, onOpen, onClose] = useDisclosure()

  return (
    <>
      <Wrap gap='md'>
        <Button
          onClick={() => {
            setAnimation('scale')
            onOpen()
          }}
        >
          Open scale Dialog
        </Button>

        <Button
          onClick={() => {
            setAnimation('top')
            onOpen()
          }}
        >
          Open top Dialog
        </Button>

        <Button
          onClick={() => {
            setAnimation('left')
            onOpen()
          }}
        >
          Open left Dialog
        </Button>

        <Button
          onClick={() => {
            setAnimation('bottom')
            onOpen()
          }}
        >
          Open bottom Dialog
        </Button>

        <Button
          onClick={() => {
            setAnimation('right')
            onOpen()
          }}
        >
          Open right Dialog
        </Button>
      </Wrap>

      <Dialog
        isOpen={isOpen}
        onClose={onClose}
        animation={animation}
        header='孫悟空'
        cancel='わけない'
        onCancel={onClose}
        success='わける'
        onSuccess={onClose}
      >
        だ…大地よ海よ　そして生きているすべての　みんな…
        このオラにほんのちょっとずつだけ元気をわけてくれ…！！！
      </Dialog>
    </>
  )
}

export const disabledCloseButton: ComponentStory<typeof Dialog> = () => {
  const [isOpen, onOpen, onClose] = useDisclosure()

  return (
    <>
      <Button onClick={onOpen}>Open Dialog</Button>

      <Dialog
        isOpen={isOpen}
        header='孫悟空'
        cancel='わけない'
        onCancel={onClose}
        success='わける'
        onSuccess={onClose}
      >
        だ…大地よ海よ　そして生きているすべての　みんな…
        このオラにほんのちょっとずつだけ元気をわけてくれ…！！！
      </Dialog>
    </>
  )
}

export const customCloseButton: ComponentStory<typeof Dialog> = () => {
  const [isOpen, onOpen, onClose] = useDisclosure()

  return (
    <>
      <Button onClick={onOpen}>Open Dialog</Button>

      <Dialog
        isOpen={isOpen}
        onClose={onClose}
        header='孫悟空'
        cancel='わけない'
        onCancel={onClose}
        success='わける'
        onSuccess={onClose}
      >
        <DialogCloseButton color='gray.400' />

        <Text>
          だ…大地よ海よ　そして生きているすべての　みんな…
          このオラにほんのちょっとずつだけ元気をわけてくれ…！！！
        </Text>
      </Dialog>
    </>
  )
}

export const disabledOverlay: ComponentStory<typeof Dialog> = () => {
  const [isOpen, onOpen, onClose] = useDisclosure()

  return (
    <>
      <Button onClick={onOpen}>Open Dialog</Button>

      <Dialog
        isOpen={isOpen}
        onClose={onClose}
        withOverlay={false}
        header='孫悟空'
        cancel='わけない'
        onCancel={onClose}
        success='わける'
        onSuccess={onClose}
      >
        だ…大地よ海よ　そして生きているすべての　みんな…
        このオラにほんのちょっとずつだけ元気をわけてくれ…！！！
      </Dialog>
    </>
  )
}

export const customOverlay: ComponentStory<typeof Dialog> = () => {
  const [isOpen, onOpen, onClose] = useDisclosure()

  return (
    <>
      <Button onClick={onOpen}>Open Dialog</Button>

      <Dialog
        isOpen={isOpen}
        onClose={onClose}
        header='孫悟空'
        cancel='わけない'
        onCancel={onClose}
        success='わける'
        onSuccess={onClose}
      >
        <DialogOverlay bg='blackAlpha.300' backdropFilter='blur(10px)' />

        <Text>
          だ…大地よ海よ　そして生きているすべての　みんな…
          このオラにほんのちょっとずつだけ元気をわけてくれ…！！！
        </Text>
      </Dialog>
    </>
  )
}

export const scrollOnMount: ComponentStory<typeof Dialog> = () => {
  const [isOpen, onOpen, onClose] = useDisclosure()

  return (
    <>
      <Button onClick={onOpen}>Open Dialog</Button>

      <Container
        p='md'
        gap='md'
        rounded='md'
        alignItems='center'
        textAlign='center'
        border='1px solid'
        borderColor='inherit'
        boxShadow='md'
      >
        <Image src='https://dragon-ball-official.com/assets/img/intro/intro_2.png' maxW='sm' />

        <Heading size='xl'>『ドラゴンボール』（DRAGON BALL）</Heading>

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
        isOpen={isOpen}
        onClose={onClose}
        header='孫悟空'
        cancel='わけない'
        onCancel={onClose}
        success='わける'
        onSuccess={onClose}
        blockScrollOnMount={false}
      >
        だ…大地よ海よ　そして生きているすべての　みんな…
        このオラにほんのちょっとずつだけ元気をわけてくれ…！！！
      </Dialog>
    </>
  )
}
