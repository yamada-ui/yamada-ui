"use client"

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

const {
  PropsContext: LoadingPropsContext,
  usePropsContext: useLoadingPropsContext,
  withContext,
} = createComponent<LoadingProps, LoadingStyle>("loading", loadingStyle)

export { LoadingPropsContext, useLoadingPropsContext, withContext }
