"use client"

import type { HTMLStyledProps, ThemeProps } from "../../core"
import type { HeadingStyle } from "./heading.style"
import { createComponent } from "../../core"
import { headingStyle } from "./heading.style"

export interface HeadingProps
  extends HTMLStyledProps<"h1">, ThemeProps<HeadingStyle> {}

const {
  PropsContext: HeadingPropsContext,
  usePropsContext: useHeadingPropsContext,
  withContext,
} = createComponent<HeadingProps, HeadingStyle>("heading", headingStyle)

export { HeadingPropsContext, useHeadingPropsContext }

/**
 * `Heading` is a component that represents section headings. By default, it renders an `h1` element.
 *
 * @see https://yamada-ui.com/docs/components/heading
 */
export const Heading = withContext("h1")()
