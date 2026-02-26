"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Grip as OriginalGripIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `GripIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const GripIcon = component(Icon)({ as: OriginalGripIcon }) as Component<
  "svg",
  IconProps
>
