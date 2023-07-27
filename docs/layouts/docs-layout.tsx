import { FC, PropsWithChildren } from 'react'
import { AdBanner, Header } from 'components'

export const DocsLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <AdBanner />

      <Header />

      {children}
    </>
  )
}
