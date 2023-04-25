import { faArrowLeft, faArrowRight, faPoo } from '@fortawesome/free-solid-svg-icons'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import {
  Carousel,
  CarouselSlide,
  CarouselControlNext,
  CarouselControlPrev,
  CarouselIndicators,
  Progress,
  FontAwesomeIcon,
  Center,
  Card,
  CardHeader,
  Image,
  CardBody,
  Heading,
  Text,
  CardFooter,
  Button,
} from '@yamada-ui/react'
import { useState } from 'react'

export default {
  title: 'Components / Data Display / Carousel',
  component: Carousel,
} as ComponentMeta<typeof Carousel>

export const basic: ComponentStory<typeof Carousel> = () => {
  return (
    <Carousel>
      <CarouselSlide as={Center} bg='primary'>
        1
      </CarouselSlide>
      <CarouselSlide as={Center} bg='secondary'>
        2
      </CarouselSlide>
      <CarouselSlide as={Center} bg='warning'>
        3
      </CarouselSlide>
      <CarouselSlide as={Center} bg='danger'>
        4
      </CarouselSlide>
    </Carousel>
  )
}

export const withSize: ComponentStory<typeof Carousel> = () => {
  return (
    <>
      <Carousel size='sm'>
        <CarouselSlide as={Center} bg='primary'>
          1
        </CarouselSlide>
        <CarouselSlide as={Center} bg='secondary'>
          2
        </CarouselSlide>
        <CarouselSlide as={Center} bg='warning'>
          3
        </CarouselSlide>
        <CarouselSlide as={Center} bg='danger'>
          4
        </CarouselSlide>
      </Carousel>

      <Carousel size='md'>
        <CarouselSlide as={Center} bg='primary'>
          1
        </CarouselSlide>
        <CarouselSlide as={Center} bg='secondary'>
          2
        </CarouselSlide>
        <CarouselSlide as={Center} bg='warning'>
          3
        </CarouselSlide>
        <CarouselSlide as={Center} bg='danger'>
          4
        </CarouselSlide>
      </Carousel>

      <Carousel size='lg'>
        <CarouselSlide as={Center} bg='primary'>
          1
        </CarouselSlide>
        <CarouselSlide as={Center} bg='secondary'>
          2
        </CarouselSlide>
        <CarouselSlide as={Center} bg='warning'>
          3
        </CarouselSlide>
        <CarouselSlide as={Center} bg='danger'>
          4
        </CarouselSlide>
      </Carousel>

      <Carousel size='xl'>
        <CarouselSlide as={Center} bg='primary'>
          1
        </CarouselSlide>
        <CarouselSlide as={Center} bg='secondary'>
          2
        </CarouselSlide>
        <CarouselSlide as={Center} bg='warning'>
          3
        </CarouselSlide>
        <CarouselSlide as={Center} bg='danger'>
          4
        </CarouselSlide>
      </Carousel>
    </>
  )
}

export const withOrientation: ComponentStory<typeof Carousel> = () => {
  return (
    <>
      <Carousel orientation='horizontal'>
        <CarouselSlide as={Center} bg='primary'>
          1
        </CarouselSlide>
        <CarouselSlide as={Center} bg='secondary'>
          2
        </CarouselSlide>
        <CarouselSlide as={Center} bg='warning'>
          3
        </CarouselSlide>
        <CarouselSlide as={Center} bg='danger'>
          4
        </CarouselSlide>
      </Carousel>

      <Carousel orientation='vertical'>
        <CarouselSlide as={Center} bg='primary'>
          1
        </CarouselSlide>
        <CarouselSlide as={Center} bg='secondary'>
          2
        </CarouselSlide>
        <CarouselSlide as={Center} bg='warning'>
          3
        </CarouselSlide>
        <CarouselSlide as={Center} bg='danger'>
          4
        </CarouselSlide>
      </Carousel>
    </>
  )
}

export const withDefaultIndex: ComponentStory<typeof Carousel> = () => {
  return (
    <Carousel defaultIndex={1}>
      <CarouselSlide as={Center} bg='primary'>
        1
      </CarouselSlide>
      <CarouselSlide as={Center} bg='secondary'>
        2
      </CarouselSlide>
      <CarouselSlide as={Center} bg='warning'>
        3
      </CarouselSlide>
      <CarouselSlide as={Center} bg='danger'>
        4
      </CarouselSlide>
    </Carousel>
  )
}

export const withGap: ComponentStory<typeof Carousel> = () => {
  return (
    <Carousel gap={0}>
      <CarouselSlide as={Center} bg='primary'>
        1
      </CarouselSlide>
      <CarouselSlide as={Center} bg='secondary'>
        2
      </CarouselSlide>
      <CarouselSlide as={Center} bg='warning'>
        3
      </CarouselSlide>
      <CarouselSlide as={Center} bg='danger'>
        4
      </CarouselSlide>
    </Carousel>
  )
}

