import type { GetServerSidePropsContext, NextPage } from 'next'
import { RangeSlider, Slider } from '@yamada-ui/react'
import { Layout } from 'components/layouts'

interface Props {}

const Page: NextPage<Props> = () => {
  return (
    <Layout>
      <RangeSlider />
      <Slider />
    </Layout>
  )
}

export default Page

export const getServerSideProps = ({ req }: GetServerSidePropsContext) => {
  return {
    props: {
      cookies: req.headers.cookie ?? '',
    },
  }
}
