"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SwissFranc as OriginalSwissFrancIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SwissFrancIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SwissFrancIcon = component(Icon)({
  as: OriginalSwissFrancIcon,
}) as Component<"svg", IconProps>
