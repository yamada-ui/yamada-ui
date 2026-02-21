"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Crown as OriginalCrownIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CrownIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CrownIcon = component(Icon)({
  as: OriginalCrownIcon,
}) as Component<"svg", IconProps>
