import { NextPageWithLayout } from 'next'
import { DocsLayout } from '@/layouts'

type PageProps = {}

const Page: NextPageWithLayout<PageProps> = ({}) => {
  return <></>
}

Page.getLayout = (page) => <DocsLayout>{page}</DocsLayout>

export default Page