export const withSpeed: ComponentStory<typeof Carousel> = () => {
  return (
    <Carousel speed={50}>
      <CarouselSlide as={Center} bg='primary'>
        1
      </CarouselSlide>
      <CarouselSlide as={Center} bg='secondary'>
        2
      </CarouselSlide>
      <CarouselSlide as={Center} bg='warning'>
        3
      </CarouselSlide>
      <CarouselSlide as={Center} bg='danger'>
        4
      </CarouselSlide>
    </Carousel>
  )
}

export const withSlideSize: ComponentStory<typeof Carousel> = () => {
  return (
    <Carousel slideSize='50%'>
      <CarouselSlide as={Center} bg='primary'>
        1
      </CarouselSlide>
      <CarouselSlide as={Center} bg='secondary' size='100%'>
        2
      </CarouselSlide>
      <CarouselSlide as={Center} bg='warning'>
        3
      </CarouselSlide>
      <CarouselSlide as={Center} bg='danger'>
        4
      </CarouselSlide>
    </Carousel>
  )
}

export const withAlign: ComponentStory<typeof Carousel> = () => {
  return (
    <>
      <Carousel slideSize='50%' align='center'>
        <CarouselSlide as={Center} bg='primary'>
          1
        </CarouselSlide>
        <CarouselSlide as={Center} bg='secondary'>
          2
        </CarouselSlide>
        <CarouselSlide as={Center} bg='warning'>
          3
        </CarouselSlide>
        <CarouselSlide as={Center} bg='danger'>
          4
        </CarouselSlide>
      </Carousel>

      <Carousel slideSize='50%' align='start'>
        <CarouselSlide as={Center} bg='primary'>
          1
        </CarouselSlide>
        <CarouselSlide as={Center} bg='secondary'>
          2
        </CarouselSlide>
        <CarouselSlide as={Center} bg='warning'>
          3
        </CarouselSlide>
        <CarouselSlide as={Center} bg='danger'>
          4
        </CarouselSlide>
      </Carousel>

      <Carousel slideSize='50%' align='end'>
        <CarouselSlide as={Center} bg='primary'>
          1
        </CarouselSlide>
        <CarouselSlide as={Center} bg='secondary'>
          2
        </CarouselSlide>
        <CarouselSlide as={Center} bg='warning'>
          3
        </CarouselSlide>
        <CarouselSlide as={Center} bg='danger'>
          4
        </CarouselSlide>
      </Carousel>
    </>
  )
}

export const withSlidesToScroll: ComponentStory<typeof Carousel> = () => {
  return (
    <Carousel slideSize='33.3%' slidesToScroll={3} loop={false}>
      <CarouselSlide as={Center} bg='primary'>
        1
      </CarouselSlide>
      <CarouselSlide as={Center} bg='secondary'>
        2
      </CarouselSlide>
      <CarouselSlide as={Center} bg='warning'>
        3
      </CarouselSlide>
      <CarouselSlide as={Center} bg='danger'>
        4
      </CarouselSlide>
      <CarouselSlide as={Center} bg='primary'>
        5
      </CarouselSlide>
      <CarouselSlide as={Center} bg='secondary'>
        6
      </CarouselSlide>
      <CarouselSlide as={Center} bg='danger'>
        7
      </CarouselSlide>
      <CarouselSlide as={Center} bg='primary'>
        8
      </CarouselSlide>
      <CarouselSlide as={Center} bg='secondary'>
        9
      </CarouselSlide>
    </Carousel>
  )
}

export const withCard: ComponentStory<typeof Carousel> = () => {
  return (
    <Carousel
      slideSize='50%'
      align='start'
      slidesToScroll={2}
      h='auto'
      controls={{ colorStyle: 'whiteAlpha', color: 'white' }}
    >
      <CarouselSlide as={Card} variant='subtle'>
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
      </CarouselSlide>

      <CarouselSlide as={Card} variant='subtle'>
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
      </CarouselSlide>

      <CarouselSlide as={Card} variant='subtle'>
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
      </CarouselSlide>

      <CarouselSlide as={Card} variant='subtle'>
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
      </CarouselSlide>
    </Carousel>
  )
}

export const withAutoplay: ComponentStory<typeof Carousel> = () => {
  return (
    <Carousel autoplay loop={false}>
      <CarouselSlide as={Center} bg='primary'>
        1
      </CarouselSlide>
      <CarouselSlide as={Center} bg='secondary'>
        2
      </CarouselSlide>
      <CarouselSlide as={Center} bg='warning'>
        3
      </CarouselSlide>
      <CarouselSlide as={Center} bg='danger'>
        4
      </CarouselSlide>
    </Carousel>
  )
}

