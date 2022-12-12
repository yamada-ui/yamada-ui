import { ComponentStory, ComponentMeta } from '@storybook/react'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Text,
  Grid,
  Button,
  Image,
  VStack,
} from '@yamada-ui/react'

export default {
  title: 'Components / Data Display / Card',
  component: Card,
} as ComponentMeta<typeof Card>

export const basic: ComponentStory<typeof Card> = () => {
  return (
    <Card>
      <CardHeader>
        <Heading size='md'>『ドラゴンボール』（DRAGON BALL）</Heading>
      </CardHeader>

      <CardBody>
        <Text>
          『ドラゴンボール』（DRAGON
          BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
        </Text>
      </CardBody>
    </Card>
  )
}

export const withSize: ComponentStory<typeof Card> = () => {
  return (
    <>
      <Card size='sm'>
        <CardHeader>
          <Heading size='md'>『ドラゴンボール』（DRAGON BALL）</Heading>
        </CardHeader>

        <CardBody>
          <Text>
            『ドラゴンボール』（DRAGON
            BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
          </Text>
        </CardBody>
      </Card>

      <Card size='md'>
        <CardHeader>
          <Heading size='md'>『ドラゴンボール』（DRAGON BALL）</Heading>
        </CardHeader>

        <CardBody>
          <Text>
            『ドラゴンボール』（DRAGON
            BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
          </Text>
        </CardBody>
      </Card>

      <Card size='normal'>
        <CardHeader>
          <Heading size='md'>『ドラゴンボール』（DRAGON BALL）</Heading>
        </CardHeader>

        <CardBody>
          <Text>
            『ドラゴンボール』（DRAGON
            BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
          </Text>
        </CardBody>
      </Card>

      <Card size='lg'>
        <CardHeader>
          <Heading size='md'>『ドラゴンボール』（DRAGON BALL）</Heading>
        </CardHeader>

        <CardBody>
          <Text>
            『ドラゴンボール』（DRAGON
            BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
          </Text>
        </CardBody>
      </Card>
    </>
  )
}

export const withVarint: ComponentStory<typeof Card> = () => {
  return (
    <>
      <Card variant='elevated'>
        <CardHeader>
          <Heading size='md'>『ドラゴンボール』（DRAGON BALL）</Heading>
        </CardHeader>

        <CardBody>
          <Text>
            『ドラゴンボール』（DRAGON
            BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
          </Text>
        </CardBody>
      </Card>

      <Card variant='outline'>
        <CardHeader>
          <Heading size='md'>『ドラゴンボール』（DRAGON BALL）</Heading>
        </CardHeader>

        <CardBody>
          <Text>
            『ドラゴンボール』（DRAGON
            BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
          </Text>
        </CardBody>
      </Card>

      <Card variant='subtle'>
        <CardHeader>
          <Heading size='md'>『ドラゴンボール』（DRAGON BALL）</Heading>
        </CardHeader>

        <CardBody>
          <Text>
            『ドラゴンボール』（DRAGON
            BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
          </Text>
        </CardBody>
      </Card>

      <Card variant='solid'>
        <CardHeader>
          <Heading size='md'>『ドラゴンボール』（DRAGON BALL）</Heading>
        </CardHeader>

        <CardBody>
          <Text>
            『ドラゴンボール』（DRAGON
            BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
          </Text>
        </CardBody>
      </Card>

      <Card variant='unstyled'>
        <CardHeader>
          <Heading size='md'>『ドラゴンボール』（DRAGON BALL）</Heading>
        </CardHeader>

        <CardBody>
          <Text>
            『ドラゴンボール』（DRAGON
            BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
          </Text>
        </CardBody>
      </Card>
    </>
  )
}

