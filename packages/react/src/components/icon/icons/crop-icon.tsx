"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Crop as OriginalCropIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CropIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CropIcon = component(Icon)({ as: OriginalCropIcon }) as Component<
  "svg",
  IconProps
>
