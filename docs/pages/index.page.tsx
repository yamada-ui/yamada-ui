import { NextPageWithLayout } from 'next'
import { TopLayout } from '@/layouts'

type PageProps = {}

const Page: NextPageWithLayout<PageProps> = ({}) => {
  return <></>
}

Page.getLayout = (page) => <TopLayout>{page}</TopLayout>

export default Page
