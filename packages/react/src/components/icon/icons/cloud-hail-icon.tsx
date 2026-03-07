"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CloudHail as OriginalCloudHailIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CloudHailIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CloudHailIcon = component(Icon)({
  as: OriginalCloudHailIcon,
}) as Component<"svg", IconProps>
