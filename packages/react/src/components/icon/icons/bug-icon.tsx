"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Bug as OriginalBugIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BugIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BugIcon = component(Icon)({ as: OriginalBugIcon }) as Component<
  "svg",
  IconProps
>
