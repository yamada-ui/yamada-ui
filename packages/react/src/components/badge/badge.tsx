import type { HTMLUIProps, ThemeProps } from "../../core"
import type { BadgeStyle } from "./badge.style"
import { createComponent } from "../../core"
import { badgeStyle } from "./badge.style"

export interface BadgeProps
  extends HTMLUIProps<"span">,
    ThemeProps<BadgeStyle> {}

export const {
  PropsContext: BadgePropsContext,
  usePropsContext: useBadgePropsContext,
  withContext,
} = createComponent<BadgeProps, BadgeStyle>("badge", badgeStyle)

/**
 * `Badge` is a component that emphasizes the status of an item to make it immediately recognizable.
 *
 * @see Docs https://yamada-ui.com/components/data-display/badge
 */
export const Badge = withContext("span")()
