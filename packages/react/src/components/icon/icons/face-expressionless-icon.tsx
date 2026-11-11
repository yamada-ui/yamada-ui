"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FaceExpressionless as OriginalFaceExpressionlessIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FaceExpressionlessIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FaceExpressionlessIcon = component(Icon)({
  as: OriginalFaceExpressionlessIcon,
}) as Component<"svg", IconProps>
