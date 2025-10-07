"use client"

import { useSearchParams } from "next/navigation"
import { useMemo } from "react"
import { decodeCode, DEFAULT_CODE } from "../utils"

/**
 * Hook to get the initial code from URL parameters or default code
 */
export const useCodeInitialization = () => {
  const searchParams = useSearchParams()

  const initialCode = useMemo(() => {
    const codeParam = searchParams.get("code")
    if (codeParam) {
      const decoded = decodeCode(codeParam)
      return decoded ?? DEFAULT_CODE
    }
    return DEFAULT_CODE
  }, [searchParams])

  return initialCode
}
