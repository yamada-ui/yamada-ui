"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { PaintBucket as OriginalPaintBucketIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PaintBucketIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PaintBucketIcon = component(Icon)({
  as: OriginalPaintBucketIcon,
}) as Component<"svg", IconProps>
