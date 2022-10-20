export const createdDom = (): boolean =>
  !!(typeof window !== 'undefined' && window.document && window.document.createElement)
