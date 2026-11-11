"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FaceSlightlyFrowning as OriginalFaceSlightlyFrowningIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FaceSlightlyFrowningIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FaceSlightlyFrowningIcon = component(Icon)({
  as: OriginalFaceSlightlyFrowningIcon,
}) as Component<"svg", IconProps>
