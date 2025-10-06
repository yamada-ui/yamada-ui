"use client"

import type { FC, SuspenseProps as OriginalSuspenseProps } from "react"
import type { HTMLStyledProps, LoadingScheme } from "../../core"
import type { LoadingProps } from "./loading"
import { Suspense as OriginalSuspense } from "react"
import { styled } from "../../core"
import { useLoadingComponent } from "./use-loading-component"

export interface SuspenseProps extends HTMLStyledProps, OriginalSuspenseProps {
  /**
   * The loading scheme.
   */
  loadingScheme?: LoadingScheme
  /**
   * The loading props.
   */
  loadingProps?: LoadingProps
}

export const Suspense: FC<SuspenseProps> = ({
  name,
  children,
  fallback,
  loadingScheme = "oval",
  ...rest
}) => {
  const Component = useLoadingComponent(loadingScheme)

  return (
    <OriginalSuspense
      name={name}
      fallback={
        fallback ?? (
          <styled.div boxSize="full" display="center" fontSize="6xl" {...rest}>
            <Component fontSize="1em" />
          </styled.div>
        )
      }
    >
      {children}
    </OriginalSuspense>
  )
}
