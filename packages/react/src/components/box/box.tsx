"use client"

import type { HTMLStyledProps } from "../../core"
import { styled } from "../../core"

export interface BoxProps extends HTMLStyledProps {}

/**
 * `Box` is the most abstract component on which all other components are built. By default, it renders a `div` element.
 *
 * @see https://yamada-ui.com/components/box
 */
export const Box = styled("div")
