import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { Icon } from '@yamada-ui/fontawesome'
import {
  Button,
  Center,
  CenterProps,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Text,
  forwardRef,
  mergeRefs,
  useColorMode,
  useMotionValueEvent,
  useScroll,
} from '@yamada-ui/react'
import Link from 'next/link'
import { memo, useRef, useState } from 'react'
import { Search } from '../forms'
import { Discord, Github, Moon, Sun } from '../media-and-icons'

export type HeaderProps = CenterProps & {}

export const Header = memo(
  forwardRef<HeaderProps, 'div'>(({ ...rest }, ref) => {
    const headerRef = useRef<HTMLHeadingElement>()
    const { colorMode, toggleScheme } = useColorMode()
    const { scrollY } = useScroll()
    const [y, setY] = useState<number>(0)
    const { height = 0 } = headerRef.current?.getBoundingClientRect() ?? {}

    useMotionValueEvent(scrollY, 'change', setY)

    return (
      <Center
        ref={mergeRefs(ref, headerRef)}
        as='header'
        w='full'
        shadow={y > height ? ['base', 'dark-sm'] : undefined}
        transitionProperty='common'
        transitionDuration='slower'
        position='sticky'
        top='0'
        left='0'
        right='0'
        {...rest}
      >
        <HStack w='full' maxW='9xl' py='sm' px='md'>
          <Link href='/'>
            <Text as='h1' fontSize='2xl' fontWeight='semibold'>
              Yamada UI
            </Text>
          </Link>

          <Menu closeOnSelect>
            <MenuButton as={Button} size='sm' h='6' minH='6' px='2' colorScheme='gray'>
              <HStack gap='sm'>
                <Text fontWeight='semibold' letterSpacing='1px'>
                  v0.5.10
                </Text>
                <Icon icon={faChevronDown} fontSize='0.75em' />
              </HStack>
            </MenuButton>

            <MenuList>
              <MenuItem value='v0.5.13'>
                <HStack gap='sm' letterSpacing='1px'>
                  <Text as='span' fontWeight='semibold'>
                    v0
                  </Text>
                  <Text fontSize='sm' color={['gray.500', 'whiteAlpha.500']}>
                    (0.5.13)
                  </Text>
                </HStack>
              </MenuItem>
            </MenuList>
          </Menu>

          <Spacer />

          <Search />

          <HStack gap='sm'>
            <IconButton
              as='a'
              href='https://discord.gg/NStNNpjN'
              bg='discord.basic'
              _hover={{ bg: 'discord.hover' }}
              _active={{ bg: 'discord.active' }}
              color='white'
              target='_blank'
              cursor='pointer'
              icon={<Discord />}
            />
            <IconButton
              as='a'
              href='https://github.com/hirotomoyamada/yamada-ui'
              target='_blank'
              cursor='pointer'
              variant='outline'
              icon={<Github />}
            />
            <IconButton
              variant='outline'
              onClick={toggleScheme}
              icon={colorMode === 'dark' ? <Sun /> : <Moon />}
            />
          </HStack>
        </HStack>
      </Center>
    )
  }),
)
