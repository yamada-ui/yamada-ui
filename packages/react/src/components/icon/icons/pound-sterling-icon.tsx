"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { PoundSterling as OriginalPoundSterlingIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PoundSterlingIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PoundSterlingIcon = component(Icon)({
  as: OriginalPoundSterlingIcon,
}) as Component<"svg", IconProps>
