"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { UtilityPole as OriginalUtilityPoleIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `UtilityPoleIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const UtilityPoleIcon = component(Icon)({
  as: OriginalUtilityPoleIcon,
}) as Component<"svg", IconProps>
