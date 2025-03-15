import type { ColorMode } from "../../core"
import type { Environment } from "../environment-provider"
import { useEffect, useMemo, useState } from "react"
import { fnAll, useCallbackRef, useSafeLayoutEffect } from "../../utils"
import { getColorModeUtils } from "./color-mode-utils"

export interface UseSystemColorModeProps {
  callback?: (colorMode: ColorMode) => void
  environment?: Environment
  initialColorMode?: ColorMode
}

/**
 * `useSystemColorMode` is a custom hook that returns the current system color mode.
 */
export const useSystemColorMode = ({
  callback,
  environment,
  initialColorMode,
}: UseSystemColorModeProps = {}) => {
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
