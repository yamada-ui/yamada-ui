"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FaceSlightlySmiling as OriginalFaceSlightlySmilingIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FaceSlightlySmilingIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FaceSlightlySmilingIcon = component(Icon)({
  as: OriginalFaceSlightlySmilingIcon,
}) as Component<"svg", IconProps>
