import { Button, Center, CenterProps, HStack, Text, forwardRef } from '@yamada-ui/react'
import { memo } from 'react'
import { Star } from 'components/media-and-icons'
import { CONSTANT } from 'constant'
import { useI18n } from 'contexts/i18n-context'

export type StarBannerProps = CenterProps & {}

export const StarBanner = memo(
  forwardRef<StarBannerProps, 'div'>(({ ...rest }, ref) => {
    const { tc } = useI18n()

    return (
      <Center ref={ref} py='sm' px='md' bgGradient='ultra' color='white' {...rest}>
        <HStack>
          <Text>{tc('component.feedback.ad-banner.message')}</Text>

          <Button
            as='a'
            href={CONSTANT.SNS.GITHUB.YAMADA_UI}
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
            {tc('component.feedback.ad-banner.button')}
          </Button>
        </HStack>
      </Center>
    )
  }),
)
