export const createdDom = (): boolean =>
  !!(typeof window !== 'undefined' && window.document && window.document.createElement)

export const cx = (...classNames: (string | undefined)[]) => classNames.filter(Boolean).join(' ')
