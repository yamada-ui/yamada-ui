"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { LensConvex as OriginalLensConvexIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `LensConvexIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const LensConvexIcon = component(Icon)({
  as: OriginalLensConvexIcon,
}) as Component<"svg", IconProps>
