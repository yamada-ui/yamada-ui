import { Layout } from 'components/layouts'
import { GetServerSidePropsContext, NextPage } from 'next'

type Props = {}

const Page: NextPage<Props> = () => {
  return <Layout></Layout>
}

export default Page

export const getServerSideProps = ({ req }: GetServerSidePropsContext) => {
  return {
    props: {
      cookies: req.headers.cookie ?? '',
    },
  }
}
