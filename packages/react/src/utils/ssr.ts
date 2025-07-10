"use client"

import { noop } from "@yamada-ui/utils"
import { useSyncExternalStore } from "react"

export function useSsr() {
  if (typeof useSyncExternalStore === "function")
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useSyncExternalStore(
      () => noop,
      () => false,
      () => true,
    )

  return false
}
