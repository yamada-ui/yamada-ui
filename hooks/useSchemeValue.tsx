import { useScheme } from 'hooks'

export const useSchemetValue = <L extends any, D extends any>(light: L, dark: D): L | D => {
  const { scheme } = useScheme()

  return scheme === 'light' ? light : dark
}
