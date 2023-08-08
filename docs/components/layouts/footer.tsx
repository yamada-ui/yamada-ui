import { Center, CenterProps, HStack, Link, Text, VStack, forwardRef } from '@yamada-ui/react'
import { memo } from 'react'
import { Github, Twitter } from 'components/media-and-icons'
import { CONSTANT } from 'constant'
import { useI18n } from 'contexts/i18n-context'

export type FooterProps = CenterProps & {}

export const Footer = memo(
  forwardRef<FooterProps, 'div'>(({ ...rest }, ref) => {
    const { tc } = useI18n()

    return (
      <Center ref={ref} as='footer' position='sticky' top='100vh' w='full' {...rest}>
        <VStack alignItems='center' w='full' maxW='9xl' py='xl' px={{ base: 'lg', md: 'md' }}>
          <Text
            color={['blackAlpha.600', 'whiteAlpha.600']}
            fontSize={{ base: 'md', sm: 'sm' }}
            textAlign='center'
          >
            {tc('component.footer.description', (str, index) => (
              <Link
                href={
                  index === 1
                    ? CONSTANT.SNS.GITHUB.HIROTOMO_YAMADA
                    : CONSTANT.SNS.GITHUB.YAMADA_UI + '/graphs/contributors'
                }
                target='_blank'
                textDecoration='underline'
              >
                {str}
              </Link>
            ))}
          </Text>

          <HStack color={['blackAlpha.700', 'whiteAlpha.700']}>
            <Link
              href={CONSTANT.SNS.GITHUB.HIROTOMO_YAMADA}
              target='_blank'
              aria-label='GitHub profile of Hirotomo Yamada'
            >
              <Github />
            </Link>

            <Link
              href={CONSTANT.SNS.TWITTER.HIROTOMO_YAMADA}
              target='_blank'
              aria-label='Twitter Hirotomo Yamada'
            >
              <Twitter />
            </Link>
          </HStack>
        </VStack>
      </Center>
    )
  }),
)
