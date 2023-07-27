import {
  Center,
  CenterProps,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuOptionGroup,
  MenuOptionItem,
  Spacer,
  Tag,
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
import { Discord, Github, Moon, Sun, Translate } from '../media-and-icons'
import { CONSTANT } from 'constant'
import { useI18n } from 'contexts'

export type HeaderProps = CenterProps & {}

export const Header = memo(
  forwardRef<HeaderProps, 'div'>(({ ...rest }, ref) => {
    const { locale, changeLocale } = useI18n()
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
        bg={['white', 'black']}
        shadow={y > height ? ['base', 'dark-sm'] : undefined}
        transitionProperty='common'
        transitionDuration='slower'
        position='sticky'
        top='0'
        left='0'
        right='0'
        {...rest}
      >
        <HStack w='full' maxW='9xl' py='3' px='md'>
          <Link href='/'>
            <Text as='h1' fontSize='2xl' fontWeight='semibold' whiteSpace='nowrap'>
              Yamada UI
            </Text>
          </Link>

          <Tag
            display={{ base: 'inline-flex', md: 'none' }}
            colorScheme='gray'
            letterSpacing='1px'
            minW='auto'
          >
            v0.5.14
          </Tag>

          <Spacer />

          <Search display={{ base: 'flex', sm: 'none' }} />

          <HStack gap='sm'>
            <IconButton
              as='a'
              href={CONSTANT.SNS.DISCORD}
              display={{ base: 'inline-flex', md: 'none' }}
              bg='discord.basic'
              _hover={{ bg: 'discord.hover' }}
              _active={{ bg: 'discord.active' }}
              color='white'
              target='_blank'
              icon={<Discord />}
            />

            <IconButton
              as='a'
              href={CONSTANT.SNS.GITHUB.YAMADA_UI}
              target='_blank'
              display={{ base: 'inline-flex', md: 'none' }}
              variant='outline'
              icon={<Github />}
            />

            <Menu>
              <MenuButton
                as={IconButton}
                display={{ base: 'inline-flex', md: 'none' }}
                variant='outline'
                icon={<Translate />}
              />

              <MenuList>
                <MenuOptionGroup<string> value={locale} onChange={changeLocale} type='radio'>
                  <MenuOptionItem value='en' closeOnSelect>
                    English
                  </MenuOptionItem>
                  <MenuOptionItem value='ja' closeOnSelect>
                    日本語
                  </MenuOptionItem>
                </MenuOptionGroup>
              </MenuList>
            </Menu>

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
