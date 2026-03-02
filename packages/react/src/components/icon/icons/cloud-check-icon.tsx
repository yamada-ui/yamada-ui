"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CloudCheck as OriginalCloudCheckIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CloudCheckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CloudCheckIcon = component(Icon)({
  as: OriginalCloudCheckIcon,
}) as Component<"svg", IconProps>