export const withDelay: ComponentStory<typeof Carousel> = () => {
  return (
    <Carousel autoplay delay={1000}>
      <CarouselSlide as={Center} bg='primary'>
        1
      </CarouselSlide>
      <CarouselSlide as={Center} bg='secondary'>
        2
      </CarouselSlide>
      <CarouselSlide as={Center} bg='warning'>
        3
      </CarouselSlide>
      <CarouselSlide as={Center} bg='danger'>
        4
      </CarouselSlide>
    </Carousel>
  )
}

export const withDragFree: ComponentStory<typeof Carousel> = () => {
  return (
    <Carousel dragFree>
      <CarouselSlide as={Center} bg='primary'>
        1
      </CarouselSlide>
      <CarouselSlide as={Center} bg='secondary'>
        2
      </CarouselSlide>
      <CarouselSlide as={Center} bg='warning'>
        3
      </CarouselSlide>
      <CarouselSlide as={Center} bg='danger'>
        4
      </CarouselSlide>
    </Carousel>
  )
}

export const withScrollProgress: ComponentStory<typeof Carousel> = () => {
  const [value, onScrollProgress] = useState<number>(0)

  return (
    <>
      <Carousel loop={false} dragFree onScrollProgress={onScrollProgress}>
        <CarouselSlide as={Center} bg='primary'>
          1
        </CarouselSlide>
        <CarouselSlide as={Center} bg='secondary'>
          2
        </CarouselSlide>
        <CarouselSlide as={Center} bg='warning'>
          3
        </CarouselSlide>
        <CarouselSlide as={Center} bg='danger'>
          4
        </CarouselSlide>
      </Carousel>

      <Progress value={value} colorStyle='gray' />
    </>
  )
}

export const disabledIncludeGapInSize: ComponentStory<typeof Carousel> = () => {
  return (
    <Carousel slideSize='50%' includeGapInSize={false}>
      <CarouselSlide as={Center} bg='primary'>
        1
      </CarouselSlide>
      <CarouselSlide as={Center} bg='secondary'>
        2
      </CarouselSlide>
      <CarouselSlide as={Center} bg='warning'>
        3
      </CarouselSlide>
      <CarouselSlide as={Center} bg='danger'>
        4
      </CarouselSlide>
    </Carousel>
  )
}

export const disabledLoop: ComponentStory<typeof Carousel> = () => {
  return (
    <Carousel loop={false}>
      <CarouselSlide as={Center} bg='primary'>
        1
      </CarouselSlide>
      <CarouselSlide as={Center} bg='secondary'>
        2
      </CarouselSlide>
      <CarouselSlide as={Center} bg='warning'>
        3
      </CarouselSlide>
      <CarouselSlide as={Center} bg='danger'>
        4
      </CarouselSlide>
    </Carousel>
  )
}

export const disabledDraggable: ComponentStory<typeof Carousel> = () => {
  return (
    <Carousel draggable={false}>
      <CarouselSlide as={Center} bg='primary'>
        1
      </CarouselSlide>
      <CarouselSlide as={Center} bg='secondary'>
        2
      </CarouselSlide>
      <CarouselSlide as={Center} bg='warning'>
        3
      </CarouselSlide>
      <CarouselSlide as={Center} bg='danger'>
        4
      </CarouselSlide>
    </Carousel>
  )
}

export const disabledStopMouseEnterAutoplay: ComponentStory<typeof Carousel> = () => {
  return (
    <Carousel autoplay stopMouseEnterAutoplay={false}>
      <CarouselSlide as={Center} bg='primary'>
        1
      </CarouselSlide>
      <CarouselSlide as={Center} bg='secondary'>
        2
      </CarouselSlide>
      <CarouselSlide as={Center} bg='warning'>
        3
      </CarouselSlide>
      <CarouselSlide as={Center} bg='danger'>
        4
      </CarouselSlide>
    </Carousel>
  )
}

export const disabledControlButton: ComponentStory<typeof Carousel> = () => {
  return (
    <Carousel withControls={false}>
      <CarouselSlide as={Center} bg='primary'>
        1
      </CarouselSlide>
      <CarouselSlide as={Center} bg='secondary'>
        2
      </CarouselSlide>
      <CarouselSlide as={Center} bg='warning'>
        3
      </CarouselSlide>
      <CarouselSlide as={Center} bg='danger'>
        4
      </CarouselSlide>
    </Carousel>
  )
}

