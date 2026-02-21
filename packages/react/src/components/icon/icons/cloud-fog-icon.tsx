"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CloudFog as OriginalCloudFogIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CloudFogIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CloudFogIcon = component(Icon)({
  as: OriginalCloudFogIcon,
}) as Component<"svg", IconProps>
