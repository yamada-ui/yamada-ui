"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FaceAngry as OriginalFaceAngryIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FaceAngryIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FaceAngryIcon = component(Icon)({
  as: OriginalFaceAngryIcon,
}) as Component<"svg", IconProps>
