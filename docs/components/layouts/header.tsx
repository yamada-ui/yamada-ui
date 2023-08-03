import {
  Box,
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
    const { colorMode, toggleColorMode } = useColorMode()
    const { scrollY } = useScroll()
    const [y, setY] = useState<number>(0)
    const { height = 0 } = headerRef.current?.getBoundingClientRect() ?? {}

    useMotionValueEvent(scrollY, 'change', setY)

    const isScroll = y > height

    return (
      <Center
        ref={mergeRefs(ref, headerRef)}
        as='header'
        w='full'
        backdropFilter='saturate(180%) blur(10px)'
        shadow={isScroll ? ['base', 'dark-sm'] : undefined}
        transitionProperty='common'
        transitionDuration='slower'
        position='sticky'
        top='0'
        left='0'
        right='0'
        zIndex='sonGoku'
        {...rest}
      >
        <HStack w='full' maxW='9xl' py='3' px='md'>
          <Box
            as={Link}
            href='/'
            _focus={{ outline: 'none' }}
            _focusVisible={{ boxShadow: 'outline' }}
            rounded='md'
          >
            <Text as='h1' fontSize='2xl' fontWeight='semibold' whiteSpace='nowrap'>
              Yamada UI
            </Text>
          </Box>

          <Tag
            display={{ base: 'inline-flex', md: 'none' }}
            colorScheme='gray'
            letterSpacing='1px'
            minW='auto'
          >
            v0.5.14
          </Tag>

          <Spacer />

          <Search
            display={{ base: 'flex', sm: 'none' }}
            borderColor={isScroll ? ['white', 'black'] : [`gray.200`, `whiteAlpha.300`]}
          />

          <HStack gap='sm'>
            <IconButton
              as='a'
              href={CONSTANT.SNS.DISCORD}
              target='_blank'
              variant='ghost'
              display={{ base: 'inline-flex', md: 'none' }}
              color='muted'
              icon={<Discord />}
            />

            <IconButton
              as='a'
              href={CONSTANT.SNS.GITHUB.YAMADA_UI}
              target='_blank'
              variant='ghost'
              display={{ base: 'inline-flex', md: 'none' }}
              color='muted'
              icon={<Github />}
            />

            {CONSTANT.I18N.LOCALES.length > 1 ? (
              <Menu>
                <MenuButton
                  as={IconButton}
                  variant='ghost'
                  display={{ base: 'inline-flex', md: 'none' }}
                  color='muted'
                  icon={<Translate />}
                />

                <MenuList>
                  <MenuOptionGroup<string> value={locale} onChange={changeLocale} type='radio'>
                    {CONSTANT.I18N.LOCALES.map(({ label, value }) => (
                      <MenuOptionItem key={value} value={value} closeOnSelect>
                        {label}
                      </MenuOptionItem>
                    ))}
                  </MenuOptionGroup>
                </MenuList>
              </Menu>
            ) : null}

            <IconButton
              variant='ghost'
              color='muted'
              onClick={toggleColorMode}
              icon={colorMode === 'dark' ? <Sun /> : <Moon />}
            />
          </HStack>
        </HStack>
      </Center>
    )
  }),
)
