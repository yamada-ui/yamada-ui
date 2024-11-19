import type { FC } from 'react'
import { Layout } from 'components/layouts'
import Link from 'next/link'
import { Container } from '@yamada-ui/react'

const Page: FC = () => {
  return (
    <Container>
      <Link href='/'>Home</Link>
    </Container>
  )
}

export default Page
