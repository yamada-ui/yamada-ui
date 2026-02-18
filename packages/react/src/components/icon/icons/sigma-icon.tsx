"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Sigma as OriginalSigmaIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SigmaIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SigmaIcon = component(Icon)({
  as: OriginalSigmaIcon,
}) as Component<"svg", IconProps>
