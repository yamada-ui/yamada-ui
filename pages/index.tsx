import { FC, useState } from 'react'
import { Box, Flex, Heading, Text } from 'components'
import { animation } from 'functions'
import { useScheme, useBreakpoint } from 'hooks'

const Index: FC = () => {
  const [state, setState] = useState<boolean>(true)
  const { scheme } = useScheme()
  const breakpoint = useBreakpoint()

  const fadeIn = animation({
    keyframes: {
      '0%': {
        bg: 'primary',
      },

      '100%': {
        bg: 'secondary',
      },
    },
    duration: '0.4s',
    timingFunction: 'ease-out',
    fillMode: 'forwards',
  })

  const fadeOut = animation({
    keyframes: {
      '0%': {
        bg: 'secondary',
      },

      '100%': {
        bg: 'primary',
      },
    },
    duration: '0.4s',
    timingFunction: 'ease-out',
    fillMode: 'forwards',
  })

  return (
    <>
      <Flex direction='column' gap='lg' p='lg'>
        <Flex direction='column'>
          <Heading size='4xl' noOfLines={1} color={['pink.700', 'pink.500']}>
            ギャルのパンティーおくれーーーっ！！！！！
          </Heading>
          <Heading size='3xl' noOfLines={1} color={['pink.500', 'pink.400']}>
            ギャルのパンティーおくれーーーっ！！！！！
          </Heading>
          <Heading size='2xl' noOfLines={1} color={['pink.500', 'pink.300']}>
            ギャルのパンティーおくれーーーっ！！！！！
          </Heading>
          <Heading size='xl' noOfLines={1} color={['pink.400', 'pink.200']}>
            ギャルのパンティーおくれーーーっ！！！！！
          </Heading>
          <Heading size='lg' noOfLines={1} color={['pink.300', 'pink.100']}>
            ギャルのパンティーおくれーーーっ！！！！！
          </Heading>
        </Flex>

        <Flex direction='column'>
          <Text color={['purple.700', 'purple.500']}>
            私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
          </Text>
          <Text color={['purple.600', 'purple.400']}>
            私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
          </Text>
          <Text color={['purple.500', 'purple.300']}>
            私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
          </Text>
          <Text color={['purple.400', 'purple.200']}>
            私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
          </Text>
          <Text color={['purple.300', 'purple.100']}>
            私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
          </Text>
        </Flex>
      </Flex>
    </>
  )
}

export default Index