export const withColorStyle: ComponentStory<typeof Card> = () => {
  return (
    <>
      <Heading size='xl'>Subtle</Heading>

      <Grid w='full' templateColumns='repeat(4, 1fr)' gap='md'>
        <Card variant='subtle' colorStyle='primary'>
          <CardHeader>
            <Heading size='md'>Primary</Heading>
          </CardHeader>
          <CardBody>
            <Text>ColorStyle is Primary</Text>
          </CardBody>
        </Card>

        <Card variant='subtle' colorStyle='secondary'>
          <CardHeader>
            <Heading size='md'>Secondary</Heading>
          </CardHeader>
          <CardBody>
            <Text>ColorStyle is Secondary</Text>
          </CardBody>
        </Card>

        <Card variant='subtle' colorStyle='warning'>
          <CardHeader>
            <Heading size='md'>Warning</Heading>
          </CardHeader>
          <CardBody>
            <Text>ColorStyle is Warning</Text>
          </CardBody>
        </Card>

        <Card variant='subtle' colorStyle='danger'>
          <CardHeader>
            <Heading size='md'>Danger</Heading>
          </CardHeader>
          <CardBody>
            <Text>ColorStyle is Danger</Text>
          </CardBody>
        </Card>

        <Card variant='subtle' colorStyle='link'>
          <CardHeader>
            <Heading size='md'>Link</Heading>
          </CardHeader>
          <CardBody>
            <Text>ColorStyle is Link</Text>
          </CardBody>
        </Card>

        <Card variant='subtle' colorStyle='gray'>
          <CardHeader>
            <Heading size='md'>Gray</Heading>
          </CardHeader>
          <CardBody>
            <Text>ColorStyle is Gray</Text>
          </CardBody>
        </Card>

        <Card variant='subtle' colorStyle='red'>
          <CardHeader>
            <Heading size='md'>Red</Heading>
          </CardHeader>
          <CardBody>
            <Text>ColorStyle is Red</Text>
          </CardBody>
        </Card>

        <Card variant='subtle' colorStyle='orange'>
          <CardHeader>
            <Heading size='md'>Orange</Heading>
          </CardHeader>
          <CardBody>
            <Text>ColorStyle is Orange</Text>
          </CardBody>
        </Card>

        <Card variant='subtle' colorStyle='yellow'>
          <CardHeader>
            <Heading size='md'>Yellow</Heading>
          </CardHeader>
          <CardBody>
            <Text>ColorStyle is Yellow</Text>
          </CardBody>
        </Card>

        <Card variant='subtle' colorStyle='green'>
          <CardHeader>
            <Heading size='md'>Green</Heading>
          </CardHeader>
          <CardBody>
            <Text>ColorStyle is Green</Text>
          </CardBody>
        </Card>

        <Card variant='subtle' colorStyle='teal'>
          <CardHeader>
            <Heading size='md'>Teal</Heading>
          </CardHeader>
          <CardBody>
            <Text>ColorStyle is Teal</Text>
          </CardBody>
        </Card>

        <Card variant='subtle' colorStyle='blue'>
          <CardHeader>
            <Heading size='md'>Blue</Heading>
          </CardHeader>
          <CardBody>
            <Text>ColorStyle is Blue</Text>
          </CardBody>
        </Card>

        <Card variant='subtle' colorStyle='cyan'>
          <CardHeader>
            <Heading size='md'>Cyan</Heading>
          </CardHeader>
          <CardBody>
            <Text>ColorStyle is Cyan</Text>
          </CardBody>
        </Card>

        <Card variant='subtle' colorStyle='purple'>
          <CardHeader>
            <Heading size='md'>Purple</Heading>
          </CardHeader>
          <CardBody>
            <Text>ColorStyle is Purple</Text>
          </CardBody>
        </Card>

        <Card variant='subtle' colorStyle='pink'>
          <CardHeader>
            <Heading size='md'>pink</Heading>
          </CardHeader>
          <CardBody>
            <Text>ColorStyle is pink</Text>
          </CardBody>
        </Card>

        <Card variant='subtle' colorStyle='linkedin'>
          <CardHeader>
            <Heading size='md'>Linkedin</Heading>
          </CardHeader>
          <CardBody>
            <Text>ColorStyle is Linkedin</Text>
          </CardBody>
        </Card>

        <Card variant='subtle' colorStyle='facebook'>
          <CardHeader>
            <Heading size='md'>Facebook</Heading>
          </CardHeader>
          <CardBody>
            <Text>ColorStyle is Facebook</Text>
          </CardBody>
        </Card>

        <Card variant='subtle' colorStyle='messenger'>
          <CardHeader>
            <Heading size='md'>Messenger</Heading>
          </CardHeader>
          <CardBody>
            <Text>ColorStyle is Messenger</Text>
          </CardBody>
        </Card>

        <Card variant='subtle' colorStyle='whatsapp'>
          <CardHeader>
            <Heading size='md'>Whatsapp</Heading>
          </CardHeader>
          <CardBody>
            <Text>ColorStyle is Whatsapp</Text>
          </CardBody>
        </Card>

        <Card variant='subtle' colorStyle='twitter'>
          <CardHeader>
            <Heading size='md'>Twitter</Heading>
          </CardHeader>
          <CardBody>
            <Text>ColorStyle is Twitter</Text>
          </CardBody>
        </Card>

        <Card variant='subtle' colorStyle='line'>
          <CardHeader>
            <Heading size='md'>Line</Heading>
          </CardHeader>
          <CardBody>
            <Text>ColorStyle is Line</Text>
          </CardBody>
        </Card>

        <Card variant='subtle' colorStyle='instagram'>
          <CardHeader>
            <Heading size='md'>Instagram</Heading>
          </CardHeader>
          <CardBody>
            <Text>ColorStyle is Instagram</Text>
          </CardBody>
        </Card>

        <Card variant='subtle' colorStyle='youtube'>
          <CardHeader>
            <Heading size='md'>Youtube</Heading>
          </CardHeader>
          <CardBody>
            <Text>ColorStyle is Youtube</Text>
          </CardBody>
        </Card>
      </Grid>

      <Heading size='xl'>Solid</Heading>

      <Grid w='full' templateColumns='repeat(4, 1fr)' gap='md'>
        <Card variant='solid' colorStyle='primary'>
          <CardHeader>
            <Heading size='md'>Primary</Heading>
          </CardHeader>
          <CardBody>
            <Text>ColorStyle is Primary</Text>
          </CardBody>
        </Card>

        <Card variant='solid' colorStyle='secondary'>
          <CardHeader>
            <Heading size='md'>Secondary</Heading>
          </CardHeader>
          <CardBody>
            <Text>ColorStyle is Secondary</Text>
          </CardBody>
        </Card>

        <Card variant='solid' colorStyle='warning'>
          <CardHeader>
            <Heading size='md'>Warning</Heading>
          </CardHeader>
          <CardBody>
            <Text>ColorStyle is Warning</Text>
          </CardBody>
        </Card>

        <Card variant='solid' colorStyle='danger'>
          <CardHeader>
            <Heading size='md'>Danger</Heading>
          </CardHeader>
          <CardBody>
            <Text>ColorStyle is Danger</Text>
          </CardBody>
        </Card>

        <Card variant='solid' colorStyle='link'>
          <CardHeader>
            <Heading size='md'>Link</Heading>
          </CardHeader>
          <CardBody>
            <Text>ColorStyle is Link</Text>
          </CardBody>
        </Card>

        <Card variant='solid' colorStyle='gray'>
          <CardHeader>
            <Heading size='md'>Gray</Heading>
          </CardHeader>
          <CardBody>
            <Text>ColorStyle is Gray</Text>
          </CardBody>
        </Card>

        <Card variant='solid' colorStyle='red'>
          <CardHeader>
            <Heading size='md'>Red</Heading>
          </CardHeader>
          <CardBody>
            <Text>ColorStyle is Red</Text>
          </CardBody>
        </Card>

        <Card variant='solid' colorStyle='orange'>
          <CardHeader>
            <Heading size='md'>Orange</Heading>
          </CardHeader>
          <CardBody>
            <Text>ColorStyle is Orange</Text>
          </CardBody>
        </Card>

        <Card variant='solid' colorStyle='yellow'>
          <CardHeader>
            <Heading size='md'>Yellow</Heading>
          </CardHeader>
          <CardBody>
            <Text>ColorStyle is Yellow</Text>
          </CardBody>
        </Card>

        <Card variant='solid' colorStyle='green'>
          <CardHeader>
            <Heading size='md'>Green</Heading>
          </CardHeader>
          <CardBody>
            <Text>ColorStyle is Green</Text>
          </CardBody>
        </Card>

        <Card variant='solid' colorStyle='teal'>
          <CardHeader>
            <Heading size='md'>Teal</Heading>
          </CardHeader>
          <CardBody>
            <Text>ColorStyle is Teal</Text>
          </CardBody>
        </Card>

        <Card variant='solid' colorStyle='blue'>
          <CardHeader>
            <Heading size='md'>Blue</Heading>
          </CardHeader>
          <CardBody>
            <Text>ColorStyle is Blue</Text>
          </CardBody>
        </Card>

        <Card variant='solid' colorStyle='cyan'>
          <CardHeader>
            <Heading size='md'>Cyan</Heading>
          </CardHeader>
          <CardBody>
            <Text>ColorStyle is Cyan</Text>
          </CardBody>
        </Card>

        <Card variant='solid' colorStyle='purple'>
          <CardHeader>
            <Heading size='md'>Purple</Heading>
          </CardHeader>
          <CardBody>
            <Text>ColorStyle is Purple</Text>
          </CardBody>
        </Card>

        <Card variant='solid' colorStyle='pink'>
          <CardHeader>
            <Heading size='md'>pink</Heading>
          </CardHeader>
          <CardBody>
            <Text>ColorStyle is pink</Text>
          </CardBody>
        </Card>

        <Card variant='solid' colorStyle='linkedin'>
          <CardHeader>
            <Heading size='md'>Linkedin</Heading>
          </CardHeader>
          <CardBody>
            <Text>ColorStyle is Linkedin</Text>
          </CardBody>
        </Card>

        <Card variant='solid' colorStyle='facebook'>
          <CardHeader>
            <Heading size='md'>Facebook</Heading>
          </CardHeader>
          <CardBody>
            <Text>ColorStyle is Facebook</Text>
          </CardBody>
        </Card>

        <Card variant='solid' colorStyle='messenger'>
          <CardHeader>
            <Heading size='md'>Messenger</Heading>
          </CardHeader>
          <CardBody>
            <Text>ColorStyle is Messenger</Text>
          </CardBody>
        </Card>

        <Card variant='solid' colorStyle='whatsapp'>
          <CardHeader>
            <Heading size='md'>Whatsapp</Heading>
          </CardHeader>
          <CardBody>
            <Text>ColorStyle is Whatsapp</Text>
          </CardBody>
        </Card>

        <Card variant='solid' colorStyle='twitter'>
          <CardHeader>
            <Heading size='md'>Twitter</Heading>
          </CardHeader>
          <CardBody>
            <Text>ColorStyle is Twitter</Text>
          </CardBody>
        </Card>

        <Card variant='solid' colorStyle='line'>
          <CardHeader>
            <Heading size='md'>Line</Heading>
          </CardHeader>
          <CardBody>
            <Text>ColorStyle is Line</Text>
          </CardBody>
        </Card>

        <Card variant='solid' colorStyle='instagram'>
          <CardHeader>
            <Heading size='md'>Instagram</Heading>
          </CardHeader>
          <CardBody>
            <Text>ColorStyle is Instagram</Text>
          </CardBody>
        </Card>

        <Card variant='solid' colorStyle='youtube'>
          <CardHeader>
            <Heading size='md'>Youtube</Heading>
          </CardHeader>
          <CardBody>
            <Text>ColorStyle is Youtube</Text>
          </CardBody>
        </Card>
      </Grid>
    </>
  )
}

