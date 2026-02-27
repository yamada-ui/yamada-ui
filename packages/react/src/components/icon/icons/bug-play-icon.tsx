"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BugPlay as OriginalBugPlayIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BugPlayIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BugPlayIcon = component(Icon)({
  as: OriginalBugPlayIcon,
}) as Component<"svg", IconProps>
