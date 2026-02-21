"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { NutOff as OriginalNutOffIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `NutOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const NutOffIcon = component(Icon)({
  as: OriginalNutOffIcon,
}) as Component<"svg", IconProps>
