"use client"

import type { HTMLStyledProps, ThemeProps } from "../../core"
import type { EmStyle } from "./em.style"
import { createComponent } from "../../core"
import { emStyle } from "./em.style"

export interface EmProps extends HTMLStyledProps<"em">, ThemeProps<EmStyle> {}

export const {
  PropsContext: EmPropsContext,
  usePropsContext: useEmPropsContext,
  withContext,
} = createComponent<EmProps, EmStyle>("em", emStyle)

/**
 * `Em` is a component that represents emphasized text. By default, it renders a `em` element.
 *
 * @see https://yamada-ui.com/components/em
 */
export const Em = withContext("em")()