export const disabledIndicators: ComponentStory<typeof Carousel> = () => {
  return (
    <Carousel withIndicators={false}>
      <CarouselSlide as={Center} bg='primary'>
        1
      </CarouselSlide>
      <CarouselSlide as={Center} bg='secondary'>
        2
      </CarouselSlide>
      <CarouselSlide as={Center} bg='warning'>
        3
      </CarouselSlide>
      <CarouselSlide as={Center} bg='danger'>
        4
      </CarouselSlide>
    </Carousel>
  )
}

export const customControl: ComponentStory<typeof Carousel> = () => {
  const [index, onChange] = useState<number>(0)

  return (
    <Carousel draggable={false} index={index} onChange={onChange}>
      <CarouselSlide as={Center} bg='primary'>
        1
      </CarouselSlide>
      <CarouselSlide as={Center} bg='secondary'>
        2
      </CarouselSlide>
      <CarouselSlide as={Center} bg='warning'>
        3
      </CarouselSlide>
      <CarouselSlide as={Center} bg='danger'>
        4
      </CarouselSlide>
    </Carousel>
  )
}

export const customControlButton: ComponentStory<typeof Carousel> = () => {
  return (
    <>
      <Carousel controls={{ icon: <FontAwesomeIcon icon={faPoo} /> }}>
        <CarouselSlide as={Center} bg='primary'>
          1
        </CarouselSlide>
        <CarouselSlide as={Center} bg='secondary'>
          2
        </CarouselSlide>
        <CarouselSlide as={Center} bg='warning'>
          3
        </CarouselSlide>
        <CarouselSlide as={Center} bg='danger'>
          4
        </CarouselSlide>
      </Carousel>

      <Carousel controlPrev={{ icon: <FontAwesomeIcon icon={faArrowLeft} /> }}>
        <CarouselSlide as={Center} bg='primary'>
          1
        </CarouselSlide>
        <CarouselSlide as={Center} bg='secondary'>
          2
        </CarouselSlide>
        <CarouselSlide as={Center} bg='warning'>
          3
        </CarouselSlide>
        <CarouselSlide as={Center} bg='danger'>
          4
        </CarouselSlide>
      </Carousel>

      <Carousel controlNext={{ icon: <FontAwesomeIcon icon={faArrowRight} /> }}>
        <CarouselSlide as={Center} bg='primary'>
          1
        </CarouselSlide>
        <CarouselSlide as={Center} bg='secondary'>
          2
        </CarouselSlide>
        <CarouselSlide as={Center} bg='warning'>
          3
        </CarouselSlide>
        <CarouselSlide as={Center} bg='danger'>
          4
        </CarouselSlide>
      </Carousel>

      <Carousel>
        <CarouselControlPrev icon={<FontAwesomeIcon icon={faArrowLeft} />} />
        <CarouselControlNext icon={<FontAwesomeIcon icon={faArrowRight} />} />

        <CarouselSlide as={Center} bg='primary'>
          1
        </CarouselSlide>
        <CarouselSlide as={Center} bg='secondary'>
          2
        </CarouselSlide>
        <CarouselSlide as={Center} bg='warning'>
          3
        </CarouselSlide>
        <CarouselSlide as={Center} bg='danger'>
          4
        </CarouselSlide>
      </Carousel>
    </>
  )
}

export const customIndicators: ComponentStory<typeof Carousel> = () => {
  return (
    <>
      <Carousel
        indicators={{
          bottom: '8',
          component: ({ isSelected }) => (
            <FontAwesomeIcon
              icon={faPoo}
              color={isSelected ? 'whiteAlpha.700' : 'whiteAlpha.400'}
              cursor='pointer'
            />
          ),
        }}
      >
        <CarouselSlide as={Center} bg='primary'>
          1
        </CarouselSlide>
        <CarouselSlide as={Center} bg='secondary'>
          2
        </CarouselSlide>
        <CarouselSlide as={Center} bg='warning'>
          3
        </CarouselSlide>
        <CarouselSlide as={Center} bg='danger'>
          4
        </CarouselSlide>
      </Carousel>

      <Carousel>
        <CarouselSlide as={Center} bg='primary'>
          1
        </CarouselSlide>
        <CarouselSlide as={Center} bg='secondary'>
          2
        </CarouselSlide>
        <CarouselSlide as={Center} bg='warning'>
          3
        </CarouselSlide>
        <CarouselSlide as={Center} bg='danger'>
          4
        </CarouselSlide>

        <CarouselIndicators
          sx={{
            '& > *': {
              w: '4',
              _selected: { w: '12' },
              transitionProperty: 'width',
              transitionDuration: 'slower',
            },
          }}
        />
      </Carousel>
    </>
  )
}
