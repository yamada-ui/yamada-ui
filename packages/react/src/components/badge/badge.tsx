"use client"

import type { HTMLStyledProps, ThemeProps } from "../../core"
import type { BadgeStyle } from "./badge.style"
import { createComponent } from "../../core"
import { badgeStyle } from "./badge.style"

export interface BadgeProps
  extends HTMLStyledProps<"span">,
    ThemeProps<BadgeStyle> {}

const {
  PropsContext: BadgePropsContext,
  usePropsContext: useBadgePropsContext,
  withContext,
} = createComponent<BadgeProps, BadgeStyle>("badge", badgeStyle)

export { BadgePropsContext, useBadgePropsContext }

/**
 * `Badge` is a component that emphasizes the status of an item to make it immediately recognizable.
 *
 * @see https://yamada-ui.com/components/badge
 */
export const Badge = withContext("span")()
