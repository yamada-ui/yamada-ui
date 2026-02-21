"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { EarthLock as OriginalEarthLockIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `EarthLockIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const EarthLockIcon = component(Icon)({
  as: OriginalEarthLockIcon,
}) as Component<"svg", IconProps>
