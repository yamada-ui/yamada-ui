"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ToolCase as OriginalToolCaseIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ToolCaseIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ToolCaseIcon = component(Icon)({
  as: OriginalToolCaseIcon,
}) as Component<"svg", IconProps>
