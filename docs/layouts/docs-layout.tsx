import { FC, PropsWithChildren } from 'react'
import { StarBanner, Header } from 'components'

export const DocsLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <StarBanner />

      <Header />

      {children}
    </>
  )
}
