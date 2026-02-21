"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { PcCase as OriginalPcCaseIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PcCaseIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PcCaseIcon = component(Icon)({
  as: OriginalPcCaseIcon,
}) as Component<"svg", IconProps>
