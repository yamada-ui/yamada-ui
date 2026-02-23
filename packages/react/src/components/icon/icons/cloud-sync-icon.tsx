"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CloudSync as OriginalCloudSyncIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CloudSyncIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CloudSyncIcon = component(Icon)({
  as: OriginalCloudSyncIcon,
}) as Component<"svg", IconProps>
