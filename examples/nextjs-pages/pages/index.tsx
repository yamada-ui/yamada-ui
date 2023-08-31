import { Header } from 'components'
import { GetServerSidePropsContext } from 'next'

export default () => {
  return (
    <>
      <Header />
    </>
  )
}

export const getServerSideProps = ({ req }: GetServerSidePropsContext) => {
  return {
    props: {
      cookies: req.headers.cookie ?? '',
    },
  }
}
