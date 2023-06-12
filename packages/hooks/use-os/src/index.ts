export type OS = 'undetermined' | 'macos' | 'ios' | 'windows' | 'android' | 'linux'

const getOS = (): OS => {
  const { userAgent } = window.navigator

  const macos = /(Macintosh)|(MacIntel)|(MacPPC)|(Mac68K)/i
  const windows = /(Win32)|(Win64)|(Windows)|(WinCE)/i
  const ios = /(iPhone)|(iPad)|(iPod)/i
  const android = /Android/i
  const linux = /Linux/i

  if (macos.test(userAgent)) return 'macos'
  if (ios.test(userAgent)) return 'ios'
  if (windows.test(userAgent)) return 'windows'
  if (android.test(userAgent)) return 'android'
  if (linux.test(userAgent)) return 'linux'

  return 'undetermined'
}

export const useOS = (): OS => {
  if (typeof window !== 'undefined') return getOS()

  return 'undetermined'
}
