import { Button, Center, CenterProps, HStack, Text, forwardRef } from '@yamada-ui/react'
import { memo } from 'react'
import { Star } from '../media-and-icons'
import { useI18n } from '@/contexts'

export type AdBannerProps = CenterProps & {}

export const AdBanner = memo(
  forwardRef<AdBannerProps, 'div'>(({ ...rest }, ref) => {
    const { t } = useI18n()

    return (
      <Center ref={ref} py='sm' px='md' bgGradient='ultra' color='white' {...rest}>
        <HStack>
          <Text>{t('component.feedback.ad-banner.message')}</Text>

          <Button
            as='a'
            href='https://github.com/hirotomoyamada/yamada-ui'
            target='_blank'
            size='sm'
            bg='blackAlpha.300'
            color='whiteAlpha.900'
            cursor='pointer'
            _hover={{
              bg: `whiteAlpha.300`,
            }}
            _active={{
              bg: `whiteAlpha.400`,
            }}
          >
            <Star />
            {t('component.feedback.ad-banner.button')}
          </Button>
        </HStack>
      </Center>
    )
  }),
)
