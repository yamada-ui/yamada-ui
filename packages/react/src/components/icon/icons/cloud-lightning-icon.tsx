"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CloudLightning as OriginalCloudLightningIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CloudLightningIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CloudLightningIcon = component(Icon)({
  as: OriginalCloudLightningIcon,
}) as Component<"svg", IconProps>
