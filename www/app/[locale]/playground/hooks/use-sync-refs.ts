"use client"

import type { RefObject } from "react"
import { useCallback, useRef } from "react"

/**
 * Hook to manage synchronization between multiple refs
 * Useful for keeping multiple components in sync
 */
export const useSyncRefs = <T extends { [key: string]: any }>(
  refs: { [K in keyof T]: RefObject<T[K]> },
  syncCallback: (ref: T[keyof T], value: any) => void,
) => {
  const lastSyncedValue = useRef<{ [K in keyof T]: any }>(
    {} as { [K in keyof T]: any },
  )

  const resetSync = useCallback(() => {
    lastSyncedValue.current = {} as { [K in keyof T]: any }
  }, [])

  const syncRefs = useCallback(
    (newValue: any, key?: keyof T) => {
      if (key) {
        // Sync specific ref
        if (lastSyncedValue.current[key] !== newValue) {
          lastSyncedValue.current[key] = newValue
          const ref = refs[key].current
          if (ref) {
            syncCallback(ref, newValue)
          }
        }
      } else {
        // Sync all refs
        for (const refKey in refs) {
          if (lastSyncedValue.current[refKey] !== newValue) {
            lastSyncedValue.current[refKey] = newValue
            const ref = refs[refKey].current
            if (ref) {
              syncCallback(ref, newValue)
            }
          }
        }
      }
    },
    [refs, syncCallback],
  )

  return { resetSync, syncRefs }
}