export const withImage: ComponentStory<typeof Card> = () => {
  return (
    <Card maxW='md'>
      <CardHeader justifyContent='center'>
        <Image
          src='https://www.toei.co.jp/movie/details/__icsFiles/afieldfile/2022/04/01/pub_honpos_wide_B_1.jpg'
          w='full'
          rounded='md'
        />
      </CardHeader>

      <CardBody>
        <Heading size='md'>『ドラゴンボール』（DRAGON BALL）</Heading>

        <Text>
          『ドラゴンボール』（DRAGON
          BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
        </Text>
      </CardBody>

      <CardFooter>
        <Button colorStyle='primary'>Wikipadia</Button>
      </CardFooter>
    </Card>
  )
}

export const horizonCard: ComponentStory<typeof Card> = () => {
  return (
    <Card direction={{ base: 'row', md: 'column' }} overflow='hidden' variant='outline'>
      <Image
        src='https://www.toei.co.jp/movie/details/__icsFiles/afieldfile/2022/04/01/pub_honpos_wide_B_1.jpg'
        objectFit='cover'
        maxW={{ base: '30%', md: '100%' }}
      />

      <VStack gap='0'>
        <CardHeader>
          <Heading size='md'>『ドラゴンボール』（DRAGON BALL）</Heading>
        </CardHeader>

        <CardBody>
          <Text>
            『ドラゴンボール』（DRAGON
            BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
          </Text>
        </CardBody>

        <CardFooter>
          <Button colorStyle='primary'>Wikipadia</Button>
        </CardFooter>
      </VStack>
    </Card>
  )
}

export const multiCards: ComponentStory<typeof Card> = () => {
  return (
    <Grid templateColumns='repeat(auto-fill, minmax(320px, 1fr))' gap='md'>
      <Card>
        <CardHeader>
          <Heading size='md'>『ドラゴンボール』（DRAGON BALL）</Heading>
        </CardHeader>

        <CardBody>
          <Text>
            『ドラゴンボール』（DRAGON
            BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
          </Text>
        </CardBody>

        <CardFooter>
          <Button colorStyle='primary'>Wikipadia</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <Heading size='md'>『ドラゴンボール』（DRAGON BALL）</Heading>
        </CardHeader>

        <CardBody>
          <Text>
            『ドラゴンボール』（DRAGON
            BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
          </Text>
        </CardBody>

        <CardFooter>
          <Button colorStyle='primary'>Wikipadia</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <Heading size='md'>『ドラゴンボール』（DRAGON BALL）</Heading>
        </CardHeader>

        <CardBody>
          <Text>
            『ドラゴンボール』（DRAGON
            BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
          </Text>
        </CardBody>

        <CardFooter>
          <Button colorStyle='primary'>Wikipadia</Button>
        </CardFooter>
      </Card>
    </Grid>
  )
}
