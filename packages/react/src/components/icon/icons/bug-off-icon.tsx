"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BugOff as OriginalBugOffIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BugOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BugOffIcon = component(Icon)({
  as: OriginalBugOffIcon,
}) as Component<"svg", IconProps>
