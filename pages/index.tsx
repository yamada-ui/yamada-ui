import { FC, ReactNode } from 'react'
import {
  Box,
  Center,
  Divider,
  Heading,
  VStack,
  HStack,
  Text,
  Container,
  Flex,
  Spacer,
  Grid,
  GridItem,
  Image,
} from 'components'
import { useScheme, useBreakpoint } from 'hooks'

const Index: FC = () => {
  const { scheme } = useScheme()
  const breakpoint = useBreakpoint()

  return (
    <>
      <VStack p='lg' align='center' gap='lg'>
        <Image src='/yamada-ui.png' alt='yamada-ui' maxW='2xl' />

        <HStack>
          <Text fontSize='2xl' color='gray.500'>
            breakpoint:
            <Text as='span' ml='sm' fontWeight='bold' suppressHydrationWarning={true}>
              {breakpoint}
            </Text>
          </Text>

          <Divider orientation='vertical' borderColor='gray.500' h='9xs' />

          <Text fontSize='2xl' color='gray.500'>
            scheme:
            <Text as='span' ml='sm' fontWeight='bold' suppressHydrationWarning={true}>
              {scheme}
            </Text>
          </Text>
        </HStack>

        <VStack gap='lg' divider={<Divider />}>
          <Doc label='Heading'>
            <VStack gap='sm'>
              <Heading size='4xl' color={{ base: 'pink.600', md: 'red.600' }} noOfLines={1}>
                ギャルのパンティーおくれーーーっ！！！！！
              </Heading>
              <Heading size='3xl' color={{ base: 'pink.500', md: 'red.500' }} noOfLines={1}>
                ギャルのパンティーおくれーーーっ！！！！！
              </Heading>
              <Heading size='2xl' color={{ base: 'pink.300', md: 'red.300' }} noOfLines={1}>
                ギャルのパンティーおくれーーーっ！！！！！
              </Heading>
              <Heading size='xl' color={{ base: 'pink.200', md: 'red.200' }} noOfLines={1}>
                ギャルのパンティーおくれーーーっ！！！！！
              </Heading>
              <Heading size='lg' color={{ base: 'pink.100', md: 'red.100' }} noOfLines={1}>
                ギャルのパンティーおくれーーーっ！！！！！
              </Heading>
            </VStack>
          </Doc>

          <Doc label='Text'>
            <VStack gap='sm'>
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
            </VStack>
          </Doc>

          <Doc label='Box'>
            <HStack gap='lg'>
              <Box bg={{ base: 'green.500', md: 'yellow.500' }} p='lg' rounded='lg'>
                Box
              </Box>

              <Box bg={{ base: 'green.500', md: 'yellow.500' }} p='lg' rounded='lg'>
                Box
              </Box>

              <Box bg={{ base: 'green.500', md: 'yellow.500' }} p='lg' rounded='lg'>
                Box
              </Box>

              <Box bg={{ base: 'green.500', md: 'yellow.500' }} p='lg' rounded='lg'>
                Box
              </Box>
            </HStack>
          </Doc>

          <Doc label='Center'>
            <Flex gap='lg'>
              <Center bg='blue.500' boxSize='xs' p='lg' rounded='lg'>
                Center
              </Center>

              <Center bg='blue.500' boxSize='2xs' p='lg' rounded='lg'>
                Center
              </Center>

              <Center bg='blue.500' boxSize='3xs' p='lg' rounded='lg'>
                Center
              </Center>

              <Center bg='blue.500' boxSize='4xs' p='lg' rounded='lg'>
                Center
              </Center>
            </Flex>
          </Doc>

          <Doc label='Flex'>
            <Flex gap='lg'>
              <Box bg={{ base: 'red.500', md: 'orange.500' }} p='lg' rounded='lg'>
                Box
              </Box>

              <Box bg={{ base: 'red.500', md: 'orange.500' }} p='lg' rounded='lg'>
                Box
              </Box>

              <Box bg={{ base: 'red.500', md: 'orange.500' }} p='lg' rounded='lg'>
                Box
              </Box>

              <Box bg={{ base: 'red.500', md: 'orange.500' }} p='lg' rounded='lg'>
                Box
              </Box>
            </Flex>
          </Doc>

          <Doc label='Spacer'>
            <Flex gap='lg'>
              <Box bg={{ base: 'purple.500', md: 'blue.500' }} p='lg' rounded='lg'>
                Box
              </Box>

              <Spacer />

              <Box bg={{ base: 'purple.500', md: 'blue.500' }} p='lg' rounded='lg'>
                Box
              </Box>
            </Flex>
          </Doc>

          <Doc label='HStack'>
            <HStack gap='lg'>
              <Box bg={{ base: 'yellow.500', md: 'orange.500' }} p='lg' rounded='lg'>
                Box
              </Box>

              <Box bg={{ base: 'yellow.500', md: 'orange.500' }} p='lg' rounded='lg'>
                Box
              </Box>

              <Box bg={{ base: 'yellow.500', md: 'orange.500' }} p='lg' rounded='lg'>
                Box
              </Box>

              <Box bg={{ base: 'yellow.500', md: 'orange.500' }} p='lg' rounded='lg'>
                Box
              </Box>
            </HStack>
          </Doc>

          <Doc label='VStack'>
            <VStack gap='lg'>
              <Box bg={{ base: 'green.500', md: 'red.500' }} p='lg' rounded='lg'>
                Box
              </Box>

              <Box bg={{ base: 'green.500', md: 'red.500' }} p='lg' rounded='lg'>
                Box
              </Box>

              <Box bg={{ base: 'green.500', md: 'red.500' }} p='lg' rounded='lg'>
                Box
              </Box>

              <Box bg={{ base: 'green.500', md: 'red.500' }} p='lg' rounded='lg'>
                Box
              </Box>
            </VStack>
          </Doc>

          <Doc label='Grid'>
            <Grid templateColumns='repeat(4, 1fr)' gap='lg'>
              <GridItem bg={{ base: 'green.500', md: 'orange.500' }} p='lg' rounded='lg'>
                GridItem
              </GridItem>

              <GridItem bg={{ base: 'red.500', md: 'blue.500' }} p='lg' rounded='lg'>
                GridItem
              </GridItem>

              <GridItem bg={{ base: 'blue.500', md: 'red.500' }} p='lg' rounded='lg'>
                GridItem
              </GridItem>

              <GridItem bg={{ base: 'orange.500', md: 'green.500' }} p='lg' rounded='lg'>
                GridItem
              </GridItem>
            </Grid>

            <Grid templateColumns='repeat(4, 1fr)' gap='lg'>
              <GridItem
                colSpan={2}
                rowSpan={2}
                bg={{ base: 'orange.500', md: 'green.500' }}
                p='lg'
                rounded='lg'
              >
                GridItem
              </GridItem>

              <GridItem colSpan={2} bg={{ base: 'red.500', md: 'blue.500' }} p='lg' rounded='lg'>
                GridItem
              </GridItem>

              <GridItem bg={{ base: 'green.500', md: 'red.500' }} p='lg' rounded='lg'>
                GridItem
              </GridItem>

              <GridItem bg={{ base: 'blue.500', md: 'orange.500' }} p='lg' rounded='lg'>
                GridItem
              </GridItem>
            </Grid>
          </Doc>
        </VStack>
      </VStack>
    </>
  )
}

const Doc: FC<{ label: string; children: ReactNode }> = ({ label, children }) => {
  return (
    <Container p='0' gap='lg'>
      <Heading
        size='2xl'
        alignSelf='start'
        bgGradient='linear(to-r, #59a8e1, #b094e9, #f47adf)'
        bgClip='text'
      >
        {label}
      </Heading>

      {children}
    </Container>
  )
}

export default Index
