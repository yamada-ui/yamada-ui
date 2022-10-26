import { AnimationStyle, Box, Button, useAnimation, useDynamicAnimation } from '@yamada-ui/react'

export default {
  title: 'System / Hooks / useAnimation',
}

export const basic = () => {
  const animation = useAnimation({
    keyframes: {
      '0%': {
        bg: 'red.500',
      },
      '20%': {
        bg: 'green.500',
      },
      '40%': {
        bg: 'purple.500',
      },
      '60%': {
        bg: 'yellow.500',
      },
      '80%': {
        bg: 'blue.500',
      },
      '100%': {
        bg: 'red.500',
      },
    },
    duration: '10s',
    iterationCount: 'infinite',
    timingFunction: 'linear',
  })

  return <Box w='full' height='xs' animation={animation}></Box>
}

export const dynamicAnimation = () => {
  const [animation, setAnimation] = useDynamicAnimation<
    Record<'moveLeft' | 'moveRight', AnimationStyle>
  >({
    moveLeft: {
      keyframes: {
        '0%': {
          transform: 'translateX(400%)',
        },
        '100%': {
          transform: 'translateX(0%)',
        },
      },
      duration: 'slower',
      fillMode: 'forwards',
      timingFunction: 'ease-in-out',
    },
    moveRight: {
      keyframes: {
        '0%': {
          transform: 'translateX(0%)',
        },
        '100%': {
          transform: 'translateX(400%)',
        },
      },
      duration: 'slower',
      fillMode: 'forwards',
      timingFunction: 'ease-in-out',
    },
  })

  return (
    <>
      <Button
        onClick={() => setAnimation((key) => (key === 'moveRight' ? 'moveLeft' : 'moveRight'))}
      >
        Please Click
      </Button>

      <Box bg='primary' p='md' rounded='md' color='white' animation={animation}>
        Box
      </Box>
    </>
  )
}
