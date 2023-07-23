import { Button, HStack, Heading, Text, VStack } from '@yamada-ui/react'
import { NextPageWithLayout } from 'next'
import { Arrow, Github, Section } from '@/components'
import { useI18n } from '@/contexts'
import { TopLayout } from '@/layouts'

type PageProps = {}

const Page: NextPageWithLayout<PageProps> = ({}) => {
  const { i18n, t } = useI18n()

  return (
    <>
      <Section position='relative'>
        <VStack alignItems='center'>
          {i18n === 'en' ? (
            <Heading as='h1' size='4xl' textAlign='center'>
              <Text as='span' display='block'>
                <Text as='span' color='brand'>
                  Unleash the Power
                </Text>{' '}
                of
              </Text>
              Styling, Animation, and Flexibility
              <Text as='span' display='block'>
                in React Apps
              </Text>
            </Heading>
          ) : (
            <Heading as='h1' size='4xl' textAlign='center'>
              <Text as='span' display='block'>
                React Appsの
              </Text>
              スタイリング、アニメーション
              <Text as='span' display='block'>
                そして、柔軟性の
                <Text as='span' color='brand'>
                  力を解き放つ
                </Text>
              </Text>
            </Heading>
          )}

          <Text
            w='full'
            maxW='2xl'
            fontSize='xl'
            color={['blackAlpha.600', 'whiteAlpha.600']}
            textAlign='center'
          >
            {t('top.hero.description')}
          </Text>
        </VStack>

        <HStack justifyContent='center'>
          <Button size='xl' colorScheme='brand' rightIcon={<Arrow />}>
            {t('top.hero.started')}
          </Button>
          <Button size='xl' leftIcon={<Github />}>
            {t('top.hero.github')}
          </Button>
        </HStack>
      </Section>
    </>
  )
}

Page.getLayout = (page) => <TopLayout>{page}</TopLayout>

export default Page
