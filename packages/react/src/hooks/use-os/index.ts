import { useEnvironment } from "../../core"
import { isUndefined } from "../../utils"

export type OS =
  | "android"
  | "chromeos"
  | "ios"
  | "linux"
  | "macos"
  | "undetermined"
  | "windows"

const getOS = ({ navigator: { userAgent } }: Window): OS => {
  const macos = /(Macintosh)|(MacIntel)|(MacPPC)|(Mac68K)/i
  const windows = /(Win32)|(Win64)|(Windows)|(WinCE)/i
  const ios = /(iPhone)|(iPad)|(iPod)/i
  const android = /Android/i
  const linux = /Linux/i
  const chromeos = /CrOS/i

  if (macos.test(userAgent)) return "macos"
  if (ios.test(userAgent)) return "ios"
  if (windows.test(userAgent)) return "windows"
  if (android.test(userAgent)) return "android"
  if (linux.test(userAgent)) return "linux"
  if (chromeos.test(userAgent)) return "chromeos"

  return "undetermined"
}

/**
 * `useOS` is a custom hook that returns the user's OS.
 *
 * @see https://yamada-ui.com/docs/hooks/use-os
 */
export const useOS = (): OS => {
  const { getWindow } = useEnvironment()
  const win = getWindow()

  if (!isUndefined(win)) return getOS(win)

  return "undetermined"
}
