import { useSafeLayoutEffect } from "@yamada-ui/utils"
import { useCallback, useState } from "react"

interface EyeDropperOptions {
  signal?: AbortSignal
}

export interface EyeDropperReturn {
  sRGBHex: string
}

export const useEyeDropper = () => {
  const [supported, setSupported] = useState(false)

  useSafeLayoutEffect(() => {
    setSupported(typeof window !== "undefined" && "EyeDropper" in window)
  }, [])

  const onOpen = useCallback(
    async (
      options: EyeDropperOptions = {},
    ): Promise<EyeDropperReturn | undefined> => {
      if (supported) {
        const eyeDropper = new (window as any).EyeDropper()

        return eyeDropper.open(options)
      }

      return Promise.resolve(undefined)
    },
    [supported],
  )

  return { supported, onOpen }
}
