"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Goal as OriginalGoalIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `GoalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const GoalIcon = component(Icon)({ as: OriginalGoalIcon }) as Component<
  "svg",
  IconProps
>
