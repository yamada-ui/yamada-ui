"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { WrenchOff as OriginalWrenchOffIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `WrenchOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const WrenchOffIcon = component(Icon)({
  as: OriginalWrenchOffIcon,
}) as Component<"svg", IconProps>
