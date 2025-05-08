import { useSyncExternalStore } from "react"

function subscribe(callback: () => void) {
  window.addEventListener("online", callback)
  window.addEventListener("offline", callback)

  return () => {
    window.removeEventListener("online", callback)
    window.removeEventListener("offline", callback)
  }
}

function getSnapshot() {
  return window.navigator.onLine
}

export interface UseOnlineProps {}

export function useOnline(
  getServerSnapshot: () => boolean = () => true,
): boolean {
  const online = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  return online
}

export type UseOnlineReturn = ReturnType<typeof useOnline>
