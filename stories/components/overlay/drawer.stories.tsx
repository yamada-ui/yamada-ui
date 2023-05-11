import { ComponentStory, ComponentMeta } from '@storybook/react'
import {
  Button,
  useDisclosure,
  Drawer,
  DrawerProps,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Wrap,
  Container,
  Image,
  Heading,
  Text,
} from '@yamada-ui/react'
import { useState } from 'react'

export default {
  title: 'Components / Overlay / Drawer',
  component: Drawer,
} as ComponentMeta<typeof Drawer>

export const basic: ComponentStory<typeof Drawer> = () => {
  const [isOpen, onOpen, onClose] = useDisclosure()

  return (
    <>
      <Button onClick={onOpen}>Open Drawer</Button>

      <Drawer isOpen={isOpen} onClose={onClose}>
        <DrawerHeader>ドラゴンボール</DrawerHeader>

        <DrawerBody>
          『ドラゴンボール』（DRAGON
          BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
        </DrawerBody>

        <DrawerFooter>
          <Button variant='ghost' onClick={onClose}>
            とじる
          </Button>
          <Button colorStyle='primary'>Wikipadia</Button>
        </DrawerFooter>
      </Drawer>
    </>
  )
}

export const withDuration: ComponentStory<typeof Drawer> = () => {
  const [isOpen, onOpen, onClose] = useDisclosure()

  return (
    <>
      <Button onClick={onOpen}>Open Drawer</Button>

      <Drawer isOpen={isOpen} onClose={onClose} duration={0.7}>
        <DrawerHeader>ドラゴンボール</DrawerHeader>

        <DrawerBody>
          『ドラゴンボール』（DRAGON
          BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
        </DrawerBody>

        <DrawerFooter>
          <Button variant='ghost' onClick={onClose}>
            とじる
          </Button>
          <Button colorStyle='primary'>Wikipadia</Button>
        </DrawerFooter>
      </Drawer>
    </>
  )
}

export const withSize: ComponentStory<typeof Drawer> = () => {
  const [size, setSize] = useState<DrawerProps['size']>('md')
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
          Open sm Drawer
        </Button>

        <Button
          onClick={() => {
            setSize('md')
            onOpen()
          }}
        >
          Open md Drawer
        </Button>

        <Button
          onClick={() => {
            setSize('lg')
            onOpen()
          }}
        >
          Open lg Drawer
        </Button>

        <Button
          onClick={() => {
            setSize('xl')
            onOpen()
          }}
        >
          Open xl Drawer
        </Button>

        <Button
          onClick={() => {
            setSize('full')
            onOpen()
          }}
        >
          Open full Drawer
        </Button>
      </Wrap>

      <Drawer isOpen={isOpen} onClose={onClose} size={size}>
        <DrawerHeader>ドラゴンボール</DrawerHeader>

        <DrawerBody>
          『ドラゴンボール』（DRAGON
          BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
        </DrawerBody>

        <DrawerFooter>
          <Button variant='ghost' onClick={onClose}>
            とじる
          </Button>
          <Button colorStyle='primary'>Wikipadia</Button>
        </DrawerFooter>
      </Drawer>
    </>
  )
}

export const withPosition: ComponentStory<typeof Drawer> = () => {
  const [placement, setPlacement] = useState<DrawerProps['placement']>('right')
  const [isOpen, onOpen, onClose] = useDisclosure()

  return (
    <>
      <Wrap gap='md'>
        <Button
          onClick={() => {
            setPlacement('top')
            onOpen()
          }}
        >
          Open top Drawer
        </Button>

        <Button
          onClick={() => {
            setPlacement('left')
            onOpen()
          }}
        >
          Open left Drawer
        </Button>

        <Button
          onClick={() => {
            setPlacement('bottom')
            onOpen()
          }}
        >
          Open bottom Drawer
        </Button>

        <Button
          onClick={() => {
            setPlacement('right')
            onOpen()
          }}
        >
          Open right Drawer
        </Button>
      </Wrap>

      <Drawer isOpen={isOpen} onClose={onClose} placement={placement}>
        <DrawerHeader>ドラゴンボール</DrawerHeader>

        <DrawerBody>
          『ドラゴンボール』（DRAGON
          BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
        </DrawerBody>

        <DrawerFooter>
          <Button variant='ghost' onClick={onClose}>
            とじる
          </Button>
          <Button colorStyle='primary'>Wikipadia</Button>
        </DrawerFooter>
      </Drawer>
    </>
  )
}

