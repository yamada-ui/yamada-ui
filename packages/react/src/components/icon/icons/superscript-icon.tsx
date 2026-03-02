"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Superscript as OriginalSuperscriptIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SuperscriptIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SuperscriptIcon = component(Icon)({
  as: OriginalSuperscriptIcon,
}) as Component<"svg", IconProps>
