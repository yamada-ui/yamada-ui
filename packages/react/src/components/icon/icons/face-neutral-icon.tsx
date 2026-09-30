"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FaceNeutral as OriginalFaceNeutralIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FaceNeutralIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FaceNeutralIcon = component(Icon)({
  as: OriginalFaceNeutralIcon,
}) as Component<"svg", IconProps>
