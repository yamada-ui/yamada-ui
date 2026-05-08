"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CctvOff as OriginalCctvOffIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CctvOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CctvOffIcon = component(Icon)({
  as: OriginalCctvOffIcon,
}) as Component<"svg", IconProps>
