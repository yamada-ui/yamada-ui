import { NextPageWithLayout } from 'next'
import { Hero } from './hero'
import { SEO } from '@/components'
import { useI18n } from '@/contexts'
import { TopLayout } from '@/layouts'

type PageProps = {}

const Page: NextPageWithLayout<PageProps> = ({}) => {
  const { t } = useI18n()

  return (
    <>
      <SEO title={t('home.title')} description={t('home.description')} />

      <Hero />
    </>
  )
}

Page.getLayout = (page) => <TopLayout>{page}</TopLayout>

export default Page
