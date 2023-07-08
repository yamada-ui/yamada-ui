import { ComponentStory, ComponentMeta } from '@storybook/react'
import {
  AnimatePresence,
  Box,
  Button,
  Center,
  HStack,
  Motion,
  MotionConfig,
  Text,
  transform,
  useBoolean,
  useMotionValue,
  useScroll,
  useTransform,
} from '@yamada-ui/react'
import { useEffect } from 'react'

export default {
  title: 'Components / Motion / Utils',
  component: Motion,
} as ComponentMeta<typeof Motion>

export const animatePresence: ComponentStory<typeof Motion> = () => {
  const [isVisible, { toggle }] = useBoolean()

  return (
    <>
      <Button onClick={toggle}>Please click</Button>

      <AnimatePresence>
        {isVisible ? (
          <Motion
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            bg='primary'
            color='white'
            p='md'
            rounded='md'
          >
            Motion
          </Motion>
        ) : null}
      </AnimatePresence>
    </>
  )
}

export const motionConfig: ComponentStory<typeof Motion> = () => {
  return (
    <MotionConfig transition={{ duration: 2 }}>
      <Center w='calc(100vw - 16px * 2)' h='calc(100vh - 16px * 2)'>
        <Motion animate={{ x: 100 }} bg='primary' color='white' p='md' rounded='md'>
          Motion
        </Motion>
      </Center>
    </MotionConfig>
  )
}

export const useScrollAndTransform: ComponentStory<typeof Motion> = () => {
  const { scrollYProgress } = useScroll()
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 400])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -400])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 200])
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -200])

  return (
    <Box position='relative' w='full' h='300vh'>
      <Text>Please scroll</Text>

      <Motion
        style={{ y: y1 }}
        bg='primary'
        boxSize='2xs'
        rounded='full'
        position='absolute'
        top='110vh'
        left='0'
      />

      <Motion
        style={{ y: y2 }}
        bg='warning'
        boxSize='sm'
        rounded='full'
        position='absolute'
        top='120vh'
        left='20%'
      />

      <Motion
        style={{ y: y3 }}
        bg='danger'
        boxSize='3xs'
        rounded='full'
        position='absolute'
        top='110vh'
        right='30%'
      />

      <Motion
        style={{ y: y4 }}
        bg='secondary'
        boxSize='xs'
        rounded='full'
        position='absolute'
        top='120vh'
        right='0'
      />
    </Box>
  )
}
