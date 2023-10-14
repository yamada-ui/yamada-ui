import { HStack, Heading, Text, VStack } from '@yamada-ui/react'
import { InferGetStaticPropsType, NextPage } from 'next'
import { Section } from 'components/layouts'
import { SEO, Arrow, Github } from 'components/media-and-icons'
import { NextLinkButton } from 'components/navigation'
import { CONSTANT } from 'constant'
import { useI18n } from 'contexts/i18n-context'
import { PageProvider } from 'contexts/page-context'
import { TopLayout } from 'layouts/top-layout'
import { getStaticCommonProps } from 'utils/next'

type PageProps = InferGetStaticPropsType<typeof getStaticProps>
// type PageProps = InferGetStaticPropsType<typeof getServerSideProps>

const Page: NextPage<PageProps> = ({ docs, tree }) => {
  const { t, tc } = useI18n()

  return (
    <PageProvider value={{ docs, tree }}>
      <TopLayout>
        <SEO title={t('home.title')} description={t('home.description')} />

        <Section>
          <VStack alignItems='center'>
            <Heading
              as='h1'
              fontSize={{ base: '7xl', lg: '6xl', md: '5xl', sm: '4xl' }}
              fontFamily='heading'
              fontWeight='extrabold'
              textAlign='center'
            >
              {tc('home.hero.heading', (str) => (
                <Text as='span' color='primary'>
                  {str}
                </Text>
              ))}
            </Heading>

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
            <NextLinkButton
              size='xl'
              w={{ base: 'auto', md: 'full' }}
              rightIcon={<Arrow />}
              href='/docs/getting-started'
            >
              {tc('home.hero.started')}
            </NextLinkButton>

            <NextLinkButton
              size='xl'
              colorScheme='gray'
              w={{ base: 'auto', md: 'full' }}
              leftIcon={<Github />}
              href={CONSTANT.SNS.GITHUB.YAMADA_UI}
              isExternal
            >
              {tc('home.hero.github')}
            </NextLinkButton>
          </HStack>
        </Section>
      </TopLayout>
    </PageProvider>
  )
}

export default Page

export const getStaticProps = getStaticCommonProps
// export const getServerSideProps = getServerSideCommonProps
