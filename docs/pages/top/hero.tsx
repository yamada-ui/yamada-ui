import { Button, HStack, Text, VStack } from '@yamada-ui/react'
import Link from 'next/link'
import { FC } from 'react'
import { Arrow, Github, Section } from '@/components'
import { useI18n } from '@/contexts'

export const Hero: FC = () => {
  const { t } = useI18n()

  return (
    <Section>
      <VStack alignItems='center'>
        <Text
          as='h1'
          fontSize={{ base: '7xl', lg: '6xl', md: '5xl', sm: '4xl' }}
          fontFamily='heading'
          fontWeight='extrabold'
          textAlign='center'
        >
          {t('top.hero.title', (str) => (
            <Text as='span' color='brand'>
              {str}
            </Text>
          ))}
        </Text>

        <Text
          w='full'
          maxW='2xl'
          fontSize={{ base: 'xl', sm: 'lg' }}
          color={['blackAlpha.600', 'whiteAlpha.600']}
          textAlign='center'
        >
          {t('top.hero.description')}
        </Text>
      </VStack>

      <HStack flexDirection={{ base: 'row', md: 'column' }} justifyContent='center'>
        <Button
          as={Link}
          size='xl'
          w={{ base: 'auto', md: 'full' }}
          colorScheme='brand'
          rightIcon={<Arrow />}
          href='/getting-started'
        >
          {t('top.hero.started')}
        </Button>

        <Button
          as='a'
          size='xl'
          w={{ base: 'auto', md: 'full' }}
          leftIcon={<Github />}
          href='https://github.com/hirotomoyamada/yamada-ui'
          target='_blank'
        >
          {t('top.hero.github')}
        </Button>
      </HStack>
    </Section>
  )
}
