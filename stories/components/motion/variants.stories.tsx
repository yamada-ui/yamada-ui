import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Center, Motion, MotionVariants } from '@yamada-ui/react'
import { useMemo } from 'react'

export default {
  title: 'Components / Motion / Variants',
  component: Motion,
} as ComponentMeta<typeof Motion>

export const basic: ComponentStory<typeof Motion> = () => {
  const variants: MotionVariants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    }),
    [],
  )

  return (
    <Center w='calc(100vw - 16px * 2)' h='calc(100vh - 16px * 2)'>
      <Motion
        initial='hidden'
        animate='visible'
        variants={variants}
        w='2xs'
        h='2xs'
        bg='primary'
        rounded='3xl'
        cursor='pointer'
      />
    </Center>
  )
}

export const usePropagation: ComponentStory<typeof Motion> = () => {
  const list: MotionVariants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    }),
    [],
  )

  const item: MotionVariants = useMemo(
    () => ({
      hidden: { opacity: 0, x: -100 },
      visible: { opacity: 1, x: 0 },
    }),
    [],
  )

  return (
    <Center w='calc(100vw - 16px * 2)' h='calc(100vh - 16px * 2)'>
      <Motion
        initial='hidden'
        animate='visible'
        variants={list}
        w='2xs'
        h='2xs'
        p='md'
        bg='primary'
        overflow='hidden'
        rounded='3xl'
        cursor='pointer'
        display='flex'
        flexDirection='column'
        gap='md'
      >
        <Motion variants={item} bg='white' w='full' h='4' rounded='md' />
        <Motion variants={item} bg='white' w='full' h='4' rounded='md' />
        <Motion variants={item} bg='white' w='full' h='4' rounded='md' />
        <Motion variants={item} bg='white' w='full' h='4' rounded='md' />
      </Motion>
    </Center>
  )
}

export const useOrchestration: ComponentStory<typeof Motion> = () => {
  const list: MotionVariants = useMemo(
    () => ({
      hidden: {
        opacity: 0,
        transition: { when: 'afterChildren' },
      },
      visible: {
        opacity: 1,
        transition: { when: 'beforeChildren', staggerChildren: 0.5 },
      },
    }),
    [],
  )

  const item: MotionVariants = useMemo(
    () => ({
      hidden: { opacity: 0, x: -100 },
      visible: { opacity: 1, x: 0 },
    }),
    [],
  )

  return (
    <Center w='calc(100vw - 16px * 2)' h='calc(100vh - 16px * 2)'>
      <Motion
        initial='hidden'
        animate='visible'
        variants={list}
        w='2xs'
        p='md'
        bg='primary'
        overflow='hidden'
        rounded='3xl'
        cursor='pointer'
        display='flex'
        flexDirection='column'
        gap='md'
      >
        <Motion variants={item} bg='white' w='full' h='4' rounded='md' />
        <Motion variants={item} bg='white' w='full' h='4' rounded='md' />
        <Motion variants={item} bg='white' w='full' h='4' rounded='md' />
        <Motion variants={item} bg='white' w='full' h='4' rounded='md' />
      </Motion>
    </Center>
  )
}

export const useDynamicVariants: ComponentStory<typeof Motion> = () => {
  const list: MotionVariants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    }),
    [],
  )

  const item: MotionVariants = useMemo(
    () => ({
      hidden: { opacity: 0, x: -100 },
      visible: (i) => ({
        opacity: 1,
        x: 0,
        transition: { delay: i * 0.3 },
      }),
    }),
    [],
  )

  return (
    <Center w='calc(100vw - 16px * 2)' h='calc(100vh - 16px * 2)'>
      <Motion
        initial='hidden'
        animate='visible'
        variants={list}
        w='2xs'
        p='md'
        bg='primary'
        overflow='hidden'
        rounded='3xl'
        cursor='pointer'
        display='flex'
        flexDirection='column'
        gap='md'
      >
        <Motion variants={item} custom={1} bg='white' w='full' h='4' rounded='md' />
        <Motion variants={item} custom={2} bg='white' w='full' h='4' rounded='md' />
        <Motion variants={item} custom={3} bg='white' w='full' h='4' rounded='md' />
        <Motion variants={item} custom={4} bg='white' w='full' h='4' rounded='md' />
      </Motion>
    </Center>
  )
}

export const useValueSpecific: ComponentStory<typeof Motion> = () => {
  const variants: MotionVariants = useMemo(
    () => ({
      hidden: { pathLength: 0, opacity: 0 },
      visible: (i) => {
        const delay = 1 + i * 0.5

        return {
          pathLength: 1,
          opacity: 1,
          transition: {
            pathLength: { delay, type: 'spring', duration: 1.5, bounce: 0 },
            opacity: { delay, duration: 0.01 },
          },
        }
      },
    }),
    [],
  )

  return (
    <Center w='calc(100vw - 16px * 2)' h='calc(100vh - 16px * 2)'>
      <Motion as='svg' w='800px' h='200px' viewBox='0 0 800 200' initial='hidden' animate='visible'>
        <Motion
          as='circle'
          cx='100'
          cy='100'
          r='80'
          stroke='#ed3237'
          variants={variants}
          custom={1}
          strokeWidth='10px'
          strokeLinecap='round'
          fill='transparent'
        />
        <Motion
          as='line'
          x1='220'
          y1='30'
          x2='360'
          y2='170'
          stroke='#f5c535'
          variants={variants}
          custom={2}
          strokeWidth='10px'
          strokeLinecap='round'
          fill='transparent'
        />
        <Motion
          as='line'
          x1='220'
          y1='170'
          x2='360'
          y2='30'
          stroke='#f5c535'
          variants={variants}
          custom={2.5}
          strokeWidth='10px'
          strokeLinecap='round'
          fill='transparent'
        />
        <Motion
          as='rect'
          w='140px'
          h='140px'
          x='410'
          y='30'
          rx='20'
          stroke='#0789c7'
          variants={variants}
          custom={3}
          strokeWidth='10px'
          strokeLinecap='round'
          fill='transparent'
        />
        <Motion
          as='polygon'
          points='670 30, 600 170, 740 170'
          stroke='#42b7a5'
          variants={variants}
          custom={4}
          strokeWidth='10px'
          strokeLinecap='round'
          strokeLinejoin='round'
          fill='transparent'
        />
      </Motion>
    </Center>
  )
}