export const withFullHeight: ComponentStory<typeof Drawer> = () => {
  const [isOpen, onOpen, onClose] = useDisclosure()

  return (
    <>
      <Button onClick={onOpen}>Open Drawer</Button>

      <Drawer isOpen={isOpen} onClose={onClose} placement='bottom' isFullHeight>
        <DrawerHeader>ドラゴンボール</DrawerHeader>

        <DrawerBody>
          『ドラゴンボール』（DRAGON
          BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
        </DrawerBody>

        <DrawerFooter>
          <Button variant='ghost' onClick={onClose}>
            とじる
          </Button>
          <Button colorStyle='primary'>Wikipadia</Button>
        </DrawerFooter>
      </Drawer>
    </>
  )
}

export const disabledCloseButton: ComponentStory<typeof Drawer> = () => {
  const [isOpen, onOpen, onClose] = useDisclosure()

  return (
    <>
      <Button onClick={onOpen}>Open Drawer</Button>

      <Drawer isOpen={isOpen}>
        <DrawerHeader>ドラゴンボール</DrawerHeader>

        <DrawerBody>
          『ドラゴンボール』（DRAGON
          BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
        </DrawerBody>

        <DrawerFooter>
          <Button variant='ghost' onClick={onClose}>
            とじる
          </Button>
          <Button colorStyle='primary'>Wikipadia</Button>
        </DrawerFooter>
      </Drawer>
    </>
  )
}

export const customCloseButton: ComponentStory<typeof Drawer> = () => {
  const [isOpen, onOpen, onClose] = useDisclosure()

  return (
    <>
      <Button onClick={onOpen}>Open Drawer</Button>

      <Drawer isOpen={isOpen} onClose={onClose}>
        <DrawerCloseButton color='gray.400' />

        <DrawerHeader>ドラゴンボール</DrawerHeader>

        <DrawerBody>
          『ドラゴンボール』（DRAGON
          BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
        </DrawerBody>

        <DrawerFooter>
          <Button variant='ghost' onClick={onClose}>
            とじる
          </Button>
          <Button colorStyle='primary'>Wikipadia</Button>
        </DrawerFooter>
      </Drawer>
    </>
  )
}

export const disabledOverlay: ComponentStory<typeof Drawer> = () => {
  const [isOpen, onOpen, onClose] = useDisclosure()

  return (
    <>
      <Button onClick={onOpen}>Open Drawer</Button>

      <Drawer isOpen={isOpen} onClose={onClose} withOverlay={false}>
        <DrawerHeader>ドラゴンボール</DrawerHeader>

        <DrawerBody>
          『ドラゴンボール』（DRAGON
          BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
        </DrawerBody>

        <DrawerFooter>
          <Button variant='ghost' onClick={onClose}>
            とじる
          </Button>
          <Button colorStyle='primary'>Wikipadia</Button>
        </DrawerFooter>
      </Drawer>
    </>
  )
}

export const customOverlay: ComponentStory<typeof Drawer> = () => {
  const [isOpen, onOpen, onClose] = useDisclosure()

  return (
    <>
      <Button onClick={onOpen}>Open Drawer</Button>

      <Drawer isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay bg='blackAlpha.300' backdropFilter='blur(10px)' />

        <DrawerHeader>ドラゴンボール</DrawerHeader>

        <DrawerBody>
          『ドラゴンボール』（DRAGON
          BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
        </DrawerBody>

        <DrawerFooter>
          <Button variant='ghost' onClick={onClose}>
            とじる
          </Button>
          <Button colorStyle='primary'>Wikipadia</Button>
        </DrawerFooter>
      </Drawer>
    </>
  )
}

export const scrollOnMount: ComponentStory<typeof Drawer> = () => {
  const [isOpen, onOpen, onClose] = useDisclosure()

  return (
    <>
      <Button onClick={onOpen}>Open Drawer</Button>

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

      <Drawer isOpen={isOpen} onClose={onClose} blockScrollOnMount={false}>
        <DrawerHeader>ドラゴンボール</DrawerHeader>

        <DrawerBody>
          『ドラゴンボール』（DRAGON
          BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
        </DrawerBody>

        <DrawerFooter>
          <Button variant='ghost' onClick={onClose}>
            とじる
          </Button>
          <Button colorStyle='primary'>Wikipadia</Button>
        </DrawerFooter>
      </Drawer>
    </>
  )
}
