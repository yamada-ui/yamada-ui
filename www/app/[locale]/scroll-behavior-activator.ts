"use client"

import { useEffect } from "react"

export function ScrollBehaviorActivator() {
  useEffect(() => {
    requestAnimationFrame(() => {
      document.documentElement.style.scrollBehavior = "smooth"
    })

    return () => {
      document.documentElement.style.scrollBehavior = "auto"
    }
  }, [])

  return null
}
