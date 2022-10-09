import { Children, isValidElement, ReactElement, ReactNode } from 'react'

export const createdDom = (): boolean =>
  !!(typeof window !== 'undefined' && window.document && window.document.createElement)

export const getValidChildren = (children: ReactNode): ReactElement[] =>
  Children.toArray(children).filter((child) => isValidElement(child)) as ReactElement[]

export const cx = (...classNames: (string | undefined)[]) => classNames.filter(Boolean).join(' ')
