"use client"

import type { HTMLStyledProps, ThemeProps } from "../../core"
import type { CenterStyle } from "./center.style"
import { createComponent } from "../../core"
import { centerStyle } from "./center.style"

export interface CenterProps extends HTMLStyledProps, ThemeProps<CenterStyle> {}

const {
  PropsContext: CenterPropsContext,
  usePropsContext: useCenterPropsContext,
  withContext,
} = createComponent<CenterProps, CenterStyle>("center", centerStyle)

export { CenterPropsContext, useCenterPropsContext }

/**
 * `Center` is a component that aligns the child elements in the center within the component.
 *
 * @see https://yamada-ui.com/docs/components/center
 */
export const Center = withContext("div", {
  base: {
    display: "flex",
    placeContent: "center",
    placeItems: "center",
  },
})()
