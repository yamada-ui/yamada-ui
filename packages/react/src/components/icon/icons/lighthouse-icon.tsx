"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Lighthouse as OriginalLighthouseIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `LighthouseIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const LighthouseIcon = component(Icon)({
  as: OriginalLighthouseIcon,
}) as Component<"svg", IconProps>
