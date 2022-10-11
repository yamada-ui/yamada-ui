import { faMoon, faPlus, faPoo, faRobot, faSkull, faSun } from '@fortawesome/free-solid-svg-icons'
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
  Wrap,
  Spacer,
  Grid,
  GridItem,
  Image,
  Button,
  ButtonGroup,
  IconButton,
  FontAwesomeIcon as Icon,
  Loading,
} from 'components'
import { useScheme, useBreakpoint, useTheme } from 'hooks'

const Index: FC = () => {
  const theme = useTheme()
  const { scheme, toggleScheme } = useScheme()
  const breakpoint = useBreakpoint()

  return (
    <>
      <IconButton
        pos='absolute'
        top='lg'
        right='lg'
        variant='ghost'
        colorScheme='gray'
        icon={<Icon icon={scheme === 'light' ? faMoon : faSun} color='gray.500' />}
        onClick={toggleScheme}
      />

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
              <Box color='white' bg={{ base: 'green.500', md: 'yellow.500' }} p='lg' rounded='lg'>
                Box
              </Box>

              <Box color='white' bg={{ base: 'green.500', md: 'yellow.500' }} p='lg' rounded='lg'>
                Box
              </Box>

              <Box color='white' bg={{ base: 'green.500', md: 'yellow.500' }} p='lg' rounded='lg'>
                Box
              </Box>

              <Box color='white' bg={{ base: 'green.500', md: 'yellow.500' }} p='lg' rounded='lg'>
                Box
              </Box>
            </HStack>
          </Doc>

          <Doc label='Center'>
            <Flex gap='lg'>
              <Center color='white' bg='blue.500' boxSize='xs' p='lg' rounded='lg'>
                Center
              </Center>

              <Center color='white' bg='blue.500' boxSize='2xs' p='lg' rounded='lg'>
                Center
              </Center>

              <Center color='white' bg='blue.500' boxSize='3xs' p='lg' rounded='lg'>
                Center
              </Center>

              <Center color='white' bg='blue.500' boxSize='4xs' p='lg' rounded='lg'>
                Center
              </Center>
            </Flex>
          </Doc>

          <Doc label='Flex'>
            <Flex gap='lg'>
              <Box color='white' bg={{ base: 'red.500', md: 'orange.500' }} p='lg' rounded='lg'>
                Box
              </Box>

              <Box color='white' bg={{ base: 'red.500', md: 'orange.500' }} p='lg' rounded='lg'>
                Box
              </Box>

              <Box color='white' bg={{ base: 'red.500', md: 'orange.500' }} p='lg' rounded='lg'>
                Box
              </Box>

              <Box color='white' bg={{ base: 'red.500', md: 'orange.500' }} p='lg' rounded='lg'>
                Box
              </Box>
            </Flex>
          </Doc>

          <Doc label='Spacer'>
            <Flex gap='lg'>
              <Box color='white' bg={{ base: 'purple.500', md: 'blue.500' }} p='lg' rounded='lg'>
                Box
              </Box>

              <Spacer />

              <Box color='white' bg={{ base: 'purple.500', md: 'blue.500' }} p='lg' rounded='lg'>
                Box
              </Box>
            </Flex>
          </Doc>

          <Doc label='HStack'>
            <HStack gap='lg'>
              <Box color='white' bg={{ base: 'yellow.500', md: 'orange.500' }} p='lg' rounded='lg'>
                Box
              </Box>

              <Box color='white' bg={{ base: 'yellow.500', md: 'orange.500' }} p='lg' rounded='lg'>
                Box
              </Box>

              <Box color='white' bg={{ base: 'yellow.500', md: 'orange.500' }} p='lg' rounded='lg'>
                Box
              </Box>

              <Box color='white' bg={{ base: 'yellow.500', md: 'orange.500' }} p='lg' rounded='lg'>
                Box
              </Box>
            </HStack>
          </Doc>

          <Doc label='VStack'>
            <VStack gap='lg'>
              <Box color='white' bg={{ base: 'green.500', md: 'red.500' }} p='lg' rounded='lg'>
                Box
              </Box>

              <Box color='white' bg={{ base: 'green.500', md: 'red.500' }} p='lg' rounded='lg'>
                Box
              </Box>

              <Box color='white' bg={{ base: 'green.500', md: 'red.500' }} p='lg' rounded='lg'>
                Box
              </Box>

              <Box color='white' bg={{ base: 'green.500', md: 'red.500' }} p='lg' rounded='lg'>
                Box
              </Box>
            </VStack>
          </Doc>

          <Doc label='Grid'>
            <Grid templateColumns='repeat(4, 1fr)' gap='lg'>
              <GridItem
                color='white'
                bg={{ base: 'green.500', md: 'orange.500' }}
                p='lg'
                rounded='lg'
              >
                GridItem
              </GridItem>

              <GridItem color='white' bg={{ base: 'red.500', md: 'blue.500' }} p='lg' rounded='lg'>
                GridItem
              </GridItem>

              <GridItem color='white' bg={{ base: 'blue.500', md: 'red.500' }} p='lg' rounded='lg'>
                GridItem
              </GridItem>

              <GridItem
                color='white'
                bg={{ base: 'orange.500', md: 'green.500' }}
                p='lg'
                rounded='lg'
              >
                GridItem
              </GridItem>
            </Grid>

            <Grid templateColumns='repeat(4, 1fr)' gap='lg'>
              <GridItem
                color='white'
                colSpan={2}
                rowSpan={2}
                bg={{ base: 'orange.500', md: 'green.500' }}
                p='lg'
                rounded='lg'
              >
                GridItem
              </GridItem>

              <GridItem
                color='white'
                colSpan={2}
                bg={{ base: 'red.500', md: 'blue.500' }}
                p='lg'
                rounded='lg'
              >
                GridItem
              </GridItem>

              <GridItem color='white' bg={{ base: 'green.500', md: 'red.500' }} p='lg' rounded='lg'>
                GridItem
              </GridItem>

              <GridItem
                color='white'
                bg={{ base: 'blue.500', md: 'orange.500' }}
                p='lg'
                rounded='lg'
              >
                GridItem
              </GridItem>
            </Grid>
          </Doc>

          <Doc label='Button'>
            <Wrap gap='lg'>
              <Wrap gap='md'>
                <Button colorScheme='primary' variant='solid'>
                  Button
                </Button>

                <Button colorScheme='primary' variant='outline'>
                  Button
                </Button>

                <Button colorScheme='primary' variant='ghost'>
                  Button
                </Button>

                <Button colorScheme='primary' variant='link'>
                  Button
                </Button>
              </Wrap>

              <Wrap gap='md'>
                <Button colorScheme='secondary' variant='solid' isDisabled>
                  Button
                </Button>

                <Button colorScheme='secondary' variant='outline' isDisabled>
                  Button
                </Button>

                <Button colorScheme='secondary' variant='ghost' isDisabled>
                  Button
                </Button>

                <Button colorScheme='secondary' variant='link' isDisabled>
                  Button
                </Button>
              </Wrap>
            </Wrap>

            <Wrap gap='lg'>
              <Wrap gap='md'>
                <Button colorScheme='warning' variant='solid' leftIcon={<Icon icon={faRobot} />}>
                  Button
                </Button>

                <Button colorScheme='warning' variant='outline' rightIcon={<Icon icon={faRobot} />}>
                  Button
                </Button>

                <Button colorScheme='warning' variant='ghost' leftIcon={<Icon icon={faRobot} />}>
                  Button
                </Button>

                <Button colorScheme='warning' variant='link' leftIcon={<Icon icon={faRobot} />}>
                  Button
                </Button>
              </Wrap>

              <Wrap gap='md'>
                <Button isLoading colorScheme='danger' variant='solid'>
                  Button
                </Button>

                <Button isLoading colorScheme='danger' variant='outline'>
                  Button
                </Button>

                <Button isLoading colorScheme='danger' variant='ghost'>
                  Button
                </Button>

                <Button isLoading loadingText='Loading...' colorScheme='danger' variant='solid'>
                  Button
                </Button>

                <Button
                  isLoading
                  loadingText='Loading...'
                  loadingPlacement='end'
                  colorScheme='danger'
                  variant='outline'
                >
                  Button
                </Button>
              </Wrap>

              <Wrap gap='md'>
                <Button colorScheme='primary' size='xs'>
                  Button
                </Button>

                <Button colorScheme='primary' size='sm'>
                  Button
                </Button>

                <Button colorScheme='primary' size='md'>
                  Button
                </Button>

                <Button colorScheme='primary' size='lg'>
                  Button
                </Button>
              </Wrap>
            </Wrap>

            <Wrap gap='lg'>
              <Button colorScheme='primary'>Primary</Button>
              <Button colorScheme='secondary'>Secondary</Button>
              <Button colorScheme='warning'>Warning</Button>
              <Button colorScheme='danger'>Danger</Button>
              <Button colorScheme='link'>Linl</Button>
              <Button colorScheme='gray'>Gray</Button>
              <Button colorScheme='red'>Red</Button>
              <Button colorScheme='orange'>Orange</Button>
              <Button colorScheme='yellow'>Yellow</Button>
              <Button colorScheme='green'>Green</Button>
              <Button colorScheme='teal'>Teal</Button>
              <Button colorScheme='blue'>Blue</Button>
              <Button colorScheme='cyan'>Cyan</Button>
              <Button colorScheme='purple'>Purple</Button>
              <Button colorScheme='pink'>pink</Button>
              <Button colorScheme='linkedin'>Linkedin</Button>
              <Button colorScheme='facebook'>Facebook</Button>
              <Button colorScheme='messenger'>Messenger</Button>
              <Button colorScheme='whatsapp'>Whatsapp</Button>
              <Button colorScheme='twitter'>Twitter</Button>
              <Button colorScheme='line'>Line</Button>
              <Button colorScheme='instagram'>Instagram</Button>
              <Button colorScheme='youtube'>Youtube</Button>
            </Wrap>

            <Wrap gap='lg'>
              <Button variant='outline' colorScheme='primary'>
                Primary
              </Button>
              <Button variant='outline' colorScheme='secondary'>
                Secondary
              </Button>
              <Button variant='outline' colorScheme='warning'>
                Warning
              </Button>
              <Button variant='outline' colorScheme='danger'>
                Danger
              </Button>
              <Button variant='outline' colorScheme='link'>
                Linl
              </Button>
              <Button variant='outline' colorScheme='gray'>
                Gray
              </Button>
              <Button variant='outline' colorScheme='red'>
                Red
              </Button>
              <Button variant='outline' colorScheme='orange'>
                Orange
              </Button>
              <Button variant='outline' colorScheme='yellow'>
                Yellow
              </Button>
              <Button variant='outline' colorScheme='green'>
                Green
              </Button>
              <Button variant='outline' colorScheme='teal'>
                Teal
              </Button>
              <Button variant='outline' colorScheme='blue'>
                Blue
              </Button>
              <Button variant='outline' colorScheme='cyan'>
                Cyan
              </Button>
              <Button variant='outline' colorScheme='purple'>
                Purple
              </Button>
              <Button variant='outline' colorScheme='pink'>
                pink
              </Button>
              <Button variant='outline' colorScheme='linkedin'>
                Linkedin
              </Button>
              <Button variant='outline' colorScheme='facebook'>
                Facebook
              </Button>
              <Button variant='outline' colorScheme='messenger'>
                Messenger
              </Button>
              <Button variant='outline' colorScheme='whatsapp'>
                Whatsapp
              </Button>
              <Button variant='outline' colorScheme='twitter'>
                Twitter
              </Button>
              <Button variant='outline' colorScheme='line'>
                Line
              </Button>
              <Button variant='outline' colorScheme='instagram'>
                Instagram
              </Button>
              <Button variant='outline' colorScheme='youtube'>
                Youtube
              </Button>
            </Wrap>
          </Doc>

          <Doc label='IconButton'>
            <Wrap gap='lg'>
              <Wrap gap='md'>
                <IconButton size='sm' colorScheme='teal' icon={<Icon icon={faPoo} />} />
                <IconButton size='md' colorScheme='teal' icon={<Icon icon={faPoo} />} />
                <IconButton size='lg' colorScheme='teal' icon={<Icon icon={faPoo} />} />
              </Wrap>

              <Wrap gap='md'>
                <IconButton colorScheme='gray' variant='outline' icon={<Icon icon={faSkull} />} />
                <IconButton colorScheme='gray' variant='outline' icon={<Icon icon={faSkull} />} />
                <IconButton colorScheme='gray' variant='outline' icon={<Icon icon={faSkull} />} />
              </Wrap>
            </Wrap>
          </Doc>

          <Doc label='ButtonGroup'>
            <Wrap gap='lg'>
              <ButtonGroup isAttached variant='outline'>
                <Button>Button</Button>
                <IconButton icon={<Icon icon={faPlus} />} />
              </ButtonGroup>

              <VStack gap='md'>
                <ButtonGroup gap='sm'>
                  <Button>Button</Button>
                  <Button>Button</Button>
                  <Button>Button</Button>
                </ButtonGroup>

                <ButtonGroup isAttached isDisabled variant='outline'>
                  <Button>Button</Button>
                  <Button>Button</Button>
                  <Button>Button</Button>
                </ButtonGroup>
              </VStack>

              <Wrap gap='md'>
                <ButtonGroup direction='column' gap='sm'>
                  <Button>Button</Button>
                  <Button>Button</Button>
                  <Button>Button</Button>
                </ButtonGroup>

                <ButtonGroup direction='column' isAttached variant='outline'>
                  <Button>Button</Button>
                  <Button>Button</Button>
                  <Button>Button</Button>
                  <Button>Button</Button>
                </ButtonGroup>
              </Wrap>
            </Wrap>
          </Doc>

          <Doc label='Loading'>
            <Wrap gap='lg'>
              <Loading variant='oval' size='7xs' color='red.500' />
              <Loading variant='search' size='7xs' color='orange.500' />
              <Loading variant='radio' size='7xs' color='yellow.500' />
              <Loading variant='audio' size='7xs' color='green.500' />
              <Loading variant='balls' size='7xs' color='teal.500' />
              <Loading variant='bars' size='7xs' color='blue.500' />
              <Loading variant='comment' size='7xs' color='cyan.500' />
              <Loading variant='grid' size='7xs' color='purple.500' />
              <Loading variant='hearts' size='7xs' color='pink.500' />
              <Loading variant='rotating' size='7xs' color='linkedin.500' />
              <Loading variant='circles' size='7xs' color='facebook.500' />
              <Loading variant='dots' size='7xs' color='messenger.500' />
              <Loading variant='triangle' size='7xs' color='twitter.500' />
              <Loading variant='watch' size='7xs' color='line.500' />
              <Loading variant='progress' size='7xs' color='instagram.500' />
            </Wrap>
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
