"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CloudSun as OriginalCloudSunIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CloudSunIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CloudSunIcon = component(Icon)({
  as: OriginalCloudSunIcon,
}) as Component<"svg", IconProps>
