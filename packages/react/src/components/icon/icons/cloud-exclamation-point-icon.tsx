"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CloudExclamationPoint as OriginalCloudExclamationPointIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CloudExclamationPointIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CloudExclamationPointIcon = component(Icon)({
  as: OriginalCloudExclamationPointIcon,
}) as Component<"svg", IconProps>
