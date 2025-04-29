import type { HTMLStyledProps, ThemeProps } from "../../core"
import type { BadgeStyle } from "./badge.style"
import { createComponent } from "../../core"
import { badgeStyle } from "./badge.style"

export interface BadgeProps
  extends HTMLStyledProps<"span">,
    ThemeProps<BadgeStyle> {}

export const {
  PropsContext: BadgePropsContext,
  usePropsContext: useBadgePropsContext,
  withContext,
} = createComponent<BadgeProps, BadgeStyle>("badge", badgeStyle)

/**
 * `Badge` is a component that emphasizes the status of an item to make it immediately recognizable.
 *
 * @see https://yamada-ui.com/components/badge
 */
export const Badge = withContext("span")()
