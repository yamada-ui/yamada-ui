"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Accessibility as OriginalAccessibilityIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `AccessibilityIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const AccessibilityIcon = component(Icon)({
  as: OriginalAccessibilityIcon,
}) as Component<"svg", IconProps>
