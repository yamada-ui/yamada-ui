import { Button, Text, VStack } from '@yamada-ui/react'
import { InferGetStaticPropsType, NextPage } from 'next'
import Link from 'next/link'
import { Section } from 'components/layouts'
import { SEO } from 'components/media-and-icons'
import { useI18n } from 'contexts/i18n-context'
import { PageProvider } from 'contexts/page-context'
import { TopLayout } from 'layouts/top-layout'
import { getStaticCommonProps } from 'utils/next'

type PageProps = InferGetStaticPropsType<typeof getStaticProps>

const Page: NextPage<PageProps> = ({ docs, tree }) => {
  const { tc } = useI18n()

  return (
    <PageProvider value={{ docs, tree }}>
      <TopLayout>
        <SEO
          title={tc('not-found.title') as string}
          description={tc('not-found.description') as string}
        />

        <Section alignItems='center'>
          <VStack alignItems='center'>
            <Text
              as='h1'
              fontSize={{ base: '5xl', md: '3xl', sm: '2xl' }}
              fontFamily='heading'
              fontWeight='bold'
              textAlign='center'
            >
              {tc('not-found.heading')}
            </Text>

            <Text w='full' maxW='2xl' fontSize={{ base: 'xl', sm: 'lg' }} textAlign='center'>
              {tc('not-found.message')}
            </Text>
          </VStack>

          <Button as={Link} href='/' size='lg'>
            {tc('not-found.back-to-home')}
          </Button>
        </Section>
      </TopLayout>
    </PageProvider>
  )
}

export default Page

export const getStaticProps = getStaticCommonProps
