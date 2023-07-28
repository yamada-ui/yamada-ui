import { Button, HStack, Text, VStack } from '@yamada-ui/react'
import { NextPage } from 'next'
import Link from 'next/link'
import { SEO, Arrow, Github, Section } from 'components'
import { CONSTANT } from 'constant'
import { useI18n } from 'contexts'
import { TopLayout } from 'layouts'

type PageProps = {}

const Page: NextPage<PageProps> = ({}) => {
  const { t, tc } = useI18n()

  return (
    <TopLayout>
      <SEO title={t('home.title')} description={t('home.description')} />

      <Section>
        <VStack alignItems='center'>
          <Text
            as='h1'
            fontSize={{ base: '7xl', lg: '6xl', md: '5xl', sm: '4xl' }}
            fontFamily='heading'
            fontWeight='extrabold'
            textAlign='center'
          >
            {tc('home.hero.heading', (str) => (
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
            {tc('home.hero.message')}
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
            {tc('home.hero.started')}
          </Button>

          <Button
            as='a'
            size='xl'
            w={{ base: 'auto', md: 'full' }}
            leftIcon={<Github />}
            href={CONSTANT.SNS.GITHUB.YAMADA_UI}
            target='_blank'
          >
            {tc('home.hero.github')}
          </Button>
        </HStack>
      </Section>
    </TopLayout>
  )
}

export default Page
