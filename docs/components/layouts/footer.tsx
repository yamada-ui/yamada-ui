import { Center, CenterProps, HStack, Link, Text, VStack, forwardRef } from '@yamada-ui/react'
import { memo } from 'react'
import { Github, Twitter } from '../media-and-icons'
import { useI18n } from '@/contexts'

export type FooterProps = CenterProps & {}

export const Footer = memo(
  forwardRef<FooterProps, 'div'>(({ ...rest }, ref) => {
    const { t } = useI18n()
    return (
      <Center ref={ref} as='footer' position='sticky' top='100vh' w='full' {...rest}>
        <VStack alignItems='center' w='full' maxW='9xl' py='xl' px='md'>
          <Text color={['blackAlpha.600', 'whiteAlpha.600']}>
            {t('component.footer.description', (str, index) => (
              <Link
                href={
                  index === 1
                    ? 'https://github.com/hirotomoyamada'
                    : 'https://github.com/hirotomoyamada/yamada-ui/graphs/contributors'
                }
                target='_blank'
                textDecoration='underline'
              >
                {str}
              </Link>
            ))}
          </Text>

          <HStack color={['blackAlpha.700', 'whiteAlpha.700']}>
            <Link href='https://github.com/hirotomoyamada' target='_blank'>
              <Github />
            </Link>

            <Link href='https://twitter.com/hirotomoyamada' target='_blank'>
              <Twitter />
            </Link>
          </HStack>
        </VStack>
      </Center>
    )
  }),
)
