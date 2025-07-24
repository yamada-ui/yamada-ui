"use client"

import type { Component, HTMLStyledProps, StyleValue } from "../../core"
import type { SkeletonProps } from "./skeleton"
import { mergeCSS, styled } from "../../core"
import { useValue } from "../../hooks/use-value"
import { Skeleton } from "./skeleton"

export interface SkeletonTextProps extends Omit<SkeletonProps, "lineClamp"> {
  /**
   * The number of lines to display.
   */
  lineClamp?: StyleValue<number>
  /**
   * Props for the root element.
   */
  rootProps?: HTMLStyledProps
}

export const SkeletonText = (({
  css,
  children,
  gap = "2",
  lineClamp: lineClampProp = 3,
  loading = true,
  _loading,
  _notFirst,
  rootProps,
  ...rest
}: SkeletonTextProps) => {
  const lineClamp = useValue(lineClampProp)

  return (
    <styled.div w="full" {...rootProps}>
      {Array.from({ length: lineClamp }).map((_, index) => {
        if (!loading && index > 0) return null

        return (
          <Skeleton
            key={index}
            css={mergeCSS(css, { "--height": "sizes.4" })}
            loading={loading}
            _loading={{
              _last: { maxW: lineClamp > 1 ? "80%" : "100%" },
              ..._loading,
            }}
            _notFirst={{ mt: gap, ..._notFirst }}
            {...rest}
          >
            {!loading && index === 0 ? children : undefined}
          </Skeleton>
        )
      })}
    </styled.div>
  )
}) as Component<"div", SkeletonTextProps>
