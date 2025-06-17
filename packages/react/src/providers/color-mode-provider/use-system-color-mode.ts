import type { ColorMode } from "../../core"
import { useEffect, useMemo, useState } from "react"
import { fnAll, useCallbackRef, useSafeLayoutEffect } from "../../utils"
import { useEnvironment } from "../environment-provider"
import { getColorModeUtils } from "./color-mode-utils"

export interface UseSystemColorModeProps {
  callback?: (colorMode: ColorMode) => void
  initialColorMode?: ColorMode
}

/**
 * `useSystemColorMode` is a custom hook that returns the current system color mode.
 */
export const useSystemColorMode = ({
  callback,
  initialColorMode,
}: UseSystemColorModeProps = {}) => {
  const environment = useEnvironment()
  const callbackRef = useCallbackRef(callback)
  const [colorMode, setColorMode] = useState<ColorMode | undefined>(
    initialColorMode,
  )

  const { getSystemColorMode, systemColorModeObserver } = useMemo(
    () => getColorModeUtils({ environment }),
    [environment],
  )

  useSafeLayoutEffect(() => {
    setColorMode(getSystemColorMode())
  }, [getSystemColorMode])

  useEffect(() => {
    return systemColorModeObserver(fnAll(setColorMode, callbackRef))
  }, [systemColorModeObserver, getSystemColorMode, callbackRef])

  return colorMode
}
