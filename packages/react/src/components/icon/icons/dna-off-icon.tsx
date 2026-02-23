"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { DnaOff as OriginalDnaOffIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `DnaOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const DnaOffIcon = component(Icon)({
  as: OriginalDnaOffIcon,
}) as Component<"svg", IconProps>
