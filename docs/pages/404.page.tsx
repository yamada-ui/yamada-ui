import { Button, Text, VStack } from '@yamada-ui/react'
import { NextPageWithLayout } from 'next'

import Link from 'next/link'
import { SEO, Section } from 'components'
import { useI18n } from 'contexts'
import { TopLayout } from 'layouts'

type NotFoundPageProps = {}

const NotFoundPage: NextPageWithLayout<NotFoundPageProps> = ({}) => {
  const { tc } = useI18n()

  return (
    <>
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

        <Button as={Link} href='/' colorScheme='brand' size='lg'>
          {tc('not-found.back-to-home')}
        </Button>
      </Section>
    </>
  )
}

NotFoundPage.getLayout = (page) => <TopLayout>{page}</TopLayout>

export default NotFoundPage
