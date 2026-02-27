"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Eye as OriginalEyeIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `EyeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const EyeIcon = component(Icon)({ as: OriginalEyeIcon }) as Component<
  "svg",
  IconProps
>
