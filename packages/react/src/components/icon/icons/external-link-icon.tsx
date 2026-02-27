"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ExternalLink as OriginalExternalLinkIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ExternalLinkIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ExternalLinkIcon = component(Icon)({
  as: OriginalExternalLinkIcon,
}) as Component<"svg", IconProps>
