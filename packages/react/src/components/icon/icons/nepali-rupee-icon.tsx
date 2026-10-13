"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { NepaliRupee as OriginalNepaliRupeeIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `NepaliRupeeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const NepaliRupeeIcon = component(Icon)({
  as: OriginalNepaliRupeeIcon,
}) as Component<"svg", IconProps>
