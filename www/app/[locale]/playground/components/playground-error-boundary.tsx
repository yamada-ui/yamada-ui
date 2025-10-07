"use client"

import type { FC, PropsWithChildren } from "react"
import { ErrorBoundary } from "@/components/error-boundary"

interface PlaygroundErrorBoundaryProps extends PropsWithChildren {
  resetKey?: string
}

/**
 * Error boundary specifically for playground components
 * Provides consistent error handling across the playground
 */
export const PlaygroundErrorBoundary: FC<PlaygroundErrorBoundaryProps> = ({
  children,
  resetKey,
}) => {
  return (
    <ErrorBoundary resetKey={resetKey}>
      {children}
    </ErrorBoundary>
  )
}
