"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Signpost as OriginalSignpostIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SignpostIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SignpostIcon = component(Icon)({
  as: OriginalSignpostIcon,
}) as Component<"svg", IconProps>
