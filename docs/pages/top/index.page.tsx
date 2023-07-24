import { NextPageWithLayout } from 'next'
import { Hero } from './hero'
import { TopLayout } from '@/layouts'

type PageProps = {}

const Page: NextPageWithLayout<PageProps> = ({}) => {
  return (
    <>
      <Hero />
    </>
  )
}

Page.getLayout = (page) => <TopLayout>{page}</TopLayout>

export default Page
