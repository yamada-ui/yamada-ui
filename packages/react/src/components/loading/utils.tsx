"use client"

import type { ReactNode } from "react"
import type {
  CSSProps,
  InitialProps,
  ThemeProps,
  WithoutThemeProps,
} from "../../core"
import type { IconProps } from "../icon"
import type { LoadingStyle } from "./loading.style"
import { createComponent } from "../../core"
import { loadingStyle } from "./loading.style"

export type LoadingMethod = "background" | "page" | "screen"

export type LoadingScheme =
  | "audio"
  | "circles"
  | "dots"
  | "grid"
  | "oval"
  | "puff"
  | "rings"

export const initialProps: InitialProps<LoadingProps> = {
  "data-loading": "",
}

export const superProps = ({
  css,
  duration,
  dur = duration,
  ...rest
}: WithoutThemeProps<LoadingProps, LoadingStyle>): WithoutThemeProps<
  LoadingProps,
  LoadingStyle
> => ({
  css,
  dur,
  ...rest,
})

export interface LoadingProps
  extends WithoutThemeProps<IconProps>,
    ThemeProps<LoadingStyle> {
  /**
   * The CSS `dur` property.
   */
  duration?: IconProps["dur"]
  /**
   * The CSS `color` property.
   */
  secondaryColor?: CSSProps["color"]
}

export const {
  PropsContext: LoadingPropsContext,
  usePropsContext: useLoadingPropsContext,
  withContext,
} = createComponent<LoadingProps, LoadingStyle>("loading", loadingStyle)

export interface LoadingSharedProps {
  duration: null | number
  message: ReactNode | undefined
  onFinish: () => void
  initial?: boolean | string
}
