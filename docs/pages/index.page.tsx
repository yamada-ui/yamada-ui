import { Button, HStack, Heading, Text, VStack } from '@yamada-ui/react'
import { InferGetStaticPropsType, NextPage } from 'next'
import Link from 'next/link'
import { Section } from 'components/layouts'
import { SEO, Arrow, Github } from 'components/media-and-icons'
import { CONSTANT } from 'constant'
import { useConfigs } from 'contexts/configs-context'
import { useI18n } from 'contexts/i18n-context'
import { PageProvider } from 'contexts/page-context'
import { TopLayout } from 'layouts/top-layout'
import { getStaticCommonProps } from 'utils/next'

type PageProps = InferGetStaticPropsType<typeof getStaticProps>

const Page: NextPage<PageProps> = ({ docs, tree }) => {
  const { t, tc } = useI18n()
  const { colorScheme } = useConfigs()

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
                <Text as='span' color={`${colorScheme}.600`}>
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
            <Button
              as={Link}
              size='xl'
              w={{ base: 'auto', md: 'full' }}
              rightIcon={<Arrow />}
              href='/docs/getting-started'
            >
              {tc('home.hero.started')}
            </Button>

            <Button
              as='a'
              size='xl'
              colorScheme='gray'
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
    </PageProvider>
  )
}

export default Page

export const getStaticProps = getStaticCommonProps
