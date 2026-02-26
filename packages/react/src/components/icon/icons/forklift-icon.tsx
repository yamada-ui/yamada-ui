"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Forklift as OriginalForkliftIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ForkliftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ForkliftIcon = component(Icon)({
  as: OriginalForkliftIcon,
}) as Component<"svg", IconProps>
