import { ComponentStory, ComponentMeta } from '@storybook/react'
import {
  Button,
  useDisclosure,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalProps,
  Wrap,
  Text,
  Container,
  Image,
  Heading,
} from '@yamada-ui/react'
import { useState } from 'react'

export default {
  title: 'Components / Overlay / Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>

export const basic: ComponentStory<typeof Modal> = () => {
  const [isOpen, onOpen, onClose] = useDisclosure()

  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalHeader>ドラゴンボール</ModalHeader>

        <ModalBody>
          『ドラゴンボール』（DRAGON
          BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
        </ModalBody>

        <ModalFooter>
          <Button variant='ghost' onClick={onClose}>
            とじる
          </Button>
          <Button colorStyle='primary'>Wikipadia</Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export const withSize: ComponentStory<typeof Modal> = () => {
  const [size, setSize] = useState<ModalProps['size']>('md')
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
          Open sm Modal
        </Button>

        <Button
          onClick={() => {
            setSize('md')
            onOpen()
          }}
        >
          Open md Modal
        </Button>

        <Button
          onClick={() => {
            setSize('lg')
            onOpen()
          }}
        >
          Open lg Modal
        </Button>

        <Button
          onClick={() => {
            setSize('xl')
            onOpen()
          }}
        >
          Open xl Modal
        </Button>

        <Button
          onClick={() => {
            setSize('full')
            onOpen()
          }}
        >
          Open full Modal
        </Button>
      </Wrap>

      <Modal isOpen={isOpen} onClose={onClose} size={size}>
        <ModalHeader>ドラゴンボール</ModalHeader>

        <ModalBody>
          『ドラゴンボール』（DRAGON
          BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
        </ModalBody>

        <ModalFooter>
          <Button variant='ghost' onClick={onClose}>
            とじる
          </Button>
          <Button colorStyle='primary'>Wikipadia</Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export const withPosition: ComponentStory<typeof Modal> = () => {
  const [position, setPosition] = useState<ModalProps['position']>('center')
  const [isOpen, onOpen, onClose] = useDisclosure()

  return (
    <>
      <Wrap gap='md'>
        <Button
          onClick={() => {
            setPosition('center')
            onOpen()
          }}
        >
          Open center Modal
        </Button>

        <Button
          onClick={() => {
            setPosition('top')
            onOpen()
          }}
        >
          Open top Modal
        </Button>

        <Button
          onClick={() => {
            setPosition('top-left')
            onOpen()
          }}
        >
          Open top & left Modal
        </Button>

        <Button
          onClick={() => {
            setPosition('left')
            onOpen()
          }}
        >
          Open left Modal
        </Button>

        <Button
          onClick={() => {
            setPosition('bottom-left')
            onOpen()
          }}
        >
          Open bottom & left Modal
        </Button>

        <Button
          onClick={() => {
            setPosition('bottom')
            onOpen()
          }}
        >
          Open bottom Modal
        </Button>

        <Button
          onClick={() => {
            setPosition('bottom-right')
            onOpen()
          }}
        >
          Open bottom & right Modal
        </Button>

        <Button
          onClick={() => {
            setPosition('right')
            onOpen()
          }}
        >
          Open right Modal
        </Button>

        <Button
          onClick={() => {
            setPosition('top-right')
            onOpen()
          }}
        >
          Open top & right Modal
        </Button>
      </Wrap>

      <Modal isOpen={isOpen} onClose={onClose} position={position}>
        <ModalHeader>ドラゴンボール</ModalHeader>

        <ModalBody>
          『ドラゴンボール』（DRAGON
          BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
        </ModalBody>

        <ModalFooter>
          <Button variant='ghost' onClick={onClose}>
            とじる
          </Button>
          <Button colorStyle='primary'>Wikipadia</Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export const disabledCloseButton: ComponentStory<typeof Modal> = () => {
  const [isOpen, onOpen, onClose] = useDisclosure()

  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen}>
        <ModalHeader>ドラゴンボール</ModalHeader>

        <ModalBody>
          『ドラゴンボール』（DRAGON
          BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
        </ModalBody>

        <ModalFooter>
          <Button variant='ghost' onClick={onClose}>
            とじる
          </Button>
          <Button colorStyle='primary'>Wikipadia</Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export const disabledOverlay: ComponentStory<typeof Modal> = () => {
  const [isOpen, onOpen, onClose] = useDisclosure()

  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose} overlay={false}>
        <ModalHeader>ドラゴンボール</ModalHeader>

        <ModalBody>
          『ドラゴンボール』（DRAGON
          BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
        </ModalBody>

        <ModalFooter>
          <Button variant='ghost' onClick={onClose}>
            とじる
          </Button>
          <Button colorStyle='primary'>Wikipadia</Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export const scrollBehavior: ComponentStory<typeof Modal> = () => {
  const [scrollBehavior, setScrollBehavior] = useState<ModalProps['scrollBehavior']>('inside')
  const [isOpen, onOpen, onClose] = useDisclosure()

  return (
    <>
      <Wrap gap='md'>
        <Button
          onClick={() => {
            setScrollBehavior('inside')
            onOpen()
          }}
        >
          Open inside scroll Modal
        </Button>

        <Button
          onClick={() => {
            setScrollBehavior('outside')
            onOpen()
          }}
        >
          Open outside scroll Modal
        </Button>
      </Wrap>

      <Modal isOpen={isOpen} onClose={onClose} scrollBehavior={scrollBehavior}>
        <ModalHeader>ドラゴンボール</ModalHeader>

        <ModalBody>
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
        </ModalBody>

        <ModalFooter>
          <Button variant='ghost' onClick={onClose}>
            とじる
          </Button>
          <Button colorStyle='primary'>Wikipadia</Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export const scrollOnMount: ComponentStory<typeof Modal> = () => {
  const [isOpen, onOpen, onClose] = useDisclosure()

  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Container
        p='md'
        gap='md'
        rounded='md'
        alignItems='center'
        textAlign='center'
        border='1px solid'
        borderColor={['border', 'blackAlpha.200']}
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

      <Modal isOpen={isOpen} onClose={onClose} blockScrollOnMount={false}>
        <ModalHeader>ドラゴンボール</ModalHeader>

        <ModalBody>
          『ドラゴンボール』（DRAGON
          BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
        </ModalBody>

        <ModalFooter>
          <Button variant='ghost' onClick={onClose}>
            とじる
          </Button>
          <Button colorStyle='primary'>Wikipadia</Button>
        </ModalFooter>
      </Modal>
    </>
  )
}
