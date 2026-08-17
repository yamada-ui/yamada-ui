"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FaceSlightlySmilingPlus as OriginalFaceSlightlySmilingPlusIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FaceSlightlySmilingPlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FaceSlightlySmilingPlusIcon = component(Icon)({
  as: OriginalFaceSlightlySmilingPlusIcon,
}) as Component<"svg", IconProps>
