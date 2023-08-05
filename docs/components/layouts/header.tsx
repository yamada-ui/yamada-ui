import {
  Box,
  Center,
  CenterProps,
  CloseButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerProps,
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
  UseDisclosureReturn,
  VStack,
  forwardRef,
  mergeRefs,
  useBreakpoint,
  useColorMode,
  useDisclosure,
  useMotionValueEvent,
  useScroll,
} from '@yamada-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, memo, useEffect, useRef, useState } from 'react'
import { Search } from 'components/forms'
import { Discord, Github, Hamburger, Moon, Sun, Translate } from 'components/media-and-icons'
import { Tree } from 'components/navigation'
import { CONSTANT } from 'constant'
import { useI18n } from 'contexts'

export type HeaderProps = CenterProps & {}

export const Header = memo(
  forwardRef<HeaderProps, 'div'>(({ ...rest }, ref) => {
    const headerRef = useRef<HTMLHeadingElement>()
    const { scrollY } = useScroll()
    const [y, setY] = useState<number>(0)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { height = 0 } = headerRef.current?.getBoundingClientRect() ?? {}

    useMotionValueEvent(scrollY, 'change', setY)

    const isScroll = y > height

    return (
      <>
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
          <HStack w='full' maxW='9xl' py='3' px={{ base: 'lg', md: 'md' }}>
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

            <ButtonGroup {...{ isOpen, onOpen }} />
          </HStack>
        </Center>

        <MobileMenu isOpen={isOpen} onClose={onClose} />
      </>
    )
  }),
)

type ButtonGroupProps = Partial<UseDisclosureReturn> & { isMobile?: boolean }

const ButtonGroup: FC<ButtonGroupProps> = memo(({ isMobile, isOpen, onOpen, onClose }) => {
  const { locale, changeLocale } = useI18n()
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <HStack gap='sm'>
      <IconButton
        as='a'
        href={CONSTANT.SNS.DISCORD}
        target='_blank'
        variant='ghost'
        display={{ base: 'inline-flex', lg: !isMobile ? 'none' : undefined }}
        color='muted'
        icon={<Discord />}
      />

      <IconButton
        as='a'
        href={CONSTANT.SNS.GITHUB.YAMADA_UI}
        target='_blank'
        variant='ghost'
        display={{ base: 'inline-flex', lg: !isMobile ? 'none' : undefined }}
        color='muted'
        icon={<Github />}
      />

      {CONSTANT.I18N.LOCALES.length > 1 ? (
        <Menu placement={!isMobile ? 'bottom-end' : 'bottom'}>
          <MenuButton
            as={IconButton}
            variant='ghost'
            display={{ base: 'inline-flex', md: !isMobile ? 'none' : undefined }}
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

      {!isOpen ? (
        <IconButton
          variant='ghost'
          display={{ base: 'none', lg: 'inline-flex' }}
          color='muted'
          onClick={onOpen}
          icon={<Hamburger />}
        />
      ) : (
        <CloseButton
          size='lg'
          display={{ base: 'none', lg: 'inline-flex' }}
          color='muted'
          onClick={onClose}
        />
      )}
    </HStack>
  )
})

ButtonGroup.displayName = 'ButtonGroup'

type MobileMenuProps = DrawerProps

const MobileMenu: FC<MobileMenuProps> = memo(({ isOpen, onClose }) => {
  const { events } = useRouter()
  const breakpoint = useBreakpoint()

  useEffect(() => {
    if (!['lg', 'md', 'sm'].includes(breakpoint)) onClose()
  }, [breakpoint, onClose])

  useEffect(() => {
    events.on('routeChangeComplete', onClose)

    return () => {
      events.off('routeChangeComplete', onClose)
    }
  }, [events, onClose])

  return (
    <Drawer isOpen={isOpen} onClose={onClose} withCloseButton={false} isFullHeight>
      <DrawerHeader justifyContent='flex-end' pt='sm' fontSize='md' fontWeight='normal'>
        <ButtonGroup isMobile {...{ isOpen, onClose }} />
      </DrawerHeader>

      <DrawerBody position='relative' my='sm'>
        <VStack as='nav' overflowY='scroll' overscrollBehavior='contain'>
          <Tree py='sm' />
        </VStack>

        <Box
          position='absolute'
          top='0'
          left='0'
          right='0'
          w='full'
          h='3'
          bgGradient={[
            'linear(to-t, rgba(255, 255, 255, 0), white)',
            'linear(to-t, rgba(0, 0, 0, 0), black)',
          ]}
        />
        <Box
          position='absolute'
          bottom='0'
          left='0'
          right='0'
          w='full'
          h='3'
          bgGradient={[
            'linear(to-b, rgba(255, 255, 255, 0), white)',
            'linear(to-b, rgba(0, 0, 0, 0), black)',
          ]}
        />
      </DrawerBody>
    </Drawer>
  )
})

MobileMenu.displayName = 'MobileMenu'
