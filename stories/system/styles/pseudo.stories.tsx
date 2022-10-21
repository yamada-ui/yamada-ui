import { Box, Center, Wrap } from '@yamada-ui/react'

export default {
  title: 'Components / Styles / Pseudo',
}

export const after = () => {
  return (
    <Box
      pos='relative'
      bg='primary'
      m='lg'
      p='lg'
      rounded='lg'
      color='white'
      _after={{
        content: "'after'",
        pos: 'absolute',
        top: 'lg',
        left: 'lg',
        bg: 'secondary',
        p: 'lg',
        rounded: 'lg',
        color: 'white',
      }}
    >
      Box
    </Box>
  )
}

export const before = () => {
  return (
    <Box
      pos='relative'
      bg='warning'
      m='lg'
      p='lg'
      rounded='lg'
      color='white'
      _before={{
        content: "'before'",
        pos: 'absolute',
        top: '-lg',
        left: '-lg',
        bg: 'danger',
        p: 'lg',
        rounded: 'lg',
        color: 'white',
      }}
    >
      Box
    </Box>
  )
}

export const hover = () => {
  return (
    <Box
      bg='primary'
      p='lg'
      rounded='lg'
      color='white'
      cursor='pointer'
      transitionProperty='all'
      transitionDuration='slower'
      transitionTimingFunction='ease-in-out'
      _hover={{ bg: 'secondary' }}
    >
      Please Hover
    </Box>
  )
}

export const other = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
  return (
    <Wrap gap='md'>
      {numbers.map((number) => (
        <Center
          _odd={{ bg: 'red.500' }}
          _even={{ bg: 'blue.500' }}
          boxSize='5xs'
          rounded='md'
          color='white'
        >
          {number}
        </Center>
      ))}
    </Wrap>
  )
}
