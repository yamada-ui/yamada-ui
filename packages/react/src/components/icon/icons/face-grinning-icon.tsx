"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FaceGrinning as OriginalFaceGrinningIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FaceGrinningIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FaceGrinningIcon = component(Icon)({
  as: OriginalFaceGrinningIcon,
}) as Component<"svg", IconProps>
