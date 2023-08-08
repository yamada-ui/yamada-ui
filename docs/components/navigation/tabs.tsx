import {
  forwardRef,
  StackProps,
  HStack,
  dataAttr,
  isDefaultColor,
  toneColor,
  useTheme,
  useColorMode,
  Box,
  Center,
} from '@yamada-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { memo } from 'react'
import { useConfigs } from 'contexts/configs-context'
import { usePage } from 'contexts/page-context'

export type TabsProps = StackProps

export const Tabs = memo(
  forwardRef<TabsProps, 'div'>(({ ...rest }, ref) => {
    const { tabs } = usePage()
    const { asPath } = useRouter()
    const { theme } = useTheme()
    const { colorMode } = useColorMode()
    const { colorScheme } = useConfigs()

    return tabs.length ? (
      <Box as='nav' overflowX='auto' mt='normal'>
        <HStack
          ref={ref}
          as='ul'
          index={tabs.findIndex(({ slug }) => slug === asPath)}
          gap='0'
          borderColor='inherit'
          borderBottomWidth='1px'
          {...rest}
        >
          {tabs.map(({ tab, menu, title, slug }) => (
            <Box as='li' key={slug}>
              <Center
                as={Link}
                href={slug}
                data-selected={dataAttr(asPath === slug)}
                py='2'
                px='4'
                borderColor='transparent'
                borderBottomWidth='1px'
                borderBottomStyle='solid'
                marginBottom='-1px'
                whiteSpace='nowrap'
                transitionProperty='common'
                transitionDuration='normal'
                _hover={{ opacity: 0.7 }}
                _focus={{ outline: 'none' }}
                _focusVisible={{ zIndex: 1, boxShadow: 'outline' }}
                _selected={{
                  color: isDefaultColor(
                    [
                      toneColor(colorScheme, 600)(theme, colorMode),
                      toneColor(colorScheme, 300)(theme, colorMode),
                    ],
                    [`${colorScheme}.600`, `${colorScheme}.300`],
                  )(colorScheme),
                  borderColor: 'currentColor',
                  _hover: { opacity: 1 },
                }}
              >
                {tab ?? menu ?? title}
              </Center>
            </Box>
          ))}
        </HStack>
      </Box>
    ) : null
  }),
)
